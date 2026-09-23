import { useEffect, useState, type FormEvent } from 'react';
import { ArrowRight, ArrowLeft, Mail, Lock, Eye, EyeOff, Activity, Moon, HeartPulse, TrendingUp, Loader2, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { navigate } from '@/hooks/useRouter';
import { Logo } from '@/components/ui/Logo';
import { Sparkline } from '@/components/ui/Charts';

const LOGIN_BG = `${import.meta.env.BASE_URL}photos/login.jpg`;

export function LoginPage() {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      setLoading(false);
      return;
    }

    if (mode === 'signin') {
      const { error } = await signIn(email, password);
      setLoading(false);
      if (error) {
        setError(error);
      } else {
        navigate('home');
      }
    } else {
      const { error } = await signUp(email, password);
      setLoading(false);
      if (error) {
        setError(error);
      } else {
        setSuccess('Account created. You can now sign in.');
        setMode('signin');
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-surface-0 text-white">
      {/* Background grid */}
      <div className="absolute inset-0 grid-noise opacity-20" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-5 py-8 lg:px-8">
        <div
          className={`grid w-full overflow-hidden rounded-3xl border border-line/60 bg-surface-50/60 backdrop-blur-xl shadow-float transition-all duration-700 lg:grid-cols-2 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left — visual / brand side */}
          <div className="relative hidden overflow-hidden lg:block">
            <img
              src={LOGIN_BG}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-surface-0/90 via-surface-0/60 to-surface-0/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-0 via-transparent to-transparent" />

            <div className="relative flex h-full flex-col justify-between p-10">
              {/* Top — logo + tagline */}
              <div>
                <Logo size={36} />
                <h2 className="mt-8 font-display text-3xl font-bold leading-tight text-white text-balance">
                  Your body changes every day.
                  <br />
                  <span className="accent-text">Your training should too.</span>
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
                  The AI Performance Agent that continuously adapts your training to your recovery, goals, and life.
                </p>
              </div>

              {/* Bottom — live data preview */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-400">Live Athlete Data</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Moon, label: 'Sleep', value: '7h 48m', data: [6.2, 7.1, 6.8, 7.5, 8.0, 7.8, 7.9] },
                    { icon: HeartPulse, label: 'HRV', value: '58 ms', data: [42, 38, 45, 48, 52, 55, 58] },
                    { icon: Activity, label: 'Recovery', value: '82%', data: [65, 70, 68, 75, 80, 78, 82] },
                    { icon: TrendingUp, label: 'Fitness', value: '+3.4%', data: [40, 42, 45, 48, 52, 58, 62] },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-line/50 bg-surface-100/60 p-3.5 backdrop-blur-md"
                    >
                      <div className="mb-1.5 flex items-center gap-1.5 text-white/40">
                        <m.icon size={11} />
                        <span className="text-[9px] font-medium uppercase tracking-wider">{m.label}</span>
                      </div>
                      <p className="text-lg font-bold text-white">{m.value}</p>
                      <Sparkline data={m.data} width={120} height={22} className="mt-1.5" animate={false} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — form side */}
          <div className="flex flex-col justify-center p-8 sm:p-12">
            {/* Back to home */}
            <button
              onClick={() => navigate('home')}
              className="mb-8 flex items-center gap-2 text-sm font-medium text-white/40 transition-colors hover:text-white"
            >
              <ArrowLeft size={15} />
              Back to home
            </button>

            {/* Mobile logo */}
            <div className="mb-8 lg:hidden">
              <Logo size={32} />
            </div>

            <h1 className="font-display text-3xl font-bold text-white">
              {mode === 'signin' ? 'Welcome back.' : 'Create your account.'}
            </h1>
            <p className="mt-2 text-sm text-white/45">
              {mode === 'signin'
                ? 'Sign in to access your AI Performance Agent.'
                : 'Start training with an AI that adapts to you every day.'}
            </p>

            {/* Success message */}
            {success && (
              <div className="mt-6 flex items-center gap-2.5 rounded-xl border border-accent/25 bg-accent/[0.05] px-4 py-3">
                <CheckCircle2 size={16} className="text-accent" />
                <span className="text-sm text-white/70">{success}</span>
              </div>
            )}

            {/* Error message */}
            {error && (
              <div className="mt-6 rounded-xl border border-red-500/25 bg-red-500/[0.06] px-4 py-3">
                <span className="text-sm text-red-400/90">{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">
                  Email
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@athlix.app"
                    className="w-full rounded-xl border border-line bg-surface-100/60 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/25 transition-all focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/15"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">
                  Password
                </label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-line bg-surface-100/60 py-3 pl-11 pr-11 text-sm text-white placeholder:text-white/25 transition-all focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/15"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 transition-colors hover:text-white/60"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-bold text-surface-0 transition-all hover:bg-accent-200 hover:shadow-glow-sm active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    {mode === 'signin' ? 'Signing in…' : 'Creating account…'}
                  </>
                ) : (
                  <>
                    {mode === 'signin' ? 'Sign In' : 'Create Account'}
                    <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>

            {/* Mode switch */}
            <p className="mt-6 text-center text-sm text-white/40">
              {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => {
                  setMode(mode === 'signin' ? 'signup' : 'signin');
                  setError(null);
                  setSuccess(null);
                }}
                className="font-semibold text-accent-400 transition-colors hover:text-accent"
              >
                {mode === 'signin' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
