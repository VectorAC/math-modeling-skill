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

		/**
		 * FX config per skin: {type: "ink"|"star", color, glow}. The
		 * built-in wallpaper is NOT an image — it is a live canvas scene
		 * rendered by the scene renderer below (starfield / ink-wash), so
		 * it breathes and drifts. The <img> layer is only for user uploads.
		 */
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
/* built-in scene canvas (rendered wallpaper); hidden while a user upload is shown */
#dsh-gf-scene {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
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

			// stars: power-law sizes; few bright with glow + diffraction spikes
			const sprite = getStarSprite();
			const count = 420 + Math.floor(Math.random() * 160);
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
					if (Math.random() > 0.35) {
						sceneTwinkle.push({ x, y, size, base: alpha, phase: Math.random() * Math.PI * 2, freq: 0.0004 + Math.random() * 0.0009 });
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
			const count = type === "star" ? 12 : 24;
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
