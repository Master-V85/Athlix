import { TrendingDown, CalendarX, TrendingUp, BookOpen, Check, Send, Eye, Edit3 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Sparkline } from '@/components/ui/Charts';


const athletes = [
  {
    name: 'Alex Morgan',
    issue: 'Recovery declining',
    icon: TrendingDown,
    color: 'text-red-400/80',
    trend: [82, 80, 78, 75, 72, 68, 65],
  },
  {
    name: 'Sarah Kim',
    issue: 'Missed 3 workouts',
    icon: CalendarX,
    color: 'text-yellow-400/80',
    trend: [90, 85, 80, 60, 50, 45, 40],
  },
  {
    name: 'Daniel Ross',
    issue: 'Training load +31%',
    icon: TrendingUp,
    color: 'text-yellow-400/80',
    trend: [60, 65, 70, 75, 82, 88, 92],
  },
];

const coachActions = [
  { icon: Eye, label: 'Review changes' },
  { icon: Edit3, label: 'Override Athlix' },
  { icon: Send, label: 'Send messages' },
  { icon: Check, label: 'Approve plans' },
  { icon: BookOpen, label: 'Create methodology' },
];

const COACH_PHOTO = `${import.meta.env.BASE_URL}photos/for-coaches.jpg`;

export function ForCoaches() {
  return (
    <section id="coaches" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-surface-50/40" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-accent/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="For Coaches"
          title="Coach more athletes without losing the human touch."
          subtitle="Athlix handles the data, the monitoring, and the day-to-day adjustments — so you can focus on the coaching that only a human can do."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:items-start">
          {/* Coach Dashboard */}
          <Reveal>
            <div className="glass-strong rounded-2xl shadow-float">
              <div className="border-b border-line/60 px-5 py-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">Coach Dashboard</span>
                  <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-red-400/90">
                    3 need attention
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                  Athletes needing attention
                </p>
                <div className="space-y-3">
                  {athletes.map((a) => (
                    <div
                      key={a.name}
                      className="flex items-center gap-4 rounded-xl border border-line/50 bg-surface-100/40 p-4 transition-all hover:border-line-strong"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-300/60 font-display text-sm font-bold text-white/70">
                        {a.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">{a.name}</p>
                        <div className="mt-0.5 flex items-center gap-1.5">
                          <a.icon size={12} className={a.color} />
                          <span className="text-xs text-white/45">{a.issue}</span>
                        </div>
                      </div>
                      <Sparkline data={a.trend} width={70} height={28} stroke={a.color.includes('red') ? '#f87171' : '#facc15'} />
                    </div>
                  ))}
                </div>

                {/* AI summary */}
                <div className="mt-5 rounded-xl border border-accent/15 bg-accent/[0.02] p-4">
                  <p className="text-xs font-semibold text-accent-400">AI Summary</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                    Alex's recovery has declined for 6 consecutive days. Consider a deload week. Sarah's adherence has
                    dropped — may need a check-in. Daniel's load spike is within tolerance but monitor closely.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Coach capabilities + photo */}
          <div className="space-y-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-line-strong shadow-float">
                <img src={COACH_PHOTO} alt="Coaches reviewing training strategies" className="h-48 w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-0 via-surface-0/30 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="text-sm font-bold text-white">Scale your coaching system</span>
                  <p className="text-xs text-white/50">Powered by Athlix intelligence</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="font-display text-2xl font-bold text-white">Full control. Scaled by AI.</h3>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-white/55">
                Review every adaptation Athlix makes. Override any decision. Encode your own methodology and let Athlix
                deliver it across every athlete you coach.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {coachActions.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center gap-2.5 rounded-lg border border-line/50 bg-surface-100/40 px-4 py-3"
                  >
                    <a.icon size={15} className="text-accent" />
                    <span className="text-sm font-medium text-white/65">{a.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={240}>
              <Button size="lg" href="#cta">
                Explore Athlix for Coaches
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
