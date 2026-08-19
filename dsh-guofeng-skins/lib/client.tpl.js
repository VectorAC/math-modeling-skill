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

		/**
		 * FX config per skin: {type: "ink"|"star", color, glow}. The
		 * built-in wallpaper is NOT an image — it is a live canvas scene
		 * rendered by the scene renderer below (starfield / ink-wash), so
		 * it breathes and drifts. The <img> layer is only for user uploads.
		 */
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
			"skin.tunshixingkong": "吞噬星空",
			"skin.xingkong": "二次元星空"
		};

		/** English dictionary, checked complete against the zh key set. */
		const en = {
			"skin.title": "Guofeng skins",
			"skin.default": "Default",
			"skin.jianlai": "Jianlai",
			"skin.cangyuantu": "Cangyuan Tu",
			"skin.zhanshen": "Zhan Shen",
			"skin.buliangren": "Bu Liang Ren",
			"skin.tunshixingkong": "Tunshi Xingkong",
			"skin.xingkong": "Xingkong"
		};

		/** A guofeng skin id → name lookup. */
		const SKIN_BY_ID = Object.fromEntries(SKINS.map((s) => [s.id, s]));

		/** "#rrggbb" + alpha → "rgba(r, g, b, a)". */
		function hexToRgba(hexColor, alpha) {
			const m = /^#([0-9a-f]{6})$/i.exec(hexColor || "");
			if (!m) return `rgba(127, 127, 127, ${alpha})`;
			const v = parseInt(m[1], 16);
			return `rgba(${(v >> 16) & 255}, ${(v >> 8) & 255}, ${v & 255}, ${alpha})`;
		}

		/** Linear mix of two "#rrggbb" colors, t=0 → a, t=1 → b. */
		function mixHex(a, b, t) {
			const pa = /^#([0-9a-f]{6})$/i.exec(a || "");
			const pb = /^#([0-9a-f]{6})$/i.exec(b || "");
			if (!pa || !pb) return a || b || "#000000";
			const ca = parseInt(pa[1], 16);
			const cb = parseInt(pb[1], 16);
			const ch = (v, s) => Math.round(v + (s - v) * t);
			const r = ch((ca >> 16) & 255, (cb >> 16) & 255);
			const g = ch((ca >> 8) & 255, (cb >> 8) & 255);
			const bl = ch(ca & 255, cb & 255);
			return `#${((r << 16) | (g << 8) | bl).toString(16).padStart(6, "0")}`;
		}
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

		/** Wallpaper config: {src, mask, particles, panel}. */
		function readWallpaperConfig() {
			try {
				const raw = readStorage(WALLPAPER_KEY);
				if (!raw) return null;
				const parsed = JSON.parse(raw);
				return {
					src: typeof parsed.src === "string" ? parsed.src : null,
					mask: typeof parsed.mask === "number" ? Math.max(0, Math.min(0.75, parsed.mask)) : 0,
					particles: typeof parsed.particles === "boolean" ? parsed.particles : true,
					panel: typeof parsed.panel === "number" ? Math.max(0.15, Math.min(1, parsed.panel)) : 1
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
			[boost("[class*=\"_codeBlock\"]"), "  border: 1px solid var(--dsw-alias-border-l2); border-radius: 12px; overflow: hidden; box-shadow: inset 3px 0 0 var(--dsw-alias-brand-primary);"]
			// NOTE: no backdrop-filter on guessed layout classes — it traps
			// position:fixed descendants and breaks overlay pages (settings).
			// The glass look comes from the translucent tokens alone.
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
/* ===== layers =====
   Layering strategy: the wallpaper layers sit at z-index:-1 with the
   html/body backgrounds made transparent, so the app content always paints
   above them no matter what the app's real root element is (raising #root
   is unreliable across DSH versions and broke the settings overlay). The
   app's own panels are translucent (skin tokens), letting the scene show
   through their alpha. */
html.dsh-gf-on body { background: transparent !important; }
#dsh-gf-wallpaper {
  position: fixed; inset: 0; z-index: -1; pointer-events: none;
  width: 100%; height: 100%; object-fit: cover; object-position: center;
  opacity: 1; display: none; transition: opacity 0.3s ease;
  /* Ken Burns: a static image slowly pans/zooms like a live wallpaper */
  animation: dsh-gf-kenburns 40s ease-in-out infinite alternate;
  will-change: transform;
}
@keyframes dsh-gf-kenburns {
  0% { transform: scale(1) translate(0, 0); transform-origin: 50% 50%; }
  100% { transform: scale(1.05) translate(1%, 1.5%); transform-origin: 70% 30%; }
}
/* ===== panel opacity override (user slider) =====
   !important stylesheet rule beats the ThemePresenter's body inline tokens
   (which are re-applied without !important) — and it is not wiped by its
   removeProperty pass. Reference colors are the static ramps, not aliases
   (aliases are already rgba from the skins). Only background surfaces are
   overridden; text/border/button tokens stay for readability. */
html.dsh-gf-glass body {
  --dsw-alias-bg-base: color-mix(in srgb, var(--dsw-static-neutral-bluish-950) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-alias-bg-layer-1: color-mix(in srgb, var(--dsw-static-neutral-bluish-875) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-alias-bg-layer-2: color-mix(in srgb, var(--dsw-static-neutral-bluish-850) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-alias-bg-layer-3: color-mix(in srgb, var(--dsw-static-neutral-bluish-800) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-alias-bg-module-platform: color-mix(in srgb, var(--dsw-static-neutral-bluish-800) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-alias-bg-multi-select: color-mix(in srgb, var(--dsw-static-neutral-bluish-750) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-alias-bg-overlay: color-mix(in srgb, var(--dsw-static-neutral-bluish-750) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-specific-sidebar-fill: color-mix(in srgb, var(--dsw-static-neutral-bluish-900) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-specific-input-major: color-mix(in srgb, var(--dsw-static-neutral-bluish-850) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-specific-login-input: color-mix(in srgb, var(--dsw-static-neutral-bluish-900) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-specific-selector: color-mix(in srgb, var(--dsw-static-neutral-bluish-800) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-specific-tip: color-mix(in srgb, var(--dsw-static-neutral-bluish-800) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-specific-bubble: color-mix(in srgb, var(--dsw-static-neutral-bluish-850) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-specific-bubble-highlight: color-mix(in srgb, var(--dsw-static-neutral-bluish-750) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-alias-markdown-code-block: color-mix(in srgb, var(--dsw-static-neutral-bluish-850) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-alias-markdown-citation: color-mix(in srgb, var(--dsw-static-neutral-bluish-800) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-alias-markdown-inline-code: color-mix(in srgb, var(--dsw-static-neutral-bluish-800) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
  --dsw-specific-menu: color-mix(in srgb, var(--dsw-static-neutral-bluish-850) calc(var(--dsh-gf-panel-opacity, 1) * 100%), transparent) !important;
}
#dsh-gf-mask {
  position: fixed; inset: 0; z-index: -1; pointer-events: none;
  background: rgba(0, 0, 0, var(--dsh-gf-mask, 0));
}
#dsh-gf-ink {
  position: fixed; inset: 0; z-index: -1; pointer-events: none;
  display: none;
}
html.dsh-gf-on #dsh-gf-wallpaper { display: block; }
html.dsh-gf-on #dsh-gf-ink { display: block; }
/* built-in scene canvas (rendered wallpaper); hidden while a user upload is shown */
#dsh-gf-scene {
  position: fixed; inset: 0; z-index: -1; pointer-events: none;
  display: none; width: 100%; height: 100%;
}
html.dsh-gf-on #dsh-gf-scene { display: block; }
html.dsh-gf-upload #dsh-gf-scene { display: none; }
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
  #dsh-gf-wallpaper { animation: none; }
}
`;
		//#endregion

		//#region wallpaper module
		const MAX_SOURCE_BYTES = 20 * 1024 * 1024;
		const QUOTA_SAFE_CHARS = 4_000_000;
		const MAX_DIM = 1920;

		let bgEl = null;
		let maskEl = null;
		let sceneEl = null;
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
			// panel-opacity override (user slider): 1 = baked alphas, <1 = glass
			const panel = (cfg && typeof cfg.panel === "number") ? cfg.panel : 1;
			html.style.setProperty("--dsh-gf-panel-opacity", String(panel));
			html.classList.toggle("dsh-gf-glass", Boolean(skinId) && panel < 1);
			if (bgEl === null) return;
			if (!skinId) {
				// built-in appearance: hide everything
				renderBg(null);
				stopScene();
				applyParticles(false);
				return;
			}
			const upload = cfg && cfg.src;
			html.classList.toggle("dsh-gf-upload", Boolean(upload));
			if (upload) {
				// user image: static img layer + Ken Burns
				renderBg(upload);
				stopScene();
			} else {
				// built-in: live canvas scene for this skin
				renderBg(null);
				startScene(skinId);
			}
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
			sceneEl = document.createElement("canvas");
			sceneEl.id = "dsh-gf-scene";
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
			// prepend order: mask, scene, fx canvas, img → img on top when shown
			document.body.prepend(maskEl);
			document.body.prepend(sceneEl);
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

		//#region scene renderer (live built-in wallpapers)
		/**
		 * The built-in wallpaper is a live canvas scene, not an image:
		 *   "star" — reference-calibrated night sky: dark blue-grey gradient,
		 *            purple/cyan nebula washes, a noise-milled milky-way
		 *            band, power-law stars (few bright ones with glow +
		 *            diffraction spikes), a black silhouette horizon; the
		 *            band drifts slowly and bright stars twinkle.
		 *   "ink"  — ink-wash mountains: accent-tinted far ridge (blurred),
		 *            panel-wash mid ridge, sharp ink-black near ridge,
		 *            blurred mist bands, soft ink blots and a seal stamp;
		 *            the layer drifts and ink blots keep dissolving.
		 * Static layers are pre-rendered to an offscreen canvas once per
		 * skin/resize; the loop only blits it plus small dynamic elements,
		 * so per-frame cost stays tiny.
		 */
		let sceneRaf = 0;
		let sceneRunning = false;
		let sceneLayer = null;
		let sceneTwinkle = [];
		let sceneBlots = [];
		let sceneNextBlotAt = 0;
		let sceneSkinId = null;
		let sceneType = "ink";
		let starSprite = null;

		function getStarSprite() {
			if (starSprite) return starSprite;
			const s = document.createElement("canvas");
			s.width = 32;
			s.height = 32;
			const ctx = s.getContext("2d");
			const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
			g.addColorStop(0, "rgba(255, 255, 255, 1)");
			g.addColorStop(0.3, "rgba(255, 255, 255, 0.55)");
			g.addColorStop(1, "rgba(255, 255, 255, 0)");
			ctx.fillStyle = g;
			ctx.fillRect(0, 0, 32, 32);
			starSprite = s;
			return s;
		}

		/** Live theme colors of the active skin (read from <body> tokens). */
		function sceneColors() {
			const cs = getComputedStyle(document.body);
			const get = (name) => (cs.getPropertyValue(name) || "").trim();
			return {
				base: get("--dsw-static-neutral-bluish-950") || "#0d101c",
				panel: get("--dsw-static-neutral-bluish-875") || "#1a2030",
				ink: get("--dsw-static-neutral-bluish-50") || "#dfe6ff",
				accent: get("--dsw-static-deepseek-500") || "#7b6cf6",
				accent2: get("--dsw-static-blue-500") || "#5ec8ff",
				gold: get("--dsw-static-amber-400") || "#ffd86b",
				red: get("--dsw-static-red-400") || "#ff5a7a"
			};
		}

		/** Blurred noise band: the milky way (diagonal gaussian × noise). */
		function drawMilkyWay(ctx, w, h, tone, alpha) {
			const nw = Math.max(64, w >> 4);
			const nh = Math.max(36, h >> 4);
			const noise = document.createElement("canvas");
			noise.width = nw;
			noise.height = nh;
			const nctx = noise.getContext("2d");
			const img = nctx.createImageData(nw, nh);
			for (let y = 0; y < nh; y++) {
				for (let x = 0; x < nw; x++) {
					const bandY = 0.38 + 0.16 * (x / nw);
					const d = (y / nh - bandY) * 5;
					const profile = Math.exp(-d * d);
					const v = Math.round(255 * profile * (0.3 + Math.random() * 0.7) * alpha);
					const i = (y * nw + x) * 4;
					img.data[i] = tone[0];
					img.data[i + 1] = tone[1];
					img.data[i + 2] = tone[2];
					img.data[i + 3] = v;
				}
			}
			nctx.putImageData(img, 0, 0);
			const blur = document.createElement("canvas");
			blur.width = w >> 1;
			blur.height = h >> 1;
			const bctx = blur.getContext("2d");
			if (typeof bctx.filter === "string") bctx.filter = "blur(20px)";
			bctx.drawImage(noise, 0, 0, blur.width, blur.height);
			ctx.drawImage(blur, 0, 0, w, h);
		}

		function buildStarScene(ctx, w, h, fx) {
			// reference-calibrated night gradient (dark top/bottom, brighter mid)
			const bg = ctx.createLinearGradient(0, 0, 0, h);
			bg.addColorStop(0, "#0d1019");
			bg.addColorStop(0.45, "#141c2c");
			bg.addColorStop(0.72, "#101624");
			bg.addColorStop(1, "#07090f");
			ctx.fillStyle = bg;
			ctx.fillRect(0, 0, w, h);

			// nebula washes
			const nebula = (cx, cy, r, color, alpha) => {
				const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
				g.addColorStop(0, hexToRgba(color, alpha));
				g.addColorStop(1, hexToRgba(color, 0));
				ctx.fillStyle = g;
				ctx.fillRect(0, 0, w, h);
			};
			nebula(w * 0.22, h * 0.3, w * 0.55, fx.color, 0.16);
			nebula(w * 0.85, h * 0.65, w * 0.5, fx.glow, 0.13);
			nebula(w * 0.6, h * 0.15, w * 0.4, fx.glow, 0.08);

			// milky way band (bluish-white)
			drawMilkyWay(ctx, w, h, [198, 210, 240], 0.5);

			// stars: sparse power-law sizes (reference sky: ~0.2% bright px);
			// few bright ones with glow + diffraction spikes, calm twinkle
			const sprite = getStarSprite();
			const count = 180 + Math.floor(Math.random() * 80);
			for (let i = 0; i < count; i++) {
				const r = 0.3 + Math.pow(Math.random(), 3) * 2.4;
				const x = Math.random() * w;
				const y = Math.random() * h * 0.92;
				const alpha = 0.2 + Math.pow(Math.random(), 2) * 0.8;
				const tint = Math.random() > 0.88 ? (Math.random() > 0.5 ? fx.color : "#ffd86b") : "#dfe6ff";
				if (r > 1.5) {
					const size = 10 + r * 7;
					ctx.globalAlpha = alpha * 0.75;
					ctx.drawImage(sprite, x - size / 2, y - size / 2, size, size);
					ctx.globalAlpha = alpha;
					ctx.fillStyle = tint;
					ctx.fillRect(x - r / 2, y - r / 2, r, r);
					ctx.globalAlpha = 1;
					// diffraction spikes: thin crossed gradients
					const spike = ctx.createLinearGradient(x - 16 * r, y, x + 16 * r, y);
					spike.addColorStop(0, hexToRgba(tint, 0));
					spike.addColorStop(0.5, hexToRgba(tint, alpha * 0.6));
					spike.addColorStop(1, hexToRgba(tint, 0));
					ctx.strokeStyle = spike;
					ctx.lineWidth = 0.8;
					ctx.beginPath();
					ctx.moveTo(x - 16 * r, y);
					ctx.lineTo(x + 16 * r, y);
					ctx.stroke();
					const spike2 = ctx.createLinearGradient(x, y - 16 * r, x, y + 16 * r);
					spike2.addColorStop(0, hexToRgba(tint, 0));
					spike2.addColorStop(0.5, hexToRgba(tint, alpha * 0.6));
					spike2.addColorStop(1, hexToRgba(tint, 0));
					ctx.strokeStyle = spike2;
					ctx.beginPath();
					ctx.moveTo(x, y - 16 * r);
					ctx.lineTo(x, y + 16 * r);
					ctx.stroke();
					if (Math.random() > 0.55) {
						sceneTwinkle.push({ x, y, size, base: alpha, phase: Math.random() * Math.PI * 2, freq: 0.0002 + Math.random() * 0.0004 });
					}
				} else {
					ctx.globalAlpha = alpha;
					ctx.fillStyle = tint;
					ctx.fillRect(x - r / 2, y - r / 2, r, r);
				}
			}
			ctx.globalAlpha = 1;

			// black silhouette horizon (bottom band)
			ctx.fillStyle = "#04060a";
			ctx.beginPath();
			ctx.moveTo(0, h);
			ctx.lineTo(0, h * 0.85);
			const segs = 14;
			for (let i = 1; i <= segs; i++) {
				ctx.lineTo((w * i) / segs, h * (0.83 + Math.random() * 0.1));
			}
			ctx.lineTo(w, h);
			ctx.closePath();
			ctx.fill();
		}

		function buildInkScene(ctx, w, h) {
			const c = sceneColors();
			ctx.fillStyle = c.base;
			ctx.fillRect(0, 0, w, h);
			// soft accent2 glow top-right
			const glow = ctx.createRadialGradient(w * 0.82, h * 0.1, 0, w * 0.82, h * 0.1, w * 0.6);
			glow.addColorStop(0, hexToRgba(c.accent2, 0.22));
			glow.addColorStop(1, hexToRgba(c.accent2, 0));
			ctx.fillStyle = glow;
			ctx.fillRect(0, 0, w, h);

			// ridge: jagged path with per-point jitter
			const ridge = (topY, amp, fill, alpha, edge) => {
				ctx.save();
				if (edge && typeof ctx.filter === "string") ctx.filter = `blur(${edge}px)`;
				ctx.globalAlpha = alpha;
				ctx.fillStyle = fill;
				ctx.beginPath();
				ctx.moveTo(0, h);
				ctx.lineTo(0, topY + (Math.random() - 0.5) * amp * 2);
				const segs = 12;
				for (let i = 1; i <= segs; i++) {
					ctx.lineTo((w * i) / segs, topY + (Math.random() - 0.5) * amp * 2);
				}
				ctx.lineTo(w, h);
				ctx.closePath();
				ctx.fill();
				ctx.restore();
			};
			// far: accent-tinted blurred; mid: panel wash; near: ink-black sharp
			ridge(h * 0.22, h * 0.08, mixHex(c.accent, c.base, 0.4), 0.8, 8);
			ridge(h * 0.4, h * 0.1, mixHex(c.panel, c.base, 0.35), 0.85, 3);
			ridge(h * 0.62, h * 0.12, "#050608", 0.95, 0);

			// mist bands (blurred accent-tinted rects)
			const mistCount = 2 + Math.floor(Math.random() * 2);
			for (let i = 0; i < mistCount; i++) {
				const y = h * (0.24 + Math.random() * 0.45);
				const bh = h * (0.07 + Math.random() * 0.07);
				const mg = ctx.createLinearGradient(0, y, 0, y + bh);
				mg.addColorStop(0, hexToRgba(c.accent, 0.14));
				mg.addColorStop(1, hexToRgba(c.accent, 0.02));
				ctx.save();
				if (typeof ctx.filter === "string") ctx.filter = "blur(10px)";
				ctx.fillStyle = mg;
				ctx.fillRect(0, y, w, bh);
				ctx.restore();
			}

			// soft static ink blots
			const blotCount = 5 + Math.floor(Math.random() * 4);
			for (let i = 0; i < blotCount; i++) {
				const bx = Math.random() * w;
				const by = h * (0.2 + Math.random() * 0.55);
				const br = 30 + Math.random() * 70;
				const bg = ctx.createRadialGradient(bx, by, 0, bx, by, br);
				bg.addColorStop(0, hexToRgba(c.accent, 0.16));
				bg.addColorStop(1, hexToRgba(c.accent, 0));
				ctx.fillStyle = bg;
				ctx.beginPath();
				ctx.arc(bx, by, br, 0, Math.PI * 2);
				ctx.fill();
			}

			// seal stamp (朱砂 for red-identity skins, gold otherwise)
			const sealColor = c.red && c.red !== c.accent ? c.red : c.gold;
			const size = 46 + Math.random() * 20;
			const sx = w - size - 44;
			const sy = h * 0.14 + Math.random() * h * 0.08;
			ctx.globalAlpha = 0.85;
			ctx.fillStyle = sealColor;
			ctx.beginPath();
			if (ctx.roundRect) ctx.roundRect(sx, sy, size, size, size * 0.22);
			else ctx.rect(sx, sy, size, size);
			ctx.fill();
			ctx.fillStyle = "#0b0a08";
			ctx.beginPath();
			ctx.arc(sx + size / 2, sy + size / 2, size * 0.24, 0, Math.PI * 2);
			ctx.fill();
			ctx.globalAlpha = 1;
		}

		function rebuildSceneLayer() {
			const dpr = window.devicePixelRatio || 1;
			const w = window.innerWidth;
			const h = window.innerHeight;
			if (!sceneLayer) sceneLayer = document.createElement("canvas");
			sceneLayer.width = (w + 24) * dpr;
			sceneLayer.height = h * dpr;
			const ctx = sceneLayer.getContext("2d");
			ctx.scale(dpr, dpr);
			sceneTwinkle = [];
			sceneBlots = [];
			const fx = fxConfig();
			if (sceneType === "star") buildStarScene(ctx, w + 24, h, fx);
			else buildInkScene(ctx, w + 24, h);
		}

		function startScene(skinId) {
			if (!sceneEl) return;
			if (sceneSkinId !== skinId) {
				sceneSkinId = skinId;
				sceneType = skinId === "xingkong" ? "star" : "ink";
				rebuildSceneLayer();
			}
			const dpr = window.devicePixelRatio || 1;
			if (sceneEl.width !== window.innerWidth * dpr || sceneEl.height !== window.innerHeight * dpr) {
				sceneEl.width = window.innerWidth * dpr;
				sceneEl.height = window.innerHeight * dpr;
				rebuildSceneLayer();
			}
			if (sceneRunning) return;
			if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				paintScene(0);
				cancelAnimationFrame(sceneRaf);
				return;
			}
			sceneRunning = true;
			sceneRaf = requestAnimationFrame(paintScene);
		}

		function stopScene() {
			if (!sceneRunning) return;
			cancelAnimationFrame(sceneRaf);
			sceneRunning = false;
		}

		function paintScene(now) {
			const canvas = sceneEl;
			if (!canvas) return;
			const dpr = window.devicePixelRatio || 1;
			const w = window.innerWidth;
			const h = window.innerHeight;
			if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
				canvas.width = w * dpr;
				canvas.height = h * dpr;
				rebuildSceneLayer();
			}
			const ctx = canvas.getContext("2d");
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			if (!sceneLayer) return;
			// slow drift (0-10px, ~2min cycle) — genuine motion
			const drift = Math.abs(Math.sin(now * 0.00005)) * 10;
			ctx.drawImage(sceneLayer, -drift * dpr, 0);
			// twinkling bright stars
			const sprite = getStarSprite();
			for (const s of sceneTwinkle) {
				const a = s.base * (0.5 + 0.5 * Math.sin(now * s.freq + s.phase));
				if (a < 0.04) continue;
				ctx.globalAlpha = a;
				ctx.drawImage(sprite, s.x - s.size / 2, s.y - s.size / 2, s.size, s.size);
			}
			ctx.globalAlpha = 1;
			// dissolving ink blots (ink scenes only)
			if (sceneType === "ink") {
				if (now > sceneNextBlotAt && sceneBlots.length < 4) {
					const fx = fxConfig();
					sceneBlots.push({
						x: Math.random() * canvas.width,
						y: Math.random() * canvas.height * 0.8,
						r: (30 + Math.random() * 50) * dpr,
						t: 0,
						maxT: 2200,
						color: fx.color
					});
					sceneNextBlotAt = now + 5000 + Math.random() * 5000;
				}
				for (let i = sceneBlots.length - 1; i >= 0; i--) {
					const b = sceneBlots[i];
					b.t += 16;
					const k = b.t / b.maxT;
					if (k >= 1) {
						sceneBlots.splice(i, 1);
						continue;
					}
					const r = b.r * (0.25 + 0.75 * k);
					const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, r);
					g.addColorStop(0, hexToRgba(b.color, 0.22 * (1 - k)));
					g.addColorStop(1, hexToRgba(b.color, 0));
					ctx.fillStyle = g;
					ctx.beginPath();
					ctx.arc(b.x, b.y, r, 0, Math.PI * 2);
					ctx.fill();
				}
			}
			sceneRaf = requestAnimationFrame(paintScene);
		}
		//#endregion

		//#region FX engine (overlay effects, per skin)
		/**
		 * Overlay effect canvas on top of the scene layer:
		 *   "ink"  — slow ink drops (glow-cored) + light dust motes
		 *   "star" — meteor streaks + light dust (starfield lives in the
		 *            scene layer)
		 * Amplitudes stay small; reduced-motion renders one static frame.
		 */
		let fxRaf = 0;
		let fxRunning = false;
		let fxMeteors = [];
		let fxNextMeteorAt = 0;

		/** FX config of the active skin (falls back to ink). */
		function fxConfig() {
			const skin = activeSkin();
			return (skin && INK[skin]) || { type: "ink", color: "#5f8d6e", glow: "#4a7f9e" };
		}

		function makeDrops(type) {
			const count = type === "star" ? 6 : 14;
			const drops = [];
			for (let i = 0; i < count; i++) {
				drops.push({
					x: Math.random(),
					y: Math.random(),
					r: type === "star" ? 1.5 + Math.random() * 3 : 6 + Math.random() * 14,
					// very slow drift (not bubble-like rising)
					vy: 0.00001 + Math.random() * 0.00003,
					phase: Math.random() * Math.PI * 2,
					amp: 0.01 + Math.random() * 0.022,
					alpha: 0.18 + Math.random() * 0.14
				});
			}
			return drops;
		}

		const inkDrops = makeDrops("ink");
		const dust = makeDrops("star");

		/** Spawn one meteor streak (coordinates in device pixels). */
		function spawnMeteor() {
			const dpr = window.devicePixelRatio || 1;
			const w = canvasEl.width;
			const h = canvasEl.height;
			const vx = (4 + Math.random() * 5) * dpr;
			fxMeteors.push({
				x: w * 0.05 + Math.random() * w * 0.75,
				y: Math.random() * h * 0.25,
				vx,
				vy: vx * 0.45,
				life: 0,
				maxLife: 70 + Math.random() * 50,
				len: (90 + Math.random() * 110) * dpr
			});
			fxNextMeteorAt = nowRef + 4000 + Math.random() * 4000;
		}

		/** Latest rAF timestamp (set in paintFrame) for meteor scheduling. */
		let nowRef = 0;

		function paintFrame(now) {
			nowRef = now;
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
			const fx = fxConfig();

			if (fx.type === "star") {
				// meteors (the starfield itself lives in the scene layer)
				if (now > fxNextMeteorAt && fxMeteors.length < 3) spawnMeteor();
				for (let i = fxMeteors.length - 1; i >= 0; i--) {
					const m = fxMeteors[i];
					m.x += m.vx;
					m.y += m.vy;
					m.life++;
					if (m.life > m.maxLife || m.x > canvas.width + m.len || m.y > canvas.height) {
						fxMeteors.splice(i, 1);
						continue;
					}
					const speed = Math.hypot(m.vx, m.vy) || 1;
					const ux = m.vx / speed;
					const uy = m.vy / speed;
					const tx = m.x - ux * m.len;
					const ty = m.y - uy * m.len;
					const grad = ctx.createLinearGradient(m.x, m.y, tx, ty);
					grad.addColorStop(0, fx.glow);
					grad.addColorStop(1, "rgba(0, 0, 0, 0)");
					ctx.strokeStyle = grad;
					ctx.lineWidth = 2 * dpr;
					ctx.lineCap = "round";
					ctx.globalAlpha = 0.9;
					ctx.beginPath();
					ctx.moveTo(m.x, m.y);
					ctx.lineTo(tx, ty);
					ctx.stroke();
					ctx.beginPath();
					ctx.arc(m.x, m.y, 2.2 * dpr, 0, Math.PI * 2);
					ctx.fillStyle = fx.glow;
					ctx.globalAlpha = 0.95;
					ctx.fill();
				}
			} else {
				// ink drops: big ones glow-cored radial gradients, small solid
				for (const drop of inkDrops) {
					drop.y -= drop.vy * 60;
					if (drop.y < -0.05) drop.y = 1.05;
					const x = (drop.x + Math.sin(now * 0.0003 + drop.phase) * drop.amp) * canvas.width;
					const y = drop.y * canvas.height;
					if (drop.r > 12) {
						const g = ctx.createRadialGradient(x, y, 0, x, y, drop.r * dpr);
						g.addColorStop(0, fx.glow);
						g.addColorStop(1, fx.color);
						ctx.fillStyle = g;
						ctx.globalAlpha = drop.alpha * 0.8;
					} else {
						ctx.fillStyle = fx.color;
						ctx.globalAlpha = drop.alpha;
					}
					ctx.beginPath();
					ctx.arc(x, y, drop.r * dpr, 0, Math.PI * 2);
					ctx.fill();
				}
			}

			// light dust (both types): small glow-colored motes
			for (const d of dust) {
				d.y -= d.vy * 60;
				if (d.y < -0.05) d.y = 1.05;
				const x = (d.x + Math.sin(now * 0.0003 + d.phase) * d.amp) * canvas.width;
				const y = d.y * canvas.height;
				ctx.beginPath();
				ctx.arc(x, y, d.r * dpr, 0, Math.PI * 2);
				ctx.fillStyle = fx.glow;
				ctx.globalAlpha = d.alpha * 0.5;
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			fxRaf = requestAnimationFrame(paintFrame);
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
			if (fxRunning || !canvasEl) return;
			if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				paintFrame(0); // one static frame
				cancelAnimationFrame(fxRaf); // stop the loop after the static frame
				return;
			}
			fxRunning = true;
			fxRaf = requestAnimationFrame(paintFrame);
		}

		function stopParticles() {
			if (!fxRunning && fxMeteors.length === 0) return;
			cancelAnimationFrame(fxRaf);
			fxRunning = false;
			fxMeteors = [];
			if (canvasEl) {
				const ctx = canvasEl.getContext("2d");
				ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
			}
		}

		function initParticles() {
			if (typeof document === "undefined") return;
			document.addEventListener("visibilitychange", () => {
				if (document.hidden) {
					stopParticles();
					stopScene();
					return;
				}
				const skin = activeSkin();
				if (!skin) return;
				if (particlesEnabled) startParticles();
				if (!document.documentElement.classList.contains("dsh-gf-upload")) startScene(skin);
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

			// panel opacity slider (glass transparency)
			const panelValueEl = el("b", { text: "" });
			const panelSlider = el("input", { type: "range", min: "15", max: "100", step: "1" });
			const renderPanel = () => {
				panelSlider.value = String(Math.round(cfg.panel * 100));
				panelValueEl.textContent = `${Math.round(cfg.panel * 100)}%`;
			};
			panelSlider.addEventListener("input", () => {
				cfg.panel = Number(panelSlider.value) / 100;
				panelValueEl.textContent = `${panelSlider.value}%`;
				onChange(cfg);
			});
			panel.append(el("div", { class: "dsh-row" }, [
				el("label", { class: "dsh-label" }, [el("span", { text: "面板透明度" }), panelValueEl]),
				panelSlider
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
			panel._renderPanel = renderPanel;
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
				panel._renderPanel();
				panel._renderParticle();
				return saved;
			});
			toggle.addEventListener("click", () => panel.classList.toggle("dsh-open"));
			document.body.append(toggle);
			document.body.append(panel);
			panel._syncThumb();
			panel._renderMask();
			panel._renderPanel();
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

		/**
		 * Restore-state shared by apply() and applySetSkin(): the last
		 * observed built-in appearance value, and whether a saved skin may
		 * still be re-asserted.
		 */
		let lastSeenDurable = null;
		let savedValid = false;

		/**
		 * Apply a skin id (from either the settings row or the floating
		 * panel). Picking DEFAULT_SKIN is a deliberate user action: clear the
		 * saved skin AND mark the durable value so the upcoming theme/change
		 * with "system" is not misread as an adoption echo that re-asserts
		 * the previous skin (the "can't switch back" bug).
		 */
		function applySetSkin(id) {
			if (id === DEFAULT_SKIN) {
				savedValid = false;
				lastSeenDurable = DEFAULT_SKIN;
			}
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
			savedValid = typeof saved === "string" && saved !== DEFAULT_SKIN && SKINS.some((skinDefinition) => skinDefinition.id === saved);
			lastSeenDurable = null;
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
					setSkin: (id) => applySetSkin(id)
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
