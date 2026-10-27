'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Shield, FileText, Cookie, Instagram, Youtube, Award } from 'lucide-react';
import RoyalLogo from '@/components/RoyalLogo';
import { INSTAGRAM_PROFILE_URL, INSTAGRAM_HANDLE } from '@/lib/trfImages';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenLegal: (tab: 'privacy' | 'terms' | 'cookies') => void;
}

export default function Footer({ onSelectTab, onOpenLegal }: FooterProps) {
  return (
    <footer className="relative w-full overflow-hidden text-[#241912] bg-[#FFFDF9] border-t border-[#FFCB56]/30">
      {/* WARM SUNSHINE & HONEY GOLD GLOW LAYER (LIGHT THEME) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Warm Base */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#FFE9A9]/50 via-[#FFF4E5]/30 to-transparent" />

        {/* Pulsing Glowing Orbs with New Palette */}
        <div className="absolute -bottom-24 left-1/4 w-[500px] h-[350px] bg-radial from-[#FF933E]/15 via-[#FFCB56]/10 to-transparent blur-3xl animate-slow-fire" />
        <div className="absolute -bottom-28 right-1/4 w-[480px] h-[340px] bg-radial from-[#FFCB56]/15 via-[#73A5CA]/10 to-transparent blur-3xl animate-slow-fire [animation-delay:3s]" />

        {/* Floating Golden Sparks */}
        <div className="absolute bottom-10 left-[20%] w-2 h-2 rounded-full bg-[#FF933E] shadow-[0_0_10px_#FF933E] animate-ember-1" />
        <div className="absolute bottom-16 left-[45%] w-2 h-2 rounded-full bg-[#FFCB56] shadow-[0_0_12px_#FFCB56] animate-ember-2" />
        <div className="absolute bottom-12 right-[30%] w-2 h-2 rounded-full bg-[#73A5CA] shadow-[0_0_10px_#73A5CA] animate-ember-3" />
        <div className="absolute bottom-8 right-[15%] w-1.5 h-1.5 rounded-full bg-[#FF933E] shadow-[0_0_8px_#FF933E] animate-ember-1 [animation-delay:2.5s]" />
      </div>

      {/* Translucent Glassmorphic Content Container */}
      <div className="relative z-10 w-full bg-[#FFFDF9]/92 backdrop-blur-2xl pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 mb-14 items-start">
            {/* Col 1: BIG PROMINENT GOLDEN EMBLEM LOGO + Atelier Intro */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Link
                href="/"
                onClick={() => onSelectTab('home')}
                className="text-left focus:outline-none cursor-pointer inline-block group"
                aria-label="The Royal Films Home"
              >
                {/* BIG Golden Logo in Footer as requested */}
                <div className="flex items-center gap-4">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src="/assets/golden-royal-films-emblem.png"
                      alt="The Royal Films Golden Emblem"
                      width={120}
                      height={120}
                      className="w-full h-full object-contain drop-shadow-[0_4px_16px_rgba(255,147,62,0.35)]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span 
                      className="text-3xl sm:text-4xl text-[#FF933E] leading-none drop-shadow-sm"
                      style={{ fontFamily: "'Great Vibes', cursive" }}
                    >
                      The Royal Films
                    </span>
                    <span className="font-headline uppercase tracking-[0.28em] font-semibold text-[#594233] text-[10px] sm:text-xs mt-1.5">
                      Bespoke Wedding Cinematography &amp; Photography
                    </span>
                    <span className="text-[10px] tracking-wider text-[#73A5CA] font-bold mt-1">
                      Gaya • Patna • Bodh Gaya • Dubai
                    </span>
                  </div>
                </div>
              </Link>

              {/* Atelier Text */}
              <p className="text-sm leading-relaxed text-[#594233] max-w-md font-light">
                Crafting heirloom cinematic wedding films and editorial photography. Documenting sacred rituals, heartfelt vows, and authentic family affection across Gaya, Patna, Bodh Gaya, and international destination horizons including Dubai.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3 py-1 bg-white border border-[#FFCB56]/60 text-[#FF933E] text-[10px] uppercase tracking-[0.2em] font-semibold shadow-sm">
                  AAFT Trained Cinema
                </span>
                <span className="px-3 py-1 bg-white border border-[#FFCB56]/60 text-[#FF933E] text-[10px] uppercase tracking-[0.2em] font-semibold shadow-sm">
                  4K HDR Master Film
                </span>
                <span className="px-3 py-1 bg-[#73A5CA]/15 border border-[#73A5CA] text-[#0A2B42] text-[10px] uppercase tracking-[0.2em] font-bold">
                  Dubai Certified
                </span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF933E]">
                Navigation
              </h4>
              <nav className="flex flex-col gap-2.5 text-xs uppercase tracking-wider text-[#594233]">
                <Link
                  href="/"
                  onClick={() => onSelectTab('home')}
                  className="text-left hover:text-[#FF933E] transition-colors cursor-pointer"
                >
                  Home Atelier
                </Link>
                <Link
                  href="/portfolio"
                  onClick={() => onSelectTab('portfolio')}
                  className="text-left hover:text-[#FF933E] transition-colors cursor-pointer"
                >
                  Cinema &amp; Stills
                </Link>
                <Link
                  href="/services"
                  onClick={() => onSelectTab('services')}
                  className="text-left hover:text-[#FF933E] transition-colors cursor-pointer"
                >
                  Offerings &amp; Pricing
                </Link>
                <Link
                  href="/dubai"
                  onClick={() => onSelectTab('dubai-destination')}
                  className="text-left hover:text-[#FF933E] transition-colors cursor-pointer"
                >
                  Dubai Destination
                </Link>
                <Link
                  href="/contact"
                  onClick={() => onSelectTab('contact')}
                  className="text-left hover:text-[#FF933E] transition-colors cursor-pointer"
                >
                  Contact &amp; Dates
                </Link>
              </nav>
            </div>

            {/* Col 3: Services Showcase */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF933E]">
                Specialties
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs uppercase tracking-wider text-[#594233]">
                <li>Royal Wedding Films</li>
                <li>Editorial Bridal Stills</li>
                <li>Haldi &amp; Sangeet Stories</li>
                <li>Pre-Wedding Destination</li>
                <li>Licensed Drone Cinematography</li>
                <li>Fine Art Coffee Table Books</li>
              </ul>
            </div>

            {/* Col 4: Atelier Studio Direct Contact */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF933E]">
                Atelier Headquarters
              </h4>
              <div className="flex flex-col gap-3 text-xs text-[#594233]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FF933E] shrink-0 mt-0.5" />
                  <span>
                    Chhotki Nawada, Delha, Gaya, Bihar 823002
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#FF933E] shrink-0" />
                  <a
                    href="tel:+918210351286"
                    className="hover:text-[#FF933E] transition-colors font-medium tracking-wide"
                  >
                    +91 82103 51286
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#FF933E] shrink-0" />
                  <a
                    href="mailto:contact@theroyalfilms.com"
                    className="hover:text-[#FF933E] transition-colors tracking-wide"
                  >
                    contact@theroyalfilms.com
                  </a>
                </div>
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#FFCB56] text-[#FF933E] hover:bg-[#FFE9A9]/40 text-xs font-semibold tracking-wider transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>{INSTAGRAM_HANDLE}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Compliance */}
          <div className="pt-8 border-t border-[#FFE9A9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#594233]">
            <div className="flex items-center gap-3">
              <p>
                &copy; {new Date().getFullYear()} The Royal Films Atelier. All rights reserved.
              </p>
              <span className="hidden sm:inline text-[#FFCB56]">•</span>
              <span className="hidden sm:inline font-cursive text-sm text-[#FF933E]" style={{ fontFamily: "'Great Vibes', cursive" }}>
                Filmed with Devotion
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-wider">
              <button
                onClick={() => onOpenLegal('privacy')}
                className="hover:text-[#FF933E] transition-colors cursor-pointer flex items-center gap-1"
              >
                <Shield className="w-3 h-3 text-[#FF933E]" />
                Privacy
              </button>
              <span>•</span>
              <button
                onClick={() => onOpenLegal('terms')}
                className="hover:text-[#FF933E] transition-colors cursor-pointer flex items-center gap-1"
              >
                <FileText className="w-3 h-3 text-[#FF933E]" />
                Terms
              </button>
              <span>•</span>
              <button
                onClick={() => onOpenLegal('cookies')}
                className="hover:text-[#FF933E] transition-colors cursor-pointer flex items-center gap-1"
              >
                <Cookie className="w-3 h-3 text-[#FF933E]" />
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
