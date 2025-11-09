import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import DesignSystemDoc from './components/DesignSystemDoc';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'system';
    setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = theme === 'dark' || (theme === 'system' && prefersDark);

    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light'));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-black dark:text-white">
      {/* Theme toggle */}
      <button
        aria-label="Toggle theme"
        onClick={cycleTheme}
        className="fixed right-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-2 text-xs font-semibold shadow-sm backdrop-blur-md transition hover:bg-white dark:border-white/10 dark:bg-white/5"
      >
        {theme === 'dark' ? <Moon size={16} /> : theme === 'light' ? <Sun size={16} /> : prefersSystemIcon()}
        <span className="hidden sm:inline">{theme === 'system' ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}</span>
      </button>

      <Hero />
      <Services />
      <Showcase />
      <DesignSystemDoc />

      <footer className="w-full border-t border-slate-200/80 bg-white/70 py-8 text-center text-xs text-slate-600 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
        © {new Date().getFullYear()} Piara Agency 2.0 — Built with motion and intelligence.
      </footer>
    </div>
  );
}

function prefersSystemIcon() {
  const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? <Moon size={16} /> : <Sun size={16} />;
}

export default App;
