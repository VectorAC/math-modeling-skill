#!/usr/bin/env node
/**
 * dsh-guofeng-skins token generator.
 *
 * Builds the DSH theme-runtime token tables from palette/*.json and
 * regenerates:
 *
 *   - themes/<id>.json          one JSON per skin (for eyeballing)
 *   - lib/client.js             the browser bundle, with SKINS / WALLPAPERS /
 *                               INK inlined from lib/client.tpl.js
 *
 * Each skin's token table follows the official --dsw-static-* / --dsw-alias-*
 * / --dsw-specific-* / --shiki-* vocabulary of the DSH web theme runtime
 * (see dsh-client-ui-theme/lib/styles/design-platform.css). Anchors are the
 * five palette JSONs; ramp positions are interpolated linearly in sRGB
 * between anchors. Glassmorphism alpha is baked directly into the surface
 * alias/specific tokens so the wallpaper shows through translucent panels
 * (and glass still holds when no wallpaper is set).
 *
 * Ramp / alias / specific / shiki table semantics modeled on the official
 * dark-theme mapping as ported by dsh-dracula-theme (MIT, ossFrankFrank).
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SKIN_IDS = ["jianlai", "cangyuantu", "zhanshen", "buliangren", "tunshixingkong"];

// ── color helpers ───────────────────────────────────────────────────────────

/** Parse "#rrggbb" → [r, g, b]. */
const hex = (value) => value.match(/^#([0-9a-f]{6})$/i) && [1, 3, 5].map((i) => parseInt(value.slice(i, i + 2), 16));
/** [r, g, b] → "#rrggbb". */
const rgb = (c) => `#${c.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("")}`;
/** Linear sRGB mix: mix(a, b, t) — t=0 → a, t=1 → b. */
const mix = (a, b, t) => rgb(hex(a).map((v, i) => v + (hex(b)[i] - v) * t));
/** "#rrggbb" → "rgba(r, g, b, a)". */
const rgba = (value, alpha) => {
  const [r, g, b] = hex(value);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
/** color-mix border: line color at p% against transparent. */
const lineMix = (color, percent) => `color-mix(in srgb, ${color} ${percent}%, transparent)`;

/**
 * Piecewise-linear ramp between anchor stops {position: "#hex"} sorted by
 * position; returns the interpolated color at `at`.
 */
function rampAt(anchors, at) {
  const stops = Object.entries(anchors)
    .map(([key, value]) => [Number(key), value])
    .filter(([position, value]) => Number.isFinite(position) && typeof value === "string")
    .sort((a, b) => a[0] - b[0]);
  if (stops.length === 0) throw new TypeError("rampAt: no numeric anchor positions");
  if (at <= stops[0][0]) return stops[0][1];
  for (let i = 1; i < stops.length; i++) {
    if (at <= stops[i][0]) {
      const lo = stops[i - 1];
      const hi = stops[i];
      return mix(lo[1], hi[1], (at - lo[0]) / (hi[0] - lo[0]));
    }
  }
  return stops[stops.length - 1][1];
}

const fillRamp = (positions, anchors) => Object.fromEntries(positions.map((p) => [p, rampAt(anchors, Number(p))]));

// ── deterministic PRNG for wallpaper generation (mulberry32) ────────────────

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ── per-skin token tables ───────────────────────────────────────────────────

/** Canvas (bluish) ramp positions of the official dark theme (rc.7 inventory). */
const canvasPositions = ["00", "50", "60", "75", "100", "150", "200", "300", "400", "500", "600", "700", "750", "800", "850", "875", "900", "950", "1000"];
/** Neutral (text/border) ramp positions. */
const neutralPositions = ["00", "50", "100", "150", "200", "250", "300", "400", "500", "550", "600", "700", "800", "850", "900", "1000"];
const deepseekPositions = ["50", "100", "200", "300", "400", "450", "500", "600", "700-delete", "800", "900"];
const bluePositions = ["50", "50p", "75", "100", "300", "400", "450", "500", "600", "800", "900", "950"];
const redPositions = ["50", "100", "400", "500", "600", "900"];
const greenPositions = ["100", "400", "500", "900"];
const amberPositions = ["100", "400", "500", "600", "900"];

function buildRamps(a) {
  const { base, panel, ink, ink2, accent, accent2, gold, red, success, amber } = a;
  const line = mix(panel, ink, 0.18);
  const raised = mix(panel, ink, 0.1);
  const panel2 = mix(panel, base, 0.45);
  const panel3 = mix(panel, base, 0.62);

  const canvasAnchors = {
    0: ink, 50: ink, 60: mix(ink, ink2, 0.15), 75: mix(ink, ink2, 0.3), 100: mix(ink, ink2, 0.4),
    150: mix(ink, ink2, 0.5), 200: mix(ink, ink2, 0.6), 250: mix(ink2, base, 0.25), 300: ink2,
    400: mix(ink2, base, 0.35), 500: mix(ink2, base, 0.55), 550: mix(ink2, base, 0.65), 600: line,
    700: line, 750: raised, 800: panel3, 850: panel2, 875: panel, 900: panel,
    950: base, 1000: mix(base, "#000000", 0.5)
  };
  const canvas = fillRamp(canvasPositions, canvasAnchors);

  const neutralAnchors = {
    0: ink, 50: ink, 100: mix(ink, ink2, 0.4), 150: mix(ink, ink2, 0.55), 200: ink2,
    250: mix(ink2, base, 0.3), 300: mix(ink2, base, 0.4), 400: mix(ink2, base, 0.55),
    500: mix(ink2, base, 0.68), 550: line, 600: line, 700: line, 800: panel3,
    850: panel2, 900: base, 1000: mix(base, "#000000", 0.6)
  };
  const neutral = fillRamp(neutralPositions, neutralAnchors);

  const deepseek = {
    "50": mix(accent, ink, 0.85), "100": mix(accent, ink, 0.7), "200": mix(accent, ink, 0.55),
    "300": mix(accent, ink, 0.4), "400": mix(accent, ink, 0.2), "450": accent, "500": accent,
    "600": mix(accent, base, 0.2), "700-delete": mix(accent, base, 0.4),
    "800": mix(accent, base, 0.5), "900": mix(accent, base, 0.65)
  };

  const blue = {
    "50": mix(accent2, ink, 0.85), "50p": mix(accent2, ink, 0.8), "75": mix(accent2, ink, 0.75),
    "100": mix(accent2, ink, 0.65), "300": mix(accent2, ink, 0.35), "400": mix(accent2, ink, 0.15),
    "450": accent2, "500": accent2, "600": mix(accent2, base, 0.25), "800": mix(accent2, base, 0.5),
    "900": mix(accent2, base, 0.65), "950": mix(accent2, base, 0.75)
  };

  const redRamp = {
    "50": mix(red, ink, 0.85), "100": mix(red, ink, 0.7), "400": red,
    "500": mix(red, ink, 0.18), "600": mix(red, base, 0.18), "900": mix(red, base, 0.7)
  };

  const green = {
    "100": mix(success, ink, 0.7), "400": success, "500": mix(success, ink, 0.15),
    "900": mix(success, base, 0.7)
  };

  const amberRamp = {
    "100": mix(amber, ink, 0.7), "400": amber, "500": mix(amber, ink, 0.12),
    "600": mix(amber, base, 0.15), "900": mix(amber, base, 0.7)
  };

  // Canvas position of each surface (official dark-theme semantics).
  const CANVAS = {
    base: canvas["950"], layer1: canvas["875"], layer2: canvas["850"], layer3: canvas["800"],
    overlay: canvas["700"], tooltip: canvas["750"], sidebar: canvas["900"], caption: canvas["600"],
    secondary: canvas["300"], tertiary: canvas["400"], primary: canvas["50"]
  };
  // NOTE: `red`/`amber` anchor strings must NOT be spread into the return —
  // they would clobber the redRamp/amberRamp objects of the same name.
  const G = { base, panel, panel2, panel3, raised, line, ink, ink2, accent, accent2, gold, success, CANVAS };

  // ── alias layer — surfaces consumed by the UI; glass alpha baked in ──
  // Alphas are tuned so the wallpaper stays clearly visible through panels
  // (bg-base ~0.75 keeps text readable while letting the ink-wash through).
  const aliases = {
    "bg-base": rgba(base, 0.76),
    "bg-layer-1": rgba(panel, 0.6),
    "bg-layer-2": rgba(panel2, 0.5),
    "bg-layer-3": rgba(panel3, 0.45),
    "bg-module-platform": rgba(panel3, 0.5),
    "bg-overlay": rgba(raised, 0.55),
    "bg-multi-select": rgba(raised, 0.55),
    "bg-skeleton": rgba(ink, 0.05),
    "bg-mask-1": "rgba(0, 0, 0, 0.45)",
    "bg-mask-2": "rgba(0, 0, 0, 0.55)",
    "bg-mask-3": "rgba(0, 0, 0, 0.65)",
    "bg-mask-photo": "rgba(0, 0, 0, 0.88)",
    "bg-mask-drop": "rgba(0, 0, 0, 0.7)",
    "border-l1": lineMix(line, 30),
    "border-l2": lineMix(line, 45),
    "border-l3": lineMix(line, 60),
    "border-l4": lineMix(line, 75),
    "border-inverted": "rgba(0, 0, 0, 0.08)",
    "border-inverted2": "rgba(0, 0, 0, 0.12)",
    "border-l2-darkmode-thin": rgba(line, 0.3),
    "brand-primary": accent,
    "brand-primary-invert": ink,
    "brand-primary-new-colorprimary-new-color": accent,
    "brand-text": accent2,
    "button-contrast-fill": base,
    "button-elevated-fill": rgba(panel2, 0.75),
    "button-floating-fill": rgba(raised, 0.75),
    "button-floating-hover": rgba(line, 0.55),
    "button-ghost-active-border": line,
    "button-ghost-active-fill": rgba(panel2, 0.65),
    "button-ghost-active-hover": rgba(raised, 0.65),
    "button-info-fill": accent,
    "button-info-hover": mix(accent, base, 0.4),
    "button-primary-dimmed": mix(accent, base, 0.2),
    "button-primary-fill": accent,
    "button-primary-hover": mix(accent, ink, 0.1),
    "button-tool-bar-fill": rgba(line, 0.35),
    "button-tool-bar-fill-invisible": rgba(line, 0.2),
    "button-tool-bar-hover": rgba(accent, 0.35),
    "interactive-bg-active": rgba(ink, 0.14),
    "interactive-bg-hover": rgba(ink, 0.08),
    "interactive-bg-hover-accent": rgba(accent, 0.16),
    "interactive-bg-hover-danger": rgba(red, 0.14),
    "interactive-bg-hover-solid": rgba(raised, 0.8),
    "label-caption": CANVAS.caption,
    "label-dimmed": canvas["500"],
    "label-primary": CANVAS.primary,
    "label-primary-bluish": CANVAS.primary,
    "label-primary-dimmed": CANVAS.tertiary,
    "label-primary-foreground": base,
    "label-primary-inverted": CANVAS.tooltip,
    "label-secondary": CANVAS.secondary,
    "label-tertiary": CANVAS.tertiary,
    "markdown-citation": rgba(raised, 0.6),
    "markdown-code-block": rgba(panel2, 0.55),
    "markdown-code-block-banner": rgba(panel, 0.55),
    "markdown-code-segment-selected": rgba(raised, 0.6),
    "markdown-code-segment-unselected": rgba(panel2, 0.55),
    "markdown-inline-code": rgba(raised, 0.6),
    "markdown-placeholder": canvas["500"],
    "markdown-tag": accent,
    "scrollbar-bg-l1": rgba(line, 0.25),
    "scrollbar-bg-l2": rgba(line, 0.25),
    "scrollbar-hover-l1": rgba(ink, 0.18),
    "scrollbar-hover-l2": rgba(ink, 0.18),
    "state-business-primary": accent2,
    "state-business-tertiary": rgba(accent2, 0.1),
    "state-error-primary": red,
    "state-error-secondary": rgba(red, 0.16),
    "state-success-primary": success,
    "state-success-secondary": rgba(success, 0.16),
    "state-success-tertiary": rgba(success, 0.1),
    "state-warn-label": mix(amber, ink, 0.35),
    "state-warn-primary": amber,
    "state-warn-secondary": rgba(amber, 0.16),
    "state-warn-tertiary": rgba(amber, 0.1),
    "toast-bg": rgba(panel2, 0.75),
    "tooltip-bg": rgba(raised, 0.8)
  };

  /** Component-specific surfaces (sidebar, bubbles, composer…). */
  const specifics = {
    "sidebar-fill": rgba(base, 0.72),
    "sidebar-nav-item-active": rgba(raised, 0.65),
    "sidebar-nav-item-active-accent": rgba(accent, 0.25),
    "sidebar-nav-item-hover": rgba(panel2, 0.55),
    "bubble": rgba(panel2, 0.6),
    "bubble-highlight": rgba(raised, 0.6),
    "input-major": rgba(base, 0.72),
    "login-input": rgba(base, 0.72),
    "menu": rgba(panel2, 0.65),
    "selector": rgba(raised, 0.6),
    "tip": rgba(panel2, 0.6)
  };

  /** Code highlighting — official semantics on our anchors. */
  const shiki = {
    "background": rgba(panel2, 0.55),
    "foreground": ink,
    "token-comment": rgba(ink2, 0.85),
    "token-constant": gold,
    "token-function": accent2,
    "token-keyword": gold,
    "token-link": accent2,
    "token-parameter": amber,
    "token-punctuation": ink2,
    "token-string": mix(success, ink, 0.25),
    "token-string-expression": mix(success, ink, 0.25)
  };

  return { canvas, neutral, deepseek, blue, red: redRamp, green, amber: amberRamp, aliases, specifics, shiki, ...G };
}

const withPrefix = (prefix, table) => Object.fromEntries(Object.entries(table).map(([k, v]) => [`--dsw-${prefix}-${k}`, v]));
const SHIKI_KEYS = ["background", "foreground", "token-comment", "token-constant", "token-function", "token-keyword", "token-link", "token-parameter", "token-punctuation", "token-string", "token-string-expression"];

function buildTheme(palette) {
  const R = buildRamps(palette.anchor);
  const tokens = {
    ...withPrefix("static-neutral", R.neutral),
    ...withPrefix("static-neutral-bluish", R.canvas),
    ...withPrefix("static-deepseek", R.deepseek),
    ...withPrefix("static-blue", R.blue),
    ...withPrefix("static-red", R.red),
    ...withPrefix("static-green", R.green),
    ...withPrefix("static-amber", R.amber),
    ...withPrefix("alias", R.aliases),
    ...withPrefix("specific", R.specifics),
    ...Object.fromEntries(SHIKI_KEYS.map((k) => [`--shiki-${k}`, R.shiki[k]]))
  };
  return {
    // the runtime consumes exactly {id, name, colorScheme, tokens}
    registered: { id: palette.id, name: palette.name, colorScheme: "dark", tokens },
    full: {
      id: palette.id, name: palette.name, nameEn: palette.nameEn,
      colorScheme: "dark", tokens,
      ink: { color: palette.anchor.accent, glow: palette.anchor.accent2 }
    }
  };
}

// ── wallpaper SVG generator (deterministic per skin seed) ───────────────────

const W = 1600, H = 900;

function ridgePath(rand, peakY, troughY, fill, opacity) {
  // One mountain layer: piecewise-linear ridge from left to right.
  let d = `M 0 ${H}`;
  const steps = 7;
  let y = peakY + (troughY - peakY) * rand();
  d += ` L 0 ${y.toFixed(1)}`;
  for (let i = 1; i <= steps; i++) {
    y = peakY + (troughY - peakY) * rand();
    d += ` L ${((W * i) / steps).toFixed(1)} ${y.toFixed(1)}`;
  }
  d += ` L ${W} ${H} Z`;
  return `<path d="${d}" fill="${fill}" opacity="${opacity}"/>`;
}

function buildWallpaper(palette) {
  const rand = mulberry32(palette.seed);
  const { base, panel, accent, accent2 } = palette.anchor;
  const panel2 = mix(panel, base, 0.45);
  const panel3 = mix(panel, base, 0.62);

  const defs = [];
  const mist1 = `url(#gf-mist)`;
  const layers = [];
  // far / mid / near mountain layers
  layers.push(ridgePath(rand, H * 0.30, H * 0.42, panel3, 0.55));
  layers.push(ridgePath(rand, H * 0.42, H * 0.58, panel2, 0.7));
  layers.push(ridgePath(rand, H * 0.58, H * 0.78, mix(panel, base, 0.3), 0.85));

  // mist bands (2) — accent-tinted horizontal gradients
  const mistY1 = H * 0.30 + rand() * H * 0.15;
  const mistY2 = H * 0.55 + rand() * H * 0.2;
  layers.push(`<rect x="0" y="${mistY1.toFixed(0)}" width="${W}" height="${(H * 0.12).toFixed(0)}" fill="${mist1}" opacity="0.5"/>`);
  layers.push(`<rect x="0" y="${mistY2.toFixed(0)}" width="${W}" height="${(H * 0.18).toFixed(0)}" fill="${mist1}" opacity="0.4"/>`);

  // ink drops (8–14) drifting over the mountains
  const drops = 8 + Math.floor(rand() * 7);
  for (let i = 0; i < drops; i++) {
    const cx = rand() * W;
    const cy = H * 0.15 + rand() * H * 0.6;
    const r = 14 + rand() * 46;
    const id = `gf-ink-${cx.toFixed(0)}-${cy.toFixed(0)}`;
    defs.push(`<radialGradient id="${id}"><stop offset="0%" stop-color="${accent}" stop-opacity="0.55"/><stop offset="100%" stop-color="${accent}" stop-opacity="0"/></radialGradient>`);
    layers.push(`<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="url(#${id})"/>`);
  }

  // soft radial glow top-right in accent2
  const glowId = "gf-glow";
  defs.push(`<radialGradient id="${glowId}" cx="85%" cy="12%" r="60%"><stop offset="0%" stop-color="${accent2}" stop-opacity="0.28"/><stop offset="100%" stop-color="${accent2}" stop-opacity="0"/></radialGradient>`);
  layers.unshift(`<rect x="0" y="0" width="${W}" height="${H}" fill="url(#${glowId})"/>`);

  // mist gradient
  defs.push(`<linearGradient id="gf-mist" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${accent}" stop-opacity="0.10"/><stop offset="100%" stop-color="${accent}" stop-opacity="0.02"/></linearGradient>`);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">` +
    `<defs>${defs.join("")}</defs>` +
    `<rect x="0" y="0" width="${W}" height="${H}" fill="${base}"/>` +
    layers.join("") +
    `</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// ── assemble + emit ─────────────────────────────────────────────────────────

const palettes = SKIN_IDS.map((id) => JSON.parse(readFileSync(join(ROOT, "palette", `${id}.json`), "utf8")));
const themes = palettes.map(buildTheme);
const wallpapers = Object.fromEntries(palettes.map((p) => [p.id, buildWallpaper(p)]));
const inkMap = Object.fromEntries(themes.map((t) => [t.full.id, t.full.ink]));

mkdirSync(join(ROOT, "themes"), { recursive: true });
for (const theme of themes) {
  writeFileSync(join(ROOT, "themes", `${theme.full.id}.json`), `${JSON.stringify(theme.full, null, 2)}\n`);
}

const template = readFileSync(join(ROOT, "lib", "client.tpl.js"), "utf8");
for (const marker of ["__SKINS__", "__WALLPAPERS__", "__INK__"]) {
  if (!template.includes(marker)) throw new Error(`lib/client.tpl.js has no ${marker} marker`);
}
const skinsJson = themes.map((theme) => JSON.stringify(theme.registered, null, 2)).join(",\n").split("\n").map((line) => `\t\t${line}`).join("\n");
const wallpapersJson = Object.entries(wallpapers).map(([id, url]) => `\t\t${id}: ${JSON.stringify(url)},`).join("\n");
const inkJson = Object.entries(inkMap).map(([id, ink]) => `\t\t${id}: { color: ${JSON.stringify(ink.color)}, glow: ${JSON.stringify(ink.glow)} },`).join("\n");
const generated = template
  .replace("__SKINS__", skinsJson)
  .replace("__WALLPAPERS__", wallpapersJson)
  .replace("__INK__", inkJson);
writeFileSync(join(ROOT, "lib", "client.js"), generated);

console.log(`generated ${themes.map((t) => `${t.registered.id} (${Object.keys(t.registered.tokens).length} tokens)`).join(", ")}`);
