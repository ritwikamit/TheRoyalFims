'use client';

import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CookieBannerProps {
  onOpenCookiePolicy: () => void;
}

export default function CookieBanner({ onOpenCookiePolicy }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('trf_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('trf_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('trf_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.aside
        aria-label="Cookie consent banner"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-4 sm:p-5 bg-[#FAF4ED]/98 dark:bg-[#120E0A]/98 backdrop-blur-2xl border border-[#E8DCCF] dark:border-white/15 shadow-[0_10px_40px_rgba(82,55,30,0.12)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.8)] rounded-xl text-[#1A130E] dark:text-[#FAF3EC]"
      >
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-[#D46743]/15 text-[#D46743] dark:text-[#E89B5B] flex items-center justify-center shrink-0 mt-0.5">
            <Cookie className="w-4 h-4" />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1A130E] dark:text-[#FAF3EC]">
                Experience Preferences
              </h4>
              <Shield className="w-3.5 h-3.5 text-[#D46743] dark:text-[#E89B5B]" />
            </div>

            <p className="text-xs text-[#524237] dark:text-[#D9C7B8] mt-1.5 leading-relaxed font-light">
              We use lightweight storage to remember your visual theme preference (Light / Dark) and maintain 4K video playback performance.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button
                onClick={handleAccept}
                className="px-3.5 py-1.5 bg-[#D46743] text-white hover:bg-[#E89B5B] text-[11px] uppercase tracking-wider font-semibold transition-all shadow-[0_0_12px_rgba(212,103,67,0.4)] cursor-pointer flex items-center gap-1.5"
              >
                <Check className="w-3 h-3" />
                <span>Accept</span>
              </button>

              <button
                onClick={handleDecline}
                className="px-3 py-1.5 bg-black/5 dark:bg-white/10 hover:bg-black/10 text-[11px] uppercase tracking-wider text-[#524237] dark:text-[#FAF3EC] transition-colors cursor-pointer"
              >
                Essential Only
              </button>

              <button
                onClick={onOpenCookiePolicy}
                className="text-[11px] text-[#D46743] dark:text-[#E89B5B] hover:underline underline-offset-4 uppercase tracking-wider ml-auto cursor-pointer py-1 font-semibold"
              >
                Policy
              </button>
            </div>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
