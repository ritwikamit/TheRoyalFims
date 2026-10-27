import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://theroyalfilms.com'),
  title: 'The Royal Films - Bespoke Wedding Cinematography & Editorial Stills',
  description:
    'Luxury cinematic wedding films and editorial photography across Gaya, Bihar, and international destinations including Dubai.',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'The Royal Films - Bespoke Wedding Cinematography & Editorial Stills',
    description:
      'Luxury cinematic wedding films and editorial photography across Gaya, Bihar, and international destinations including Dubai.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Royal Films - Bespoke Wedding Cinematography & Editorial Stills',
    description:
      'Luxury cinematic wedding films and editorial photography across Gaya, Bihar, and international destinations including Dubai.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className="bg-background text-on-surface antialiased font-manrope selection:bg-[#FFEAD3] selection:text-[#D46743] min-h-screen"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
