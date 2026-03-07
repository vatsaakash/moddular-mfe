import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/app/globals.scss';

const WithTheme = (Story: React.ComponentType, context: { globals: { [key: string]: string | undefined } }) => {
  const theme = context.globals.theme || 'light';

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
  }, [theme]);

  // Apply explicit styling to inner wrapper to ensure it overrides Storybook's default backgrounds
  return (
    <div className="story-wrapper" style={{ minHeight: '100vh', margin: '-1rem', padding: '1rem', backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', transition: 'background-color 0.3s ease' }}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global canvas theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: '☀️ Light Layout', icon: 'sun' },
          { value: 'dark', title: '🌙 Dark Layout', icon: 'moon' },
          { value: 'system', title: '💻 System Layout', icon: 'browser' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [WithTheme],
  parameters: {
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'padded',
  },
};

export default preview;
