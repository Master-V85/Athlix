type LogoProps = {
  className?: string;
  showText?: boolean;
  size?: number;
};

/**
 * Athlix logo — a geometric "A" formed by an upward-sloping performance graph,
 * enclosed in a rounded badge. Represents ascending performance + athletic peak.
 */
export function Logo({ className = '', showText = true, size = 28 }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        className="shrink-0"
        aria-label="Athlix logo"
      >
        <defs>
          <linearGradient id="athlix-grad" x1="0" y1="40" x2="40" y2="0">
            <stop offset="0%" stopColor="#8fb812" />
            <stop offset="60%" stopColor="#c5fb45" />
            <stop offset="100%" stopColor="#d9ff80" />
          </linearGradient>
          <filter id="athlix-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Badge */}
        <rect width="40" height="40" rx="11" fill="#0a0c10" stroke="#1f242e" strokeWidth="1" />

        {/* Stylized "A" as ascending performance line */}
        <g filter="url(#athlix-glow)">
          {/* Left leg of A — rising line */}
          <path
            d="M10 30 L19 9"
            stroke="url(#athlix-grad)"
            strokeWidth="2.8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Right leg of A — descending then peaking */}
          <path
            d="M19 9 L28 30"
            stroke="url(#athlix-grad)"
            strokeWidth="2.8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Crossbar — the "performance plateau" */}
          <path
            d="M13.5 22 L24.5 22"
            stroke="url(#athlix-grad)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Ascending data point dot at the peak */}
          <circle cx="19" cy="9" r="2.2" fill="#d9ff80" />
          {/* Small ascending tick to the right of the peak — growth arrow */}
          <path
            d="M29 14 L32 11 L32 13.5 L34 13.5"
            stroke="#c5fb45"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />
        </g>
      </svg>
      {showText && (
        <span className="font-display text-lg font-bold tracking-tight text-white">Athlix</span>
      )}
    </div>
  );
}
