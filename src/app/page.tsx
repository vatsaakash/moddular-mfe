'use client';

import { useState } from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import { FAQ } from '@/components/FAQ';
import { Accordion } from '@/components/Accordion';
import { Ratings } from '@/components/Ratings';
import styles from './page.module.scss';

const faqItems = [
  {
    question: 'What is Moddular MFE?',
    answer:
      'Moddular MFE is an open-source collection of reusable, accessible, and themeable micro-frontend components built with Next.js and SCSS.',
  },
  {
    question: 'How do I install a component?',
    answer:
      'Each component is self-contained. Copy the component folder into your project and import it. All styling uses CSS custom properties so themes work out of the box.',
  },
  {
    question: 'Does it support dark mode?',
    answer:
      'Yes! Every component automatically adapts to light, dark, and system themes using CSS custom properties and the built-in ThemeProvider.',
  },
  {
    question: 'Can I customize the colors for my brand?',
    answer:
      'Absolutely. The SCSS system includes brand override maps. Set a data-brand attribute on your HTML element to swap the entire color palette for white-label support.',
  },
];

const accordionItems = [
  {
    title: 'Fully Accessible',
    content:
      'All components follow WAI-ARIA patterns with proper keyboard navigation, focus management, and screen reader support.',
  },
  {
    title: 'Theme-Ready',
    content:
      'Built with CSS custom properties, supporting light, dark, and system themes out of the box. White-label ready with brand override maps.',
  },
  {
    title: 'Responsive by Default',
    content:
      'Every component adapts to all screen sizes using mobile-first responsive design with SCSS breakpoint mixins.',
  },
  {
    title: 'Performance Optimized',
    content:
      'Lightweight, tree-shakeable components with no external runtime dependencies. SCSS modules ensure zero unused CSS.',
    disabled: false,
  },
];

export default function Home() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  type LocalTheme = 'inherit' | 'light' | 'dark';
  const [faqTheme, setFaqTheme] = useState<LocalTheme>('inherit');
  const [accordionTheme, setAccordionTheme] = useState<LocalTheme>('inherit');
  const [ratingsTheme, setRatingsTheme] = useState<LocalTheme>('inherit');

  const LocalThemeToggle = ({ value, onChange }: { value: LocalTheme, onChange: (val: LocalTheme) => void }) => (
    <div className={styles.localThemeToggle}>
      {(['inherit', 'light', 'dark'] as const).map(t => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`${styles.localThemeBtn} ${value === t ? styles.active : ''}`}
        >
          {t}
        </button>
      ))}
    </div>
  );

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Open Source Component Library</span>
          <h1 className={styles.title}>
            <span className={styles.gradient}>Moddular</span> MFE
          </h1>
          <p className={styles.subtitle}>
            A collection of accessible, themeable, and responsive micro-frontend
            components built with Next.js &amp; SCSS.
          </p>
          <div className={styles.actions}>
            <a href="#components" className={styles.btnPrimary}>
              Explore Components
            </a>
            <a
              href="https://github.com/your-username/moddular-mfe"
              className={styles.btnSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Theme Toggle */}
      <section className={styles.themeSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Theme Toggle</h2>
          <p className={styles.sectionDesc}>
            Switch between themes — all components react instantly.
          </p>
          <div className={styles.themeToggle}>
            {(['light', 'dark', 'system'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`${styles.themeBtn} ${
                  theme === t ? styles.active : ''
                }`}
                aria-pressed={theme === t}
              >
                {t === 'light' && '☀️'}
                {t === 'dark' && '🌙'}
                {t === 'system' && '💻'}
                <span>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
              </button>
            ))}
          </div>
          <p className={styles.currentTheme}>
            Active: <strong>{resolvedTheme}</strong>
          </p>
        </div>
      </section>

      {/* Components Demo */}
      <section id="components" className={styles.components}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Components</h2>
          <p className={styles.sectionDesc}>
            Interactive demos — try toggling themes to see live adaptation.
          </p>

          {/* FAQ Demo */}
          <div className={styles.demoBlock}>
            <div className={styles.demoHeader}>
              <div>
                <h3 className={styles.demoTitle}>FAQ</h3>
                <p className={styles.demoVariant}>Variant: card</p>
              </div>
              <LocalThemeToggle value={faqTheme} onChange={setFaqTheme} />
            </div>
            <FAQ
              items={faqItems}
              variant="card"
              allowMultiple
              theme={faqTheme === 'inherit' ? undefined : faqTheme}
            />
          </div>

          {/* Accordion Demo */}
          <div className={styles.demoBlock}>
            <div className={styles.demoHeader}>
              <div>
                <h3 className={styles.demoTitle}>Accordion</h3>
                <p className={styles.demoVariant}>Variant: separated</p>
              </div>
              <LocalThemeToggle value={accordionTheme} onChange={setAccordionTheme} />
            </div>
            <Accordion
              items={accordionItems}
              variant="separated"
              defaultOpen={[0]}
              theme={accordionTheme === 'inherit' ? undefined : accordionTheme}
            />
          </div>

          {/* Ratings Demo */}
          <div className={styles.demoBlock}>
            <div className={styles.demoHeader}>
              <div>
                <h3 className={styles.demoTitle}>Ratings</h3>
                <p className={styles.demoVariant}>Sizes & Icons</p>
              </div>
              <LocalThemeToggle value={ratingsTheme} onChange={setRatingsTheme} />
            </div>
            <div className={styles.ratingsRow}>
              <div>
                <p className={styles.demoVariant}>Star (interactive)</p>
                <Ratings 
                  max={5} 
                  defaultValue={3} 
                  showLabel 
                  size="lg" 
                  theme={ratingsTheme === 'inherit' ? undefined : ratingsTheme}
                />
              </div>
              <div>
                <p className={styles.demoVariant}>Heart (readonly)</p>
                <Ratings
                  max={5}
                  value={4}
                  icon="heart"
                  readonly
                  showLabel
                  size="lg"
                  theme={ratingsTheme === 'inherit' ? undefined : ratingsTheme}
                />
              </div>
              <div>
                <p className={styles.demoVariant}>Circle (small)</p>
                <Ratings 
                  max={5} 
                  defaultValue={2} 
                  icon="circle" 
                  showLabel 
                  size="sm" 
                  theme={ratingsTheme === 'inherit' ? undefined : ratingsTheme}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storybook Section */}
      <section className={styles.storybookSection}>
        <div className={styles.storybookCard}>
          <h3>Interactive Storybook</h3>
          <p>
            Every component is fully documented in our interactive Storybook. 
            Tweak props, test accessibility, and explore all variations live.
          </p>
          <a href="/storybook" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
            Open Storybook ↗
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          Built with ❤️ using Next.js &amp; SCSS —{' '}
          <a
            href="https://github.com/your-username/moddular-mfe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute on GitHub
          </a>
        </p>
      </footer>
    </main>
  );
}
