import { Play, MessageCircle, Moon, HeartPulse, Activity, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

const COACH_PHOTO = `${import.meta.env.BASE_URL}photos/daily-coach.jpg`;

export function DailyCoach() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Daily AI Coach"
          title="Wake up knowing exactly what to do."
          subtitle="Every morning, Athlix delivers a personalized brief — your readiness, today's session, and the reasoning behind every decision."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left — Morning Brief UI */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent/[0.06] to-transparent blur-2xl" />
              <div className="relative glass-strong rounded-2xl shadow-float">
                <div className="border-b border-line/60 p-5">
                  <p className="text-xs font-medium text-white/40">Good morning, Alex.</p>
                  <h3 className="font-display text-xl font-bold text-white">Morning Brief</h3>
                </div>
                <div className="space-y-4 p-5">
                  {/* Readiness row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-accent/20 bg-accent/[0.04] p-3.5 text-center">
                      <p className="text-[9px] font-medium uppercase tracking-wider text-white/40">Readiness</p>
                      <p className="font-display text-2xl font-bold text-accent">84</p>
                    </div>
                    <div className="rounded-xl border border-line/50 bg-surface-100/40 p-3.5">
                      <div className="mb-1 flex items-center gap-1 text-white/40">
                        <Moon size={10} />
                        <span className="text-[9px] font-medium uppercase tracking-wider">Sleep</span>
                      </div>
                      <p className="text-sm font-bold text-white">Excellent</p>
                    </div>
                    <div className="rounded-xl border border-line/50 bg-surface-100/40 p-3.5">
                      <div className="mb-1 flex items-center gap-1 text-white/40">
                        <HeartPulse size={10} />
                        <span className="text-[9px] font-medium uppercase tracking-wider">Recovery</span>
                      </div>
                      <p className="text-sm font-bold text-white">Good</p>
                    </div>
                  </div>

                  {/* Leg fatigue */}
                  <div className="flex items-center justify-between rounded-xl border border-line/50 bg-surface-100/40 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Activity size={14} className="text-white/40" />
                      <span className="text-sm font-medium text-white/60">Leg Fatigue</span>
                    </div>
                    <span className="rounded-full bg-yellow-500/15 px-2.5 py-0.5 text-xs font-semibold text-yellow-400/90">
                      Moderate
                    </span>
                  </div>

                  {/* Today's session */}
                  <div className="rounded-xl border border-line/60 bg-surface-100/60 p-4">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">Today</p>
                    <div className="mt-1 flex items-center justify-between">
                      <h4 className="font-display text-lg font-bold text-white">Threshold Run</h4>
                      <span className="text-sm font-semibold text-white/50">50 min</span>
                    </div>
                    <div className="mt-3 flex items-center gap-2 rounded-lg bg-surface-300/40 px-3 py-2">
                      <span className="text-xs text-white/40">Target:</span>
                      <span className="text-xs font-bold text-accent">4:25–4:35/km</span>
                    </div>
                  </div>

                  {/* Athlix note */}
                  <div className="rounded-xl border border-accent/15 bg-accent/[0.02] p-4">
                    <p className="text-xs font-semibold text-accent-400">Athlix note</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                      "You recovered well overnight. Your last two threshold sessions were completed below target effort,
                      so today's session progresses from 4 × 1 km to 5 × 1 km."
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1">
                      <Play size={13} />
                      Start Workout
                    </Button>
                    <Button size="sm" variant="secondary" className="flex-1">
                      <MessageCircle size={13} />
                      Ask Athlix
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — photo + copy */}
          <div className="space-y-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-line-strong shadow-float">
                <img src={COACH_PHOTO} alt="Runner in starting position on track" className="h-56 w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-0 via-surface-0/20 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="text-sm font-bold text-white">Ready before you are</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Your daily performance brief, ready before you are.
              </h3>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-white/55">
                No more guessing what to train. Athlix synthesizes overnight recovery data, your training history, and
                your goals into a clear, actionable plan — with the reasoning behind every choice.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="space-y-3">
                {[
                  'Readiness score calculated from sleep, HRV, and recovery',
                  "Session optimized for today's physiological state",
                  'Every progression explained — you always know why',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <ArrowRight size={15} className="shrink-0 text-accent" />
                    <span className="text-sm text-white/60">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
