import { Moon, Calendar, Plane, AlertCircle, Activity, Zap, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const staticPlan = [
  { day: 'MON', session: 'Intervals' },
  { day: 'TUE', session: 'Strength' },
  { day: 'WED', session: 'Tempo' },
  { day: 'THU', session: 'Strength' },
  { day: 'FRI', session: 'Recovery' },
];

const lifeEvents = [
  { icon: Moon, label: 'Poor Sleep' },
  { icon: Calendar, label: 'Late Meeting' },
  { icon: Plane, label: 'Travel' },
  { icon: Activity, label: 'Muscle Soreness' },
  { icon: Zap, label: 'Unexpected Match' },
  { icon: AlertCircle, label: 'High Stress' },
];

export function Problem() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="The Problem"
          title="Your training plan shouldn't ignore your life."
          subtitle="Most training plans are created once and become outdated the moment your life changes. Athlix continuously rebuilds your training around what is actually happening."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
          {/* Static plan */}
          <Reveal>
            <div className="glass-strong rounded-2xl p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                Traditional Plan
              </p>
              <div className="space-y-1.5">
                {staticPlan.map((d) => (
                  <div
                    key={d.day}
                    className="flex items-center gap-4 rounded-lg border border-line/50 bg-surface-100/40 px-4 py-3"
                  >
                    <span className="w-10 text-xs font-bold text-white/40">{d.day}</span>
                    <span className="text-sm font-medium text-white/70">{d.session}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Life events disrupting + Athlix rebuild */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-6">
              {/* Life events */}
              <div className="glass-strong rounded-2xl p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                  Then life happens
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {lifeEvents.map((e) => (
                    <div
                      key={e.label}
                      className="flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.06] px-3.5 py-2"
                    >
                      <e.icon size={14} className="text-red-400/80" />
                      <span className="text-sm font-medium text-white/70">{e.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Athlix rebuilds */}
              <div className="flex flex-1 flex-col justify-center rounded-2xl border border-accent/20 bg-accent/[0.03] p-6">
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15">
                    <ArrowRight size={15} className="text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-accent-400">Athlix restructures your week</span>
                </div>
                <p className="text-sm leading-relaxed text-white/55">
                  Instead of blindly following a static plan, Athlix detects the disruption and rebuilds your training
                  around your current state — automatically.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
