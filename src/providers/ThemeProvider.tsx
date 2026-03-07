'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'moddular-mfe-theme';

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }
  return 'system';
}

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  theme?: Theme;
  brand?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = 'dark', // Changed default from 'system' to 'dark'
  theme: controlledTheme,
  brand,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(controlledTheme || defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');

  const applyTheme = useCallback((t: Theme) => {
    const resolved = t === 'system' ? getSystemTheme() : t;
    setResolvedTheme(resolved);

    const root = document.documentElement;
    if (t === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', t);
    }
  }, []);

  const applyBrand = useCallback((b?: string) => {
    const root = document.documentElement;
    if (b) {
      root.setAttribute('data-brand', b);
    } else {
      root.removeAttribute('data-brand');
    }
  }, []);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      // Only update local state/storage if not controlled
      if (controlledTheme === undefined) {
        setThemeState(newTheme);
        localStorage.setItem(STORAGE_KEY, newTheme);
        applyTheme(newTheme);
      }
    },
    [controlledTheme, applyTheme]
  );

  // Initial mount and prop sync
  useEffect(() => {
    const stored = getStoredTheme();
    // Priority: Controlled -> Stored (if not controlled) -> Default
    const initialTheme = controlledTheme !== undefined 
      ? controlledTheme 
      : (localStorage.getItem(STORAGE_KEY) ? stored : defaultTheme);
    
    setThemeState(initialTheme);
    applyTheme(initialTheme);
    applyBrand(brand);
  }, [controlledTheme, defaultTheme, brand, applyTheme, applyBrand]);

  // Listen for system theme changes (only matters if resolved theme is 'system')
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      const currentTheme = controlledTheme || theme;
      if (currentTheme === 'system') {
        applyTheme('system');
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme, controlledTheme, applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme: controlledTheme || theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
