'use client';

import { useState } from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import { FAQ } from '@/components/FAQ';
import { Accordion } from '@/components/Accordion';
import { Ratings } from '@/components/Ratings';
import { ProfileCard } from '@/components/ProfileCard';
import { Toast } from '@/components/Toast';
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

type LocalTheme = 'inherit' | 'light' | 'dark';
type ToastKind = 'success' | 'error' | 'info' | 'warning';

interface ToastInstance {
  id: number;
  kind: ToastKind;
}

const toastCopy: Record<ToastKind, { title: string; message: string }> = {
  success: {
    title: 'Changes published',
    message: 'Your latest content has been saved and deployed.',
  },
  error: {
    title: 'Publish failed',
    message: 'Something went wrong while publishing. Try again.',
  },
  info: {
    title: 'Background sync',
    message: 'We are syncing your latest metrics in the background.',
  },
  warning: {
    title: 'Low storage',
    message: 'You are close to your project storage limit.',
  },
};

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

export default function Home() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [faqTheme, setFaqTheme] = useState<LocalTheme>('inherit');
  const [accordionTheme, setAccordionTheme] = useState<LocalTheme>('inherit');
  const [ratingsTheme, setRatingsTheme] = useState<LocalTheme>('inherit');
  const [profileTheme, setProfileTheme] = useState<LocalTheme>('inherit');
  const [toastTheme, setToastTheme] = useState<LocalTheme>('inherit');
  const [toasts, setToasts] = useState<ToastInstance[]>([]);

  const triggerToast = (kind: ToastKind) => {
    setToasts((prev) => {
      const next = [...prev, { id: Date.now() + Math.floor(Math.random() * 1000), kind }];
      return next.slice(-4);
    });
  };

  const dismissToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

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
            <a href="storybook/" className={styles.btnSecondary} target="_blank" rel="noopener noreferrer">
              Storybook ↗
            </a>
            <a
              href="https://github.com/vatsaakash/moddular-mfe"
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
                className={`${styles.themeBtn} ${theme === t ? styles.active : ''
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

          {/* ProfileCard Demo */}
          <div className={styles.demoBlock}>
            <div className={styles.demoHeader}>
              <div>
                <h3 className={styles.demoTitle}>ProfileCard</h3>
                <p className={styles.demoVariant}>Social Media Integration</p>
              </div>
              <LocalThemeToggle value={profileTheme} onChange={setProfileTheme} />
            </div>
            <div className={styles.profileRow}>
              <ProfileCard
                // name="Akash Vatsa"
                // bio="Entrepreneur @ ICW Technologies. Building Moddular MFE."
                // image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"
                variant="full"
                isVerified
                // stats={{ followers: '1k+', posts: 24, following: 400 }}
                profileUrl="https://github.com/vatsaakash"
              // theme={profileTheme === 'inherit' ? undefined : profileTheme}
              />
              <ProfileCard
                name="Akash Vatsa"
                bio="Full Stack Developer focused on React & Web Performance. Founder of ICW Technologies."
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                variant="split"
                isVerified
                stats={{ followers: '2k+', posts: 56, following: 500 }}
                profileUrl="https://www.linkedin.com/in/vatsaakash/"
                theme={profileTheme === 'inherit' ? undefined : profileTheme}
              />
            </div>
          </div>

          {/* Toast Demo */}
          <div className={styles.demoBlock}>
            <div className={styles.demoHeader}>
              <div>
                <h3 className={styles.demoTitle}>Toast</h3>
                <p className={styles.demoVariant}>Interactive Notification Stack</p>
              </div>
              <LocalThemeToggle value={toastTheme} onChange={setToastTheme} />
            </div>
            <div className={styles.toastActions}>
              <button type="button" className={styles.toastBtn} onClick={() => triggerToast('success')}>
                Success Toast
              </button>
              <button type="button" className={styles.toastBtn} onClick={() => triggerToast('info')}>
                Info Toast
              </button>
              <button type="button" className={styles.toastBtn} onClick={() => triggerToast('warning')}>
                Warning Toast
              </button>
              <button type="button" className={styles.toastBtn} onClick={() => triggerToast('error')}>
                Error Toast
              </button>
            </div>
            <div className={styles.toastStack} aria-live="polite" aria-label="Toast notification examples">
              {toasts.length === 0 && (
                <p className={styles.toastHint}>Trigger a toast variant to preview appearance and behavior.</p>
              )}
              {toasts.map((toast) => (
                <Toast
                  key={toast.id}
                  title={toastCopy[toast.kind].title}
                  message={toastCopy[toast.kind].message}
                  variant={toast.kind}
                  duration={4500}
                  onClose={() => dismissToast(toast.id)}
                  theme={toastTheme === 'inherit' ? undefined : toastTheme}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className={styles.usageSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Ready to Integrate?</h2>
          <p className={styles.sectionDesc}>
            Our components are built for maximum reusability. Here is how to get started in seconds.
          </p>

          <div className={styles.usageGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepInfo}>
                <h4>Install Dependency</h4>
                <p>Add the library to your React project directly via GitHub.</p>
                <div className={styles.codeBox}>
                  <code>npm install https://github.com/vatsaakash/moddular-mfe</code>
                </div>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepInfo}>
                <h4>Wrap your App</h4>
                <p>Add the ThemeProvider for automatic dark/light mode support.</p>
                <div className={styles.codeBox}>
                  <code>{`import { ThemeProvider } from 'moddular-mfe';`}</code>
                </div>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepInfo}>
                <h4>Import & Use</h4>
                <p>
                  Drop any component into your UI and customize via props.
                  View the <a href="storybook/" target="_blank" rel="noopener noreferrer"><strong>Storybook code</strong></a> for live snippets.
                </p>
                <div className={styles.codeBox}>
                  <code>{`import { Ratings } from 'moddular-mfe';\n\n<Ratings\n  defaultValue={3}\n  icon="star"\n  max={5}\n  showLabel\n  size="md"\n/>`}</code>
                </div>
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
          <a href="storybook/" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
            Open Storybook ↗
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>
            &copy; {new Date().getFullYear()} <strong>Akash Ranjan</strong> (vatsaakash). Built with ❤️ using Next.js &amp; SCSS.
          </p>
          <div className={styles.footerLinks}>
            <a
              href="https://github.com/vatsaakash"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile ↗
            </a>
            <span className={styles.divider}>•</span>
            <a
              href="https://github.com/vatsaakash/moddular-mfe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Repository
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
