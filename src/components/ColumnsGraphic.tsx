export function ColumnsGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="col-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1f1f1f" />
        </linearGradient>
        <linearGradient id="col-shade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5a5a5a" />
          <stop offset="50%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#2a2a2a" />
        </linearGradient>
      </defs>

      <rect width="800" height="600" fill="url(#col-bg)" />

      {/* ceiling line */}
      <rect x="0" y="80" width="800" height="14" fill="#4a4a4a" />

      {/* columns */}
      {[60, 220, 380, 540, 700].map((x) => (
        <g key={x}>
          <rect x={x - 10} y="60" width="120" height="34" fill="#4f4f4f" />
          <rect x={x} y="94" width="100" height="420" fill="url(#col-shade)" />
          <rect x={x - 14} y="500" width="128" height="26" fill="#4a4a4a" />
        </g>
      ))}

      {/* floor */}
      <rect x="0" y="526" width="800" height="74" fill="#181818" />
    </svg>
  );
}
