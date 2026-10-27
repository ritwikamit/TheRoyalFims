'use client';

import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CookieBannerProps {
  onOpenCookiePolicy: () => void;
}

export default function CookieBanner({ onOpenCookiePolicy }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('trf_cookie_consent');
      if (!consent) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage may be restricted in private/sandbox mode
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('trf_cookie_consent', 'accepted');
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('trf_cookie_consent', 'essential_only');
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.aside
        aria-label="Cookie consent banner"
        initial={{ opacity: 0, y: 35, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="clay-card fixed bottom-24 md:bottom-7 left-4 right-4 md:left-auto md:right-7 md:max-w-md z-[75] p-5 bg-[#FFFDF9] border border-[#FFCB56] shadow-[0_20px_50px_rgba(115,165,202,0.32),0_6px_18px_rgba(36,25,18,0.08),inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(232,213,176,0.45)] text-[#241912]"
      >
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-[#FF933E]/15 border border-[#FFCB56]/50 text-[#FF933E] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
            <Cookie className="w-4 h-4" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#241912]">
                Experience Preferences
              </h4>
              <button
                type="button"
                onClick={handleDecline}
                className="text-[#594233] hover:text-[#241912] p-1 -mr-1 -mt-1 cursor-pointer transition-colors"
                aria-label="Close cookie banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-[#594233] mt-1.5 leading-relaxed font-light">
              We use lightweight local storage to ensure smooth 4K video playback and preserve your browsing preferences.
            </p>

            <div className="mt-3.5 flex flex-wrap items-center gap-2 pt-1">
              <button
                type="button"
                onClick={handleAccept}
                className="clay-button px-4 py-2 bg-[#FF933E] hover:bg-[#ff8425] text-white text-[11px] uppercase tracking-wider font-bold transition-all shadow-[0_4px_14px_rgba(255,147,62,0.4)] cursor-pointer flex items-center gap-1.5 active:scale-95"
              >
                <Check className="w-3.5 h-3.5 text-[#FFE9A9]" />
                <span>Accept</span>
              </button>

              <button
                type="button"
                onClick={handleDecline}
                className="clay-button px-3.5 py-2 bg-[#FFFDF9] hover:bg-[#FFE9A9]/40 text-[#594233] border border-[#FFCB56]/50 text-[11px] uppercase tracking-wider font-semibold transition-all cursor-pointer active:scale-95"
              >
                Essential Only
              </button>

              <button
                type="button"
                onClick={onOpenCookiePolicy}
                className="text-[11px] text-[#FF933E] hover:underline underline-offset-4 uppercase tracking-wider ml-auto cursor-pointer py-1 font-bold"
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
