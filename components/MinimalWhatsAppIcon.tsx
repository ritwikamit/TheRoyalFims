'use client';

import React from 'react';

interface MinimalWhatsAppIconProps {
  className?: string;
  size?: number;
}

/**
 * Minimal WhatsApp Vector Icon
 * Authentic, clean minimal vector with the speech bubble and phone receiver.
 * Renders crisply across all screen resolutions without heavy fills or distortion.
 */
export default function MinimalWhatsAppIcon({
  className = 'w-4 h-4',
  size,
}: MinimalWhatsAppIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.08C10.57 20.08 9.13 19.68 7.87 18.94L7.57 18.76L4.45 19.58L5.28 16.54L5.08 16.22C4.26 14.92 3.82 13.43 3.82 11.91C3.82 7.38 7.51 3.69 12.04 3.69C16.57 3.69 20.26 7.38 20.26 11.91C20.26 16.44 16.57 20.08 12.04 20.08ZM16.54 14.39C16.29 14.26 15.06 13.66 14.83 13.57C14.6 13.49 14.43 13.45 14.27 13.7C14.1 13.95 13.62 14.51 13.47 14.68C13.33 14.85 13.18 14.87 12.93 14.74C12.68 14.61 11.87 14.35 10.91 13.49C10.16 12.82 9.66 11.99 9.51 11.74C9.36 11.49 9.49 11.36 9.62 11.23C9.73 11.12 9.87 10.94 10 10.79C10.13 10.64 10.17 10.53 10.25 10.36C10.33 10.19 10.29 10.05 10.23 9.92C10.17 9.79 9.66 8.54 9.45 8.04C9.25 7.55 9.04 7.62 8.89 7.61L8.41 7.6C8.24 7.6 7.97 7.66 7.74 7.91C7.51 8.16 6.86 8.77 6.86 10.01C6.86 11.25 7.76 12.45 7.89 12.62C8.01 12.79 9.66 15.34 12.18 16.43C12.78 16.69 13.25 16.84 13.61 16.96C14.21 17.15 14.76 17.12 15.2 17.06C15.68 16.99 16.68 16.46 16.89 15.87C17.1 15.28 17.1 14.78 17.04 14.68C16.98 14.57 16.79 14.51 16.54 14.39Z" />
    </svg>
  );
}
