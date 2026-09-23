import { Target, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';

const gaps = [
  { label: 'Aerobic Endurance', value: 82 },
  { label: 'Threshold', value: 67 },
  { label: 'Running Economy', value: 71 },
  { label: 'Strength', value: 78 },
  { label: 'Recovery Consistency', value: 58 },
];

const phases = ['Foundation', 'Build', 'Threshold', 'Race Specific', 'Taper'];

export function GoalEngine() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Goal Engine"
          title="Start with the outcome. Athlix builds the path."
          subtitle="Your workouts are not random sessions. Every session exists because it moves you closer to a measurable goal."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Goal card */}
          <Reveal>
            <div className="glass-strong rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Target size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/40">Your Goal</p>
                  <h3 className="font-display text-xl font-bold text-white">Run a sub-45 minute 10K</h3>
                </div>
              </div>

              {/* Current vs Target */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-line/50 bg-surface-100/40 p-4">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">Current</p>
                  <p className="mt-1 font-display text-2xl font-bold text-white/70">49:18</p>
                </div>
                <div className="rounded-xl border border-line/50 bg-surface-100/40 p-4">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">Target</p>
                  <p className="mt-1 font-display text-2xl font-bold text-accent">44:59</p>
                </div>
                <div className="rounded-xl border border-line/50 bg-surface-100/40 p-4">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">Timeline</p>
                  <p className="mt-1 font-display text-2xl font-bold text-white">12 <span className="text-sm">wk</span></p>
                </div>
              </div>

              {/* Performance gap bars */}
              <div className="mt-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">Performance Gap</p>
                <div className="space-y-3.5">
                  {gaps.map((gap, i) => (
                    <div key={gap.label}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-xs font-medium text-white/55">{gap.label}</span>
                        <span className="text-xs font-bold text-white">
                          <AnimatedNumber value={gap.value} suffix="%" />
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-surface-300/50">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${gap.value}%`,
                            background: gap.value >= 75 ? 'linear-gradient(90deg, #c5fb45, #aee020)' : 'linear-gradient(90deg, #8fb812, #6d8e0c)',
                            transitionDelay: `${i * 100 + 200}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Phases timeline */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                Athlix automatically creates phases
              </p>
              <div className="flex flex-1 flex-col justify-center gap-3">
                {phases.map((phase, i) => (
                  <div key={phase} className="group flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-surface-200/60 font-display text-sm font-bold text-white/60 transition-all group-hover:border-accent/40 group-hover:text-accent">
                      {i + 1}
                    </div>
                    <div className="flex-1 border-b border-line/40 pb-3">
                      <span className="text-base font-semibold text-white/80">{phase}</span>
                    </div>
                    {i < phases.length - 1 && <ArrowRight size={16} className="text-white/20" />}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
