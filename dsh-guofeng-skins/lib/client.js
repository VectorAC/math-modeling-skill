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
		{
		  "id": "jianlai",
		  "name": "剑来",
		  "colorScheme": "dark",
		  "tokens": {
		    "--dsw-static-neutral-50": "#e8e0cc",
		    "--dsw-static-neutral-100": "#d4cdba",
		    "--dsw-static-neutral-150": "#cdc6b4",
		    "--dsw-static-neutral-200": "#b6b0a0",
		    "--dsw-static-neutral-250": "#868278",
		    "--dsw-static-neutral-300": "#76726a",
		    "--dsw-static-neutral-400": "#5f5b56",
		    "--dsw-static-neutral-500": "#4a4745",
		    "--dsw-static-neutral-550": "#464646",
		    "--dsw-static-neutral-600": "#464646",
		    "--dsw-static-neutral-700": "#464646",
		    "--dsw-static-neutral-800": "#1c1b20",
		    "--dsw-static-neutral-850": "#1e1e22",
		    "--dsw-static-neutral-900": "#17161a",
		    "--dsw-static-neutral-1000": "#09090a",
		    "--dsw-static-neutral-00": "#e8e0cc",
		    "--dsw-static-neutral-bluish-50": "#e8e0cc",
		    "--dsw-static-neutral-bluish-60": "#e1d9c5",
		    "--dsw-static-neutral-bluish-75": "#d9d2bf",
		    "--dsw-static-neutral-bluish-100": "#d4cdba",
		    "--dsw-static-neutral-bluish-150": "#cfc8b6",
		    "--dsw-static-neutral-bluish-200": "#cac3b2",
		    "--dsw-static-neutral-bluish-300": "#b6b0a0",
		    "--dsw-static-neutral-bluish-400": "#7e7a71",
		    "--dsw-static-neutral-bluish-500": "#5f5b56",
		    "--dsw-static-neutral-bluish-600": "#464646",
		    "--dsw-static-neutral-bluish-700": "#464646",
		    "--dsw-static-neutral-bluish-750": "#373739",
		    "--dsw-static-neutral-bluish-800": "#1c1b20",
		    "--dsw-static-neutral-bluish-850": "#1e1e22",
		    "--dsw-static-neutral-bluish-875": "#232429",
		    "--dsw-static-neutral-bluish-900": "#232429",
		    "--dsw-static-neutral-bluish-950": "#17161a",
		    "--dsw-static-neutral-bluish-1000": "#0c0b0d",
		    "--dsw-static-neutral-bluish-00": "#e8e0cc",
		    "--dsw-static-deepseek-50": "#d3d4be",
		    "--dsw-static-deepseek-100": "#bfc7b0",
		    "--dsw-static-deepseek-200": "#aabba2",
		    "--dsw-static-deepseek-300": "#96ae94",
		    "--dsw-static-deepseek-400": "#7a9e81",
		    "--dsw-static-deepseek-450": "#5f8d6e",
		    "--dsw-static-deepseek-500": "#5f8d6e",
		    "--dsw-static-deepseek-600": "#51755d",
		    "--dsw-static-deepseek-800": "#3b5244",
		    "--dsw-static-deepseek-900": "#304037",
		    "--dsw-static-deepseek-700-delete": "#425d4c",
		    "--dsw-static-blue-50": "#d0d1c5",
		    "--dsw-static-blue-75": "#c1c8c1",
		    "--dsw-static-blue-100": "#b1bebc",
		    "--dsw-static-blue-300": "#81a1ae",
		    "--dsw-static-blue-400": "#628ea5",
		    "--dsw-static-blue-450": "#4a7f9e",
		    "--dsw-static-blue-500": "#4a7f9e",
		    "--dsw-static-blue-600": "#3d657d",
		    "--dsw-static-blue-800": "#314b5c",
		    "--dsw-static-blue-900": "#293b48",
		    "--dsw-static-blue-950": "#24303b",
		    "--dsw-static-blue-50p": "#c8cdc3",
		    "--dsw-static-red-50": "#e0c7b4",
		    "--dsw-static-red-100": "#d7ae9d",
		    "--dsw-static-red-400": "#b03a2e",
		    "--dsw-static-red-500": "#ba584a",
		    "--dsw-static-red-600": "#94342a",
		    "--dsw-static-red-900": "#452120",
		    "--dsw-static-green-100": "#baccad",
		    "--dsw-static-green-400": "#4f9e63",
		    "--dsw-static-green-500": "#66a873",
		    "--dsw-static-green-900": "#283f30",
		    "--dsw-static-amber-100": "#dfcd9b",
		    "--dsw-static-amber-400": "#c9a227",
		    "--dsw-static-amber-500": "#cda93b",
		    "--dsw-static-amber-600": "#ae8d25",
		    "--dsw-static-amber-900": "#4c401e",
		    "--dsw-alias-bg-base": "rgba(23, 22, 26, 0.66)",
		    "--dsw-alias-bg-layer-1": "rgba(35, 36, 41, 0.52)",
		    "--dsw-alias-bg-layer-2": "rgba(30, 30, 34, 0.44)",
		    "--dsw-alias-bg-layer-3": "rgba(28, 27, 32, 0.4)",
		    "--dsw-alias-bg-module-platform": "rgba(28, 27, 32, 0.42)",
		    "--dsw-alias-bg-overlay": "rgba(55, 55, 57, 0.45)",
		    "--dsw-alias-bg-multi-select": "rgba(55, 55, 57, 0.45)",
		    "--dsw-alias-bg-skeleton": "rgba(232, 224, 204, 0.05)",
		    "--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.45)",
		    "--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.55)",
		    "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.65)",
		    "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.88)",
		    "--dsw-alias-bg-mask-drop": "rgba(0, 0, 0, 0.7)",
		    "--dsw-alias-border-l1": "color-mix(in srgb, #464646 30%, transparent)",
		    "--dsw-alias-border-l2": "color-mix(in srgb, #464646 45%, transparent)",
		    "--dsw-alias-border-l3": "color-mix(in srgb, #464646 60%, transparent)",
		    "--dsw-alias-border-l4": "color-mix(in srgb, #464646 75%, transparent)",
		    "--dsw-alias-border-inverted": "rgba(0, 0, 0, 0.08)",
		    "--dsw-alias-border-inverted2": "rgba(0, 0, 0, 0.12)",
		    "--dsw-alias-border-l2-darkmode-thin": "rgba(70, 70, 70, 0.3)",
		    "--dsw-alias-brand-primary": "#5f8d6e",
		    "--dsw-alias-brand-primary-invert": "#e8e0cc",
		    "--dsw-alias-brand-primary-new-colorprimary-new-color": "#5f8d6e",
		    "--dsw-alias-brand-text": "#4a7f9e",
		    "--dsw-alias-button-contrast-fill": "#17161a",
		    "--dsw-alias-button-elevated-fill": "rgba(30, 30, 34, 0.7)",
		    "--dsw-alias-button-floating-fill": "rgba(55, 55, 57, 0.7)",
		    "--dsw-alias-button-floating-hover": "rgba(70, 70, 70, 0.55)",
		    "--dsw-alias-button-ghost-active-border": "#464646",
		    "--dsw-alias-button-ghost-active-fill": "rgba(30, 30, 34, 0.6)",
		    "--dsw-alias-button-ghost-active-hover": "rgba(55, 55, 57, 0.6)",
		    "--dsw-alias-button-info-fill": "#5f8d6e",
		    "--dsw-alias-button-info-hover": "#425d4c",
		    "--dsw-alias-button-primary-dimmed": "#51755d",
		    "--dsw-alias-button-primary-fill": "#5f8d6e",
		    "--dsw-alias-button-primary-hover": "#6d9577",
		    "--dsw-alias-button-tool-bar-fill": "rgba(70, 70, 70, 0.35)",
		    "--dsw-alias-button-tool-bar-fill-invisible": "rgba(70, 70, 70, 0.2)",
		    "--dsw-alias-button-tool-bar-hover": "rgba(95, 141, 110, 0.35)",
		    "--dsw-alias-interactive-bg-active": "rgba(232, 224, 204, 0.14)",
		    "--dsw-alias-interactive-bg-hover": "rgba(232, 224, 204, 0.08)",
		    "--dsw-alias-interactive-bg-hover-accent": "rgba(95, 141, 110, 0.16)",
		    "--dsw-alias-interactive-bg-hover-danger": "rgba(176, 58, 46, 0.14)",
		    "--dsw-alias-interactive-bg-hover-solid": "rgba(55, 55, 57, 0.75)",
		    "--dsw-alias-label-caption": "#464646",
		    "--dsw-alias-label-dimmed": "#5f5b56",
		    "--dsw-alias-label-primary": "#e8e0cc",
		    "--dsw-alias-label-primary-bluish": "#e8e0cc",
		    "--dsw-alias-label-primary-dimmed": "#7e7a71",
		    "--dsw-alias-label-primary-foreground": "#17161a",
		    "--dsw-alias-label-primary-inverted": "#373739",
		    "--dsw-alias-label-secondary": "#b6b0a0",
		    "--dsw-alias-label-tertiary": "#7e7a71",
		    "--dsw-alias-markdown-citation": "rgba(55, 55, 57, 0.55)",
		    "--dsw-alias-markdown-code-block": "rgba(30, 30, 34, 0.5)",
		    "--dsw-alias-markdown-code-block-banner": "rgba(35, 36, 41, 0.5)",
		    "--dsw-alias-markdown-code-segment-selected": "rgba(55, 55, 57, 0.55)",
		    "--dsw-alias-markdown-code-segment-unselected": "rgba(30, 30, 34, 0.5)",
		    "--dsw-alias-markdown-inline-code": "rgba(55, 55, 57, 0.55)",
		    "--dsw-alias-markdown-placeholder": "#5f5b56",
		    "--dsw-alias-markdown-tag": "#5f8d6e",
		    "--dsw-alias-scrollbar-bg-l1": "rgba(70, 70, 70, 0.25)",
		    "--dsw-alias-scrollbar-bg-l2": "rgba(70, 70, 70, 0.25)",
		    "--dsw-alias-scrollbar-hover-l1": "rgba(232, 224, 204, 0.18)",
		    "--dsw-alias-scrollbar-hover-l2": "rgba(232, 224, 204, 0.18)",
		    "--dsw-alias-state-business-primary": "#4a7f9e",
		    "--dsw-alias-state-business-tertiary": "rgba(74, 127, 158, 0.1)",
		    "--dsw-alias-state-error-primary": "#b03a2e",
		    "--dsw-alias-state-error-secondary": "rgba(176, 58, 46, 0.16)",
		    "--dsw-alias-state-success-primary": "#4f9e63",
		    "--dsw-alias-state-success-secondary": "rgba(79, 158, 99, 0.16)",
		    "--dsw-alias-state-success-tertiary": "rgba(79, 158, 99, 0.1)",
		    "--dsw-alias-state-warn-label": "#d4b861",
		    "--dsw-alias-state-warn-primary": "#c9a227",
		    "--dsw-alias-state-warn-secondary": "rgba(201, 162, 39, 0.16)",
		    "--dsw-alias-state-warn-tertiary": "rgba(201, 162, 39, 0.1)",
		    "--dsw-alias-toast-bg": "rgba(30, 30, 34, 0.7)",
		    "--dsw-alias-tooltip-bg": "rgba(55, 55, 57, 0.75)",
		    "--dsw-specific-sidebar-fill": "rgba(23, 22, 26, 0.62)",
		    "--dsw-specific-sidebar-nav-item-active": "rgba(55, 55, 57, 0.6)",
		    "--dsw-specific-sidebar-nav-item-active-accent": "rgba(95, 141, 110, 0.25)",
		    "--dsw-specific-sidebar-nav-item-hover": "rgba(30, 30, 34, 0.5)",
		    "--dsw-specific-bubble": "rgba(30, 30, 34, 0.5)",
		    "--dsw-specific-bubble-highlight": "rgba(55, 55, 57, 0.55)",
		    "--dsw-specific-input-major": "rgba(23, 22, 26, 0.62)",
		    "--dsw-specific-login-input": "rgba(23, 22, 26, 0.62)",
		    "--dsw-specific-menu": "rgba(30, 30, 34, 0.55)",
		    "--dsw-specific-selector": "rgba(55, 55, 57, 0.55)",
		    "--dsw-specific-tip": "rgba(30, 30, 34, 0.55)",
		    "--shiki-background": "rgba(30, 30, 34, 0.5)",
		    "--shiki-foreground": "#e8e0cc",
		    "--shiki-token-comment": "rgba(182, 176, 160, 0.85)",
		    "--shiki-token-constant": "#c9a227",
		    "--shiki-token-function": "#4a7f9e",
		    "--shiki-token-keyword": "#c9a227",
		    "--shiki-token-link": "#4a7f9e",
		    "--shiki-token-parameter": "#c9a227",
		    "--shiki-token-punctuation": "#b6b0a0",
		    "--shiki-token-string": "#75af7d",
		    "--shiki-token-string-expression": "#75af7d"
		  }
		},
		{
		  "id": "cangyuantu",
		  "name": "沧元图",
		  "colorScheme": "dark",
		  "tokens": {
		    "--dsw-static-neutral-50": "#dbe7f7",
		    "--dsw-static-neutral-100": "#becce0",
		    "--dsw-static-neutral-150": "#b3c2d7",
		    "--dsw-static-neutral-200": "#93a3bd",
		    "--dsw-static-neutral-250": "#6b7890",
		    "--dsw-static-neutral-300": "#5e6981",
		    "--dsw-static-neutral-400": "#4a546a",
		    "--dsw-static-neutral-500": "#394156",
		    "--dsw-static-neutral-550": "#3d455a",
		    "--dsw-static-neutral-600": "#3d455a",
		    "--dsw-static-neutral-700": "#3d455a",
		    "--dsw-static-neutral-800": "#13182d",
		    "--dsw-static-neutral-850": "#151b30",
		    "--dsw-static-neutral-900": "#0e1326",
		    "--dsw-static-neutral-1000": "#06080f",
		    "--dsw-static-neutral-00": "#dbe7f7",
		    "--dsw-static-neutral-bluish-50": "#dbe7f7",
		    "--dsw-static-neutral-bluish-60": "#d0ddee",
		    "--dsw-static-neutral-bluish-75": "#c5d3e6",
		    "--dsw-static-neutral-bluish-100": "#becce0",
		    "--dsw-static-neutral-bluish-150": "#b7c5da",
		    "--dsw-static-neutral-bluish-200": "#b0bed4",
		    "--dsw-static-neutral-bluish-300": "#93a3bd",
		    "--dsw-static-neutral-bluish-400": "#647188",
		    "--dsw-static-neutral-bluish-500": "#4a546a",
		    "--dsw-static-neutral-bluish-600": "#3d455a",
		    "--dsw-static-neutral-bluish-700": "#3d455a",
		    "--dsw-static-neutral-bluish-750": "#2d354b",
		    "--dsw-static-neutral-bluish-800": "#13182d",
		    "--dsw-static-neutral-bluish-850": "#151b30",
		    "--dsw-static-neutral-bluish-875": "#1a2138",
		    "--dsw-static-neutral-bluish-900": "#1a2138",
		    "--dsw-static-neutral-bluish-950": "#0e1326",
		    "--dsw-static-neutral-bluish-1000": "#070a13",
		    "--dsw-static-neutral-bluish-00": "#dbe7f7",
		    "--dsw-static-deepseek-50": "#c1cfe7",
		    "--dsw-static-deepseek-100": "#a6b8d8",
		    "--dsw-static-deepseek-200": "#8ca0c8",
		    "--dsw-static-deepseek-300": "#7189b9",
		    "--dsw-static-deepseek-400": "#4e69a4",
		    "--dsw-static-deepseek-450": "#2b4a8f",
		    "--dsw-static-deepseek-500": "#2b4a8f",
		    "--dsw-static-deepseek-600": "#253f7a",
		    "--dsw-static-deepseek-800": "#1d2f5b",
		    "--dsw-static-deepseek-900": "#18264b",
		    "--dsw-static-deepseek-700-delete": "#1f3465",
		    "--dsw-static-blue-50": "#d2e5f8",
		    "--dsw-static-blue-75": "#cce3f9",
		    "--dsw-static-blue-100": "#c6e2fa",
		    "--dsw-static-blue-300": "#b4ddfc",
		    "--dsw-static-blue-400": "#a8dafe",
		    "--dsw-static-blue-450": "#9fd8ff",
		    "--dsw-static-blue-500": "#9fd8ff",
		    "--dsw-static-blue-600": "#7ba7c9",
		    "--dsw-static-blue-800": "#577693",
		    "--dsw-static-blue-900": "#415872",
		    "--dsw-static-blue-950": "#32445c",
		    "--dsw-static-blue-50p": "#cfe4f9",
		    "--dsw-static-red-50": "#d7d1dd",
		    "--dsw-static-red-100": "#d3bcc3",
		    "--dsw-static-red-400": "#c0564a",
		    "--dsw-static-red-500": "#c57069",
		    "--dsw-static-red-600": "#a04a44",
		    "--dsw-static-red-900": "#432731",
		    "--dsw-static-green-100": "#acd6dc",
		    "--dsw-static-green-400": "#3fae9d",
		    "--dsw-static-green-500": "#56b7ab",
		    "--dsw-static-green-900": "#1d424a",
		    "--dsw-static-amber-100": "#d9d6bd",
		    "--dsw-static-amber-400": "#d4af37",
		    "--dsw-static-amber-500": "#d5b64e",
		    "--dsw-static-amber-600": "#b69834",
		    "--dsw-static-amber-900": "#49422b",
		    "--dsw-alias-bg-base": "rgba(14, 19, 38, 0.66)",
		    "--dsw-alias-bg-layer-1": "rgba(26, 33, 56, 0.52)",
		    "--dsw-alias-bg-layer-2": "rgba(21, 27, 48, 0.44)",
		    "--dsw-alias-bg-layer-3": "rgba(19, 24, 45, 0.4)",
		    "--dsw-alias-bg-module-platform": "rgba(19, 24, 45, 0.42)",
		    "--dsw-alias-bg-overlay": "rgba(45, 53, 75, 0.45)",
		    "--dsw-alias-bg-multi-select": "rgba(45, 53, 75, 0.45)",
		    "--dsw-alias-bg-skeleton": "rgba(219, 231, 247, 0.05)",
		    "--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.45)",
		    "--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.55)",
		    "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.65)",
		    "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.88)",
		    "--dsw-alias-bg-mask-drop": "rgba(0, 0, 0, 0.7)",
		    "--dsw-alias-border-l1": "color-mix(in srgb, #3d455a 30%, transparent)",
		    "--dsw-alias-border-l2": "color-mix(in srgb, #3d455a 45%, transparent)",
		    "--dsw-alias-border-l3": "color-mix(in srgb, #3d455a 60%, transparent)",
		    "--dsw-alias-border-l4": "color-mix(in srgb, #3d455a 75%, transparent)",
		    "--dsw-alias-border-inverted": "rgba(0, 0, 0, 0.08)",
		    "--dsw-alias-border-inverted2": "rgba(0, 0, 0, 0.12)",
		    "--dsw-alias-border-l2-darkmode-thin": "rgba(61, 69, 90, 0.3)",
		    "--dsw-alias-brand-primary": "#2b4a8f",
		    "--dsw-alias-brand-primary-invert": "#dbe7f7",
		    "--dsw-alias-brand-primary-new-colorprimary-new-color": "#2b4a8f",
		    "--dsw-alias-brand-text": "#9fd8ff",
		    "--dsw-alias-button-contrast-fill": "#0e1326",
		    "--dsw-alias-button-elevated-fill": "rgba(21, 27, 48, 0.7)",
		    "--dsw-alias-button-floating-fill": "rgba(45, 53, 75, 0.7)",
		    "--dsw-alias-button-floating-hover": "rgba(61, 69, 90, 0.55)",
		    "--dsw-alias-button-ghost-active-border": "#3d455a",
		    "--dsw-alias-button-ghost-active-fill": "rgba(21, 27, 48, 0.6)",
		    "--dsw-alias-button-ghost-active-hover": "rgba(45, 53, 75, 0.6)",
		    "--dsw-alias-button-info-fill": "#2b4a8f",
		    "--dsw-alias-button-info-hover": "#1f3465",
		    "--dsw-alias-button-primary-dimmed": "#253f7a",
		    "--dsw-alias-button-primary-fill": "#2b4a8f",
		    "--dsw-alias-button-primary-hover": "#3d5a99",
		    "--dsw-alias-button-tool-bar-fill": "rgba(61, 69, 90, 0.35)",
		    "--dsw-alias-button-tool-bar-fill-invisible": "rgba(61, 69, 90, 0.2)",
		    "--dsw-alias-button-tool-bar-hover": "rgba(43, 74, 143, 0.35)",
		    "--dsw-alias-interactive-bg-active": "rgba(219, 231, 247, 0.14)",
		    "--dsw-alias-interactive-bg-hover": "rgba(219, 231, 247, 0.08)",
		    "--dsw-alias-interactive-bg-hover-accent": "rgba(43, 74, 143, 0.16)",
		    "--dsw-alias-interactive-bg-hover-danger": "rgba(192, 86, 74, 0.14)",
		    "--dsw-alias-interactive-bg-hover-solid": "rgba(45, 53, 75, 0.75)",
		    "--dsw-alias-label-caption": "#3d455a",
		    "--dsw-alias-label-dimmed": "#4a546a",
		    "--dsw-alias-label-primary": "#dbe7f7",
		    "--dsw-alias-label-primary-bluish": "#dbe7f7",
		    "--dsw-alias-label-primary-dimmed": "#647188",
		    "--dsw-alias-label-primary-foreground": "#0e1326",
		    "--dsw-alias-label-primary-inverted": "#2d354b",
		    "--dsw-alias-label-secondary": "#93a3bd",
		    "--dsw-alias-label-tertiary": "#647188",
		    "--dsw-alias-markdown-citation": "rgba(45, 53, 75, 0.55)",
		    "--dsw-alias-markdown-code-block": "rgba(21, 27, 48, 0.5)",
		    "--dsw-alias-markdown-code-block-banner": "rgba(26, 33, 56, 0.5)",
		    "--dsw-alias-markdown-code-segment-selected": "rgba(45, 53, 75, 0.55)",
		    "--dsw-alias-markdown-code-segment-unselected": "rgba(21, 27, 48, 0.5)",
		    "--dsw-alias-markdown-inline-code": "rgba(45, 53, 75, 0.55)",
		    "--dsw-alias-markdown-placeholder": "#4a546a",
		    "--dsw-alias-markdown-tag": "#2b4a8f",
		    "--dsw-alias-scrollbar-bg-l1": "rgba(61, 69, 90, 0.25)",
		    "--dsw-alias-scrollbar-bg-l2": "rgba(61, 69, 90, 0.25)",
		    "--dsw-alias-scrollbar-hover-l1": "rgba(219, 231, 247, 0.18)",
		    "--dsw-alias-scrollbar-hover-l2": "rgba(219, 231, 247, 0.18)",
		    "--dsw-alias-state-business-primary": "#9fd8ff",
		    "--dsw-alias-state-business-tertiary": "rgba(159, 216, 255, 0.1)",
		    "--dsw-alias-state-error-primary": "#c0564a",
		    "--dsw-alias-state-error-secondary": "rgba(192, 86, 74, 0.16)",
		    "--dsw-alias-state-success-primary": "#3fae9d",
		    "--dsw-alias-state-success-secondary": "rgba(63, 174, 157, 0.16)",
		    "--dsw-alias-state-success-tertiary": "rgba(63, 174, 157, 0.1)",
		    "--dsw-alias-state-warn-label": "#d6c37a",
		    "--dsw-alias-state-warn-primary": "#d4af37",
		    "--dsw-alias-state-warn-secondary": "rgba(212, 175, 55, 0.16)",
		    "--dsw-alias-state-warn-tertiary": "rgba(212, 175, 55, 0.1)",
		    "--dsw-alias-toast-bg": "rgba(21, 27, 48, 0.7)",
		    "--dsw-alias-tooltip-bg": "rgba(45, 53, 75, 0.75)",
		    "--dsw-specific-sidebar-fill": "rgba(14, 19, 38, 0.62)",
		    "--dsw-specific-sidebar-nav-item-active": "rgba(45, 53, 75, 0.6)",
		    "--dsw-specific-sidebar-nav-item-active-accent": "rgba(43, 74, 143, 0.25)",
		    "--dsw-specific-sidebar-nav-item-hover": "rgba(21, 27, 48, 0.5)",
		    "--dsw-specific-bubble": "rgba(21, 27, 48, 0.5)",
		    "--dsw-specific-bubble-highlight": "rgba(45, 53, 75, 0.55)",
		    "--dsw-specific-input-major": "rgba(14, 19, 38, 0.62)",
		    "--dsw-specific-login-input": "rgba(14, 19, 38, 0.62)",
		    "--dsw-specific-menu": "rgba(21, 27, 48, 0.55)",
		    "--dsw-specific-selector": "rgba(45, 53, 75, 0.55)",
		    "--dsw-specific-tip": "rgba(21, 27, 48, 0.55)",
		    "--shiki-background": "rgba(21, 27, 48, 0.5)",
		    "--shiki-foreground": "#dbe7f7",
		    "--shiki-token-comment": "rgba(147, 163, 189, 0.85)",
		    "--shiki-token-constant": "#d4af37",
		    "--shiki-token-function": "#9fd8ff",
		    "--shiki-token-keyword": "#d4af37",
		    "--shiki-token-link": "#9fd8ff",
		    "--shiki-token-parameter": "#d4af37",
		    "--shiki-token-punctuation": "#93a3bd",
		    "--shiki-token-string": "#66bcb4",
		    "--shiki-token-string-expression": "#66bcb4"
		  }
		},
		{
		  "id": "zhanshen",
		  "name": "斩神",
		  "colorScheme": "dark",
		  "tokens": {
		    "--dsw-static-neutral-50": "#d8d9de",
		    "--dsw-static-neutral-100": "#bbbcc2",
		    "--dsw-static-neutral-150": "#b0b1b8",
		    "--dsw-static-neutral-200": "#8f9198",
		    "--dsw-static-neutral-250": "#686970",
		    "--dsw-static-neutral-300": "#5b5c63",
		    "--dsw-static-neutral-400": "#48484f",
		    "--dsw-static-neutral-500": "#37373e",
		    "--dsw-static-neutral-550": "#3c3c44",
		    "--dsw-static-neutral-600": "#3c3c44",
		    "--dsw-static-neutral-700": "#3c3c44",
		    "--dsw-static-neutral-800": "#121219",
		    "--dsw-static-neutral-850": "#14141b",
		    "--dsw-static-neutral-900": "#0d0d13",
		    "--dsw-static-neutral-1000": "#050508",
		    "--dsw-static-neutral-00": "#d8d9de",
		    "--dsw-static-neutral-bluish-50": "#d8d9de",
		    "--dsw-static-neutral-bluish-60": "#cdced4",
		    "--dsw-static-neutral-bluish-75": "#c2c3c9",
		    "--dsw-static-neutral-bluish-100": "#bbbcc2",
		    "--dsw-static-neutral-bluish-150": "#b4b5bb",
		    "--dsw-static-neutral-bluish-200": "#acaeb4",
		    "--dsw-static-neutral-bluish-300": "#8f9198",
		    "--dsw-static-neutral-bluish-400": "#626369",
		    "--dsw-static-neutral-bluish-500": "#48484f",
		    "--dsw-static-neutral-bluish-600": "#3c3c44",
		    "--dsw-static-neutral-bluish-700": "#3c3c44",
		    "--dsw-static-neutral-bluish-750": "#2d2d35",
		    "--dsw-static-neutral-bluish-800": "#121219",
		    "--dsw-static-neutral-bluish-850": "#14141b",
		    "--dsw-static-neutral-bluish-875": "#1a1a22",
		    "--dsw-static-neutral-bluish-900": "#1a1a22",
		    "--dsw-static-neutral-bluish-950": "#0d0d13",
		    "--dsw-static-neutral-bluish-1000": "#07070a",
		    "--dsw-static-neutral-bluish-00": "#d8d9de",
		    "--dsw-static-deepseek-50": "#c0c6d2",
		    "--dsw-static-deepseek-100": "#a9b3c6",
		    "--dsw-static-deepseek-200": "#91a0ba",
		    "--dsw-static-deepseek-300": "#7a8daf",
		    "--dsw-static-deepseek-400": "#5a749f",
		    "--dsw-static-deepseek-450": "#3b5b8f",
		    "--dsw-static-deepseek-500": "#3b5b8f",
		    "--dsw-static-deepseek-600": "#324b76",
		    "--dsw-static-deepseek-800": "#243451",
		    "--dsw-static-deepseek-900": "#1d283e",
		    "--dsw-static-deepseek-700-delete": "#293c5d",
		    "--dsw-static-blue-50": "#ccced4",
		    "--dsw-static-blue-75": "#c5c7cd",
		    "--dsw-static-blue-100": "#bdbfc6",
		    "--dsw-static-blue-300": "#a5a9b1",
		    "--dsw-static-blue-400": "#969aa3",
		    "--dsw-static-blue-450": "#8a8f98",
		    "--dsw-static-blue-500": "#8a8f98",
		    "--dsw-static-blue-600": "#6b6f77",
		    "--dsw-static-blue-800": "#4c4e56",
		    "--dsw-static-blue-900": "#393b42",
		    "--dsw-static-blue-950": "#2c2e34",
		    "--dsw-static-blue-50p": "#c8cad0",
		    "--dsw-static-red-50": "#d0bec2",
		    "--dsw-static-red-100": "#c8a3a6",
		    "--dsw-static-red-400": "#a12622",
		    "--dsw-static-red-500": "#ab4644",
		    "--dsw-static-red-600": "#86221f",
		    "--dsw-static-red-900": "#391518",
		    "--dsw-static-green-100": "#adc7c2",
		    "--dsw-static-green-400": "#4a9e7f",
		    "--dsw-static-green-500": "#5fa78d",
		    "--dsw-static-green-900": "#1f3933",
		    "--dsw-static-amber-100": "#d4c9a7",
		    "--dsw-static-amber-400": "#c9a227",
		    "--dsw-static-amber-500": "#cba93d",
		    "--dsw-static-amber-600": "#ad8c24",
		    "--dsw-static-amber-900": "#453a19",
		    "--dsw-alias-bg-base": "rgba(13, 13, 19, 0.66)",
		    "--dsw-alias-bg-layer-1": "rgba(26, 26, 34, 0.52)",
		    "--dsw-alias-bg-layer-2": "rgba(20, 20, 27, 0.44)",
		    "--dsw-alias-bg-layer-3": "rgba(18, 18, 25, 0.4)",
		    "--dsw-alias-bg-module-platform": "rgba(18, 18, 25, 0.42)",
		    "--dsw-alias-bg-overlay": "rgba(45, 45, 53, 0.45)",
		    "--dsw-alias-bg-multi-select": "rgba(45, 45, 53, 0.45)",
		    "--dsw-alias-bg-skeleton": "rgba(216, 217, 222, 0.05)",
		    "--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.45)",
		    "--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.55)",
		    "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.65)",
		    "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.88)",
		    "--dsw-alias-bg-mask-drop": "rgba(0, 0, 0, 0.7)",
		    "--dsw-alias-border-l1": "color-mix(in srgb, #3c3c44 30%, transparent)",
		    "--dsw-alias-border-l2": "color-mix(in srgb, #3c3c44 45%, transparent)",
		    "--dsw-alias-border-l3": "color-mix(in srgb, #3c3c44 60%, transparent)",
		    "--dsw-alias-border-l4": "color-mix(in srgb, #3c3c44 75%, transparent)",
		    "--dsw-alias-border-inverted": "rgba(0, 0, 0, 0.08)",
		    "--dsw-alias-border-inverted2": "rgba(0, 0, 0, 0.12)",
		    "--dsw-alias-border-l2-darkmode-thin": "rgba(60, 60, 68, 0.3)",
		    "--dsw-alias-brand-primary": "#3b5b8f",
		    "--dsw-alias-brand-primary-invert": "#d8d9de",
		    "--dsw-alias-brand-primary-new-colorprimary-new-color": "#3b5b8f",
		    "--dsw-alias-brand-text": "#8a8f98",
		    "--dsw-alias-button-contrast-fill": "#0d0d13",
		    "--dsw-alias-button-elevated-fill": "rgba(20, 20, 27, 0.7)",
		    "--dsw-alias-button-floating-fill": "rgba(45, 45, 53, 0.7)",
		    "--dsw-alias-button-floating-hover": "rgba(60, 60, 68, 0.55)",
		    "--dsw-alias-button-ghost-active-border": "#3c3c44",
		    "--dsw-alias-button-ghost-active-fill": "rgba(20, 20, 27, 0.6)",
		    "--dsw-alias-button-ghost-active-hover": "rgba(45, 45, 53, 0.6)",
		    "--dsw-alias-button-info-fill": "#3b5b8f",
		    "--dsw-alias-button-info-hover": "#293c5d",
		    "--dsw-alias-button-primary-dimmed": "#324b76",
		    "--dsw-alias-button-primary-fill": "#3b5b8f",
		    "--dsw-alias-button-primary-hover": "#4b6897",
		    "--dsw-alias-button-tool-bar-fill": "rgba(60, 60, 68, 0.35)",
		    "--dsw-alias-button-tool-bar-fill-invisible": "rgba(60, 60, 68, 0.2)",
		    "--dsw-alias-button-tool-bar-hover": "rgba(59, 91, 143, 0.35)",
		    "--dsw-alias-interactive-bg-active": "rgba(216, 217, 222, 0.14)",
		    "--dsw-alias-interactive-bg-hover": "rgba(216, 217, 222, 0.08)",
		    "--dsw-alias-interactive-bg-hover-accent": "rgba(59, 91, 143, 0.16)",
		    "--dsw-alias-interactive-bg-hover-danger": "rgba(161, 38, 34, 0.14)",
		    "--dsw-alias-interactive-bg-hover-solid": "rgba(45, 45, 53, 0.75)",
		    "--dsw-alias-label-caption": "#3c3c44",
		    "--dsw-alias-label-dimmed": "#48484f",
		    "--dsw-alias-label-primary": "#d8d9de",
		    "--dsw-alias-label-primary-bluish": "#d8d9de",
		    "--dsw-alias-label-primary-dimmed": "#626369",
		    "--dsw-alias-label-primary-foreground": "#0d0d13",
		    "--dsw-alias-label-primary-inverted": "#2d2d35",
		    "--dsw-alias-label-secondary": "#8f9198",
		    "--dsw-alias-label-tertiary": "#626369",
		    "--dsw-alias-markdown-citation": "rgba(45, 45, 53, 0.55)",
		    "--dsw-alias-markdown-code-block": "rgba(20, 20, 27, 0.5)",
		    "--dsw-alias-markdown-code-block-banner": "rgba(26, 26, 34, 0.5)",
		    "--dsw-alias-markdown-code-segment-selected": "rgba(45, 45, 53, 0.55)",
		    "--dsw-alias-markdown-code-segment-unselected": "rgba(20, 20, 27, 0.5)",
		    "--dsw-alias-markdown-inline-code": "rgba(45, 45, 53, 0.55)",
		    "--dsw-alias-markdown-placeholder": "#48484f",
		    "--dsw-alias-markdown-tag": "#3b5b8f",
		    "--dsw-alias-scrollbar-bg-l1": "rgba(60, 60, 68, 0.25)",
		    "--dsw-alias-scrollbar-bg-l2": "rgba(60, 60, 68, 0.25)",
		    "--dsw-alias-scrollbar-hover-l1": "rgba(216, 217, 222, 0.18)",
		    "--dsw-alias-scrollbar-hover-l2": "rgba(216, 217, 222, 0.18)",
		    "--dsw-alias-state-business-primary": "#8a8f98",
		    "--dsw-alias-state-business-tertiary": "rgba(138, 143, 152, 0.1)",
		    "--dsw-alias-state-error-primary": "#a12622",
		    "--dsw-alias-state-error-secondary": "rgba(161, 38, 34, 0.16)",
		    "--dsw-alias-state-success-primary": "#4a9e7f",
		    "--dsw-alias-state-success-secondary": "rgba(74, 158, 127, 0.16)",
		    "--dsw-alias-state-success-tertiary": "rgba(74, 158, 127, 0.1)",
		    "--dsw-alias-state-warn-label": "#ceb567",
		    "--dsw-alias-state-warn-primary": "#c9a227",
		    "--dsw-alias-state-warn-secondary": "rgba(201, 162, 39, 0.16)",
		    "--dsw-alias-state-warn-tertiary": "rgba(201, 162, 39, 0.1)",
		    "--dsw-alias-toast-bg": "rgba(20, 20, 27, 0.7)",
		    "--dsw-alias-tooltip-bg": "rgba(45, 45, 53, 0.75)",
		    "--dsw-specific-sidebar-fill": "rgba(13, 13, 19, 0.62)",
		    "--dsw-specific-sidebar-nav-item-active": "rgba(45, 45, 53, 0.6)",
		    "--dsw-specific-sidebar-nav-item-active-accent": "rgba(59, 91, 143, 0.25)",
		    "--dsw-specific-sidebar-nav-item-hover": "rgba(20, 20, 27, 0.5)",
		    "--dsw-specific-bubble": "rgba(20, 20, 27, 0.5)",
		    "--dsw-specific-bubble-highlight": "rgba(45, 45, 53, 0.55)",
		    "--dsw-specific-input-major": "rgba(13, 13, 19, 0.62)",
		    "--dsw-specific-login-input": "rgba(13, 13, 19, 0.62)",
		    "--dsw-specific-menu": "rgba(20, 20, 27, 0.55)",
		    "--dsw-specific-selector": "rgba(45, 45, 53, 0.55)",
		    "--dsw-specific-tip": "rgba(20, 20, 27, 0.55)",
		    "--shiki-background": "rgba(20, 20, 27, 0.5)",
		    "--shiki-foreground": "#d8d9de",
		    "--shiki-token-comment": "rgba(143, 145, 152, 0.85)",
		    "--shiki-token-constant": "#c9a227",
		    "--shiki-token-function": "#8a8f98",
		    "--shiki-token-keyword": "#c9a227",
		    "--shiki-token-link": "#8a8f98",
		    "--shiki-token-parameter": "#c9a227",
		    "--shiki-token-punctuation": "#8f9198",
		    "--shiki-token-string": "#6ead97",
		    "--shiki-token-string-expression": "#6ead97"
		  }
		},
		{
		  "id": "buliangren",
		  "name": "不良人",
		  "colorScheme": "dark",
		  "tokens": {
		    "--dsw-static-neutral-50": "#e8e4d8",
		    "--dsw-static-neutral-100": "#cfcabf",
		    "--dsw-static-neutral-150": "#c5c1b6",
		    "--dsw-static-neutral-200": "#a9a49a",
		    "--dsw-static-neutral-250": "#7d7974",
		    "--dsw-static-neutral-300": "#6e6b67",
		    "--dsw-static-neutral-400": "#585554",
		    "--dsw-static-neutral-500": "#444343",
		    "--dsw-static-neutral-550": "#454449",
		    "--dsw-static-neutral-600": "#454449",
		    "--dsw-static-neutral-700": "#454449",
		    "--dsw-static-neutral-800": "#1a1a20",
		    "--dsw-static-neutral-850": "#1c1c22",
		    "--dsw-static-neutral-900": "#15151a",
		    "--dsw-static-neutral-1000": "#08080a",
		    "--dsw-static-neutral-00": "#e8e4d8",
		    "--dsw-static-neutral-bluish-50": "#e8e4d8",
		    "--dsw-static-neutral-bluish-60": "#dfdacf",
		    "--dsw-static-neutral-bluish-75": "#d5d1c5",
		    "--dsw-static-neutral-bluish-100": "#cfcabf",
		    "--dsw-static-neutral-bluish-150": "#c9c4b9",
		    "--dsw-static-neutral-bluish-200": "#c2beb3",
		    "--dsw-static-neutral-bluish-300": "#a9a49a",
		    "--dsw-static-neutral-bluish-400": "#75726d",
		    "--dsw-static-neutral-bluish-500": "#585554",
		    "--dsw-static-neutral-bluish-600": "#454449",
		    "--dsw-static-neutral-bluish-700": "#454449",
		    "--dsw-static-neutral-bluish-750": "#35353b",
		    "--dsw-static-neutral-bluish-800": "#1a1a20",
		    "--dsw-static-neutral-bluish-850": "#1c1c22",
		    "--dsw-static-neutral-bluish-875": "#212129",
		    "--dsw-static-neutral-bluish-900": "#212129",
		    "--dsw-static-neutral-bluish-950": "#15151a",
		    "--dsw-static-neutral-bluish-1000": "#0b0b0d",
		    "--dsw-static-neutral-bluish-00": "#e8e4d8",
		    "--dsw-static-deepseek-50": "#decbc0",
		    "--dsw-static-deepseek-100": "#d4b1a9",
		    "--dsw-static-deepseek-200": "#ca9891",
		    "--dsw-static-deepseek-300": "#c07e79",
		    "--dsw-static-deepseek-400": "#b35c5a",
		    "--dsw-static-deepseek-450": "#a63a3a",
		    "--dsw-static-deepseek-500": "#a63a3a",
		    "--dsw-static-deepseek-600": "#893334",
		    "--dsw-static-deepseek-800": "#5e282a",
		    "--dsw-static-deepseek-900": "#482225",
		    "--dsw-static-deepseek-700-delete": "#6c2b2d",
		    "--dsw-static-blue-50": "#d0d0ca",
		    "--dsw-static-blue-75": "#bfc3c1",
		    "--dsw-static-blue-100": "#afb6b7",
		    "--dsw-static-blue-300": "#7e8e9b",
		    "--dsw-static-blue-400": "#5d7488",
		    "--dsw-static-blue-450": "#45607a",
		    "--dsw-static-blue-500": "#45607a",
		    "--dsw-static-blue-600": "#394d62",
		    "--dsw-static-blue-800": "#2d3b4a",
		    "--dsw-static-blue-900": "#262f3c",
		    "--dsw-static-blue-950": "#212832",
		    "--dsw-static-blue-50p": "#c7cac5",
		    "--dsw-static-red-50": "#decbc0",
		    "--dsw-static-red-100": "#d4b1a9",
		    "--dsw-static-red-400": "#a63a3a",
		    "--dsw-static-red-500": "#b25956",
		    "--dsw-static-red-600": "#8c3334",
		    "--dsw-static-red-900": "#412024",
		    "--dsw-static-green-100": "#bfcbbc",
		    "--dsw-static-green-400": "#5f8f7a",
		    "--dsw-static-green-500": "#749c88",
		    "--dsw-static-green-900": "#2b3a37",
		    "--dsw-static-amber-100": "#dfd0a3",
		    "--dsw-static-amber-400": "#c9a227",
		    "--dsw-static-amber-500": "#cdaa3c",
		    "--dsw-static-amber-600": "#ae8d25",
		    "--dsw-static-amber-900": "#4b3f1e",
		    "--dsw-alias-bg-base": "rgba(21, 21, 26, 0.66)",
		    "--dsw-alias-bg-layer-1": "rgba(33, 33, 41, 0.52)",
		    "--dsw-alias-bg-layer-2": "rgba(28, 28, 34, 0.44)",
		    "--dsw-alias-bg-layer-3": "rgba(26, 26, 32, 0.4)",
		    "--dsw-alias-bg-module-platform": "rgba(26, 26, 32, 0.42)",
		    "--dsw-alias-bg-overlay": "rgba(53, 53, 59, 0.45)",
		    "--dsw-alias-bg-multi-select": "rgba(53, 53, 59, 0.45)",
		    "--dsw-alias-bg-skeleton": "rgba(232, 228, 216, 0.05)",
		    "--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.45)",
		    "--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.55)",
		    "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.65)",
		    "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.88)",
		    "--dsw-alias-bg-mask-drop": "rgba(0, 0, 0, 0.7)",
		    "--dsw-alias-border-l1": "color-mix(in srgb, #454449 30%, transparent)",
		    "--dsw-alias-border-l2": "color-mix(in srgb, #454449 45%, transparent)",
		    "--dsw-alias-border-l3": "color-mix(in srgb, #454449 60%, transparent)",
		    "--dsw-alias-border-l4": "color-mix(in srgb, #454449 75%, transparent)",
		    "--dsw-alias-border-inverted": "rgba(0, 0, 0, 0.08)",
		    "--dsw-alias-border-inverted2": "rgba(0, 0, 0, 0.12)",
		    "--dsw-alias-border-l2-darkmode-thin": "rgba(69, 68, 73, 0.3)",
		    "--dsw-alias-brand-primary": "#a63a3a",
		    "--dsw-alias-brand-primary-invert": "#e8e4d8",
		    "--dsw-alias-brand-primary-new-colorprimary-new-color": "#a63a3a",
		    "--dsw-alias-brand-text": "#45607a",
		    "--dsw-alias-button-contrast-fill": "#15151a",
		    "--dsw-alias-button-elevated-fill": "rgba(28, 28, 34, 0.7)",
		    "--dsw-alias-button-floating-fill": "rgba(53, 53, 59, 0.7)",
		    "--dsw-alias-button-floating-hover": "rgba(69, 68, 73, 0.55)",
		    "--dsw-alias-button-ghost-active-border": "#454449",
		    "--dsw-alias-button-ghost-active-fill": "rgba(28, 28, 34, 0.6)",
		    "--dsw-alias-button-ghost-active-hover": "rgba(53, 53, 59, 0.6)",
		    "--dsw-alias-button-info-fill": "#a63a3a",
		    "--dsw-alias-button-info-hover": "#6c2b2d",
		    "--dsw-alias-button-primary-dimmed": "#893334",
		    "--dsw-alias-button-primary-fill": "#a63a3a",
		    "--dsw-alias-button-primary-hover": "#ad4b4a",
		    "--dsw-alias-button-tool-bar-fill": "rgba(69, 68, 73, 0.35)",
		    "--dsw-alias-button-tool-bar-fill-invisible": "rgba(69, 68, 73, 0.2)",
		    "--dsw-alias-button-tool-bar-hover": "rgba(166, 58, 58, 0.35)",
		    "--dsw-alias-interactive-bg-active": "rgba(232, 228, 216, 0.14)",
		    "--dsw-alias-interactive-bg-hover": "rgba(232, 228, 216, 0.08)",
		    "--dsw-alias-interactive-bg-hover-accent": "rgba(166, 58, 58, 0.16)",
		    "--dsw-alias-interactive-bg-hover-danger": "rgba(166, 58, 58, 0.14)",
		    "--dsw-alias-interactive-bg-hover-solid": "rgba(53, 53, 59, 0.75)",
		    "--dsw-alias-label-caption": "#454449",
		    "--dsw-alias-label-dimmed": "#585554",
		    "--dsw-alias-label-primary": "#e8e4d8",
		    "--dsw-alias-label-primary-bluish": "#e8e4d8",
		    "--dsw-alias-label-primary-dimmed": "#75726d",
		    "--dsw-alias-label-primary-foreground": "#15151a",
		    "--dsw-alias-label-primary-inverted": "#35353b",
		    "--dsw-alias-label-secondary": "#a9a49a",
		    "--dsw-alias-label-tertiary": "#75726d",
		    "--dsw-alias-markdown-citation": "rgba(53, 53, 59, 0.55)",
		    "--dsw-alias-markdown-code-block": "rgba(28, 28, 34, 0.5)",
		    "--dsw-alias-markdown-code-block-banner": "rgba(33, 33, 41, 0.5)",
		    "--dsw-alias-markdown-code-segment-selected": "rgba(53, 53, 59, 0.55)",
		    "--dsw-alias-markdown-code-segment-unselected": "rgba(28, 28, 34, 0.5)",
		    "--dsw-alias-markdown-inline-code": "rgba(53, 53, 59, 0.55)",
		    "--dsw-alias-markdown-placeholder": "#585554",
		    "--dsw-alias-markdown-tag": "#a63a3a",
		    "--dsw-alias-scrollbar-bg-l1": "rgba(69, 68, 73, 0.25)",
		    "--dsw-alias-scrollbar-bg-l2": "rgba(69, 68, 73, 0.25)",
		    "--dsw-alias-scrollbar-hover-l1": "rgba(232, 228, 216, 0.18)",
		    "--dsw-alias-scrollbar-hover-l2": "rgba(232, 228, 216, 0.18)",
		    "--dsw-alias-state-business-primary": "#45607a",
		    "--dsw-alias-state-business-tertiary": "rgba(69, 96, 122, 0.1)",
		    "--dsw-alias-state-error-primary": "#a63a3a",
		    "--dsw-alias-state-error-secondary": "rgba(166, 58, 58, 0.16)",
		    "--dsw-alias-state-success-primary": "#5f8f7a",
		    "--dsw-alias-state-success-secondary": "rgba(95, 143, 122, 0.16)",
		    "--dsw-alias-state-success-tertiary": "rgba(95, 143, 122, 0.1)",
		    "--dsw-alias-state-warn-label": "#d4b965",
		    "--dsw-alias-state-warn-primary": "#c9a227",
		    "--dsw-alias-state-warn-secondary": "rgba(201, 162, 39, 0.16)",
		    "--dsw-alias-state-warn-tertiary": "rgba(201, 162, 39, 0.1)",
		    "--dsw-alias-toast-bg": "rgba(28, 28, 34, 0.7)",
		    "--dsw-alias-tooltip-bg": "rgba(53, 53, 59, 0.75)",
		    "--dsw-specific-sidebar-fill": "rgba(21, 21, 26, 0.62)",
		    "--dsw-specific-sidebar-nav-item-active": "rgba(53, 53, 59, 0.6)",
		    "--dsw-specific-sidebar-nav-item-active-accent": "rgba(166, 58, 58, 0.25)",
		    "--dsw-specific-sidebar-nav-item-hover": "rgba(28, 28, 34, 0.5)",
		    "--dsw-specific-bubble": "rgba(28, 28, 34, 0.5)",
		    "--dsw-specific-bubble-highlight": "rgba(53, 53, 59, 0.55)",
		    "--dsw-specific-input-major": "rgba(21, 21, 26, 0.62)",
		    "--dsw-specific-login-input": "rgba(21, 21, 26, 0.62)",
		    "--dsw-specific-menu": "rgba(28, 28, 34, 0.55)",
		    "--dsw-specific-selector": "rgba(53, 53, 59, 0.55)",
		    "--dsw-specific-tip": "rgba(28, 28, 34, 0.55)",
		    "--shiki-background": "rgba(28, 28, 34, 0.5)",
		    "--shiki-foreground": "#e8e4d8",
		    "--shiki-token-comment": "rgba(169, 164, 154, 0.85)",
		    "--shiki-token-constant": "#c9a227",
		    "--shiki-token-function": "#45607a",
		    "--shiki-token-keyword": "#c9a227",
		    "--shiki-token-link": "#45607a",
		    "--shiki-token-parameter": "#c9a227",
		    "--shiki-token-punctuation": "#a9a49a",
		    "--shiki-token-string": "#81a492",
		    "--shiki-token-string-expression": "#81a492"
		  }
		},
		{
		  "id": "tunshixingkong",
		  "name": "吞噬星空",
		  "colorScheme": "dark",
		  "tokens": {
		    "--dsw-static-neutral-50": "#c7d2e0",
		    "--dsw-static-neutral-100": "#a9b4c3",
		    "--dsw-static-neutral-150": "#9ea9b8",
		    "--dsw-static-neutral-200": "#7d8798",
		    "--dsw-static-neutral-250": "#59616f",
		    "--dsw-static-neutral-300": "#4d5461",
		    "--dsw-static-neutral-400": "#3b414d",
		    "--dsw-static-neutral-500": "#2b303b",
		    "--dsw-static-neutral-550": "#313642",
		    "--dsw-static-neutral-600": "#313642",
		    "--dsw-static-neutral-700": "#313642",
		    "--dsw-static-neutral-800": "#090c15",
		    "--dsw-static-neutral-850": "#0b0e18",
		    "--dsw-static-neutral-900": "#05070f",
		    "--dsw-static-neutral-1000": "#020306",
		    "--dsw-static-neutral-00": "#c7d2e0",
		    "--dsw-static-neutral-bluish-50": "#c7d2e0",
		    "--dsw-static-neutral-bluish-60": "#bcc7d5",
		    "--dsw-static-neutral-bluish-75": "#b1bcca",
		    "--dsw-static-neutral-bluish-100": "#a9b4c3",
		    "--dsw-static-neutral-bluish-150": "#a2adbc",
		    "--dsw-static-neutral-bluish-200": "#9ba5b5",
		    "--dsw-static-neutral-bluish-300": "#7d8798",
		    "--dsw-static-neutral-bluish-400": "#535a68",
		    "--dsw-static-neutral-bluish-500": "#3b414d",
		    "--dsw-static-neutral-bluish-600": "#313642",
		    "--dsw-static-neutral-bluish-700": "#313642",
		    "--dsw-static-neutral-bluish-750": "#222732",
		    "--dsw-static-neutral-bluish-800": "#090c15",
		    "--dsw-static-neutral-bluish-850": "#0b0e18",
		    "--dsw-static-neutral-bluish-875": "#10141f",
		    "--dsw-static-neutral-bluish-900": "#10141f",
		    "--dsw-static-neutral-bluish-950": "#05070f",
		    "--dsw-static-neutral-bluish-1000": "#030408",
		    "--dsw-static-neutral-bluish-00": "#c7d2e0",
		    "--dsw-static-deepseek-50": "#b3c6e5",
		    "--dsw-static-deepseek-100": "#9eb9e9",
		    "--dsw-static-deepseek-200": "#8aadee",
		    "--dsw-static-deepseek-300": "#75a0f3",
		    "--dsw-static-deepseek-400": "#5a90f9",
		    "--dsw-static-deepseek-450": "#3f7fff",
		    "--dsw-static-deepseek-500": "#3f7fff",
		    "--dsw-static-deepseek-600": "#3367cf",
		    "--dsw-static-deepseek-800": "#224387",
		    "--dsw-static-deepseek-900": "#193163",
		    "--dsw-static-deepseek-700-delete": "#284f9f",
		    "--dsw-static-blue-50": "#bec0e5",
		    "--dsw-static-blue-75": "#b8b5e8",
		    "--dsw-static-blue-100": "#b2a9eb",
		    "--dsw-static-blue-300": "#9f85f4",
		    "--dsw-static-blue-400": "#936efa",
		    "--dsw-static-blue-450": "#8a5cff",
		    "--dsw-static-blue-500": "#8a5cff",
		    "--dsw-static-blue-600": "#6947c3",
		    "--dsw-static-blue-800": "#483287",
		    "--dsw-static-blue-900": "#342563",
		    "--dsw-static-blue-950": "#261c4b",
		    "--dsw-static-blue-50p": "#bbbae6",
		    "--dsw-static-red-50": "#cbc0ca",
		    "--dsw-static-red-100": "#cfaeb3",
		    "--dsw-static-red-400": "#e05a4a",
		    "--dsw-static-red-500": "#dc7065",
		    "--dsw-static-red-600": "#b94b3f",
		    "--dsw-static-red-900": "#472021",
		    "--dsw-static-green-100": "#9ccfbf",
		    "--dsw-static-green-400": "#37c871",
		    "--dsw-static-green-500": "#4dca82",
		    "--dsw-static-green-900": "#14412c",
		    "--dsw-static-amber-100": "#d8bdb1",
		    "--dsw-static-amber-400": "#ff8c42",
		    "--dsw-static-amber-500": "#f89455",
		    "--dsw-static-amber-600": "#da783a",
		    "--dsw-static-amber-900": "#502f1e",
		    "--dsw-alias-bg-base": "rgba(5, 7, 15, 0.66)",
		    "--dsw-alias-bg-layer-1": "rgba(16, 20, 31, 0.52)",
		    "--dsw-alias-bg-layer-2": "rgba(11, 14, 24, 0.44)",
		    "--dsw-alias-bg-layer-3": "rgba(9, 12, 21, 0.4)",
		    "--dsw-alias-bg-module-platform": "rgba(9, 12, 21, 0.42)",
		    "--dsw-alias-bg-overlay": "rgba(34, 39, 50, 0.45)",
		    "--dsw-alias-bg-multi-select": "rgba(34, 39, 50, 0.45)",
		    "--dsw-alias-bg-skeleton": "rgba(199, 210, 224, 0.05)",
		    "--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.45)",
		    "--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.55)",
		    "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.65)",
		    "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.88)",
		    "--dsw-alias-bg-mask-drop": "rgba(0, 0, 0, 0.7)",
		    "--dsw-alias-border-l1": "color-mix(in srgb, #313642 30%, transparent)",
		    "--dsw-alias-border-l2": "color-mix(in srgb, #313642 45%, transparent)",
		    "--dsw-alias-border-l3": "color-mix(in srgb, #313642 60%, transparent)",
		    "--dsw-alias-border-l4": "color-mix(in srgb, #313642 75%, transparent)",
		    "--dsw-alias-border-inverted": "rgba(0, 0, 0, 0.08)",
		    "--dsw-alias-border-inverted2": "rgba(0, 0, 0, 0.12)",
		    "--dsw-alias-border-l2-darkmode-thin": "rgba(49, 54, 66, 0.3)",
		    "--dsw-alias-brand-primary": "#3f7fff",
		    "--dsw-alias-brand-primary-invert": "#c7d2e0",
		    "--dsw-alias-brand-primary-new-colorprimary-new-color": "#3f7fff",
		    "--dsw-alias-brand-text": "#8a5cff",
		    "--dsw-alias-button-contrast-fill": "#05070f",
		    "--dsw-alias-button-elevated-fill": "rgba(11, 14, 24, 0.7)",
		    "--dsw-alias-button-floating-fill": "rgba(34, 39, 50, 0.7)",
		    "--dsw-alias-button-floating-hover": "rgba(49, 54, 66, 0.55)",
		    "--dsw-alias-button-ghost-active-border": "#313642",
		    "--dsw-alias-button-ghost-active-fill": "rgba(11, 14, 24, 0.6)",
		    "--dsw-alias-button-ghost-active-hover": "rgba(34, 39, 50, 0.6)",
		    "--dsw-alias-button-info-fill": "#3f7fff",
		    "--dsw-alias-button-info-hover": "#284f9f",
		    "--dsw-alias-button-primary-dimmed": "#3367cf",
		    "--dsw-alias-button-primary-fill": "#3f7fff",
		    "--dsw-alias-button-primary-hover": "#4d87fc",
		    "--dsw-alias-button-tool-bar-fill": "rgba(49, 54, 66, 0.35)",
		    "--dsw-alias-button-tool-bar-fill-invisible": "rgba(49, 54, 66, 0.2)",
		    "--dsw-alias-button-tool-bar-hover": "rgba(63, 127, 255, 0.35)",
		    "--dsw-alias-interactive-bg-active": "rgba(199, 210, 224, 0.14)",
		    "--dsw-alias-interactive-bg-hover": "rgba(199, 210, 224, 0.08)",
		    "--dsw-alias-interactive-bg-hover-accent": "rgba(63, 127, 255, 0.16)",
		    "--dsw-alias-interactive-bg-hover-danger": "rgba(224, 90, 74, 0.14)",
		    "--dsw-alias-interactive-bg-hover-solid": "rgba(34, 39, 50, 0.75)",
		    "--dsw-alias-label-caption": "#313642",
		    "--dsw-alias-label-dimmed": "#3b414d",
		    "--dsw-alias-label-primary": "#c7d2e0",
		    "--dsw-alias-label-primary-bluish": "#c7d2e0",
		    "--dsw-alias-label-primary-dimmed": "#535a68",
		    "--dsw-alias-label-primary-foreground": "#05070f",
		    "--dsw-alias-label-primary-inverted": "#222732",
		    "--dsw-alias-label-secondary": "#7d8798",
		    "--dsw-alias-label-tertiary": "#535a68",
		    "--dsw-alias-markdown-citation": "rgba(34, 39, 50, 0.55)",
		    "--dsw-alias-markdown-code-block": "rgba(11, 14, 24, 0.5)",
		    "--dsw-alias-markdown-code-block-banner": "rgba(16, 20, 31, 0.5)",
		    "--dsw-alias-markdown-code-segment-selected": "rgba(34, 39, 50, 0.55)",
		    "--dsw-alias-markdown-code-segment-unselected": "rgba(11, 14, 24, 0.5)",
		    "--dsw-alias-markdown-inline-code": "rgba(34, 39, 50, 0.55)",
		    "--dsw-alias-markdown-placeholder": "#3b414d",
		    "--dsw-alias-markdown-tag": "#3f7fff",
		    "--dsw-alias-scrollbar-bg-l1": "rgba(49, 54, 66, 0.25)",
		    "--dsw-alias-scrollbar-bg-l2": "rgba(49, 54, 66, 0.25)",
		    "--dsw-alias-scrollbar-hover-l1": "rgba(199, 210, 224, 0.18)",
		    "--dsw-alias-scrollbar-hover-l2": "rgba(199, 210, 224, 0.18)",
		    "--dsw-alias-state-business-primary": "#8a5cff",
		    "--dsw-alias-state-business-tertiary": "rgba(138, 92, 255, 0.1)",
		    "--dsw-alias-state-error-primary": "#e05a4a",
		    "--dsw-alias-state-error-secondary": "rgba(224, 90, 74, 0.16)",
		    "--dsw-alias-state-success-primary": "#37c871",
		    "--dsw-alias-state-success-secondary": "rgba(55, 200, 113, 0.16)",
		    "--dsw-alias-state-success-tertiary": "rgba(55, 200, 113, 0.1)",
		    "--dsw-alias-state-warn-label": "#eba579",
		    "--dsw-alias-state-warn-primary": "#ff8c42",
		    "--dsw-alias-state-warn-secondary": "rgba(255, 140, 66, 0.16)",
		    "--dsw-alias-state-warn-tertiary": "rgba(255, 140, 66, 0.1)",
		    "--dsw-alias-toast-bg": "rgba(11, 14, 24, 0.7)",
		    "--dsw-alias-tooltip-bg": "rgba(34, 39, 50, 0.75)",
		    "--dsw-specific-sidebar-fill": "rgba(5, 7, 15, 0.62)",
		    "--dsw-specific-sidebar-nav-item-active": "rgba(34, 39, 50, 0.6)",
		    "--dsw-specific-sidebar-nav-item-active-accent": "rgba(63, 127, 255, 0.25)",
		    "--dsw-specific-sidebar-nav-item-hover": "rgba(11, 14, 24, 0.5)",
		    "--dsw-specific-bubble": "rgba(11, 14, 24, 0.5)",
		    "--dsw-specific-bubble-highlight": "rgba(34, 39, 50, 0.55)",
		    "--dsw-specific-input-major": "rgba(5, 7, 15, 0.62)",
		    "--dsw-specific-login-input": "rgba(5, 7, 15, 0.62)",
		    "--dsw-specific-menu": "rgba(11, 14, 24, 0.55)",
		    "--dsw-specific-selector": "rgba(34, 39, 50, 0.55)",
		    "--dsw-specific-tip": "rgba(11, 14, 24, 0.55)",
		    "--shiki-background": "rgba(11, 14, 24, 0.5)",
		    "--shiki-foreground": "#c7d2e0",
		    "--shiki-token-comment": "rgba(125, 135, 152, 0.85)",
		    "--shiki-token-constant": "#ff8c42",
		    "--shiki-token-function": "#8a5cff",
		    "--shiki-token-keyword": "#ff8c42",
		    "--shiki-token-link": "#8a5cff",
		    "--shiki-token-parameter": "#ff8c42",
		    "--shiki-token-punctuation": "#7d8798",
		    "--shiki-token-string": "#5bcb8d",
		    "--shiki-token-string-expression": "#5bcb8d"
		  }
		},
		{
		  "id": "xingkong",
		  "name": "二次元星空",
		  "colorScheme": "dark",
		  "tokens": {
		    "--dsw-static-neutral-50": "#e8ecff",
		    "--dsw-static-neutral-100": "#c9d0e9",
		    "--dsw-static-neutral-150": "#bdc5e1",
		    "--dsw-static-neutral-200": "#9aa5c8",
		    "--dsw-static-neutral-250": "#6f7894",
		    "--dsw-static-neutral-300": "#606982",
		    "--dsw-static-neutral-400": "#4b5268",
		    "--dsw-static-neutral-500": "#383e52",
		    "--dsw-static-neutral-550": "#3a4054",
		    "--dsw-static-neutral-600": "#3a4054",
		    "--dsw-static-neutral-700": "#3a4054",
		    "--dsw-static-neutral-800": "#0e1322",
		    "--dsw-static-neutral-850": "#101525",
		    "--dsw-static-neutral-900": "#0a0e1a",
		    "--dsw-static-neutral-1000": "#04060a",
		    "--dsw-static-neutral-00": "#e8ecff",
		    "--dsw-static-neutral-bluish-50": "#e8ecff",
		    "--dsw-static-neutral-bluish-60": "#dce1f7",
		    "--dsw-static-neutral-bluish-75": "#d1d7ef",
		    "--dsw-static-neutral-bluish-100": "#c9d0e9",
		    "--dsw-static-neutral-bluish-150": "#c1c9e4",
		    "--dsw-static-neutral-bluish-200": "#b9c1de",
		    "--dsw-static-neutral-bluish-300": "#9aa5c8",
		    "--dsw-static-neutral-bluish-400": "#68708b",
		    "--dsw-static-neutral-bluish-500": "#4b5268",
		    "--dsw-static-neutral-bluish-600": "#3a4054",
		    "--dsw-static-neutral-bluish-700": "#3a4054",
		    "--dsw-static-neutral-bluish-750": "#292f43",
		    "--dsw-static-neutral-bluish-800": "#0e1322",
		    "--dsw-static-neutral-bluish-850": "#101525",
		    "--dsw-static-neutral-bluish-875": "#141a2e",
		    "--dsw-static-neutral-bluish-900": "#141a2e",
		    "--dsw-static-neutral-bluish-950": "#0a0e1a",
		    "--dsw-static-neutral-bluish-1000": "#05070d",
		    "--dsw-static-neutral-bluish-00": "#e8ecff",
		    "--dsw-static-deepseek-50": "#d8d9fe",
		    "--dsw-static-deepseek-100": "#c7c6fc",
		    "--dsw-static-deepseek-200": "#b7b2fb",
		    "--dsw-static-deepseek-300": "#a79ffa",
		    "--dsw-static-deepseek-400": "#9186f8",
		    "--dsw-static-deepseek-450": "#7b6cf6",
		    "--dsw-static-deepseek-500": "#7b6cf6",
		    "--dsw-static-deepseek-600": "#6459ca",
		    "--dsw-static-deepseek-800": "#433d88",
		    "--dsw-static-deepseek-900": "#322f67",
		    "--dsw-static-deepseek-700-delete": "#4e469e",
		    "--dsw-static-blue-50": "#d3e7ff",
		    "--dsw-static-blue-75": "#c6e3ff",
		    "--dsw-static-blue-100": "#b8dfff",
		    "--dsw-static-blue-300": "#8ed5ff",
		    "--dsw-static-blue-400": "#73cdff",
		    "--dsw-static-blue-450": "#5ec8ff",
		    "--dsw-static-blue-500": "#5ec8ff",
		    "--dsw-static-blue-600": "#499ac6",
		    "--dsw-static-blue-800": "#346b8d",
		    "--dsw-static-blue-900": "#274f6a",
		    "--dsw-static-blue-950": "#1f3d53",
		    "--dsw-static-blue-50p": "#cce5ff",
		    "--dsw-static-red-50": "#ebd6eb",
		    "--dsw-static-red-100": "#efc0d7",
		    "--dsw-static-red-400": "#ff5a7a",
		    "--dsw-static-red-500": "#fb7492",
		    "--dsw-static-red-600": "#d34c69",
		    "--dsw-static-red-900": "#542537",
		    "--dsw-static-green-100": "#b5d9e2",
		    "--dsw-static-green-400": "#3fae9d",
		    "--dsw-static-green-500": "#58b7ac",
		    "--dsw-static-green-900": "#1a3e41",
		    "--dsw-static-amber-100": "#efe6d3",
		    "--dsw-static-amber-400": "#ffd86b",
		    "--dsw-static-amber-500": "#fcda7d",
		    "--dsw-static-amber-600": "#daba5f",
		    "--dsw-static-amber-900": "#544b32",
		    "--dsw-alias-bg-base": "rgba(10, 14, 26, 0.66)",
		    "--dsw-alias-bg-layer-1": "rgba(20, 26, 46, 0.52)",
		    "--dsw-alias-bg-layer-2": "rgba(16, 21, 37, 0.44)",
		    "--dsw-alias-bg-layer-3": "rgba(14, 19, 34, 0.4)",
		    "--dsw-alias-bg-module-platform": "rgba(14, 19, 34, 0.42)",
		    "--dsw-alias-bg-overlay": "rgba(41, 47, 67, 0.45)",
		    "--dsw-alias-bg-multi-select": "rgba(41, 47, 67, 0.45)",
		    "--dsw-alias-bg-skeleton": "rgba(232, 236, 255, 0.05)",
		    "--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.45)",
		    "--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.55)",
		    "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.65)",
		    "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.88)",
		    "--dsw-alias-bg-mask-drop": "rgba(0, 0, 0, 0.7)",
		    "--dsw-alias-border-l1": "color-mix(in srgb, #3a4054 30%, transparent)",
		    "--dsw-alias-border-l2": "color-mix(in srgb, #3a4054 45%, transparent)",
		    "--dsw-alias-border-l3": "color-mix(in srgb, #3a4054 60%, transparent)",
		    "--dsw-alias-border-l4": "color-mix(in srgb, #3a4054 75%, transparent)",
		    "--dsw-alias-border-inverted": "rgba(0, 0, 0, 0.08)",
		    "--dsw-alias-border-inverted2": "rgba(0, 0, 0, 0.12)",
		    "--dsw-alias-border-l2-darkmode-thin": "rgba(58, 64, 84, 0.3)",
		    "--dsw-alias-brand-primary": "#7b6cf6",
		    "--dsw-alias-brand-primary-invert": "#e8ecff",
		    "--dsw-alias-brand-primary-new-colorprimary-new-color": "#7b6cf6",
		    "--dsw-alias-brand-text": "#5ec8ff",
		    "--dsw-alias-button-contrast-fill": "#0a0e1a",
		    "--dsw-alias-button-elevated-fill": "rgba(16, 21, 37, 0.7)",
		    "--dsw-alias-button-floating-fill": "rgba(41, 47, 67, 0.7)",
		    "--dsw-alias-button-floating-hover": "rgba(58, 64, 84, 0.55)",
		    "--dsw-alias-button-ghost-active-border": "#3a4054",
		    "--dsw-alias-button-ghost-active-fill": "rgba(16, 21, 37, 0.6)",
		    "--dsw-alias-button-ghost-active-hover": "rgba(41, 47, 67, 0.6)",
		    "--dsw-alias-button-info-fill": "#7b6cf6",
		    "--dsw-alias-button-info-hover": "#4e469e",
		    "--dsw-alias-button-primary-dimmed": "#6459ca",
		    "--dsw-alias-button-primary-fill": "#7b6cf6",
		    "--dsw-alias-button-primary-hover": "#8679f7",
		    "--dsw-alias-button-tool-bar-fill": "rgba(58, 64, 84, 0.35)",
		    "--dsw-alias-button-tool-bar-fill-invisible": "rgba(58, 64, 84, 0.2)",
		    "--dsw-alias-button-tool-bar-hover": "rgba(123, 108, 246, 0.35)",
		    "--dsw-alias-interactive-bg-active": "rgba(232, 236, 255, 0.14)",
		    "--dsw-alias-interactive-bg-hover": "rgba(232, 236, 255, 0.08)",
		    "--dsw-alias-interactive-bg-hover-accent": "rgba(123, 108, 246, 0.16)",
		    "--dsw-alias-interactive-bg-hover-danger": "rgba(255, 90, 122, 0.14)",
		    "--dsw-alias-interactive-bg-hover-solid": "rgba(41, 47, 67, 0.75)",
		    "--dsw-alias-label-caption": "#3a4054",
		    "--dsw-alias-label-dimmed": "#4b5268",
		    "--dsw-alias-label-primary": "#e8ecff",
		    "--dsw-alias-label-primary-bluish": "#e8ecff",
		    "--dsw-alias-label-primary-dimmed": "#68708b",
		    "--dsw-alias-label-primary-foreground": "#0a0e1a",
		    "--dsw-alias-label-primary-inverted": "#292f43",
		    "--dsw-alias-label-secondary": "#9aa5c8",
		    "--dsw-alias-label-tertiary": "#68708b",
		    "--dsw-alias-markdown-citation": "rgba(41, 47, 67, 0.55)",
		    "--dsw-alias-markdown-code-block": "rgba(16, 21, 37, 0.5)",
		    "--dsw-alias-markdown-code-block-banner": "rgba(20, 26, 46, 0.5)",
		    "--dsw-alias-markdown-code-segment-selected": "rgba(41, 47, 67, 0.55)",
		    "--dsw-alias-markdown-code-segment-unselected": "rgba(16, 21, 37, 0.5)",
		    "--dsw-alias-markdown-inline-code": "rgba(41, 47, 67, 0.55)",
		    "--dsw-alias-markdown-placeholder": "#4b5268",
		    "--dsw-alias-markdown-tag": "#7b6cf6",
		    "--dsw-alias-scrollbar-bg-l1": "rgba(58, 64, 84, 0.25)",
		    "--dsw-alias-scrollbar-bg-l2": "rgba(58, 64, 84, 0.25)",
		    "--dsw-alias-scrollbar-hover-l1": "rgba(232, 236, 255, 0.18)",
		    "--dsw-alias-scrollbar-hover-l2": "rgba(232, 236, 255, 0.18)",
		    "--dsw-alias-state-business-primary": "#5ec8ff",
		    "--dsw-alias-state-business-tertiary": "rgba(94, 200, 255, 0.1)",
		    "--dsw-alias-state-error-primary": "#ff5a7a",
		    "--dsw-alias-state-error-secondary": "rgba(255, 90, 122, 0.16)",
		    "--dsw-alias-state-success-primary": "#3fae9d",
		    "--dsw-alias-state-success-secondary": "rgba(63, 174, 157, 0.16)",
		    "--dsw-alias-state-success-tertiary": "rgba(63, 174, 157, 0.1)",
		    "--dsw-alias-state-warn-label": "#f7df9f",
		    "--dsw-alias-state-warn-primary": "#ffd86b",
		    "--dsw-alias-state-warn-secondary": "rgba(255, 216, 107, 0.16)",
		    "--dsw-alias-state-warn-tertiary": "rgba(255, 216, 107, 0.1)",
		    "--dsw-alias-toast-bg": "rgba(16, 21, 37, 0.7)",
		    "--dsw-alias-tooltip-bg": "rgba(41, 47, 67, 0.75)",
		    "--dsw-specific-sidebar-fill": "rgba(10, 14, 26, 0.62)",
		    "--dsw-specific-sidebar-nav-item-active": "rgba(41, 47, 67, 0.6)",
		    "--dsw-specific-sidebar-nav-item-active-accent": "rgba(123, 108, 246, 0.25)",
		    "--dsw-specific-sidebar-nav-item-hover": "rgba(16, 21, 37, 0.5)",
		    "--dsw-specific-bubble": "rgba(16, 21, 37, 0.5)",
		    "--dsw-specific-bubble-highlight": "rgba(41, 47, 67, 0.55)",
		    "--dsw-specific-input-major": "rgba(10, 14, 26, 0.62)",
		    "--dsw-specific-login-input": "rgba(10, 14, 26, 0.62)",
		    "--dsw-specific-menu": "rgba(16, 21, 37, 0.55)",
		    "--dsw-specific-selector": "rgba(41, 47, 67, 0.55)",
		    "--dsw-specific-tip": "rgba(16, 21, 37, 0.55)",
		    "--shiki-background": "rgba(16, 21, 37, 0.5)",
		    "--shiki-foreground": "#e8ecff",
		    "--shiki-token-comment": "rgba(154, 165, 200, 0.85)",
		    "--shiki-token-constant": "#ffd86b",
		    "--shiki-token-function": "#5ec8ff",
		    "--shiki-token-keyword": "#ffd86b",
		    "--shiki-token-link": "#5ec8ff",
		    "--shiki-token-parameter": "#ffd86b",
		    "--shiki-token-punctuation": "#9aa5c8",
		    "--shiki-token-string": "#69beb6",
		    "--shiki-token-string-expression": "#69beb6"
		  }
		}
		];

		/** Built-in ink-wash wallpaper per skin (data URLs, generated). */
		const WALLPAPERS = {
		jianlai: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%20900%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gf-glow%22%20cx%3D%2282%25%22%20cy%3D%2210%25%22%20r%3D%2265%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%234a7f9e%22%20stop-opacity%3D%220.45%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234a7f9e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3ClinearGradient%20id%3D%22gf-mist%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.18%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.03%22%2F%3E%3C%2FlinearGradient%3E%3CradialGradient%20id%3D%22gf-ink-1142-352%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1449-485%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-857-238%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-203-200%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-506-235%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1050-374%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-814-152%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1362-625%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3C%2Fdefs%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22%2317161a%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22url(%23gf-glow)%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20346.2%20Q%200.0%20346.2%20133.3%20286.4%20Q%20266.7%20226.6%20400.0%20274.7%20Q%20533.3%20322.9%20666.7%20296.8%20Q%20800.0%20270.7%20933.3%20284.2%20Q%201066.7%20297.8%201200.0%20291.3%20Q%201333.3%20284.9%201466.7%20291.3%20L%201600%20900%20Z%22%20fill%3D%22%23466351%22%20opacity%3D%220.75%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20499.0%20Q%200.0%20499.0%20133.3%20457.1%20Q%20266.7%20415.1%20400.0%20441.7%20Q%20533.3%20468.4%20666.7%20460.7%20Q%20800.0%20453.1%20933.3%20459.4%20Q%201066.7%20465.7%201200.0%20416.4%20Q%201333.3%20367.1%201466.7%20412.5%20L%201600%20900%20Z%22%20fill%3D%22%23202125%22%20opacity%3D%220.85%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20580.7%20Q%200.0%20580.7%20133.3%20564.0%20Q%20266.7%20547.4%20400.0%20625.3%20Q%20533.3%20703.3%20666.7%20669.5%20Q%20800.0%20635.7%20933.3%20619.4%20Q%201066.7%20603.1%201200.0%20604.3%20Q%201333.3%20605.4%201466.7%20605.8%20L%201600%20900%20Z%22%20fill%3D%22%23100f12%22%20opacity%3D%220.95%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22267%22%20width%3D%221600%22%20height%3D%2277%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.41738833612762394%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22420%22%20width%3D%221600%22%20height%3D%22141%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.5226323098409922%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22520%22%20width%3D%221600%22%20height%3D%22133%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.4015064181294292%22%2F%3E%3Ccircle%20cx%3D%221142.0%22%20cy%3D%22351.9%22%20r%3D%2220.9%22%20fill%3D%22url(%23gf-ink-1142-352)%22%2F%3E%3Ccircle%20cx%3D%221448.5%22%20cy%3D%22484.9%22%20r%3D%2239.5%22%20fill%3D%22url(%23gf-ink-1449-485)%22%2F%3E%3Ccircle%20cx%3D%22856.8%22%20cy%3D%22238.3%22%20r%3D%2234.9%22%20fill%3D%22url(%23gf-ink-857-238)%22%2F%3E%3Ccircle%20cx%3D%22203.4%22%20cy%3D%22199.5%22%20r%3D%2227.7%22%20fill%3D%22url(%23gf-ink-203-200)%22%2F%3E%3Ccircle%20cx%3D%22505.9%22%20cy%3D%22234.9%22%20r%3D%2250.9%22%20fill%3D%22url(%23gf-ink-506-235)%22%2F%3E%3Ccircle%20cx%3D%221050.3%22%20cy%3D%22373.9%22%20r%3D%2246.3%22%20fill%3D%22url(%23gf-ink-1050-374)%22%2F%3E%3Ccircle%20cx%3D%22813.7%22%20cy%3D%22152.3%22%20r%3D%2259.8%22%20fill%3D%22url(%23gf-ink-814-152)%22%2F%3E%3Ccircle%20cx%3D%221362.1%22%20cy%3D%22625.0%22%20r%3D%2245.7%22%20fill%3D%22url(%23gf-ink-1362-625)%22%2F%3E%3Crect%20x%3D%221502.0%22%20y%3D%22161.8%22%20width%3D%2256.0%22%20height%3D%2256.0%22%20rx%3D%2212.3%22%20fill%3D%22%23b03a2e%22%20opacity%3D%220.85%22%2F%3E%3Cpath%20d%3D%22M%201516.6%20189.8%20A%2013.4%2013.4%200%201%201%201543.4%20189.8%20A%2013.4%2013.4%200%200%200%201516.6%20189.8%22%20fill%3D%22%23f4efe0%22%20opacity%3D%220.9%22%2F%3E%3C%2Fsvg%3E",
		cangyuantu: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%20900%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gf-glow%22%20cx%3D%2282%25%22%20cy%3D%2210%25%22%20r%3D%2265%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%239fd8ff%22%20stop-opacity%3D%220.45%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%239fd8ff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3ClinearGradient%20id%3D%22gf-mist%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.18%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.03%22%2F%3E%3C%2FlinearGradient%3E%3CradialGradient%20id%3D%22gf-ink-475-310%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1089-534%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-701-332%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-733-368%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1006-363%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-95-606%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1307-306%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1182-635%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3C%2Fdefs%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22%230e1326%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22url(%23gf-glow)%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20323.6%20Q%200.0%20323.6%20133.3%20279.9%20Q%20266.7%20236.2%20400.0%20289.7%20Q%20533.3%20343.2%20666.7%20328.0%20Q%20800.0%20312.8%20933.3%20303.7%20Q%201066.7%20294.5%201200.0%20321.6%20Q%201333.3%20348.7%201466.7%20313.9%20L%201600%20900%20Z%22%20fill%3D%22%2321376a%22%20opacity%3D%220.75%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20436.5%20Q%200.0%20436.5%20133.3%20417.5%20Q%20266.7%20398.5%20400.0%20451.7%20Q%20533.3%20504.9%20666.7%20502.0%20Q%20800.0%20499.1%20933.3%20454.0%20Q%201066.7%20409.0%201200.0%20417.2%20Q%201333.3%20425.4%201466.7%20408.5%20L%201600%20900%20Z%22%20fill%3D%22%23171e34%22%20opacity%3D%220.85%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20565.6%20Q%200.0%20565.6%20133.3%20557.4%20Q%20266.7%20549.1%20400.0%20584.2%20Q%20533.3%20619.4%20666.7%20577.5%20Q%20800.0%20535.6%20933.3%20557.6%20Q%201066.7%20579.6%201200.0%20561.4%20Q%201333.3%20543.2%201466.7%20564.7%20L%201600%20900%20Z%22%20fill%3D%22%230a0d1b%22%20opacity%3D%220.95%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22459%22%20width%3D%221600%22%20height%3D%22131%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.43705082712695004%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22444%22%20width%3D%221600%22%20height%3D%2296%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.4588428874034435%22%2F%3E%3Ccircle%20cx%3D%22475.3%22%20cy%3D%22310.1%22%20r%3D%2255.9%22%20fill%3D%22url(%23gf-ink-475-310)%22%2F%3E%3Ccircle%20cx%3D%221089.2%22%20cy%3D%22533.8%22%20r%3D%2219.1%22%20fill%3D%22url(%23gf-ink-1089-534)%22%2F%3E%3Ccircle%20cx%3D%22701.3%22%20cy%3D%22331.8%22%20r%3D%2252.0%22%20fill%3D%22url(%23gf-ink-701-332)%22%2F%3E%3Ccircle%20cx%3D%22732.8%22%20cy%3D%22367.9%22%20r%3D%2226.0%22%20fill%3D%22url(%23gf-ink-733-368)%22%2F%3E%3Ccircle%20cx%3D%221006.0%22%20cy%3D%22363.1%22%20r%3D%2230.1%22%20fill%3D%22url(%23gf-ink-1006-363)%22%2F%3E%3Ccircle%20cx%3D%2295.2%22%20cy%3D%22605.6%22%20r%3D%2220.0%22%20fill%3D%22url(%23gf-ink-95-606)%22%2F%3E%3Ccircle%20cx%3D%221306.7%22%20cy%3D%22305.6%22%20r%3D%2233.1%22%20fill%3D%22url(%23gf-ink-1307-306)%22%2F%3E%3Ccircle%20cx%3D%221182.2%22%20cy%3D%22635.4%22%20r%3D%2259.4%22%20fill%3D%22url(%23gf-ink-1182-635)%22%2F%3E%3Crect%20x%3D%221509.3%22%20y%3D%22206.8%22%20width%3D%2248.7%22%20height%3D%2248.7%22%20rx%3D%2210.7%22%20fill%3D%22%23c0564a%22%20opacity%3D%220.85%22%2F%3E%3Cpath%20d%3D%22M%201522.0%20231.1%20A%2011.7%2011.7%200%201%201%201545.4%20231.1%20A%2011.7%2011.7%200%200%200%201522.0%20231.1%22%20fill%3D%22%23f4efe0%22%20opacity%3D%220.9%22%2F%3E%3C%2Fsvg%3E",
		zhanshen: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%20900%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gf-glow%22%20cx%3D%2282%25%22%20cy%3D%2210%25%22%20r%3D%2265%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%238a8f98%22%20stop-opacity%3D%220.45%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%238a8f98%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3ClinearGradient%20id%3D%22gf-mist%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.18%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.03%22%2F%3E%3C%2FlinearGradient%3E%3CradialGradient%20id%3D%22gf-ink-1478-563%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1478-624%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1332-344%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1251-305%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-214-212%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1485-341%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-362-161%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-508-302%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3C%2Fdefs%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22%230d0d13%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22url(%23gf-glow)%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20254.1%20Q%200.0%20254.1%20133.3%20266.9%20Q%20266.7%20279.7%20400.0%20308.3%20Q%20533.3%20336.8%20666.7%20339.7%20Q%20800.0%20342.7%20933.3%20326.3%20Q%201066.7%20309.9%201200.0%20280.6%20Q%201333.3%20251.4%201466.7%20240.0%20L%201600%20900%20Z%22%20fill%3D%22%232b4064%22%20opacity%3D%220.75%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20509.3%20Q%200.0%20509.3%20133.3%20509.2%20Q%20266.7%20509.2%20400.0%20444.0%20Q%20533.3%20378.8%20666.7%20374.6%20Q%20800.0%20370.3%20933.3%20425.2%20Q%201066.7%20480.0%201200.0%20455.9%20Q%201333.3%20431.7%201466.7%20415.5%20L%201600%20900%20Z%22%20fill%3D%22%2317171e%22%20opacity%3D%220.85%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20555.3%20Q%200.0%20555.3%20133.3%20592.6%20Q%20266.7%20630.0%20400.0%20631.4%20Q%20533.3%20632.8%20666.7%20612.7%20Q%20800.0%20592.6%20933.3%20602.4%20Q%201066.7%20612.2%201200.0%20603.8%20Q%201333.3%20595.3%201466.7%20622.2%20L%201600%20900%20Z%22%20fill%3D%22%2309090d%22%20opacity%3D%220.95%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22627%22%20width%3D%221600%22%20height%3D%22118%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.4502495610620827%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22611%22%20width%3D%221600%22%20height%3D%2279%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.5609122780617327%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22536%22%20width%3D%221600%22%20height%3D%22122%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.46759240925312046%22%2F%3E%3Ccircle%20cx%3D%221478.1%22%20cy%3D%22563.0%22%20r%3D%2246.2%22%20fill%3D%22url(%23gf-ink-1478-563)%22%2F%3E%3Ccircle%20cx%3D%221478.4%22%20cy%3D%22623.7%22%20r%3D%2257.4%22%20fill%3D%22url(%23gf-ink-1478-624)%22%2F%3E%3Ccircle%20cx%3D%221331.5%22%20cy%3D%22344.1%22%20r%3D%2227.7%22%20fill%3D%22url(%23gf-ink-1332-344)%22%2F%3E%3Ccircle%20cx%3D%221250.7%22%20cy%3D%22305.0%22%20r%3D%2226.0%22%20fill%3D%22url(%23gf-ink-1251-305)%22%2F%3E%3Ccircle%20cx%3D%22214.2%22%20cy%3D%22212.4%22%20r%3D%2242.9%22%20fill%3D%22url(%23gf-ink-214-212)%22%2F%3E%3Ccircle%20cx%3D%221485.3%22%20cy%3D%22341.1%22%20r%3D%2243.7%22%20fill%3D%22url(%23gf-ink-1485-341)%22%2F%3E%3Ccircle%20cx%3D%22362.5%22%20cy%3D%22160.8%22%20r%3D%2251.0%22%20fill%3D%22url(%23gf-ink-362-161)%22%2F%3E%3Ccircle%20cx%3D%22508.4%22%20cy%3D%22302.1%22%20r%3D%2259.2%22%20fill%3D%22url(%23gf-ink-508-302)%22%2F%3E%3Crect%20x%3D%2242.0%22%20y%3D%22185.8%22%20width%3D%2262.8%22%20height%3D%2262.8%22%20rx%3D%2213.8%22%20fill%3D%22%23a12622%22%20opacity%3D%220.85%22%2F%3E%3Cpath%20d%3D%22M%2058.3%20217.2%20A%2015.1%2015.1%200%201%201%2088.5%20217.2%20A%2015.1%2015.1%200%200%200%2058.3%20217.2%22%20fill%3D%22%230f0e0b%22%20opacity%3D%220.9%22%2F%3E%3C%2Fsvg%3E",
		buliangren: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%20900%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gf-glow%22%20cx%3D%2282%25%22%20cy%3D%2210%25%22%20r%3D%2265%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2345607a%22%20stop-opacity%3D%220.45%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2345607a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3ClinearGradient%20id%3D%22gf-mist%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.18%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.03%22%2F%3E%3C%2FlinearGradient%3E%3CradialGradient%20id%3D%22gf-ink-455-579%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1296-466%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-321-553%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1359-450%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-916-598%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1394-531%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-392-415%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-202-257%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-849-462%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3C%2Fdefs%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22%2315151a%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22url(%23gf-glow)%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20210.2%20Q%200.0%20210.2%20133.3%20283.6%20Q%20266.7%20357.1%20400.0%20303.9%20Q%20533.3%20250.8%20666.7%20294.5%20Q%20800.0%20338.2%20933.3%20328.4%20Q%201066.7%20318.6%201200.0%20281.4%20Q%201333.3%20244.3%201466.7%20284.5%20L%201600%20900%20Z%22%20fill%3D%22%23732d2f%22%20opacity%3D%220.75%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20484.4%20Q%200.0%20484.4%20133.3%20461.5%20Q%20266.7%20438.6%20400.0%20476.5%20Q%20533.3%20514.3%20666.7%20436.4%20Q%20800.0%20358.5%20933.3%20409.2%20Q%201066.7%20460.0%201200.0%20438.0%20Q%201333.3%20416.0%201466.7%20395.7%20L%201600%20900%20Z%22%20fill%3D%22%231e1e25%22%20opacity%3D%220.85%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20568.8%20Q%200.0%20568.8%20133.3%20609.4%20Q%20266.7%20650.0%20400.0%20605.4%20Q%20533.3%20560.8%20666.7%20588.1%20Q%20800.0%20615.3%20933.3%20653.1%20Q%201066.7%20690.9%201200.0%20622.0%20Q%201333.3%20553.1%201466.7%20609.4%20L%201600%20900%20Z%22%20fill%3D%22%230f0f12%22%20opacity%3D%220.95%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22317%22%20width%3D%221600%22%20height%3D%22122%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.5567036076448858%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22352%22%20width%3D%221600%22%20height%3D%2278%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.40120452134869994%22%2F%3E%3Ccircle%20cx%3D%22454.5%22%20cy%3D%22578.5%22%20r%3D%2240.5%22%20fill%3D%22url(%23gf-ink-455-579)%22%2F%3E%3Ccircle%20cx%3D%221295.7%22%20cy%3D%22465.8%22%20r%3D%2254.4%22%20fill%3D%22url(%23gf-ink-1296-466)%22%2F%3E%3Ccircle%20cx%3D%22321.2%22%20cy%3D%22553.4%22%20r%3D%2221.3%22%20fill%3D%22url(%23gf-ink-321-553)%22%2F%3E%3Ccircle%20cx%3D%221358.5%22%20cy%3D%22450.3%22%20r%3D%2225.6%22%20fill%3D%22url(%23gf-ink-1359-450)%22%2F%3E%3Ccircle%20cx%3D%22915.7%22%20cy%3D%22597.8%22%20r%3D%2248.4%22%20fill%3D%22url(%23gf-ink-916-598)%22%2F%3E%3Ccircle%20cx%3D%221394.5%22%20cy%3D%22530.7%22%20r%3D%2241.1%22%20fill%3D%22url(%23gf-ink-1394-531)%22%2F%3E%3Ccircle%20cx%3D%22391.8%22%20cy%3D%22414.9%22%20r%3D%2220.3%22%20fill%3D%22url(%23gf-ink-392-415)%22%2F%3E%3Ccircle%20cx%3D%22202.1%22%20cy%3D%22257.5%22%20r%3D%2214.1%22%20fill%3D%22url(%23gf-ink-202-257)%22%2F%3E%3Ccircle%20cx%3D%22848.6%22%20cy%3D%22461.8%22%20r%3D%2222.0%22%20fill%3D%22url(%23gf-ink-849-462)%22%2F%3E%3Crect%20x%3D%2242.0%22%20y%3D%22162.8%22%20width%3D%2255.8%22%20height%3D%2255.8%22%20rx%3D%2212.3%22%20fill%3D%22%23c9a227%22%20opacity%3D%220.85%22%2F%3E%3Cpath%20d%3D%22M%2056.5%20190.7%20A%2013.4%2013.4%200%201%201%2083.3%20190.7%20A%2013.4%2013.4%200%200%200%2056.5%20190.7%22%20fill%3D%22%230f0e0b%22%20opacity%3D%220.9%22%2F%3E%3C%2Fsvg%3E",
		tunshixingkong: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%20900%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gf-glow%22%20cx%3D%2282%25%22%20cy%3D%2210%25%22%20r%3D%2265%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%238a5cff%22%20stop-opacity%3D%220.45%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%238a5cff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3ClinearGradient%20id%3D%22gf-mist%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.18%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.03%22%2F%3E%3C%2FlinearGradient%3E%3CradialGradient%20id%3D%22gf-ink-459-493%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-482-631%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-65-316%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1187-348%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1082-475%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-50-671%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1547-584%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-788-231%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-960-605%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-959-384%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3C%2Fdefs%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22%2305070f%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22url(%23gf-glow)%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20271.8%20Q%200.0%20271.8%20133.3%20259.9%20Q%20266.7%20248.0%20400.0%20276.5%20Q%20533.3%20305.1%20666.7%20301.7%20Q%20800.0%20298.2%20933.3%20260.4%20Q%201066.7%20222.7%201200.0%20228.3%20Q%201333.3%20233.9%201466.7%20271.3%20L%201600%20900%20Z%22%20fill%3D%22%232b55ab%22%20opacity%3D%220.75%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20486.3%20Q%200.0%20486.3%20133.3%20440.5%20Q%20266.7%20394.8%20400.0%20372.3%20Q%20533.3%20349.7%20666.7%20351.8%20Q%20800.0%20354.0%20933.3%20403.8%20Q%201066.7%20453.5%201200.0%20432.8%20Q%201333.3%20412.0%201466.7%20387.3%20L%201600%20900%20Z%22%20fill%3D%22%230d111b%22%20opacity%3D%220.85%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20557.5%20Q%200.0%20557.5%20133.3%20572.5%20Q%20266.7%20587.5%20400.0%20595.0%20Q%20533.3%20602.5%20666.7%20653.4%20Q%20800.0%20704.3%20933.3%20669.1%20Q%201066.7%20633.9%201200.0%20578.1%20Q%201333.3%20522.3%201466.7%20542.4%20L%201600%20900%20Z%22%20fill%3D%22%2304050b%22%20opacity%3D%220.95%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22546%22%20width%3D%221600%22%20height%3D%22141%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.5884407355915755%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22541%22%20width%3D%221600%22%20height%3D%2292%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.4548191521316767%22%2F%3E%3Ccircle%20cx%3D%22458.6%22%20cy%3D%22493.4%22%20r%3D%2252.8%22%20fill%3D%22url(%23gf-ink-459-493)%22%2F%3E%3Ccircle%20cx%3D%22481.9%22%20cy%3D%22631.1%22%20r%3D%2217.7%22%20fill%3D%22url(%23gf-ink-482-631)%22%2F%3E%3Ccircle%20cx%3D%2265.3%22%20cy%3D%22316.1%22%20r%3D%2249.6%22%20fill%3D%22url(%23gf-ink-65-316)%22%2F%3E%3Ccircle%20cx%3D%221187.1%22%20cy%3D%22348.2%22%20r%3D%2258.5%22%20fill%3D%22url(%23gf-ink-1187-348)%22%2F%3E%3Ccircle%20cx%3D%221082.3%22%20cy%3D%22474.8%22%20r%3D%2230.8%22%20fill%3D%22url(%23gf-ink-1082-475)%22%2F%3E%3Ccircle%20cx%3D%2249.8%22%20cy%3D%22671.2%22%20r%3D%2222.4%22%20fill%3D%22url(%23gf-ink-50-671)%22%2F%3E%3Ccircle%20cx%3D%221546.6%22%20cy%3D%22583.7%22%20r%3D%2226.6%22%20fill%3D%22url(%23gf-ink-1547-584)%22%2F%3E%3Ccircle%20cx%3D%22788.3%22%20cy%3D%22230.8%22%20r%3D%2258.9%22%20fill%3D%22url(%23gf-ink-788-231)%22%2F%3E%3Ccircle%20cx%3D%22960.3%22%20cy%3D%22604.6%22%20r%3D%2249.3%22%20fill%3D%22url(%23gf-ink-960-605)%22%2F%3E%3Ccircle%20cx%3D%22958.8%22%20cy%3D%22384.4%22%20r%3D%2237.1%22%20fill%3D%22url(%23gf-ink-959-384)%22%2F%3E%3Crect%20x%3D%2242.0%22%20y%3D%22195.9%22%20width%3D%2261.4%22%20height%3D%2261.4%22%20rx%3D%2213.5%22%20fill%3D%22%23e05a4a%22%20opacity%3D%220.85%22%2F%3E%3Cpath%20d%3D%22M%2058.0%20226.5%20A%2014.7%2014.7%200%201%201%2087.4%20226.5%20A%2014.7%2014.7%200%200%200%2058.0%20226.5%22%20fill%3D%22%230f0e0b%22%20opacity%3D%220.9%22%2F%3E%3C%2Fsvg%3E",
		xingkong: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%20900%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gf-neb1%22%20cx%3D%2222%25%22%20cy%3D%2230%25%22%20r%3D%2255%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%237b6cf6%22%20stop-opacity%3D%220.22%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%237b6cf6%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-neb2%22%20cx%3D%2280%25%22%20cy%3D%2270%25%22%20r%3D%2260%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235ec8ff%22%20stop-opacity%3D%220.18%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235ec8ff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3ClinearGradient%20id%3D%22gf-meteor-0%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235ec8ff%22%20stop-opacity%3D%220.9%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235ec8ff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22gf-meteor-1%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235ec8ff%22%20stop-opacity%3D%220.9%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235ec8ff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22%230a0e1a%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22url(%23gf-neb1)%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22url(%23gf-neb2)%22%2F%3E%3Ccircle%20cx%3D%221313.9%22%20cy%3D%22159.2%22%20r%3D%2263.7%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.9%22%2F%3E%3Ccircle%20cx%3D%221293.5%22%20cy%3D%22147.7%22%20r%3D%2256.1%22%20fill%3D%22%230a0e1a%22%2F%3E%3Ccircle%20cx%3D%22830.3%22%20cy%3D%22539.1%22%20r%3D%221.5%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.40%22%2F%3E%3Ccircle%20cx%3D%221050.4%22%20cy%3D%22645.5%22%20r%3D%221.8%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.35%22%2F%3E%3Ccircle%20cx%3D%221482.8%22%20cy%3D%22130.1%22%20r%3D%220.8%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.65%22%2F%3E%3Ccircle%20cx%3D%22453.9%22%20cy%3D%22726.7%22%20r%3D%220.8%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.51%22%2F%3E%3Ccircle%20cx%3D%22600.5%22%20cy%3D%22596.7%22%20r%3D%221.0%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.69%22%2F%3E%3Ccircle%20cx%3D%22520.8%22%20cy%3D%22117.3%22%20r%3D%221.4%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.53%22%2F%3E%3Ccircle%20cx%3D%22688.0%22%20cy%3D%22575.0%22%20r%3D%221.2%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.58%22%2F%3E%3Ccircle%20cx%3D%22588.8%22%20cy%3D%22350.0%22%20r%3D%222.7%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.37%22%2F%3E%3Ccircle%20cx%3D%22300.0%22%20cy%3D%22447.4%22%20r%3D%222.6%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.88%22%2F%3E%3Ccircle%20cx%3D%221081.1%22%20cy%3D%224.1%22%20r%3D%221.8%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.63%22%2F%3E%3Ccircle%20cx%3D%22346.9%22%20cy%3D%22549.7%22%20r%3D%221.5%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.75%22%2F%3E%3Ccircle%20cx%3D%221290.5%22%20cy%3D%22162.7%22%20r%3D%221.2%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.68%22%2F%3E%3Ccircle%20cx%3D%22903.4%22%20cy%3D%22746.3%22%20r%3D%221.3%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.53%22%2F%3E%3Ccircle%20cx%3D%221466.0%22%20cy%3D%2297.8%22%20r%3D%222.3%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.73%22%2F%3E%3Ccircle%20cx%3D%221269.9%22%20cy%3D%22346.5%22%20r%3D%222.2%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.62%22%2F%3E%3Ccircle%20cx%3D%22358.1%22%20cy%3D%22358.7%22%20r%3D%227.9%22%20fill%3D%22%235ec8ff%22%20opacity%3D%220.04%22%2F%3E%3Ccircle%20cx%3D%22358.1%22%20cy%3D%22358.7%22%20r%3D%222.5%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.32%22%2F%3E%3Ccircle%20cx%3D%221205.1%22%20cy%3D%22660.3%22%20r%3D%222.0%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.68%22%2F%3E%3Ccircle%20cx%3D%2227.2%22%20cy%3D%22209.6%22%20r%3D%222.3%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.61%22%2F%3E%3Ccircle%20cx%3D%221283.0%22%20cy%3D%22114.0%22%20r%3D%222.1%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.75%22%2F%3E%3Ccircle%20cx%3D%22964.4%22%20cy%3D%22171.9%22%20r%3D%222.0%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.77%22%2F%3E%3Ccircle%20cx%3D%2220.3%22%20cy%3D%22247.9%22%20r%3D%221.4%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.60%22%2F%3E%3Ccircle%20cx%3D%22902.4%22%20cy%3D%22281.6%22%20r%3D%221.7%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.46%22%2F%3E%3Ccircle%20cx%3D%221316.1%22%20cy%3D%22153.3%22%20r%3D%221.2%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.75%22%2F%3E%3Ccircle%20cx%3D%221371.7%22%20cy%3D%22321.0%22%20r%3D%221.6%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.44%22%2F%3E%3Ccircle%20cx%3D%22768.4%22%20cy%3D%22239.9%22%20r%3D%221.1%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.89%22%2F%3E%3Ccircle%20cx%3D%22718.9%22%20cy%3D%22180.1%22%20r%3D%221.9%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.88%22%2F%3E%3Ccircle%20cx%3D%221335.8%22%20cy%3D%22551.1%22%20r%3D%221.8%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.76%22%2F%3E%3Ccircle%20cx%3D%2239.1%22%20cy%3D%22103.3%22%20r%3D%221.6%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.72%22%2F%3E%3Ccircle%20cx%3D%22875.9%22%20cy%3D%22724.0%22%20r%3D%221.7%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.48%22%2F%3E%3Ccircle%20cx%3D%22628.7%22%20cy%3D%22708.8%22%20r%3D%220.9%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.32%22%2F%3E%3Ccircle%20cx%3D%221194.1%22%20cy%3D%22562.1%22%20r%3D%228.9%22%20fill%3D%22%235ec8ff%22%20opacity%3D%220.11%22%2F%3E%3Ccircle%20cx%3D%221194.1%22%20cy%3D%22562.1%22%20r%3D%222.8%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.88%22%2F%3E%3Ccircle%20cx%3D%221150.7%22%20cy%3D%22531.1%22%20r%3D%222.7%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.47%22%2F%3E%3Ccircle%20cx%3D%221251.2%22%20cy%3D%22348.5%22%20r%3D%222.4%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.66%22%2F%3E%3Ccircle%20cx%3D%22900.3%22%20cy%3D%2226.6%22%20r%3D%222.1%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.53%22%2F%3E%3Ccircle%20cx%3D%22120.9%22%20cy%3D%22538.6%22%20r%3D%220.9%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.31%22%2F%3E%3Ccircle%20cx%3D%221577.0%22%20cy%3D%22494.2%22%20r%3D%221.8%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.43%22%2F%3E%3Ccircle%20cx%3D%221313.1%22%20cy%3D%22518.5%22%20r%3D%221.8%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.32%22%2F%3E%3Ccircle%20cx%3D%221193.8%22%20cy%3D%22300.4%22%20r%3D%221.0%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.71%22%2F%3E%3Ccircle%20cx%3D%22437.2%22%20cy%3D%22407.6%22%20r%3D%221.1%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.89%22%2F%3E%3Ccircle%20cx%3D%22440.4%22%20cy%3D%22120.9%22%20r%3D%222.1%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.66%22%2F%3E%3Ccircle%20cx%3D%22994.3%22%20cy%3D%22144.4%22%20r%3D%221.3%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.68%22%2F%3E%3Ccircle%20cx%3D%221432.6%22%20cy%3D%22226.6%22%20r%3D%222.4%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.57%22%2F%3E%3Ccircle%20cx%3D%221065.7%22%20cy%3D%22104.0%22%20r%3D%222.1%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.57%22%2F%3E%3Ccircle%20cx%3D%22907.9%22%20cy%3D%22323.1%22%20r%3D%222.4%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.61%22%2F%3E%3Ccircle%20cx%3D%22992.7%22%20cy%3D%22586.3%22%20r%3D%224.4%22%20fill%3D%22%235ec8ff%22%20opacity%3D%220.09%22%2F%3E%3Ccircle%20cx%3D%22992.7%22%20cy%3D%22586.3%22%20r%3D%221.4%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.75%22%2F%3E%3Ccircle%20cx%3D%22313.4%22%20cy%3D%22138.7%22%20r%3D%222.0%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.80%22%2F%3E%3Ccircle%20cx%3D%221247.4%22%20cy%3D%22559.8%22%20r%3D%222.6%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.83%22%2F%3E%3Ccircle%20cx%3D%22107.4%22%20cy%3D%22571.0%22%20r%3D%220.8%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.86%22%2F%3E%3Ccircle%20cx%3D%22608.5%22%20cy%3D%22521.8%22%20r%3D%221.5%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.82%22%2F%3E%3Ccircle%20cx%3D%22217.6%22%20cy%3D%22222.4%22%20r%3D%222.0%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.58%22%2F%3E%3Ccircle%20cx%3D%22152.7%22%20cy%3D%22453.2%22%20r%3D%222.7%22%20fill%3D%22%235ec8ff%22%20opacity%3D%220.04%22%2F%3E%3Ccircle%20cx%3D%22152.7%22%20cy%3D%22453.2%22%20r%3D%220.8%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.33%22%2F%3E%3Ccircle%20cx%3D%22435.3%22%20cy%3D%22622.1%22%20r%3D%222.6%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.79%22%2F%3E%3Ccircle%20cx%3D%22485.5%22%20cy%3D%22683.2%22%20r%3D%221.1%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.55%22%2F%3E%3Ccircle%20cx%3D%2220.0%22%20cy%3D%22266.6%22%20r%3D%221.5%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.62%22%2F%3E%3Ccircle%20cx%3D%22730.5%22%20cy%3D%2273.1%22%20r%3D%221.3%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.41%22%2F%3E%3Ccircle%20cx%3D%221220.1%22%20cy%3D%22650.5%22%20r%3D%222.8%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.45%22%2F%3E%3Ccircle%20cx%3D%22477.1%22%20cy%3D%22188.4%22%20r%3D%222.8%22%20fill%3D%22%235ec8ff%22%20opacity%3D%220.06%22%2F%3E%3Ccircle%20cx%3D%22477.1%22%20cy%3D%22188.4%22%20r%3D%220.9%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.51%22%2F%3E%3Ccircle%20cx%3D%22228.2%22%20cy%3D%22494.9%22%20r%3D%221.9%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.66%22%2F%3E%3Ccircle%20cx%3D%22544.2%22%20cy%3D%22628.1%22%20r%3D%222.3%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.57%22%2F%3E%3Ccircle%20cx%3D%22420.8%22%20cy%3D%22748.0%22%20r%3D%222.0%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.49%22%2F%3E%3Ccircle%20cx%3D%221538.9%22%20cy%3D%22228.5%22%20r%3D%222.7%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.40%22%2F%3E%3Ccircle%20cx%3D%221304.4%22%20cy%3D%22552.7%22%20r%3D%222.8%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.73%22%2F%3E%3Ccircle%20cx%3D%22257.6%22%20cy%3D%2266.2%22%20r%3D%227.8%22%20fill%3D%22%235ec8ff%22%20opacity%3D%220.09%22%2F%3E%3Ccircle%20cx%3D%22257.6%22%20cy%3D%2266.2%22%20r%3D%222.4%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.78%22%2F%3E%3Ccircle%20cx%3D%221190.6%22%20cy%3D%22577.4%22%20r%3D%221.7%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.46%22%2F%3E%3Ccircle%20cx%3D%221308.6%22%20cy%3D%22738.3%22%20r%3D%221.7%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.81%22%2F%3E%3Ccircle%20cx%3D%22924.0%22%20cy%3D%22807.0%22%20r%3D%221.1%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.40%22%2F%3E%3Ccircle%20cx%3D%22407.4%22%20cy%3D%22134.2%22%20r%3D%222.4%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.71%22%2F%3E%3Ccircle%20cx%3D%22731.8%22%20cy%3D%22761.2%22%20r%3D%221.3%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.53%22%2F%3E%3Ccircle%20cx%3D%22342.8%22%20cy%3D%2215.2%22%20r%3D%221.2%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.32%22%2F%3E%3Ccircle%20cx%3D%22328.5%22%20cy%3D%22538.0%22%20r%3D%222.7%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.80%22%2F%3E%3Ccircle%20cx%3D%221550.6%22%20cy%3D%2284.2%22%20r%3D%220.9%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.71%22%2F%3E%3Ccircle%20cx%3D%22724.2%22%20cy%3D%22558.6%22%20r%3D%222.0%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.46%22%2F%3E%3Ccircle%20cx%3D%22310.9%22%20cy%3D%22710.7%22%20r%3D%221.5%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.87%22%2F%3E%3Ccircle%20cx%3D%22778.3%22%20cy%3D%22598.5%22%20r%3D%222.7%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.63%22%2F%3E%3Ccircle%20cx%3D%22806.0%22%20cy%3D%22387.6%22%20r%3D%221.4%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.69%22%2F%3E%3Ccircle%20cx%3D%22237.7%22%20cy%3D%22525.5%22%20r%3D%222.5%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.51%22%2F%3E%3Ccircle%20cx%3D%22871.8%22%20cy%3D%22202.3%22%20r%3D%222.1%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.79%22%2F%3E%3Ccircle%20cx%3D%22920.1%22%20cy%3D%22757.2%22%20r%3D%221.9%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.31%22%2F%3E%3Ccircle%20cx%3D%221031.8%22%20cy%3D%22545.6%22%20r%3D%222.5%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.85%22%2F%3E%3Ccircle%20cx%3D%2297.0%22%20cy%3D%22415.0%22%20r%3D%221.1%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.71%22%2F%3E%3Ccircle%20cx%3D%22293.7%22%20cy%3D%2265.4%22%20r%3D%220.8%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.65%22%2F%3E%3Ccircle%20cx%3D%22226.0%22%20cy%3D%22557.9%22%20r%3D%221.3%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.43%22%2F%3E%3Ccircle%20cx%3D%22974.1%22%20cy%3D%22257.0%22%20r%3D%222.2%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.84%22%2F%3E%3Ccircle%20cx%3D%22958.9%22%20cy%3D%22532.1%22%20r%3D%221.8%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.55%22%2F%3E%3Ccircle%20cx%3D%22293.3%22%20cy%3D%22466.3%22%20r%3D%221.7%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.71%22%2F%3E%3Ccircle%20cx%3D%22357.0%22%20cy%3D%2277.9%22%20r%3D%220.9%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.31%22%2F%3E%3Ccircle%20cx%3D%221492.9%22%20cy%3D%22320.9%22%20r%3D%221.1%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.36%22%2F%3E%3Ccircle%20cx%3D%22848.9%22%20cy%3D%22184.8%22%20r%3D%221.9%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.38%22%2F%3E%3Ccircle%20cx%3D%22962.9%22%20cy%3D%22627.9%22%20r%3D%221.0%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.84%22%2F%3E%3Ccircle%20cx%3D%22194.3%22%20cy%3D%22407.2%22%20r%3D%221.5%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.42%22%2F%3E%3Ccircle%20cx%3D%22361.6%22%20cy%3D%22578.0%22%20r%3D%221.6%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.41%22%2F%3E%3Ccircle%20cx%3D%22476.3%22%20cy%3D%22567.3%22%20r%3D%222.4%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.36%22%2F%3E%3Ccircle%20cx%3D%221299.9%22%20cy%3D%22425.0%22%20r%3D%221.0%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.53%22%2F%3E%3Ccircle%20cx%3D%22684.5%22%20cy%3D%2229.9%22%20r%3D%222.5%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.59%22%2F%3E%3Ccircle%20cx%3D%221371.5%22%20cy%3D%22410.5%22%20r%3D%222.3%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.89%22%2F%3E%3Ccircle%20cx%3D%221293.3%22%20cy%3D%22732.8%22%20r%3D%221.2%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.33%22%2F%3E%3Ccircle%20cx%3D%221236.5%22%20cy%3D%22204.3%22%20r%3D%221.0%22%20fill%3D%22%23dfe7ff%22%20opacity%3D%220.57%22%2F%3E%3Ccircle%20cx%3D%22693.3%22%20cy%3D%2257.1%22%20r%3D%228.5%22%20fill%3D%22%235ec8ff%22%20opacity%3D%220.11%22%2F%3E%3Ccircle%20cx%3D%22693.3%22%20cy%3D%2257.1%22%20r%3D%222.7%22%20fill%3D%22%23ffd86b%22%20opacity%3D%220.88%22%2F%3E%3Cline%20x1%3D%22648.6%22%20y1%3D%22132.4%22%20x2%3D%22782.2%22%20y2%3D%22212.8%22%20stroke%3D%22url(%23gf-meteor-0)%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%3Ccircle%20cx%3D%22648.6%22%20cy%3D%22132.4%22%20r%3D%222.4%22%20fill%3D%22%235ec8ff%22%20opacity%3D%220.95%22%2F%3E%3Cline%20x1%3D%221121.3%22%20y1%3D%22270.0%22%20x2%3D%221298.2%22%20y2%3D%22374.0%22%20stroke%3D%22url(%23gf-meteor-1)%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%3Ccircle%20cx%3D%221121.3%22%20cy%3D%22270.0%22%20r%3D%222.4%22%20fill%3D%22%235ec8ff%22%20opacity%3D%220.95%22%2F%3E%3C%2Fsvg%3E",
		};

		/** FX config per skin: {type: "ink"|"star", color, glow}. */
		const INK = {
		jianlai: { type: "ink", color: "#5f8d6e", glow: "#4a7f9e" },
		cangyuantu: { type: "ink", color: "#2b4a8f", glow: "#9fd8ff" },
		zhanshen: { type: "ink", color: "#3b5b8f", glow: "#8a8f98" },
		buliangren: { type: "ink", color: "#a63a3a", glow: "#45607a" },
		tunshixingkong: { type: "ink", color: "#3f7fff", glow: "#8a5cff" },
		xingkong: { type: "star", color: "#7b6cf6", glow: "#5ec8ff" },
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
/* ===== layers ===== */
html.dsh-gf-on { background: var(--dsw-alias-bg-base); }
html.dsh-gf-on #root { position: relative; z-index: 1; }
#dsh-gf-wallpaper {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
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
				// built-in appearance: hide the wallpaper and pause particles
				// (renderBg(null) clears the inline display:block)
				renderBg(null);
				applyParticles(false);
				return;
			}
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

		//#region FX engine (ink drops / starfield, per skin)
		/**
		 * Canvas effect engine, one type per skin (INK map from gen.mjs):
		 *   "ink"  — 30 ink drops (big ones radial-gradient with glow core)
		 *            + 12 light dust motes, slow upward drift + sine wobble
		 *   "star" — 80 twinkling stars (sinusoidal breathing, phase-shifted)
		 *            + occasional meteor streaks + the same light dust
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
			const count = type === "star" ? 12 : 30;
			const drops = [];
			for (let i = 0; i < count; i++) {
				drops.push({
					x: Math.random(),
					y: Math.random(),
					r: type === "star" ? 1.5 + Math.random() * 3 : 6 + Math.random() * 14,
					vy: 0.00005 + Math.random() * 0.00015,
					phase: Math.random() * Math.PI * 2,
					amp: 0.008 + Math.random() * 0.018,
					alpha: 0.18 + Math.random() * 0.14
				});
			}
			return drops;
		}

		const inkDrops = makeDrops("ink");
		const dust = makeDrops("star");

		const stars = [];
		for (let i = 0; i < 80; i++) {
			stars.push({
				x: Math.random(),
				y: Math.random() * 0.95,
				r: 0.5 + Math.random() * 2,
				base: 0.25 + Math.random() * 0.6,
				phase: Math.random() * Math.PI * 2,
				freq: 0.0005 + Math.random() * 0.0012
			});
		}

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
				// twinkling stars: sinusoidal breathing, phase-shifted
				for (const s of stars) {
					const a = s.base * (0.55 + 0.45 * Math.sin(now * s.freq + s.phase));
					if (a < 0.02) continue;
					ctx.beginPath();
					ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r * dpr, 0, Math.PI * 2);
					ctx.fillStyle = "#dfe7ff";
					ctx.globalAlpha = a;
					ctx.fill();
				}
				// meteors
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
