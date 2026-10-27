'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, FileText, Cookie, Instagram, Youtube, Award } from 'lucide-react';
import RoyalLogo from '@/components/RoyalLogo';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenLegal: (tab: 'privacy' | 'terms' | 'cookies') => void;
}

export default function Footer({ onSelectTab, onOpenLegal }: FooterProps) {
  return (
    <footer className="relative w-full overflow-hidden text-[#1A130E] dark:text-[#FAF3EC] transition-colors duration-300 bg-[#FAF4ED] dark:bg-[#120E0A]">
      {/* GLOWING SLOW FIRE & EMBER BACKGROUND LAYER */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Core Flame Base */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#FFEAD3]/80 dark:from-[#3d0802]/70 via-[#FFF4E8]/40 dark:via-[#1f0d04]/45 to-transparent mix-blend-multiply dark:mix-blend-screen" />

        {/* Pulsing Glowing Orbs with Brand Palette */}
        <div className="absolute -bottom-24 left-1/4 w-[500px] h-[350px] bg-radial from-[#D46743]/20 dark:from-[#ff4400]/40 via-[#E89B5B]/15 dark:via-[#d60000]/25 to-transparent blur-3xl animate-slow-fire" />
        <div className="absolute -bottom-28 right-1/4 w-[480px] h-[340px] bg-radial from-[#E89B5B]/20 dark:from-[#ff9900]/30 via-[#D46743]/15 to-transparent blur-3xl animate-slow-fire [animation-delay:3s]" />

        {/* Floating Sparks / Embers */}
        <div className="absolute bottom-10 left-[20%] w-1.5 h-1.5 rounded-full bg-[#E89B5B] shadow-[0_0_10px_#E89B5B] animate-ember-1" />
        <div className="absolute bottom-16 left-[45%] w-2 h-2 rounded-full bg-[#D46743] shadow-[0_0_12px_#D46743] animate-ember-2" />
        <div className="absolute bottom-12 right-[30%] w-1.5 h-1.5 rounded-full bg-[#BFE7EA] shadow-[0_0_10px_#BFE7EA] animate-ember-3" />
        <div className="absolute bottom-8 right-[15%] w-1 h-1 rounded-full bg-[#E89B5B] shadow-[0_0_8px_#E89B5B] animate-ember-1 [animation-delay:2.5s]" />
      </div>

      {/* Translucent Glassmorphic Content Container */}
      <div className="relative z-10 w-full bg-[#FAF4ED]/90 dark:bg-[#120E0A]/90 backdrop-blur-2xl border-t border-[#E8DCCF] dark:border-white/10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 mb-14 items-start">
            {/* Col 1: BIG PROMINENT MINIMALIST LOGO + Atelier Intro */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Link
                href="/"
                onClick={() => onSelectTab('home')}
                className="text-left focus:outline-none cursor-pointer inline-block"
                aria-label="The Royal Films Home"
              >
                {/* BIG Logo as requested */}
                <RoyalLogo size="xl" showSubtitle={true} variant="full" />
              </Link>

              {/* Atelier Text */}
              <p className="text-sm leading-relaxed text-[#524237] dark:text-[#D9C7B8] max-w-md font-light">
                Crafting heirloom cinematic wedding films and editorial photography. Documenting sacred rituals, unspoken emotions, and authentic family celebration across Gaya, Patna, Bodh Gaya, and international horizons including Dubai.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3 py-1 bg-white dark:bg-white/5 border border-[#E8DCCF] dark:border-white/10 text-[#D46743] dark:text-[#E89B5B] text-[10px] uppercase tracking-[0.2em] font-semibold shadow-sm">
                  AAFT Trained Cinema
                </span>
                <span className="px-3 py-1 bg-white dark:bg-white/5 border border-[#E8DCCF] dark:border-white/10 text-[#D46743] dark:text-[#E89B5B] text-[10px] uppercase tracking-[0.2em] font-semibold shadow-sm">
                  4K HDR Master
                </span>
                <span className="px-3 py-1 bg-[#BFE7EA]/30 border border-[#BFE7EA] text-[#0F3538] dark:text-[#BFE7EA] text-[10px] uppercase tracking-[0.2em] font-semibold">
                  Dubai Certified
                </span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D46743] dark:text-[#E89B5B]">
                Navigation
              </h4>
              <nav className="flex flex-col gap-2.5 text-xs uppercase tracking-wider text-[#524237] dark:text-[#D9C7B8]">
                <Link
                  href="/"
                  onClick={() => onSelectTab('home')}
                  className="text-left hover:text-[#D46743] dark:hover:text-[#E89B5B] transition-colors cursor-pointer"
                >
                  Home Atelier
                </Link>
                <Link
                  href="/portfolio"
                  onClick={() => onSelectTab('portfolio')}
                  className="text-left hover:text-[#D46743] dark:hover:text-[#E89B5B] transition-colors cursor-pointer"
                >
                  Cinema &amp; Stills
                </Link>
                <Link
                  href="/services"
                  onClick={() => onSelectTab('services')}
                  className="text-left hover:text-[#D46743] dark:hover:text-[#E89B5B] transition-colors cursor-pointer"
                >
                  Offerings &amp; Pricing
                </Link>
                <Link
                  href="/dubai"
                  onClick={() => onSelectTab('dubai-destination')}
                  className="text-left hover:text-[#D46743] dark:hover:text-[#E89B5B] transition-colors cursor-pointer"
                >
                  Dubai Destination
                </Link>
                <Link
                  href="/contact"
                  onClick={() => onSelectTab('contact')}
                  className="text-left text-[#D46743] dark:text-[#E89B5B] hover:underline font-semibold pt-1"
                >
                  Inquire Availability
                </Link>
              </nav>
            </div>

            {/* Col 3: Cinematography Disciplines */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D46743] dark:text-[#E89B5B]">
                Disciplines
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs text-[#524237] dark:text-[#D9C7B8] font-light">
                <li>Royal Hindu Ceremonies</li>
                <li>Editorial Bridal Portraits</li>
                <li>Cinematic Teaser Highlights</li>
                <li>Haldi &amp; Mehendi Reels</li>
                <li>Dubai Desert &amp; Yacht Shoots</li>
                <li>Heritage Palace Sessions</li>
              </ul>
            </div>

            {/* Col 4: Studio Atelier & Contact */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D46743] dark:text-[#E89B5B]">
                Studio Atelier
              </h4>
              <div className="flex flex-col gap-3 text-xs text-[#524237] dark:text-[#D9C7B8]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D46743] dark:text-[#E89B5B] shrink-0 mt-0.5" />
                  <span>Chhotki Nawada, Gaya, Bihar 823001, India</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#D46743] dark:text-[#E89B5B] shrink-0" />
                  <a
                    href="tel:+917004375740"
                    className="hover:text-[#D46743] dark:hover:text-[#E89B5B] transition-colors font-medium"
                  >
                    +91 70043 75740
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#D46743] dark:text-[#E89B5B] shrink-0" />
                  <a
                    href="mailto:info@theroyalfilms.in"
                    className="hover:text-[#D46743] dark:hover:text-[#E89B5B] transition-colors font-medium"
                  >
                    info@theroyalfilms.in
                  </a>
                </div>

                <div className="pt-2">
                  <span className="inline-block px-3 py-1.5 bg-[#D46743]/15 dark:bg-[#D46743]/20 border border-[#D46743]/30 text-[#D46743] dark:text-[#E89B5B] text-[10px] uppercase tracking-[0.2em] font-semibold">
                    Accepting 2025 - 2026 Commissions
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className="pt-8 border-t border-[#E8DCCF] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7C685B] dark:text-[#A49182]">
            <p className="uppercase tracking-[0.15em] text-center sm:text-left">
              © The Royal Films. All cinematic rights reserved.
            </p>

            {/* Functional Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 uppercase tracking-[0.15em]">
              <button
                onClick={() => onOpenLegal('privacy')}
                className="hover:text-[#D46743] dark:hover:text-[#E89B5B] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5 text-[#D46743] dark:text-[#E89B5B]" />
                <span>Privacy Policy</span>
              </button>

              <button
                onClick={() => onOpenLegal('terms')}
                className="hover:text-[#D46743] dark:hover:text-[#E89B5B] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-[#D46743] dark:text-[#E89B5B]" />
                <span>Terms of Commission</span>
              </button>

              <button
                onClick={() => onOpenLegal('cookies')}
                className="hover:text-[#D46743] dark:hover:text-[#E89B5B] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Cookie className="w-3.5 h-3.5 text-[#D46743] dark:text-[#E89B5B]" />
                <span>Cookie Policy</span>
              </button>

              <span className="text-[#D46743] dark:text-[#E89B5B] hidden lg:inline">• Gaya &amp; Dubai</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
