#!/usr/bin/env python3
"""LaTeX 论文预检脚本 — 编译前拦截机械问题（Phase 5 使用）。

检查项:
  [L1] 残留占位符（【】/TODO/FIXME/占位/待补/这里插入 等）
  [L2] \\includegraphics 引用的图片文件不存在
  [L2] \\ref/\\cref/\\eqref 引用无对应 \\label
  [L2] 摘要区（abstract 环境或"摘要"章节）含公式
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
MATH_INLINE = re.compile(r"[^\\]\$")
MATH_DISPLAY = re.compile(r"\\\[\s|\\begin\{(equation|align|gather)\*?\}")
HALF_WIDTH_PUNCT = re.compile(r"[\u4e00-\u9fa5][,;:?!][\u4e00-\u9fa5]")
IMG_EXTS = (".pdf", ".png", ".jpg", ".jpeg", ".eps", ".svg")

ABSTRACT_BEGIN = re.compile(r"\\begin\{abstract\}|\\section\*?\{摘要\}")
ABSTRACT_END = re.compile(r"\\end\{abstract\}|\\section\*?\{")
GRAPHICSPATH = re.compile(r"\\graphicspath\{((?:\{[^}]*\})+)\}")


def find_abstract_ranges(lines):
    """返回 (start, end) 列表（0 基行号，end 不含）。"""
    ranges, start = [], None
    for i, line in enumerate(lines):
        if start is None and ABSTRACT_BEGIN.search(line):
            start = i
        elif start is not None and ABSTRACT_END.search(line):
            ranges.append((start, i))
            start = None
    if start is not None:
        ranges.append((start, len(lines)))
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

        if any(s <= n - 1 < e for s, e in abs_ranges):
            if MATH_INLINE.search(line) or MATH_DISPLAY.search(line):
                print(f"{path}:{n}: [L2] 摘要区含公式")
                issues += 1

        for m in HALF_WIDTH_PUNCT.finditer(line):
            print(f"{path}:{n}: [L2] 中文行内半角标点：…{m.group(0)}…（改用全角）")
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
    print("预检通过：无占位符、无缺失图片、无悬空引用、摘要无公式、标点规范。")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
