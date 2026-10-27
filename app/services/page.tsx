'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesScreen from '@/components/ServicesScreen';
import AvailabilityModal from '@/components/AvailabilityModal';
import ClientPortalModal from '@/components/ClientPortalModal';
import ScrollToTop from '@/components/ScrollToTop';
import LegalModal, { LegalTabType } from '@/components/LegalModal';
import CookieBanner from '@/components/CookieBanner';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function ServicesPage() {
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; tab: LegalTabType }>({
    isOpen: false,
    tab: 'privacy',
  });

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
    } else if (tab === 'portfolio') {
      window.location.href = '/portfolio';
    } else if (tab === 'dubai-destination') {
      window.location.href = '/dubai';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenLegal = (tab: LegalTabType) => {
    setLegalModal({ isOpen: true, tab });
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 selection:bg-[#FFEAD3] selection:text-[#D46743] ${
      theme === 'dark' ? 'bg-[#120E0A] text-[#FAF3EC]' : 'bg-[#FAF4ED] text-[#1A130E]'
    }`}>
      <Navbar 
        currentTab="services"
        theme={theme}
        onToggleTheme={toggleTheme}
        onSelectTab={handleTabChange}
        onOpenAvailability={() => setIsAvailabilityOpen(true)}
      />

      <main className="w-full flex-1 pb-24 md:pb-0">
        <ServicesScreen 
          onOpenAvailability={() => setIsAvailabilityOpen(true)}
          onNavigateTab={handleTabChange}
        />
      </main>

      <ScrollToTop />

      <MobileBottomNav 
        currentTab="services"
        onSelectTab={handleTabChange}
        onOpenAvailability={() => setIsAvailabilityOpen(true)}
      />

      <CookieBanner onOpenCookiePolicy={() => handleOpenLegal('cookies')} />

      <Footer 
        onSelectTab={handleTabChange}
        onOpenLegal={handleOpenLegal}
      />

      <LegalModal 
        isOpen={legalModal.isOpen}
        initialTab={legalModal.tab}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
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
