import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kevin Archet — Expert Android & Lead Developer',
  description:
    'Lead Developer Senior spécialisé en architecture mobile Kotlin, Clean Architecture et applications haute charge. 10+ ans d\'expérience — McDonald\'s, Accor, projets stratégiques.',
  keywords: [
    'Android Developer',
    'Kotlin',
    'Lead Developer',
    'Mobile Architecture',
    'Clean Architecture',
    'Kevin Archet',
    'Expert Android',
    'Consultant Mobile',
  ],
  openGraph: {
    title: 'Kevin Archet — Expert Android & Lead Developer',
    description:
      'Architecte mobile senior. Applications haute charge pour des comptes stratégiques.',
    url: 'https://kevinarchet.com',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevin Archet — Expert Android',
    description:
      'Lead Developer & Architecte Mobile. Kotlin, Clean Architecture, projets enterprise.',
  },
  icons: {
    icon:
      {
        url: '/kevin-archet.jpg',
        media: '(prefers-color-scheme: light)',
      },
    apple: '/kevin-archet.jpg',
  },
};

export const viewport: Viewport = {
  colorScheme: 'light', // Le brief impose un design majoritairement clair
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFBFD' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0F1E' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-surface-main text-text-primary">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}