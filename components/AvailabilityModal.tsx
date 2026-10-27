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
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-lg bg-[#FAF4ED] dark:bg-[#16110D] text-[#241912] border border-[#E8DCCF] dark:border-[#FFCB56]/30 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#594233] hover:text-[#1A130E] dark:hover:text-white p-2 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] text-[#FF933E] dark:text-[#FFCB56] uppercase tracking-[0.25em] font-semibold">
            Live Studio Calendar
          </span>
          <h3 className="font-headline text-2xl sm:text-3xl text-[#241912]">
            Check Wedding Date Availability
          </h3>
          <p className="text-xs sm:text-sm text-[#594233] font-light leading-relaxed">
            We limit commissions to ensure unhurried presence and archival grade color-grading for every celebration.
          </p>
        </div>

        {checkedState === 'available' ? (
          <div className="flex flex-col gap-5 bg-white  p-5 rounded-xl border border-[#FF933E]/30 shadow-md">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#FF933E] dark:text-[#FFCB56] shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#241912]">
                  Date Is Currently Open for Booking
                </span>
                <span className="text-xs text-[#594233] mt-0.5">
                  Our premier cinema &amp; stills crew is available for {city} on {date || 'your requested dates'}.
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-[#FFCB56]/30 text-xs">
              <div className="flex justify-between text-[#594233]">
                <span>Crew Configuration:</span>
                <span className="text-[#241912] font-semibold">4–6 Visual Artists</span>
              </div>
              <div className="flex justify-between text-[#594233]">
                <span>Drone Aerial:</span>
                <span className="text-[#FF933E] dark:text-[#FFCB56] font-semibold">Included Subject to Permissions</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/917004375740?text=Hello%20The%20Royal%20Films%2C%20I%20would%20like%20to%20reserve%20coverage%20for%20my%20wedding%20on%20${encodeURIComponent(
                  date || 'upcoming dates'
                )}%20in%20${encodeURIComponent(city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#FF933E] hover:bg-[#FFCB56] text-white text-xs font-semibold uppercase tracking-[0.18em] text-center flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <a
                href="tel:+917004375740"
                className="px-4 py-3 bg-white  hover:bg-[#FAF4ED] text-[#FF933E] dark:text-[#FFCB56] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#FFCB56]/30 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF933E] dark:text-[#FFCB56]" />
                <span>Call Studio</span>
              </a>
            </div>

            <button
              onClick={() => setCheckedState('idle')}
              className="text-[11px] text-[#7C685B] dark:text-[#A49182] hover:underline text-center cursor-pointer"
            >
              Check another date
            </button>
          </div>
        ) : (
          <form onSubmit={handleCheck} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-[#FF933E] dark:text-[#FFCB56] font-semibold">
                Event Date
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white  border border-[#FFCB56]/30 text-sm text-[#241912] focus:outline-none focus:border-[#FF933E]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-[#FF933E] dark:text-[#FFCB56] font-semibold">
                Event Destination / Venue
              </label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Gaya, Bodh Gaya, Patna, Dubai"
                className="w-full px-4 py-3 rounded-lg bg-white  border border-[#FFCB56]/30 text-sm text-[#241912] placeholder:text-[#7C685B]/60 focus:outline-none focus:border-[#FF933E]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-[#FF933E] dark:text-[#FFCB56] font-semibold">
                Coverage Requirement
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'both', label: 'Photo & Film' },
                  { id: 'photo', label: 'Photo Only' },
                  { id: 'film', label: 'Film Only' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setService(item.id)}
                    className={`py-2.5 px-3 rounded text-xs font-semibold border transition-all ${
                      service === item.id
                        ? 'bg-[#FFE9A9] dark:bg-[#251C15] border-[#FF933E] text-[#FF933E] dark:text-[#FFCB56]'
                        : 'bg-white dark:bg-black/30 border-[#FFCB56]/30 text-[#594233]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={checkedState === 'checking'}
              className="mt-2 w-full py-3.5 bg-[#FF933E] hover:bg-[#FFCB56] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-[0_0_20px_rgba(212,103,67,0.45)] cursor-pointer"
            >
              {checkedState === 'checking' ? 'Querying Calendar...' : 'Check Availability'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
