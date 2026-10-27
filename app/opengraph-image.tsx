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
          background: 'linear-gradient(135deg, #FFFDF9 0%, #FFF4E5 50%, #FFE9A9 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
          position: 'relative',
          border: '14px solid #FFE9A9',
        }}
      >
        {/* Decorative Inner Golden Rim */}
        <div
          style={{
            position: 'absolute',
            inset: '20px',
            border: '2px solid #FFCB56',
            opacity: 0.6,
          }}
        />

        {/* Golden Laurel Monogram Crest */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px',
            background: 'white',
            borderRadius: '100px',
            padding: '16px',
            boxShadow: '0 8px 30px rgba(255,147,62,0.25)',
          }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="46" stroke="#FFCB56" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="41" stroke="#FF933E" strokeWidth="1" strokeDasharray="3 3" />
            {/* Laurel Leaves left */}
            <path d="M40 28 C34 32, 32 40, 36 48 C32 50, 30 58, 36 66 C40 72, 46 76, 50 82" stroke="#FFCB56" strokeWidth="2.5" strokeLinecap="round" />
            {/* Royal R */}
            <path d="M44 32 L44 68 M44 32 C54 32, 64 36, 64 48 C64 58, 52 60, 44 60 M52 58 L68 76" stroke="#FF933E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Crown Jewel */}
            <circle cx="50" cy="22" r="3.5" fill="#73A5CA" />
          </svg>
        </div>

        {/* Cursive Brand Title */}
        <div
          style={{
            fontSize: 72,
            color: '#FF933E',
            fontWeight: 400,
            letterSpacing: '0.04em',
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          The Royal Films
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 20,
            textTransform: 'uppercase',
            letterSpacing: '0.36em',
            color: '#594233',
            marginTop: 14,
            fontWeight: 600,
          }}
        >
          Bespoke Wedding Cinematography &amp; Editorial Stills
        </div>

        {/* Destinations Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginTop: 28,
            padding: '10px 28px',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid #FFCB56',
            borderRadius: '9999px',
            boxShadow: '0 4px 14px rgba(255,147,62,0.12)',
            fontSize: 14,
            textTransform: 'uppercase',
            letterSpacing: '0.24em',
            color: '#FF933E',
            fontWeight: 700,
          }}
        >
          Gaya • Patna • Bodh Gaya • Dubai
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
