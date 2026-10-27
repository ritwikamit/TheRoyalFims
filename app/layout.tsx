import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://theroyalfilms.com'),
  title: 'The Royal Films - Bespoke Wedding Cinematography & Editorial Stills',
  description:
    'Luxury cinematic wedding films and editorial photography across Gaya, Bihar, and international destinations including Dubai.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
    shortcut: '/favicon.ico',
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
    <html lang="en" className="light" style={{ colorScheme: 'light' }} suppressHydrationWarning>
      <body
        className="bg-[#FFFDF9] text-[#241912] antialiased font-manrope selection:bg-[#FFE9A9] selection:text-[#FF933E] min-h-screen"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
