import { useEffect, useId, useRef, useState } from 'react';

type SparklineProps = {
  data: number[];
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
  animate?: boolean;
};

/** Smooth-curve SVG sparkline with gradient fill and draw-on animation. */
export function Sparkline({
  data,
  width = 120,
  height = 40,
  stroke = '#c5fb45',
  strokeWidth = 2,
  className = '',
  animate = true,
}: SparklineProps) {
  const rawId = useId();
  const gradId = `spark-grad-${rawId}`;
  const pathRef = useRef<SVGPathElement>(null);
  const [ref, inView] = useInViewFallback();

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const stepX = width / (data.length - 1);
  const points = data.map((d, i) => {
    const x = i * stepX;
    const y = height - ((d - min) / range) * (height - 6) - 3;
    return [x, y] as const;
  });

  const pathD = smoothPath(points);
  const areaD = `${pathD} L${width},${height} L0,${height} Z`;

  useEffect(() => {
    if (!animate || !pathRef.current || !inView) return;
    const len = pathRef.current.getTotalLength();
    pathRef.current.style.strokeDasharray = `${len}`;
    pathRef.current.style.strokeDashoffset = `${len}`;
    pathRef.current.getBoundingClientRect();
    pathRef.current.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)';
    pathRef.current.style.strokeDashoffset = '0';
  }, [animate, inView]);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      ref={ref as any}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.3" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaD} fill={`url(#${gradId})`} opacity={inView ? 1 : 0} style={{ transition: 'opacity 0.8s ease 0.3s' }} />
      <path
        ref={pathRef}
        d={pathD}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: `drop-shadow(0 0 4px ${stroke}55)` }}
      />
      {points.length > 0 && (
        <circle
          cx={points[points.length - 1][0]}
          cy={points[points.length - 1][1]}
          r="3"
          fill={stroke}
          opacity={inView ? 1 : 0}
          style={{ transition: 'opacity 0.3s ease 1.2s' }}
        />
      )}
    </svg>
  );
}

type BarChartProps = {
  data: { label: string; value: number }[];
  max?: number;
  height?: number;
  className?: string;
  accentEvery?: number;
  showValues?: boolean;
};

/** Animated vertical bar chart with staggered grow-in. */
export function BarChart({ data, max, height = 120, className = '', accentEvery, showValues }: BarChartProps) {
  const maxVal = max ?? Math.max(...data.map((d) => d.value));
  const [ref, inView] = useInViewFallback();

  return (
    <div ref={ref as any} className={`flex items-end gap-2 ${className}`} style={{ height }}>
      {data.map((d, i) => {
        const isAccent = accentEvery !== undefined && i % accentEvery === 0;
        return (
          <div key={d.label} className="flex flex-1 flex-col items-center gap-2">
            <div className="relative flex w-full flex-1 items-end justify-center">
              <div
                className={`w-full max-w-[28px] rounded-md transition-all duration-700 ease-out ${
                  isAccent ? 'bg-gradient-to-t from-accent-500 to-accent' : 'bg-gradient-to-t from-surface-500 to-surface-400'
                }`}
                style={{
                  height: inView ? `${(d.value / maxVal) * 100}%` : '0%',
                  transitionDelay: `${i * 60}ms`,
                  boxShadow: isAccent ? '0 0 12px -2px rgba(197,251,69,0.3)' : undefined,
                }}
              />
              {showValues && (
                <span
                  className="absolute -top-5 text-[9px] font-bold text-white/50 opacity-0 transition-opacity"
                  style={{ opacity: inView ? 1 : 0, transitionDelay: `${i * 60 + 500}ms` }}
                >
                  {d.value}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium text-white/40">{d.label}</span>
          </div>
        );
      })}
    </div>
  );
}

type RadialGaugeProps = {
  value: number;
  size?: number;
  stroke?: number;
  className?: string;
  label?: string;
  sublabel?: string;
};

/** Circular progress gauge with animated fill and glow. */
export function RadialGauge({ value, size = 120, stroke = 8, className = '', label, sublabel }: RadialGaugeProps) {
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const rawId = useId();
  const [ref, inView] = useInViewFallback();

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }} ref={ref as any}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id={`gauge-${rawId}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d9ff80" />
            <stop offset="100%" stopColor="#aee020" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#1c212b" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#gauge-${rawId})`}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circ}
          strokeDashoffset={inView ? circ - (value / 100) * circ : circ}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
          style={{ filter: 'drop-shadow(0 0 6px rgba(197,251,69,0.4))' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {label && <span className="font-display text-2xl font-bold text-white">{label}</span>}
        {sublabel && <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">{sublabel}</span>}
      </div>
    </div>
  );
}

type AreaChartProps = {
  data: number[];
  width?: number;
  height?: number;
  stroke?: string;
  className?: string;
  showGrid?: boolean;
  showAxisLabels?: boolean;
  axisLabels?: string[];
};

/** Full-featured area chart with grid lines, smooth curve, gradient fill, and optional axis labels. */
export function AreaChart({
  data,
  width = 280,
  height = 100,
  stroke = '#c5fb45',
  className = '',
  showGrid = true,
  showAxisLabels = false,
  axisLabels = [],
}: AreaChartProps) {
  const rawId = useId();
  const gradId = `area-grad-${rawId}`;
  const pathRef = useRef<SVGPathElement>(null);
  const [ref, inView] = useInViewFallback();

  const padding = { top: 8, right: 8, bottom: showAxisLabels ? 20 : 8, left: 8 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const stepX = chartW / (data.length - 1);
  const points = data.map((d, i) => {
    const x = padding.left + i * stepX;
    const y = padding.top + chartH - ((d - min) / range) * (chartH - 4) - 2;
    return [x, y] as const;
  });

  const pathD = smoothPath(points);
  const areaD = `${pathD} L${padding.left + chartW},${padding.top + chartH} L${padding.left},${padding.top + chartH} Z`;

  useEffect(() => {
    if (!pathRef.current || !inView) return;
    const len = pathRef.current.getTotalLength();
    pathRef.current.style.strokeDasharray = `${len}`;
    pathRef.current.style.strokeDashoffset = `${len}`;
    pathRef.current.getBoundingClientRect();
    pathRef.current.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(0.16,1,0.3,1)';
    pathRef.current.style.strokeDashoffset = '0';
  }, [inView]);

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      ref={ref as any}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.35" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid lines */}
      {showGrid &&
        [0.25, 0.5, 0.75].map((pct) => (
          <line
            key={pct}
            x1={padding.left}
            x2={padding.left + chartW}
            y1={padding.top + chartH * pct}
            y2={padding.top + chartH * pct}
            stroke="#1c212b"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
        ))}

      {/* Area fill */}
      <path d={areaD} fill={`url(#${gradId})`} opacity={inView ? 1 : 0} style={{ transition: 'opacity 0.8s ease 0.4s' }} />

      {/* Line */}
      <path
        ref={pathRef}
        d={pathD}
        stroke={stroke}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: `drop-shadow(0 0 5px ${stroke}55)` }}
      />

      {/* Data point dots */}
      {points.map((pt, i) => (
        <circle
          key={i}
          cx={pt[0]}
          cy={pt[1]}
          r={i === points.length - 1 ? 4 : 2.5}
          fill={stroke}
          opacity={inView ? 1 : 0}
          style={{ transition: `opacity 0.3s ease ${1 + i * 0.05}s` }}
        />
      ))}

      {/* Axis labels */}
      {showAxisLabels && axisLabels.length > 0 && (
        <>
          {axisLabels.map((label, i) => {
            const x = padding.left + (i / (axisLabels.length - 1)) * chartW;
            return (
              <text
                key={i}
                x={x}
                y={height - 4}
                textAnchor={i === 0 ? 'start' : i === axisLabels.length - 1 ? 'end' : 'middle'}
                className="fill-white/30"
                style={{ fontSize: 9, fontWeight: 500 }}
              >
                {label}
              </text>
            );
          })}
        </>
      )}
    </svg>
  );
}

type DualLineChartProps = {
  primary: { data: number[]; stroke?: string; label: string };
  secondary: { data: number[]; stroke?: string; label: string };
  width?: number;
  height?: number;
  className?: string;
};

/** Dual-line chart for comparing two metrics (e.g., fitness vs fatigue). */
export function DualLineChart({
  primary,
  secondary,
  width = 280,
  height = 120,
  className = '',
}: DualLineChartProps) {
  const rawId = useId();
  const gradId1 = `dual-grad-1-${rawId}`;
  const gradId2 = `dual-grad-2-${rawId}`;
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);
  const [ref, inView] = useInViewFallback();

  const allData = [...primary.data, ...secondary.data];
  const max = Math.max(...allData);
  const min = Math.min(...allData);
  const range = max - min || 1;
  const padding = { top: 10, right: 10, bottom: 10, left: 10 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const buildPath = (data: number[]) => {
    const stepX = chartW / (data.length - 1);
    const pts = data.map((d, i) => {
      const x = padding.left + i * stepX;
      const y = padding.top + chartH - ((d - min) / range) * (chartH - 4) - 2;
      return [x, y] as const;
    });
    return { pathD: smoothPath(pts), areaD: `${smoothPath(pts)} L${padding.left + chartW},${padding.top + chartH} L${padding.left},${padding.top + chartH} Z`, pts };
  };

  const p1 = buildPath(primary.data);
  const p2 = buildPath(secondary.data);

  useEffect(() => {
    [pathRef1, pathRef2].forEach((pathRef, idx) => {
      if (!pathRef.current || !inView) return;
      const len = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${len}`;
      pathRef.current.style.strokeDashoffset = `${len}`;
      pathRef.current.getBoundingClientRect();
      pathRef.current.style.transition = `stroke-dashoffset 1.5s cubic-bezier(0.16,1,0.3,1) ${idx * 0.2}s`;
      pathRef.current.style.strokeDashoffset = '0';
    });
  }, [inView]);

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      ref={ref as any}
    >
      <defs>
        <linearGradient id={gradId1} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={primary.stroke ?? '#c5fb45'} stopOpacity="0.25" />
          <stop offset="100%" stopColor={primary.stroke ?? '#c5fb45'} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={gradId2} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={secondary.stroke ?? '#5b8def'} stopOpacity="0.25" />
          <stop offset="100%" stopColor={secondary.stroke ?? '#5b8def'} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid */}
      {[0.25, 0.5, 0.75].map((pct) => (
        <line
          key={pct}
          x1={padding.left}
          x2={padding.left + chartW}
          y1={padding.top + chartH * pct}
          y2={padding.top + chartH * pct}
          stroke="#1c212b"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
      ))}

      {/* Secondary line (behind) */}
      <path d={p2.areaD} fill={`url(#${gradId2})`} opacity={inView ? 1 : 0} style={{ transition: 'opacity 0.8s ease 0.5s' }} />
      <path
        ref={pathRef2}
        d={p2.pathD}
        stroke={secondary.stroke ?? '#5b8def'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Primary line (in front) */}
      <path d={p1.areaD} fill={`url(#${gradId1})`} opacity={inView ? 1 : 0} style={{ transition: 'opacity 0.8s ease 0.3s' }} />
      <path
        ref={pathRef1}
        d={p1.pathD}
        stroke={primary.stroke ?? '#c5fb45'}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: `drop-shadow(0 0 5px ${primary.stroke ?? '#c5fb45'}55)` }}
      />

      {/* End dots */}
      {[p1, p2].map((p, idx) => (
        <circle
          key={idx}
          cx={p.pts[p.pts.length - 1][0]}
          cy={p.pts[p.pts.length - 1][1]}
          r={idx === 0 ? 4 : 3}
          fill={idx === 0 ? primary.stroke ?? '#c5fb45' : secondary.stroke ?? '#5b8def'}
          opacity={inView ? 1 : 0}
          style={{ transition: 'opacity 0.3s ease 1.4s' }}
        />
      ))}
    </svg>
  );
}

// --- Helpers ---

/** Catmull-Rom spline -> smooth Bezier path */
function smoothPath(points: readonly (readonly [number, number])[]): string {
  if (points.length < 2) return '';
  if (points.length === 2) return `M${points[0][0]},${points[0][1]} L${points[1][0]},${points[1][1]}`;

  let d = `M${points[0][0]},${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${p2[0]},${p2[1]}`;
  }
  return d;
}

/** Lightweight in-view hook fallback (avoids circular import) */
function useInViewFallback<T extends HTMLElement = HTMLDivElement>(): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}
