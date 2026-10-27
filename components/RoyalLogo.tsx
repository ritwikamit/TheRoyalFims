'use client';

import React from 'react';

interface RoyalLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  variant?: 'full' | 'stacked' | 'mark';
  themeOverride?: 'light' | 'dark';
}

export default function RoyalLogo({
  className = '',
  size = 'md',
  showSubtitle = true,
  variant = 'full',
}: RoyalLogoProps) {
  // Dimension definitions
  const dimensions = {
    sm: { height: 36, markSize: 32, titleSize: 'text-sm sm:text-base', subSize: 'text-[8px]', gap: 'gap-2.5' },
    md: { height: 46, markSize: 40, titleSize: 'text-base sm:text-lg', subSize: 'text-[9px]', gap: 'gap-3' },
    lg: { height: 64, markSize: 56, titleSize: 'text-xl sm:text-2xl', subSize: 'text-[10px]', gap: 'gap-3.5' },
    xl: { height: 92, markSize: 80, titleSize: 'text-2xl sm:text-4xl', subSize: 'text-xs', gap: 'gap-4' },
  };

  const dim = dimensions[size];

  // The Royal Mark: Minimalist Royal Crown + Cinematic Aperture Iris Monogram
  const MarkSVG = (
    <div className="relative shrink-0 flex items-center justify-center">
      <svg
        width={dim.markSize}
        height={dim.markSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 drop-shadow-[0_2px_8px_rgba(212,103,67,0.25)]"
      >
        <defs>
          <linearGradient id="trfRoyalGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E89B5B" />
            <stop offset="50%" stopColor="#D46743" />
            <stop offset="100%" stopColor="#E89B5B" />
          </linearGradient>
          <linearGradient id="trfAquaGleam" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#BFE7EA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFEAD3" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="trfRingGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E89B5B" />
            <stop offset="100%" stopColor="#D46743" />
          </linearGradient>
        </defs>

        {/* Outer Circular Film Frame / Fine Jewelry Rim */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="url(#trfRingGold)"
          strokeWidth="1.5"
          className="opacity-90"
        />
        <circle
          cx="50"
          cy="50"
          r="42.5"
          stroke="url(#trfRingGold)"
          strokeWidth="0.75"
          strokeDasharray="2 3"
          className="opacity-75"
        />

        {/* Minimalist 5-Point Regal Crown Arch */}
        <path
          d="M26 38 L34 26 L50 34 L66 26 L74 38 L70 43 L30 43 Z"
          fill="url(#trfRoyalGold)"
          opacity="0.95"
        />

        {/* Crown Pearl Jewels (5 minimalist dots) */}
        <circle cx="26" cy="24" r="2.2" fill="#FFEAD3" stroke="#D46743" strokeWidth="1" />
        <circle cx="38" cy="21" r="2" fill="#FFEAD3" stroke="#D46743" strokeWidth="0.8" />
        <circle cx="50" cy="17" r="2.8" fill="#BFE7EA" stroke="#D46743" strokeWidth="1" />
        <circle cx="62" cy="21" r="2" fill="#FFEAD3" stroke="#D46743" strokeWidth="0.8" />
        <circle cx="74" cy="24" r="2.2" fill="#FFEAD3" stroke="#D46743" strokeWidth="1" />

        {/* Interlocking Cinematic Lens Aperture Blades */}
        <g stroke="url(#trfRoyalGold)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
          <path d="M50 44 L67 52 L61 68" />
          <path d="M67 52 L59 71 L40 73" />
          <path d="M59 71 L38 69 L32 54" />
          <path d="M38 69 L33 51 L44 45" />
          <path d="M33 51 L47 44 L60 52" />
        </g>

        {/* Center Optical Shutter Core with TRF Motif */}
        <circle cx="50" cy="58" r="9" fill="url(#trfRoyalGold)" opacity="0.15" />
        <circle cx="50" cy="58" r="5" fill="#D46743" />
        <circle cx="50" cy="58" r="2.2" fill="#FFEAD3" />

        {/* Subtle Horizontal Filigree / Foundation Bar */}
        <path
          d="M22 80 L78 80"
          stroke="url(#trfRingGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="50" cy="80" r="1.8" fill="#BFE7EA" />
      </svg>
    </div>
  );

  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center select-none group cursor-pointer ${className}`}>
        {MarkSVG}
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none group cursor-pointer ${dim.gap} ${className}`}>
        {MarkSVG}
        <div className="flex flex-col items-center">
          <span
            className={`font-headline uppercase tracking-[0.26em] font-medium leading-tight ${dim.titleSize} text-[#1C1510] dark:text-[#FFF5EC] transition-colors`}
          >
            The Royal Films
          </span>
          {showSubtitle && (
            <span
              className={`font-sans uppercase tracking-[0.34em] font-semibold text-[#D46743] dark:text-[#E89B5B] ${dim.subSize} mt-1`}
            >
              Cinematography &amp; Stills
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default 'full' horizontal variant
  return (
    <div
      className={`inline-flex items-center select-none group cursor-pointer transition-transform duration-300 hover:scale-[1.01] ${dim.gap} ${className}`}
    >
      {MarkSVG}
      <div className="flex flex-col text-left justify-center">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-headline uppercase tracking-[0.22em] font-medium leading-none ${dim.titleSize} text-[#1C1510] dark:text-[#FFF5EC] transition-colors`}
          >
            The Royal Films
          </span>
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span
              className={`font-sans uppercase tracking-[0.30em] font-semibold text-[#D46743] dark:text-[#E89B5B] ${dim.subSize}`}
            >
              Gaya
            </span>
            <span className="w-1 h-1 rounded-full bg-[#BFE7EA]" />
            <span
              className={`font-sans uppercase tracking-[0.30em] font-semibold text-[#614E43] dark:text-[#D8C5B6] ${dim.subSize}`}
            >
              Destination &amp; Dubai
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
