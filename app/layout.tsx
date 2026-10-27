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
      <head>
        {/* Preconnect & High-Priority Direct Google Fonts Embed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Allura&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Cinzel:wght@400..900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Great+Vibes&family=Manrope:wght@300;400;500;600;700;800&family=Parisienne&family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-[#FFFDF9] text-[#241912] antialiased font-manrope selection:bg-[#FFE9A9] selection:text-[#FF933E] min-h-screen"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
