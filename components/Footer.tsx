'use client';

import React from 'react';
import { Phone, Mail, MapPin, Shield, FileText, Cookie } from 'lucide-react';
import RoyalLogo from '@/components/RoyalLogo';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenLegal: (tab: 'privacy' | 'terms' | 'cookies') => void;
}

export default function Footer({ onSelectTab, onOpenLegal }: FooterProps) {
  return (
    <footer className="relative w-full overflow-hidden text-[#e5e2e1] dark:text-[#e5e2e1] light:text-[#181614] transition-colors duration-300">
      {/* GLOWING SLOW FIRE & EMBER BACKGROUND LAYER */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Core Flame Base */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#3d0802]/70 dark:from-[#3d0802]/70 light:from-[#FFE3D1]/60 via-[#1f0d04]/45 dark:via-[#1f0d04]/45 light:via-[#FFF3EB]/40 to-transparent mix-blend-screen light:mix-blend-multiply" />
        
        {/* Pulsing Glowing Fire Orbs */}
        <div className="absolute -bottom-24 left-1/4 w-[500px] h-[350px] bg-radial from-[#ff4400]/40 dark:from-[#ff4400]/40 light:from-[#FF9E79]/25 via-[#d60000]/25 dark:via-[#d60000]/25 light:via-[#FFD0B8]/20 to-transparent blur-3xl animate-slow-fire" />
        <div className="absolute -bottom-28 right-1/4 w-[480px] h-[340px] bg-radial from-[#ff9900]/30 dark:from-[#ff9900]/30 light:from-[#FFB347]/20 via-[#850000]/20 to-transparent blur-3xl animate-slow-fire [animation-delay:3s]" />
        
        {/* Floating Sparks / Embers */}
        <div className="absolute bottom-10 left-[20%] w-1.5 h-1.5 rounded-full bg-[#facc15] shadow-[0_0_10px_#facc15] animate-ember-1" />
        <div className="absolute bottom-16 left-[45%] w-2 h-2 rounded-full bg-[#ff6b00] shadow-[0_0_12px_#ff6b00] animate-ember-2" />
        <div className="absolute bottom-12 right-[30%] w-1.5 h-1.5 rounded-full bg-[#ffaa00] shadow-[0_0_10px_#ffaa00] animate-ember-3" />
        <div className="absolute bottom-8 right-[15%] w-1 h-1 rounded-full bg-[#ffd700] shadow-[0_0_8px_#ffd700] animate-ember-1 [animation-delay:2.5s]" />
      </div>

      {/* Translucent Glassmorphic Content Container */}
      <div className="relative z-10 w-full bg-[#0a0a0a]/85 dark:bg-[#0a0a0a]/85 light:bg-[#FAF7F2]/90 backdrop-blur-2xl border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
            
            {/* Col 1: Big Minimalist Logo (NO yellow dot) + Carved Studio Atelier Intro */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <button
                onClick={() => onSelectTab('home')}
                className="text-left focus:outline-none cursor-pointer"
                aria-label="The Royal Films Home"
              >
                {/* Big Minimalistic Logo */}
                <RoyalLogo size="lg" />
              </button>

              {/* Carved/Engraved Studio Text */}
              <p className="text-sm leading-relaxed text-[#e5e2e1]/75 dark:text-[#e5e2e1]/75 light:text-[#5E5244] max-w-sm text-carved">
                Crafting timeless, heirloom cinematic wedding films and editorial photography. Documenting sacred rituals and authentic joy across Gaya, Patna, Bodh Gaya, and international horizons including Dubai.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3 py-1 bg-white/5 dark:bg-white/5 light:bg-[#EFE9DF] border border-white/10 dark:border-white/10 light:border-[#1A1918]/10 text-[#B38842] dark:text-[#e8c17a] text-[10px] uppercase tracking-[0.2em] font-semibold text-carved">
                  AAFT Trained Cinema
                </span>
                <span className="px-3 py-1 bg-white/5 dark:bg-white/5 light:bg-[#EFE9DF] border border-white/10 dark:border-white/10 light:border-[#1A1918]/10 text-[#B38842] dark:text-[#e8c17a] text-[10px] uppercase tracking-[0.2em] font-semibold text-carved">
                  4K HDR Master
                </span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B38842] dark:text-[#e8c17a] text-carved">
                Navigation
              </h4>
              <nav className="flex flex-col gap-2.5 text-xs uppercase tracking-wider text-[#e5e2e1]/70 dark:text-[#e5e2e1]/70 light:text-[#5E5244]">
                <button
                  onClick={() => onSelectTab('home')}
                  className="text-left hover:text-[#fef9f1] light:hover:text-[#181614] transition-colors cursor-pointer"
                >
                  Home Atelier
                </button>
                <button
                  onClick={() => onSelectTab('portfolio')}
                  className="text-left hover:text-[#fef9f1] light:hover:text-[#181614] transition-colors cursor-pointer"
                >
                  Cinema &amp; Stills
                </button>
                <button
                  onClick={() => onSelectTab('services')}
                  className="text-left hover:text-[#fef9f1] light:hover:text-[#181614] transition-colors cursor-pointer"
                >
                  Offerings &amp; Pricing
                </button>
                <button
                  onClick={() => onSelectTab('dubai-destination')}
                  className="text-left hover:text-[#fef9f1] light:hover:text-[#181614] transition-colors cursor-pointer"
                >
                  Dubai Destination
                </button>
                <button
                  onClick={() => onSelectTab('contact')}
                  className="text-left text-[#B38842] dark:text-[#e8c17a] hover:text-[#fef9f1] light:hover:text-[#181614] transition-colors cursor-pointer font-medium"
                >
                  Inquire Availability
                </button>
              </nav>
            </div>

            {/* Col 3: Cinematography Disciplines */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B38842] dark:text-[#e8c17a] text-carved">
                Disciplines
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs text-[#e5e2e1]/70 dark:text-[#e5e2e1]/70 light:text-[#5E5244]">
                <li>Royal Hindu Ceremonies</li>
                <li>Editorial Bridal Portraits</li>
                <li>Cinematic Teaser Highlights</li>
                <li>Haldi &amp; Mehendi Reels</li>
                <li>Dubai Pre-Wedding Shoots</li>
              </ul>
            </div>

            {/* Col 4: Studio Atelier & Contact */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B38842] dark:text-[#e8c17a] text-carved">
                Studio Atelier
              </h4>
              <div className="flex flex-col gap-3 text-xs text-[#e5e2e1]/80 dark:text-[#e5e2e1]/80 light:text-[#423A31]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B38842] dark:text-[#e8c17a] shrink-0 mt-0.5" />
                  <span>Chhotki Nawada, Gaya, Bihar 823001, India</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#B38842] dark:text-[#e8c17a] shrink-0" />
                  <a
                    href="tel:+917004375740"
                    className="hover:text-[#B38842] dark:hover:text-[#e8c17a] transition-colors"
                  >
                    +91 70043 75740
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#B38842] dark:text-[#e8c17a] shrink-0" />
                  <a
                    href="mailto:info@theroyalfilms.in"
                    className="hover:text-[#B38842] dark:hover:text-[#e8c17a] transition-colors"
                  >
                    info@theroyalfilms.in
                  </a>
                </div>

                <div className="pt-2">
                  <span className="inline-block px-3 py-1 bg-[#d60000]/15 dark:bg-[#d60000]/15 light:bg-[#C41E1E]/10 border border-[#d60000]/30 light:border-[#C41E1E]/25 text-[#d60000] dark:text-[#ffb4a8] text-[10px] uppercase tracking-[0.2em] font-semibold">
                    Accepting 2025 - 2026 Commissions
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Copyright Bar: Privacy, Terms, and Cookies ONLY HERE */}
          <div className="pt-8 border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#e5e2e1]/60 dark:text-[#e5e2e1]/60 light:text-[#6E6354]">
            <p className="uppercase tracking-[0.15em] text-carved text-center sm:text-left">
              © The Royal Films. All cinematic rights reserved.
            </p>

            {/* Functional Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 uppercase tracking-[0.15em]">
              <button
                onClick={() => onOpenLegal('privacy')}
                className="hover:text-[#B38842] dark:hover:text-[#e8c17a] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Shield className="w-3 h-3 text-[#B38842] dark:text-[#e8c17a]" />
                <span>Privacy Policy</span>
              </button>

              <button
                onClick={() => onOpenLegal('terms')}
                className="hover:text-[#B38842] dark:hover:text-[#e8c17a] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <FileText className="w-3 h-3 text-[#B38842] dark:text-[#e8c17a]" />
                <span>Terms of Commission</span>
              </button>

              <button
                onClick={() => onOpenLegal('cookies')}
                className="hover:text-[#B38842] dark:hover:text-[#e8c17a] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Cookie className="w-3 h-3 text-[#B38842] dark:text-[#e8c17a]" />
                <span>Cookie Policy</span>
              </button>

              <span className="text-[#B38842] dark:text-[#e8c17a] hidden lg:inline">• Gaya &amp; Dubai</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
