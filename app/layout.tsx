import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Royal Films - Gaya & Destination Weddings',
  description:
    'Bespoke cinematic wedding films and editorial photography across Gaya, Bihar, and international horizons including Dubai.',
  openGraph: {
    title: 'The Royal Films - Gaya & Destination Weddings',
    description:
      'Bespoke cinematic wedding films and editorial photography across Gaya, Bihar, and international horizons including Dubai.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Royal Films - Gaya & Destination Weddings',
    description:
      'Bespoke cinematic wedding films and editorial photography across Gaya, Bihar, and international horizons including Dubai.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-on-surface antialiased font-manrope selection:bg-primary-container selection:text-on-primary-container" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
