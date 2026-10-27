'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DubaiScreen from '@/components/DubaiScreen';
import AvailabilityModal from '@/components/AvailabilityModal';
import ClientPortalModal from '@/components/ClientPortalModal';
import ScrollToTop from '@/components/ScrollToTop';
import LegalModal, { LegalTabType } from '@/components/LegalModal';
import CookieBanner from '@/components/CookieBanner';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function DubaiPage() {
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; tab: LegalTabType }>({
    isOpen: false,
    tab: 'privacy',
  });

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }, []);

  const handleTabChange = (tab: string) => {
    if (tab === 'gallery') {
      window.location.href = '/gallery';
      return;
    }
    if (tab === 'contact') {
      setIsAvailabilityOpen(true);
      return;
    }
    if (tab === 'home') {
      window.location.href = '/';
    } else if (tab === 'portfolio') {
      window.location.href = '/portfolio';
    } else if (tab === 'services') {
      window.location.href = '/services';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenLegal = (tab: LegalTabType) => {
    setLegalModal({ isOpen: true, tab });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FFFDF9] text-[#241912] selection:bg-[#FFE9A9] selection:text-[#FF933E]">
      <Navbar 
        currentTab="dubai-destination"
        onSelectTab={handleTabChange}
        onOpenAvailability={() => setIsAvailabilityOpen(true)}
      />

      <main className="w-full flex-1 pb-24 md:pb-0">
        <DubaiScreen 
          onOpenAvailability={() => setIsAvailabilityOpen(true)}
          onNavigateTab={handleTabChange}
        />
      </main>

      <ScrollToTop />

      <MobileBottomNav 
        currentTab="dubai-destination"
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
