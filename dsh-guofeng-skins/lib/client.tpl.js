// dsh-guofeng-skins — browser half (client plugin bundle). GENERATED FILE:
// run `node scripts/gen.mjs` to regenerate from lib/client.tpl.js.
//
// Loaded by dsh-client-modules at /plugins/dsh-guofeng-skins/client.js and
// executed through the vendored cordis Loader's lazy-CJS module table
// (window.__ModuleLoader__.load). The registered id MUST be the package name
// ("dsh-guofeng-skins"): client-modules keys its boot-graph rows by the
// loader entry's package name and verifies the bundle registers exactly that
// id. The factory body is plain CJS with require() resolved against the
// shell's module table.
//
// Structure modeled on dsh-dracula-theme (MIT, ossFrankFrank) and
// dsh-wallpaper (chinaRXQ) — thanks.
window.__ModuleLoader__.load({
	id: "dsh-guofeng-skins",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let _runtime_client = require("@deepseek-ai/dsh-client-runtime/client");

		//#region definitions
		/** The settings row's locale namespace. */
		const SETTINGS_NS = "settings.guofeng";
		/** localStorage key holding the selected skin id. */
		const STORAGE_KEY = "dsh-guofeng:skin";
		/** localStorage key holding the wallpaper configuration. */
		const WALLPAPER_KEY = "dsh-guofeng:wallpaper";
		/** Sentinel meaning "no custom theme — follow the built-in appearance". */
		const DEFAULT_SKIN = "system";

		/**
		 * The skin catalog, generated from palette/*.json. Each entry is a
		 * third-party theme for the built-in ThemeRuntime: an id, the base
		 * palette it builds on (colorScheme drives body[data-ds-dark-theme]),
		 * and --dsw-alias-* / --dsw-specific-* / --shiki-* overrides applied
		 * as inline custom properties on <body> by ui-layout's
		 * ThemePresenter, plus the underlying --dsw-static-* ramps. Glass
		 * alpha is baked into the surface tokens. Values are concrete CSS
		 * colors (no var() indirection).
		 */
		const SKINS = [
__SKINS__
		];

		/** Built-in ink-wash wallpaper per skin (data URLs, generated). */
		const WALLPAPERS = {
__WALLPAPERS__
		};

		/** Particle ink colors per skin. */
		const INK = {
__INK__
		};

		/** Simplified Chinese dictionary (the key-set source of truth). */
		const zh = {
			"skin.title": "国风皮肤",
			"skin.default": "默认",
			"skin.jianlai": "剑来",
			"skin.cangyuantu": "沧元图",
			"skin.zhanshen": "斩神",
			"skin.buliangren": "不良人",
			"skin.tunshixingkong": "吞噬星空"
		};

		/** English dictionary, checked complete against the zh key set. */
		const en = {
			"skin.title": "Guofeng skins",
			"skin.default": "Default",
			"skin.jianlai": "Jianlai",
			"skin.cangyuantu": "Cangyuan Tu",
			"skin.zhanshen": "Zhan Shen",
			"skin.buliangren": "Bu Liang Ren",
			"skin.tunshixingkong": "Tunshi Xingkong"
		};

		/** A guofeng skin id → name lookup. */
		const SKIN_BY_ID = Object.fromEntries(SKINS.map((s) => [s.id, s]));
		//#endregion

		//#region persistence
		/** Read a localStorage string value (null on absence or error). */
		function readStorage(key) {
			try {
				const value = window.localStorage.getItem(key);
				return typeof value === "string" ? value : null;
			} catch {
				return null;
			}
		}

		/** Write (or remove with null) a localStorage value. */
		function writeStorage(key, value) {
			try {
				if (value === null) window.localStorage.removeItem(key);
				else window.localStorage.setItem(key, value);
			} catch {
				// storage unavailable / quota — the preference stays process-local
			}
		}

		/**
		 * The DSH Desktop client boots its web app on a fresh random port
		 * every launch (`--port 0`), and localStorage is scoped per origin —
		 * including the port. Cookies are scoped per host and ignore the port,
		 * and the desktop client keeps a persistent cookie jar. So the saved
		 * skin is mirrored into a host-scoped cookie; reads prefer the cookie
		 * and fall back to localStorage.
		 */
		const COOKIE_KEY = "dsh-guofeng-skin";
		const COOKIE_MAX_AGE = 60 * 60 * 24 * 400;

		/** Read a cookie value (null on absence). */
		function readCookie(name) {
			try {
				const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^;]*)`));
				return match ? decodeURIComponent(match[1]) : null;
			} catch {
				return null;
			}
		}

		/** Write (or remove with max-age=0) a cookie. */
		function writeCookie(name, value) {
			try {
				if (value === null) document.cookie = `${name}=; path=/; max-age=0`;
				else document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE}`;
			} catch {
				// storage unavailable — the preference stays process-local
			}
		}

		/** Saved skin id (may be unknown/absent): cookie first, localStorage fallback. */
		function readSavedSkin() {
			return readCookie(COOKIE_KEY) ?? readStorage(STORAGE_KEY);
		}

		/** Persist a skin choice; DEFAULT_SKIN clears the stored value. */
		function writeSavedSkin(id) {
			writeCookie(COOKIE_KEY, id === DEFAULT_SKIN ? null : id);
			writeStorage(STORAGE_KEY, id === DEFAULT_SKIN ? null : id);
		}

		/** Wallpaper config: {src, mask, particles}. */
		function readWallpaperConfig() {
			try {
				const raw = readStorage(WALLPAPER_KEY);
				if (!raw) return null;
				const parsed = JSON.parse(raw);
				return {
					src: typeof parsed.src === "string" ? parsed.src : null,
					mask: typeof parsed.mask === "number" ? Math.max(0, Math.min(0.75, parsed.mask)) : 0,
					particles: typeof parsed.particles === "boolean" ? parsed.particles : true
				};
			} catch {
				return null;
			}
		}

		function writeWallpaperConfig(cfg) {
			try {
				window.localStorage.setItem(WALLPAPER_KEY, JSON.stringify(cfg));
			} catch {
				// quota exceeded — the wallpaper stays process-local
			}
		}
		//#endregion

		//#region settings row store
		/**
		 * Skin row slot store: a mirror of the theme service snapshot. The
		 * plugin's apply-world change listener is the only writer; the row
		 * component reads via props.useStore.
		 */
		function createSkinStore() {
			return (0, _runtime_client.defineStore)({
				init: () => ({
					skin: DEFAULT_SKIN,
					revision: -1
				}),
				actions: {
					sync: (d, skin, revision) => {
						if (revision <= d.revision) return;
						d.skin = skin;
						d.revision = revision;
					}
				}
			});
		}
		//#endregion

		//#region settings row
		/** Inline style sheet for the row (kept dependency-free). */
		const styles = {
			group: {
				borderBottom: "1px solid var(--dsw-alias-border-l2)",
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				padding: "16px 0"
			},
			title: {
				color: "var(--dsw-alias-label-primary)",
				fontSize: "14px",
				fontWeight: 400,
				lineHeight: "22px"
			},
			grid: {
				display: "flex",
				flexWrap: "wrap",
				gap: "10px"
			},
			card: {
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "6px",
				width: "96px",
				padding: "3px",
				borderRadius: "10px",
				// longhand on purpose: the shorthand leaves borderColor to
				// fall back to currentColor once React clears the selected
				// override, painting stale black/white boxes on deselect
				borderWidth: "2px",
				borderStyle: "solid",
				borderColor: "transparent",
				background: "transparent",
				cursor: "pointer",
				font: "inherit",
				boxSizing: "border-box"
			},
			cardSelected: {
				borderColor: "var(--dsw-alias-brand-primary)",
				background: "var(--dsw-alias-interactive-bg-hover)"
			},
			cardLabel: {
				color: "var(--dsw-alias-label-secondary)",
				fontSize: "12px",
				lineHeight: "16px",
				whiteSpace: "nowrap"
			},
			cardLabelSelected: {
				color: "var(--dsw-alias-label-primary)"
			},
			swatch: {
				width: "100%",
				height: "52px",
				borderRadius: "8px",
				boxSizing: "border-box",
				padding: "8px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				gap: "6px"
			},
			swatchLine: {
				height: "7px",
				borderRadius: "4px"
			},
			defaultSwatch: {
				width: "100%",
				height: "52px",
				borderRadius: "8px",
				boxSizing: "border-box",
				display: "flex",
				overflow: "hidden",
				border: "1px solid var(--dsw-alias-border-l2)"
			}
		};

		/** Mini palette preview driven by one skin's token table. */
		function Swatch({ tokens }) {
			return (0, react_jsx_runtime.jsxs)("div", {
				style: {
					...styles.swatch,
					background: tokens["--dsw-alias-bg-layer-2"],
					border: `1px solid ${tokens["--dsw-alias-border-l2"]}`
				},
				children: [
					(0, react_jsx_runtime.jsx)("div", {
						style: {
							...styles.swatchLine,
							width: "70%",
							background: tokens["--dsw-alias-label-primary"]
						}
					}),
					(0, react_jsx_runtime.jsx)("div", {
						style: {
							...styles.swatchLine,
							width: "45%",
							background: tokens["--dsw-alias-brand-primary"]
						}
					}),
					(0, react_jsx_runtime.jsx)("div", {
						style: {
							...styles.swatchLine,
							width: "55%",
							background: tokens["--dsw-alias-label-secondary"],
							opacity: 0.55
						}
					})
				]
			});
		}

		/** "Default" chip: follow the built-in appearance (light + dark halves). */
		function DefaultSwatch() {
			return (0, react_jsx_runtime.jsxs)("div", {
				style: styles.defaultSwatch,
				children: [
					(0, react_jsx_runtime.jsx)("div", { style: { flex: 1, background: "#f4f4f5" } }),
					(0, react_jsx_runtime.jsx)("div", { style: { flex: 1, background: "#1c1c20" } })
				]
			});
		}

		/** One selectable skin card. */
		function SkinCard({ skin, selected, onSelect, t }) {
			return (0, react_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: (event) => {
					onSelect();
					// drop focus so a stale focus ring never outlives the selection
					event.currentTarget.blur();
				},
				"aria-pressed": selected,
				style: {
					...styles.card,
					...(selected ? styles.cardSelected : {})
				},
				children: [
					(0, react_jsx_runtime.jsx)(Swatch, { tokens: skin.tokens }),
					(0, react_jsx_runtime.jsx)("span", {
						style: {
							...styles.cardLabel,
							...(selected ? styles.cardLabelSelected : {})
						},
						children: t(`skin.${skin.id}`)
					})
				]
			});
		}

		/**
		 * Skin picker row registered into the Settings → General item slot,
		 * right after the built-in Appearance row: title + a "Default" chip
		 * and one swatch card per guofeng skin.
		 */
		function SkinRow({ t, setSkin, useStore }) {
			const skin = useStore((s) => s.skin);
			const selected = SKINS.some((candidate) => candidate.id === skin) ? skin : null;
			return (0, react_jsx_runtime.jsxs)("div", {
				style: styles.group,
				children: [
					(0, react_jsx_runtime.jsx)("div", {
						style: styles.title,
						children: t("skin.title")
					}),
					(0, react_jsx_runtime.jsxs)("div", {
						style: styles.grid,
						children: [
							(0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: (event) => {
									setSkin(DEFAULT_SKIN);
									event.currentTarget.blur();
								},
								"aria-pressed": selected === null,
								style: {
									...styles.card,
									...(selected === null ? styles.cardSelected : {})
								},
								children: [
									(0, react_jsx_runtime.jsx)(DefaultSwatch, {}),
									(0, react_jsx_runtime.jsx)("span", {
										style: {
											...styles.cardLabel,
											...(selected === null ? styles.cardLabelSelected : {})
										},
										children: t("skin.default")
									})
								]
							}),
							SKINS.map((skinDefinition) => (0, react_jsx_runtime.jsx)(SkinCard, {
								skin: skinDefinition,
								selected: selected === skinDefinition.id,
								onSelect: () => setSkin(skinDefinition.id),
								t
							}, skinDefinition.id))
						]
					})
				]
			});
		}
		//#endregion

		//#region surface polish CSS
		/**
		 * Brand details + readability polish, scoped under html.dsh-gf-on
		 * (active only while one of our skins is selected). Every selector
		 * competing with shipped ui-* module styles is boosted with
		 * :not(#dsh-guofeng-skins): the ui-* stylesheets are injected by
		 * React after ours, so a plain attribute selector loses to the
		 * equally specific module class. The :not(id) pseudo is a no-op
		 * predicate that only raises specificity (1,1,0).
		 */
		const boost = (selector) =>
			selector.split(",").map((part) => `${part.trim()}:not(#dsh-guofeng-skins)`).join(",");
		const SURFACE_RULES = [
			// whale logo + wordmark recolor per skin
			[boost("[class$=\"_logoRow\"] svg"), "  color: var(--dsw-alias-brand-primary); transition: color 0.3s ease;"],
			// user-message bubbles carry the brand tint
			[boost("[class$=\"_userStack\"] [class$=\"_bubble\"]"), "  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 30%, var(--dsw-alias-bg-layer-2));"],
			// message reference chips lose the hardcoded deepseek blue
			[boost("[class$=\"_refChip\"]"), "  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 22%, transparent);"],
			// reasoning text reads in the brand secondary color
			[boost("[class$=\"_thinkBody\"]"), "  color: var(--dsw-alias-brand-text);"],
			// code blocks: rounded border + brand accent bar
			[boost("[class*=\"_codeBlock\"]"), "  border: 1px solid var(--dsw-alias-border-l2); border-radius: 12px; overflow: hidden; box-shadow: inset 3px 0 0 var(--dsw-alias-brand-primary);"],
			// glass blur on sidebar + composer so the wallpaper visibly blurs behind panels
			[boost("[class$=\"_sidebarCol\"]"), "  -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px);"],
			[boost("[class$=\"_composerCol\"]"), "  -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px);"]
		].map(([selector, body]) => `${selector} {\n${body}\n}`).join("\n");
		//#endregion

		//#region plugin chrome CSS (wallpaper layers, ripple, floating panel)
		/**
		 * Static stylesheet injected once. Layer visibility follows
		 * html.dsh-gf-on (a guofeng skin is active). The wallpaper image,
		 * dim mask and ink canvas sit under #root (z-index 0); #root is
		 * raised to z-index 1. Glass alpha lives in the skin tokens, so no
		 * token rewriting is needed here.
		 */
		const CHROME_CSS = `
/* ===== layers ===== */
html.dsh-gf-on { background: var(--dsw-alias-bg-base); }
html.dsh-gf-on #root { position: relative; z-index: 1; }
#dsh-gf-wallpaper {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  width: 100%; height: 100%; object-fit: cover; object-position: center;
  opacity: 1; display: none; transition: opacity 0.3s ease;
}
#dsh-gf-mask {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background: rgba(0, 0, 0, var(--dsh-gf-mask, 0));
}
#dsh-gf-ink {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  display: none;
}
html.dsh-gf-on #dsh-gf-wallpaper { display: block; }
html.dsh-gf-on #dsh-gf-ink { display: block; }
/* ===== send ripple ===== */
.dsh-gf-ripple {
  position: absolute; border-radius: 50%; pointer-events: none;
  background: var(--dsw-alias-brand-primary);
  transform: translate(-50%, -50%) scale(0);
  opacity: 0.5;
  animation: dsh-gf-ripple 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
@keyframes dsh-gf-ripple {
  to { transform: translate(-50%, -50%) scale(1); opacity: 0; }
}
.dsh-gf-send { position: relative; overflow: hidden; }
.dsh-gf-send:active { transform: scale(0.94); }
.dsh-gf-send { transition: transform 0.12s cubic-bezier(0.22, 1, 0.36, 1); }
/* ===== floating hub button + panel (Apple-glass) ===== */
#dsh-gf-toggle {
  position: fixed; right: 14px; bottom: 14px; z-index: 2147483001;
  width: 44px; height: 44px; border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(30, 30, 32, 0.55); color: #f2f2f7; font-size: 16px;
  line-height: 1; cursor: pointer;
  -webkit-backdrop-filter: blur(20px) saturate(180%); backdrop-filter: blur(20px) saturate(180%);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), inset 0 0.5px 0 rgba(255, 255, 255, 0.12);
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.18s cubic-bezier(0.22, 1, 0.36, 1), background 0.18s ease;
}
#dsh-gf-toggle:hover { transform: scale(1.06); }
#dsh-gf-toggle:active { transform: scale(0.96); }
#dsh-gf-panel {
  position: fixed; right: 14px; bottom: 68px; z-index: 2147483002;
  width: 316px; box-sizing: border-box; border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(30, 30, 32, 0.55); color: #f2f2f7;
  font: 13px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  letter-spacing: -0.01em;
  -webkit-backdrop-filter: blur(28px) saturate(180%); backdrop-filter: blur(28px) saturate(180%);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22), inset 0 0.5px 0 rgba(255, 255, 255, 0.12);
  padding: 16px 18px; display: none; flex-direction: column; gap: 12px;
}
#dsh-gf-panel.dsh-open { display: flex; }
#dsh-gf-panel .dsh-head {
  display: flex; align-items: center; justify-content: space-between;
  font-size: 15px; font-weight: 600; letter-spacing: -0.02em;
}
#dsh-gf-panel .dsh-close {
  background: none; border: none; color: #98989d; font-size: 15px;
  line-height: 1; cursor: pointer; width: 44px; height: 44px;
  margin: -8px -10px -8px 0; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.15s ease;
}
#dsh-gf-panel .dsh-close:hover { background: rgba(255, 255, 255, 0.12); color: #f2f2f7; }
#dsh-gf-panel .dsh-skins { display: flex; flex-wrap: wrap; gap: 8px; }
#dsh-gf-panel .dsh-skin-chip {
  flex: 1 1 88px; border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 10px; background: rgba(255, 255, 255, 0.08);
  color: #f2f2f7; font: 500 12px/1 inherit; padding: 8px 6px;
  cursor: pointer; transition: background 0.15s ease, border-color 0.15s ease;
}
#dsh-gf-panel .dsh-skin-chip:hover { background: rgba(255, 255, 255, 0.16); }
#dsh-gf-panel .dsh-skin-chip.dsh-active {
  border-color: var(--dsw-alias-brand-primary, #0a84ff);
  background: rgba(10, 132, 255, 0.2);
}
#dsh-gf-panel .dsh-row { display: flex; flex-direction: column; gap: 6px; }
#dsh-gf-panel .dsh-label {
  display: flex; justify-content: space-between; align-items: baseline;
  color: #98989d; font-size: 12px; font-weight: 500;
}
#dsh-gf-panel .dsh-label b { color: #f2f2f7; font-weight: 600; font-variant-numeric: tabular-nums; }
#dsh-gf-panel input[type="range"] { -webkit-appearance: none; appearance: none; width: 100%; height: 24px; background: transparent; cursor: pointer; }
#dsh-gf-panel input[type="range"]::-webkit-slider-runnable-track { height: 4px; border-radius: 2px; background: rgba(255, 255, 255, 0.22); }
#dsh-gf-panel input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 20px; height: 20px; margin-top: -8px;
  border-radius: 50%; border: none; background: #fff;
  box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.2);
}
#dsh-gf-panel input[type="file"] { font: 12px/1.4 inherit; color: #98989d; }
#dsh-gf-panel input[type="file"]::file-selector-button {
  margin-right: 10px; border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px; background: rgba(255, 255, 255, 0.08);
  color: #0a84ff; font: 600 12px/1 inherit; padding: 9px 12px; cursor: pointer;
}
#dsh-gf-panel .dsh-btns { display: flex; gap: 8px; }
#dsh-gf-panel button.dsh-btn {
  flex: 1; min-height: 40px; border-radius: 11px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.08); color: #f2f2f7;
  padding: 0 12px; font-size: 13px; font-weight: 500; cursor: pointer;
  transition: background 0.15s ease;
}
#dsh-gf-panel button.dsh-btn:hover { background: rgba(255, 255, 255, 0.16); }
#dsh-gf-panel .dsh-thumb {
  max-width: 100%; max-height: 64px; border-radius: 12px;
  object-fit: cover; display: none; border: 1px solid rgba(255, 255, 255, 0.14);
}
#dsh-gf-panel .dsh-thumb.dsh-show { display: block; }
#dsh-gf-panel .dsh-status {
  font-size: 12px; line-height: 1.45; border-radius: 10px;
  padding: 8px 10px; display: none; word-break: break-all;
}
#dsh-gf-panel .dsh-status.dsh-show { display: block; }
#dsh-gf-panel .dsh-status.dsh-ok { background: rgba(31, 157, 85, 0.14); color: #30d158; }
#dsh-gf-panel .dsh-status.dsh-err { background: rgba(215, 0, 21, 0.12); color: #ff453a; }
@media (prefers-reduced-motion: reduce) {
  #dsh-gf-toggle, #dsh-gf-panel button, .dsh-gf-send { transition: none; }
}
`;
		//#endregion

		//#region wallpaper module
		const MAX_SOURCE_BYTES = 20 * 1024 * 1024;
		const QUOTA_SAFE_CHARS = 4_000_000;
		const MAX_DIM = 1920;

		let bgEl = null;
		let maskEl = null;
		let canvasEl = null;
		let currentSrc = "";
		let maskValue = 0;
		let particlesEnabled = true;

		function loadImage(url) {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.decoding = "async";
				img.referrerPolicy = "no-referrer";
				img.onload = () => resolve(img);
				img.onerror = () => reject(new Error("图片无法加载"));
				img.src = url;
			});
		}

		function readFileAsDataURL(file) {
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onload = () => resolve(String(reader.result));
				reader.onerror = () => reject(new Error("读取文件失败"));
				reader.readAsDataURL(file);
			});
		}

		/** Local image → downscaled JPEG dataURL (long edge ≤ 1920). */
		async function normalizeLocalImage(file) {
			if (file.size > MAX_SOURCE_BYTES) {
				throw new Error("图片超过 20MB，请换一张小一点的");
			}
			const dataUrl = await readFileAsDataURL(file);
			const img = await loadImage(dataUrl);
			const srcW = img.naturalWidth || 0;
			const srcH = img.naturalHeight || 0;
			if (!srcW || !srcH || (srcW <= MAX_DIM && srcH <= MAX_DIM && dataUrl.length <= QUOTA_SAFE_CHARS)) {
				return dataUrl;
			}
			const scale = Math.min(1, MAX_DIM / srcW, MAX_DIM / srcH);
			const w = Math.max(1, Math.round(srcW * scale));
			const h = Math.max(1, Math.round(srcH * scale));
			const canvas = document.createElement("canvas");
			canvas.width = w;
			canvas.height = h;
			const ctx = canvas.getContext("2d");
			if (!ctx) return dataUrl;
			ctx.fillStyle = "#0f1115";
			ctx.fillRect(0, 0, w, h);
			ctx.drawImage(img, 0, 0, w, h);
			try {
				const jpeg = canvas.toDataURL("image/jpeg", 0.9);
				return jpeg.length < dataUrl.length ? jpeg : dataUrl;
			} catch {
				return dataUrl;
			}
		}

		function friendlyImageError(file) {
			if (file && file.type && /heic|heif/i.test(file.type)) {
				return "该文件是 HEIC 格式（iPhone 照片常见），多数浏览器无法显示，请先转成 JPG/PNG";
			}
			return "图片无法加载或格式不支持，请换一张 JPG/PNG/WebP 试试";
		}

		/** Active guofeng skin id, or null when the built-in appearance is in charge. */
		function activeSkin() {
			const pref = document.body.getAttribute("data-ds-skin") || "";
			return SKIN_BY_ID[pref] ? pref : null;
		}

		/** Apply the wallpaper for the given skin id (user upload wins). */
		function applyWallpaper(skinId, cfg) {
			const html = document.documentElement;
			html.classList.toggle("dsh-gf-on", Boolean(skinId));
			if (!skinId || bgEl === null) return;
			const src = (cfg && cfg.src) || WALLPAPERS[skinId];
			renderBg(src);
			html.style.setProperty("--dsh-gf-mask", String(cfg ? cfg.mask : 0));
			applyParticles(Boolean(cfg ? cfg.particles : true));
		}

		function renderBg(src) {
			if (bgEl === null) return;
			if (src) {
				if (currentSrc !== src) {
					bgEl.referrerPolicy = "no-referrer";
					bgEl.src = src;
					currentSrc = src;
				}
				bgEl.style.display = "block";
			} else {
				bgEl.removeAttribute("src");
				bgEl.style.display = "none";
				currentSrc = "";
			}
		}

		function ensureLayers() {
			if (bgEl !== null) return;
			maskEl = document.createElement("div");
			maskEl.id = "dsh-gf-mask";
			canvasEl = document.createElement("canvas");
			canvasEl.id = "dsh-gf-ink";
			bgEl = document.createElement("img");
			bgEl.id = "dsh-gf-wallpaper";
			bgEl.alt = "";
			bgEl.draggable = false;
			bgEl.style.display = "none";
			bgEl.addEventListener("error", () => {
				bgEl.style.display = "none";
				if (typeof reportBgError === "function") reportBgError();
			});
			// prepend order: mask first, then canvas, then img → img on top of canvas
			document.body.prepend(maskEl);
			document.body.prepend(canvasEl);
			document.body.prepend(bgEl);
		}

		function injectChromeCss() {
			if (document.querySelector("style[data-plugin-css=\"dsh-guofeng-skins/chrome\"]") !== null) return;
			const style = document.createElement("style");
			style.dataset.plugin = "dsh-guofeng-skins";
			style.dataset.pluginCss = "dsh-guofeng-skins/chrome";
			style.textContent = CHROME_CSS + "\n" + SURFACE_RULES;
			document.head.append(style);
		}
		//#endregion

		//#region ink particle engine
		let particlesRaf = 0;
		let particlesRunning = false;
		const DROPS = 22;

		function makeDrops() {
			const drops = [];
			for (let i = 0; i < DROPS; i++) {
				drops.push({
					x: Math.random() * 1,
					y: Math.random() * 1,
					r: 2 + Math.random() * 7,
					vy: 0.00015 + Math.random() * 0.0003,
					phase: Math.random() * Math.PI * 2,
					amp: 0.01 + Math.random() * 0.02,
					alpha: 0.05 + Math.random() * 0.09
				});
			}
			return drops;
		}

		const drops = makeDrops();

		function paintFrame(t) {
			const canvas = canvasEl;
			const dpr = window.devicePixelRatio || 1;
			const w = window.innerWidth;
			const h = window.innerHeight;
			if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
				canvas.width = w * dpr;
				canvas.height = h * dpr;
			}
			const ctx = canvas.getContext("2d");
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			const color = inkColor();
			for (const drop of drops) {
				drop.y -= drop.vy * 60;
				if (drop.y < -0.05) drop.y = 1.05;
				const x = (drop.x + Math.sin(t * 0.0003 + drop.phase) * drop.amp) * w * dpr;
				const y = drop.y * h * dpr;
				ctx.beginPath();
				ctx.arc(x, y, drop.r * dpr, 0, Math.PI * 2);
				ctx.fillStyle = color;
				ctx.globalAlpha = drop.alpha;
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			particlesRaf = requestAnimationFrame(paintFrame);
		}

		/** Current ink color from the active skin (falls back gracefully). */
		function inkColor() {
			const skin = activeSkin();
			return (skin && INK[skin]) ? INK[skin].color : "#5f8d6e";
		}

		function applyParticles(enabled) {
			particlesEnabled = enabled;
			if (!enabled || !activeSkin()) {
				stopParticles();
				return;
			}
			startParticles();
		}

		function startParticles() {
			if (particlesRunning || !canvasEl) return;
			if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				paintFrame(0); // one static frame
				return;
			}
			particlesRunning = true;
			particlesRaf = requestAnimationFrame(paintFrame);
		}

		function stopParticles() {
			if (!particlesRunning) return;
			cancelAnimationFrame(particlesRaf);
			particlesRunning = false;
			if (canvasEl) {
				const ctx = canvasEl.getContext("2d");
				ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
			}
		}

		function initParticles() {
			if (typeof document === "undefined") return;
			document.addEventListener("visibilitychange", () => {
				if (document.hidden) stopParticles();
				else if (particlesEnabled && activeSkin()) startParticles();
			});
		}
		//#endregion

		//#region send ripple + micro-interactions
		/**
		 * The composer's send button renders IconSendOutline14 from
		 * dsh-client-ui-primitives with a stable SVG path; match that path so
		 * the ripple lands only on the real send button. Falls back to a
		 * class-name heuristic; no-op when unfound.
		 */
		const SEND_PATH_PREFIX = "M7.24707 1.01771";

		function isSendButton(button) {
			if (!(button instanceof HTMLButtonElement)) return false;
			const path = button.querySelector("svg path");
			if (path && typeof path.getAttribute("d") === "string") {
				return path.getAttribute("d").startsWith(SEND_PATH_PREFIX);
			}
			return /send/i.test(button.className || "");
		}

		let sendButtonSeen = false;

		function onDocumentClick(event) {
			const target = event.target;
			if (!(target instanceof Element)) return;
			const button = target.closest("button");
			if (!button || !isSendButton(button)) return;
			sendButtonSeen = true;
			if (typeof document.body.getAttribute("data-ds-skin") === "string" && !activeSkin()) return;
			button.classList.add("dsh-gf-send");
			const rect = button.getBoundingClientRect();
			const ripple = document.createElement("span");
			ripple.className = "dsh-gf-ripple";
			const size = Math.max(rect.width, rect.height) * 2.2;
			ripple.style.width = `${size}px`;
			ripple.style.height = `${size}px`;
			ripple.style.left = `${event.clientX - rect.left}px`;
			ripple.style.top = `${event.clientY - rect.top}px`;
			button.append(ripple);
			ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
		}

		function initInteractions() {
			// Delegated listener: catches clicks on buttons mounted later too.
			document.addEventListener("click", onDocumentClick);
		}
		//#endregion

		//#region floating hub panel
		let reportBgError = null;

		function el(tag, attrs = {}, children = []) {
			const node = document.createElement(tag);
			for (const [k, v] of Object.entries(attrs)) {
				if (k === "class") node.className = v;
				else if (k === "text") node.textContent = v;
				else if (k.startsWith("on")) node.addEventListener(k.slice(2).toLowerCase(), v);
				else node.setAttribute(k, v);
			}
			for (const child of children) node.append(child);
			return node;
		}

		/**
		 * Floating hub: skin chips (in-place compare) + wallpaper upload /
		 * mask slider / particles toggle. Pure DOM; mirrors the settings row.
		 */
		function buildPanel(cfg, onChange) {
			const panel = el("div", { id: "dsh-gf-panel" });
			panel.append(el("div", { class: "dsh-head" }, [
				el("span", { text: "🎋 国风皮肤" }),
				el("button", { class: "dsh-close", text: "✕", onclick: () => panel.classList.remove("dsh-open") })
			]));

			const status = el("div", { class: "dsh-status" });
			function showStatus(msg, kind) {
				if (!msg) {
					status.classList.remove("dsh-show");
					return;
				}
				status.textContent = msg;
				status.className = "dsh-status dsh-show " + (kind === "ok" ? "dsh-ok" : "dsh-err");
			}
			reportBgError = () => showStatus("图片加载失败：链接失效、被防盗链拦截，或格式浏览器不支持", "err");
			panel.append(status);

			// skin chips
			const skinsRow = el("div", { class: "dsh-skins" });
			const chips = SKINS.map((skin) => {
				const chip = el("button", {
					class: "dsh-skin-chip",
					text: skin.name,
					onclick: () => {
						applyPanelSkin(skin.id);
						onChange(cfg);
					}
				});
				return chip;
			});
			const defaultChip = el("button", {
				class: "dsh-skin-chip",
				text: "默认",
				onclick: () => {
					applyPanelSkin(DEFAULT_SKIN);
					onChange(cfg);
				}
			});
			chips.forEach((chip) => skinsRow.append(chip));
			skinsRow.append(defaultChip);
			panel.append(skinsRow);

			// wallpaper file upload
			const fileInput = el("input", { type: "file", accept: "image/*" });
			const thumb = el("img", { class: "dsh-thumb" });
			thumb.referrerPolicy = "no-referrer";
			fileInput.addEventListener("change", async () => {
				const file = fileInput.files && fileInput.files[0];
				if (!file) return;
				try {
					const dataUrl = await normalizeLocalImage(file);
					if (dataUrl.length > QUOTA_SAFE_CHARS) {
						throw new Error("图片压缩后仍超过浏览器本地存储上限，请换一张更小的");
					}
					cfg.src = dataUrl;
					const ok = onChange(cfg);
					showStatus(ok ? "图片已应用" : "图片已应用，但太大未能保存，刷新后会丢失", ok ? "ok" : "err");
				} catch (err) {
					showStatus(friendlyImageError(file), "err");
					console.error("[dsh-guofeng-skins] 本地图片处理失败:", err);
				} finally {
					fileInput.value = "";
				}
			});
			panel.append(el("div", { class: "dsh-row" }, [
				el("label", { class: "dsh-label", text: "自定义壁纸（覆盖内置水墨）" }),
				fileInput,
				thumb
			]));

			// mask slider
			const maskValueEl = el("b", { text: "" });
			const maskSlider = el("input", { type: "range", min: "0", max: "75", step: "1" });
			const renderMask = () => {
				maskSlider.value = String(Math.round(cfg.mask * 100));
				maskValueEl.textContent = `${Math.round(cfg.mask * 100)}%`;
			};
			maskSlider.addEventListener("input", () => {
				cfg.mask = Number(maskSlider.value) / 100;
				maskValueEl.textContent = `${maskSlider.value}%`;
				onChange(cfg);
			});
			panel.append(el("div", { class: "dsh-row" }, [
				el("label", { class: "dsh-label" }, [el("span", { text: "压暗遮罩" }), maskValueEl]),
				maskSlider
			]));

			// particles toggle
			const particleToggle = el("button", {
				class: "dsh-btn",
				onclick: () => {
					cfg.particles = !cfg.particles;
					renderParticleLabel();
					onChange(cfg);
				}
			});
			const renderParticleLabel = () => {
				particleToggle.textContent = cfg.particles ? "墨滴粒子：开" : "墨滴粒子：关";
			};

			// bottom buttons
			panel.append(el("div", { class: "dsh-btns" }, [
				particleToggle,
				el("button", {
					class: "dsh-btn",
					text: "恢复内置壁纸",
					onclick: () => {
						cfg.src = null;
						fileInput.value = "";
						showStatus("");
						onChange(cfg);
						syncThumb();
					}
				})
			]));

			const syncThumb = () => {
				if (cfg.src) {
					thumb.src = cfg.src;
					thumb.classList.add("dsh-show");
				} else {
					thumb.removeAttribute("src");
					thumb.classList.remove("dsh-show");
				}
			};
			panel._syncThumb = syncThumb;
			panel._renderMask = renderMask;
			panel._renderParticle = renderParticleLabel;
			return panel;
		}

		/**
		 * Apply a skin from the floating panel: switch the theme runtime and
		 * persist (same path the settings row uses).
		 */
		function applyPanelSkin(id) {
			applySetSkin(id);
		}

		function initChrome(cfg, onChange) {
			injectChromeCss();
			ensureLayers();
			initParticles();
			initInteractions();
			const toggle = el("button", {
				id: "dsh-gf-toggle",
				title: "国风皮肤设置",
				text: "🎋"
			});
			const panel = buildPanel(cfg, (next) => {
				const saved = saveWallpaperCfg(next);
				refreshWallpaper(next);
				panel._syncThumb();
				panel._renderMask();
				panel._renderParticle();
				return saved;
			});
			toggle.addEventListener("click", () => panel.classList.toggle("dsh-open"));
			document.body.append(toggle);
			document.body.append(panel);
			panel._syncThumb();
			panel._renderMask();
			panel._renderParticle();
		}

		function saveWallpaperCfg(cfg) {
			writeWallpaperConfig(cfg);
			return cfg;
		}

		/** Re-render wallpaper + particles for the current config. */
		function refreshWallpaper(cfg) {
			applyWallpaper(activeSkin() || readSavedSkin(), cfg);
			const active = activeSkin();
			if (!active) return;
			applyParticles(cfg.particles);
			syncChips();
		}

		/** Highlight the active chip in the floating panel. */
		function syncChips() {
			const panel = document.getElementById("dsh-gf-panel");
			if (!panel) return;
			const chips = panel.querySelectorAll(".dsh-skin-chip");
			const active = activeSkin();
			chips.forEach((chip) => chip.classList.toggle("dsh-active", chip.textContent === (active ? SKIN_BY_ID[active].name : "默认")));
		}
		//#endregion

		//#region client plugin body
		/**
		 * Required services: theme runtime (skins, switching), slots/locale
		 * (the settings row). Persistence is localStorage/cookies, so no
		 * settings transport is needed.
		 */
		const inject = [
			"slots",
			"locale",
			"theme"
		];

		/** Apply a skin id (from either the settings row or the floating panel). */
		function applySetSkin(id) {
			ctxHolder.theme.setTheme(id);
			writeSavedSkin(id);
		}

		/** Late-bound context (filled by apply()). */
		const ctxHolder = { theme: null };

		/**
		 * Client plugin body: register the guofeng skins into the theme
		 * runtime, restore the saved choice, keep the row's store in sync
		 * with theme/change, register the picker into Settings → General,
		 * and boot the wallpaper/particles/hub chrome.
		 * @param ctx - client cordis context.
		 */
		function apply(ctx) {
			ctxHolder.theme = ctx.theme;
			// Mirror the current theme preference on <body> so the DOM modules
			// (wallpaper, particles, ripple) can read it synchronously before
			// the first theme/change event arrives.
			if (typeof document !== "undefined") {
				document.body.setAttribute("data-ds-skin", ctx.theme.getTheme().preference);
			}
			const disposers = SKINS.map((skinDefinition) => ctx.theme.register(skinDefinition));
			ctx.effect(() => () => {
				for (const dispose of disposers) dispose();
			}, "dsh-guofeng-skins: theme registration");

			// Restore the saved skin and hold it against the theme runtime's
			// built-in preference. The ThemeService adopts its durable
			// built-in preference ("light"/"dark"/"system") from the Host
			// settings scope; every adoption emits theme/change with a
			// built-in preference that overwrites a third-party one. That can
			// happen not only in a boot storm, but ANY time the settings
			// document is re-synced mid-session.
			//
			// Strategy: track the last observed durable value. A built-in
			// preference equal to it is an adoption echo of an unchanged
			// document → re-assert the saved skin. A different value is a
			// real user change of the Appearance row (or the first boot
			// adoption, within a short boot window) — the first sighting
			// within the boot window re-asserts, any later one is respected
			// and drops our stored choice, so the user's explicit appearance
			// choice always wins afterwards.
			const saved = readSavedSkin();
			let savedValid = typeof saved === "string" && saved !== DEFAULT_SKIN && SKINS.some((skinDefinition) => skinDefinition.id === saved);
			let lastSeenDurable = null;
			const bootUntil = Date.now() + 15000;

			/** Re-assert the saved skin from a fresh task. */
			const reassertSaved = () => {
				if (!savedValid) return;
				setTimeout(() => {
					const pref = ctx.theme.getTheme().preference;
					if (pref !== saved) ctx.theme.setTheme(saved);
				}, 0);
			};
			/** Handle a built-in preference (light/dark/system) sighting. */
			const considerBuiltin = (pref) => {
				if (pref === lastSeenDurable) {
					reassertSaved();
					return;
				}
				lastSeenDurable = pref;
				if (Date.now() <= bootUntil) {
					reassertSaved();
					return;
				}
				writeSavedSkin(DEFAULT_SKIN);
				savedValid = false;
			};
			considerBuiltin(ctx.theme.getTheme().preference);

			const skinStore = createSkinStore();
			let skinBound;
			const syncSkin = (snapshot) => {
				skinBound?.sync(snapshot.preference, snapshot.revision);
			};

			// wallpaper/particles/chrome follow the active theme
			const chromeCfg = readWallpaperConfig() || { src: null, mask: 0, particles: true };
			let chromeReady = false;
			const bootChrome = () => {
				if (chromeReady) return;
				chromeReady = true;
				initChrome(chromeCfg, (next) => {
					writeWallpaperConfig(next);
					refreshWallpaper(next);
					return true;
				});
				refreshWallpaper(chromeCfg);
			};

			ctx.on("theme/change", (snapshot) => {
				syncSkin(snapshot);
				const pref = snapshot.preference;
				if (typeof document !== "undefined") {
					document.body.setAttribute("data-ds-skin", pref);
				}
				if (chromeReady) refreshWallpaper(chromeCfg);
				if (pref === DEFAULT_SKIN || pref === "light" || pref === "dark") {
					considerBuiltin(pref);
					return;
				}
				if (!SKINS.some((skinDefinition) => skinDefinition.id === pref)) {
					writeSavedSkin(DEFAULT_SKIN);
					savedValid = false;
				}
			});

			ctx.effect(() => ctx.locale.register(SETTINGS_NS, {
				zh,
				en
			}), "dsh-guofeng: settings row dictionaries");

			const skinInjected = (actions) => {
				skinBound = actions;
				syncSkin(ctx.theme.getTheme());
				return {
					setSkin: (id) => {
						ctx.theme.setTheme(id);
						writeSavedSkin(id);
					}
				};
			};
			ctx.slots.inject("settings.general.item", () => ctx.slots.register({
				name: "settings.general.item",
				id: "guofeng",
				order: 19,
				store: skinStore,
				locale: SETTINGS_NS,
				inject: skinInjected
			}, SkinRow));

			// boot the DOM chrome once the document is ready
			if (typeof document === "undefined" || typeof localStorage === "undefined") return;
			if (document.readyState === "loading") {
				document.addEventListener("DOMContentLoaded", bootChrome, { once: true });
			} else {
				bootChrome();
			}
		}
		//#endregion

		exports.SKINS = SKINS;
		exports.DEFAULT_SKIN = DEFAULT_SKIN;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
