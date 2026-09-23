import { Activity, Brain, Target, Dumbbell, RefreshCw } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

const steps = [
  { icon: Activity, title: 'Measure', desc: 'Training, sleep, HRV, heart rate, fatigue, soreness and lifestyle context — all continuously collected.' },
  { icon: Brain, title: 'Understand', desc: 'Athlix builds a continuously evolving model of your performance and personal response patterns.' },
  { icon: Target, title: 'Decide', desc: 'Your Performance Agent determines the highest-value next action based on your body, life, and goals.' },
  { icon: Dumbbell, title: 'Train', desc: 'Execute the workout with intelligent guidance and real-time pace, power, and effort targets.' },
  { icon: RefreshCw, title: 'Adapt', desc: 'Every session updates your future plan. The loop runs continuously — your training never stops learning.' },
];

const LOOP_PHOTO = '/photos/loop.jpg';

export function AthlixLoop() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="loop" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-surface-50/30" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          center
          eyebrow="The Athlix Loop"
          title="Your training never stops learning."
          subtitle="A continuous cycle of measurement, understanding, and adaptation that keeps your training perfectly aligned with your body, your life, and your goals."
        />

        {/* Desktop: circular layout with photo center */}
        <div className="mt-20 hidden lg:block">
          <div ref={ref} className="relative mx-auto h-[520px] w-[520px]">
            {/* SVG connecting arcs */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 520 520"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="loop-arc-grad" x1="0" y1="0" x2="520" y2="520">
                  <stop offset="0%" stopColor="#c5fb45" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#c5fb45" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#c5fb45" stopOpacity="0.6" />
                </linearGradient>
                <filter id="loop-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Outer ring */}
              <circle cx="260" cy="260" r="220" stroke="#1f242e" strokeWidth="1.5" fill="none" />
              {/* Inner ring */}
              <circle cx="260" cy="260" r="180" stroke="#171b22" strokeWidth="1" fill="none" />

              {/* Animated dashed orbit ring */}
              <circle
                cx="260"
                cy="260"
                r="220"
                stroke="url(#loop-arc-grad)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6 10"
                className={inView ? 'animate-spin-slow' : ''}
                style={{ transformOrigin: 'center', opacity: inView ? 0.7 : 0.2, transition: 'opacity 0.8s' }}
              />

              {/* Connecting arcs between steps */}
              {steps.map((_, i) => {
                const angle1 = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
                const angle2 = ((i + 1) / steps.length) * 2 * Math.PI - Math.PI / 2;
                const r = 220;
                const x1 = 260 + r * Math.cos(angle1);
                const y1 = 260 + r * Math.sin(angle1);
                const x2 = 260 + r * Math.cos(angle2);
                const y2 = 260 + r * Math.sin(angle2);
                return (
                  <path
                    key={`arc-${i}`}
                    d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
                    stroke="#c5fb45"
                    strokeWidth="2.5"
                    fill="none"
                    opacity={inView ? 0.4 : 0}
                    strokeLinecap="round"
                    filter="url(#loop-glow)"
                    style={{
                      strokeDasharray: 160,
                      strokeDashoffset: inView ? 0 : 160,
                      transition: `stroke-dashoffset 0.8s ease ${300 + i * 150}ms, opacity 0.4s ease ${300 + i * 150}ms`,
                    }}
                  />
                );
              })}

              {/* Pulsing data flow dots */}
              {inView &&
                steps.map((_, i) => {
                  const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
                  const r = 220;
                  const cx = 260 + r * Math.cos(angle);
                  const cy = 260 + r * Math.sin(angle);
                  return (
                    <circle
                      key={`pulse-${i}`}
                      cx={cx}
                      cy={cy}
                      r="4"
                      fill="#c5fb45"
                      opacity="0"
                      style={{ animation: 'loopPulse 3s ease-in-out infinite', animationDelay: `${i * 0.6}s` }}
                    >
                      <animate attributeName="opacity" values="0;1;0" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                      <animate attributeName="r" values="3;6;3" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                    </circle>
                  );
                })}
            </svg>

            {/* Center hub with photo */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div
                className={`relative h-36 w-36 overflow-hidden rounded-full border-2 border-accent/30 shadow-glow transition-all duration-700 ${
                  inView ? 'scale-100 opacity-100' : 'scale-75 opacity-50'
                }`}
              >
                <img
                  src={LOOP_PHOTO}
                  alt="Athlete training"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-surface-0/80 via-transparent to-surface-0/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-3">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-accent">Athlix</p>
                  <p className="text-[9px] text-white/50">Loop</p>
                </div>
              </div>
              {/* Pulsing rings */}
              {inView && (
                <>
                  <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 animate-pulse-ring rounded-full border border-accent/20" />
                  <div
                    className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 animate-pulse-ring rounded-full border border-accent/15"
                    style={{ animationDelay: '1.2s' }}
                  />
                </>
              )}
            </div>

            {/* Step nodes around the circle */}
            {steps.map((step, i) => {
              const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 42.3;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              return (
                <div
                  key={step.title}
                  className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-700"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transitionDelay: `${i * 120}ms`,
                    opacity: inView ? 1 : 0,
                    transform: `translate(-50%, -50%) scale(${inView ? 1 : 0.3})`,
                  }}
                >
                  <div className="group relative flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-line-strong bg-surface-200/95 backdrop-blur-md transition-all hover:border-accent/50 hover:shadow-glow-sm">
                    <step.icon size={22} className="text-accent transition-transform group-hover:scale-110" />
                    <span className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-white/70">{step.title}</span>
                    <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-surface-0">
                      {i + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: vertical flow with photo */}
        <div className="mt-12 lg:hidden">
          <Reveal>
            <div className="relative mx-auto mb-10 max-w-sm overflow-hidden rounded-2xl border border-line-strong shadow-float">
              <img src={LOOP_PHOTO} alt="Athlete training" className="h-48 w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-0 via-surface-0/30 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <RefreshCw size={16} className="text-accent" />
                <span className="font-display text-sm font-bold text-white">The Athlix Loop</span>
              </div>
            </div>
          </Reveal>

          <div className="relative mx-auto max-w-md">
            {/* Vertical connecting line */}
            <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-accent/40 via-accent/15 to-accent/40" />
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="relative flex gap-5 pb-8 last:pb-0">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-surface-200/90 backdrop-blur-md">
                    <step.icon size={20} className="text-accent" />
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[8px] font-bold text-surface-0">
                      {i + 1}
                    </span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white">{step.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/50">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Desktop step descriptions grid */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-5 lg:gap-5">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <div className="group h-full rounded-xl border border-line/50 bg-surface-100/40 p-5 transition-all hover:border-accent/25 hover:bg-surface-100/70">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <step.icon size={15} className="text-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/60">{step.title}</span>
                </div>
                <p className="text-sm leading-relaxed text-white/50">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes loopPulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
