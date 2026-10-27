'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, Play, Camera, Film, MapPin, Sparkles } from 'lucide-react';

export interface PortfolioItemData {
  id: string;
  category: string;
  badge: string;
  badgeType: 'video' | 'photo' | 'story';
  location: string;
  title: string;
  description: string;
  image: string;
}

interface PortfolioModalProps {
  item: PortfolioItemData | null;
  onClose: () => void;
  onInquireStyle: (itemTitle: string) => void;
}

export default function PortfolioModal({ item, onClose, onInquireStyle }: PortfolioModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#FAF4ED] dark:bg-[#16110D] text-[#1A130E] dark:text-[#FAF3EC] border border-[#E8DCCF] dark:border-[#E89B5B]/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 hover:bg-[#D46743] text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg border border-white/10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 bg-black/85 backdrop-blur-md text-[#FFEAD3] text-[11px] font-semibold uppercase tracking-widest border border-white/20 flex items-center gap-1.5">
              {item.badgeType === 'video' ? <Film className="w-3.5 h-3.5 text-[#E89B5B]" /> : <Camera className="w-3.5 h-3.5 text-[#BFE7EA]" />}
              {item.badge}
            </span>
          </div>

          {item.badgeType === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#D46743]/90 text-white flex items-center justify-center shadow-[0_0_30px_rgba(212,103,67,0.6)] group-hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-7 h-7 ml-1 fill-white" />
              </div>
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E8DCCF] dark:border-white/10 pb-6">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#D46743] dark:text-[#E89B5B] font-semibold">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </span>
                <span>•</span>
                <span>{item.category.toUpperCase()}</span>
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#1A130E] dark:text-[#FAF3EC]">
                {item.title}
              </h2>
            </div>

            <button
              onClick={() => {
                onClose();
                onInquireStyle(item.title);
              }}
              className="px-6 py-3.5 bg-[#D46743] hover:bg-[#E89B5B] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(212,103,67,0.4)] whitespace-nowrap cursor-pointer"
            >
              Inquire This Style
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col gap-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#D46743] dark:text-[#E89B5B] font-semibold">
                Story Narrative &amp; Mood
              </h3>
              <p className="text-xs sm:text-sm text-[#1A130E] dark:text-[#FAF3EC] leading-relaxed font-light">
                {item.description}
              </p>
              <p className="text-xs sm:text-sm text-[#524237] dark:text-[#D9C7B8] leading-relaxed font-light">
                Documented with intentional pacing, preserving the honest glances between families, sacred rituals, and candid laughter that make each heirloom gallery singular. Color-corrected for archival longevity and true skin luminescence.
              </p>
            </div>

            <div className="bg-white dark:bg-black/50 p-5 rounded-xl border border-[#E8DCCF] dark:border-white/10 flex flex-col gap-3 shadow-md">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#1A130E] dark:text-[#FAF3EC] font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D46743] dark:text-[#E89B5B]" />
                Technical Specs
              </h4>
              <div className="flex flex-col gap-2 text-xs text-[#524237] dark:text-[#D9C7B8]">
                <div className="flex justify-between border-b border-[#E8DCCF]/50 dark:border-white/5 pb-1.5">
                  <span className="text-[#7C685B] dark:text-[#A49182]">Resolution</span>
                  <span className="text-[#1A130E] dark:text-[#FAF3EC] font-semibold">4K HDR 10-Bit</span>
                </div>
                <div className="flex justify-between border-b border-[#E8DCCF]/50 dark:border-white/5 pb-1.5">
                  <span className="text-[#7C685B] dark:text-[#A49182]">Optics</span>
                  <span className="text-[#1A130E] dark:text-[#FAF3EC] font-semibold">35mm Prime &amp; Anamorphic</span>
                </div>
                <div className="flex justify-between border-b border-[#E8DCCF]/50 dark:border-white/5 pb-1.5">
                  <span className="text-[#7C685B] dark:text-[#A49182]">Aerial Pilot</span>
                  <span className="text-[#1A130E] dark:text-[#FAF3EC] font-semibold">DGCA Certified Drone</span>
                </div>
                <div className="flex justify-between border-b border-[#E8DCCF]/50 dark:border-white/5 pb-1.5">
                  <span className="text-[#7C685B] dark:text-[#A49182]">Grading</span>
                  <span className="text-[#1A130E] dark:text-[#FAF3EC] font-semibold">Custom Royale Film LUT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
