'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Shield, FileText, Cookie, Instagram } from 'lucide-react';
import { INSTAGRAM_PROFILE_URL, INSTAGRAM_HANDLE } from '@/lib/trfImages';
import MinimalWhatsAppIcon from '@/components/MinimalWhatsAppIcon';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenLegal: (tab: 'privacy' | 'terms' | 'cookies') => void;
}

export default function Footer({ onSelectTab, onOpenLegal }: FooterProps) {
  return (
    <footer className="relative w-full overflow-hidden text-white bg-[#FF933E] border-t border-white/20">
      {/* WARM ROYAL GOLD & EMBER GLOW LAYER (PALETTE ORANGE THEME) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Warm Base Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#E87920] via-[#FF933E]/80 to-transparent" />

        {/* Pulsing Glowing Orbs */}
        <div className="absolute -bottom-24 left-1/4 w-[500px] h-[350px] bg-radial from-[#FFCB56]/30 via-[#FFE9A9]/15 to-transparent blur-3xl animate-slow-fire" />
        <div className="absolute -bottom-28 right-1/4 w-[480px] h-[340px] bg-radial from-[#FFE9A9]/25 via-white/10 to-transparent blur-3xl animate-slow-fire [animation-delay:3s]" />

        {/* Floating Golden Sparks */}
        <div className="absolute bottom-10 left-[20%] w-2 h-2 rounded-full bg-white shadow-[0_0_12px_white] animate-ember-1" />
        <div className="absolute bottom-16 left-[45%] w-2 h-2 rounded-full bg-[#FFE9A9] shadow-[0_0_14px_#FFE9A9] animate-ember-2" />
        <div className="absolute bottom-12 right-[30%] w-2 h-2 rounded-full bg-[#FFCB56] shadow-[0_0_10px_#FFCB56] animate-ember-3" />
        <div className="absolute bottom-8 right-[15%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white] animate-ember-1 [animation-delay:2.5s]" />
      </div>

      {/* Luxury Glassmorphic Content Container */}
      <div className="relative z-10 w-full bg-[#FF933E]/95 backdrop-blur-md pt-16 pb-12">
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
                {/* BIG Golden Logo in Footer */}
                <div className="flex items-center gap-4">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src="/assets/golden-royal-films-emblem.png"
                      alt="The Royal Films Golden Emblem"
                      width={120}
                      height={120}
                      className="w-full h-full object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span 
                      className="text-3xl sm:text-4xl text-white leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                      style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Apple Chancery', Georgia, serif" }}
                    >
                      The Royal Films
                    </span>
                    <span className="font-headline uppercase tracking-[0.28em] font-semibold text-[#FFE9A9] text-[10px] sm:text-xs mt-1.5 drop-shadow-sm">
                      Bespoke Wedding Cinematography &amp; Photography
                    </span>
                    <span className="text-[10px] tracking-wider text-white font-bold mt-1">
                      Gaya • Patna • Bodh Gaya • Dubai
                    </span>
                  </div>
                </div>
              </Link>

              {/* Atelier Text */}
              <p className="text-sm leading-relaxed text-white/95 max-w-md font-light">
                Crafting heirloom cinematic wedding films and editorial photography. Documenting sacred rituals, heartfelt vows, and authentic family affection across Gaya, Patna, Bodh Gaya, and international destination horizons including Dubai.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3 py-1 bg-white/15 border border-white/30 text-white text-[10px] uppercase tracking-[0.2em] font-semibold shadow-sm rounded-sm">
                  AAFT Trained Cinema
                </span>
                <span className="px-3 py-1 bg-white/15 border border-white/30 text-white text-[10px] uppercase tracking-[0.2em] font-semibold shadow-sm rounded-sm">
                  4K HDR Master Film
                </span>
                <span className="px-3 py-1 bg-white/20 border border-white/40 text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm">
                  Dubai Certified
                </span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-white drop-shadow-sm">
                Navigation
              </h4>
              <nav className="flex flex-col gap-2.5 text-xs uppercase tracking-wider text-white/85">
                <Link
                  href="/"
                  onClick={() => onSelectTab('home')}
                  className="text-left hover:text-[#FFE9A9] transition-colors cursor-pointer"
                >
                  Home Atelier
                </Link>
                <Link
                  href="/portfolio"
                  onClick={() => onSelectTab('portfolio')}
                  className="text-left hover:text-[#FFE9A9] transition-colors cursor-pointer"
                >
                  Cinema &amp; Stills
                </Link>
                <Link
                  href="/services"
                  onClick={() => onSelectTab('services')}
                  className="text-left hover:text-[#FFE9A9] transition-colors cursor-pointer"
                >
                  Offerings &amp; Pricing
                </Link>
                <Link
                  href="/dubai"
                  onClick={() => onSelectTab('dubai-destination')}
                  className="text-left hover:text-[#FFE9A9] transition-colors cursor-pointer"
                >
                  Dubai Destination
                </Link>
                <Link
                  href="/contact"
                  onClick={() => onSelectTab('contact')}
                  className="text-left hover:text-[#FFE9A9] transition-colors cursor-pointer"
                >
                  Contact &amp; Dates
                </Link>
              </nav>
            </div>

            {/* Col 3: Services Showcase */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-white drop-shadow-sm">
                Specialties
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs uppercase tracking-wider text-white/85">
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
              <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-white drop-shadow-sm">
                Atelier Headquarters
              </h4>
              <div className="flex flex-col gap-3 text-xs text-white/95">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FFE9A9] shrink-0 mt-0.5" />
                  <span>
                    Chhotki Nawada, Delha, Gaya, Bihar 823002
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <a
                    href="tel:+918210351286"
                    aria-label="Call Atelier Direct"
                    title="Call Atelier Direct"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white text-white hover:text-[#FF933E] border border-white/35 transition-all text-[11px] font-semibold uppercase tracking-wider rounded-md group shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                    <span>Call Direct</span>
                  </a>
                  <a
                    href="https://wa.me/918210351286?text=Hello%20The%20Royal%20Films%2C%20I%20would%20like%20to%20inquire%20about%20wedding%20dates."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Concierge"
                    title="WhatsApp Concierge"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white text-white hover:text-[#25D366] border border-white/35 transition-all text-[11px] font-semibold uppercase tracking-wider rounded-md group shadow-sm"
                  >
                    <MinimalWhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#FFE9A9] shrink-0" />
                  <a
                    href="mailto:contact@theroyalfilms.com"
                    className="hover:text-[#FFE9A9] transition-colors tracking-wide"
                  >
                    contact@theroyalfilms.com
                  </a>
                </div>
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/20 hover:bg-white text-white hover:text-[#E4405F] border border-white/35 text-xs font-semibold tracking-wider transition-all rounded-md shadow-sm"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>{INSTAGRAM_HANDLE}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Compliance */}
          <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
            <div className="flex items-center gap-3">
              <p>
                &copy; {new Date().getFullYear()} The Royal Films Atelier. All rights reserved.
              </p>
              <span className="hidden sm:inline text-[#FFE9A9]">•</span>
              <span className="hidden sm:inline font-cursive text-base text-[#FFE9A9]" style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Apple Chancery', Georgia, serif" }}>
                Filmed with Devotion
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-wider">
              <button
                onClick={() => onOpenLegal('privacy')}
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-white/85"
              >
                <Shield className="w-3 h-3 text-[#FFE9A9]" />
                Privacy
              </button>
              <span>•</span>
              <button
                onClick={() => onOpenLegal('terms')}
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-white/85"
              >
                <FileText className="w-3 h-3 text-[#FFE9A9]" />
                Terms
              </button>
              <span>•</span>
              <button
                onClick={() => onOpenLegal('cookies')}
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-white/85"
              >
                <Cookie className="w-3 h-3 text-[#FFE9A9]" />
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

