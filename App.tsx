import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AuthPage from '@/pages/AuthPage';
import DashboardPage from '@/pages/DashboardPage';
import HomePage from '@/pages/HomePage';
import type { UserRole } from '@/types/profile';

type Screen = { name: 'home' } | { name: 'auth'; role: UserRole };

function App() {
  const { session, loading } = useAuth();
  const [screen, setScreen] = useState<Screen>({ name: 'home' });

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-forest-100 border-t-forest-700" />
      </div>
    );
  }

  if (session) return <DashboardPage />;

  if (screen.name === 'auth') {
    return <AuthPage role={screen.role} onBack={() => setScreen({ name: 'home' })} />;
  }

  return <HomePage onSelectRole={(role) => setScreen({ name: 'auth', role })} />;
}

export default App;
