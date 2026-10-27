'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Film, Camera, Play, Sparkles, Filter, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioModal, { PortfolioItemData } from '@/components/PortfolioModal';
import AvailabilityModal from '@/components/AvailabilityModal';
import ClientPortalModal from '@/components/ClientPortalModal';
import ScrollToTop from '@/components/ScrollToTop';
import LegalModal, { LegalTabType } from '@/components/LegalModal';
import CookieBanner from '@/components/CookieBanner';
import MobileBottomNav from '@/components/MobileBottomNav';
import InteractiveGrid from '@/components/InteractiveGrid';
import { TRF_LANDSCAPE, TRF_PORTRAIT } from '@/lib/trfImages';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItemData | null>(null);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; tab: LegalTabType }>({
    isOpen: false,
    tab: 'privacy',
  });

  // Authentic TRF Works Collection using real user images
  const portfolioItems: (PortfolioItemData & { orientation: 'landscape' | 'portrait' })[] = [
    {
      id: 'sacred-pheras-mandap',
      category: 'wedding',
      badge: '4K Master Film',
      badgeType: 'video',
      location: 'Gaya Royal Mandap • Holy Pheras',
      title: 'The Sacred Pheras & Royal Mandap',
      description:
        'Vows around the holy fire in traditional royal splendor, preserving tender glance exchanges and family blessings.',
      image: TRF_LANDSCAPE[0].src,
      orientation: 'landscape',
    },
    {
      id: 'royal-heirloom-bride',
      category: 'wedding',
      badge: 'Editorial Portrait',
      badgeType: 'photo',
      location: 'Royal Bridal Suite • Gaya',
      title: 'The Regal Heirloom Bride',
      description:
        'Crimson silk lehenga, heritage kundan jewelry, and timeless poise captured in natural diffused lighting.',
      image: TRF_PORTRAIT[0].src,
      orientation: 'portrait',
    },
    {
      id: 'grand-varmala-spectacle',
      category: 'wedding',
      badge: 'Cinematic Highlight',
      badgeType: 'video',
      location: 'Patna Heritage Courtyard • Varmala',
      title: 'The Grand Varmala Exchange',
      description:
        'Cold pyro sparks, rose petal showers, and royal entry rhythms celebrating the union of two families.',
      image: TRF_LANDSCAPE[1].src,
      orientation: 'landscape',
    },
    {
      id: 'yellow-petals-haldi',
      category: 'haldi',
      badge: 'Candid Joy',
      badgeType: 'story',
      location: 'Chhotki Nawada • Haldi Festivities',
      title: 'Golden Petals & Haldi Aura',
      description:
        'Drenched in vibrant yellow marigold petals and laughter, surrounded by cousins and elders.',
      image: TRF_PORTRAIT[3].src,
      orientation: 'portrait',
    },
    {
      id: 'dubai-destination-horizon',
      category: 'prewedding',
      badge: 'Destination Film',
      badgeType: 'video',
      location: 'Dubai Marina & Desert Oasis',
      title: 'Arabian Dunes & Skyline Pre-Wedding',
      description:
        'An international destination love story shot against warm desert sands and the Dubai waterfront.',
      image: TRF_LANDSCAPE[6].src,
      orientation: 'landscape',
    },
    {
      id: 'eternal-embrace-couple',
      category: 'prewedding',
      badge: 'Intimate Stills',
      badgeType: 'photo',
      location: 'Bihar Heritage Escapes',
      title: 'Eternal Embrace Before the Vows',
      description:
        'A quiet second away from wedding calendar crowds, framed with cinematic intimacy.',
      image: TRF_PORTRAIT[1].src,
      orientation: 'portrait',
    },
    {
      id: 'reception-chandeliers',
      category: 'reception',
      badge: 'Grand Stills',
      badgeType: 'photo',
      location: 'Bodh Gaya Luxury Pavilion',
      title: 'The Royal Reception Night',
      description:
        'Under soaring crystal chandeliers, celebrating heartfelt speeches, toasts, and evening congratulations.',
      image: TRF_LANDSCAPE[3].src,
      orientation: 'landscape',
    },
    {
      id: 'under-golden-dupatta',
      category: 'wedding',
      badge: 'Atelier Stills',
      badgeType: 'photo',
      location: 'Gaya Atelier • Ritual Details',
      title: 'Under the Golden Dupatta',
      description:
        'Delicate zardozi embroidery and emotional eyes capturing sacred traditions handed down through generations.',
      image: TRF_PORTRAIT[5].src,
      orientation: 'portrait',
    },
    {
      id: 'family-blessings-candid',
      category: 'wedding',
      badge: 'Candid Cinema',
      badgeType: 'story',
      location: 'Gaya • Family Blessings',
      title: 'Unspoken Family Blessings',
      description:
        'Paternal tears of pride and joyful smiles preserved with discretion and quiet reverence.',
      image: TRF_LANDSCAPE[7].src,
      orientation: 'landscape',
    },
    {
      id: 'mehendi-sacred-art',
      category: 'wedding',
      badge: 'Intricate Detail',
      badgeType: 'photo',
      location: 'Gaya • Bridal Mehndi',
      title: 'Sacred Henna Artistry',
      description:
        'Intricate bridal mehndi celebrating eternal love, documented in sharp macro focal clarity.',
      image: TRF_PORTRAIT[7].src,
      orientation: 'portrait',
    },
    {
      id: 'twilight-heritage-symphony',
      category: 'prewedding',
      badge: 'Sunset Silhouette',
      badgeType: 'photo',
      location: 'Gaya Heritage Pavilion',
      title: 'Twilight Heritage Symphony',
      description:
        'Warm golden hour lighting framing the couple amidst historic Bihari arches.',
      image: TRF_LANDSCAPE[4].src,
      orientation: 'landscape',
    },
    {
      id: 'reception-velvet-couture',
      category: 'reception',
      badge: 'Evening Stills',
      badgeType: 'photo',
      location: 'Bodh Gaya Grand Hotel',
      title: 'Evening Couture & Velvet Stills',
      description:
        'Contemporary designer bridal wear meeting timeless royal portraits.',
      image: TRF_PORTRAIT[6].src,
      orientation: 'portrait',
    },
  ];

  const filteredPortfolio =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }, []);

  const handleTabChange = (tab: string) => {
    if (tab === 'contact') {
      setIsAvailabilityOpen(true);
      return;
    }
    if (tab === 'home') {
      window.location.href = '/';
    } else if (tab === 'services') {
      window.location.href = '/services';
    } else if (tab === 'dubai-destination') {
      window.location.href = '/dubai';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FFFDF9] text-[#241912] selection:bg-[#FFE9A9] selection:text-[#FF933E]">
      <Navbar 
        currentTab="portfolio"
        onSelectTab={handleTabChange}
        onOpenAvailability={() => setIsAvailabilityOpen(true)}
      />

      <main className="w-full flex-1 pt-28 pb-24 md:pb-16 px-5 sm:px-8 lg:px-14">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#FFCB56]/30 pb-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs text-[#FF933E] uppercase tracking-[0.25em] font-bold">
                Curated Cinema &amp; Photography Archive
              </span>
              <h1 className="font-headline text-3xl sm:text-5xl text-[#241912] font-light">
                The Royal Films Gallery
              </h1>
              <p 
                className="text-2xl sm:text-3xl text-[#FF933E] -mt-1"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                &ldquo;A visual archive of family legacies and unscripted devotion.&rdquo;
              </p>
            </div>

            {/* Client Portal Button */}
            <button
              onClick={() => setIsPortalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#FFCB56] text-[#FF933E] text-xs uppercase tracking-wider font-semibold shadow-sm hover:bg-[#FFE9A9]/50 transition-colors cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-[#FF933E]" />
              <span>Private Client Vault</span>
            </button>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 pb-2">
            {[
              { id: 'all', label: 'All Works' },
              { id: 'wedding', label: 'Wedding Ceremonies' },
              { id: 'prewedding', label: 'Pre-Wedding & Dubai' },
              { id: 'haldi', label: 'Haldi & Sangeet' },
              { id: 'reception', label: 'Grand Receptions' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all cursor-pointer ${
                  activeFilter === filter.id
                    ? 'bg-[#FF933E] text-white shadow-[0_4px_14px_rgba(255,147,62,0.35)]'
                    : 'bg-white border border-[#FFCB56]/40 text-[#594233] hover:bg-[#FFE9A9]/40'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid (Wise Placement of Landscape & Portrait) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPortfolio.map((item, idx) => {
              const isLandscape = item.orientation === 'landscape';
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  onClick={() => setSelectedPortfolioItem(item)}
                  className="group relative flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer bg-white border border-[#FFCB56]/40"
                >
                  <div className={`relative overflow-hidden bg-stone-900 ${isLandscape ? 'aspect-video' : 'aspect-[4/5]'}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                    <div className="absolute top-3 right-3 px-3 py-1 bg-white/95 text-[#FF933E] text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5 border border-[#FFCB56] shadow-sm rounded-full">
                      {item.badgeType === 'video' ? (
                        <Film className="w-3.5 h-3.5 text-[#FF933E]" />
                      ) : (
                        <Camera className="w-3.5 h-3.5 text-[#73A5CA]" />
                      )}
                      <span>{item.badge}</span>
                    </div>

                    {item.badgeType === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#FF933E] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 ml-0.5 fill-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[#FF933E] text-[11px] uppercase tracking-widest font-bold">
                      <span>{item.location.split('•')[0]}</span>
                      <span className="text-[#73A5CA] font-semibold">
                        {item.location.split('•')[1] || item.category}
                      </span>
                    </div>
                    <h3 className="font-headline text-lg sm:text-xl text-[#241912] group-hover:text-[#FF933E] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#594233] line-clamp-2 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <ScrollToTop />

      <MobileBottomNav 
        currentTab="portfolio"
        onSelectTab={handleTabChange}
        onOpenAvailability={() => setIsAvailabilityOpen(true)}
      />

      <CookieBanner onOpenCookiePolicy={() => setLegalModal({ isOpen: true, tab: 'cookies' })} />

      <Footer 
        onSelectTab={handleTabChange}
        onOpenLegal={(tab) => setLegalModal({ isOpen: true, tab })}
      />

      <LegalModal 
        isOpen={legalModal.isOpen}
        initialTab={legalModal.tab}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
      />

      <PortfolioModal 
        item={selectedPortfolioItem}
        onClose={() => setSelectedPortfolioItem(null)}
        onInquireStyle={() => {
          setSelectedPortfolioItem(null);
          setIsAvailabilityOpen(true);
        }}
      />

      <AvailabilityModal 
        isOpen={isAvailabilityOpen}
        onClose={() => setIsAvailabilityOpen(false)}
      />

      <ClientPortalModal 
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />
    </div>
  );
}
