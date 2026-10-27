'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import RoyalLogo from '@/components/RoyalLogo';

interface NavbarProps {
  currentTab: string;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onSelectTab: (tab: string) => void;
  onOpenAvailability: () => void;
}

export default function Navbar({
  currentTab,
  theme,
  onToggleTheme,
  onSelectTab,
  onOpenAvailability,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'dubai-destination', label: 'Dubai', href: '/dubai' },
  ];

  const handleNavClick = (id: string, href: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FAF4ED]/92 dark:bg-[#120E0A]/92 backdrop-blur-2xl border-b border-[#E8DCCF] dark:border-white/10 shadow-[0_4px_25px_rgba(82,55,30,0.06)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.85)] transition-colors duration-300">
      <div className="h-20 w-full px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Zone - Sleek Minimalist Logo */}
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
                    ? 'text-[#D46743] dark:text-[#E89B5B] font-semibold'
                    : 'text-[#524237] dark:text-[#D9C7B8] hover:text-[#1A130E] dark:hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D46743] dark:bg-[#E89B5B]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Zone: Theme Toggle & "Check Dates" CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Light / Dark Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-2 sm:p-2.5 rounded-full bg-white dark:bg-white/10 hover:bg-[#FFEAD3] dark:hover:bg-white/15 text-[#D46743] dark:text-[#E89B5B] border border-[#E8DCCF] dark:border-white/10 transition-colors cursor-pointer shadow-sm"
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#E89B5B]" />
            ) : (
              <Moon className="w-4 h-4 text-[#1A130E]" />
            )}
          </button>

          {/* Shortened "Check Dates" CTA */}
          <button
            onClick={onOpenAvailability}
            aria-label="Check Dates Availability"
            title="Check Dates Availability"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 w-9 h-9 sm:w-auto sm:h-auto rounded-full sm:rounded-none p-0 sm:px-4 sm:py-2.5 bg-[#D46743] text-white hover:bg-[#E89B5B] text-[11px] sm:text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 shadow-[0_0_18px_rgba(212,103,67,0.45)] cursor-pointer shrink-0"
          >
            <Calendar className="w-4 h-4 sm:w-3.5 sm:h-3.5 shrink-0" />
            <span className="hidden sm:inline">Check Dates</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1A130E] dark:text-[#FAF3EC] hover:text-[#D46743] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#FAF4ED]/98 dark:bg-[#120E0A]/98 backdrop-blur-2xl border-b border-[#E8DCCF] dark:border-white/10 px-6 py-5 flex flex-col gap-4 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = currentTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id, link.href)}
                    className={`text-left py-2.5 text-sm uppercase tracking-[0.2em] font-medium transition-colors ${
                      isActive
                        ? 'text-[#D46743] dark:text-[#E89B5B] font-semibold'
                        : 'text-[#524237] dark:text-[#D9C7B8] hover:text-[#1A130E] dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
