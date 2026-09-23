import { CheckCircle2, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';
import { AreaChart } from '@/components/ui/Charts';

const summary = [
  { label: 'Training Completion', value: 92, suffix: '%', decimals: 0 },
  { label: 'Fitness Trend', value: 3.4, suffix: '%', prefix: '+', decimals: 1 },
  { label: 'Average Recovery', value: 78, suffix: '%', decimals: 0 },
];

const fitnessData = [38, 40, 42, 41, 45, 48, 47, 52, 55, 54, 58, 62];
const weekLabels = ['W1', 'W3', 'W6', 'W9', 'W12'];

export function WeeklyReview() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-surface-50/30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Weekly Review"
          title="See what actually moved you forward."
          subtitle="Every week, Athlix delivers a premium performance report — what improved, what held you back, and what changes next week."
        />

        <Reveal>
          <div className="mt-16 max-w-4xl mx-auto glass-strong rounded-2xl p-6 lg:p-8">
            <div className="flex items-center justify-between border-b border-line/40 pb-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/40">Week 38</p>
                <h3 className="font-display text-xl font-bold text-white">Weekly Performance</h3>
              </div>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-400">
                Optimal Load
              </span>
            </div>

            {/* Summary stats */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {summary.map((s) => (
                <div key={s.label} className="rounded-xl border border-line/50 bg-surface-100/40 p-4">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">{s.label}</p>
                  <p className="mt-1 font-display text-2xl font-bold text-white">
                    {s.prefix}
                    <AnimatedNumber value={s.value} decimals={s.decimals} suffix={s.suffix} />
                  </p>
                </div>
              ))}
            </div>

            {/* Two columns: improvement + limiter */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-accent/20 bg-accent/[0.04] p-4">
                <CheckCircle2 size={18} className="text-accent" />
                <div>
                  <p className="text-xs text-white/40">Biggest Improvement</p>
                  <p className="text-sm font-bold text-white">Threshold Pace</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-yellow-500/20 bg-yellow-500/[0.04] p-4">
                <AlertCircle size={18} className="text-yellow-400/80" />
                <div>
                  <p className="text-xs text-white/40">Main Limiter</p>
                  <p className="text-sm font-bold text-white">Sleep Consistency</p>
                </div>
              </div>
            </div>

            {/* Next week changes */}
            <div className="mt-6 rounded-xl border border-line/50 bg-surface-100/40 p-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">Next Week</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">Running volume</span>
                  <span className="flex items-center gap-2 text-sm font-semibold text-white">
                    32 → 35 km
                    <ArrowRight size={14} className="text-accent" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">Strength</span>
                  <span className="text-sm font-semibold text-white/50">unchanged</span>
                </div>
              </div>
            </div>

            {/* Athlix note */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/15 bg-accent/[0.02] p-5">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/10">
                <TrendingUp size={13} className="text-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold text-accent-400">Athlix note</p>
                <p className="mt-1 text-sm leading-relaxed text-white/55">
                  "Your aerobic development is ahead of plan, while recovery remains the primary constraint."
                </p>
              </div>
            </div>

            {/* Fitness trend chart — upgraded with grid + axis labels */}
            <div className="mt-6 rounded-xl border border-line/50 bg-surface-100/40 p-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">Fitness Trend (12 weeks)</p>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-[10px] font-medium text-white/40">Fitness</span>
                </div>
              </div>
              <AreaChart
                data={fitnessData}
                width={400}
                height={90}
                showGrid
                showAxisLabels
                axisLabels={weekLabels}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
