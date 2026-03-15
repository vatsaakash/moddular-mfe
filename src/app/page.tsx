'use client';

import { useState } from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import { FAQ } from '@/components/FAQ';
import { Accordion } from '@/components/Accordion';
import { Ratings } from '@/components/Ratings';
import { ProfileCard } from '@/components/ProfileCard';
import { HeroBanner } from '@/components/HeroBanner';
import styles from './page.module.scss';
import { Activity, BarChart, Users, Zap } from 'lucide-react';

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

  const [heroBannerTheme, setHeroBannerTheme] = useState<LocalTheme>('inherit');
  const [faqTheme, setFaqTheme] = useState<LocalTheme>('inherit');
  const [accordionTheme, setAccordionTheme] = useState<LocalTheme>('inherit');
  const [ratingsTheme, setRatingsTheme] = useState<LocalTheme>('inherit');
  const [profileTheme, setProfileTheme] = useState<LocalTheme>('inherit');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getThemeProp = (val: LocalTheme) => val === 'inherit' ? undefined : val as 'light' | 'dark';

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
          <p className={styles.currentTheme} suppressHydrationWarning>
            Active: <strong suppressHydrationWarning>{resolvedTheme}</strong>
          </p>
        </div>
      </section>

      {/* Components Demo */}
      <section id="components" className={styles.components}>
        <div className={styles.docsContainer}>
          <h2 className={styles.sectionTitle}>Components</h2>
          <p className={styles.sectionDesc}>
            Interactive demos — try toggling themes to see live adaptation.
          </p>

          <div className={styles.componentsLayout}>
            {/* Mobile Sidebar Toggle */}
            <button
              type="button"
              className={styles.mobileSidebarToggle}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-expanded={isSidebarOpen}
              aria-controls="docs-sidebar"
            >
              <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isSidebarOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
              <span>{isSidebarOpen ? 'Close Menu' : 'Components Menu'}</span>
            </button>

            <aside id="docs-sidebar" className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
              <nav
                className={styles.sidebarNav}
                onClick={(e) => {
                  if ((e.target as HTMLElement).tagName.toLowerCase() === 'a') {
                    setIsSidebarOpen(false);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && (e.target as HTMLElement).tagName.toLowerCase() === 'a') {
                    setIsSidebarOpen(false);
                  }
                }}
              >
                <a href="#demo-herobanner" className={styles.sidebarLink}>HeroBanner</a>
                <a href="#demo-faq" className={styles.sidebarLink}>FAQ</a>
                <a href="#demo-accordion" className={styles.sidebarLink}>Accordion</a>
                <a href="#demo-ratings" className={styles.sidebarLink}>Ratings</a>
                <a href="#demo-profilecard" className={styles.sidebarLink}>ProfileCard</a>
              </nav>
            </aside>

            <div className={styles.componentsContent}>
              {/* HeroBanner Demo */}
              <div id="demo-herobanner" className={styles.demoBlock}>
                <div className={styles.demoHeader}>
                  <div>
                    <h3 className={styles.demoTitle}>HeroBanner</h3>
                    <p className={styles.demoVariant}>Premium Section</p>
                  </div>
                  <LocalThemeToggle value={heroBannerTheme} onChange={setHeroBannerTheme} />
                </div>
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                  <HeroBanner
                    badge="Welcome To Techsauq"
                    title={
                      <>
                        Transforming <br />
                        Ideas into a <br />
                        <span>Digital world</span>
                      </>
                    }
                    description="Crafting intuitive designs that captivate and inspire. Building robust websites that elevate brands online. Empowering businesses with innovative digital solutions."
                    ctaText="Book a Consultation"
                    imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                    imageAlt="Team working together"
                    theme={getThemeProp(heroBannerTheme)}
                    blobShape="50% 50% 50% 50% / 50% 50% 50% 50%"
                    blobAnimationDuration="25s"
                    floatingCards={[
                      {
                        icon: <Activity />,
                        label: 'Pricing',
                        value: '12%',
                        trend: { value: '96% Quality', isUp: true }
                      },
                      {
                        icon: <Zap />,
                        label: 'Services',
                        value: 'Best',
                      },
                      {
                        icon: <Users />,
                        label: 'Clients',
                        value: '500+',
                        trend: { value: 'Happy', isUp: true }
                      },
                      {
                        icon: <BarChart />,
                        label: 'Activity',
                        value: '96%',
                        trend: { value: '+12%', isUp: true }
                      }
                    ]}
                  />
                </div>
              </div>

              {/* FAQ Demo */}
              <div id="demo-faq" className={styles.demoBlock}>
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
                  theme={getThemeProp(faqTheme)}
                />
              </div>

              {/* Accordion Demo */}
              <div id="demo-accordion" className={styles.demoBlock}>
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
                  theme={getThemeProp(accordionTheme)}
                />
              </div>

              {/* Ratings Demo */}
              <div id="demo-ratings" className={styles.demoBlock}>
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
                      theme={getThemeProp(ratingsTheme)}
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
                      theme={getThemeProp(ratingsTheme)}
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
                      theme={getThemeProp(ratingsTheme)}
                    />
                  </div>
                </div>
              </div>

              {/* ProfileCard Demo */}
              <div id="demo-profilecard" className={styles.demoBlock}>
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
                    theme={getThemeProp(profileTheme)}
                  />
                  <ProfileCard
                    name="Akash Ranjan"
                    bio="Full Stack Developer focused on React & Web Performance. Founder of ICW Technologies."
                    image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                    variant="split"
                    isVerified
                    stats={{ followers: '2k+', posts: 56, following: 500 }}
                    profileUrl="https://www.linkedin.com/in/vatsaakash/"
                    theme={getThemeProp(profileTheme)}
                  />
                </div>
              </div>
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
                <p>Import the global styles, then wrap your app with ThemeProvider.</p>
                <div className={styles.codeBox}>
                  <code>{`import 'moddular-mfe/src/app/globals.scss';\nimport { ThemeProvider } from 'moddular-mfe';`}</code>
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
