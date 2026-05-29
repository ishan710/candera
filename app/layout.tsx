import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import {
  Raleway,
  Newsreader,
  Inter,
  JetBrains_Mono,
  Spectral,
  IBM_Plex_Sans,
  Cormorant_Garamond,
  Work_Sans,
  Source_Serif_4,
  Figtree,
} from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-raleway',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-newsreader',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-spectral',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-work-sans',
  display: 'swap',
});

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-source-serif-4',
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Candera — AI advisory',
  description:
    'Candera advises individuals and small businesses on practical AI use. Fixed-scope engagements and free guides.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const fontVars = [
    raleway.variable,
    newsreader.variable,
    inter.variable,
    jetbrainsMono.variable,
    spectral.variable,
    ibmPlexSans.variable,
    cormorantGaramond.variable,
    workSans.variable,
    sourceSerif4.variable,
    figtree.variable,
  ].join(' ');

  return (
    <html lang="en" className={fontVars}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
