import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';
import './globals.scss';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Moddular MFE — Reusable Component Library',
  description:
    'A collection of accessible, themeable, responsive micro-frontend components built with Next.js and SCSS.',
  keywords: [
    'MFE',
    'micro-frontend',
    'component library',
    'React',
    'Next.js',
    'SCSS',
    'accessible',
    'themeable',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
