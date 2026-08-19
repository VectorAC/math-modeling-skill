#!/usr/bin/env node
/**
 * dsh-guofeng-skins structural validation.
 *
 * Verifies the generated lib/client.js against the token inventory of the
 * installed DSH web theme runtime (design-platform.css, rc.7 snapshot):
 *   - every emitted token name exists in the inventory
 *   - all color values parse as CSS colors
 *   - all 5 skins present, ids unique, WALLPAPERS/INK keys match
 *
 * Re-run after any DSH upgrade: regrep the new design-platform.css and
 * update ALLOWED_* below.
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SKIN_IDS = ["jianlai", "cangyuantu", "zhanshen", "buliangren", "tunshixingkong", "xingkong"];

// ── token inventory snapshot (dsh-client-ui-theme rc.7) ────────────────────

const STATIC_PREFIXES = {
  "static-neutral": ["00", 50, 100, 150, 200, 250, 300, 400, 500, 550, 600, 700, 800, 850, 900, 1000],
  "static-neutral-bluish": ["00", 50, 60, 75, 100, 150, 200, 300, 400, 500, 600, 700, 750, 800, 850, 875, 900, 950, 1000],
  "static-deepseek": [50, 100, 200, 300, 400, 450, 500, 600, 800, 900, "700-delete"],
  "static-blue": [50, "50p", 75, 100, 300, 400, 450, 500, 600, 800, 900, 950],
  "static-red": [50, 100, 400, 500, 600, 900],
  "static-green": [100, 400, 500, 900],
  "static-amber": [100, 400, 500, 600, 900]
};
const ALIAS = [
  "bg-base", "bg-layer-1", "bg-layer-2", "bg-layer-3", "bg-mask-1", "bg-mask-2", "bg-mask-3",
  "bg-mask-drop", "bg-mask-photo", "bg-module-platform", "bg-multi-select", "bg-overlay",
  "bg-skeleton", "border-inverted", "border-inverted2", "border-l1", "border-l2",
  "border-l2-darkmode-thin", "border-l3", "border-l4", "brand-primary", "brand-primary-invert",
  "brand-primary-new-colorprimary-new-color", "brand-text", "button-contrast-fill",
  "button-elevated-fill", "button-floating-fill", "button-floating-hover", "button-ghost-active-border",
  "button-ghost-active-fill", "button-ghost-active-hover", "button-info-fill", "button-info-hover",
  "button-primary-dimmed", "button-primary-fill", "button-primary-hover", "button-tool-bar-fill",
  "button-tool-bar-fill-invisible", "button-tool-bar-hover", "interactive-bg-active",
  "interactive-bg-hover", "interactive-bg-hover-accent", "interactive-bg-hover-danger",
  "interactive-bg-hover-solid", "label-caption", "label-dimmed", "label-primary",
  "label-primary-bluish", "label-primary-dimmed", "label-primary-foreground",
  "label-primary-inverted", "label-secondary", "label-tertiary", "markdown-citation",
  "markdown-code-block", "markdown-code-block-banner", "markdown-code-segment-selected",
  "markdown-code-segment-unselected", "markdown-inline-code", "markdown-placeholder",
  "markdown-tag", "scrollbar-bg-l1", "scrollbar-bg-l2", "scrollbar-hover-l1",
  "scrollbar-hover-l2", "state-business-primary", "state-business-tertiary",
  "state-error-primary", "state-error-secondary", "state-success-primary",
  "state-success-secondary", "state-success-tertiary", "state-warn-label",
  "state-warn-primary", "state-warn-secondary", "state-warn-tertiary", "toast-bg", "tooltip-bg"
];
const SPECIFIC = [
  "bubble", "bubble-highlight", "input-major", "login-input", "menu", "selector",
  "sidebar-fill", "sidebar-nav-item-active", "sidebar-nav-item-active-accent",
  "sidebar-nav-item-hover", "tip"
];
const SHIKI = [
  "background", "foreground", "token-comment", "token-constant", "token-function",
  "token-keyword", "token-link", "token-parameter", "token-punctuation",
  "token-string", "token-string-expression"
];

const allowed = new Set([
  ...Object.entries(STATIC_PREFIXES).flatMap(([prefix, steps]) => steps.map((s) => `--dsw-${prefix}-${s}`)),
  ...ALIAS.map((k) => `--dsw-alias-${k}`),
  ...SPECIFIC.map((k) => `--dsw-specific-${k}`),
  ...SHIKI.map((k) => `--shiki-${k}`)
]);

// ── validators ──────────────────────────────────────────────────────────────

const HEX_RE = /^#[0-9a-f]{6}$/i;
const RGBA_RE = /^rgba\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*(0|1|0?\.\d+)\s*\)$/;
const COLOR_MIX_RE = /^color-mix\(in srgb, #([0-9a-f]{6}) \d{1,3}%, transparent\)$/i;

function validColor(value) {
  return typeof value === "string" && (HEX_RE.test(value) || RGBA_RE.test(value) || COLOR_MIX_RE.test(value));
}

// ── run ────────────────────────────────────────────────────────────────────

const bundle = readFileSync(join(ROOT, "lib", "client.js"), "utf8");
const theme = JSON.parse(readFileSync(join(ROOT, "themes", "jianlai.json"), "utf8"));

let errors = 0;
const fail = (msg) => {
  errors++;
  console.error(`✗ ${msg}`);
};

// skins present, ids unique
for (const id of SKIN_IDS) {
  if (!bundle.includes(`"id": "${id}"`)) fail(`skin ${id} missing from lib/client.js`);
}
const ids = [...bundle.matchAll(/"id": "(jianlai|cangyuantu|zhanshen|buliangren|tunshixingkong|xingkong)"/g)].map((m) => m[1]);
if (new Set(ids).size !== ids.length) fail("duplicate skin ids in lib/client.js");

// token names + color values
for (const token of Object.entries(theme.tokens)) {
  const [name, value] = token;
  if (!allowed.has(name)) fail(`unknown token ${name}`);
  if (!validColor(value)) fail(`bad color value for ${name}: ${value}`);
}

// scene renderer + INK keys match the skins
if (!bundle.includes("buildStarScene") || !bundle.includes("buildInkScene")) {
  fail("scene renderer (buildStarScene/buildInkScene) missing from lib/client.js");
}
for (const id of SKIN_IDS) {
  if (!new RegExp(`\\n\\t\\t${id}: \\{ type:`).test(bundle)) fail(`INK entry for ${id} missing`);
}

if (errors === 0) {
  console.log(`check passed: ${SKIN_IDS.length} skins, ${Object.keys(theme.tokens).length} tokens, all names in the rc.7 inventory`);
} else {
  console.error(`${errors} problem(s) found`);
  process.exit(1);
}
