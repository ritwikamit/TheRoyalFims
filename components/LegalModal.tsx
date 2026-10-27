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

  // Compute active tab from user selection or fallback to initialTab without calling setState in effect
  const activeTab = selectedTab ?? initialTab;

  const handleClose = () => {
    setSelectedTab(null);
    onClose();
  };

  // Prevent background scrolling when modal is open
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
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[88vh] bg-[#141414] dark:bg-[#141414] light:bg-[#ffffff] border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl rounded-sm flex flex-col z-10 overflow-hidden text-[#e5e2e1] dark:text-[#e5e2e1] light:text-[#1a1918]"
        >
          {/* Header */}
          <div className="px-5 sm:px-8 py-5 border-b border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-between bg-[#191919] dark:bg-[#191919] light:bg-[#f4efe6]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#e8c17a] font-semibold">
                The Royal Films • Legal & Governance
              </span>
              <h2 className="text-xl sm:text-2xl font-serif text-[#fef9f1] dark:text-[#fef9f1] light:text-[#1a1918] mt-0.5">
                {activeTab === 'privacy' && 'Privacy & Media Policy'}
                {activeTab === 'terms' && 'Terms of Commission'}
                {activeTab === 'cookies' && 'Cookie Policy'}
              </h2>
            </div>

            <button
              onClick={handleClose}
              className="p-2 text-[#e5e2e1]/70 hover:text-white dark:hover:text-white light:text-black/60 light:hover:text-black rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Selector */}
          <div className="flex border-b border-white/10 dark:border-white/10 light:border-black/10 bg-[#101010] dark:bg-[#101010] light:bg-[#ebe6dc] px-4 sm:px-8 overflow-x-auto">
            <button
              onClick={() => setSelectedTab('privacy')}
              className={`flex items-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-medium border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'privacy'
                  ? 'border-[#e8c17a] text-[#e8c17a]'
                  : 'border-transparent text-[#e5e2e1]/60 dark:text-[#e5e2e1]/60 light:text-[#1a1918]/60 hover:text-[#fef9f1]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => setSelectedTab('terms')}
              className={`flex items-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-medium border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'terms'
                  ? 'border-[#e8c17a] text-[#e8c17a]'
                  : 'border-transparent text-[#e5e2e1]/60 dark:text-[#e5e2e1]/60 light:text-[#1a1918]/60 hover:text-[#fef9f1]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Terms of Commission</span>
            </button>

            <button
              onClick={() => setSelectedTab('cookies')}
              className={`flex items-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-medium border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'cookies'
                  ? 'border-[#e8c17a] text-[#e8c17a]'
                  : 'border-transparent text-[#e5e2e1]/60 dark:text-[#e5e2e1]/60 light:text-[#1a1918]/60 hover:text-[#fef9f1]'
              }`}
            >
              <Cookie className="w-3.5 h-3.5" />
              <span>Cookie Policy</span>
            </button>
          </div>

          {/* Content Body */}
          <div className="p-5 sm:p-8 overflow-y-auto max-h-[60vh] space-y-6 text-sm leading-relaxed text-[#e5e2e1]/85 dark:text-[#e5e2e1]/85 light:text-[#2d2b28]">
            {/* PRIVACY POLICY CONTENT */}
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#111111] uppercase tracking-wide">
                    1. Information We Collect
                  </h3>
                  <p className="mt-1.5">
                    The Royal Films (“Studio”, “we”, “us”) respects the sacred privacy of couples and families. When you enquire or book our cinematography and photography services, we collect your names, email addresses, phone / WhatsApp numbers, event dates, celebration venues, and any itinerary details provided.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#111111] uppercase tracking-wide">
                    2. Use of Media & Confidentiality
                  </h3>
                  <p className="mt-1.5">
                    Photographs and cinematic footage captured during your events are treated with utmost artistic respect. High-resolution raw footage and master color-graded files are stored in encrypted cold storage and private cloud galleries accessed only by our lead editors and the client.
                  </p>
                  <p className="mt-2">
                    Unless an explicit Non-Disclosure Agreement (NDA) or Private Celebration rider is executed in writing prior to filming, selected cinematic teasers and portfolio stills may be presented on our official website, Instagram, and festival submissions to showcase our atelier&apos;s craftsmanship.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#111111] uppercase tracking-wide">
                    3. No Third-Party Selling or Brokerage
                  </h3>
                  <p className="mt-1.5">
                    We never rent, sell, or monetize your contact records or personal data to outside advertisers, banquet networks, or decor vendors. All communications are direct between you and our Gaya concierge team.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#111111] uppercase tracking-wide">
                    4. Contact & Inquiries
                  </h3>
                  <p className="mt-1.5">
                    For any privacy inquiries or to request private archive deletion post-delivery, reach us directly at <span className="text-[#e8c17a] font-medium">info@theroyalfilms.in</span> or call <span className="text-[#e8c17a] font-medium">+91 70043 75740</span>.
                  </p>
                </div>
              </div>
            )}

            {/* TERMS OF COMMISSION CONTENT */}
            {activeTab === 'terms' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#111111] uppercase tracking-wide">
                    1. Reservation & Advance Commitment
                  </h3>
                  <p className="mt-1.5">
                    A wedding date or destination travel window is officially reserved only upon the execution of our written Commission Agreement and the receipt of the initial booking retainer. Because our principal cinematographers take on a strictly limited number of commissions each calendar season, dates cannot be held on verbal requests alone.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#111111] uppercase tracking-wide">
                    2. Delivery Timelines & Master Revisions
                  </h3>
                  <p className="mt-1.5">
                    Our standard post-production timeline is <strong>4 to 6 weeks</strong> for color-corrected photographs and <strong>6 to 8 weeks</strong> for 4K cinematic feature films and musical teaser trailers. Each film commission includes one comprehensive round of musical and pacing revision notes provided within 14 calendar days of first viewing.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#111111] uppercase tracking-wide">
                    3. Aerial Drone Clearances & Venue Regulations
                  </h3>
                  <p className="mt-1.5">
                    Drone cinematography is subject to safe weather conditions, local DGCA or municipal airspace clearances in India, and aviation permissions for destination shoots in Dubai. If a temple or venue restricts drone flight, our ground cinema crew will deploy multi-angle motorized gimbal coverage.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#111111] uppercase tracking-wide">
                    4. Copyright & Personal Heirlooms
                  </h3>
                  <p className="mt-1.5">
                    Clients receive perpetual, non-commercial personal usage rights to print, project, share, and archive all delivered photographs and films for eternity. Commercial broadcast or resale rights remain retained by The Royal Films.
                  </p>
                </div>
              </div>
            )}

            {/* COOKIE POLICY CONTENT */}
            {activeTab === 'cookies' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#111111] uppercase tracking-wide">
                    1. What Are Cookies?
                  </h3>
                  <p className="mt-1.5">
                    Cookies and local browser storage are minimal data tokens placed on your device to ensure seamless navigation, preserve your dark/light visual theme preferences, and maintain session reliability across our portfolio screening rooms.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#111111] uppercase tracking-wide">
                    2. Cookies We Deploy
                  </h3>
                  <ul className="mt-2 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#e8c17a] shrink-0 mt-0.5" />
                      <div>
                        <strong>Essential Preferences:</strong> Remembers your chosen theme (Dark / Light) and cookie agreement state.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#e8c17a] shrink-0 mt-0.5" />
                      <div>
                        <strong>Screening Performance:</strong> Caches video streaming settings and image preloading cues to deliver fluid 4K visuals.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#e8c17a] shrink-0 mt-0.5" />
                      <div>
                        <strong>Zero Advertising Trackers:</strong> We do not deploy behavioral cross-site trackers or ad-retargeting pixels.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#111111] uppercase tracking-wide">
                    3. Managing Your Preferences
                  </h3>
                  <p className="mt-1.5">
                    You can clear or decline cookies via your web browser settings at any time without losing the ability to view our wedding portfolio and submit date availability inquiries.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-5 sm:px-8 py-4 border-t border-white/10 dark:border-white/10 light:border-black/10 bg-[#161616] dark:bg-[#161616] light:bg-[#f4efe6] flex items-center justify-between text-xs text-[#e5e2e1]/60 dark:text-[#e5e2e1]/60 light:text-[#1a1918]/60">
            <span>Last Updated: November 2025 • Registered Studio Atelier Gaya</span>
            <button
              onClick={handleClose}
              className="px-5 py-2 bg-[#d60000] text-white hover:bg-[#ff3333] uppercase tracking-wider text-[11px] font-semibold transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
