'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeName, DEFAULT_THEME, themes } from '@/lib/themes';

interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: typeof themes;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    if (typeof window === 'undefined') {
      return DEFAULT_THEME;
    }

    const stored = window.localStorage.getItem(
      'workmanwise-theme',
    ) as ThemeName | null;

    return stored && themes[stored] ? stored : DEFAULT_THEME;
  });
  const [mounted, setMounted] = useState(false);

  // Mark mounted after hydration.
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  // Update document theme and localStorage
  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('workmanwise-theme', newTheme);
  };

  // Apply theme on changes (after mount)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
