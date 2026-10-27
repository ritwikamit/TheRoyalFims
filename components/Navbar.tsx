'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar } from 'lucide-react';
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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FFFDF9]/95 backdrop-blur-2xl border-b border-[#FFCB56]/30 shadow-[0_4px_25px_rgba(90,60,20,0.06)] transition-all duration-300">
      <div className="h-20 w-full px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Zone - Golden Emblem Logo */}
        <Link
          href="/"
          onClick={() => handleNavClick('home', '/')}
          className="flex items-center text-left focus:outline-none group cursor-pointer"
          aria-label="The Royal Films Home"
        >
          <RoyalLogo size="md" />
        </Link>

        {/* Desktop Nav Zone */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id, link.href)}
                className={`text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 cursor-pointer relative py-1 ${
                  isActive
                    ? 'text-[#FF933E] font-bold'
                    : 'text-[#594233] hover:text-[#241912]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF933E]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Zone - Pure Light Mode, Theme toggle completely removed */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenAvailability}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#FF933E] hover:bg-[#ff8425] text-white rounded-none border border-[#FFCB56] text-xs uppercase tracking-[0.2em] font-semibold shadow-[0_4px_16px_rgba(255,147,62,0.35)] transition-all duration-300 cursor-pointer active:scale-95 group"
          >
            <Calendar className="w-3.5 h-3.5 text-[#FFE9A9] group-hover:scale-110 transition-transform" />
            <span>Check Dates</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#241912] hover:text-[#FF933E] transition-colors cursor-pointer"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FFFDF9]/98 border-b border-[#FFCB56]/30 px-6 py-6 flex flex-col gap-5 shadow-2xl backdrop-blur-2xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id, link.href)}
                className={`text-left text-sm uppercase tracking-[0.2em] py-2 border-b border-[#FFE9A9]/60 cursor-pointer flex items-center justify-between ${
                  currentTab === link.id
                    ? 'text-[#FF933E] font-bold'
                    : 'text-[#594233]'
                }`}
              >
                <span>{link.label}</span>
                {currentTab === link.id && (
                  <span className="w-2 h-2 rounded-full bg-[#FF933E]" />
                )}
              </button>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAvailability();
              }}
              className="mt-2 w-full py-3.5 bg-[#FF933E] text-white font-semibold text-xs uppercase tracking-[0.2em] text-center border border-[#FFCB56] shadow-[0_4px_16px_rgba(255,147,62,0.3)] cursor-pointer"
            >
              Check Date Availability
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
