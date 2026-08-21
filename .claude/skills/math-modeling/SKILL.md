---
name: math-modeling
description: 数学建模全流程辅助——支持国赛(CUMCM)和美赛(MCM/ICM)。当用户提及数学建模、国赛、美赛、CUMCM、MCM/ICM，或给出数学建模竞赛题目时使用。在编写论文、分析模型、处理竞赛数据、生成可视化时也应考虑是否与此技能相关。
---

# 数学建模 Skill（国赛 + 美赛）

## 定位

教学辅助型 skill，不是论文代写工具。每个推荐含「是什么 → 为什么 → 怎么做」三段式，学习途径默认不写、用户提问时给。每个阶段交付前由 reviewer 子 agent（`references/agent-prompts/reviewer.md`）按 `references/checklists/quality-gates.md` 对应节审阅（Loop Engineering：生成→审阅→修改→再审）。绝不代用户做模型选择；文献宁少勿假；md 交付物公式用 Unicode（σ̂、≤），LaTeX 命令只进 .tex。

## 触发

自动检测关键词：国赛/CUMCM/全国大学生数学建模竞赛、美赛/MCM/ICM、数学建模/建模竞赛/数学建模论文、题目含建模问题描述（约束+目标+数据）、**传入题目文件**（提示先跑 Phase 0.5）。手动触发：`/math-modeling`。检测到后询问是否启用（国赛/美赛/通用）。

## 工作空间

激活后响应风格切换为学术化/结构化/教学式推进；四空间口令可用（见「四空间」）；存档与状态在 `.claude/math-modeling/`（checkpoint.json + archive/）。

## 阶段地图

**读法（强制）**：进入某 phase 前，主 agent 先 Read 对应模板全文再 spawn 子 agent；子 agent 按模板内「质量门来源」段自行 Read `references/checklists/quality-gates.md` 对应节逐条核对；完整任务清单/红线/质量门/交付物均在模板，本总纲不再展开。

| Phase | 做什么 | 子 agent 模板 | 核心门禁（2-3 条） | 交互门 | checkpoint 段 |
|---|---|---|---|---|---|
| 0 | 模式/技术栈/依赖/需求/项目目录确认 | agent-prompts/phase0-init.md | 模式已确认；目录已与用户确认（未确认不建目录） | — | phase/初始化摘要 |
| 0.5 | 题目文件一次性抽取为信息卡（**视觉识读为主**：转图直接看页；extract_input.py 抽精确数字，OCR 兜底） | agent-prompts/phase05-problem-info.md | 原文完整无删改；存疑项已处理并确认 | 用户核对信息卡 | problem_info |
| 1 | 拆解/假设/数据需求/硬约束逐字摘录/思考路径叙事 | agent-prompts/phase1-analysis.md | 思考路径四步齐全有转折点；硬约束逐字不转述 | 出口交互门（强制） | 子问题/假设/硬约束 |
| 2 | 2-3 方案对比（按"什么适合用什么"，教学参考 model-selection-guide.md 只给选项与 Why）/选定+数学表达/创新点陈述（组合/改良二分类） | agent-prompts/phase2-model-design.md | ≥2 方案且说 Why；创新点陈述已确认 | 方案前/后交互门 | 选定方案+创新点 |
| 3 | 按方案实现/冒烟先行/长任务拆片/每图一脚本/图注不进正文 | agent-prompts/phase3-implementation.md | 冒烟先行+硬约束逐条核对；tri_check 段写入 | 每片汇报（约 40min） | 结果摘要+tri_check |
| 4 | 必读清单（按赛区）/语言锁定/初稿（单人或多人分发） | agent-prompts/phase4-paper-writing.md | 必读完成+语言锁定；引用率 100% 无"创新点"字样 | 协作模式询问 | 章节完成度+图表清单 |
| 5 | 4 脚本机械门禁/三方核对/格式与完整性终检 | agent-prompts/phase5-final-verification.md | 4 脚本通过；tricheck 通过或 MANUAL 已人工复核 | — | 通过/不通过+问题清单 |

检查脚本（Phase 5）：`preflight_check.py`（L1/L2/L3+--log 页数/缺字形）、`citecheck.py`（引用机制统一+编号越界）、`combinecheck.py`（跨部件引用/label）、`tricheck.py`（三方核对，读 checkpoint 的 tri_check 段）。交回核对 `handback-check.py` 属组装空间步骤 0（组装前）。

## 四空间

- **打磨空间**（「进入打磨」）：只建议不改动；规则见 `references/polishing-space.md`
- **解释空间**（「讲解一下」）：大白话解释术语/公式，不改文件不推进；规则见 `references/explanation-space.md`
- **教学空间**（「进入教学」，或讲教学性内容时主 agent 主动询问「要不要进入教学空间？」）：交互式方法论教学（方案 Why/模型原理/检验意义），多轮问答可追问，不代做；规则见 `references/teaching-space.md`
- **组装空间**（「组装论文」）：多人模式收尾，结构拼接+编译、正文冻结；组装三依据=结构（paper-framework.md）+格式（checklists/contest-format.md）+骨架（cumcm2025_template.tex）；规则见 `references/assembly-space.md`
- 打磨与解释空间可在两个窗口同时开启，通过 `.claude/math-modeling/space-chat.md` 跨会话互通（规则见各空间文件）

## 红线

1. 绝不代用户做模型选择（创新点只建议不决定；论文不出现"创新点"字样）
2. 绝不引用虚假文献（宁少勿假）
3. 绝不跳过质量门 / 未经 reviewer 审阅不交付
4. 绝不跳过阶段出口交互门
5. 绝不把子 agent 完整日志带入主上下文
6. 绝不一次推进两个 Phase；绝不静默长任务（>30min 拆片+每片汇报）
7. 图表红线：无分析文字不放、正文引用率 100%、图编号由 LaTeX 管理（代码不硬编码）
8. 绝不在 md 交付物写 LaTeX 命令
9. AI 合规（国赛新规）自查只做检测与提示（AI 痕迹/声明匹配/人工核验），不代用户删改内容、不代记 AI 交互

## 依赖

核心：subagent-driven-development / dispatching-parallel-agents / verification-before-completion（缺失时按 phase0-init.md 报告格式提示）。外部：analyze-mcm-paper（/analyze-mcm-paper <论文路径>）、officecli/pdftotext/pypdf/pandas+xlrd（题目抽取，见 phase05 模板与 extract_input.py）、视觉识读（pdftoppm 转图直接看页，模型多模态；tesseract OCR 仅兜底）。

## 上下文压缩

主上下文 >70% 时：已完成阶段产出归档至 `.claude/math-modeling/archive/` → 主上下文只留 3-5 行摘要+关键决策点 → 用户关键选择原文保留 → 题目信息卡摘要保留 → 提示用户继续。规则已按 phase 加载，压缩只为归档产出，不为规则腾空间。

## AI 交互记录

由用户自行记录（AI 不主动收集、不代记）；用户提交记录时 AI 协助排版（国赛 AI 使用说明附录 / 美赛 Report on Use of AI）；Phase 5 提醒一次。

## 快速参考：国赛 vs 美赛

| 维度 | 国赛 | 美赛 |
|------|------|------|
| 语言/摘要 | 中文摘要+关键词（800-1000 字、单独一页） | 英文 Summary Sheet 250-350 词 |
| 算法描述 | 流程图+文字，伪代码附录 | Algorithm 环境可接受 |
| 引用 | GB/T 7714，≥8 篇 | 英文为主，15 篇左右 |
| 加分项 | 真实数据、政策建议 | Summary Sheet、跨场景泛化 |
| 页数 | 正文 ≤32 页（硬门禁，无论几问） | ≤25 页，Letter |
| 图表文字 | 全中文（坐标轴/图例/标题/刻度） | 英文 |

详细差异见 `references/contest-diff.md`。
