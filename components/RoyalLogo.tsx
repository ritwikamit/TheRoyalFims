'use client';

import React from 'react';
import Image from 'next/image';

interface RoyalLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  variant?: 'full' | 'stacked' | 'mark';
  isDark?: boolean;
  theme?: 'light' | 'dark' | 'orange';
}

export default function RoyalLogo({
  className = '',
  size = 'md',
  showSubtitle = true,
  variant = 'full',
  isDark = false,
  theme = 'light',
}: RoyalLogoProps) {
  // Dimension tokens tailored for luxury brand scaling
  const dimensions = {
    sm: {
      emblemWidth: 38,
      emblemHeight: 38,
      titleSize: 'text-lg',
      subSize: 'text-[7.5px]',
      gap: 'gap-2.5',
    },
    md: {
      emblemWidth: 48,
      emblemHeight: 48,
      titleSize: 'text-xl sm:text-2xl',
      subSize: 'text-[9px]',
      gap: 'gap-3',
    },
    lg: {
      emblemWidth: 76,
      emblemHeight: 76,
      titleSize: 'text-2xl sm:text-3xl',
      subSize: 'text-[10px]',
      gap: 'gap-3.5',
    },
    xl: {
      emblemWidth: 140,
      emblemHeight: 140,
      titleSize: 'text-3xl sm:text-5xl',
      subSize: 'text-xs',
      gap: 'gap-4',
    },
  };

  const dim = dimensions[size];

  // The Official Golden Laurel Emblem
  const EmblemImage = (
    <div
      className="relative shrink-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
      style={{ width: dim.emblemWidth, height: dim.emblemHeight }}
    >
      <Image
        src="/assets/golden-royal-films-emblem.png"
        alt="The Royal Films Golden Emblem"
        width={dim.emblemWidth}
        height={dim.emblemHeight}
        className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
        priority
      />
    </div>
  );

  // Variant: Emblem Mark only
  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {EmblemImage}
      </div>
    );
  }

  const titleColor =
    theme === 'orange'
      ? 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]'
      : isDark || theme === 'dark'
      ? 'text-[#FFCB56] drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]'
      : 'text-[#FF933E] drop-shadow-[0_1px_2px_rgba(255,147,62,0.2)]';

  const subColor =
    theme === 'orange'
      ? 'text-[#FFE9A9]'
      : isDark || theme === 'dark'
      ? 'text-[#FFE9A9]/85'
      : 'text-[#594233]';

  // Variant: Stacked (Emblem on top, text centered below - Great for Footer & Modals)
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${dim.gap} ${className}`}>
        {EmblemImage}
        <div className="flex flex-col items-center">
          <span
            className={`font-cursive-emblem ${dim.titleSize} leading-none ${titleColor}`}
            style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Apple Chancery', Georgia, serif" }}
          >
            The Royal Films
          </span>
          {showSubtitle && (
            <span
              className={`font-headline uppercase tracking-[0.3em] font-semibold ${subColor} mt-1.5 ${dim.subSize}`}
            >
              Cinematography &amp; Photography • Atelier
            </span>
          )}
        </div>
      </div>
    );
  }

  // Variant: Full (Horizontal - Emblem on left, typography on right - Great for Navbar)
  return (
    <div className={`flex items-center ${dim.gap} ${className}`}>
      {EmblemImage}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-cursive-emblem ${dim.titleSize} ${titleColor} leading-none`}
          style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Apple Chancery', Georgia, serif" }}
        >
          The Royal Films
        </span>
        {showSubtitle && (
          <span
            className={`font-headline uppercase tracking-[0.28em] font-semibold ${subColor} mt-1 ${dim.subSize}`}
          >
            Bespoke Cinema • Gaya &amp; Dubai
          </span>
        )}
      </div>
    </div>
  );
}
