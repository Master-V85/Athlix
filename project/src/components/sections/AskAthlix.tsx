import { Send, Brain, User } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const messages = [
  {
    role: 'user',
    text: 'I only have 30 minutes today.',
  },
  {
    role: 'athlix',
    text: "I shortened today's strength session while keeping the highest-value compound movements. Accessories were moved to Saturday.",
    action: 'Plan updated',
  },
  {
    role: 'user',
    text: "I'm traveling next week and won't have a gym.",
  },
  {
    role: 'athlix',
    text: 'I rebuilt next week using running, mobility and bodyweight sessions. Your key threshold workout remains unchanged.',
    action: 'Next week rebuilt',
  },
  {
    role: 'user',
    text: 'My legs feel unusually heavy today.',
  },
  {
    role: 'athlix',
    text: "I've reduced today's running intensity. If the fatigue continues tomorrow, I'll adjust your weekly load.",
    action: 'Intensity reduced',
  },
];

export function AskAthlix() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Ask Athlix"
          title="Your coach is always in context."
          subtitle="Athlix doesn't just answer questions — it takes action. Every conversation is grounded in your full training history and current state."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:items-center">
          {/* Chat UI */}
          <Reveal>
            <div className="glass-strong rounded-2xl shadow-float">
              <div className="flex items-center justify-between border-b border-line/60 px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15">
                    <Brain size={14} className="text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-white">Athlix Chat</span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-medium text-white/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Context-aware
                </span>
              </div>

              <div className="space-y-4 p-5 max-h-[480px] overflow-y-auto">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] ${msg.role === 'user' ? '' : ''}`}>
                      {msg.role === 'athlix' && (
                        <div className="mb-1.5 flex items-center gap-1.5">
                          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-accent/10">
                            <Brain size={11} className="text-accent" />
                          </div>
                          <span className="text-[10px] font-semibold text-accent-400">Athlix</span>
                        </div>
                      )}
                      <div
                        className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-surface-300/60 text-white/80'
                            : 'border border-line/50 bg-surface-100/60 text-white/70'
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.role === 'athlix' && msg.action && (
                        <div className="mt-1.5 flex items-center gap-1.5">
                          <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent-400">
                            ✓ {msg.action}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input bar */}
              <div className="border-t border-line/60 p-4">
                <div className="flex items-center gap-3 rounded-xl border border-line/50 bg-surface-100/40 px-4 py-2.5">
                  <input
                    type="text"
                    placeholder="Ask Athlix anything about your training…"
                    className="flex-1 bg-transparent text-sm text-white/70 placeholder:text-white/30 focus:outline-none"
                    readOnly
                  />
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-surface-0 transition-transform hover:scale-105 active:scale-95">
                    <Send size={14} />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="space-y-6">
            <Reveal>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Conversations that change your plan.
              </h3>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-base leading-relaxed text-white/55">
                Athlix understands your training history, recovery state, and goals. When you tell it something, it
                doesn't just respond — it acts.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="space-y-3">
                {[
                  { icon: User, text: 'Tell Athlix about your day, travel, or fatigue' },
                  { icon: Brain, text: 'Athlix interprets it in context of your full profile' },
                  { icon: Send, text: 'Your plan is updated — not just acknowledged' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-200/60">
                      <item.icon size={14} className="text-accent" />
                    </div>
                    <span className="text-sm text-white/60">{item.text}</span>
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
