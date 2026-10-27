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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-2xl">
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-panel border border-[#e8c17a]/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 hover:bg-[#d60000] text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg border border-white/10"
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
            <span className="px-3 py-1 bg-black/85 backdrop-blur-md text-[#e8c17a] text-[11px] font-semibold uppercase tracking-widest border border-[#e8c17a]/30 flex items-center gap-1.5">
              {item.badgeType === 'video' ? <Film className="w-3.5 h-3.5 text-[#ffb4a8]" /> : <Camera className="w-3.5 h-3.5 text-[#e8c17a]" />}
              {item.badge}
            </span>
          </div>

          {item.badgeType === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#d60000]/90 text-white flex items-center justify-center shadow-[0_0_30px_rgba(214,0,0,0.6)] group-hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-7 h-7 ml-1 fill-white" />
              </div>
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#e8c17a]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </span>
                <span>•</span>
                <span>{item.category.toUpperCase()}</span>
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#fef9f1]">
                {item.title}
              </h2>
            </div>

            <button
              onClick={() => {
                onClose();
                onInquireStyle(item.title);
              }}
              className="px-6 py-3 bg-[#d60000] hover:bg-[#ff3333] text-[#ffe5e1] hover:text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(214,0,0,0.4)] whitespace-nowrap cursor-pointer"
            >
              Inquire This Style
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col gap-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#e8c17a] font-semibold">
                Story Narrative &amp; Mood
              </h3>
              <p className="text-xs sm:text-sm text-[#e5e2e1]/90 leading-relaxed font-light">
                {item.description}
              </p>
              <p className="text-xs sm:text-sm text-[#e8bcb5]/80 leading-relaxed font-light">
                Documented with intentional pacing, preserving the honest glances between families, sacred rituals, and candid laughter that make each heirloom gallery singular. Color-corrected for archival longevity and true skin luminescence.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-md p-5 rounded-xl border border-white/10 flex flex-col gap-3">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#fef9f1] font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#e8c17a]" />
                Technical Specs
              </h4>
              <div className="flex flex-col gap-2 text-xs text-[#e8bcb5]/80">
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-[#e5e2e1]/50">Resolution</span>
                  <span className="text-[#fef9f1] font-medium">4K HDR 10-Bit</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-[#e5e2e1]/50">Optics</span>
                  <span className="text-[#fef9f1] font-medium">35mm Prime &amp; Anamorphic</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-[#e5e2e1]/50">Aerial Pilot</span>
                  <span className="text-[#fef9f1] font-medium">DGCA Certified Drone</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-[#e5e2e1]/50">Grading</span>
                  <span className="text-[#fef9f1] font-medium">Custom Royale Film LUT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
