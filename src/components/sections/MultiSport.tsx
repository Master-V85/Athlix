import { Footprints, Dumbbell, Bike, Shield, StretchHorizontal, AlertTriangle, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const sports = [
  { icon: Footprints, label: 'Running' },
  { icon: Dumbbell, label: 'Strength' },
  { icon: Bike, label: 'Cycling' },
  { icon: Shield, label: 'HYROX' },
  { icon: StretchHorizontal, label: 'Mobility' },
];

const MULTI_PHOTO = '/photos/multi-sport.jpg';

export function MultiSport() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Multi-Sport / Hybrid"
          title="One athlete. Multiple disciplines. One intelligent plan."
          subtitle="Athlix doesn't optimize each workout independently. It optimizes your entire performance system — understanding how sessions in one discipline affect another."
        />

        {/* Sport chips */}
        <Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {sports.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2.5 rounded-full border border-line-strong bg-surface-200/60 px-5 py-2.5 backdrop-blur-md transition-all hover:border-accent/30"
              >
                <s.icon size={16} className="text-accent" />
                <span className="text-sm font-semibold text-white/80">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Photo */}
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-line-strong shadow-float">
              <img src={MULTI_PHOTO} alt="Cyclists training on open road" className="h-72 w-full object-cover lg:h-96" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-0 via-surface-0/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center gap-2">
                  <Bike size={18} className="text-accent" />
                  <span className="text-sm font-bold text-white">Cross-discipline optimization</span>
                </div>
                <p className="mt-1 text-sm text-white/50">Athlix understands how your cycling load impacts your running performance.</p>
              </div>
            </div>
          </Reveal>

          {/* Interference example */}
          <Reveal delay={120}>
            <div className="glass-strong rounded-2xl p-6 lg:p-8">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                Interference Detection
              </p>

              {/* Timeline */}
              <div className="grid grid-cols-2 gap-4 lg:gap-8">
                <div className="rounded-xl border border-line/50 bg-surface-100/40 p-5">
                  <p className="text-xs font-medium text-white/40">Friday</p>
                  <h4 className="mt-1 font-display text-lg font-bold text-white">Heavy Squats</h4>
                  <p className="mt-1 text-sm text-white/40">5 × 5 at 85% 1RM</p>
                </div>
                <div className="rounded-xl border border-line/50 bg-surface-100/40 p-5">
                  <p className="text-xs font-medium text-white/40">Saturday</p>
                  <h4 className="mt-1 font-display text-lg font-bold text-white">10K Race</h4>
                  <p className="mt-1 text-sm text-white/40">Target: sub-45:00</p>
                </div>
              </div>

              {/* Warning */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-yellow-500/20 bg-yellow-500/[0.05] p-5">
                <AlertTriangle size={18} className="mt-0.5 shrink-0 text-yellow-400/80" />
                <div>
                  <p className="text-sm font-semibold text-yellow-400/90">Athlix Warning</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    "High lower-body strength volume may negatively affect Saturday's race readiness."
                  </p>
                </div>
              </div>

              {/* Suggested change */}
              <div className="mt-4 flex items-center justify-between rounded-xl border border-accent/20 bg-accent/[0.04] p-5">
                <div className="flex items-center gap-3">
                  <ArrowRight size={16} className="text-accent" />
                  <div>
                    <p className="text-xs text-white/40">Suggested Change</p>
                    <p className="text-sm font-semibold text-white">Reduce squat volume by 35%</p>
                  </div>
                </div>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">Auto-applied</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mt-12 text-center text-lg font-medium text-white/55 lg:max-w-2xl lg:mx-auto">
            Athlix doesn't optimize each workout independently.{' '}
            <span className="text-white">It optimizes your entire performance system.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
