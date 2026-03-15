'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
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

/** Apply theme to the DOM without any React state updates */
function applyThemeToDOM(t: Theme) {
  const root = document.documentElement;
  if (t === 'system') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', t);
  }
}

function applyBrandToDOM(b?: string) {
  const root = document.documentElement;
  if (b) {
    root.setAttribute('data-brand', b);
  } else {
    root.removeAttribute('data-brand');
  }
}

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  theme?: Theme;
  brand?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  theme: controlledTheme,
  brand,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (controlledTheme !== undefined) return controlledTheme;
    if (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY)) {
      return getStoredTheme();
    }
    return defaultTheme;
  });

  // Track system theme changes so resolvedTheme re-derives
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(getSystemTheme);

  // Derive resolvedTheme from current state — no setState needed
  const activeTheme = controlledTheme !== undefined ? controlledTheme : theme;
  const resolvedTheme = useMemo<'light' | 'dark'>(
    () => (activeTheme === 'system' ? systemTheme : activeTheme),
    [activeTheme, systemTheme]
  );

  const setTheme = useCallback(
    (newTheme: Theme) => {
      if (controlledTheme === undefined) {
        setThemeState(newTheme);
        localStorage.setItem(STORAGE_KEY, newTheme);
      }
    },
    [controlledTheme]
  );

  // Sync DOM attributes when theme or brand changes
  useEffect(() => {
    applyThemeToDOM(activeTheme);
    applyBrandToDOM(brand);
  }, [activeTheme, brand]);

  // Listen for system theme changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => setSystemTheme(mq.matches ? 'dark' : 'light');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: activeTheme, resolvedTheme, setTheme }}>
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
