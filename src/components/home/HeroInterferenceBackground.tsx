export function HeroInterferenceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="hero-focal" cx="58%" cy="46%" r="42%">
            <stop offset="0%" stopColor="#ABB69F" stopOpacity="0.55" />
            <stop offset="35%" stopColor="#1C3F40" stopOpacity="0.12" />
            <stop offset="72%" stopColor="#E3C9B8" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#F7F4EF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ribbon-a-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D8DFD0" stopOpacity="0.35" />
            <stop offset="35%" stopColor="#ABB69F" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#ABB69F" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ribbon-a-edge" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#ABB69F" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="ribbon-b-fill" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F0E0D2" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#E3C9B8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E3C9B8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ribbon-b-edge" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#E3C9B8" stopOpacity="0.2" />
          </linearGradient>
          <filter id="hero-glow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="22" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hero-lift" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#ABB69F" floodOpacity="0.08" />
          </filter>
        </defs>

        <rect width="1440" height="900" fill="url(#hero-focal)" />

        <g filter="url(#hero-glow)" opacity="0.9">
          <path
            d="M -80 560
               C 120 470, 280 610, 480 520
               C 680 430, 860 500, 1040 440
               C 1220 380, 1360 470, 1540 430
               C 1380 520, 1180 560, 980 500
               C 760 435, 560 545, 340 490
               C 160 445, 40 610, -80 560 Z"
            fill="url(#ribbon-a-fill)"
          />
          <path
            d="M -80 560
               C 120 470, 280 610, 480 520
               C 680 430, 860 500, 1040 440
               C 1220 380, 1360 470, 1540 430"
            stroke="url(#ribbon-a-edge)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.85"
          />
        </g>

        <g filter="url(#hero-lift)" style={{ mixBlendMode: "multiply" }} opacity="0.88">
          <path
            d="M -40 350
               C 220 460, 420 300, 640 390
               C 860 480, 1040 340, 1260 420
               C 1420 475, 1520 360, 1560 390
               C 1380 520, 1140 560, 920 470
               C 700 380, 500 520, 280 430
               C 120 365, 20 430, -40 350 Z"
            fill="url(#ribbon-b-fill)"
          />
          <path
            d="M -40 350
               C 220 460, 420 300, 640 390
               C 860 480, 1040 340, 1260 420
               C 1420 475, 1520 360, 1560 390"
            stroke="url(#ribbon-b-edge)"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>
      </svg>

      {/* Glass legibility — frosted wash over text side.
          NB: ends in transparent off-white (not `transparent`) so Safari does not
          interpolate through grey/black on the right edge. */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7f4ef_0%,#f7f4ef_22%,rgba(247,244,239,0.92)_38%,rgba(247,244,239,0.55)_52%,rgba(247,244,239,0.18)_68%,rgba(247,244,239,0)_88%)]" />

      {/* Bottom fade — transparent off-white -> off-white (NOT `transparent`, which
          Safari reads as transparent black and renders a grey band). */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_bottom,rgba(247,244,239,0)_0%,#f7f4ef_100%)]" />
    </div>
  );
}
