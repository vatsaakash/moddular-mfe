import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/app/globals.scss';

const WithTheme = (Story: React.ComponentType, context: { globals: { [key: string]: string | undefined } }) => {
  const theme = context.globals.theme || 'light';
  const brand = context.globals.brand;

  React.useEffect(() => {
    const root = document.documentElement;
    
    // Handle Theme
    if (theme === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }

    // Handle Brand
    if (brand && brand !== 'none') {
      root.setAttribute('data-brand', brand);
    } else {
      root.removeAttribute('data-brand');
    }
  }, [theme, brand]);

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
    brand: {
      description: 'Global brand override',
      toolbar: {
        title: 'Brand',
        icon: 'category',
        items: [
          { value: 'none', title: 'None (Default)', icon: 'close' },
          { value: 'brand1', title: 'Ocean Blue', icon: 'drop' },
          { value: 'brand2', title: 'Sunset Orange', icon: 'bolt' },
          { value: 'brand3', title: 'Forest Green', icon: 'leaf' },
          { value: 'brand4', title: 'Royal Purple', icon: 'star' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'dark',
    brand: 'none',
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
