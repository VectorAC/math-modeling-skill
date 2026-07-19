# Math Modeling Skill（数学建模技能）

一个 Claude Code skill，用于辅助数学建模竞赛全流程，同时支持国赛（CUMCM）和美赛（MCM/ICM）。

## 安装

```bash
cd your-project
# 将 skill 复制到项目目录
cp -r .claude/skills/math-modeling .claude/skills/
```

或直接 clone 本仓库后，在 Claude Code 中使用 `/math-modeling` 触发。

## 依赖

本 skill 运行时需要以下技能/插件：

### 核心依赖（必须）
- `subagent-driven-development` — 派生子 agent 执行各阶段
- `dispatching-parallel-agents` — 并行任务调度
- `verification-before-completion` — 质量门控

### 推荐依赖
- `code-quality` plugin — 代码审查模板
- `requesting-code-review` — 论文审查
- `systematic-debugging` — 代码调试

在项目目录下用以下命令安装：
```bash
claude plugin install <name>@<source> --scope project
```

## 使用方法

1. 在 Claude Code 中输入 `/math-modeling`，或直接给出数学建模题目
2. 确认是否切换至数学建模工作空间
3. AI 将自动执行：初始化 → 需求确认 → 问题分析 → 模型设计 → 建模实现 → 论文写作 → 最终验证
4. 每个阶段由独立子 agent 执行，主 agent 只做调度和关键决策交互

## 比赛支持

- **国赛（CUMCM）** — 全国大学生数学建模竞赛
- **美赛（MCM/ICM）** — 美国大学生数学建模竞赛

自动检测比赛类型并切换评阅标准和格式规范。

## 文件结构

```
.claude/skills/math-modeling/
  SKILL.md                              # 核心技能文档
  references/
    contest-diff.md                     # 国赛 vs 美赛差异对照
    agent-prompts/                      # 子 agent 提示模板
      phase1-analysis.md
      phase2-model-design.md
      phase3-implementation.md
      phase4-paper-writing.md
      phase5-final-verification.md
      reviewer.md
    checklists/
      quality-gates.md                  # 各阶段质量门
      contest-format.md                 # 比赛格式检查
```

## 扩展

本 skill 的论文写作核心层可扩展用于：
- 课程论文 / 实验报告
- 文献综述
- 其他学术写作

## License

MIT
