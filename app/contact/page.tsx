'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageSquare, CheckCircle2, Clock, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AvailabilityModal from '@/components/AvailabilityModal';
import ClientPortalModal from '@/components/ClientPortalModal';
import ScrollToTop from '@/components/ScrollToTop';
import LegalModal, { LegalTabType } from '@/components/LegalModal';
import CookieBanner from '@/components/CookieBanner';
import MobileBottomNav from '@/components/MobileBottomNav';
import InteractiveGrid from '@/components/InteractiveGrid';
import MinimalWhatsAppIcon from '@/components/MinimalWhatsAppIcon';

export default function ContactPage() {
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; tab: LegalTabType }>({
    isOpen: false,
    tab: 'privacy',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    venue: '',
    service: 'both',
    details: '',
  });

  // Permanently enforce 100% light theme
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    document.documentElement.style.colorScheme = 'light';
  }, []);

  const handleTabChange = (tab: string) => {
    if (tab === 'home') {
      window.location.href = '/';
    } else if (tab === 'portfolio') {
      window.location.href = '/portfolio';
    } else if (tab === 'services') {
      window.location.href = '/services';
    } else if (tab === 'dubai-destination') {
      window.location.href = '/dubai';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        venue: '',
        service: 'both',
        details: '',
      });
    }, 4500);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 selection:bg-[#FFE9A9] selection:text-[#FF933E] bg-[#FFFDF9] text-[#241912]">
      <Navbar 
        currentTab="contact"
        onSelectTab={handleTabChange}
        onOpenAvailability={() => setIsAvailabilityOpen(true)}
      />

      <main className="w-full flex-1 pt-28 pb-24 md:pb-16 px-5 sm:px-8 lg:px-14">
        <InteractiveGrid />
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-3 text-center items-center max-w-3xl mx-auto">
            <span className="text-xs text-[#FF933E] dark:text-[#FFCB56] uppercase tracking-[0.25em] font-semibold">
              Live Atelier Concierge
            </span>
            <h1 className="font-headline text-3xl sm:text-5xl text-[#241912]">
              Inquire Your Wedding Date
            </h1>
            <p className="font-cursive text-2xl sm:text-4xl text-[#FF933E] dark:text-[#FFCB56] -mt-1">
              &ldquo;We would be honored to preserve your family legacy.&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-[#594233] font-light leading-relaxed">
              We accept a limited number of commissions per calendar season to dedicate unhurried attention, master optics, and bespoke color-grading to every film.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Contact Card */}
            <div className="lg:col-span-5 flex flex-col gap-6 bg-white border border-[#FFCB56]/30 p-6 sm:p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-[#FF933E] dark:text-[#FFCB56] font-semibold">
                  Studio Atelier Direct
                </span>
                <h3 className="font-headline text-2xl text-[#241912]">
                  The Royal Films
                </h3>
                <p className="text-xs text-[#594233] font-light leading-relaxed">
                  Headquartered in Gaya, Bihar, traveling for weddings across India and destination hubs including Dubai.
                </p>
              </div>

              <div className="flex flex-col gap-4 text-xs sm:text-sm text-[#594233] pt-2 border-t border-[#FFCB56]/30">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#FF933E]/10 text-[#FF933E] dark:text-[#FFCB56] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="font-semibold block text-[#241912]">Studio Address</span>
                    <span>Chhotki Nawada, Gaya, Bihar 823001, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#FF933E]/10 text-[#FF933E] dark:text-[#FFCB56] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="font-semibold block text-[#241912]">Concierge Telephone</span>
                    <a href="tel:+917004375740" className="hover:text-[#FF933E] font-semibold">
                      +91 70043 75740
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#FF933E]/10 text-[#FF933E] dark:text-[#FFCB56] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="font-semibold block text-[#241912]">Direct Email</span>
                    <a href="mailto:info@theroyalfilms.in" className="hover:text-[#FF933E] font-semibold">
                      info@theroyalfilms.in
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Action */}
              <a
                href="https://wa.me/918210351286?text=Hello%20The%20Royal%20Films%2C%20I%20would%20like%20to%20inquire%20about%20wedding%20dates."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#FF933E] hover:bg-[#ff8425] text-white text-xs uppercase tracking-wider font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md mt-2"
              >
                <MinimalWhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-white border border-[#FFCB56]/30 p-6 sm:p-10 rounded-2xl shadow-xl">
              {formSubmitted ? (
                <div className="p-8 text-center bg-[#FAF4ED]  rounded-xl border border-[#FF933E]/30 flex flex-col items-center gap-3">
                  <CheckCircle2 className="w-12 h-12 text-[#FF933E]" />
                  <h3 className="font-headline text-2xl text-[#241912]">
                    Commission Request Received
                  </h3>
                  <p className="text-xs text-[#594233] max-w-md">
                    Thank you. We will verify our production calendar and connect with you on WhatsApp/Phone.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] uppercase tracking-wider text-[#FF933E] dark:text-[#FFCB56] font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Aditi Sharma"
                        className="w-full px-3.5 py-2.5 bg-[#FAF4ED]  text-[#241912] text-xs sm:text-sm border border-[#FFCB56]/30 rounded focus:outline-none focus:ring-1 focus:ring-[#FF933E]"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] uppercase tracking-wider text-[#FF933E] dark:text-[#FFCB56] font-semibold">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-[#FAF4ED]  text-[#241912] text-xs sm:text-sm border border-[#FFCB56]/30 rounded focus:outline-none focus:ring-1 focus:ring-[#FF933E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] uppercase tracking-wider text-[#FF933E] dark:text-[#FFCB56] font-semibold">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF4ED]  text-[#241912] text-xs sm:text-sm border border-[#FFCB56]/30 rounded focus:outline-none focus:ring-1 focus:ring-[#FF933E]"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] uppercase tracking-wider text-[#FF933E] dark:text-[#FFCB56] font-semibold">
                        City / Venue *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.venue}
                        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                        placeholder="e.g. Gaya, Patna, Dubai"
                        className="w-full px-3.5 py-2.5 bg-[#FAF4ED]  text-[#241912] text-xs sm:text-sm border border-[#FFCB56]/30 rounded focus:outline-none focus:ring-1 focus:ring-[#FF933E]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] uppercase tracking-wider text-[#FF933E] dark:text-[#FFCB56] font-semibold">
                      Functions &amp; Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Share your planned ceremonies (Haldi, Sangeet, Wedding, Reception) and any specific expectations..."
                      className="w-full px-3.5 py-2.5 bg-[#FAF4ED]  text-[#241912] text-xs sm:text-sm border border-[#FFCB56]/30 rounded focus:outline-none focus:ring-1 focus:ring-[#FF933E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#FF933E] hover:bg-[#FFCB56] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md cursor-pointer mt-1"
                  >
                    Send Commission Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <ScrollToTop />

      <MobileBottomNav 
        currentTab="contact"
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
