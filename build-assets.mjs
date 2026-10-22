import fs from "node:fs";
import path from "node:path";

const ASSETS_DIR = path.resolve("assets");
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

// -------------------------------------------------------------
// PALETTE: Cyber Emerald & Quantum Obsidian
// -------------------------------------------------------------
const FONTS = `
  .t-serif { font-family: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif; }
  .t-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
  .t-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
`;

function save(filename, svgContent) {
  const filepath = path.join(ASSETS_DIR, filename);
  fs.writeFileSync(filepath, svgContent.trim() + "\n", "utf8");
  console.log(`Generated: ${filename}`);
}

// =============================================================
// 1. HERO BANNER (tanmai-hero.svg)
// =============================================================
function generateHero() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 480" width="1200" height="480" role="img" aria-label="Tanmai Thakre — AI/ML Engineer, Reinforcement Learning and Full-Stack Developer">
  <defs>
    <linearGradient id="hero-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#070D10"/>
      <stop offset=".5" stop-color="#0A161B"/>
      <stop offset="1" stop-color="#0D1D23"/>
    </linearGradient>
    <radialGradient id="hero-glow-emerald" cx="80%" cy="30%" r="65%">
      <stop offset="0" stop-color="#00F5A0" stop-opacity=".18"/>
      <stop offset="60%" stop-color="#00A86B" stop-opacity=".04"/>
      <stop offset="100%" stop-color="#070D10" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="hero-glow-cyan" cx="20%" cy="85%" r="50%">
      <stop offset="0" stop-color="#00D9F6" stop-opacity=".12"/>
      <stop offset="100%" stop-color="#070D10" stop-opacity="0"/>
    </radialGradient>
    <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M32 0H0V32" fill="none" stroke="#00F5A0" stroke-opacity=".05"/>
      <circle cx="32" cy="0" r=".7" fill="#00D9F6" fill-opacity=".25"/>
    </pattern>
    <linearGradient id="hero-name-grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#00F5A0"/>
      <stop offset="50%" stop-color="#00D9F6"/>
      <stop offset="100%" stop-color="#5EEAD4"/>
    </linearGradient>
    <linearGradient id="hero-sheen" gradientUnits="userSpaceOnUse" x1="-300" y1="0" x2="0" y2="0">
      <stop offset="0" stop-color="#00F5A0" stop-opacity="0"/>
      <stop offset=".5" stop-color="#F0FCF9" stop-opacity=".9"/>
      <stop offset="1" stop-color="#00D9F6" stop-opacity="0"/>
      <animateTransform attributeName="gradientTransform" type="translate" values="0 0; 1600 0; 1600 0" keyTimes="0;.35;1" dur="7.5s" begin="1.8s" repeatCount="indefinite"/>
    </linearGradient>
    <linearGradient id="hero-rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#00F5A0"/>
      <stop offset=".6" stop-color="#00D9F6"/>
      <stop offset="1" stop-color="#00D9F6" stop-opacity="0"/>
    </linearGradient>
    <filter id="hero-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <style>
    ${FONTS}
    .hero-rise { animation: hero-rise 1s cubic-bezier(.16,1,.3,1) both; }
    .hero-fade { animation: hero-fade 1.2s ease both; }
    .d1 { animation-delay: .1s; } .d2 { animation-delay: .25s; }
    .d3 { animation-delay: .4s; } .d4 { animation-delay: .55s; }
    .d5 { animation-delay: .7s; } .d6 { animation-delay: .85s; }
    .hero-draw { stroke-dasharray: 700; stroke-dashoffset: 700; animation: hero-draw 2.2s cubic-bezier(.65,0,.35,1) .6s forwards; }
    @keyframes hero-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
    @keyframes hero-fade { from { opacity: 0; } to { opacity: 1; } }
    @keyframes hero-draw { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) {
      .hero-rise, .hero-fade { animation: none; opacity: 1; }
      .hero-draw { animation: none; stroke-dashoffset: 0; }
    }
  </style>

  <rect width="1200" height="480" rx="20" fill="url(#hero-bg)"/>
  <rect width="1200" height="480" rx="20" fill="url(#hero-grid)"/>
  <rect width="1200" height="480" rx="20" fill="url(#hero-glow-emerald)"/>
  <rect width="1200" height="480" rx="20" fill="url(#hero-glow-cyan)"/>
  <rect x=".5" y=".5" width="1199" height="479" rx="19.5" fill="none" stroke="#16333D" stroke-width="1"/>

  <!-- Left Content Column -->
  <!-- 1. Interactive Terminal Pill -->
  <g class="hero-fade d1" transform="translate(68 54)">
    <rect width="360" height="34" rx="17" fill="#0C1920" stroke="#00F5A0" stroke-opacity=".35" stroke-width="1"/>
    <circle cx="20" cy="17" r="4" fill="#00F5A0">
      <animate attributeName="opacity" values="1;.3;1" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text class="t-mono" x="36" y="21.5" font-size="12" fill="#8DA8B2">~/tanmai<tspan fill="#00F5A0"> $ </tspan><tspan fill="#F0FCF9">python agent.py --train-dqn</tspan></text>
    <rect x="330" y="10" width="7" height="14" fill="#00F5A0">
      <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.5;.5;1" dur="1.1s" repeatCount="indefinite"/>
    </rect>
  </g>

  <!-- 2. Eyebrow Category -->
  <g class="hero-rise d2">
    <line x1="68" y1="126" x2="100" y2="126" stroke="#00F5A0" stroke-width="1.5"/>
    <text class="t-mono" x="112" y="130" font-size="12" letter-spacing="3" fill="#00F5A0">AI/ML ENGINEER · DEEP REINFORCEMENT LEARNING · SYSTEMS</text>
  </g>

  <!-- 3. Name Display -->
  <text class="t-serif hero-rise d3" x="64" y="218" font-size="90" font-weight="300" letter-spacing="-2.5" fill="#F0FCF9">Thakre Tanmai</text>
  <text class="t-serif hero-rise d4" x="64" y="306" font-size="90" font-style="italic" font-weight="300" letter-spacing="-2.5" fill="url(#hero-name-grad)">Autonomous AI<tspan fill="#00F5A0">.</tspan></text>

  <!-- Sheen sweep across the name -->
  <g class="hero-fade d6" pointer-events="none">
    <text class="t-serif" x="64" y="218" font-size="90" font-weight="300" letter-spacing="-2.5" fill="url(#hero-sheen)">Thakre Tanmai</text>
    <text class="t-serif" x="64" y="306" font-size="90" font-style="italic" font-weight="300" letter-spacing="-2.5" fill="url(#hero-sheen)">Autonomous AI.</text>
  </g>

  <!-- Glowing Underline Accent -->
  <path class="hero-draw" d="M68 334 C 220 328, 420 340, 600 330" fill="none" stroke="url(#hero-rule)" stroke-width="2" stroke-linecap="round" filter="url(#hero-glow)"/>

  <!-- 4. Subtitle and Core Philosophy -->
  <text class="t-mono hero-rise d5" x="68" y="372" font-size="12.5" letter-spacing="2.2" fill="#F0FCF9">MULTI-AGENT ORCHESTRATION · PYTORCH RL · FULL-STACK WEB APIS</text>
  <text class="t-serif hero-rise d6" x="68" y="408" font-size="18.5" font-style="italic" fill="#8DA8B2">Engineering autonomous intelligence. Architecting resilient systems.</text>

  <!-- Right Graphic: Holographic Multi-Agent & Neural Orbit Diagram -->
  <g class="hero-fade d4">
    <g transform="translate(930 230)">
      <!-- Ambient back-core glow -->
      <circle cx="0" cy="0" r="160" fill="url(#hero-glow-emerald)" opacity=".8"/>

      <!-- Concentric Orbit Rings -->
      <circle cx="0" cy="0" r="170" fill="none" stroke="#16333D" stroke-width="1.2" stroke-dasharray="6 8"/>
      <circle cx="0" cy="0" r="125" fill="none" stroke="#1F4855" stroke-width="1" stroke-opacity=".7"/>
      <circle cx="0" cy="0" r="75" fill="none" stroke="#00F5A0" stroke-width="1" stroke-opacity=".3" stroke-dasharray="3 5"/>

      <!-- Outer Rotating Satellite Node Ring -->
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="50s" repeatCount="indefinite"/>
        <circle cx="170" cy="0" r="4.5" fill="#00F5A0" filter="url(#hero-glow)"/>
        <circle cx="-120" cy="-120" r="3" fill="#00D9F6"/>
        <circle cx="0" cy="-170" r="3.5" fill="#5EEAD4"/>
        <circle cx="-170" cy="0" r="3" fill="#00F5A0" opacity=".6"/>
        <circle cx="120" cy="120" r="3" fill="#00D9F6"/>
      </g>

      <!-- Reverse Rotating Inner Orbit -->
      <g>
        <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="35s" repeatCount="indefinite"/>
        <circle cx="125" cy="0" r="3" fill="#00D9F6"/>
        <circle cx="-88" cy="88" r="3.5" fill="#00F5A0" filter="url(#hero-glow)"/>
      </g>

      <!-- Central Neural Core Diamond -->
      <polygon points="0,-36 36,0 0,36 -36,0" fill="#0C1920" stroke="#00F5A0" stroke-width="1.5">
        <animate attributeName="stroke-opacity" values=".4;1;.4" dur="3s" repeatCount="indefinite"/>
      </polygon>
      <polygon points="0,-22 22,0 0,22 -22,0" fill="#0F282F" stroke="#00D9F6" stroke-width="1"/>
      <circle cx="0" cy="0" r="7" fill="#00F5A0" filter="url(#hero-glow)">
        <animate attributeName="r" values="6;8.5;6" dur="2.4s" repeatCount="indefinite"/>
      </circle>

      <!-- Domain Labels in Orbit -->
      <g class="t-mono" font-size="10.5" letter-spacing="1.5" fill="#8DA8B2">
        <g transform="translate(-130 -140)"><circle r="3" fill="#00F5A0"/><text x="10" y="4" fill="#F0FCF9">DQN / RL</text></g>
        <g transform="translate(130 -90)"><circle r="3" fill="#00D9F6"/><text x="10" y="4" fill="#F0FCF9">WATSONX</text></g>
        <g transform="translate(130 90)"><circle r="3" fill="#00F5A0"/><text x="10" y="4" fill="#F0FCF9">FASTAPI</text></g>
        <g transform="translate(-150 70)"><circle r="3" fill="#00D9F6"/><text x="-12" y="4" text-anchor="end" fill="#F0FCF9">AGENTS</text></g>
        <g transform="translate(0 150)"><circle r="3" fill="#5EEAD4"/><text x="0" y="16" text-anchor="middle" fill="#8DA8B2">PYTORCH</text></g>
        <g transform="translate(0 -150)"><circle r="3" fill="#5EEAD4"/><text x="0" y="-10" text-anchor="middle" fill="#8DA8B2">JAVA DSA</text></g>
      </g>

      <!-- Signal bezier path connecting headline to core -->
      <path d="M-330 104 C -220 100, -140 60, -75 0" fill="none" stroke="#00F5A0" stroke-opacity=".35" stroke-width="1.4"/>
      <circle cx="-330" cy="104" r="3.5" fill="#F0FCF9" filter="url(#hero-glow)">
        <animateMotion dur="4.5s" repeatCount="indefinite" begin="2s" path="M-330 104 C -220 100, -140 60, -75 0" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines=".45 0 .55 1"/>
      </circle>
    </g>
  </g>

  <!-- Bottom Metadata Strip -->
  <g class="hero-fade d6">
    <line x1="68" y1="438" x2="1132" y2="438" stroke="#16333D" stroke-width="1"/>
    <text class="t-mono" x="68" y="458" font-size="10.5" letter-spacing="2" fill="#8DA8B2">AHMEDABAD, INDIA · PYTHON · PYTORCH · JAVA · FASTAPI · NEXT.JS</text>
    <text class="t-mono" x="1132" y="458" text-anchor="end" font-size="10.5" letter-spacing="2" fill="#00F5A0">IBM GRANITE 3 · DEEP Q-NETWORKS · MULTI-AGENT SYSTEMS</text>
  </g>
</svg>`;
}

// =============================================================
// 2. SECTION TITLE SVGS (title-*.svg)
// =============================================================
function generateTitle(number, section, title, italicWord, rightTag, idPrefix) {
  // XML safe escape for ampersands
  const safeTitle = title.replace(/&(?![a-zA-Z0-9#]+;)/g, "&amp;");
  const safeSection = section.replace(/&(?![a-zA-Z0-9#]+;)/g, "&amp;");
  const safeRightTag = rightTag.replace(/&(?![a-zA-Z0-9#]+;)/g, "&amp;");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" width="1200" height="120" role="img" aria-label="${number} ${safeSection}: ${safeTitle} ${italicWord}">
  <defs>
    <linearGradient id="${idPrefix}-line" gradientUnits="userSpaceOnUse" x1="40" y1="0" x2="1160" y2="0">
      <stop offset="0" stop-color="#00F5A0"/><stop offset=".6" stop-color="#00D9F6"/><stop offset="1" stop-color="#00D9F6" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="${idPrefix}-sheen" gradientUnits="userSpaceOnUse" x1="-300" y1="0" x2="0" y2="0">
      <stop offset="0" stop-color="#00F5A0"/><stop offset=".5" stop-color="#F0FCF9"/><stop offset="1" stop-color="#00D9F6"/>
      <animateTransform attributeName="gradientTransform" type="translate" values="0 0;1500 0;1500 0" keyTimes="0;.4;1" dur="7s" begin="1.2s" repeatCount="indefinite"/>
    </linearGradient>
    <radialGradient id="${idPrefix}-pulse">
      <stop offset="0" stop-color="#F0FCF9"/>
      <stop offset=".5" stop-color="#00F5A0" stop-opacity=".6"/>
      <stop offset="1" stop-color="#00D9F6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <style>
    ${FONTS}
    .ti-in { animation: ti-in 1.1s cubic-bezier(.16,1,.3,1) both; }
    .ti-d2 { animation-delay: .2s; } .ti-d3 { animation-delay: .45s; }
    .ti-draw { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: ti-draw 1.8s cubic-bezier(.65,0,.35,1) .5s forwards; }
    @keyframes ti-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
    @keyframes ti-draw { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .ti-in { animation: none; } .ti-draw { animation: none; stroke-dashoffset: 0; } }
  </style>
  <g class="ti-in">
    <text class="t-mono" x="40" y="34" font-size="12" letter-spacing="3" fill="#00D9F6"><tspan fill="#00F5A0">${number}</tspan>   ${safeSection}</text>
  </g>
  <g class="ti-in ti-d2">
    <text class="t-serif" x="38" y="84" font-size="44" font-weight="300" letter-spacing="-1" fill="#F0FCF9">${safeTitle} <tspan font-style="italic" fill="url(#${idPrefix}-sheen)">${italicWord}</tspan></text>
  </g>
  <g class="ti-in ti-d3">
    <text class="t-mono" x="1160" y="34" text-anchor="end" font-size="10.5" letter-spacing="2.4" fill="#8DA8B2">${safeRightTag}</text>
  </g>
  <path class="ti-draw" d="M40 106 H1160" stroke="url(#${idPrefix}-line)" stroke-width="1.2"/>
  <circle cx="40" cy="106" r="6" fill="url(#${idPrefix}-pulse)" opacity="0">
    <animate attributeName="cx" values="40;1160" dur="6s" begin="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".45 0 .55 1"/>
    <animate attributeName="opacity" values="0;1;0" keyTimes="0;.15;1" dur="6s" begin="2s" repeatCount="indefinite"/>
  </circle>
</svg>`;
}

// =============================================================
// 3. ABOUT INTRO CARD (about-intro.svg)
// =============================================================
function generateAboutIntro() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 420" width="1200" height="420" role="img" aria-label="About Tanmai Thakre: AI/ML Engineer and Deep Reinforcement Learning Builder">
  <defs>
    <linearGradient id="ab-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#080E11"/>
      <stop offset="100%" stop-color="#0C181E"/>
    </linearGradient>
    <radialGradient id="ab-glow" cx="80%" cy="20%" r="70%">
      <stop offset="0" stop-color="#00F5A0" stop-opacity=".15"/>
      <stop offset="100%" stop-color="#080E11" stop-opacity="0"/>
    </radialGradient>
    <pattern id="ab-scan" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="4" height="1" fill="#00F5A0" opacity=".03"/>
    </pattern>
    <clipPath id="ab-c0"><rect class="ab-type" x="68" y="112" width="89" height="22" style="animation-delay:0.50s;animation-duration:0.4s;animation-timing-function:steps(6)"/></clipPath>
    <clipPath id="ab-c1"><rect class="ab-type" x="68" y="137" width="560" height="22" style="animation-delay:1.00s;animation-duration:0.5s;animation-timing-function:steps(1)"/></clipPath>
    <clipPath id="ab-c2"><rect class="ab-type" x="68" y="162" width="160" height="22" style="animation-delay:1.80s;animation-duration:0.5s;animation-timing-function:steps(15)"/></clipPath>
    <clipPath id="ab-c3"><rect class="ab-type" x="68" y="187" width="520" height="22" style="animation-delay:2.45s;animation-duration:0.5s;animation-timing-function:steps(1)"/></clipPath>
    <clipPath id="ab-c4"><rect class="ab-type" x="68" y="212" width="195" height="22" style="animation-delay:3.25s;animation-duration:0.5s;animation-timing-function:steps(18)"/></clipPath>
    <clipPath id="ab-c5"><rect class="ab-type" x="68" y="237" width="580" height="22" style="animation-delay:3.90s;animation-duration:0.5s;animation-timing-function:steps(1)"/></clipPath>
    <clipPath id="ab-c6"><rect class="ab-type" x="68" y="262" width="140" height="22" style="animation-delay:4.70s;animation-duration:0.4s;animation-timing-function:steps(12)"/></clipPath>
    <clipPath id="ab-c7"><rect class="ab-type" x="68" y="287" width="570" height="22" style="animation-delay:5.25s;animation-duration:0.5s;animation-timing-function:steps(1)"/></clipPath>
    <clipPath id="ab-c8"><rect class="ab-type" x="68" y="312" width="150" height="22" style="animation-delay:6.05s;animation-duration:0.5s;animation-timing-function:steps(14)"/></clipPath>
    <clipPath id="ab-c9"><rect class="ab-type" x="68" y="337" width="520" height="22" style="animation-delay:6.70s;animation-duration:0.5s;animation-timing-function:steps(1)"/></clipPath>
  </defs>
  <style>
    ${FONTS}
    .ab-type { transform-box: fill-box; transform-origin: left center; animation-name: ab-type; animation-fill-mode: both; }
    .ab-card { animation: ab-in 1s cubic-bezier(.16,1,.3,1) both; }
    .ab-fade { animation: ab-fade 1s ease both; }
    @keyframes ab-type { 0% { transform: scaleX(0); } 85%, 100% { transform: scaleX(1); } }
    @keyframes ab-in { from { opacity: 0; transform: translateX(24px); } to { opacity: 1; transform: none; } }
    @keyframes ab-fade { from { opacity: 0; } to { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) { .ab-type, .ab-card, .ab-fade { animation: none; } }
  </style>

  <rect width="1200" height="420" rx="20" fill="url(#ab-bg)"/>
  <rect width="1200" height="420" rx="20" fill="url(#ab-glow)"/>
  <rect x=".5" y=".5" width="1199" height="419" rx="19.5" fill="none" stroke="#16333D" stroke-width="1"/>

  <!-- Left: Cyber Terminal Window -->
  <g class="ab-fade">
    <rect x="40" y="40" width="760" height="340" rx="14" fill="#070D10" stroke="#1B3D48" stroke-width="1"/>
    <rect x="40" y="40" width="760" height="340" rx="14" fill="url(#ab-scan)"/>
    <path d="M40 54 a14 14 0 0 1 14 -14 H786 a14 14 0 0 1 14 14 V76 H40 Z" fill="#0C171C"/>
    <line x1="40" y1="76" x2="800" y2="76" stroke="#16333D" stroke-width="1"/>
    <circle cx="62" cy="58" r="5" fill="#EF4444"/><circle cx="80" cy="58" r="5" fill="#EAB308"/><circle cx="98" cy="58" r="5" fill="#00F5A0"/>
    <text class="t-mono" x="420" y="62" text-anchor="middle" font-size="11" letter-spacing="1.5" fill="#8DA8B2">tanmai@autonomous-workstation: ~</text>
  </g>

  <!-- Interactive Terminal Text Feed -->
  <g class="t-mono" font-size="13.5">
    <g clip-path="url(#ab-c0)"><text x="72" y="128" fill="#00F5A0">$</text><text x="94" y="128" fill="#F0FCF9">whoami</text></g>
    <g clip-path="url(#ab-c1)"><text x="72" y="153" fill="#00D9F6">→</text><text x="94" y="153" fill="#8DA8B2">Thakre Tanmai · AI/ML Engineer · Reinforcement Learning Builder</text></g>
    <g clip-path="url(#ab-c2)"><text x="72" y="178" fill="#00F5A0">$</text><text x="94" y="178" fill="#F0FCF9">cat location.txt</text></g>
    <g clip-path="url(#ab-c3)"><text x="72" y="203" fill="#00D9F6">→</text><text x="94" y="203" fill="#8DA8B2">Ahmedabad, Gujarat, India · Building for impact &amp; scale</text></g>
    <g clip-path="url(#ab-c4)"><text x="72" y="228" fill="#00F5A0">$</text><text x="94" y="228" fill="#F0FCF9">cat core_focus.txt</text></g>
    <g clip-path="url(#ab-c5)"><text x="72" y="253" fill="#00D9F6">→</text><text x="94" y="253" fill="#8DA8B2">Deep Q-Networks (PyTorch) · Multi-Agent Orchestration · FastAPI &amp; Next.js</text></g>
    <g clip-path="url(#ab-c6)"><text x="72" y="278" fill="#00F5A0">$</text><text x="94" y="278" fill="#F0FCF9">ls ./shipped</text></g>
    <g clip-path="url(#ab-c7)"><text x="72" y="303" fill="#00D9F6">→</text><text x="94" y="303" fill="#8DA8B2">kisansetu-ai  rl-dqn-flappybird  creditwise-ml  smartcart-clustering</text></g>
    <g clip-path="url(#ab-c8)"><text x="72" y="328" fill="#00F5A0">$</text><text x="94" y="328" fill="#F0FCF9">echo $ETHOS</text></g>
    <g clip-path="url(#ab-c9)"><text x="72" y="353" fill="#00D9F6">→</text><text x="94" y="353" fill="#8DA8B2">grounded intelligence · zero hallucination · deterministic outcomes</text></g>
  </g>
  <rect x="72" y="364" width="8" height="16" fill="#00F5A0" class="ab-fade" style="animation-delay:7.5s">
    <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.5;.5;1" dur="1.1s" repeatCount="indefinite"/>
  </rect>

  <!-- Right: 3 Metric/Insight Cards -->
  <g class="ab-card" style="animation-delay:1s"><g transform="translate(836 68)">
    <rect width="324" height="88" rx="14" fill="#0C181E" stroke="#1B3D48" stroke-width="1"/>
    <rect x="0" y="0" width="3.5" height="88" rx="1.5" fill="#00F5A0"/>
    <text class="t-mono" x="22" y="26" font-size="10" letter-spacing="2" fill="#00F5A0">PRIMARY RL &amp; ML</text>
    <text class="t-serif" x="22" y="58" font-size="28" font-weight="300" fill="#F0FCF9">Python &amp; PyTorch</text>
    <text class="t-sans" x="22" y="78" font-size="12" fill="#8DA8B2">Deep Q-Networks · Replay Buffers · Neural Nets</text>
  </g></g>

  <g class="ab-card" style="animation-delay:1.5s"><g transform="translate(836 172)">
    <rect width="324" height="88" rx="14" fill="#0C181E" stroke="#1B3D48" stroke-width="1"/>
    <rect x="0" y="0" width="3.5" height="88" rx="1.5" fill="#00D9F6"/>
    <text class="t-mono" x="22" y="26" font-size="10" letter-spacing="2" fill="#00D9F6">ALGORITHMIC RIGOR</text>
    <text class="t-serif" x="22" y="58" font-size="28" font-weight="300" fill="#F0FCF9">Java (DSA)</text>
    <text class="t-sans" x="22" y="78" font-size="12" fill="#8DA8B2">LeetCode problem solving · Linked Lists, DP &amp; Trees</text>
  </g></g>

  <g class="ab-card" style="animation-delay:2s"><g transform="translate(836 276)">
    <rect width="324" height="88" rx="14" fill="#0C181E" stroke="#1B3D48" stroke-width="1"/>
    <rect x="0" y="0" width="3.5" height="88" rx="1.5" fill="#5EEAD4"/>
    <text class="t-mono" x="22" y="26" font-size="10" letter-spacing="2" fill="#5EEAD4">SPECIALIZATION</text>
    <text class="t-serif" x="22" y="58" font-size="28" font-weight="300" fill="#F0FCF9">Multi-Agent AI</text>
    <text class="t-sans" x="22" y="78" font-size="12" fill="#8DA8B2">IBM watsonx &amp; Granite · Deterministic Routing</text>
  </g></g>
</svg>`;
}

// =============================================================
// 4. HIGHLIGHTS & ACHIEVEMENTS (achievement-motif.svg)
// =============================================================
function generateAchievements() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 430" width="1200" height="430" role="img" aria-label="Key Highlights and Achievements of Tanmai Thakre">
  <defs>
    <linearGradient id="ach-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#080E11"/><stop offset="1" stop-color="#0B171D"/>
    </linearGradient>
    <radialGradient id="ach-glow-a" cx="85%" cy="0%" r="90%">
      <stop offset="0" stop-color="#00F5A0" stop-opacity=".25"/>
      <stop offset="100%" stop-color="#080E11" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="ach-glow-b" cx="90%" cy="0%" r="90%">
      <stop offset="0" stop-color="#00D9F6" stop-opacity=".2"/>
      <stop offset="100%" stop-color="#080E11" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ach-sheen" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#00F5A0" stop-opacity="0"/>
      <stop offset=".5" stop-color="#F0FCF9" stop-opacity=".12"/>
      <stop offset="1" stop-color="#00D9F6" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="ach-clip-a"><rect x="0" y="0" width="700" height="250" rx="16"/></clipPath>
    <clipPath id="ach-clip-b"><rect x="0" y="0" width="476" height="250" rx="16"/></clipPath>
    <linearGradient id="ach-trace" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F0FCF9"/><stop offset=".45" stop-color="#00F5A0"/><stop offset="1" stop-color="#00D9F6" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <style>
    ${FONTS}
    .ach-in { animation: ach-in 1.2s cubic-bezier(.16,1,.3,1) both; }
    .a1 { animation-delay: .1s; } .a2 { animation-delay: .35s; } .a3 { animation-delay: .6s; }
    .ach-draw { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: ach-draw 2.6s cubic-bezier(.65,0,.35,1) .8s forwards; }
    @keyframes ach-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
    @keyframes ach-draw { to { stroke-dashoffset: 0; } }
    .ach-trace-a { stroke-dasharray: 340 1900; stroke-dashoffset: 2240; animation: ach-trace-a 6s linear infinite; }
    .ach-trace-b { stroke-dasharray: 260 1452; stroke-dashoffset: 1712; animation: ach-trace-b 6s linear -3s infinite; }
    @keyframes ach-trace-a { to { stroke-dashoffset: 0; } }
    @keyframes ach-trace-b { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) {
      .ach-in { animation: none; }
      .ach-draw { animation: none; stroke-dashoffset: 0; }
      .ach-trace-a, .ach-trace-b { display: none; }
    }
  </style>

  <rect width="1200" height="430" rx="20" fill="url(#ach-bg)"/>
  <rect x=".5" y=".5" width="1199" height="429" rx="19.5" fill="none" stroke="#16333D" stroke-width="1"/>

  <!-- Card 1: KisanSetu AI Enterprise Submission -->
  <g class="ach-in a1"><g transform="translate(24 24)">
    <g clip-path="url(#ach-clip-a)">
      <rect width="700" height="250" fill="#0C181E"/>
      <rect width="700" height="250" fill="url(#ach-glow-a)"/>
      <text class="t-serif" x="684" y="128" text-anchor="end" font-size="110" font-weight="300" letter-spacing="-4" fill="#00F5A0" fill-opacity=".07">GRANITE 3</text>
      <rect x="-300" y="0" width="260" height="250" fill="url(#ach-sheen)" transform="skewX(-18)">
        <animate attributeName="x" values="-300;900;900" keyTimes="0;.35;1" dur="9s" begin="2s" repeatCount="indefinite"/>
      </rect>
    </g>
    <rect x=".5" y=".5" width="699" height="249" rx="15.5" fill="none" stroke="#1B3D48" stroke-width="1"/>
    <rect class="ach-trace-a" x=".5" y=".5" width="699" height="249" rx="15.5" fill="none" stroke="url(#ach-trace)" stroke-width="1.8" stroke-linecap="round"/>
    <text class="t-mono" x="36" y="152" font-size="12" letter-spacing="2.6" fill="#00F5A0">IBM WATSONX · MULTI-AGENT ARCHITECTURE</text>
    <text class="t-serif" x="34" y="202" font-size="44" font-weight="300" letter-spacing="-1" fill="#F0FCF9">KisanSetu AI Platform</text>
    <text class="t-sans" x="36" y="228" font-size="14" fill="#8DA8B2">5 autonomous agents · Zero hallucination guarantee · Trilingual market intelligence</text>
  </g></g>

  <!-- Card 2: Autonomous Deep Reinforcement Learning Agent -->
  <g class="ach-in a2"><g transform="translate(700 24)">
    <g transform="translate(24 0)">
      <g clip-path="url(#ach-clip-b)">
        <rect width="476" height="250" fill="#0C181E"/>
        <rect width="476" height="250" fill="url(#ach-glow-b)"/>
        <text class="t-serif" x="490" y="132" text-anchor="end" font-size="150" font-style="italic" font-weight="300" letter-spacing="-6" fill="none" stroke="#00D9F6" stroke-opacity=".12">DQN</text>
      </g>
      <rect x=".5" y=".5" width="475" height="249" rx="15.5" fill="none" stroke="#1B3D48" stroke-width="1"/>
      <rect class="ach-trace-b" x=".5" y=".5" width="475" height="249" rx="15.5" fill="none" stroke="url(#ach-trace)" stroke-width="1.8" stroke-linecap="round"/>
      <text class="t-mono" x="32" y="152" font-size="12" letter-spacing="2.6" fill="#00D9F6">REINFORCEMENT LEARNING · PYTORCH</text>
      <text class="t-serif" x="30" y="202" font-size="44" font-weight="300" letter-spacing="-1" fill="#F0FCF9">Autonomous RL Agent</text>
      <text class="t-sans" x="32" y="228" font-size="14" fill="#8DA8B2">Deep Q-Network with Experience Replay &amp; Bellman convergence</text>
    </g>
  </g></g>

  <!-- Animated separator line -->
  <path class="ach-draw" d="M24 300 H1176" stroke="#16333D" stroke-width="1.2"/>

  <!-- Five Metric Score Columns -->
  <g class="ach-in a3 t-sans" font-size="13" fill="#8DA8B2">
    <g transform="translate(48 300)">
      <circle cx="0" cy="0" r="3.5" fill="#00F5A0"/>
      <text class="t-mono" y="34" font-size="11" letter-spacing="2" fill="#00F5A0">LEETCODE</text>
      <text class="t-serif" y="76" font-size="38" font-weight="300" fill="#F0FCF9">Solved</text>
      <text y="100">Java DSA Practice</text>
    </g>
    <g transform="translate(280 300)">
      <circle cx="0" cy="0" r="3.5" fill="#00D9F6"/>
      <text class="t-mono" y="34" font-size="11" letter-spacing="2" fill="#00D9F6">MULTI-AGENT</text>
      <text class="t-serif" y="76" font-size="38" font-weight="300" fill="#F0FCF9">5 Agents</text>
      <text y="100">Deterministic routing</text>
    </g>
    <g transform="translate(510 300)">
      <circle cx="0" cy="0" r="3.5" fill="#00F5A0"/>
      <text class="t-mono" y="34" font-size="11" letter-spacing="2" fill="#00F5A0">RL ENGINE</text>
      <text class="t-serif" y="76" font-size="38" font-weight="300" fill="#F0FCF9">PyTorch</text>
      <text y="100">DQN &amp; Experience Replay</text>
    </g>
    <g transform="translate(740 300)">
      <circle cx="0" cy="0" r="3.5" fill="#00D9F6"/>
      <text class="t-mono" y="34" font-size="11" letter-spacing="2" fill="#00D9F6">FULL-STACK</text>
      <text class="t-serif" y="76" font-size="38" font-weight="300" fill="#F0FCF9">FastAPI</text>
      <text y="100">Next.js 15 &amp; Docker</text>
    </g>
    <g transform="translate(970 300)">
      <circle cx="0" cy="0" r="3.5" fill="#00F5A0"/>
      <text class="t-mono" y="34" font-size="11" letter-spacing="2" fill="#00F5A0">LOCATION</text>
      <text class="t-serif" y="76" font-size="38" font-weight="300" fill="#F0FCF9">Ahmedabad</text>
      <text y="100">Gujarat, India 📍</text>
    </g>
  </g>
</svg>`;
}

// =============================================================
// 5. PROJECT CARDS (project-*.svg)
// =============================================================
function generateProjectKisanSetu() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 370" width="1200" height="370" role="img" aria-label="KisanSetu AI: Multi-Agent Agricultural Intelligence Platform">
  <defs>
    <linearGradient id="p1-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#080E11"/><stop offset="1" stop-color="#0C1920"/>
    </linearGradient>
    <radialGradient id="p1-glow" cx="80%" cy="30%" r="55%">
      <stop offset="0" stop-color="#00F5A0" stop-opacity=".2"/><stop offset="1" stop-color="#080E11" stop-opacity="0"/>
    </radialGradient>
    <pattern id="p1-grid" width="28" height="28" patternUnits="userSpaceOnUse">
      <path d="M28 0H0V28" fill="none" stroke="#00F5A0" stroke-opacity=".06"/>
    </pattern>
    <clipPath id="p1-clip"><rect width="1200" height="370" rx="18"/></clipPath>
    <linearGradient id="p1-trace" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F0FCF9"/><stop offset=".45" stop-color="#00F5A0"/><stop offset="1" stop-color="#00D9F6" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <style>
    ${FONTS}
    .p1-in { animation: p1-fade 1s ease both; }
    .p1-d1 { animation-delay: .15s; } .p1-d2 { animation-delay: .4s; }
    .p1-chip { animation: p1-chip .7s cubic-bezier(.34,1.56,.64,1) both; }
    @keyframes p1-chip { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    .p1-draw { stroke-dasharray: 600; stroke-dashoffset: 600; animation: p1-draw 2s cubic-bezier(.65,0,.35,1) .5s forwards; }
    @keyframes p1-fade { from { opacity: 0; } to { opacity: 1; } }
    @keyframes p1-draw { to { stroke-dashoffset: 0; } }
    .p1-trace { stroke-dasharray: 564 3136; stroke-dashoffset: 3700; animation: p1-trace 7s linear infinite; }
    @keyframes p1-trace { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .p1-in, .p1-chip { animation: none; } .p1-draw { animation: none; stroke-dashoffset: 0; } .p1-trace { display: none; } }
  </style>
  <g clip-path="url(#p1-clip)">
    <rect width="1200" height="370" fill="url(#p1-bg)"/>
    <rect x="700" width="500" height="370" fill="url(#p1-grid)"/>
    <rect width="1200" height="370" fill="url(#p1-glow)"/>

    <g class="p1-in p1-d1">
      <text class="t-mono" x="56" y="62" font-size="12" letter-spacing="2.6" fill="#00D9F6">01 · MULTI-AGENT ARCHITECTURE · IBM GRANITE · FASTAPI · 2026</text>
      <text class="t-serif" x="54" y="126" font-size="52" font-weight="300" letter-spacing="-1.5" fill="#F0FCF9">KisanSetu AI</text>
      <text class="t-sans" x="56" y="166" font-size="17" fill="#8DA8B2">AI-powered market linkage &amp; intelligence platform for agricultural producers.</text>
      <text class="t-mono" x="56" y="200" font-size="12.5" fill="#00F5A0"><tspan fill="#00D9F6">BUILT ›</tspan> 5 specialized deterministic agents, zero hallucination, trilingual (EN/GU/HI), Next.js 15 &amp; FastAPI</text>
      <line class="p1-draw" x1="56" y1="226" x2="680" y2="226" stroke="#16333D" stroke-width="1.2"/>

      <g transform="translate(56 266)">
        <text class="t-serif" font-size="34" font-weight="300" fill="#F0FCF9">5 Agents</text>
        <text class="t-sans" y="24" font-size="12.5" fill="#8DA8B2">Parallel deterministic routing</text>
      </g>
      <g transform="translate(261 266)">
        <text class="t-serif" font-size="34" font-weight="300" fill="#F0FCF9">3 Languages</text>
        <text class="t-sans" y="24" font-size="12.5" fill="#8DA8B2">English, Gujarati &amp; Hindi</text>
      </g>
      <g transform="translate(476 266)">
        <text class="t-serif" font-size="34" font-weight="300" fill="#00F5A0">0%</text>
        <text class="t-sans" y="24" font-size="12.5" fill="#8DA8B2">Hallucination guarantee</text>
      </g>

      <!-- Chips -->
      <g class="p1-chip" style="animation-delay:1.0s"><rect x="56" y="314" width="76" height="26" rx="13" fill="#0C181E" stroke="#1B3D48"/><text class="t-mono" x="94" y="331" text-anchor="middle" font-size="11.5" fill="#00F5A0">FastAPI</text></g>
      <g class="p1-chip" style="animation-delay:1.1s"><rect x="140" y="314" width="108" height="26" rx="13" fill="#0C181E" stroke="#1B3D48"/><text class="t-mono" x="194" y="331" text-anchor="middle" font-size="11.5" fill="#00D9F6">IBM Granite</text></g>
      <g class="p1-chip" style="animation-delay:1.2s"><rect x="256" y="314" width="84" height="26" rx="13" fill="#0C181E" stroke="#1B3D48"/><text class="t-mono" x="298" y="331" text-anchor="middle" font-size="11.5" fill="#00F5A0">Next.js 15</text></g>
      <g class="p1-chip" style="animation-delay:1.3s"><rect x="348" y="314" width="72" height="26" rx="13" fill="#0C181E" stroke="#1B3D48"/><text class="t-mono" x="384" y="331" text-anchor="middle" font-size="11.5" fill="#5EEAD4">Docker</text></g>
      <g class="p1-chip" style="animation-delay:1.4s"><rect x="428" y="314" width="98" height="26" rx="13" fill="#0C181E" stroke="#1B3D48"/><text class="t-mono" x="477" y="331" text-anchor="middle" font-size="11.5" fill="#00D9F6">PostgreSQL</text></g>
    </g>

    <!-- Right Graphic: Multi-Agent Orchestrator Diagram (properly nested) -->
    <g class="p1-in p1-d2">
      <g transform="translate(930 185)">
        <!-- Central IBM Granite Node -->
        <circle cx="0" cy="0" r="42" fill="#0C1920" stroke="#00F5A0" stroke-width="1.8"/>
        <circle cx="0" cy="0" r="32" fill="#0E232B" stroke="#00D9F6" stroke-width="1"/>
        <text class="t-mono" x="0" y="-3" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#00F5A0">GRANITE</text>
        <text class="t-mono" x="0" y="12" text-anchor="middle" font-size="9" fill="#8DA8B2">watsonx.ai</text>

        <!-- 5 Peripheral Autonomous Agents -->
        <!-- Agent 1: Price Discovery -->
        <g transform="translate(-140 -60)">
          <line x1="0" y1="0" x2="105" y2="45" stroke="#1B3D48" stroke-width="1.2"/>
          <circle cx="0" cy="0" r="28" fill="#0C181E" stroke="#00F5A0" stroke-width="1.2"/>
          <text class="t-mono" x="0" y="4" text-anchor="middle" font-size="9" fill="#F0FCF9">PRICING</text>
        </g>
        <!-- Agent 2: Buyer Match -->
        <g transform="translate(-130 70)">
          <line x1="0" y1="0" x2="95" y2="-50" stroke="#1B3D48" stroke-width="1.2"/>
          <circle cx="0" cy="0" r="28" fill="#0C181E" stroke="#00D9F6" stroke-width="1.2"/>
          <text class="t-mono" x="0" y="4" text-anchor="middle" font-size="9" fill="#F0FCF9">BUYERS</text>
        </g>
        <!-- Agent 3: Quality Assay -->
        <g transform="translate(0 -120)">
          <line x1="0" y1="0" x2="0" y2="78" stroke="#1B3D48" stroke-width="1.2"/>
          <circle cx="0" cy="0" r="28" fill="#0C181E" stroke="#5EEAD4" stroke-width="1.2"/>
          <text class="t-mono" x="0" y="4" text-anchor="middle" font-size="9" fill="#F0FCF9">QUALITY</text>
        </g>
        <!-- Agent 4: Storage Intel -->
        <g transform="translate(130 -60)">
          <line x1="0" y1="0" x2="-95" y2="45" stroke="#1B3D48" stroke-width="1.2"/>
          <circle cx="0" cy="0" r="28" fill="#0C181E" stroke="#00F5A0" stroke-width="1.2"/>
          <text class="t-mono" x="0" y="4" text-anchor="middle" font-size="9" fill="#F0FCF9">STORAGE</text>
        </g>
        <!-- Agent 5: Income Analytics -->
        <g transform="translate(130 70)">
          <line x1="0" y1="0" x2="-95" y2="-50" stroke="#1B3D48" stroke-width="1.2"/>
          <circle cx="0" cy="0" r="28" fill="#0C181E" stroke="#00D9F6" stroke-width="1.2"/>
          <text class="t-mono" x="0" y="4" text-anchor="middle" font-size="9" fill="#F0FCF9">INCOME</text>
        </g>

        <!-- Traveling Data Pulse into Central Core -->
        <circle cx="-140" cy="-60" r="3.5" fill="#00F5A0">
          <animate attributeName="cx" values="-140;0" dur="2.8s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="-60;0" dur="2.8s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0" dur="2.8s" repeatCount="indefinite"/>
        </circle>
        <circle cx="130" cy="70" r="3.5" fill="#00D9F6">
          <animate attributeName="cx" values="130;0" dur="3.4s" begin="1s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="70;0" dur="3.4s" begin="1s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0" dur="3.4s" begin="1s" repeatCount="indefinite"/>
        </circle>
      </g>
    </g>

    <rect x=".5" y=".5" width="1199" height="369" rx="17.5" fill="none" stroke="#16333D" stroke-width="1"/>
    <rect class="p1-trace" x=".5" y=".5" width="1199" height="369" rx="17.5" fill="none" stroke="url(#p1-trace)" stroke-width="1.6" stroke-linecap="round"/>
  </g>
</svg>`;
}

function generateProjectDQN() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 370" width="1200" height="370" role="img" aria-label="RL DQN Flappy Bird: Deep Q-Network Reinforcement Learning">
  <defs>
    <linearGradient id="p2-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#080E11"/><stop offset="1" stop-color="#0C1920"/>
    </linearGradient>
    <radialGradient id="p2-glow" cx="80%" cy="30%" r="55%">
      <stop offset="0" stop-color="#00D9F6" stop-opacity=".2"/><stop offset="1" stop-color="#080E11" stop-opacity="0"/>
    </radialGradient>
    <pattern id="p2-grid" width="28" height="28" patternUnits="userSpaceOnUse">
      <path d="M28 0H0V28" fill="none" stroke="#00D9F6" stroke-opacity=".06"/>
    </pattern>
    <clipPath id="p2-clip"><rect width="1200" height="370" rx="18"/></clipPath>
    <linearGradient id="p2-trace" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F0FCF9"/><stop offset=".45" stop-color="#00D9F6"/><stop offset="1" stop-color="#00F5A0" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <style>
    ${FONTS}
    .p2-in { animation: p2-fade 1s ease both; }
    .p2-d1 { animation-delay: .15s; } .p2-d2 { animation-delay: .4s; }
    .p2-chip { animation: p2-chip .7s cubic-bezier(.34,1.56,.64,1) both; }
    @keyframes p2-chip { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    .p2-draw { stroke-dasharray: 600; stroke-dashoffset: 600; animation: p2-draw 2s cubic-bezier(.65,0,.35,1) .5s forwards; }
    @keyframes p2-fade { from { opacity: 0; } to { opacity: 1; } }
    @keyframes p2-draw { to { stroke-dashoffset: 0; } }
    .p2-trace { stroke-dasharray: 564 3136; stroke-dashoffset: 3700; animation: p2-trace 7s linear infinite; }
    @keyframes p2-trace { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .p2-in, .p2-chip { animation: none; } .p2-draw { animation: none; stroke-dashoffset: 0; } .p2-trace { display: none; } }
  </style>
  <g clip-path="url(#p2-clip)">
    <rect width="1200" height="370" fill="url(#p2-bg)"/>
    <rect x="700" width="500" height="370" fill="url(#p2-grid)"/>
    <rect width="1200" height="370" fill="url(#p2-glow)"/>

    <g class="p2-in p2-d1">
      <text class="t-mono" x="56" y="62" font-size="12" letter-spacing="2.6" fill="#00F5A0">02 · REINFORCEMENT LEARNING · PYTORCH · NEURAL NETWORKS · 2026</text>
      <text class="t-serif" x="54" y="126" font-size="52" font-weight="300" letter-spacing="-1.5" fill="#F0FCF9">RL DQN Flappy Bird</text>
      <text class="t-sans" x="56" y="166" font-size="17" fill="#8DA8B2">Autonomous deep reinforcement learning agent learning high-stakes obstacle navigation.</text>
      <text class="t-mono" x="56" y="200" font-size="12.5" fill="#00D9F6"><tspan fill="#00F5A0">BUILT ›</tspan> Deep Q-Network with Experience Replay Buffer, policy &amp; target networks, Bellman optimization</text>
      <line class="p2-draw" x1="56" y1="226" x2="680" y2="226" stroke="#16333D" stroke-width="1.2"/>

      <g transform="translate(56 266)">
        <text class="t-serif" font-size="34" font-weight="300" fill="#F0FCF9">PyTorch</text>
        <text class="t-sans" y="24" font-size="12.5" fill="#8DA8B2">Custom neural architecture</text>
      </g>
      <g transform="translate(261 266)">
        <text class="t-serif" font-size="34" font-weight="300" fill="#F0FCF9">Replay Buffer</text>
        <text class="t-sans" y="24" font-size="12.5" fill="#8DA8B2">Stabilized off-policy learning</text>
      </g>
      <g transform="translate(476 266)">
        <text class="t-serif" font-size="34" font-weight="300" fill="#00D9F6">Self-Taught</text>
        <text class="t-sans" y="24" font-size="12.5" fill="#8DA8B2">Zero human heuristics</text>
      </g>

      <!-- Chips -->
      <g class="p2-chip" style="animation-delay:1.0s"><rect x="56" y="314" width="76" height="26" rx="13" fill="#0C181E" stroke="#1B3D48"/><text class="t-mono" x="94" y="331" text-anchor="middle" font-size="11.5" fill="#00D9F6">PyTorch</text></g>
      <g class="p2-chip" style="animation-delay:1.1s"><rect x="140" y="314" width="80" height="26" rx="13" fill="#0C181E" stroke="#1B3D48"/><text class="t-mono" x="180" y="331" text-anchor="middle" font-size="11.5" fill="#00F5A0">Deep RL</text></g>
      <g class="p2-chip" style="animation-delay:1.2s"><rect x="228" y="314" width="72" height="26" rx="13" fill="#0C181E" stroke="#1B3D48"/><text class="t-mono" x="264" y="331" text-anchor="middle" font-size="11.5" fill="#5EEAD4">Python</text></g>
      <g class="p2-chip" style="animation-delay:1.3s"><rect x="308" y="314" width="138" height="26" rx="13" fill="#0C181E" stroke="#1B3D48"/><text class="t-mono" x="377" y="331" text-anchor="middle" font-size="11.5" fill="#00D9F6">Experience Replay</text></g>
      <g class="p2-chip" style="animation-delay:1.4s"><rect x="454" y="314" width="76" height="26" rx="13" fill="#0C181E" stroke="#1B3D48"/><text class="t-mono" x="492" y="331" text-anchor="middle" font-size="11.5" fill="#00F5A0">NumPy</text></g>
    </g>

    <!-- Right Graphic: Deep Q-Network & State Action Flow (properly nested) -->
    <g class="p2-in p2-d2">
      <g transform="translate(760 60)">
        <!-- Environment Simulator Frame -->
        <rect x="0" y="0" width="380" height="250" rx="12" fill="#070D10" stroke="#1B3D48" stroke-width="1"/>

        <!-- Obstacle Pillars (Flappy Pipes) -->
        <rect x="100" y="0" width="36" height="70" rx="4" fill="#00A86B" fill-opacity=".3" stroke="#00F5A0" stroke-width="1.2"/>
        <rect x="100" y="160" width="36" height="90" rx="4" fill="#00A86B" fill-opacity=".3" stroke="#00F5A0" stroke-width="1.2"/>
        <rect x="260" y="0" width="36" height="110" rx="4" fill="#00A86B" fill-opacity=".3" stroke="#00F5A0" stroke-width="1.2"/>
        <rect x="260" y="200" width="36" height="50" rx="4" fill="#00A86B" fill-opacity=".3" stroke="#00F5A0" stroke-width="1.2"/>

        <!-- Agent trajectory spline -->
        <path d="M30 140 C 70 90, 150 140, 200 110 S 260 160, 340 130" fill="none" stroke="#00D9F6" stroke-width="1.8" stroke-dasharray="4 4"/>

        <!-- Agent Diamond Glyph moving along trajectory -->
        <g>
          <polygon points="0,-8 10,0 0,8 -6,0" fill="#00F5A0" stroke="#F0FCF9" stroke-width="1">
            <animateTransform attributeName="transform" type="translate" values="30 140; 118 115; 200 110; 278 155; 340 130; 30 140" dur="5s" repeatCount="indefinite"/>
          </polygon>
        </g>

        <!-- Q-Value HUD overlay -->
        <g transform="translate(18 20)">
          <rect width="130" height="38" rx="6" fill="#0C181E" fill-opacity=".85" stroke="#16333D"/>
          <text class="t-mono" x="10" y="15" font-size="9.5" fill="#00F5A0">Q(s, FLAP) = 0.89</text>
          <text class="t-mono" x="10" y="29" font-size="9.5" fill="#8DA8B2">Q(s, NOOP) = 0.12</text>
        </g>

        <!-- Replay Buffer Indicator -->
        <g transform="translate(240 20)">
          <rect width="124" height="38" rx="6" fill="#0C181E" fill-opacity=".85" stroke="#16333D"/>
          <text class="t-mono" x="10" y="15" font-size="9" fill="#00D9F6">REPLAY BUFFER</text>
          <text class="t-mono" x="10" y="29" font-size="9.5" fill="#F0FCF9">100k transitions</text>
        </g>
      </g>
    </g>

    <rect x=".5" y=".5" width="1199" height="369" rx="17.5" fill="none" stroke="#16333D" stroke-width="1"/>
    <rect class="p2-trace" x=".5" y=".5" width="1199" height="369" rx="17.5" fill="none" stroke="url(#p2-trace)" stroke-width="1.6" stroke-linecap="round"/>
  </g>
</svg>`;
}

function generateProjectMLSuite() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 370" width="1200" height="370" role="img" aria-label="Machine Learning and Deep Learning Suite by Tanmai Thakre">
  <defs>
    <linearGradient id="p3-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#080E11"/><stop offset="1" stop-color="#0C1920"/>
    </linearGradient>
    <radialGradient id="p3-glow" cx="80%" cy="30%" r="55%">
      <stop offset="0" stop-color="#5EEAD4" stop-opacity=".18"/><stop offset="1" stop-color="#080E11" stop-opacity="0"/>
    </radialGradient>
    <pattern id="p3-grid" width="28" height="28" patternUnits="userSpaceOnUse">
      <path d="M28 0H0V28" fill="none" stroke="#5EEAD4" stroke-opacity=".06"/>
    </pattern>
    <clipPath id="p3-clip"><rect width="1200" height="370" rx="18"/></clipPath>
    <linearGradient id="p3-trace" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F0FCF9"/><stop offset=".45" stop-color="#5EEAD4"/><stop offset="1" stop-color="#00D9F6" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <style>
    ${FONTS}
    .p3-in { animation: p3-fade 1s ease both; }
    .p3-d1 { animation-delay: .15s; } .p3-d2 { animation-delay: .4s; }
    .p3-chip { animation: p3-chip .7s cubic-bezier(.34,1.56,.64,1) both; }
    @keyframes p3-chip { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    .p3-draw { stroke-dasharray: 600; stroke-dashoffset: 600; animation: p3-draw 2s cubic-bezier(.65,0,.35,1) .5s forwards; }
    @keyframes p3-fade { from { opacity: 0; } to { opacity: 1; } }
    @keyframes p3-draw { to { stroke-dashoffset: 0; } }
    .p3-trace { stroke-dasharray: 564 3136; stroke-dashoffset: 3700; animation: p3-trace 7s linear infinite; }
    @keyframes p3-trace { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .p3-in, .p3-chip { animation: none; } .p3-draw { animation: none; stroke-dashoffset: 0; } .p3-trace { display: none; } }
  </style>
  <g clip-path="url(#p3-clip)">
    <rect width="1200" height="370" fill="url(#p3-bg)"/>
    <rect x="700" width="500" height="370" fill="url(#p3-grid)"/>
    <rect width="1200" height="370" fill="url(#p3-glow)"/>

    <g class="p3-in p3-d1">
      <text class="t-mono" x="56" y="62" font-size="12" letter-spacing="2.6" fill="#5EEAD4">03 · APPLIED MACHINE LEARNING &amp; DEEP LEARNING ARCHITECTURES</text>
      <text class="t-serif" x="54" y="126" font-size="52" font-weight="300" letter-spacing="-1.5" fill="#F0FCF9">Intelligent Systems Suite</text>
      <text class="t-sans" x="56" y="166" font-size="17" fill="#8DA8B2">End-to-end predictive systems: Creditwise loan assessment, SmartCart clustering, CNNs &amp; RNNs.</text>
      <text class="t-mono" x="56" y="200" font-size="12.5" fill="#5EEAD4"><tspan fill="#00F5A0">BUILT ›</tspan> Credit risk classifier, K-Means/PCA segmentation, CIFAR-10 CNN &amp; Sentiment Analysis RNN</text>
      <line class="p3-draw" x1="56" y1="226" x2="680" y2="226" stroke="#16333D" stroke-width="1.2"/>

      <g transform="translate(56 266)">
        <text class="t-serif" font-size="34" font-weight="300" fill="#F0FCF9">Creditwise</text>
        <text class="t-sans" y="24" font-size="12.5" fill="#8DA8B2">Loan approval prediction</text>
      </g>
      <g transform="translate(261 266)">
        <text class="t-serif" font-size="34" font-weight="300" fill="#F0FCF9">SmartCart</text>
        <text class="t-sans" y="24" font-size="12.5" fill="#8DA8B2">Customer clustering &amp; PCA</text>
      </g>
      <g transform="translate(476 266)">
        <text class="t-serif" font-size="34" font-weight="300" fill="#00F5A0">CNN &amp; RNN</text>
        <text class="t-sans" y="24" font-size="12.5" fill="#8DA8B2">Vision &amp; sequence modeling</text>
      </g>

      <!-- Chips -->
      <g class="p3-chip" style="animation-delay:1.0s"><rect x="56" y="314" width="102" height="26" rx="13" fill="#0C181E" stroke="#1B3D48"/><text class="t-mono" x="107" y="331" text-anchor="middle" font-size="11.5" fill="#00F5A0">Scikit-Learn</text></g>
      <g class="p3-chip" style="animation-delay:1.1s"><rect x="166" y="314" width="94" height="26" rx="13" fill="#0C181E" stroke="#1B3D48"/><text class="t-mono" x="213" y="331" text-anchor="middle" font-size="11.5" fill="#00D9F6">TensorFlow</text></g>
      <g class="p3-chip" style="animation-delay:1.2s"><rect x="268" y="314" width="62" height="26" rx="13" fill="#0C181E" stroke="#1B3D48"/><text class="t-mono" x="299" y="331" text-anchor="middle" font-size="11.5" fill="#5EEAD4">Keras</text></g>
      <g class="p3-chip" style="animation-delay:1.3s"><rect x="338" y="314" width="76" height="26" rx="13" fill="#0C181E" stroke="#1B3D48"/><text class="t-mono" x="376" y="331" text-anchor="middle" font-size="11.5" fill="#00F5A0">Pandas</text></g>
      <g class="p3-chip" style="animation-delay:1.4s"><rect x="422" y="314" width="128" height="26" rx="13" fill="#0C181E" stroke="#1B3D48"/><text class="t-mono" x="486" y="331" text-anchor="middle" font-size="11.5" fill="#00D9F6">Jupyter Labs</text></g>
    </g>

    <!-- Right Graphic: Clustering & Neural Layers Visual (properly nested) -->
    <g class="p3-in p3-d2">
      <g transform="translate(800 60)">
        <!-- Clustering Visual Canvas -->
        <rect x="0" y="0" width="340" height="250" rx="12" fill="#070D10" stroke="#1B3D48" stroke-width="1"/>

        <!-- Scatter cluster 1 (Emerald - Low Risk / Segment A) -->
        <g fill="#00F5A0" opacity=".8">
          <circle cx="60" cy="80" r="4"/><circle cx="75" cy="65" r="3.5"/><circle cx="85" cy="90" r="4.5"/>
          <circle cx="50" cy="100" r="3"/><circle cx="100" cy="75" r="4"/><circle cx="70" cy="115" r="3.5"/>
        </g>
        <circle cx="75" cy="85" r="26" fill="none" stroke="#00F5A0" stroke-width="1" stroke-dasharray="3 3"/>

        <!-- Scatter cluster 2 (Cyan - High Approval / Segment B) -->
        <g fill="#00D9F6" opacity=".8">
          <circle cx="230" cy="70" r="4"/><circle cx="250" cy="85" r="3.5"/><circle cx="220" cy="100" r="4.5"/>
          <circle cx="270" cy="65" r="3"/><circle cx="240" cy="115" r="4"/><circle cx="260" cy="105" r="3.5"/>
        </g>
        <circle cx="245" cy="90" r="28" fill="none" stroke="#00D9F6" stroke-width="1" stroke-dasharray="3 3"/>

        <!-- Neural Layer Nodes below -->
        <g transform="translate(40 180)">
          <line x1="20" y1="20" x2="130" y2="10" stroke="#1B3D48" stroke-width="1"/>
          <line x1="20" y1="20" x2="130" y2="35" stroke="#1B3D48" stroke-width="1"/>
          <line x1="130" y1="10" x2="240" y2="20" stroke="#1B3D48" stroke-width="1"/>
          <line x1="130" y1="35" x2="240" y2="20" stroke="#1B3D48" stroke-width="1"/>

          <!-- Input Layer -->
          <circle cx="20" cy="10" r="7" fill="#0C181E" stroke="#00F5A0" stroke-width="1.2"/>
          <circle cx="20" cy="30" r="7" fill="#0C181E" stroke="#00F5A0" stroke-width="1.2"/>
          <!-- Hidden Layer -->
          <circle cx="130" cy="10" r="8" fill="#0E232B" stroke="#00D9F6" stroke-width="1.2"/>
          <circle cx="130" cy="35" r="8" fill="#0E232B" stroke="#00D9F6" stroke-width="1.2"/>
          <!-- Output Layer -->
          <circle cx="240" cy="22" r="9" fill="#0C181E" stroke="#5EEAD4" stroke-width="1.5"/>
        </g>

        <text class="t-mono" x="170" y="240" text-anchor="middle" font-size="9" fill="#8DA8B2">CLASSIFICATION &amp; PCA EMBEDDINGS</text>
      </g>
    </g>

    <rect x=".5" y=".5" width="1199" height="369" rx="17.5" fill="none" stroke="#16333D" stroke-width="1"/>
    <rect class="p3-trace" x=".5" y=".5" width="1199" height="369" rx="17.5" fill="none" stroke="url(#p3-trace)" stroke-width="1.6" stroke-linecap="round"/>
  </g>
</svg>`;
}

// =============================================================
// 6. TECH CONSTELLATION (tech-constellation.svg)
// =============================================================
function generateTechConstellation() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500" width="1200" height="500" role="img" aria-label="Tech Stack Constellation of Tanmai Thakre">
  <defs>
    <linearGradient id="tc-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#080E11"/><stop offset="1" stop-color="#0B171D"/>
    </linearGradient>
    <radialGradient id="tc-glow" cx="50%" cy="50%" r="60%">
      <stop offset="0" stop-color="#00F5A0" stop-opacity=".15"/><stop offset="1" stop-color="#080E11" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="tc-pulse">
      <stop offset="0" stop-color="#F0FCF9"/><stop offset=".5" stop-color="#00F5A0" stop-opacity=".7"/><stop offset="1" stop-color="#00D9F6" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="tc-trace" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F0FCF9"/><stop offset=".45" stop-color="#00F5A0"/><stop offset="1" stop-color="#00D9F6" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <style>
    ${FONTS}
    .tc-panel { animation: tc-in 1.1s cubic-bezier(.16,1,.3,1) both; }
    .tc-p1 { animation-delay: .05s; } .tc-p2 { animation-delay: .2s; } .tc-p3 { animation-delay: .35s; }
    .tc-p4 { animation-delay: .5s; } .tc-p5 { animation-delay: .65s; } .tc-p6 { animation-delay: .8s; }
    .tc-web { stroke-dasharray: 1800; stroke-dashoffset: 1800; animation: tc-draw 3s cubic-bezier(.65,0,.35,1) 1s forwards; }
    @keyframes tc-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
    @keyframes tc-draw { to { stroke-dashoffset: 0; } }
    .tc-trace { stroke-dasharray: 201 1120; stroke-dashoffset: 1321; animation: tc-trace 7s linear infinite; }
    @keyframes tc-trace { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .tc-panel { animation: none; } .tc-web { animation: none; stroke-dashoffset: 0; } .tc-trace { display: none; } }
  </style>

  <rect width="1200" height="500" rx="20" fill="url(#tc-bg)"/>
  <rect width="1200" height="500" rx="20" fill="url(#tc-glow)"/>
  <rect x=".5" y=".5" width="1199" height="499" rx="19.5" fill="none" stroke="#16333D" stroke-width="1"/>

  <!-- Constellation Gutter Circuits -->
  <path class="tc-web" d="M24 250 H1176 M406 24 V476 M794 24 V476" fill="none" stroke="#16333D" stroke-width="1.2"/>
  <circle cx="0" cy="250" r="7" fill="url(#tc-pulse)" opacity="0">
    <animate attributeName="cx" values="24;1176" dur="9s" begin="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".45 0 .55 1"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.9;1" dur="9s" begin="3s" repeatCount="indefinite"/>
  </circle>
  <g fill="#070D10" stroke="#00F5A0">
    <rect x="400" y="244" width="12" height="12" transform="rotate(45 406 250)" stroke-width="1"/>
    <rect x="788" y="244" width="12" height="12" transform="rotate(45 794 250)" stroke-width="1"/>
  </g>

  <!-- Row 1: Languages, AI/ML/RL, Frontend -->
  <!-- Card 1: Languages -->
  <g class="tc-panel tc-p1"><g transform="translate(32 32)">
    <rect width="360" height="200" rx="14" fill="#0C181E" fill-opacity=".9" stroke="#1B3D48" stroke-width="1"/>
    <rect class="tc-trace" style="animation-delay:0.00s" width="360" height="200" rx="14" fill="none" stroke="url(#tc-trace)" stroke-width="1.4" stroke-linecap="round"/>
    <text class="t-mono" x="24" y="38" font-size="11" letter-spacing="2.4" fill="#00F5A0">01  LANGUAGES</text>
    <text class="t-serif" x="24" y="96" font-size="38" font-weight="300" fill="#F0FCF9">Python <tspan font-size="12" class="t-mono" fill="#00F5A0" dy="-16">ML/RL</tspan></text>
    <text class="t-serif" x="24" y="144" font-size="34" font-weight="300" fill="#F0FCF9">Java <tspan font-size="12" class="t-mono" fill="#00D9F6" dy="-14">DSA</tspan></text>
    <text class="t-serif" x="24" y="180" font-size="22" font-weight="300" fill="#8DA8B2">C  ·  JavaScript  ·  R</text>
  </g></g>

  <!-- Card 2: AI · ML · RL -->
  <g class="tc-panel tc-p2"><g transform="translate(420 32)">
    <rect width="360" height="200" rx="14" fill="#0C181E" fill-opacity=".9" stroke="#1B3D48" stroke-width="1"/>
    <rect class="tc-trace" style="animation-delay:-1.15s" width="360" height="200" rx="14" fill="none" stroke="url(#tc-trace)" stroke-width="1.4" stroke-linecap="round"/>
    <text class="t-mono" x="24" y="38" font-size="11" letter-spacing="2.4" fill="#00D9F6">02  AI · ML · RL</text>
    <text class="t-serif" x="24" y="90" font-size="29" font-weight="300" fill="#F0FCF9">Deep Q-Networks (DQN)</text>
    <text class="t-serif" x="24" y="130" font-size="24" font-weight="300" fill="#F0FCF9">PyTorch  ·  TensorFlow</text>
    <text class="t-serif" x="24" y="166" font-size="22" font-weight="300" fill="#8DA8B2">Scikit-Learn  ·  Keras</text>
    <text class="t-mono" x="24" y="186" font-size="10" letter-spacing="1.4" fill="#00F5A0">IBM WATSONX · GRANITE 3</text>
  </g></g>

  <!-- Card 3: Frontend -->
  <g class="tc-panel tc-p3"><g transform="translate(808 32)">
    <rect width="360" height="200" rx="14" fill="#0C181E" fill-opacity=".9" stroke="#1B3D48" stroke-width="1"/>
    <rect class="tc-trace" style="animation-delay:-2.30s" width="360" height="200" rx="14" fill="none" stroke="url(#tc-trace)" stroke-width="1.4" stroke-linecap="round"/>
    <text class="t-mono" x="24" y="38" font-size="11" letter-spacing="2.4" fill="#5EEAD4">03  FRONTEND</text>
    <text class="t-serif" x="24" y="96" font-size="40" font-weight="300" fill="#F0FCF9">Next.js 15</text>
    <text class="t-serif" x="24" y="140" font-size="26" font-weight="300" fill="#F0FCF9">React.js</text>
    <text class="t-serif" x="24" y="176" font-size="22" font-weight="300" fill="#8DA8B2">TailwindCSS  ·  Bootstrap  ·  HTML5</text>
  </g></g>

  <!-- Row 2: Backend, Data/Infra, CS Core -->
  <!-- Card 4: Backend & APIs -->
  <g class="tc-panel tc-p4"><g transform="translate(32 268)">
    <rect width="360" height="200" rx="14" fill="#0C181E" fill-opacity=".9" stroke="#1B3D48" stroke-width="1"/>
    <rect class="tc-trace" style="animation-delay:-3.45s" width="360" height="200" rx="14" fill="none" stroke="url(#tc-trace)" stroke-width="1.4" stroke-linecap="round"/>
    <text class="t-mono" x="24" y="38" font-size="11" letter-spacing="2.4" fill="#00F5A0">04  BACKEND &amp; APIS</text>
    <text class="t-serif" x="24" y="90" font-size="32" font-weight="300" fill="#F0FCF9">FastAPI  ·  Python</text>
    <text class="t-serif" x="24" y="132" font-size="24" font-weight="300" fill="#F0FCF9">Node.js  ·  Express.js</text>
    <text class="t-serif" x="24" y="170" font-size="22" font-weight="300" fill="#8DA8B2">Flask  ·  Streamlit  ·  REST APIs</text>
  </g></g>

  <!-- Card 5: Data & Infrastructure -->
  <g class="tc-panel tc-p5"><g transform="translate(420 268)">
    <rect width="360" height="200" rx="14" fill="#0C181E" fill-opacity=".9" stroke="#1B3D48" stroke-width="1"/>
    <rect class="tc-trace" style="animation-delay:-4.60s" width="360" height="200" rx="14" fill="none" stroke="url(#tc-trace)" stroke-width="1.4" stroke-linecap="round"/>
    <text class="t-mono" x="24" y="38" font-size="11" letter-spacing="2.4" fill="#00D9F6">05  DATA &amp; INFRASTRUCTURE</text>
    <text class="t-serif" x="24" y="90" font-size="28" font-weight="300" fill="#F0FCF9">PostgreSQL  ·  MongoDB</text>
    <text class="t-serif" x="24" y="130" font-size="24" font-weight="300" fill="#F0FCF9">Docker  ·  Compose  ·  MySQL</text>
    <text class="t-serif" x="24" y="166" font-size="22" font-weight="300" fill="#8DA8B2">Pandas  ·  NumPy  ·  MLflow</text>
    <text class="t-mono" x="24" y="186" font-size="10" letter-spacing="1.4" fill="#8DA8B2">IBM CLOUD CODE ENGINE</text>
  </g></g>

  <!-- Card 6: CS Core & Algorithms -->
  <g class="tc-panel tc-p6"><g transform="translate(808 268)">
    <rect width="360" height="200" rx="14" fill="#0C181E" fill-opacity=".9" stroke="#1B3D48" stroke-width="1"/>
    <rect class="tc-trace" style="animation-delay:-5.75s" width="360" height="200" rx="14" fill="none" stroke="url(#tc-trace)" stroke-width="1.4" stroke-linecap="round"/>
    <text class="t-mono" x="24" y="38" font-size="11" letter-spacing="2.4" fill="#5EEAD4">06  CS CORE &amp; ALGORITHMS</text>
    <text class="t-serif" x="24" y="90" font-size="29" font-weight="300" fill="#F0FCF9">Data Structures &amp; Algos</text>
    <text class="t-serif" x="24" y="130" font-size="22" font-weight="300" fill="#F0FCF9">OOP · System Design · OS</text>
    <text class="t-serif" x="24" y="166" font-size="22" font-weight="300" fill="#8DA8B2">Git · GitHub · Linux Terminal</text>
  </g></g>
</svg>`;
}

// =============================================================
// 7. COMPETENCIES & CERTIFICATIONS (certifications.svg)
// =============================================================
function generateCertifications() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 260" width="1200" height="260" role="img" aria-label="Core Competencies and Specializations of Tanmai Thakre">
  <defs>
    <linearGradient id="cert-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#080E11"/><stop offset="1" stop-color="#0B171D"/>
    </linearGradient>
    <radialGradient id="cert-glow" cx="50%" cy="50%" r="60%">
      <stop offset="0" stop-color="#00F5A0" stop-opacity=".12"/><stop offset="1" stop-color="#080E11" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <style>
    ${FONTS}
    .cert-in { animation: cert-fade 1.1s cubic-bezier(.16,1,.3,1) both; }
    .c1 { animation-delay: .05s; } .c2 { animation-delay: .2s; } .c3 { animation-delay: .35s; } .c4 { animation-delay: .5s; }
    @keyframes cert-fade { from { opacity: 0; } to { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) { .cert-in { animation: none; } }
  </style>

  <rect width="1200" height="260" rx="20" fill="url(#cert-bg)"/>
  <rect width="1200" height="260" rx="20" fill="url(#cert-glow)"/>
  <rect x=".5" y=".5" width="1199" height="259" rx="19.5" fill="none" stroke="#16333D" stroke-width="1"/>

  <!-- 4 Pillars (properly nested transforms) -->
  <!-- Pillar 1 -->
  <g class="cert-in c1">
    <g transform="translate(32 32)">
      <rect width="265" height="196" rx="14" fill="#0C181E" stroke="#1B3D48" stroke-width="1"/>
      <circle cx="30" cy="36" r="14" fill="#0E232B" stroke="#00F5A0" stroke-width="1.2"/>
      <text class="t-mono" x="30" y="40" text-anchor="middle" font-size="11" fill="#00F5A0">01</text>
      <text class="t-mono" x="30" y="80" font-size="10.5" letter-spacing="1.5" fill="#00F5A0">ENTERPRISE AI</text>
      <text class="t-serif" x="30" y="112" font-size="20" font-weight="300" fill="#F0FCF9">IBM watsonx &amp; Granite</text>
      <text class="t-sans" x="30" y="142" font-size="12" fill="#8DA8B2">Multi-agent deterministic LLM orchestration and zero hallucination pipelines.</text>
    </g>
  </g>

  <!-- Pillar 2 -->
  <g class="cert-in c2">
    <g transform="translate(321 32)">
      <rect width="265" height="196" rx="14" fill="#0C181E" stroke="#1B3D48" stroke-width="1"/>
      <circle cx="30" cy="36" r="14" fill="#0E232B" stroke="#00D9F6" stroke-width="1.2"/>
      <text class="t-mono" x="30" y="40" text-anchor="middle" font-size="11" fill="#00D9F6">02</text>
      <text class="t-mono" x="30" y="80" font-size="10.5" letter-spacing="1.5" fill="#00D9F6">REINFORCEMENT</text>
      <text class="t-serif" x="30" y="112" font-size="20" font-weight="300" fill="#F0FCF9">PyTorch Deep Q-Nets</text>
      <text class="t-sans" x="30" y="142" font-size="12" fill="#8DA8B2">Experience replay memory, epsilon exploration, and Bellman error convergence.</text>
    </g>
  </g>

  <!-- Pillar 3 -->
  <g class="cert-in c3">
    <g transform="translate(610 32)">
      <rect width="265" height="196" rx="14" fill="#0C181E" stroke="#1B3D48" stroke-width="1"/>
      <circle cx="30" cy="36" r="14" fill="#0E232B" stroke="#5EEAD4" stroke-width="1.2"/>
      <text class="t-mono" x="30" y="40" text-anchor="middle" font-size="11" fill="#5EEAD4">03</text>
      <text class="t-mono" x="30" y="80" font-size="10.5" letter-spacing="1.5" fill="#5EEAD4">FULL-STACK SYSTEMS</text>
      <text class="t-serif" x="30" y="112" font-size="20" font-weight="300" fill="#F0FCF9">FastAPI &amp; Next.js 15</text>
      <text class="t-sans" x="30" y="142" font-size="12" fill="#8DA8B2">Containerized microservices with Docker Compose &amp; high-throughput APIs.</text>
    </g>
  </g>

  <!-- Pillar 4 -->
  <g class="cert-in c4">
    <g transform="translate(900 32)">
      <rect width="265" height="196" rx="14" fill="#0C181E" stroke="#1B3D48" stroke-width="1"/>
      <circle cx="30" cy="36" r="14" fill="#0E232B" stroke="#00F5A0" stroke-width="1.2"/>
      <text class="t-mono" x="30" y="40" text-anchor="middle" font-size="11" fill="#00F5A0">04</text>
      <text class="t-mono" x="30" y="80" font-size="10.5" letter-spacing="1.5" fill="#00F5A0">ALGORITHMIC RIGOR</text>
      <text class="t-serif" x="30" y="112" font-size="20" font-weight="300" fill="#F0FCF9">Java Problem Solving</text>
      <text class="t-sans" x="30" y="142" font-size="12" fill="#8DA8B2">LeetCode problem solving in Java across complex Data Structures &amp; Algorithms.</text>
    </g>
  </g>
</svg>`;
}

// =============================================================
// 8. FOOTER SIGNATURE (footer-signature.svg)
// =============================================================
function generateFooterSignature() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 230" width="1200" height="230" role="img" aria-label="Tanmai Thakre — Engineering autonomous intelligence. Architecting resilient systems.">
  <defs>
    <linearGradient id="sig-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#080E11"/><stop offset="1" stop-color="#0B171D"/>
    </linearGradient>
    <radialGradient id="sig-glow" cx="50%" cy="100%" r="70%">
      <stop offset="0" stop-color="#00F5A0" stop-opacity=".2"/><stop offset="1" stop-color="#080E11" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sig-line" gradientUnits="userSpaceOnUse" x1="100" y1="0" x2="1100" y2="0">
      <stop offset="0" stop-color="#00F5A0" stop-opacity="0"/>
      <stop offset=".5" stop-color="#00D9F6"/>
      <stop offset="1" stop-color="#00F5A0" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <style>
    ${FONTS}
    .sig-serif { font-family: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif; }
    .sig-name {
      stroke: #00F5A0; stroke-width: 1.2; fill: #F0FCF9; fill-opacity: 0;
      stroke-dasharray: 900; stroke-dashoffset: 900;
      animation: sig-write 3.6s cubic-bezier(.65,0,.35,1) .3s forwards;
    }
    .sig-rule { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: sig-draw 2.4s cubic-bezier(.65,0,.35,1) 1.6s forwards; }
    .sig-in { animation: sig-in 1.4s ease 2.6s both; }
    @keyframes sig-write { 70% { stroke-dashoffset: 0; fill-opacity: 0; } 100% { stroke-dashoffset: 0; fill-opacity: 1; } }
    @keyframes sig-draw { to { stroke-dashoffset: 0; } }
    @keyframes sig-in { from { opacity: 0; } to { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) {
      .sig-name { animation: none; stroke-dashoffset: 0; fill-opacity: 1; }
      .sig-rule { animation: none; stroke-dashoffset: 0; }
      .sig-in { animation: none; }
      .sig-sparks { display: none; }
    }
  </style>

  <rect width="1200" height="230" rx="20" fill="url(#sig-bg)"/>
  <rect width="1200" height="230" rx="20" fill="url(#sig-glow)"/>

  <!-- Rising Cyber Emerald Embers / Sparks -->
  <g class="sig-sparks" fill="#00F5A0" opacity=".85">
    <circle cx="451" cy="230" r="1.1"><animate attributeName="cy" values="232;100" dur="7s" begin="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="7s" begin="2s" repeatCount="indefinite"/></circle>
    <circle cx="216" cy="230" r="1.6"><animate attributeName="cy" values="232;40" dur="5s" begin="0.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="5s" begin="0.3s" repeatCount="indefinite"/></circle>
    <circle cx="716" cy="230" r="1.4"><animate attributeName="cy" values="232;60" dur="7s" begin="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="7s" begin="3s" repeatCount="indefinite"/></circle>
    <circle cx="167" cy="230" r="1.3"><animate attributeName="cy" values="232;95" dur="6s" begin="0.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="6s" begin="0.8s" repeatCount="indefinite"/></circle>
    <circle cx="915" cy="230" r="1.5"><animate attributeName="cy" values="232;70" dur="5.2s" begin="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="5.2s" begin="3s" repeatCount="indefinite"/></circle>
    <circle cx="374" cy="230" r="1.2"><animate attributeName="cy" values="232;110" dur="6.5s" begin="4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="6.5s" begin="4s" repeatCount="indefinite"/></circle>
    <circle cx="743" cy="230" r="1.5"><animate attributeName="cy" values="232;80" dur="7s" begin="0.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="7s" begin="0.5s" repeatCount="indefinite"/></circle>
    <circle cx="275" cy="230" r="2.0"><animate attributeName="cy" values="232;45" dur="7.2s" begin="2.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="7.2s" begin="2.2s" repeatCount="indefinite"/></circle>
  </g>

  <!-- Handwriting-style Signature Text -->
  <text class="sig-serif sig-name" x="600" y="104" text-anchor="middle" font-size="76" font-style="italic" font-weight="300" letter-spacing="-1">Tanmai Thakre</text>

  <!-- Divider Line with Pulsing Center Spark -->
  <path class="sig-rule" d="M100 134 H1100" stroke="url(#sig-line)" stroke-width="1.2"/>
  <circle cx="600" cy="134" r="3" fill="#F0FCF9" class="sig-in">
    <animate attributeName="r" values="3;5.5;3" dur="3s" repeatCount="indefinite"/>
  </circle>

  <!-- Tagline and Philosophy -->
  <g class="sig-in">
    <text class="sig-serif" x="600" y="176" text-anchor="middle" font-size="20" font-style="italic" fill="#F0FCF9">Engineering autonomous intelligence. Architecting resilient systems.</text>
    <text class="t-mono" x="600" y="206" text-anchor="middle" font-size="11" letter-spacing="3" fill="#8DA8B2">EXPLORE · INNOVATE · OPTIMIZE</text>
  </g>
</svg>`;
}

// =============================================================
// MAIN BUILD SEQUENCE
// =============================================================
function main() {
  console.log("Generating refined Cyber Emerald assets for Tanmai Thakre...");

  // Hero
  save("tanmai-hero.svg", generateHero());

  // Titles
  save("title-about.svg", generateTitle("01", "ABOUT", "Hello, I'm", "Tanmai.", "WHO I AM", "ta"));
  save("title-recognition.svg", generateTitle("02", "HIGHLIGHTS", "Proof, on the", "record.", "KEY METRICS", "tr"));
  save("title-work.svg", generateTitle("03", "SELECTED WORK", "Systems, not", "assignments.", "FEATURED PROJECTS", "tw"));
  save("title-toolkit.svg", generateTitle("04", "TOOLKIT", "The tools I", "reach for.", "CORE STACK", "tk"));
  save("title-commits.svg", generateTitle("05", "ACTIVITY LOG", "A journey of", "building.", "CONTINUOUS LEARNING", "tc"));
  save("title-certifications.svg", generateTitle("06", "COMPETENCIES", "Specializations &amp;", "domains.", "TECHNICAL FOCUS", "tce"));
  save("title-connect.svg", generateTitle("07", "CONNECT", "Let's build something", "extraordinary.", "OPEN FOR OPPORTUNITIES", "tcn"));

  // Detail & Project Cards
  save("about-intro.svg", generateAboutIntro());
  save("achievement-motif.svg", generateAchievements());
  save("project-kisansetu.svg", generateProjectKisanSetu());
  save("project-dqn-flappybird.svg", generateProjectDQN());
  save("project-ml-suite.svg", generateProjectMLSuite());
  save("tech-constellation.svg", generateTechConstellation());
  save("certifications.svg", generateCertifications());
  save("footer-signature.svg", generateFooterSignature());

  console.log("All 16 SVG assets regenerated successfully!");
}

main();
