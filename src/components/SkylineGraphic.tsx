export function SkylineGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="55%" stopColor="#222222" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="fade-bottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c2c2c" />
          <stop offset="100%" stopColor="#161616" />
        </linearGradient>
      </defs>

      <rect width="1200" height="700" fill="url(#sky)" />

      {/* distant skyline */}
      <g fill="#2e2e2e" opacity="0.7">
        <rect x="40" y="380" width="60" height="220" />
        <rect x="120" y="340" width="40" height="260" />
        <rect x="190" y="400" width="70" height="200" />
        <rect x="980" y="360" width="55" height="240" />
        <rect x="1060" y="410" width="45" height="190" />
        <rect x="1120" y="330" width="60" height="270" />
      </g>

      {/* mid skyline */}
      <g fill="#3c3c3c" opacity="0.85">
        <rect x="260" y="300" width="80" height="300" />
        <rect x="360" y="250" width="50" height="350" />
        <rect x="430" y="330" width="65" height="270" />
        <rect x="820" y="280" width="70" height="320" />
        <rect x="900" y="240" width="55" height="360" />
      </g>

      {/* hero towers */}
      <g fill="#4a4a4a">
        <rect x="520" y="120" width="90" height="480" />
        <rect x="630" y="60" width="70" height="540" />
        <rect x="720" y="180" width="100" height="420" />
        {/* spire */}
        <rect x="660" y="20" width="10" height="40" />
      </g>

      {/* window lights */}
      <g fill="#b89968" opacity="0.35">
        {Array.from({ length: 36 }).map((_, i) => (
          <rect
            key={i}
            x={540 + (i % 6) * 14}
            y={160 + Math.floor(i / 6) * 60}
            width="6"
            height="10"
          />
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <rect
            key={`t-${i}`}
            x={645 + (i % 5) * 14}
            y={100 + Math.floor(i / 5) * 60}
            width="6"
            height="10"
          />
        ))}
      </g>

      {/* water reflection */}
      <rect x="0" y="600" width="1200" height="100" fill="url(#water)" />

      {/* bottom fade into ink background */}
      <rect width="1200" height="700" fill="url(#fade-bottom)" />
    </svg>
  );
}
