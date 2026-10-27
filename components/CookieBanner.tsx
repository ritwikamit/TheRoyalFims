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
    // Check if user has already accepted cookies
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
        className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-4 sm:p-5 bg-[#141414]/95 dark:bg-[#141414]/95 light:bg-[#ffffff]/95 backdrop-blur-2xl border border-white/15 dark:border-white/15 light:border-black/15 shadow-[0_10px_40px_rgba(0,0,0,0.8)] rounded-sm text-[#e5e2e1] dark:text-[#e5e2e1] light:text-[#1a1918]"
      >
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-[#e8c17a]/15 text-[#e8c17a] flex items-center justify-center shrink-0 mt-0.5">
            <Cookie className="w-4 h-4" />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#111111]">
                Cookie & Experience Settings
              </h4>
              <Shield className="w-3.5 h-3.5 text-[#e8c17a]" />
            </div>

            <p className="text-xs text-[#e5e2e1]/75 dark:text-[#e5e2e1]/75 light:text-[#4a4742] mt-1.5 leading-relaxed">
              We use necessary cookies to remember your theme choice (Dark / Light) and optimize 4K video playback.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button
                onClick={handleAccept}
                className="px-3.5 py-1.5 bg-[#d60000] text-white hover:bg-[#ff3333] text-[11px] uppercase tracking-wider font-semibold transition-all shadow-[0_0_12px_rgba(214,0,0,0.4)] cursor-pointer flex items-center gap-1.5"
              >
                <Check className="w-3 h-3" />
                <span>Accept Cookies</span>
              </button>

              <button
                onClick={handleDecline}
                className="px-3 py-1.5 bg-white/10 dark:bg-white/10 light:bg-black/10 hover:bg-white/20 text-[11px] uppercase tracking-wider text-[#e5e2e1] dark:text-[#e5e2e1] light:text-[#1a1918] transition-colors cursor-pointer"
              >
                Essential Only
              </button>

              <button
                onClick={onOpenCookiePolicy}
                className="text-[11px] text-[#e8c17a] hover:underline underline-offset-4 uppercase tracking-wider ml-auto cursor-pointer py-1"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
