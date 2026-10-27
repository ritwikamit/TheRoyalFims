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

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItemData | null>(null);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; tab: LegalTabType }>({
    isOpen: false,
    tab: 'privacy',
  });

  const portfolioItems: PortfolioItemData[] = [
    {
      id: 'sacred-pheras',
      category: 'wedding',
      badge: '4K Film',
      badgeType: 'video',
      location: 'Gaya, Bihar • Wedding Ceremony',
      title: 'The Sacred Pheras',
      description:
        'Documenting the rituals, heartfelt vows, and family tears of joy during an evening royal celebration.',
      image:
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'golden-dunes',
      category: 'prewedding',
      badge: 'Stills & Film',
      badgeType: 'video',
      location: 'Dubai Destination • Pre-Wedding Shoot',
      title: 'Golden Dunes Session',
      description:
        'A serene couple session exploring Dubai’s open desert vistas and waterfront skyline before the wedding rush.',
      image:
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'yellow-petals',
      category: 'haldi',
      badge: 'Photo Story',
      badgeType: 'story',
      location: 'Chhotki Nawada • Haldi Celebrations',
      title: 'Yellow Petals & Laughter',
      description:
        'Unfiltered laughter among siblings, elders playfully tossing marigold flowers, and pure family affection.',
      image:
        'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'evening-congratulations',
      category: 'reception',
      badge: 'Stills',
      badgeType: 'photo',
      location: 'Bodh Gaya Venue • Grand Reception',
      title: 'Evening of Congratulations',
      description:
        'Welcoming hundreds of friends and extended family under grand chandelier lights and royal stage settings.',
      image:
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'before-vows',
      category: 'prewedding',
      badge: 'Cinematic Teaser',
      badgeType: 'video',
      location: 'Bihar Heritage • Pre-Wedding Story',
      title: 'Before the Vows',
      description:
        'Quiet moments away from the calendar rush, captured with patience and natural daylight.',
      image:
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'promise-forever',
      category: 'wedding',
      badge: 'Stills & Film',
      badgeType: 'photo',
      location: 'Gaya • Ring Ceremony',
      title: 'The Promise of Forever',
      description:
        'Heartfelt promises spoken in front of both families, preserving every smile and gentle glance.',
      image:
        'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'marina-twilight',
      category: 'prewedding',
      badge: 'Night Cinema',
      badgeType: 'video',
      location: 'Dubai Marina • Pre-Wedding Shoot',
      title: 'Marina Twilight Promenade',
      description:
        'Reflections across water ripples and dramatic skyscraper lights during blue hour in Dubai.',
      image:
        'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'baraat-splendor',
      category: 'wedding',
      badge: '4K Drone',
      badgeType: 'video',
      location: 'Gaya Grand Venue • Baraat',
      title: 'Baraat Grandeur',
      description:
        'Dhol rhythms, dancing cousins, and colorful night fireworks documented with cinematic energy.',
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'vintage-alleys',
      category: 'prewedding',
      badge: 'Fine Art Stills',
      badgeType: 'photo',
      location: 'Al Seef Historic • Dubai',
      title: 'Textures of Al Seef',
      description:
        'Clay wind-towers and soft lantern glows framing intimate, timeless couple portraits.',
      image:
        'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const filteredPortfolio =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const savedTheme = localStorage.getItem('trf_theme') as 'dark' | 'light' | null;
    const active = savedTheme || 'light';
    setTheme(active);
    if (active === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('trf_theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

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
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 selection:bg-[#FFEAD3] selection:text-[#D46743] ${
      theme === 'dark' ? 'bg-[#120E0A] text-[#FAF3EC]' : 'bg-[#FAF4ED] text-[#1A130E]'
    }`}>
      <Navbar 
        currentTab="portfolio"
        theme={theme}
        onToggleTheme={toggleTheme}
        onSelectTab={handleTabChange}
        onOpenAvailability={() => setIsAvailabilityOpen(true)}
      />

      <main className="w-full flex-1 pt-28 pb-24 md:pb-16 px-5 sm:px-8 lg:px-14">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8DCCF] dark:border-white/10 pb-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs text-[#D46743] dark:text-[#E89B5B] uppercase tracking-[0.25em] font-semibold">
                Curated Cinema &amp; Photography
              </span>
              <h1 className="font-headline text-3xl sm:text-5xl text-[#1A130E] dark:text-[#FAF3EC]">
                The Royal Films Gallery
              </h1>
              <p className="font-cursive text-2xl sm:text-3xl text-[#D46743] dark:text-[#E89B5B] -mt-1">
                &ldquo;A visual archive of family legacies and unscripted devotion.&rdquo;
              </p>
            </div>

            {/* Client Portal Button */}
            <button
              onClick={() => setIsPortalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#1A140F] border border-[#D46743]/40 text-[#D46743] dark:text-[#E89B5B] text-xs uppercase tracking-wider font-semibold rounded shadow-sm hover:bg-[#FFEAD3] transition-colors cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Client Portal Access</span>
            </button>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 border-b border-[#E8DCCF]/60 dark:border-white/5 pb-4">
            {[
              { id: 'all', label: 'All Works' },
              { id: 'wedding', label: 'Wedding Ceremonies' },
              { id: 'prewedding', label: 'Pre-Wedding & Dubai' },
              { id: 'haldi', label: 'Haldi & Mehendi' },
              { id: 'reception', label: 'Grand Receptions' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`text-xs uppercase tracking-[0.2em] font-semibold transition-all pb-1.5 cursor-pointer relative ${
                  activeFilter === filter.id
                    ? 'text-[#D46743] dark:text-[#E89B5B] border-b-2 border-[#D46743] dark:border-[#E89B5B]'
                    : 'text-[#7C685B] dark:text-[#A49182] hover:text-[#1A130E] dark:hover:text-[#FAF3EC]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPortfolio.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setSelectedPortfolioItem(item)}
                className="group relative flex flex-col rounded-xl p-[1.5px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 cursor-pointer bg-[#FFFFFF] dark:bg-[#1A140F]"
              >
                <div
                  className="absolute inset-[-150%] -z-10 animate-border-spin opacity-45 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0 320deg, #E89B5B 340deg, #D46743 355deg, transparent 360deg)',
                  }}
                />
                <div className="flex flex-col h-full w-full rounded-[10px] overflow-hidden bg-[#FFFFFF] dark:bg-[#1A140F] border border-[#E8DCCF]/60 dark:border-white/5">
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors" />

                    <div className="absolute top-3 right-3 px-3 py-1 bg-black/75 backdrop-blur-md text-[#FFEAD3] text-[10px] uppercase tracking-widest font-semibold flex items-center gap-1.5 border border-white/20">
                      {item.badgeType === 'video' ? (
                        <Film className="w-3.5 h-3.5 text-[#E89B5B]" />
                      ) : (
                        <Camera className="w-3.5 h-3.5 text-[#BFE7EA]" />
                      )}
                      <span>{item.badge}</span>
                    </div>

                    {item.badgeType === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#D46743]/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 ml-0.5 fill-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[#D46743] dark:text-[#E89B5B] text-[11px] uppercase tracking-widest font-semibold">
                      <span>{item.location.split('•')[0]}</span>
                      <span className="text-[#7C685B] dark:text-[#A49182]">
                        {item.location.split('•')[1] || item.category}
                      </span>
                    </div>
                    <h3 className="font-headline text-xl text-[#1A130E] dark:text-[#FAF3EC] group-hover:text-[#D46743] dark:group-hover:text-[#E89B5B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#524237] dark:text-[#D9C7B8] line-clamp-2 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
