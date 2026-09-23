import { Eye, Lock, UserCog, MessageSquareText, ShieldCheck, FlaskConical } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const principles = [
  { icon: Eye, title: 'Transparent Adaptations', desc: 'Every plan change is explained. You always know what changed and why.' },
  { icon: Lock, title: 'Data Ownership', desc: 'Your data belongs to you. Export or delete it at any time.' },
  { icon: ShieldCheck, title: 'Privacy-First', desc: 'Your performance data is encrypted and never sold to third parties.' },
  { icon: UserCog, title: 'Human Coach Override', desc: 'Your coach can always override Athlix decisions. You remain in control.' },
  { icon: MessageSquareText, title: 'Explainable Recommendations', desc: 'AI explains its reasoning. No black-box suggestions.' },
  { icon: FlaskConical, title: 'Grounded in Science', desc: 'Validated training principles, deterministic decision systems, and AI interaction.' },
];

export function TrustScience() {
  return (
    <section id="science" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Trust & Science"
          title="AI guided by data. Decisions grounded in performance science."
          subtitle="Athlix combines athlete data, validated training principles, deterministic decision systems and AI interaction. AI should explain recommendations — not pretend to diagnose medical conditions."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-line/50 bg-surface-100/40 p-6 transition-all hover:border-accent/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/15">
                  <p.icon size={20} className="text-accent" />
                </div>
                <h4 className="text-base font-bold text-white">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Disclaimer */}
        <Reveal delay={400}>
          <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-line/50 bg-surface-100/30 p-6 text-center">
            <p className="text-sm leading-relaxed text-white/40">
              Athlix is a performance optimization tool, not a medical device. It does not diagnose, treat, or cure any
              medical condition. Always consult a qualified healthcare professional for medical concerns.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
