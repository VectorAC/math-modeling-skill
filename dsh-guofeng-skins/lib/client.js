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
		    "--dsw-alias-bg-base": "rgba(23, 22, 26, 0.94)",
		    "--dsw-alias-bg-layer-1": "rgba(35, 36, 41, 0.78)",
		    "--dsw-alias-bg-layer-2": "rgba(30, 30, 34, 0.68)",
		    "--dsw-alias-bg-layer-3": "rgba(28, 27, 32, 0.62)",
		    "--dsw-alias-bg-module-platform": "rgba(28, 27, 32, 0.6)",
		    "--dsw-alias-bg-overlay": "rgba(55, 55, 57, 0.6)",
		    "--dsw-alias-bg-multi-select": "rgba(55, 55, 57, 0.6)",
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
		    "--dsw-alias-button-elevated-fill": "rgba(30, 30, 34, 0.8)",
		    "--dsw-alias-button-floating-fill": "rgba(55, 55, 57, 0.8)",
		    "--dsw-alias-button-floating-hover": "rgba(70, 70, 70, 0.55)",
		    "--dsw-alias-button-ghost-active-border": "#464646",
		    "--dsw-alias-button-ghost-active-fill": "rgba(30, 30, 34, 0.7)",
		    "--dsw-alias-button-ghost-active-hover": "rgba(55, 55, 57, 0.7)",
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
		    "--dsw-alias-interactive-bg-hover-solid": "rgba(55, 55, 57, 0.85)",
		    "--dsw-alias-label-caption": "#464646",
		    "--dsw-alias-label-dimmed": "#5f5b56",
		    "--dsw-alias-label-primary": "#e8e0cc",
		    "--dsw-alias-label-primary-bluish": "#e8e0cc",
		    "--dsw-alias-label-primary-dimmed": "#7e7a71",
		    "--dsw-alias-label-primary-foreground": "#17161a",
		    "--dsw-alias-label-primary-inverted": "#373739",
		    "--dsw-alias-label-secondary": "#b6b0a0",
		    "--dsw-alias-label-tertiary": "#7e7a71",
		    "--dsw-alias-markdown-citation": "rgba(55, 55, 57, 0.7)",
		    "--dsw-alias-markdown-code-block": "rgba(30, 30, 34, 0.75)",
		    "--dsw-alias-markdown-code-block-banner": "rgba(35, 36, 41, 0.7)",
		    "--dsw-alias-markdown-code-segment-selected": "rgba(55, 55, 57, 0.7)",
		    "--dsw-alias-markdown-code-segment-unselected": "rgba(30, 30, 34, 0.7)",
		    "--dsw-alias-markdown-inline-code": "rgba(55, 55, 57, 0.7)",
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
		    "--dsw-alias-toast-bg": "rgba(30, 30, 34, 0.8)",
		    "--dsw-alias-tooltip-bg": "rgba(55, 55, 57, 0.86)",
		    "--dsw-specific-sidebar-fill": "rgba(23, 22, 26, 0.82)",
		    "--dsw-specific-sidebar-nav-item-active": "rgba(55, 55, 57, 0.75)",
		    "--dsw-specific-sidebar-nav-item-active-accent": "rgba(95, 141, 110, 0.25)",
		    "--dsw-specific-sidebar-nav-item-hover": "rgba(30, 30, 34, 0.6)",
		    "--dsw-specific-bubble": "rgba(30, 30, 34, 0.72)",
		    "--dsw-specific-bubble-highlight": "rgba(55, 55, 57, 0.7)",
		    "--dsw-specific-input-major": "rgba(23, 22, 26, 0.82)",
		    "--dsw-specific-login-input": "rgba(23, 22, 26, 0.82)",
		    "--dsw-specific-menu": "rgba(30, 30, 34, 0.8)",
		    "--dsw-specific-selector": "rgba(55, 55, 57, 0.72)",
		    "--dsw-specific-tip": "rgba(30, 30, 34, 0.72)",
		    "--shiki-background": "rgba(30, 30, 34, 0.75)",
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
		    "--dsw-alias-bg-base": "rgba(14, 19, 38, 0.94)",
		    "--dsw-alias-bg-layer-1": "rgba(26, 33, 56, 0.78)",
		    "--dsw-alias-bg-layer-2": "rgba(21, 27, 48, 0.68)",
		    "--dsw-alias-bg-layer-3": "rgba(19, 24, 45, 0.62)",
		    "--dsw-alias-bg-module-platform": "rgba(19, 24, 45, 0.6)",
		    "--dsw-alias-bg-overlay": "rgba(45, 53, 75, 0.6)",
		    "--dsw-alias-bg-multi-select": "rgba(45, 53, 75, 0.6)",
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
		    "--dsw-alias-button-elevated-fill": "rgba(21, 27, 48, 0.8)",
		    "--dsw-alias-button-floating-fill": "rgba(45, 53, 75, 0.8)",
		    "--dsw-alias-button-floating-hover": "rgba(61, 69, 90, 0.55)",
		    "--dsw-alias-button-ghost-active-border": "#3d455a",
		    "--dsw-alias-button-ghost-active-fill": "rgba(21, 27, 48, 0.7)",
		    "--dsw-alias-button-ghost-active-hover": "rgba(45, 53, 75, 0.7)",
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
		    "--dsw-alias-interactive-bg-hover-solid": "rgba(45, 53, 75, 0.85)",
		    "--dsw-alias-label-caption": "#3d455a",
		    "--dsw-alias-label-dimmed": "#4a546a",
		    "--dsw-alias-label-primary": "#dbe7f7",
		    "--dsw-alias-label-primary-bluish": "#dbe7f7",
		    "--dsw-alias-label-primary-dimmed": "#647188",
		    "--dsw-alias-label-primary-foreground": "#0e1326",
		    "--dsw-alias-label-primary-inverted": "#2d354b",
		    "--dsw-alias-label-secondary": "#93a3bd",
		    "--dsw-alias-label-tertiary": "#647188",
		    "--dsw-alias-markdown-citation": "rgba(45, 53, 75, 0.7)",
		    "--dsw-alias-markdown-code-block": "rgba(21, 27, 48, 0.75)",
		    "--dsw-alias-markdown-code-block-banner": "rgba(26, 33, 56, 0.7)",
		    "--dsw-alias-markdown-code-segment-selected": "rgba(45, 53, 75, 0.7)",
		    "--dsw-alias-markdown-code-segment-unselected": "rgba(21, 27, 48, 0.7)",
		    "--dsw-alias-markdown-inline-code": "rgba(45, 53, 75, 0.7)",
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
		    "--dsw-alias-toast-bg": "rgba(21, 27, 48, 0.8)",
		    "--dsw-alias-tooltip-bg": "rgba(45, 53, 75, 0.86)",
		    "--dsw-specific-sidebar-fill": "rgba(14, 19, 38, 0.82)",
		    "--dsw-specific-sidebar-nav-item-active": "rgba(45, 53, 75, 0.75)",
		    "--dsw-specific-sidebar-nav-item-active-accent": "rgba(43, 74, 143, 0.25)",
		    "--dsw-specific-sidebar-nav-item-hover": "rgba(21, 27, 48, 0.6)",
		    "--dsw-specific-bubble": "rgba(21, 27, 48, 0.72)",
		    "--dsw-specific-bubble-highlight": "rgba(45, 53, 75, 0.7)",
		    "--dsw-specific-input-major": "rgba(14, 19, 38, 0.82)",
		    "--dsw-specific-login-input": "rgba(14, 19, 38, 0.82)",
		    "--dsw-specific-menu": "rgba(21, 27, 48, 0.8)",
		    "--dsw-specific-selector": "rgba(45, 53, 75, 0.72)",
		    "--dsw-specific-tip": "rgba(21, 27, 48, 0.72)",
		    "--shiki-background": "rgba(21, 27, 48, 0.75)",
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
		    "--dsw-alias-bg-base": "rgba(13, 13, 19, 0.94)",
		    "--dsw-alias-bg-layer-1": "rgba(26, 26, 34, 0.78)",
		    "--dsw-alias-bg-layer-2": "rgba(20, 20, 27, 0.68)",
		    "--dsw-alias-bg-layer-3": "rgba(18, 18, 25, 0.62)",
		    "--dsw-alias-bg-module-platform": "rgba(18, 18, 25, 0.6)",
		    "--dsw-alias-bg-overlay": "rgba(45, 45, 53, 0.6)",
		    "--dsw-alias-bg-multi-select": "rgba(45, 45, 53, 0.6)",
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
		    "--dsw-alias-button-elevated-fill": "rgba(20, 20, 27, 0.8)",
		    "--dsw-alias-button-floating-fill": "rgba(45, 45, 53, 0.8)",
		    "--dsw-alias-button-floating-hover": "rgba(60, 60, 68, 0.55)",
		    "--dsw-alias-button-ghost-active-border": "#3c3c44",
		    "--dsw-alias-button-ghost-active-fill": "rgba(20, 20, 27, 0.7)",
		    "--dsw-alias-button-ghost-active-hover": "rgba(45, 45, 53, 0.7)",
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
		    "--dsw-alias-interactive-bg-hover-solid": "rgba(45, 45, 53, 0.85)",
		    "--dsw-alias-label-caption": "#3c3c44",
		    "--dsw-alias-label-dimmed": "#48484f",
		    "--dsw-alias-label-primary": "#d8d9de",
		    "--dsw-alias-label-primary-bluish": "#d8d9de",
		    "--dsw-alias-label-primary-dimmed": "#626369",
		    "--dsw-alias-label-primary-foreground": "#0d0d13",
		    "--dsw-alias-label-primary-inverted": "#2d2d35",
		    "--dsw-alias-label-secondary": "#8f9198",
		    "--dsw-alias-label-tertiary": "#626369",
		    "--dsw-alias-markdown-citation": "rgba(45, 45, 53, 0.7)",
		    "--dsw-alias-markdown-code-block": "rgba(20, 20, 27, 0.75)",
		    "--dsw-alias-markdown-code-block-banner": "rgba(26, 26, 34, 0.7)",
		    "--dsw-alias-markdown-code-segment-selected": "rgba(45, 45, 53, 0.7)",
		    "--dsw-alias-markdown-code-segment-unselected": "rgba(20, 20, 27, 0.7)",
		    "--dsw-alias-markdown-inline-code": "rgba(45, 45, 53, 0.7)",
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
		    "--dsw-alias-toast-bg": "rgba(20, 20, 27, 0.8)",
		    "--dsw-alias-tooltip-bg": "rgba(45, 45, 53, 0.86)",
		    "--dsw-specific-sidebar-fill": "rgba(13, 13, 19, 0.82)",
		    "--dsw-specific-sidebar-nav-item-active": "rgba(45, 45, 53, 0.75)",
		    "--dsw-specific-sidebar-nav-item-active-accent": "rgba(59, 91, 143, 0.25)",
		    "--dsw-specific-sidebar-nav-item-hover": "rgba(20, 20, 27, 0.6)",
		    "--dsw-specific-bubble": "rgba(20, 20, 27, 0.72)",
		    "--dsw-specific-bubble-highlight": "rgba(45, 45, 53, 0.7)",
		    "--dsw-specific-input-major": "rgba(13, 13, 19, 0.82)",
		    "--dsw-specific-login-input": "rgba(13, 13, 19, 0.82)",
		    "--dsw-specific-menu": "rgba(20, 20, 27, 0.8)",
		    "--dsw-specific-selector": "rgba(45, 45, 53, 0.72)",
		    "--dsw-specific-tip": "rgba(20, 20, 27, 0.72)",
		    "--shiki-background": "rgba(20, 20, 27, 0.75)",
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
		    "--dsw-alias-bg-base": "rgba(21, 21, 26, 0.94)",
		    "--dsw-alias-bg-layer-1": "rgba(33, 33, 41, 0.78)",
		    "--dsw-alias-bg-layer-2": "rgba(28, 28, 34, 0.68)",
		    "--dsw-alias-bg-layer-3": "rgba(26, 26, 32, 0.62)",
		    "--dsw-alias-bg-module-platform": "rgba(26, 26, 32, 0.6)",
		    "--dsw-alias-bg-overlay": "rgba(53, 53, 59, 0.6)",
		    "--dsw-alias-bg-multi-select": "rgba(53, 53, 59, 0.6)",
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
		    "--dsw-alias-button-elevated-fill": "rgba(28, 28, 34, 0.8)",
		    "--dsw-alias-button-floating-fill": "rgba(53, 53, 59, 0.8)",
		    "--dsw-alias-button-floating-hover": "rgba(69, 68, 73, 0.55)",
		    "--dsw-alias-button-ghost-active-border": "#454449",
		    "--dsw-alias-button-ghost-active-fill": "rgba(28, 28, 34, 0.7)",
		    "--dsw-alias-button-ghost-active-hover": "rgba(53, 53, 59, 0.7)",
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
		    "--dsw-alias-interactive-bg-hover-solid": "rgba(53, 53, 59, 0.85)",
		    "--dsw-alias-label-caption": "#454449",
		    "--dsw-alias-label-dimmed": "#585554",
		    "--dsw-alias-label-primary": "#e8e4d8",
		    "--dsw-alias-label-primary-bluish": "#e8e4d8",
		    "--dsw-alias-label-primary-dimmed": "#75726d",
		    "--dsw-alias-label-primary-foreground": "#15151a",
		    "--dsw-alias-label-primary-inverted": "#35353b",
		    "--dsw-alias-label-secondary": "#a9a49a",
		    "--dsw-alias-label-tertiary": "#75726d",
		    "--dsw-alias-markdown-citation": "rgba(53, 53, 59, 0.7)",
		    "--dsw-alias-markdown-code-block": "rgba(28, 28, 34, 0.75)",
		    "--dsw-alias-markdown-code-block-banner": "rgba(33, 33, 41, 0.7)",
		    "--dsw-alias-markdown-code-segment-selected": "rgba(53, 53, 59, 0.7)",
		    "--dsw-alias-markdown-code-segment-unselected": "rgba(28, 28, 34, 0.7)",
		    "--dsw-alias-markdown-inline-code": "rgba(53, 53, 59, 0.7)",
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
		    "--dsw-alias-toast-bg": "rgba(28, 28, 34, 0.8)",
		    "--dsw-alias-tooltip-bg": "rgba(53, 53, 59, 0.86)",
		    "--dsw-specific-sidebar-fill": "rgba(21, 21, 26, 0.82)",
		    "--dsw-specific-sidebar-nav-item-active": "rgba(53, 53, 59, 0.75)",
		    "--dsw-specific-sidebar-nav-item-active-accent": "rgba(166, 58, 58, 0.25)",
		    "--dsw-specific-sidebar-nav-item-hover": "rgba(28, 28, 34, 0.6)",
		    "--dsw-specific-bubble": "rgba(28, 28, 34, 0.72)",
		    "--dsw-specific-bubble-highlight": "rgba(53, 53, 59, 0.7)",
		    "--dsw-specific-input-major": "rgba(21, 21, 26, 0.82)",
		    "--dsw-specific-login-input": "rgba(21, 21, 26, 0.82)",
		    "--dsw-specific-menu": "rgba(28, 28, 34, 0.8)",
		    "--dsw-specific-selector": "rgba(53, 53, 59, 0.72)",
		    "--dsw-specific-tip": "rgba(28, 28, 34, 0.72)",
		    "--shiki-background": "rgba(28, 28, 34, 0.75)",
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
		    "--dsw-alias-bg-base": "rgba(5, 7, 15, 0.94)",
		    "--dsw-alias-bg-layer-1": "rgba(16, 20, 31, 0.78)",
		    "--dsw-alias-bg-layer-2": "rgba(11, 14, 24, 0.68)",
		    "--dsw-alias-bg-layer-3": "rgba(9, 12, 21, 0.62)",
		    "--dsw-alias-bg-module-platform": "rgba(9, 12, 21, 0.6)",
		    "--dsw-alias-bg-overlay": "rgba(34, 39, 50, 0.6)",
		    "--dsw-alias-bg-multi-select": "rgba(34, 39, 50, 0.6)",
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
		    "--dsw-alias-button-elevated-fill": "rgba(11, 14, 24, 0.8)",
		    "--dsw-alias-button-floating-fill": "rgba(34, 39, 50, 0.8)",
		    "--dsw-alias-button-floating-hover": "rgba(49, 54, 66, 0.55)",
		    "--dsw-alias-button-ghost-active-border": "#313642",
		    "--dsw-alias-button-ghost-active-fill": "rgba(11, 14, 24, 0.7)",
		    "--dsw-alias-button-ghost-active-hover": "rgba(34, 39, 50, 0.7)",
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
		    "--dsw-alias-interactive-bg-hover-solid": "rgba(34, 39, 50, 0.85)",
		    "--dsw-alias-label-caption": "#313642",
		    "--dsw-alias-label-dimmed": "#3b414d",
		    "--dsw-alias-label-primary": "#c7d2e0",
		    "--dsw-alias-label-primary-bluish": "#c7d2e0",
		    "--dsw-alias-label-primary-dimmed": "#535a68",
		    "--dsw-alias-label-primary-foreground": "#05070f",
		    "--dsw-alias-label-primary-inverted": "#222732",
		    "--dsw-alias-label-secondary": "#7d8798",
		    "--dsw-alias-label-tertiary": "#535a68",
		    "--dsw-alias-markdown-citation": "rgba(34, 39, 50, 0.7)",
		    "--dsw-alias-markdown-code-block": "rgba(11, 14, 24, 0.75)",
		    "--dsw-alias-markdown-code-block-banner": "rgba(16, 20, 31, 0.7)",
		    "--dsw-alias-markdown-code-segment-selected": "rgba(34, 39, 50, 0.7)",
		    "--dsw-alias-markdown-code-segment-unselected": "rgba(11, 14, 24, 0.7)",
		    "--dsw-alias-markdown-inline-code": "rgba(34, 39, 50, 0.7)",
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
		    "--dsw-alias-toast-bg": "rgba(11, 14, 24, 0.8)",
		    "--dsw-alias-tooltip-bg": "rgba(34, 39, 50, 0.86)",
		    "--dsw-specific-sidebar-fill": "rgba(5, 7, 15, 0.82)",
		    "--dsw-specific-sidebar-nav-item-active": "rgba(34, 39, 50, 0.75)",
		    "--dsw-specific-sidebar-nav-item-active-accent": "rgba(63, 127, 255, 0.25)",
		    "--dsw-specific-sidebar-nav-item-hover": "rgba(11, 14, 24, 0.6)",
		    "--dsw-specific-bubble": "rgba(11, 14, 24, 0.72)",
		    "--dsw-specific-bubble-highlight": "rgba(34, 39, 50, 0.7)",
		    "--dsw-specific-input-major": "rgba(5, 7, 15, 0.82)",
		    "--dsw-specific-login-input": "rgba(5, 7, 15, 0.82)",
		    "--dsw-specific-menu": "rgba(11, 14, 24, 0.8)",
		    "--dsw-specific-selector": "rgba(34, 39, 50, 0.72)",
		    "--dsw-specific-tip": "rgba(11, 14, 24, 0.72)",
		    "--shiki-background": "rgba(11, 14, 24, 0.75)",
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
		}
		];

		/** Built-in ink-wash wallpaper per skin (data URLs, generated). */
		const WALLPAPERS = {
		jianlai: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%20900%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gf-ink-981-518%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-12-205%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-643-216%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1037-435%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-306-380%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-191-296%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-296-568%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-708-514%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-51-673%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1452-507%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-800-242%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-416-487%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-902-602%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-23-532%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-glow%22%20cx%3D%2285%25%22%20cy%3D%2212%25%22%20r%3D%2260%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%234a7f9e%22%20stop-opacity%3D%220.28%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234a7f9e%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3ClinearGradient%20id%3D%22gf-mist%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.10%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8d6e%22%20stop-opacity%3D%220.02%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22%2317161a%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22url(%23gf-glow)%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20368.8%20L%20228.6%20289.1%20L%20457.1%20353.2%20L%20685.7%20318.5%20L%20914.3%20336.5%20L%201142.9%20327.9%20L%201371.4%20336.6%20L%201600.0%20364.2%20L%201600%20900%20Z%22%20fill%3D%22%231c1b20%22%20opacity%3D%220.55%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20436.5%20L%20228.6%20479.1%20L%20457.1%20466.9%20L%20685.7%20477.0%20L%20914.3%20398.1%20L%201142.9%20470.8%20L%201371.4%20420.7%20L%201600.0%20396.4%20L%201600%20900%20Z%22%20fill%3D%22%231e1e22%22%20opacity%3D%220.7%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20686.8%20L%20228.6%20625.4%20L%20457.1%20595.7%20L%20685.7%20597.8%20L%20914.3%20598.6%20L%201142.9%20616.4%20L%201371.4%20529.3%20L%201600.0%20534.2%20L%201600%20900%20Z%22%20fill%3D%22%231f2025%22%20opacity%3D%220.85%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22282%22%20width%3D%221600%22%20height%3D%22108%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.5%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22575%22%20width%3D%221600%22%20height%3D%22162%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.4%22%2F%3E%3Ccircle%20cx%3D%22981.1%22%20cy%3D%22518.4%22%20r%3D%2252.7%22%20fill%3D%22url(%23gf-ink-981-518)%22%2F%3E%3Ccircle%20cx%3D%2212.1%22%20cy%3D%22205.4%22%20r%3D%2246.8%22%20fill%3D%22url(%23gf-ink-12-205)%22%2F%3E%3Ccircle%20cx%3D%22642.7%22%20cy%3D%22215.5%22%20r%3D%2255.6%22%20fill%3D%22url(%23gf-ink-643-216)%22%2F%3E%3Ccircle%20cx%3D%221036.9%22%20cy%3D%22434.8%22%20r%3D%2238.6%22%20fill%3D%22url(%23gf-ink-1037-435)%22%2F%3E%3Ccircle%20cx%3D%22306.1%22%20cy%3D%22380.0%22%20r%3D%2219.8%22%20fill%3D%22url(%23gf-ink-306-380)%22%2F%3E%3Ccircle%20cx%3D%22191.2%22%20cy%3D%22295.8%22%20r%3D%2228.5%22%20fill%3D%22url(%23gf-ink-191-296)%22%2F%3E%3Ccircle%20cx%3D%22296.1%22%20cy%3D%22568.1%22%20r%3D%2244.2%22%20fill%3D%22url(%23gf-ink-296-568)%22%2F%3E%3Ccircle%20cx%3D%22707.7%22%20cy%3D%22514.0%22%20r%3D%2237.4%22%20fill%3D%22url(%23gf-ink-708-514)%22%2F%3E%3Ccircle%20cx%3D%2251.2%22%20cy%3D%22672.6%22%20r%3D%2253.2%22%20fill%3D%22url(%23gf-ink-51-673)%22%2F%3E%3Ccircle%20cx%3D%221451.8%22%20cy%3D%22507.3%22%20r%3D%2227.3%22%20fill%3D%22url(%23gf-ink-1452-507)%22%2F%3E%3Ccircle%20cx%3D%22800.2%22%20cy%3D%22242.1%22%20r%3D%2228.7%22%20fill%3D%22url(%23gf-ink-800-242)%22%2F%3E%3Ccircle%20cx%3D%22416.1%22%20cy%3D%22487.0%22%20r%3D%2215.8%22%20fill%3D%22url(%23gf-ink-416-487)%22%2F%3E%3Ccircle%20cx%3D%22902.2%22%20cy%3D%22602.3%22%20r%3D%2227.1%22%20fill%3D%22url(%23gf-ink-902-602)%22%2F%3E%3Ccircle%20cx%3D%2222.7%22%20cy%3D%22531.6%22%20r%3D%2244.2%22%20fill%3D%22url(%23gf-ink-23-532)%22%2F%3E%3C%2Fsvg%3E",
		cangyuantu: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%20900%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gf-ink-471-147%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-519-626%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1182-195%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-583-581%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-690-276%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-676-324%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1394-206%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-505-360%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1483-668%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-212-512%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-glow%22%20cx%3D%2285%25%22%20cy%3D%2212%25%22%20r%3D%2260%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%239fd8ff%22%20stop-opacity%3D%220.28%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%239fd8ff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3ClinearGradient%20id%3D%22gf-mist%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.10%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b4a8f%22%20stop-opacity%3D%220.02%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22%230e1326%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22url(%23gf-glow)%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20353.8%20L%20228.6%20295.5%20L%20457.1%20366.8%20L%20685.7%20346.5%20L%20914.3%20334.4%20L%201142.9%20370.4%20L%201371.4%20324.1%20L%201600.0%20326.7%20L%201600%20900%20Z%22%20fill%3D%22%2313182d%22%20opacity%3D%220.55%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20423.2%20L%20228.6%20508.3%20L%20457.1%20503.7%20L%20685.7%20431.6%20L%20914.3%20444.7%20L%201142.9%20417.7%20L%201371.4%20409.7%20L%201600.0%20397.7%20L%201600%20900%20Z%22%20fill%3D%22%23151b30%22%20opacity%3D%220.7%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20610.5%20L%20228.6%20534.4%20L%20457.1%20574.4%20L%20685.7%20541.3%20L%20914.3%20580.3%20L%201142.9%20570.0%20L%201371.4%20620.6%20L%201600.0%20670.3%20L%201600%20900%20Z%22%20fill%3D%22%23161d33%22%20opacity%3D%220.85%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22295%22%20width%3D%221600%22%20height%3D%22108%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.5%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22586%22%20width%3D%221600%22%20height%3D%22162%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.4%22%2F%3E%3Ccircle%20cx%3D%22470.7%22%20cy%3D%22147.4%22%20r%3D%2227.7%22%20fill%3D%22url(%23gf-ink-471-147)%22%2F%3E%3Ccircle%20cx%3D%22518.8%22%20cy%3D%22626.5%22%20r%3D%2245.3%22%20fill%3D%22url(%23gf-ink-519-626)%22%2F%3E%3Ccircle%20cx%3D%221181.6%22%20cy%3D%22194.5%22%20r%3D%2234.2%22%20fill%3D%22url(%23gf-ink-1182-195)%22%2F%3E%3Ccircle%20cx%3D%22583.1%22%20cy%3D%22581.4%22%20r%3D%2235.1%22%20fill%3D%22url(%23gf-ink-583-581)%22%2F%3E%3Ccircle%20cx%3D%22690.1%22%20cy%3D%22276.3%22%20r%3D%2242.9%22%20fill%3D%22url(%23gf-ink-690-276)%22%2F%3E%3Ccircle%20cx%3D%22675.9%22%20cy%3D%22323.6%22%20r%3D%2216.7%22%20fill%3D%22url(%23gf-ink-676-324)%22%2F%3E%3Ccircle%20cx%3D%221394.3%22%20cy%3D%22205.9%22%20r%3D%2251.6%22%20fill%3D%22url(%23gf-ink-1394-206)%22%2F%3E%3Ccircle%20cx%3D%22505.5%22%20cy%3D%22359.5%22%20r%3D%2248.0%22%20fill%3D%22url(%23gf-ink-505-360)%22%2F%3E%3Ccircle%20cx%3D%221482.8%22%20cy%3D%22668.2%22%20r%3D%2219.2%22%20fill%3D%22url(%23gf-ink-1483-668)%22%2F%3E%3Ccircle%20cx%3D%22212.1%22%20cy%3D%22511.8%22%20r%3D%2250.0%22%20fill%3D%22url(%23gf-ink-212-512)%22%2F%3E%3C%2Fsvg%3E",
		zhanshen: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%20900%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gf-ink-1287-541%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-541-139%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1268-513%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1448-644%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-620-296%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-504-275%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-229-474%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-611-483%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-glow%22%20cx%3D%2285%25%22%20cy%3D%2212%25%22%20r%3D%2260%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%238a8f98%22%20stop-opacity%3D%220.28%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%238a8f98%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3ClinearGradient%20id%3D%22gf-mist%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.10%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233b5b8f%22%20stop-opacity%3D%220.02%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22%230d0d13%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22url(%23gf-glow)%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20307.4%20L%20228.6%20324.5%20L%20457.1%20362.5%20L%20685.7%20366.4%20L%20914.3%20344.6%20L%201142.9%20305.6%20L%201371.4%20290.5%20L%201600.0%20370.4%20L%201600%20900%20Z%22%20fill%3D%22%23121219%22%20opacity%3D%220.55%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20511.8%20L%20228.6%20407.4%20L%20457.1%20400.7%20L%20685.7%20488.4%20L%20914.3%20449.8%20L%201142.9%20423.8%20L%201371.4%20402.2%20L%201600.0%20456.5%20L%201600%20900%20Z%22%20fill%3D%22%2314141b%22%20opacity%3D%220.7%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20622.7%20L%20228.6%20586.2%20L%20457.1%20604.0%20L%20685.7%20588.7%20L%20914.3%20637.5%20L%201142.9%20660.5%20L%201371.4%20700.6%20L%201600.0%20638.1%20L%201600%20900%20Z%22%20fill%3D%22%2316161e%22%20opacity%3D%220.85%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22304%22%20width%3D%221600%22%20height%3D%22108%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.5%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22666%22%20width%3D%221600%22%20height%3D%22162%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.4%22%2F%3E%3Ccircle%20cx%3D%221287.3%22%20cy%3D%22541.1%22%20r%3D%2245.7%22%20fill%3D%22url(%23gf-ink-1287-541)%22%2F%3E%3Ccircle%20cx%3D%22540.7%22%20cy%3D%22139.0%22%20r%3D%2256.5%22%20fill%3D%22url(%23gf-ink-541-139)%22%2F%3E%3Ccircle%20cx%3D%221268.1%22%20cy%3D%22513.4%22%20r%3D%2256.5%22%20fill%3D%22url(%23gf-ink-1268-513)%22%2F%3E%3Ccircle%20cx%3D%221447.9%22%20cy%3D%22643.9%22%20r%3D%2252.3%22%20fill%3D%22url(%23gf-ink-1448-644)%22%2F%3E%3Ccircle%20cx%3D%22619.7%22%20cy%3D%22295.7%22%20r%3D%2250.0%22%20fill%3D%22url(%23gf-ink-620-296)%22%2F%3E%3Ccircle%20cx%3D%22503.7%22%20cy%3D%22275.4%22%20r%3D%2220.2%22%20fill%3D%22url(%23gf-ink-504-275)%22%2F%3E%3Ccircle%20cx%3D%22229.4%22%20cy%3D%22474.0%22%20r%3D%2256.7%22%20fill%3D%22url(%23gf-ink-229-474)%22%2F%3E%3Ccircle%20cx%3D%22610.6%22%20cy%3D%22483.4%22%20r%3D%2224.4%22%20fill%3D%22url(%23gf-ink-611-483)%22%2F%3E%3C%2Fsvg%3E",
		buliangren: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%20900%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gf-ink-10-262%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1314-447%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-980-609%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1240-220%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-934-271%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1371-538%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1172-454%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-829-209%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-glow%22%20cx%3D%2285%25%22%20cy%3D%2212%25%22%20r%3D%2260%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2345607a%22%20stop-opacity%3D%220.28%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2345607a%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3ClinearGradient%20id%3D%22gf-mist%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.10%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a63a3a%22%20stop-opacity%3D%220.02%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22%2315151a%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22url(%23gf-glow)%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20278.1%20L%20228.6%20376.1%20L%20457.1%20305.2%20L%20685.7%20363.4%20L%20914.3%20350.4%20L%201142.9%20300.9%20L%201371.4%20354.4%20L%201600.0%20355.5%20L%201600%20900%20Z%22%20fill%3D%22%231a1a20%22%20opacity%3D%220.55%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20455.3%20L%20228.6%20515.9%20L%20457.1%20391.2%20L%20685.7%20472.4%20L%20914.3%20437.2%20L%201142.9%20404.7%20L%201371.4%20412.1%20L%201600.0%20471.1%20L%201600%20900%20Z%22%20fill%3D%22%231c1c22%22%20opacity%3D%220.7%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20557.3%20L%20228.6%20606.8%20L%20457.1%20675.5%20L%20685.7%20550.2%20L%20914.3%20652.7%20L%201142.9%20584.9%20L%201371.4%20552.7%20L%201600.0%20645.9%20L%201600%20900%20Z%22%20fill%3D%22%231d1d25%22%20opacity%3D%220.85%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22376%22%20width%3D%221600%22%20height%3D%22108%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.5%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22542%22%20width%3D%221600%22%20height%3D%22162%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.4%22%2F%3E%3Ccircle%20cx%3D%229.6%22%20cy%3D%22261.7%22%20r%3D%2227.1%22%20fill%3D%22url(%23gf-ink-10-262)%22%2F%3E%3Ccircle%20cx%3D%221314.1%22%20cy%3D%22446.7%22%20r%3D%2251.3%22%20fill%3D%22url(%23gf-ink-1314-447)%22%2F%3E%3Ccircle%20cx%3D%22980.1%22%20cy%3D%22609.0%22%20r%3D%2223.2%22%20fill%3D%22url(%23gf-ink-980-609)%22%2F%3E%3Ccircle%20cx%3D%221239.6%22%20cy%3D%22220.4%22%20r%3D%2253.1%22%20fill%3D%22url(%23gf-ink-1240-220)%22%2F%3E%3Ccircle%20cx%3D%22934.2%22%20cy%3D%22270.7%22%20r%3D%2240.3%22%20fill%3D%22url(%23gf-ink-934-271)%22%2F%3E%3Ccircle%20cx%3D%221371.2%22%20cy%3D%22538.5%22%20r%3D%2254.1%22%20fill%3D%22url(%23gf-ink-1371-538)%22%2F%3E%3Ccircle%20cx%3D%221172.3%22%20cy%3D%22453.6%22%20r%3D%2225.3%22%20fill%3D%22url(%23gf-ink-1172-454)%22%2F%3E%3Ccircle%20cx%3D%22829.3%22%20cy%3D%22208.9%22%20r%3D%2219.8%22%20fill%3D%22url(%23gf-ink-829-209)%22%2F%3E%3C%2Fsvg%3E",
		tunshixingkong: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%20900%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gf-ink-439-359%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1062-590%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1470-178%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-537-553%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-632-657%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1007-332%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1589-233%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-1330-283%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-ink-284-662%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.55%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gf-glow%22%20cx%3D%2285%25%22%20cy%3D%2212%25%22%20r%3D%2260%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%238a5cff%22%20stop-opacity%3D%220.28%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%238a5cff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3ClinearGradient%20id%3D%22gf-mist%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.10%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%233f7fff%22%20stop-opacity%3D%220.02%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22%2305070f%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22url(%23gf-glow)%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20319.2%20L%20228.6%20303.3%20L%20457.1%20341.4%20L%20685.7%20336.8%20L%20914.3%20286.4%20L%201142.9%20294.0%20L%201371.4%20343.7%20L%201600.0%20356.6%20L%201600%20900%20Z%22%20fill%3D%22%23090c15%22%20opacity%3D%220.55%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20420.3%20L%20228.6%20384.1%20L%20457.1%20387.6%20L%20685.7%20467.2%20L%20914.3%20434.0%20L%201142.9%20394.5%20L%201371.4%20403.8%20L%201600.0%20425.7%20L%201600%20900%20Z%22%20fill%3D%22%230b0e18%22%20opacity%3D%220.7%22%2F%3E%3Cpath%20d%3D%22M%200%20900%20L%200%20595.2%20L%20228.6%20687.8%20L%20457.1%20623.7%20L%20685.7%20522.3%20L%20914.3%20558.7%20L%201142.9%20571.7%20L%201371.4%20662.0%20L%201600.0%20693.6%20L%201600%20900%20Z%22%20fill%3D%22%230d101a%22%20opacity%3D%220.85%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22397%22%20width%3D%221600%22%20height%3D%22108%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.5%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%22633%22%20width%3D%221600%22%20height%3D%22162%22%20fill%3D%22url(%23gf-mist)%22%20opacity%3D%220.4%22%2F%3E%3Ccircle%20cx%3D%22438.6%22%20cy%3D%22358.6%22%20r%3D%2227.2%22%20fill%3D%22url(%23gf-ink-439-359)%22%2F%3E%3Ccircle%20cx%3D%221062.0%22%20cy%3D%22589.9%22%20r%3D%2227.9%22%20fill%3D%22url(%23gf-ink-1062-590)%22%2F%3E%3Ccircle%20cx%3D%221469.8%22%20cy%3D%22178.4%22%20r%3D%2215.9%22%20fill%3D%22url(%23gf-ink-1470-178)%22%2F%3E%3Ccircle%20cx%3D%22536.6%22%20cy%3D%22552.6%22%20r%3D%2248.1%22%20fill%3D%22url(%23gf-ink-537-553)%22%2F%3E%3Ccircle%20cx%3D%22631.9%22%20cy%3D%22657.4%22%20r%3D%2245.1%22%20fill%3D%22url(%23gf-ink-632-657)%22%2F%3E%3Ccircle%20cx%3D%221006.7%22%20cy%3D%22332.2%22%20r%3D%2215.4%22%20fill%3D%22url(%23gf-ink-1007-332)%22%2F%3E%3Ccircle%20cx%3D%221588.7%22%20cy%3D%22233.4%22%20r%3D%2258.5%22%20fill%3D%22url(%23gf-ink-1589-233)%22%2F%3E%3Ccircle%20cx%3D%221329.6%22%20cy%3D%22283.2%22%20r%3D%2236.7%22%20fill%3D%22url(%23gf-ink-1330-283)%22%2F%3E%3Ccircle%20cx%3D%22283.9%22%20cy%3D%22662.2%22%20r%3D%2241.6%22%20fill%3D%22url(%23gf-ink-284-662)%22%2F%3E%3C%2Fsvg%3E",
		};

		/** Particle ink colors per skin. */
		const INK = {
		jianlai: { color: "#5f8d6e", glow: "#4a7f9e" },
		cangyuantu: { color: "#2b4a8f", glow: "#9fd8ff" },
		zhanshen: { color: "#3b5b8f", glow: "#8a8f98" },
		buliangren: { color: "#a63a3a", glow: "#45607a" },
		tunshixingkong: { color: "#3f7fff", glow: "#8a5cff" },
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
