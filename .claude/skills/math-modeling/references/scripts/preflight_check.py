#!/usr/bin/env python3
"""LaTeX 论文预检脚本 — 编译前拦截机械问题（Phase 5 使用）。

检查项:
  [L1] 残留占位符（【】/TODO/FIXME/占位/待补/这里插入 等）
  [L2] \\includegraphics 引用的图片文件不存在
  [L2] \\ref/\\cref/\\eqref 引用无对应 \\label
  [L2] 摘要区公式数量超上限（国赛 ≤2 / 美赛 ≤3，允许核心公式简写版）
  [L2] 中文行内半角标点（汉字,;:?!汉字）

用法:  python preflight_check.py main.tex [part_q1.tex ...]
退出码: 0 = 无问题；1 = 有问题（L1 阻止声称完成，L2 必须修复）
"""
import os
import re
import sys

if sys.stdout.encoding and sys.stdout.encoding.lower() not in ("utf-8", "utf8"):
    sys.stdout.reconfigure(encoding="utf-8")  # Windows 终端 GBK 会导致中文乱码

PLACEHOLDER = re.compile(r"【[^】]*】|TODO|FIXME|占位|待补|待插入|这里插入|placeholder", re.I)
GRAPHICS = re.compile(r"\\includegraphics(?:\[[^\]]*\])?\{([^}]+)\}")
LABEL = re.compile(r"\\label\{([^}]+)\}")
REF = re.compile(r"\\\w*ref\{([^}]+)\}")
MATH_DISPLAY = re.compile(r"\\\[|\\begin\{(equation|align|gather)\*?\}")
INLINE_DOLLAR = re.compile(r"(?<!\\)\$")  # 行内公式 $..$（排除转义 \$），成对计数
HALF_WIDTH_PUNCT = re.compile(r"[\u4e00-\u9fa5][,;:?!][\u4e00-\u9fa5]")
IMG_EXTS = (".pdf", ".png", ".jpg", ".jpeg", ".eps", ".svg")

# 摘要区识别：国赛模板的摘要节也用 \begin{abstract}（cumcmthesis.cls 重定义），
# 故按 \documentclass{cumcmthesis} 判国赛，否则按环境类型判。
ABSTRACT_BEGIN_MCM = re.compile(r"\\begin\{abstract\}")
ABSTRACT_END_MCM = re.compile(r"\\end\{abstract\}")
ABSTRACT_BEGIN_CUMCM = re.compile(r"\\section\*?\{摘要\}")
ABSTRACT_END_CUMCM = re.compile(r"\\section\*?\{")
DOCUMENTCLASS_CUMCM = re.compile(r"\\documentclass(?:\[[^\]]*\])?\{cumcmthesis\}")
ABSTRACT_FORMULA_LIMIT = {"cumcm": 2, "mcm": 3}
GRAPHICSPATH = re.compile(r"\\graphicspath\{((?:\{[^}]*\})+)\}")


def find_abstract_ranges(lines):
    """返回 (start, end, kind) 列表（0 基行号，end 不含）。kind: 'cumcm' | 'mcm'。"""
    is_cumcm_doc = any(DOCUMENTCLASS_CUMCM.search(line) for line in lines)
    ranges, start, kind = [], None, None
    for i, line in enumerate(lines):
        if start is None:
            if ABSTRACT_BEGIN_CUMCM.search(line):
                start, kind = i, "cumcm"
            elif ABSTRACT_BEGIN_MCM.search(line):
                start, kind = i, "cumcm" if is_cumcm_doc else "mcm"
        else:
            end_pat = ABSTRACT_END_CUMCM if kind == "cumcm" else ABSTRACT_END_MCM
            if end_pat.search(line):
                ranges.append((start, i, kind))
                start, kind = None, None
    if start is not None:
        ranges.append((start, len(lines), kind))
    return ranges


def get_graphicspaths(lines):
    """解析 \\graphicspath{{a}{b}} → [a, b]，相对 tex 文件目录。"""
    dirs = []
    for line in lines:
        m = GRAPHICSPATH.search(line)
        if m:
            dirs += re.findall(r"\{([^}]*)\}", m.group(1))
    return dirs


def check_file(path):
    try:
        with open(path, encoding="utf-8") as f:
            lines = f.readlines()
    except (OSError, UnicodeDecodeError) as e:
        print(f"{path}: 无法读取（{e}）")
        return 1

    base = os.path.dirname(os.path.abspath(path))
    issues = 0
    labels = set()
    refs = set()
    abs_ranges = find_abstract_ranges(lines)
    search_dirs = [base] + [os.path.join(base, d) for d in get_graphicspaths(lines)]

    for n, raw in enumerate(lines, 1):
        line = raw.rstrip("\n")
        if line.lstrip().startswith("%"):
            continue  # 纯注释行（模板说明里的"占位符"字样不算）

        m = PLACEHOLDER.search(line)
        if m:
            print(f"{path}:{n}: [L1] 残留占位符：{m.group(0)}")
            issues += 1

        for g in GRAPHICS.findall(line):
            img = g.strip()
            if img.startswith("/") or "://" in img:
                continue  # 绝对路径/URL，跳过
            found = False
            for d in search_dirs:
                for ext in ("", *IMG_EXTS):
                    if os.path.exists(os.path.join(d, img + ext)):
                        found = True
                        break
                if found:
                    break
            if not found:
                print(f"{path}:{n}: [L2] 图片文件不存在：{img}")
                issues += 1

        for r in REF.findall(line):
            refs.add(r)
        for lab in LABEL.findall(line):
            labels.add(lab)

        for m in HALF_WIDTH_PUNCT.finditer(line):
            print(f"{path}:{n}: [L2] 中文行内半角标点：…{m.group(0)}…（改用全角）")
            issues += 1

    # 摘要区公式数量：按赛别阈值（国赛 ≤2 / 美赛 ≤3），允许核心公式简写版
    for s, e, kind in abs_ranges:
        limit = ABSTRACT_FORMULA_LIMIT[kind]
        count = 0
        for raw in lines[s:e]:
            line = raw.rstrip("\n")
            if line.lstrip().startswith("%"):
                continue
            count += len(INLINE_DOLLAR.findall(line)) // 2  # $..$ 成对
            count += len(MATH_DISPLAY.findall(line))  # \[ / equation / align / gather
        if count > limit:
            print(f"{path}: 摘要区（{kind}）含 {count} 个公式，超过上限 {limit}（国赛 ≤2 / 美赛 ≤3），请精简为核心公式简写版")
            issues += 1

    for r in sorted(refs - labels):
        print(f"{path}: [L2] 引用无对应 label：\\ref{{{r}}}")
        issues += 1

    return issues


def main(argv):
    if not argv:
        print(__doc__)
        return 2
    total = sum(check_file(p) for p in argv)
    if total:
        print(f"\n共 {total} 个问题。L1（占位符）未清除前不得声称论文完成；L2 全部修复后再编译。")
        return 1
    print("预检通过：无占位符、无缺失图片、无悬空引用、摘要公式数量符合标准、标点规范。")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
