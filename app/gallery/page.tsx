'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AvailabilityModal from '@/components/AvailabilityModal';
import ScrollToTop from '@/components/ScrollToTop';
import MobileBottomNav from '@/components/MobileBottomNav';
import InteractiveGrid from '@/components/InteractiveGrid';
import { Camera, Film, MapPin, Eye, Calendar } from 'lucide-react';
import CookieBanner from '@/components/CookieBanner';
import LegalModal, { LegalTabType } from '@/components/LegalModal';
import { TRF_LANDSCAPE, TRF_PORTRAIT, TrfImageItem } from '@/lib/trfImages';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'wedding' | 'prewedding' | 'haldi' | 'reception' | 'dubai'>('all');
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; tab: LegalTabType }>({
    isOpen: false,
    tab: 'privacy',
  });

  // Permanently enforce 100% light theme
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    document.documentElement.style.colorScheme = 'light';
  }, []);

  // Combine both landscape and portrait collections into unified archive
  const allImages: TrfImageItem[] = [
    ...TRF_PORTRAIT,
    ...TRF_LANDSCAPE,
  ];

  const filteredImages = activeFilter === 'all'
    ? allImages
    : allImages.filter((item) => item.category === activeFilter);

  const filters: { id: 'all' | 'wedding' | 'prewedding' | 'haldi' | 'reception' | 'dubai'; label: string }[] = [
    { id: 'all', label: 'Complete Archive' },
    { id: 'wedding', label: 'Sacred Weddings' },
    { id: 'prewedding', label: 'Pre-Wedding Escapes' },
    { id: 'haldi', label: 'Haldi & Sangeet' },
    { id: 'reception', label: 'Royal Receptions' },
    { id: 'dubai', label: 'Dubai Destination' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 selection:bg-[#FFE9A9] selection:text-[#FF933E] bg-[#FFFDF9] text-[#241912]">
      {/* Translucent Navbar */}
      <Navbar 
        currentTab="gallery"
        onSelectTab={(tab) => {
          if (tab === 'home') window.location.href = '/';
          else if (tab === 'portfolio') window.location.href = '/portfolio';
          else if (tab === 'services') window.location.href = '/services';
          else if (tab === 'dubai-destination') window.location.href = '/dubai';
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAvailability={() => setIsAvailabilityOpen(true)}
      />

      <main className="w-full flex-1 pt-28 sm:pt-32 pb-24 md:pb-16 px-4 sm:px-8 lg:px-14">
        <InteractiveGrid />

        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Header styled like "We Don't Just Shoot Weddings." */}
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
            <div className="clay-pill px-4 py-1.5 border border-[#FFCB56] text-[#FF933E] text-[11px] uppercase tracking-[0.25em] font-bold">
              The Royal Archive
            </div>

            <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl text-[#241912] font-light leading-tight">
              We Don&apos;t Just Capture Frames. <br />
              <span
                className="font-normal text-[#FF933E]"
                style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Pinyon Script', 'Apple Chancery', Georgia, serif" }}
              >
                We Preserve Sacred Dynasties.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#594233] leading-relaxed font-light max-w-2xl">
              Authentic heirloom photographic chronicles captured across Gaya, Bodh Gaya, Patna, and international destination horizons including Dubai.
            </p>
          </div>

          {/* Filter Pills with Claymorphism Aesthetics */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`clay-pill px-4 sm:px-5 py-2 sm:py-2.5 text-xs uppercase tracking-[0.18em] font-bold transition-all cursor-pointer select-none active:scale-95 ${
                  activeFilter === filter.id
                    ? '!bg-[#FF933E] !text-white border-2 border-[#FFCB56] shadow-[0_6px_20px_rgba(255,147,62,0.45)]'
                    : 'bg-[#FFFDF9] text-[#241912] border border-[#FFCB56]/50 hover:border-[#FF933E]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Photo Gallery Grid - Optimized for Smartphone & Desktop (No popup on click) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredImages.map((photo, idx) => {
              const isLandscape = photo.orientation === 'landscape';

              return (
                <div
                  key={`${photo.id}-${idx}`}
                  className="clay-card relative flex flex-col overflow-hidden bg-[#FFFDF9] border border-[#FFCB56]/40 select-none group"
                >
                  {/* Ambient Light Glow Behind Photo */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#FF933E]/20 via-[#FFCB56]/15 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" />

                  {/* Image Container with Proper Aspect Ratio (Faces preserved, not cut) */}
                  <div className={`relative overflow-hidden bg-[#1A130E] ${isLandscape ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}>
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      priority={idx < 4}
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Atmospheric Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    {/* Minimal Category Badge */}
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#FF933E] text-[10px] uppercase tracking-wider font-bold border border-[#FFCB56] shadow-xs flex items-center gap-1">
                        <Camera className="w-3 h-3 text-[#73A5CA]" />
                        <span>{photo.category}</span>
                      </span>
                    </div>
                  </div>

                  {/* Clean Minimal Caption Area */}
                  <div className="p-4 sm:p-5 flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#73A5CA] font-bold">
                      <MapPin className="w-3 h-3 text-[#FF933E]" />
                      <span>{photo.location}</span>
                    </div>

                    <h3 className="font-headline text-base sm:text-lg text-[#241912] font-semibold leading-snug">
                      {photo.title}
                    </h3>

                    <p className="text-xs text-[#594233] line-clamp-2 font-light leading-relaxed">
                      {photo.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Availability CTA Banner */}
          <div className="clay-card p-6 sm:p-10 border-2 border-[#FFCB56] bg-gradient-to-r from-[#FFFDF9] via-[#FAF3E6] to-[#FFFDF9] flex flex-col sm:flex-row items-center justify-between gap-6 mt-6">
            <div className="flex flex-col gap-1.5 text-center sm:text-left">
              <h3 className="font-headline text-2xl sm:text-3xl text-[#241912] font-light">
                Commission The Royal Atelier <br />
                <span
                  className="font-normal text-[#FF933E]"
                  style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Pinyon Script', Georgia, serif" }}
                >
                  For Your Sacred Celebration
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-[#594233] max-w-lg font-light">
                We document limited celebrations annually to ensure bespoke presence and archival color grading.
              </p>
            </div>

            <button
              onClick={() => setIsAvailabilityOpen(true)}
              className="clay-button px-6 sm:px-8 py-3.5 bg-[#FF933E] hover:bg-[#ff8425] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-[0_4px_18px_rgba(255,147,62,0.4)] cursor-pointer flex items-center gap-2 active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#FFE9A9]" />
              <span>Check Studio Dates</span>
            </button>
          </div>
        </div>
      </main>

      {/* Translucent Footer */}
      <Footer 
        onSelectTab={(tab) => {
          if (tab === 'home') window.location.href = '/';
          else if (tab === 'portfolio') window.location.href = '/portfolio';
          else if (tab === 'services') window.location.href = '/services';
          else if (tab === 'dubai-destination') window.location.href = '/dubai';
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenLegal={(tab) => setLegalModal({ isOpen: true, tab })}
      />

      <CookieBanner onOpenCookiePolicy={() => setLegalModal({ isOpen: true, tab: 'cookies' })} />
      <LegalModal 
        isOpen={legalModal.isOpen}
        initialTab={legalModal.tab}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
      />

      <ScrollToTop />
      <MobileBottomNav 
        currentTab="gallery"
        onSelectTab={(tab) => {
          if (tab === 'home') window.location.href = '/';
          else if (tab === 'portfolio') window.location.href = '/portfolio';
          else if (tab === 'services') window.location.href = '/services';
          else if (tab === 'dubai-destination') window.location.href = '/dubai';
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAvailability={() => setIsAvailabilityOpen(true)}
      />

      <AvailabilityModal 
        isOpen={isAvailabilityOpen}
        onClose={() => setIsAvailabilityOpen(false)}
      />
    </div>
  );
}
