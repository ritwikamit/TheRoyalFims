'use client';

import React, { useState } from 'react';
import { Menu, X, Calendar, Phone, Sun, Moon } from 'lucide-react';
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

  // Streamlined, essential navigation items only
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'dubai-destination', label: 'Dubai' },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0c0c0c]/85 dark:bg-[#0c0c0c]/85 light:bg-[#FAF7F2]/92 backdrop-blur-2xl border-b border-white/10 dark:border-white/10 light:border-[#1A1918]/10 shadow-[0_4px_30px_rgba(0,0,0,0.85)] light:shadow-[0_4px_25px_rgba(110,85,45,0.08)] transition-colors duration-300">
      <div className="h-20 w-full px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Zone - Sleek Minimalist Logo, NO yellow dot */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left focus:outline-none group cursor-pointer"
          aria-label="The Royal Films Home"
        >
          <RoyalLogo size="md" />
        </button>

        {/* Desktop Nav Zone - Only Necessary Menus */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 cursor-pointer relative py-1 ${
                  isActive
                    ? 'text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] font-semibold'
                    : 'text-[#e5e2e1]/70 dark:text-[#e5e2e1]/70 light:text-[#5E5244] hover:text-[#fef9f1] light:hover:text-[#181614]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.8px] bg-[#B38842] dark:bg-[#e8c17a]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Zone: Theme Toggle & Shortened "Check Dates" CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark / Light Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-2 sm:p-2.5 rounded-full bg-white/5 dark:bg-white/5 light:bg-[#EFE9DF] hover:bg-white/10 light:hover:bg-[#E5DDD0] text-[#B38842] dark:text-[#e8c17a] border border-white/10 dark:border-white/10 light:border-[#1A1918]/10 transition-colors cursor-pointer shadow-sm"
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#facc15]" />
            ) : (
              <Moon className="w-4 h-4 text-[#181614]" />
            )}
          </button>

          {/* Shortened "Check Dates" CTA - Circular icon-only on smartphone view, pill/box with text on larger screens */}
          <button
            onClick={onOpenAvailability}
            aria-label="Check Dates Availability"
            title="Check Dates Availability"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 w-9 h-9 sm:w-auto sm:h-auto rounded-full sm:rounded-none p-0 sm:px-4 sm:py-2 bg-[#d60000] text-[#ffe5e1] hover:bg-[#ff3333] hover:text-white light:bg-[#C41E1E] light:hover:bg-[#A31818] light:text-white text-[11px] sm:text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 shadow-[0_0_18px_rgba(214,0,0,0.45)] cursor-pointer shrink-0"
          >
            <Calendar className="w-4 h-4 sm:w-3.5 sm:h-3.5 shrink-0" />
            <span className="hidden sm:inline">Check Dates</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#e5e2e1] dark:text-[#e5e2e1] light:text-[#181614] hover:text-[#B38842] focus:outline-none cursor-pointer"
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
            className="md:hidden bg-[#0c0c0c]/98 dark:bg-[#0c0c0c]/98 light:bg-[#FAF7F2]/98 backdrop-blur-2xl border-b border-white/10 dark:border-white/10 light:border-[#1A1918]/10 px-6 py-5 flex flex-col gap-4 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = currentTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left py-2 text-sm uppercase tracking-[0.2em] font-medium transition-colors ${
                      isActive
                        ? 'text-[#B38842] dark:text-[#e8c17a] font-semibold'
                        : 'text-[#e5e2e1]/70 dark:text-[#e5e2e1]/70 light:text-[#5E5244] hover:text-[#181614] dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 flex items-center justify-between">
              <a
                href="tel:+917004375740"
                className="flex items-center gap-2 text-xs text-[#B38842] dark:text-[#e8c17a] uppercase tracking-wider py-1 font-medium"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 70043 75740</span>
              </a>

              <button
                onClick={onToggleTheme}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 dark:bg-white/10 light:bg-[#EFE9DF] text-xs text-[#B38842] dark:text-[#e8c17a] font-medium"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                <span className="capitalize">{theme} Mode</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
