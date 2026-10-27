'use client';

import React from 'react';

interface AnimatedBorderCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export default function AnimatedBorderCard({
  children,
  className = '',
  onClick,
  interactive = true,
}: AnimatedBorderCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group relative rounded-xl p-[1.5px] overflow-hidden transition-all duration-500 ${
        interactive
          ? 'hover:-translate-y-1.5 hover:shadow-2xl hover:scale-[1.008] cursor-pointer'
          : ''
      } ${className}`}
    >
      {/* Animated Moving Line Border Layer (Continuous Rotating Gradient Beam) */}
      <div 
        className="absolute inset-[-150%] -z-10 animate-border-spin opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0 320deg, #e8c17a 340deg, #d60000 355deg, transparent 360deg)',
        }}
      />

      {/* Subtle Static Ambient Border Track */}
      <div className="absolute inset-0 -z-20 rounded-xl border border-black/10 dark:border-white/10" />

      {/* Card Inner Content Container with Deep Light & Dark Theme Support */}
      <div className="relative h-full w-full rounded-[10px] bg-[#FAF8F5] dark:bg-[#161616] light:bg-[#FAF8F5] p-5 sm:p-6 transition-all duration-300 group-hover:bg-[#FFFFFF] dark:group-hover:bg-[#1b1b1b] shadow-sm group-hover:shadow-md">
        {/* Subtle interactive hover highlight overlay */}
        <div className="absolute inset-0 rounded-[10px] bg-gradient-to-br from-[#E8C17A]/0 to-[#D60000]/0 group-hover:from-[#E8C17A]/5 group-hover:to-[#D60000]/5 pointer-events-none transition-colors duration-500" />
        
        {children}
      </div>
    </div>
  );
}
