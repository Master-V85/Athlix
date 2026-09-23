import { AuthProvider } from '@/hooks/useAuth';
import { useRouter } from '@/hooks/useRouter';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LoginPage } from '@/components/LoginPage';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { AthlixLoop } from '@/components/sections/AthlixLoop';
import { PerformanceTwin } from '@/components/sections/PerformanceTwin';
import { PersonalResponse } from '@/components/sections/PersonalResponse';
import { DailyCoach } from '@/components/sections/DailyCoach';
import { WhatChanged } from '@/components/sections/WhatChanged';
import { GoalEngine } from '@/components/sections/GoalEngine';
import { LifeAware } from '@/components/sections/LifeAware';
import { AskAthlix } from '@/components/sections/AskAthlix';
import { Experiments } from '@/components/sections/Experiments';
import { WeeklyReview } from '@/components/sections/WeeklyReview';
import { MultiSport } from '@/components/sections/MultiSport';
import { ForCoaches } from '@/components/sections/ForCoaches';
import { CoachAI } from '@/components/sections/CoachAI';
import { Integrations } from '@/components/sections/Integrations';
import { TrustScience } from '@/components/sections/TrustScience';
import { Pricing } from '@/components/sections/Pricing';
import { FinalCTA } from '@/components/sections/FinalCTA';

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <AthlixLoop />
        <PerformanceTwin />
        <PersonalResponse />
        <DailyCoach />
        <WhatChanged />
        <GoalEngine />
        <LifeAware />
        <AskAthlix />
        <Experiments />
        <WeeklyReview />
        <MultiSport />
        <ForCoaches />
        <CoachAI />
        <Integrations />
        <TrustScience />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const route = useRouter();

  return (
    <ErrorBoundary>
      <AuthProvider>
        <div className="min-h-screen bg-surface-0 text-white antialiased">
          {route === 'login' ? <LoginPage /> : <LandingPage />}
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
