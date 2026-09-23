import { Watch, Heart, Activity, Moon, Bike, Calendar, Check } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const integrations = [
  { name: 'Garmin', icon: Watch, status: 'available' },
  { name: 'Apple Health', icon: Heart, status: 'available' },
  { name: 'WHOOP', icon: Activity, status: 'available' },
  { name: 'Oura', icon: Moon, status: 'available' },
  { name: 'Strava', icon: Bike, status: 'available' },
  { name: 'TrainingPeaks', icon: Activity, status: 'available' },
  { name: 'Google Calendar', icon: Calendar, status: 'available' },
  { name: 'Polar', icon: Heart, status: 'coming' },
  { name: 'Coros', icon: Watch, status: 'coming' },
  { name: 'Fitbit', icon: Activity, status: 'coming' },
];

export function Integrations() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-surface-50/30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          center
          eyebrow="Integrations"
          title="Your performance data. Finally connected."
          subtitle="Athlix pulls continuously from the devices and platforms you already use — no manual entry, no silos."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {integrations.map((int, i) => (
            <Reveal key={int.name} delay={i * 60}>
              <div
                className={`group flex flex-col items-center gap-3 rounded-2xl border p-6 transition-all ${
                  int.status === 'coming'
                    ? 'border-line/30 bg-surface-100/20 opacity-50'
                    : 'border-line/50 bg-surface-100/40 hover:border-accent/25 hover:bg-surface-100/70'
                }`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${int.status === 'coming' ? 'bg-surface-300/30' : 'bg-surface-300/50 group-hover:bg-accent/10'}`}>
                  <int.icon size={20} className={int.status === 'coming' ? 'text-white/30' : 'text-white/60 group-hover:text-accent'} />
                </div>
                <span className={`text-sm font-semibold ${int.status === 'coming' ? 'text-white/35' : 'text-white/75'}`}>
                  {int.name}
                </span>
                {int.status === 'coming' ? (
                  <span className="rounded-full bg-surface-300/40 px-2.5 py-0.5 text-[10px] font-medium text-white/35">
                    Coming Soon
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[10px] font-medium text-accent-400">
                    <Check size={10} />
                    Connected
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
