import { Quote } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const insights = [
  {
    text: 'Your lower-body performance typically returns to baseline 61 hours after high-intensity strength sessions.',
    tag: 'Recovery Response',
  },
  {
    text: 'Your interval performance improves significantly after two consecutive nights above 7 hours of sleep.',
    tag: 'Sleep → Performance',
  },
  {
    text: 'Running immediately after upper-body strength has no meaningful impact on your pace.',
    tag: 'Interference Effect',
  },
];

export function PersonalResponse() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-surface-50/30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Personal Response Model"
          title="Not personalized. Individualized."
          subtitle="Over time Athlix learns your individual response to training, recovery and lifestyle — creating recommendations that become increasingly specific to you."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {insights.map((insight, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-line/50 bg-surface-100/50 p-6 transition-all hover:border-accent/25 hover:bg-surface-100/80">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <Quote size={16} className="text-accent" />
                  </div>
                  <span className="rounded-full bg-surface-300/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                    {insight.tag}
                  </span>
                </div>
                <p className="flex-1 text-base leading-relaxed text-white/70">"{insight.text}"</p>
                <div className="mt-5 flex items-center gap-2">
                  <span className="text-xs font-medium text-accent-400">Athlix Insight</span>
                  <span className="text-xs text-white/30">· discovered from your data</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
