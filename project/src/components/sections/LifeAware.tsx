import { Calendar, Plane, Dumbbell, Clock, Moon, Check } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const days = [
  {
    day: 'Monday',
    context: 'Work until 18:00',
    constraint: 'Available: 45 minutes',
    icon: Clock,
    athlix: 'Strength Session',
    accent: true,
  },
  {
    day: 'Tuesday',
    context: 'Flight 06:30',
    constraint: 'Limited sleep window',
    icon: Plane,
    athlix: 'Recovery Day',
    accent: false,
  },
  {
    day: 'Wednesday',
    context: 'Open evening',
    constraint: 'Full availability',
    icon: Calendar,
    athlix: 'Long Session',
    accent: true,
  },
];

export function LifeAware() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-surface-50/30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Life-Aware Training"
          title="Built around your life — not against it."
          subtitle="Meetings change. Flights happen. Sleep suffers. Equipment disappears. Athlix rebuilds your training automatically."
        />

        <div className="mt-16 max-w-3xl mx-auto space-y-4">
          {days.map((d, i) => (
            <Reveal key={d.day} delay={i * 100}>
              <div className="grid grid-cols-[auto_1fr_1fr_auto] items-center gap-4 rounded-2xl border border-line/50 bg-surface-100/40 p-5 transition-all hover:border-line-strong lg:gap-6">
                {/* Day */}
                <div className="w-24 lg:w-32">
                  <p className="font-display text-base font-bold text-white">{d.day}</p>
                </div>

                {/* Life context */}
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-300/50">
                    <d.icon size={15} className="text-white/50" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/70">{d.context}</p>
                    <p className="text-xs text-white/35">{d.constraint}</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden items-center justify-center text-white/20 lg:flex">
                  →
                </div>

                {/* Athlix decision */}
                <div className={`flex items-center gap-2.5 rounded-xl px-4 py-2.5 ${d.accent ? 'border border-accent/25 bg-accent/[0.05]' : 'border border-line/50 bg-surface-200/40'}`}>
                  <Check size={14} className={d.accent ? 'text-accent' : 'text-white/40'} />
                  <span className={`text-sm font-semibold ${d.accent ? 'text-white' : 'text-white/60'}`}>{d.athlix}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-12 text-center text-lg font-medium text-white/55 lg:max-w-2xl lg:mx-auto">
            Your calendar is part of the training plan. Athlix reads your schedule and adjusts sessions to fit the time
            you actually have.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
