#!/usr/bin/env node
/**
 * Renders assets/contribution-snake.svg for Tanmai Thakre's profile README from the
 * real contribution snapshot in data/contributions.json.
 *
 * Theme: Cyber Emerald & Quantum Obsidian
 *
 * Env: INPUT_PATH (default data/contributions.json),
 *      OUTPUT_PATH (default assets/contribution-snake.svg)
 */

import fs from "node:fs";
import path from "node:path";

const INPUT = process.env.INPUT_PATH || "data/contributions.json";
const OUTPUT = process.env.OUTPUT_PATH || "assets/contribution-snake.svg";

const W = 1200;
const H = 410;
const CELL = 15;
const GAP = 4;
const STEP = CELL + GAP; // 19
const GRID_X = 118;
const GRID_Y = 182;

// Cyber Emerald & Quantum Obsidian Levels
const LEVELS = ["#0C181E", "#004D31", "#008254", "#00BA77", "#00F5A0"];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const toDate = (iso) => new Date(`${iso}T00:00:00Z`);
const fmt = (d) => `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

if (!fs.existsSync(INPUT)) {
  console.warn(`No snapshot at ${INPUT}; leaving ${OUTPUT} unchanged.`);
  process.exit(0);
}
const data = JSON.parse(fs.readFileSync(INPUT, "utf8"));
const days = data.days;
if (!Array.isArray(days) || days.length === 0) {
  console.warn("Snapshot has no days; leaving SVG unchanged.");
  process.exit(0);
}

/* ---- Stats (computed from real data) ---- */
let total = 0, active = 0, run = 0, best = 0, bestEnd = -1, peak = days[0];
days.forEach((d, i) => {
  total += d.count;
  if (d.count > 0) {
    active++;
    if (++run > best) { best = run; bestEnd = i; }
    if (d.count > peak.count) peak = d;
  } else run = 0;
});
const bestStart = bestEnd - best + 1;
const first = toDate(days[0].date);
const last = toDate(days[days.length - 1].date);
const fetched = data.fetchedAt ? fmt(new Date(data.fetchedAt)) : fmt(last);

/* ---- Grid Calculation ---- */
const offset = first.getUTCDay();
const pos = (i) => {
  const week = Math.floor((i + offset) / 7);
  const dow = (i + offset) % 7;
  return { week, dow, x: GRID_X + week * STEP, y: GRID_Y + dow * STEP };
};
const label = (d) => `${d.count} contribution${d.count === 1 ? "" : "s"} · ${fmt(toDate(d.date))}`;

/* ---- Serpentine Snake Route ---- */
const weeksCount = Math.floor((days.length - 1 + offset) / 7) + 1;
const center = (week, dow) => [GRID_X + week * STEP + CELL / 2, GRID_Y + dow * STEP + CELL / 2];
const route = [];
for (let w = 0; w < weeksCount; w++) {
  for (let r = 0; r < 7; r++) route.push(center(w, w % 2 === 0 ? r : 6 - r));
}
const [fx, fy] = route[0];
const [lx, ly] = route[route.length - 1];
route.unshift([fx, fy - STEP]); // slide in from above the first week
route.push([lx + STEP, ly]); // slide out past the last week

const SNAKE_DT = 0.055; // seconds per cell
const SNAKE_BEGIN = 2.4;
const runTime = (route.length - 1) * SNAKE_DT;
const loop = runTime + 3.5;
const runFrac = (runTime / loop).toFixed(4);
const routeD = "M" + route.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(" L");

// position in the serpentine route for a given day index (+1 for entry step)
const routeIndex = (i) => {
  const { week, dow } = pos(i);
  return week * 7 + (week % 2 === 0 ? dow : 6 - dow) + 1;
};

// Base cells enter as a diagonal wave
const cellsSvg = days
  .map((d, i) => {
    const { week, dow, x, y } = pos(i);
    const delay = (0.3 + (week + dow * 1.6) * 0.018).toFixed(3);
    const glow = d.level === 4 ? ' filter="url(#hm-glow)"' : "";
    const color = LEVELS[d.level] ?? LEVELS[0];
    const stroke = d.level === 0 ? ' stroke="#16333D" stroke-width="0.8"' : "";
    const eat = d.count > 0
      ? `<animate attributeName="fill" values="${color};${LEVELS[0]}" keyTimes="0;${((routeIndex(i) * SNAKE_DT) / loop).toFixed(4)}" calcMode="discrete" dur="${loop.toFixed(2)}s" begin="${SNAKE_BEGIN}s" repeatCount="indefinite"/>`
      : "";
    return `<rect class="hm-c" style="animation-delay:${delay}s" x="${x}" y="${y}" width="${CELL}" height="${CELL}" rx="3.5" fill="${color}"${stroke}${glow}><title>${label(d)}</title>${eat}</rect>`;
  })
  .join("\n    ");

// Label longest streak under the grid
let streakSvg = "";
if (best > 1 && bestStart >= 0 && days[bestStart] && days[bestEnd]) {
  const startPos = pos(bestStart);
  const labelX = Math.min(startPos.x, W - 380);
  streakSvg = `<g class="hm-fade" style="animation-delay:2.6s">
      <path d="M${startPos.x + CELL / 2} ${GRID_Y + 7 * STEP - 2} V ${GRID_Y + 7 * STEP + 10}" stroke="#00F5A0" stroke-opacity=".7" stroke-width="1.2"/>
      <text class="hm-mono" x="${labelX}" y="${GRID_Y + 7 * STEP + 24}" font-size="10.5" letter-spacing="1.6" fill="#00F5A0">LONGEST STREAK · ${best} DAYS · ${fmt(toDate(days[bestStart].date)).toUpperCase()} – ${fmt(toDate(days[bestEnd].date)).toUpperCase()}</text>
    </g>`;
}

// Animated 9-Segment Snake
const SEGMENTS = 9;
const snakeSvg = Array.from({ length: SEGMENTS }, (_, k) => {
  const seg = SEGMENTS - 1 - k; // draw tail first so head sits on top
  const size = CELL - seg * 0.9;
  // Cyber Emerald & Cyan palette for the snake
  const fill = seg === 0 ? "#F0FCF9" : seg < 3 ? "#00F5A0" : seg < 6 ? "#00D9F6" : "#008254";
  const op = (1 - seg * 0.06).toFixed(2);
  const glow = seg === 0 ? ' filter="url(#hm-glow)"' : "";
  const begin = (SNAKE_BEGIN + seg * SNAKE_DT).toFixed(3);
  const eyes = seg === 0 ? `<circle cx="${(size / 2 - 4).toFixed(1)}" cy="-2.5" r="1.3" fill="#080E11"/><circle cx="${(size / 2 - 4).toFixed(1)}" cy="2.5" r="1.3" fill="#080E11"/>` : "";
  return `<g opacity="0"${glow}>
      <animateMotion path="${routeD}" rotate="auto" dur="${loop.toFixed(2)}s" begin="${begin}s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;${runFrac};1"/>
      <animate attributeName="opacity" values="${op};0" keyTimes="0;${runFrac}" calcMode="discrete" dur="${loop.toFixed(2)}s" begin="${begin}s" repeatCount="indefinite"/>
      <rect x="${(-size / 2).toFixed(1)}" y="${(-size / 2).toFixed(1)}" width="${size.toFixed(1)}" height="${size.toFixed(1)}" rx="${(size / 2.6).toFixed(1)}" fill="${fill}"/>${eyes}
    </g>`;
}).join("\n    ");

/* ---- Month Labels ---- */
const labels = [];
let lastMonth = -1;
days.forEach((d, i) => {
  const m = toDate(d.date).getUTCMonth();
  if (m === lastMonth) return;
  lastMonth = m;
  labels.push({ col: Math.floor((i + offset) / 7), text: MONTHS[m] });
});
if (labels.length > 1 && labels[1].col - labels[0].col < 3) labels.shift();
const monthSvg = labels
  .map(({ col, text }) => `<text x="${GRID_X + col * STEP}" y="${GRID_Y - 12}">${text}</text>`)
  .join("");

/* ---- Top Stats Strip ---- */
const stats = [
  ["CONTRIBUTIONS", total.toLocaleString("en-US"), `${MONTHS[first.getUTCMonth()]} ${first.getUTCFullYear()} – ${MONTHS[last.getUTCMonth()]} ${last.getUTCFullYear()}`],
  ["ACTIVE DAYS", String(active), `of ${days.length} days`],
  ["LONGEST STREAK", String(best), "consecutive days"],
  ["BUSIEST DAY", String(peak.count), fmt(toDate(peak.date))],
];
const statsSvg = stats
  .map(([label, value, sub], i) => {
    const x = 580 + i * 155;
    return `<g transform="translate(${x} 58)">
      <text class="hm-mono" font-size="10" letter-spacing="1.8" fill="#00D9F6">${label}</text>
      <text class="hm-serif" y="44" font-size="36" font-weight="300" fill="#F0FCF9">${esc(value)}</text>
      <text class="hm-mono" y="64" font-size="9.5" fill="#8DA8B2">${esc(sub)}</text>
    </g>`;
  })
  .join("\n    ");

const legendX = W - 56 - 5 * 18 - 70;
const legend = LEVELS.map((c, i) => `<rect x="${legendX + 36 + i * 18}" y="372" width="12" height="12" rx="3" fill="${c}" stroke="#16333D" stroke-width="0.8"/>`).join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-labelledby="hm-title hm-desc">
  <title id="hm-title">GitHub contributions for @${esc(data.login)}</title>
  <desc id="hm-desc">${total} contributions from ${fmt(first)} to ${fmt(last)}: ${active} active days, longest streak ${best} days, busiest day ${peak.count} contributions on ${fmt(toDate(peak.date))}. Source: ${esc(data.method || "public GitHub contribution calendar")}, snapshot ${fetched}.</desc>
  <defs>
    <linearGradient id="hm-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#080E11"/><stop offset="1" stop-color="#0B171D"/>
    </linearGradient>
    <radialGradient id="hm-light" cx="88%" cy="0%" r="70%">
      <stop offset="0" stop-color="#00F5A0" stop-opacity=".2"/><stop offset="1" stop-color="#080E11" stop-opacity="0"/>
    </radialGradient>
    <filter id="hm-glow" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <style>
    .hm-serif { font-family: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif; }
    .hm-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    .hm-c { transform-box: fill-box; transform-origin: center; animation: hm-in .8s cubic-bezier(.34,1.56,.64,1) both; }
    .hm-fade { animation: hm-fade 1.2s ease both; }
    @keyframes hm-in { from { opacity: 0; transform: scale(.2); } to { opacity: 1; transform: none; } }
    @keyframes hm-fade { from { opacity: 0; } to { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) { .hm-c, .hm-fade { animation: none; } .hm-motion { display: none; } }
  </style>

  <rect width="${W}" height="${H}" rx="20" fill="url(#hm-bg)"/>
  <rect width="${W}" height="${H}" rx="20" fill="url(#hm-light)"/>
  <rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" rx="19.5" fill="none" stroke="#16333D" stroke-width="1"/>

  <g class="hm-fade">
    <text class="hm-mono" x="56" y="68" font-size="11" letter-spacing="2.6" fill="#00D9F6">COMMIT LOG · REAL GITHUB ACTIVITY</text>
    <text class="hm-serif" x="54" y="110" font-size="27" font-weight="300" fill="#F0FCF9">A year of building, <tspan font-style="italic" fill="#00F5A0">one square</tspan> at a time.</text>
    ${statsSvg}
  </g>

  <g class="hm-mono" font-size="10.5" fill="#8DA8B2">${monthSvg}</g>
  <g class="hm-mono" font-size="10" fill="#8DA8B2" text-anchor="end">
    <text x="${GRID_X - 12}" y="${GRID_Y + STEP + 11}">Mon</text>
    <text x="${GRID_X - 12}" y="${GRID_Y + 3 * STEP + 11}">Wed</text>
    <text x="${GRID_X - 12}" y="${GRID_Y + 5 * STEP + 11}">Fri</text>
  </g>

  <g>
    ${cellsSvg}
  </g>

  <g class="hm-motion">
    ${snakeSvg}
  </g>

  ${streakSvg}

  <g class="hm-fade">
    <text class="hm-mono" x="56" y="382" font-size="10.5" fill="#8DA8B2">Source: public GitHub contribution calendar for @${esc(data.login)} · snapshot ${fetched} · refreshed daily</text>
    <text class="hm-mono" x="${legendX}" y="382" font-size="10.5" fill="#8DA8B2">Less</text>
    ${legend}
    <text class="hm-mono" x="${legendX + 36 + 5 * 18 + 4}" y="382" font-size="10.5" fill="#8DA8B2">More</text>
  </g>
</svg>
`;

const out = path.resolve(OUTPUT);
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, svg, "utf8");
console.log(`Wrote ${OUTPUT}: ${days.length} days, ${total} contributions (snapshot ${fetched}).`);
