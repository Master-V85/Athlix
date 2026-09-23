import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { HeroDashboard } from './HeroDashboard';

const integrations = ['Garmin', 'Apple Health', 'WHOOP', 'Oura', 'Strava'];

const HERO_BG = `${import.meta.env.BASE_URL}photos/hero.jpg`;

export function Hero() {
  return (
    <section id="product" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Cinematic sports background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-35"
          loading="eager"
        />
        {/* Dark gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-0 via-surface-0/85 to-surface-0/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-0 via-transparent to-surface-0/60" />
        {/* Accent glow */}
        <div className="absolute left-1/4 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 grid-noise opacity-20" />
      </div>
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-surface-0" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left — copy */}
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-200/50 px-3.5 py-1.5 backdrop-blur-md">
                <span className="flex h-2 w-2 items-center justify-center">
                  <span className="absolute h-2 w-2 animate-pulse-ring rounded-full bg-accent" />
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <span className="text-xs font-medium text-white/70">AI Performance Agent — Now in early access</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display text-[2.75rem] font-bold leading-[1.02] tracking-tightest text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-6xl lg:text-[4.25rem] text-balance">
                Your body changes every day.
                <br />
                <span className="accent-text">Your training should too.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)] text-pretty">
                Athlix is your AI Performance Agent — continuously analyzing your training, recovery, schedule and goals
                to decide what you should do next.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" href="#cta">
                  Build My Athlete Profile
                  <ArrowRight size={18} />
                </Button>
                <Button size="lg" variant="secondary" href="#loop">
                  <Play size={15} />
                  See Athlix in Action
                </Button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-white/40">Works with</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {integrations.map((name) => (
                    <span key={name} className="text-sm font-semibold tracking-wide text-white/40 transition-colors hover:text-white/70">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — dashboard */}
          <Reveal delay={200} className="relative">
            <HeroDashboard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
