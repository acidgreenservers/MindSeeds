import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-8 z-[2000] p-2.5 rounded-full border border-border bg-surface text-ink-mid hover:text-ink hover:border-ink-dim transition-all duration-300 flex items-center justify-center group"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <Sun size={16} className="transition-transform duration-500 group-hover:rotate-12" />
      ) : (
        <Moon size={16} className="transition-transform duration-500 group-hover:-rotate-12" />
      )}
    </button>
  );
};
