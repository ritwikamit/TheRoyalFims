'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, MessageSquare } from 'lucide-react';

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConfirmed?: (details: { date: string; location: string; eventType: string }) => void;
}

export default function AvailabilityModal({ isOpen, onClose }: AvailabilityModalProps) {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('Gaya');
  const [service, setService] = useState('both');
  const [checkedState, setCheckedState] = useState<'idle' | 'checking' | 'available' | 'reserved'>('idle');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckedState('checking');
    setTimeout(() => {
      setCheckedState('available');
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl">
      <div
        className="relative w-full max-w-lg glass-panel border border-[#e8c17a]/30 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#e5e2e1]/70 hover:text-white p-2 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col gap-1.5">
          {/* NO dots or cylinders - Clean text */}
          <span className="text-[11px] text-[#e8c17a] uppercase tracking-[0.25em] font-semibold">
            Live Studio Calendar
          </span>
          <h3 className="font-headline text-2xl sm:text-3xl text-[#fef9f1]">
            Check Wedding Date Availability
          </h3>
          <p className="text-xs sm:text-sm text-[#e8bcb5]/80 font-light leading-relaxed">
            We limit commissions to ensure unhurried presence and archival grade color-grading for every celebration.
          </p>
        </div>

        {checkedState === 'available' ? (
          <div className="flex flex-col gap-5 bg-black/50 backdrop-blur-md p-5 rounded-xl border border-[#e8c17a]/40">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#e8c17a] shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#fef9f1]">
                  Date Is Currently Open for Booking
                </span>
                <span className="text-xs text-[#e8bcb5]/80 mt-0.5">
                  Our premier cinema &amp; stills crew is available for {city} on {date || 'your requested dates'}.
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-white/10 text-xs">
              <div className="flex justify-between text-[#e5e2e1]/80">
                <span>Crew Configuration:</span>
                <span className="text-[#fef9f1] font-medium">4–6 Visual Artists</span>
              </div>
              <div className="flex justify-between text-[#e5e2e1]/80">
                <span>Drone Aerial:</span>
                <span className="text-[#e8c17a] font-medium">Included Subject to Permissions</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/917004375740?text=Hello%20The%20Royal%20Films%2C%20I%20would%20like%20to%20reserve%20coverage%20for%20my%20wedding%20on%20${encodeURIComponent(
                  date || 'upcoming dates'
                )}%20in%20${encodeURIComponent(city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#d60000] hover:bg-[#ff3333] text-[#ffe5e1] text-xs font-semibold uppercase tracking-[0.18em] text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <a
                href="tel:+917004375740"
                className="px-4 py-3 bg-black/60 hover:bg-black/80 text-[#e8c17a] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-[#e8c17a]" />
                <span>Call Studio</span>
              </a>
            </div>

            <button
              onClick={() => setCheckedState('idle')}
              className="text-[11px] text-[#e5e2e1]/60 hover:text-white underline text-center cursor-pointer"
            >
              Check another date
            </button>
          </div>
        ) : (
          <form onSubmit={handleCheck} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] uppercase tracking-wider text-[#e8c17a] font-medium">
                Wedding / Ceremony Date *
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-black/50 text-[#fef9f1] text-xs sm:text-sm rounded border border-white/10 focus:border-[#e8c17a] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-wider text-[#e8c17a] font-medium">
                  Destination / City *
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2.5 bg-black/50 text-[#fef9f1] text-xs sm:text-sm rounded border border-white/10 focus:border-[#e8c17a] focus:outline-none"
                >
                  <option value="Gaya" className="bg-[#121212]">Gaya, Bihar</option>
                  <option value="Bodh Gaya" className="bg-[#121212]">Bodh Gaya</option>
                  <option value="Patna" className="bg-[#121212]">Patna</option>
                  <option value="Varanasi" className="bg-[#121212]">Varanasi</option>
                  <option value="Dubai" className="bg-[#121212]">Dubai Destination</option>
                  <option value="Other" className="bg-[#121212]">Other Destination</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-wider text-[#e8c17a] font-medium">
                  Coverage Medium
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2.5 bg-black/50 text-[#fef9f1] text-xs sm:text-sm rounded border border-white/10 focus:border-[#e8c17a] focus:outline-none"
                >
                  <option value="both" className="bg-[#121212]">Photo &amp; Cinema</option>
                  <option value="photo" className="bg-[#121212]">Stills Only</option>
                  <option value="film" className="bg-[#121212]">Cinema Only</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={checkedState === 'checking'}
              className="w-full py-3 bg-[#d60000] hover:bg-[#ff3333] text-[#ffe5e1] hover:text-white text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl cursor-pointer mt-2"
            >
              {checkedState === 'checking' ? 'Consulting Master Calendar...' : 'Check Availability'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
