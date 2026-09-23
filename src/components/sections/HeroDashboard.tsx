import { Sparkline, RadialGauge } from '@/components/ui/Charts';
import { ArrowRight, Moon, Activity, TrendingUp, Zap, Dumbbell, Brain } from 'lucide-react';

const hrvData = [42, 38, 45, 41, 48, 52, 49, 55, 51, 58, 54, 60];
const sleepData = [6.2, 7.1, 6.8, 7.5, 8.0, 7.8, 7.2, 7.9, 8.1, 7.7, 7.8, 7.8];
const loadData = [62, 58, 70, 75, 68, 80, 85, 78, 72, 88, 92, 85];

export function HeroDashboard() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-accent/10 via-transparent to-transparent blur-3xl" />

      <div className="relative glass-strong rounded-2xl shadow-float">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-line/60 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="text-[11px] font-medium text-white/30">athlix.app / dashboard</span>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            <span className="text-[10px] font-medium text-white/40">Synced</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 p-5">
          {/* Greeting */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-white/40">Good morning, Alex</p>
              <h3 className="font-display text-lg font-bold text-white">Today's Performance Brief</h3>
            </div>
            <span className="rounded-full bg-surface-300/60 px-2.5 py-1 text-[10px] font-medium text-white/50">
              Tue, Sep 23
            </span>
          </div>

          {/* Readiness + metrics grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="col-span-2 flex items-center gap-4 rounded-xl border border-line/60 bg-surface-100/60 p-4 sm:col-span-1">
              <RadialGauge value={82} size={88} stroke={7} label="82" sublabel="Readiness" />
            </div>
            <div className="rounded-xl border border-line/60 bg-surface-100/60 p-4">
              <div className="mb-1 flex items-center gap-1.5 text-white/40">
                <Moon size={12} />
                <span className="text-[10px] font-medium uppercase tracking-wider">Sleep</span>
              </div>
              <p className="text-xl font-bold text-white">7h 48m</p>
              <Sparkline data={sleepData} width={90} height={24} className="mt-2" />
            </div>
            <div className="rounded-xl border border-line/60 bg-surface-100/60 p-4">
              <div className="mb-1 flex items-center gap-1.5 text-white/40">
                <Activity size={12} />
                <span className="text-[10px] font-medium uppercase tracking-wider">HRV</span>
              </div>
              <p className="text-xl font-bold text-white">58 <span className="text-xs font-medium text-white/40">ms</span></p>
              <Sparkline data={hrvData} width={90} height={24} className="mt-2" />
            </div>
            <div className="rounded-xl border border-line/60 bg-surface-100/60 p-4">
              <div className="mb-1 flex items-center gap-1.5 text-white/40">
                <TrendingUp size={12} />
                <span className="text-[10px] font-medium uppercase tracking-wider">Load</span>
              </div>
              <p className="text-xl font-bold text-white">Optimal</p>
              <Sparkline data={loadData} width={90} height={24} stroke="#aee020" className="mt-2" />
            </div>
          </div>

          {/* Today's session */}
          <div className="rounded-xl border border-accent/20 bg-accent/[0.03] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Dumbbell size={15} />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">Today's Session</p>
                  <h4 className="text-sm font-bold text-white">Upper Body Strength + Zone 2</h4>
                </div>
              </div>
              <span className="text-xs font-semibold text-white/50">48 min</span>
            </div>
          </div>

          {/* Athlix adjustment card */}
          <div className="rounded-xl border border-line/60 bg-surface-100/60 p-4">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/15">
                <Brain size={13} className="text-accent" />
              </div>
              <span className="text-xs font-semibold text-accent-400">Athlix adjusted your plan</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-line/50 bg-surface-0/40 p-3">
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/35">Previous</p>
                <p className="mt-1 text-sm font-semibold text-white/50 line-through">Heavy Lower Body</p>
              </div>
              <div className="rounded-lg border border-accent/20 bg-accent/[0.04] p-3">
                <p className="text-[10px] font-medium uppercase tracking-wider text-accent-400">New</p>
                <p className="mt-1 text-sm font-semibold text-white">Upper Strength + Zone 2</p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-white/45">
              "Your lower-body fatigue remains elevated after yesterday's interval session."
            </p>
          </div>
        </div>
      </div>

      {/* Floating side card — fitness trend */}
      <div className="absolute -right-4 -bottom-6 hidden w-48 glass-strong rounded-xl p-4 shadow-float md:block lg:-right-12 animate-float">
        <div className="mb-2 flex items-center gap-2">
          <Zap size={13} className="text-accent" />
          <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">Fitness Trend</span>
        </div>
        <p className="text-2xl font-bold text-white">+3.4%</p>
        <p className="text-[10px] text-white/35">vs last month</p>
        <Sparkline data={[40, 42, 41, 45, 48, 47, 52, 55, 54, 58, 60, 62]} width={160} height={32} className="mt-2" />
      </div>
    </div>
  );
}
