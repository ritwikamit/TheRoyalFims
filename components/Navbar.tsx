'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import RoyalLogo from '@/components/RoyalLogo';

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
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
    <header
      className={`fixed z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] max-w-5xl rounded-full bg-[#0A1724]/95 backdrop-blur-2xl border border-[#FFCB56]/35 shadow-[0_12px_45px_rgba(0,0,0,0.65)] ring-1 ring-white/10'
          : 'top-0 left-0 w-full rounded-none bg-[#0A1724]/95 backdrop-blur-2xl border-b border-[#FFCB56]/25 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
      }`}
    >
      <div
        className={`w-full flex items-center justify-between transition-all duration-500 ease-out ${
          isScrolled
            ? 'h-14 sm:h-16 px-4 sm:px-6'
            : 'h-20 px-4 sm:px-6 lg:px-12'
        }`}
      >
        {/* Brand Zone - Golden Emblem Logo */}
        <Link
          href="/"
          onClick={() => handleNavClick('home', '/')}
          className="flex items-center text-left focus:outline-none group cursor-pointer shrink-0"
          aria-label="The Royal Films Home"
        >
          <RoyalLogo size={isScrolled ? 'sm' : 'md'} isDark={true} />
        </Link>

        {/* Desktop Nav Zone */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id, link.href)}
                className={`text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 cursor-pointer relative py-1 ${
                  isActive
                    ? 'text-[#FF933E] font-bold'
                    : 'text-[#FFE9A9]/80 hover:text-[#FFCB56]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF933E] shadow-[0_0_8px_#FF933E]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action & Minimal Icons Zone (Phone & WhatsApp with NO raw number exposed) */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
          {/* Minimal Direct Call Icon Button */}
          <a
            href="tel:+918210351286"
            aria-label="Direct Phone Concierge"
            title="Direct Phone Concierge"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF933E] text-[#FFE9A9] hover:text-white border border-[#FFCB56]/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm group"
          >
            <Phone className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
          </a>

          {/* Minimal WhatsApp Concierge Icon Button */}
          <a
            href="https://wa.me/918210351286?text=Hello%20The%20Royal%20Films%2C%20I%20would%20like%20to%20inquire%20about%20wedding%20dates."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Concierge"
            title="WhatsApp Concierge"
            className="w-9 h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm group"
          >
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>

          {/* Check Dates CTA */}
          <button
            onClick={onOpenAvailability}
            className={`flex items-center gap-2 bg-[#FF933E] hover:bg-[#ff8425] text-white border border-[#FFCB56] text-xs uppercase tracking-[0.2em] font-semibold shadow-[0_0_20px_rgba(255,147,62,0.4)] transition-all duration-300 cursor-pointer active:scale-95 group ${
              isScrolled
                ? 'px-4 py-2 rounded-full text-[11px]'
                : 'px-5 py-2.5 rounded-none'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-[#FFE9A9] group-hover:scale-110 transition-transform" />
            <span className="hidden md:inline">Check Dates</span>
            <span className="md:hidden">Dates</span>
          </button>
        </div>

        {/* Mobile Hamburger & Quick Contact Icons */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile WhatsApp Quick Icon */}
          <a
            href="https://wa.me/918210351286?text=Hello%20The%20Royal%20Films%2C%20I%20would%20like%20to%20inquire%20about%20wedding%20dates."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Concierge"
            className="w-8 h-8 rounded-full bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/50 flex items-center justify-center"
          >
            <MessageCircle className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Call Quick Icon */}
          <a
            href="tel:+918210351286"
            aria-label="Direct Phone Concierge"
            className="w-8 h-8 rounded-full bg-white/10 text-[#FFE9A9] border border-[#FFCB56]/40 flex items-center justify-center"
          >
            <Phone className="w-3 h-3" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#FFE9A9] hover:text-[#FF933E] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#FFE9A9]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden bg-[#0A1724]/98 border-b border-[#FFCB56]/30 px-6 py-6 flex flex-col gap-5 shadow-2xl backdrop-blur-2xl ${
              isScrolled ? 'rounded-3xl mt-2 mx-1' : ''
            }`}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id, link.href)}
                className={`text-left text-sm uppercase tracking-[0.2em] py-2 border-b border-white/10 cursor-pointer flex items-center justify-between ${
                  currentTab === link.id
                    ? 'text-[#FF933E] font-bold'
                    : 'text-[#FFE9A9]/80'
                }`}
              >
                <span>{link.label}</span>
                {currentTab === link.id && (
                  <span className="w-2 h-2 rounded-full bg-[#FF933E] shadow-[0_0_6px_#FF933E]" />
                )}
              </button>
            ))}

            <div className="flex items-center gap-3 pt-2">
              <a
                href="tel:+918210351286"
                className="flex-1 py-3 bg-white/10 border border-[#FFCB56] text-[#FFE9A9] text-xs uppercase tracking-wider font-semibold rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#FF933E]" />
                <span>Call Atelier</span>
              </a>
              <a
                href="https://wa.me/918210351286?text=Hello%20The%20Royal%20Films%2C%20I%20would%20like%20to%20inquire%20about%20wedding%20dates."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#25D366]/20 border border-[#25D366] text-[#25D366] text-xs uppercase tracking-wider font-semibold rounded-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAvailability();
              }}
              className="mt-1 w-full py-3.5 bg-[#FF933E] text-white font-semibold text-xs uppercase tracking-[0.2em] text-center border border-[#FFCB56] shadow-[0_0_20px_rgba(255,147,62,0.4)] cursor-pointer"
            >
              Check Date Availability
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
