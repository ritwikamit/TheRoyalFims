'use client';

import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, Cookie, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type LegalTabType = 'privacy' | 'terms' | 'cookies';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTabType;
  onClose: () => void;
}

export default function LegalModal({
  isOpen,
  initialTab = 'privacy',
  onClose,
}: LegalModalProps) {
  const [selectedTab, setSelectedTab] = useState<LegalTabType | null>(null);

  const activeTab = selectedTab ?? initialTab;

  const handleClose = () => {
    setSelectedTab(null);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[88vh] bg-[#FAF4ED] dark:bg-[#16110D] text-[#1A130E] dark:text-[#FAF3EC] border border-[#E8DCCF] dark:border-[#E89B5B]/30 shadow-2xl rounded-2xl flex flex-col z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="px-5 sm:px-8 py-5 border-b border-[#E8DCCF] dark:border-white/10 flex items-center justify-between bg-white dark:bg-[#1A140F]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D46743] dark:text-[#E89B5B] font-semibold">
                The Royal Films • Legal &amp; Governance
              </span>
              <h2 className="text-xl sm:text-2xl font-headline text-[#1A130E] dark:text-[#FAF3EC] mt-0.5">
                {activeTab === 'privacy' && 'Privacy & Media Policy'}
                {activeTab === 'terms' && 'Terms of Commission'}
                {activeTab === 'cookies' && 'Cookie Policy'}
              </h2>
            </div>

            <button
              onClick={handleClose}
              className="p-2 text-[#524237] dark:text-[#D9C7B8] hover:text-[#1A130E] dark:hover:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Selector */}
          <div className="flex border-b border-[#E8DCCF] dark:border-white/10 bg-[#FAF1E6] dark:bg-[#120E0A] px-4 sm:px-8 overflow-x-auto">
            <button
              onClick={() => setSelectedTab('privacy')}
              className={`flex items-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'privacy'
                  ? 'border-[#D46743] text-[#D46743] dark:text-[#E89B5B] dark:border-[#E89B5B]'
                  : 'border-transparent text-[#7C685B] dark:text-[#A49182] hover:text-[#1A130E]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => setSelectedTab('terms')}
              className={`flex items-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'terms'
                  ? 'border-[#D46743] text-[#D46743] dark:text-[#E89B5B] dark:border-[#E89B5B]'
                  : 'border-transparent text-[#7C685B] dark:text-[#A49182] hover:text-[#1A130E]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Terms of Commission</span>
            </button>

            <button
              onClick={() => setSelectedTab('cookies')}
              className={`flex items-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'cookies'
                  ? 'border-[#D46743] text-[#D46743] dark:text-[#E89B5B] dark:border-[#E89B5B]'
                  : 'border-transparent text-[#7C685B] dark:text-[#A49182] hover:text-[#1A130E]'
              }`}
            >
              <Cookie className="w-3.5 h-3.5" />
              <span>Cookie Policy</span>
            </button>
          </div>

          {/* Content Body */}
          <div className="px-5 sm:px-8 py-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-[#524237] dark:text-[#D9C7B8] leading-relaxed font-light">
            {activeTab === 'privacy' && (
              <div className="space-y-4">
                <h3 className="font-headline text-lg font-semibold text-[#1A130E] dark:text-[#FAF3EC]">
                  1. Client Media &amp; Image Privacy
                </h3>
                <p>
                  At The Royal Films, we treat your wedding footage as intimate family history. All RAW captures, unedited footage, and master color grades are held in cold redundant storage.
                </p>
                <p>
                  No private family ceremony footage is published online without explicit client written permission. We respect bridal modesty and cultural protocols across all events in Gaya, Bihar, and international locations.
                </p>

                <h3 className="font-headline text-lg font-semibold text-[#1A130E] dark:text-[#FAF3EC] pt-2">
                  2. Personal Information Collected
                </h3>
                <p>
                  Information submitted via our reservation form (names, telephone numbers, event itineraries) is used solely to coordinate your booking schedule and will never be sold or rented to third-party commercial parties.
                </p>
              </div>
            )}

            {activeTab === 'terms' && (
              <div className="space-y-4">
                <h3 className="font-headline text-lg font-semibold text-[#1A130E] dark:text-[#FAF3EC]">
                  1. Booking Retainers &amp; Calendar Locking
                </h3>
                <p>
                  Dates are locked on our master atelier calendar strictly upon execution of the written commissioning agreement and receipt of the initial retainer deposit.
                </p>

                <h3 className="font-headline text-lg font-semibold text-[#1A130E] dark:text-[#FAF3EC] pt-2">
                  2. Delivery Commitments &amp; Quality Control
                </h3>
                <p>
                  High-resolution photo galleries are delivered within 4–6 weeks; cinematic highlight films and documentary master reels are finalized within 6–8 weeks to permit meticulous color-grading and audio design.
                </p>
              </div>
            )}

            {activeTab === 'cookies' && (
              <div className="space-y-4">
                <h3 className="font-headline text-lg font-semibold text-[#1A130E] dark:text-[#FAF3EC]">
                  1. Essential Functional Storage
                </h3>
                <p>
                  Our web application utilizes localized browser storage strictly to preserve your visual display preference (Light Theme / Dark Theme) and prevent repeated consent popups.
                </p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="px-5 sm:px-8 py-4 border-t border-[#E8DCCF] dark:border-white/10 bg-white dark:bg-[#1A140F] flex items-center justify-between">
            <span className="text-[11px] text-[#7C685B] dark:text-[#A49182]">
              Effective Date: 2025–2026 Commission Season
            </span>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-[#D46743] hover:bg-[#E89B5B] text-white text-xs uppercase tracking-wider font-semibold rounded transition-colors shadow-md cursor-pointer"
            >
              I Understand
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
