'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F2] dark:bg-[#0c0c0c] text-[#181614] dark:text-[#FEF9F1] px-6 text-center">
      <span className="text-xs uppercase tracking-[0.25em] text-[#B38842] dark:text-[#E8C17A] font-semibold mb-2">
        The Royal Films
      </span>
      <h1 className="text-4xl sm:text-6xl font-serif mb-4">404 — Scene Not Found</h1>
      <p className="text-sm text-[#7C6E5C] dark:text-[#D6B06B] max-w-md mb-8">
        The cinematic sequence you are seeking does not exist or has been archived.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#C41E1E] dark:bg-[#D60000] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-lg"
      >
        Return to Atelier
      </Link>
    </div>
  );
}
