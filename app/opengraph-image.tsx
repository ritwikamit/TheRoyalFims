import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'The Royal Films - Bespoke Wedding Cinematography';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1C1510 0%, #120E0A 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
          position: 'relative',
          border: '12px solid #281E17',
        }}
      >
        {/* Decorative Inner Golden Border */}
        <div
          style={{
            position: 'absolute',
            inset: '24px',
            border: '1px solid #E89B5B',
            opacity: 0.4,
          }}
        />

        {/* Brand Crest */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
          }}
        >
          <svg width="110" height="110" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="46" stroke="#E89B5B" strokeWidth="2" />
            <circle cx="50" cy="50" r="42" stroke="#D46743" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M26 38 L34 26 L50 34 L66 26 L74 38 L70 43 L30 43 Z" fill="#E89B5B" />
            <circle cx="26" cy="24" r="2.5" fill="#FFEAD3" />
            <circle cx="50" cy="17" r="3" fill="#BFE7EA" />
            <circle cx="74" cy="24" r="2.5" fill="#FFEAD3" />
            <path d="M50 44 L67 52 L61 68" stroke="#D46743" strokeWidth="2" />
            <path d="M67 52 L59 71 L40 73" stroke="#D46743" strokeWidth="2" />
            <path d="M59 71 L38 69 L32 54" stroke="#D46743" strokeWidth="2" />
            <circle cx="50" cy="58" r="6" fill="#D46743" />
            <circle cx="50" cy="58" r="2.5" fill="#FFEAD3" />
          </svg>
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 56,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#FFEAD3',
            fontWeight: 600,
            marginBottom: '12px',
          }}
        >
          The Royal Films
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            letterSpacing: '0.34em',
            textTransform: 'uppercase',
            color: '#D46743',
            fontWeight: 500,
            marginBottom: '20px',
          }}
        >
          Cinematography &amp; Editorial Stills
        </div>

        {/* Cities */}
        <div
          style={{
            fontSize: 16,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#BFE7EA',
            opacity: 0.85,
          }}
        >
          Gaya • Bodh Gaya • Dubai • Worldwide
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
