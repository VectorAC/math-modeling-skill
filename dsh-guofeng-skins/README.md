# dsh-guofeng-skins 🎋

DeepSeek Harness Web 界面国漫皮肤包：**剑来 / 沧元图 / 斩神 / 不良人 / 吞噬星空 / 二次元星空** 六套深色主题。

每套皮肤 = 原生 token 全配色 + **实时渲染的动态壁纸**（canvas 场景：星空皮肤带银河带/星云/亮星衍射芒/底部剪影/流星，水墨皮肤带纹理山峦/雾气/墨晕/印章，全部会缓慢漂移闪烁）+ 毛玻璃面板（透明度可拖滑块自调），内置皮肤切换器随时对比，支持上传自定义壁纸（自动 Ken Burns 推拉模拟动态壁纸），带墨滴/星光特效与发送涟漪。

## 安装

```bash
# 在仓库父目录（dsh-guofeng-skins 的上一级）执行
dsh plugin --profile web add ./dsh-guofeng-skins
```

重启 `dsh web`（或桌面客户端），打开 **设置 → 通用 → 国风皮肤** 即可切换。右下角 🎋 悬浮按钮可随时换皮肤、传壁纸、调面板透明度/遮罩、开关粒子。

## 六套皮肤

| 皮肤 | 底色 | 身份色 | 动态壁纸场景 | 特效 |
|---|---|---|---|---|
| 剑来 | `#17161a` | 竹青 `#5f8d6e` · 朱砂 `#b03a2e` · 鎏金 `#c9a227` | 水墨山峦 + 雾带 + 墨晕 + 印章 | 墨滴 + 光尘 |
| 沧元图 | `#0e1326` | 群青 `#2b4a8f` · 灵光青白 `#9fd8ff` | 水墨山峦 + 雾带 + 墨晕 + 印章 | 墨滴 + 光尘 |
| 斩神 | `#0d0d13` | 幽蓝封印 `#3b5b8f` · 血红 `#a12622` | 水墨山峦 + 雾带 + 墨晕 + 印章 | 墨滴 + 光尘 |
| 不良人 | `#15151a` | 绯红 `#a63a3a` · 鎏金 `#c9a227` · 暗青 `#45607a` | 水墨山峦 + 雾带 + 墨晕 + 印章 | 墨滴 + 光尘 |
| 吞噬星空 | `#05070f` | 能量蓝 `#3f7fff` · 霓虹紫 `#8a5cff` | 水墨山峦 + 雾带 + 墨晕 + 印章 | 墨滴 + 光尘 |
| 二次元星空 | `#0a0e1a` | 星紫 `#7b6cf6` · 星青 `#5ec8ff` · 星光金 `#ffd86b` | 银河带 + 星云 + 亮星衍射芒 + 底部剪影 | 流星 + 光尘 |

## 功能

- **面板透明度滑块**：悬浮面板把面板拖透明（15%-100%），壁纸清晰透出；遮罩滑块压暗提升文字可读性
- **Ken Burns**：上传的静态壁纸自动慢速推拉（40s 周期、幅度 5%），观感接近动态壁纸
- **特效引擎**：国漫皮肤墨滴+光尘；星空皮肤星星呼吸闪烁+流星划落（`prefers-reduced-motion` 自动降级为静态帧）
- 皮肤选择 localStorage + cookie 双写，桌面客户端随机端口也不丢

## 开发

```bash
npm run generate   # palette/*.json → 全 token 映射 + 壁纸 SVG → lib/client.js
npm run check      # 结构校验（token 名 / 颜色格式 / 皮肤齐全）
```

调色板改 `palette/<id>.json` 的锚点色即可，改完**必须 `npm run generate`**（服务端读的是生成物 `lib/client.js`），刷新页面生效（安装是链接方式，无需重装）。

## 结构

```
├── lib/client.tpl.js   # 浏览器端模板（皮肤注册 / 壁纸毛玻璃 / 粒子 / 涟漪 / 悬浮面板）
├── scripts/gen.mjs     # 生成管线（token 映射 + 壁纸 SVG 生成器）
├── scripts/check.mjs   # 结构校验
├── palette/*.json      # 五套皮肤锚点色
└── themes/*.json       # 生成的完整 token 表（可看可分享）
```

## 技术说明

- 主题走官方 ThemeRuntime（`ctx.theme.register`），tokens 钉在 DSH rc.7 实测清单（`design-platform.css`）
- 玻璃 alpha 直接烘焙进皮肤 token，壁纸模块只负责图层——没壁纸时毛玻璃依然成立
- 皮肤选择 localStorage + cookie 双写（桌面客户端随机端口时 cookie 兜底）
- 卸载：`dsh plugin --profile web remove dsh-guofeng-skins`

## License

MIT
