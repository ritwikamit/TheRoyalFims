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
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-xl border-t border-[#FFCB56]/30 px-2 py-2 safe-bottom shadow-[0_-8px_30px_rgba(90,60,20,0.06)]"
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
                  ? 'text-[#FF933E] font-bold'
                  : 'text-[#594233] hover:text-[#241912]'
              }`}
            >
              <div className={`p-1 rounded-full transition-colors ${isActive ? 'bg-[#FF933E]/15' : ''}`}>
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
          className="flex flex-col items-center justify-center py-1 px-3 text-[#FF933E] transition-all cursor-pointer group"
        >
          <div className="p-1 rounded-full bg-[#FF933E] text-white shadow-[0_0_12px_rgba(255,147,62,0.4)] group-hover:bg-[#ff8425] transition-colors">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[10px] uppercase tracking-wider font-bold text-[#FF933E] mt-0.5">
            Dates
          </span>
        </button>
      </div>
    </nav>
  );
}
