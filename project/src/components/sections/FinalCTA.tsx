import { ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

export function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-28 lg:py-40">
      <div className="absolute inset-0 grid-noise opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[120px]" />

      {/* Top border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Stop following static plans.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 font-display text-2xl font-bold leading-tight text-white/60 sm:text-3xl lg:text-4xl text-balance">
            Train with a system that <span className="accent-text">learns you.</span>
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" href="#" className="w-full sm:w-auto">
              Build Your Athlete Profile
              <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="secondary" href="#" className="w-full sm:w-auto">
              <Users size={16} />
              Join the Waitlist
            </Button>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-8 text-sm text-white/35">
            Athlix is currently opening early access to selected athletes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
