'use client';

import React from 'react';
import { Home, Film, Camera, Compass, Calendar } from 'lucide-react';

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
    { id: 'gallery', label: 'Gallery', icon: Camera },
    { id: 'portfolio', label: 'Work', icon: Film },
    { id: 'dubai-destination', label: 'Dubai', icon: Compass },
  ];

  return (
    <nav 
      aria-label="Mobile Quick Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-2xl border-t border-[#FFCB56] px-2 py-1.5 shadow-[0_-10px_35px_rgba(115,165,202,0.2),inset_0_1.5px_3px_rgba(255,255,255,0.95)]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-full transition-all cursor-pointer active:scale-95 ${
                isActive
                  ? 'text-[#FF933E] font-bold'
                  : 'text-[#594233] hover:text-[#241912]'
              }`}
            >
              <div 
                className={`p-1.5 rounded-full transition-all ${
                  isActive 
                    ? 'clay-pill bg-[#FF933E] text-white shadow-sm' 
                    : 'bg-transparent text-[#594233]'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span className={`text-[9.5px] uppercase tracking-wider mt-0.5 ${isActive ? 'font-bold text-[#FF933E]' : 'font-semibold text-[#594233]'}`}>
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Highlighted 'Check Dates' Quick Action with Claymorphism */}
        <button
          onClick={onOpenAvailability}
          className="flex flex-col items-center justify-center py-1 px-2.5 transition-all cursor-pointer active:scale-95 group"
          aria-label="Check wedding dates availability"
        >
          <div className="clay-button p-1.5 rounded-full bg-[#FF933E] hover:bg-[#ff8425] text-white shadow-[0_4px_14px_rgba(255,147,62,0.45)] border border-[#FFCB56]/60 transition-transform group-hover:scale-105">
            <Calendar className="w-4 h-4 text-[#FFE9A9]" />
          </div>
          <span className="text-[9.5px] uppercase tracking-wider font-bold text-[#FF933E] mt-0.5">
            Dates
          </span>
        </button>
      </div>
    </nav>
  );
}
