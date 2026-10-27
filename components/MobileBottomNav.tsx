'use client';

import React from 'react';
import { Home, Film, Sparkles, Compass, Calendar } from 'lucide-react';

interface MobileBottomNavProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenAvailability: () => void;
}

export default function MobileBottomNav({
  currentTab,
  onSelectTab,
  onOpenAvailability,
}: MobileBottomNavProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'portfolio', label: 'Work', icon: Film },
    { id: 'services', label: 'Services', icon: Sparkles },
    { id: 'dubai-destination', label: 'Dubai', icon: Compass },
  ];

  return (
    <nav 
      aria-label="Mobile Quick Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c0c0c]/95 dark:bg-[#0c0c0c]/95 light:bg-[#ffffff]/95 backdrop-blur-xl border-t border-white/10 dark:border-white/10 light:border-black/10 px-2 py-2 safe-bottom shadow-[0_-8px_30px_rgba(0,0,0,0.6)]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-all cursor-pointer ${
                isActive
                  ? 'text-[#e8c17a]'
                  : 'text-[#e5e2e1]/65 dark:text-[#e5e2e1]/65 light:text-[#1a1918]/65 hover:text-white'
              }`}
            >
              <div className={`p-1 rounded-full transition-colors ${isActive ? 'bg-[#e8c17a]/15' : ''}`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase tracking-wider font-medium mt-0.5">
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Highlighted 'Check Dates' Quick Action */}
        <button
          onClick={onOpenAvailability}
          className="flex flex-col items-center justify-center py-1 px-3 text-[#ffe5e1] hover:text-white transition-all cursor-pointer group"
        >
          <div className="p-1 rounded-full bg-[#d60000] text-white shadow-[0_0_12px_rgba(214,0,0,0.5)] group-hover:bg-[#ff3333] transition-colors">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[10px] uppercase tracking-wider font-bold text-[#ffb4a8] mt-0.5">
            Dates
          </span>
        </button>
      </div>
    </nav>
  );
}
