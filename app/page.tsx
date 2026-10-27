'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeScreen from '@/components/HomeScreen';
import ServicesScreen from '@/components/ServicesScreen';
import DubaiScreen from '@/components/DubaiScreen';
import PortfolioModal, { PortfolioItemData } from '@/components/PortfolioModal';
import AvailabilityModal from '@/components/AvailabilityModal';
import ClientPortalModal from '@/components/ClientPortalModal';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollToTop from '@/components/ScrollToTop';
import LegalModal, { LegalTabType } from '@/components/LegalModal';
import CookieBanner from '@/components/CookieBanner';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function Page() {
  const [currentTab, setCurrentTab] = useState<'home' | 'portfolio' | 'services' | 'dubai-destination' | 'contact'>('home');
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItemData | null>(null);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  
  // LIGHT THEME AS DEFAULT
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; tab: LegalTabType }>({
    isOpen: false,
    tab: 'privacy',
  });

  // Load and apply saved theme preference to the DOM (default: light)
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

  // Handle tab switching and auto-scroll to top
  const handleTabChange = (tab: string) => {
    if (tab === 'contact') {
      setIsAvailabilityOpen(true);
      return;
    }
    
    setCurrentTab(tab as any);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLegal = (tab: LegalTabType) => {
    setLegalModal({ isOpen: true, tab });
  };

  // Scroll to section when requested
  useEffect(() => {
    if (currentTab === 'portfolio') {
      const el = document.getElementById('portfolio');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [currentTab]);

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 selection:bg-[#FFEAD3] selection:text-[#D46743] ${
      theme === 'dark' ? 'bg-[#120E0A] text-[#FAF3EC]' : 'bg-[#FAF4ED] text-[#1A130E]'
    }`}>
      {/* Animated Luxury Splash Loading Screen with Redesigned Logo */}
      <LoadingScreen minDuration={1400} />

      {/* Fixed Luxury Navigation Header */}
      <Navbar 
        currentTab={currentTab}
        theme={theme}
        onToggleTheme={toggleTheme}
        onSelectTab={handleTabChange}
        onOpenAvailability={() => setIsAvailabilityOpen(true)}
      />

      {/* Main Viewport Container */}
      <main className="w-full flex-1 pb-24 md:pb-0">
        {currentTab === 'home' && (
          <HomeScreen 
            onOpenPortfolioItem={(item) => setSelectedPortfolioItem(item)}
            onOpenAvailability={() => setIsAvailabilityOpen(true)}
            onSelectTab={handleTabChange}
          />
        )}

        {currentTab === 'portfolio' && (
          <HomeScreen 
            onOpenPortfolioItem={(item) => setSelectedPortfolioItem(item)}
            onOpenAvailability={() => setIsAvailabilityOpen(true)}
            onSelectTab={handleTabChange}
          />
        )}

        {currentTab === 'services' && (
          <ServicesScreen 
            onOpenAvailability={() => setIsAvailabilityOpen(true)}
            onNavigateTab={handleTabChange}
          />
        )}

        {currentTab === 'dubai-destination' && (
          <DubaiScreen 
            onOpenAvailability={() => setIsAvailabilityOpen(true)}
            onNavigateTab={handleTabChange}
          />
        )}
      </main>

      {/* Dynamic Scroll Up Button */}
      <ScrollToTop />

      {/* Mobile Quick Bottom Navigation Bar */}
      <MobileBottomNav 
        currentTab={currentTab}
        onSelectTab={handleTabChange}
        onOpenAvailability={() => setIsAvailabilityOpen(true)}
      />

      {/* Cookie Consent Banner */}
      <CookieBanner onOpenCookiePolicy={() => handleOpenLegal('cookies')} />

      {/* Luxury Translucent Footer with Big Minimalist Logo */}
      <Footer 
        onSelectTab={handleTabChange}
        onOpenLegal={handleOpenLegal}
      />

      {/* Legal Modal */}
      <LegalModal 
        isOpen={legalModal.isOpen}
        initialTab={legalModal.tab}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
      />

      {/* Lightbox & Portals */}
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
