import { Moon, Activity, TrendingUp, ArrowRight, Calendar } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const whyFactors = [
  { icon: Moon, label: 'Sleep', change: '↓ 18%', direction: 'down' },
  { icon: Activity, label: 'HRV', change: '↓ 9%', direction: 'down' },
  { icon: TrendingUp, label: 'Leg fatigue', change: '↑', direction: 'up' },
  { icon: TrendingUp, label: 'Training load', change: '↑ 14%', direction: 'up' },
];

export function WhatChanged() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-surface-50/30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Explainable Adaptations"
          title="Every decision should make sense."
          subtitle="Athlix never silently changes your program. Every adaptation is explained — what changed, why it changed, and what it means for your goal."
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <Reveal>
            <div className="glass-strong rounded-2xl p-6 lg:p-8">
              {/* Before/After headers */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {/* Before */}
                <div className="rounded-xl border border-line/50 bg-surface-100/40 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/35">Before</p>
                  <h4 className="font-display text-lg font-bold text-white/60">Heavy Squat Session</h4>
                  <p className="mt-1 text-sm text-white/40">5 × 5</p>
                </div>

                {/* After */}
                <div className="rounded-xl border border-accent/25 bg-accent/[0.04] p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent-400">After</p>
                  <h4 className="font-display text-lg font-bold text-white">Upper Body Strength</h4>
                  <p className="mt-1 text-sm text-accent-300">+ 25 min Zone 2</p>
                </div>
              </div>

              {/* Why section */}
              <div className="mt-6 border-t border-line/40 pt-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/35">Why</p>
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {whyFactors.map((f) => (
                    <div key={f.label} className="flex items-center gap-2.5 rounded-lg bg-surface-200/50 px-3.5 py-3">
                      <f.icon size={15} className={f.direction === 'down' ? 'text-red-400/70' : 'text-yellow-400/80'} />
                      <div>
                        <p className="text-xs font-medium text-white/50">{f.label}</p>
                        <p className={`text-sm font-bold ${f.direction === 'down' ? 'text-red-400/80' : 'text-yellow-400/90'}`}>
                          {f.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Goal impact + next session */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center justify-between rounded-lg border border-line/50 bg-surface-100/40 px-4 py-3.5">
                  <span className="text-sm text-white/50">Goal Impact</span>
                  <span className="rounded-full bg-accent/15 px-3 py-0.5 text-sm font-semibold text-accent">Minimal</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-line/50 bg-surface-100/40 px-4 py-3.5">
                  <span className="flex items-center gap-2 text-sm text-white/50">
                    <Calendar size={14} />
                    Next heavy lower-body
                  </span>
                  <span className="text-sm font-semibold text-white">Friday</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 text-center text-lg font-medium text-white/60">
              Athlix never silently changes your program.{' '}
              <span className="text-white">Every adaptation is explained.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
