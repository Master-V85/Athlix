import { BookOpen, Layers, TrendingUp, Compass } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const inputs = [
  { icon: BookOpen, title: 'Training Principles', desc: 'Define your core rules and progression logic.' },
  { icon: Layers, title: 'Workout Library', desc: 'Your preferred sessions, sets, and structures.' },
  { icon: TrendingUp, title: 'Progression System', desc: 'How and when to advance intensity and volume.' },
  { icon: Compass, title: 'Coaching Philosophy', desc: 'Your beliefs on recovery, load, and adaptation.' },
];

export function CoachAI() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Coach AI"
          title="Scale your coaching philosophy."
          subtitle="Professional coaches can encode their methodology into Athlix. Your system, your principles — delivered at scale without losing what makes your coaching unique."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {inputs.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-line/50 bg-surface-100/40 p-6 transition-all hover:border-accent/25">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/15">
                  <item.icon size={20} className="text-accent" />
                </div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-12 text-center">
            <p className="font-display text-2xl font-bold text-white sm:text-3xl">
              Your coaching system. <span className="accent-text">Powered by AI.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
