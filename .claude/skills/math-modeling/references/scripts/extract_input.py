#!/usr/bin/env python3
"""题目信息抽取：把 PDF / Word / Excel / txt / csv 转成一份 markdown 提取物。

用法：
    python extract_input.py <输入文件> -o <输出.md>

分派：
    .pdf   -> pdftotext -layout（缺 poppler 时退 pypdf）
    .docx  -> officecli view <f> text
    .xlsx  -> officecli view <f> text（输出 A1=值 行，保留稀疏单元格）
    .txt/.csv -> 直接读（utf-8，errors=replace）

空/乱码结果打印提示，供上层判断"可能是扫描版，需 OCR 或人工转录"。
不安装任何新依赖。
"""
import argparse
import shutil
import subprocess
import sys
from pathlib import Path


def run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")


def extract_pdf(path):
    if shutil.which("pdftotext"):
        r = run(["pdftotext", "-layout", str(path), "-"])
        return r.stdout if r.returncode == 0 else r.stderr
    try:
        import pypdf
        return "\n".join(p.extract_text() or "" for p in pypdf.PdfReader(str(path)).pages)
    except ImportError:
        return "ERROR: 缺 pdftotext(poppler) 且未装 pypdf，无法抽取 PDF"


def extract_docx(path):
    if not shutil.which("officecli"):
        return "ERROR: 缺 officecli，无法抽取 .docx/.xlsx（安装见 officecli skill）"
    return run(["officecli", "view", str(path), "text"]).stdout


def extract_xlsx(path):
    if not shutil.which("officecli"):
        return "ERROR: 缺 officecli，无法抽取 .xlsx（安装见 officecli skill）"
    return run(["officecli", "view", str(path), "text"]).stdout


def extract_txt(path):
    return path.read_text(encoding="utf-8", errors="replace")


HANDLERS = {".pdf": extract_pdf, ".docx": extract_docx, ".xlsx": extract_xlsx,
            ".txt": extract_txt, ".csv": extract_txt, ".md": extract_txt}


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("input", help="输入文件路径")
    ap.add_argument("-o", "--out", required=True, help="输出 markdown 路径")
    args = ap.parse_args()

    src = Path(args.input)
    handler = HANDLERS.get(src.suffix.lower())
    if handler is None:
        print(f"SKIP: 不支持 {src.suffix}（支持 pdf/docx/xlsx/txt/csv/md）")
        sys.exit(2)

    text = handler(src)
    Path(args.out).parent.mkdir(parents=True, exist_ok=True)
    Path(args.out).write_text(text, encoding="utf-8")

    n = len(text.splitlines())
    empty = not text.strip()  # 单行合法文档（如标题）不算空；无文本才算
    print(f"OK: {src.name} -> {args.out}（{n} 行）" + ("；内容为空，可能是扫描版，需 OCR 或人工转录" if empty else ""))


if __name__ == "__main__":
    main()
