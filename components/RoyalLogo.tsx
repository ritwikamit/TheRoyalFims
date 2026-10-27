'use client';

import React from 'react';
import Image from 'next/image';

interface RoyalLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export default function RoyalLogo({
  className = '',
  size = 'md',
}: RoyalLogoProps) {
  // Proportional dimensions for the original brand logo image
  const sizeClasses = {
    sm: 'h-10 w-32 sm:h-12 sm:w-36',
    md: 'h-12 w-36 sm:h-14 sm:w-44 lg:h-16 lg:w-48',
    lg: 'h-20 w-52 sm:h-24 sm:w-64 md:h-28 md:w-80',
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} shrink-0 select-none group cursor-pointer transition-transform duration-300 hover:scale-[1.02] flex items-center ${className}`}
    >
      <Image
        src="https://lh3.googleusercontent.com/aida/AEtjO1Vh09nuyFcAr-NahNM4CJpR9gGbK5LY0jGg0aQn7F0ltKUbEPNFbwCGV9CH-dPVshFKKQ2DEeP0x7J9hKbHUV0k2EoFKpyNTvlN32lf19LyCtCEvsd1zU8BgegNIFLVpQFvyvxMjn2mY0UWiZtE9m-eLPZG70duKpXAi2zx1RMpdjRvF1z7uZsh8N6xkzdCNKMuSqYvt4EnseelaQSZOG-dzzmJww-Zwa93uwWs_-XBdqLxxBJqVUpMV1YS"
        alt="The Royal Films"
        fill
        priority={size === 'md' || size === 'lg'}
        className="object-contain filter drop-shadow-sm dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] light:contrast-125"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
