import { Check, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

const plans = [
  {
    name: 'Athlix Free',
    price: '0',
    period: '',
    features: [
      'Activity tracking',
      'Basic insights',
      'Weekly summary',
      'Basic goal tracking',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Athlix Pro',
    price: '19',
    period: '/month',
    features: [
      'Everything in Free',
      'AI Performance Agent',
      'Adaptive Training',
      'Daily Readiness',
      'Goal Engine',
      'Athlix Chat',
      'Advanced Analytics',
      'Wearable Integrations',
      'Weekly Performance Review',
    ],
    cta: 'Start Athlix Pro',
    highlighted: true,
  },
  {
    name: 'Athlix Performance',
    price: '39',
    period: '/month',
    features: [
      'Everything in Pro',
      'Performance Twin',
      'Advanced Race Planning',
      'Training Experiments',
      'Multi-Sport Planning',
      'Advanced Performance Analytics',
      'Priority AI',
    ],
    cta: 'Go Performance',
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-surface-50/30" />
      <div className="absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          center
          eyebrow="Pricing"
          title="Choose your level of performance."
          subtitle="Start free. Upgrade when you're ready to train with an AI agent that adapts to you every single day."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-2xl p-7 transition-all ${
                  plan.highlighted
                    ? 'border-2 border-accent/40 bg-surface-100/80 shadow-glow-sm lg:scale-[1.03]'
                    : 'border border-line/50 bg-surface-100/40 hover:border-line-strong'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-surface-0">
                      <Sparkles size={12} />
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="font-display text-lg font-bold text-white">{plan.name}</h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-white">€{plan.price}</span>
                  <span className="text-sm text-white/40">{plan.period}</span>
                </div>

                <div className="my-6 h-px bg-line/40" />

                <ul className="flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${plan.highlighted ? 'bg-accent/15' : 'bg-surface-300/50'}`}>
                        <Check size={10} className={plan.highlighted ? 'text-accent' : 'text-white/50'} />
                      </div>
                      <span className="text-sm text-white/60">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="#cta"
                    variant={plan.highlighted ? 'primary' : 'secondary'}
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Human coaching */}
        <Reveal delay={300}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line/50 bg-surface-100/40 p-6 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-300/50">
                <Sparkles size={20} className="text-white/60" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Human Coaching</h4>
                <p className="text-sm text-white/45">Work with a certified coach powered by Athlix intelligence.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/40">Starting from</span>
              <span className="font-display text-2xl font-bold text-white">€99<span className="text-sm font-normal text-white/40">/month</span></span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
