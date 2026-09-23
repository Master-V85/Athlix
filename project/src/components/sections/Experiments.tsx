import { FlaskConical, Moon, TrendingUp, HeartPulse, Gauge } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';

const results = [
  { icon: Gauge, label: 'Average Interval Pace', value: 3.8, suffix: '%', prefix: '+', decimals: 1 },
  { icon: HeartPulse, label: 'Avg HR at equiv. pace', value: 4, suffix: ' bpm', prefix: '-', decimals: 0 },
  { icon: TrendingUp, label: 'Perceived Effort', value: 7, suffix: '%', prefix: '-', decimals: 0 },
];

export function Experiments() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Performance Experiments"
          title="Turn your training into your own sports science lab."
          subtitle="Test hypotheses about your own body. Athlix controls the variables and surfaces the correlations — so you learn what actually works for you."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Experiment setup */}
          <Reveal>
            <div className="glass-strong rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <FlaskConical size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/40">Experiment</p>
                  <h3 className="font-display text-lg font-bold text-white">Does more sleep improve interval performance?</h3>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-line/50 bg-surface-100/40 p-4">
                  <div className="mb-1.5 flex items-center gap-1.5 text-white/40">
                    <Moon size={12} />
                    <span className="text-[10px] font-medium uppercase tracking-wider">Duration</span>
                  </div>
                  <p className="font-display text-2xl font-bold text-white">21 days</p>
                </div>
                <div className="rounded-xl border border-line/50 bg-surface-100/40 p-4">
                  <div className="mb-1.5 flex items-center gap-1.5 text-white/40">
                    <Moon size={12} />
                    <span className="text-[10px] font-medium uppercase tracking-wider">Target</span>
                  </div>
                  <p className="font-display text-2xl font-bold text-white">7h 30m+</p>
                </div>
              </div>

              {/* Timeline visualization */}
              <div className="mt-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 21 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-8 flex-1 rounded-sm transition-all"
                      style={{
                        background: i < 14 ? 'rgba(197,251,69,0.2)' : 'rgba(197,251,69,0.5)',
                        transitionDelay: `${i * 30}ms`,
                      }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-white/30">
                  <span>Day 1</span>
                  <span>Day 21</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Results */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">Results after 21 days</p>
              <div className="space-y-3">
                {results.map((r) => (
                  <div key={r.label} className="flex items-center justify-between rounded-xl border border-line/50 bg-surface-100/40 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-300/50">
                        <r.icon size={15} className="text-white/50" />
                      </div>
                      <span className="text-sm font-medium text-white/60">{r.label}</span>
                    </div>
                    <span className="font-display text-xl font-bold text-accent">
                      {r.prefix}
                      <AnimatedNumber value={r.value} decimals={r.decimals} suffix={r.suffix} />
                    </span>
                  </div>
                ))}
              </div>

              {/* Insight */}
              <div className="flex flex-1 flex-col justify-end rounded-xl border border-accent/15 bg-accent/[0.03] p-5">
                <p className="text-xs font-semibold text-accent-400">Athlix Insight</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  "Your data suggests sleep duration has a meaningful relationship with high-intensity running
                  performance."
                </p>
                <p className="mt-3 text-[11px] text-white/30">
                  Observational correlation, not medical causation.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
