'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import RoyalLogo from '@/components/RoyalLogo';
import MinimalWhatsAppIcon from '@/components/MinimalWhatsAppIcon';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenAvailability: () => void;
}

export default function Navbar({
  currentTab,
  onSelectTab,
  onOpenAvailability,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'dubai-destination', label: 'Dubai', href: '/dubai' },
    { id: 'contact', label: 'Inquiries', href: '/contact' },
  ];

  const handleNavClick = (id: string, href: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none px-3 sm:px-6">
      <header
        className={`pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[width,max-width,margin,border-radius,padding,box-shadow] ${
          isScrolled
            ? 'w-full max-w-5xl mt-3 sm:mt-4 rounded-full py-2 sm:py-2.5 px-4 sm:px-7 bg-[#FF933E]/95 backdrop-blur-2xl border border-white/30 shadow-[0_16px_45px_rgba(255,147,62,0.4)] ring-1 ring-white/20'
            : 'w-full max-w-7xl mt-0 rounded-none sm:rounded-b-2xl py-3.5 sm:py-4 px-4 sm:px-8 lg:px-12 bg-[#FF933E] border-b border-white/20 shadow-[0_4px_25px_rgba(255,147,62,0.25)]'
        }`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Brand Zone - Golden Laurel Emblem + Cursive Title */}
          <Link
            href="/"
            onClick={() => handleNavClick('home', '/')}
            className="flex items-center text-left focus:outline-none group cursor-pointer shrink-0"
            aria-label="The Royal Films Home"
          >
            <RoyalLogo size={isScrolled ? 'sm' : 'md'} theme="orange" />
          </Link>

          {/* Desktop Nav Zone */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.href)}
                  className={`text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 cursor-pointer relative py-1 ${
                    isActive
                      ? 'text-white font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)]'
                      : 'text-white/85 hover:text-[#FFE9A9]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Zone: Minimal WhatsApp Icon & Check Dates (Call icon removed) */}
          <div className="hidden sm:flex items-center gap-2.5 sm:gap-3">
            {/* Minimal WhatsApp Icon Button */}
            <a
              href="https://wa.me/918210351286?text=Hello%20The%20Royal%20Films%2C%20I%20would%20like%20to%20inquire%20about%20wedding%20dates."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Concierge"
              title="Chat on WhatsApp"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#25D366] border border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-xs group"
            >
              <MinimalWhatsAppIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
            </a>

            {/* Check Dates CTA */}
            <button
              onClick={onOpenAvailability}
              className={`flex items-center gap-2 bg-white hover:bg-[#FFE9A9] text-[#FF933E] hover:text-[#E87920] border border-white text-xs uppercase tracking-[0.2em] font-bold shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer active:scale-95 group rounded-full ${
                isScrolled
                  ? 'px-4 py-2 text-[11px]'
                  : 'px-5 py-2.5 text-xs'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-[#FF933E] group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline">Check Dates</span>
              <span className="md:hidden">Dates</span>
            </button>
          </div>

          {/* Mobile Right Action: Minimal WhatsApp Icon & Hamburger Toggle (Call icon removed) */}
          <div className="flex lg:hidden items-center gap-2.5">
            {/* Mobile Minimal WhatsApp Icon */}
            <a
              href="https://wa.me/918210351286?text=Hello%20The%20Royal%20Films%2C%20I%20would%20like%20to%20inquire%20about%20wedding%20dates."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Concierge"
              title="WhatsApp Concierge"
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#25D366] border border-white/30 flex items-center justify-center transition-all active:scale-95 shadow-xs"
            >
              <MinimalWhatsAppIcon className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-white hover:text-[#FFE9A9] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.98 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:hidden bg-[#FF933E]/98 border border-white/25 px-6 py-6 flex flex-col gap-4 shadow-2xl backdrop-blur-2xl text-white ${
                isScrolled ? 'rounded-3xl mt-2 mx-1' : 'rounded-b-2xl mt-2'
              }`}
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.href)}
                  className={`text-left text-sm uppercase tracking-[0.2em] py-2.5 border-b border-white/15 cursor-pointer flex items-center justify-between ${
                    currentTab === link.id
                      ? 'text-white font-bold'
                      : 'text-white/85'
                  }`}
                >
                  <span>{link.label}</span>
                  {currentTab === link.id && (
                    <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />
                  )}
                </button>
              ))}

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://wa.me/918210351286?text=Hello%20The%20Royal%20Films%2C%20I%20would%20like%20to%20inquire%20about%20wedding%20dates."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white/20 hover:bg-white text-white hover:text-[#25D366] border border-white/35 text-xs uppercase tracking-wider font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MinimalWhatsAppIcon className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAvailability();
                }}
                className="mt-1 w-full py-3.5 bg-white text-[#FF933E] font-bold text-xs uppercase tracking-[0.2em] text-center shadow-lg cursor-pointer rounded-lg hover:bg-[#FFE9A9] transition-colors"
              >
                Check Date Availability
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

