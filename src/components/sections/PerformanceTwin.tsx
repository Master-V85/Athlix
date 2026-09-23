import { Moon, HeartPulse, Scale, Dumbbell, Gauge, Timer, BarChart3, Calendar, Target } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { AreaChart } from '@/components/ui/Charts';

const categories = [
  {
    title: 'Body',
    icon: HeartPulse,
    items: ['Sleep', 'HRV', 'Resting HR', 'Recovery', 'Weight'],
  },
  {
    title: 'Performance',
    icon: Gauge,
    items: ['VO2 Max', 'Pace', 'Power', 'Strength', 'Threshold'],
  },
  {
    title: 'Training',
    icon: BarChart3,
    items: ['Volume', 'Intensity', 'Load', 'Consistency'],
  },
  {
    title: 'Lifestyle',
    icon: Calendar,
    items: ['Schedule', 'Stress', 'Travel', 'Available Time', 'Equipment'],
  },
  {
    title: 'Goals',
    icon: Target,
    items: ['Race', 'Strength', 'Body Composition', 'Performance'],
  },
];

const TWIN_PHOTO = '/photos/twin.jpg';

export function PerformanceTwin() {
  return (
    <section id="twin" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Performance Twin"
          title="An AI model built around one athlete: you."
          subtitle="Athlix builds a continuously evolving digital representation of the athlete — your body, your performance, your training, your life, your goals."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Left — photo with data overlay */}
          <Reveal>
            <div className="relative flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-accent/[0.05] blur-3xl" />
              <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-line-strong shadow-float">
                <img
                  src={TWIN_PHOTO}
                  alt="Strength training equipment"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-0 via-surface-0/40 to-surface-0/20" />

                {/* Rings overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-3/4 w-3/4 rounded-full border border-accent/15" />
                  <div className="absolute h-1/2 w-1/2 rounded-full border border-accent/10" />

                  {/* Center label */}
                  <div className="absolute flex flex-col items-center">
                    <span className="font-display text-sm font-bold uppercase tracking-wider text-accent">Your Twin</span>
                    <span className="text-[10px] text-white/40">5 data domains</span>
                  </div>

                  {/* Orbiting data points */}
                  {[
                    { icon: Moon, label: 'Sleep', angle: 0 },
                    { icon: HeartPulse, label: 'HRV', angle: 72 },
                    { icon: Gauge, label: 'VO2', angle: 144 },
                    { icon: Timer, label: 'Pace', angle: 216 },
                    { icon: Scale, label: 'Weight', angle: 288 },
                  ].map((point) => {
                    const radius = 37;
                    const x = 50 + radius * Math.cos((point.angle * Math.PI) / 180);
                    const y = 50 + radius * Math.sin((point.angle * Math.PI) / 180);
                    return (
                      <div
                        key={point.label}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${x}%`, top: `${y}%` }}
                      >
                        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-xl border border-line-strong bg-surface-200/90 backdrop-blur-md">
                          <point.icon size={14} className="text-accent" />
                          <span className="mt-0.5 text-[7px] font-medium text-white/60">{point.label}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom chart overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="rounded-xl border border-line/60 bg-surface-0/70 p-3 backdrop-blur-md">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-white/50">Model Accuracy</span>
                      <span className="text-[10px] font-bold text-accent">94.2%</span>
                    </div>
                    <AreaChart data={[60, 65, 63, 70, 75, 73, 80, 85, 88, 90, 92, 94]} width={260} height={50} showGrid={false} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — category cards */}
          <div className="space-y-4">
            {categories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 80}>
                <div className="group flex items-center gap-5 rounded-xl border border-line/50 bg-surface-100/40 p-5 transition-all hover:border-accent/25 hover:bg-surface-100/70">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/15">
                    <cat.icon size={20} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white">{cat.title}</h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md bg-surface-300/50 px-2.5 py-1 text-xs font-medium text-white/50"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={400}>
              <div className="rounded-xl border border-accent/15 bg-accent/[0.02] p-5">
                <p className="text-sm leading-relaxed text-white/55">
                  Generic advice is based on averages. <span className="font-semibold text-white">Athlix learns how your body responds.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
