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
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF4ED]/95 dark:bg-[#120E0A]/95 backdrop-blur-xl border-t border-[#E8DCCF] dark:border-white/10 px-2 py-2 safe-bottom shadow-[0_-8px_30px_rgba(82,55,30,0.08)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.6)]"
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
                  ? 'text-[#D46743] dark:text-[#E89B5B] font-bold'
                  : 'text-[#524237] dark:text-[#D9C7B8] hover:text-[#1A130E] dark:hover:text-white'
              }`}
            >
              <div className={`p-1 rounded-full transition-colors ${isActive ? 'bg-[#D46743]/15 dark:bg-[#E89B5B]/15' : ''}`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold mt-0.5">
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Highlighted 'Check Dates' Quick Action */}
        <button
          onClick={onOpenAvailability}
          className="flex flex-col items-center justify-center py-1 px-3 text-[#D46743] transition-all cursor-pointer group"
        >
          <div className="p-1 rounded-full bg-[#D46743] text-white shadow-[0_0_12px_rgba(212,103,67,0.5)] group-hover:bg-[#E89B5B] transition-colors">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[10px] uppercase tracking-wider font-bold text-[#D46743] dark:text-[#E89B5B] mt-0.5">
            Dates
          </span>
        </button>
      </div>
    </nav>
  );
}
