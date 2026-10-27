'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, CheckCircle2, Calendar, MapPin, User, Phone, Camera, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import MinimalWhatsAppIcon from './MinimalWhatsAppIcon';

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConfirmed?: (details: { date: string; location: string; eventType: string }) => void;
}

export default function AvailabilityModal({ isOpen, onClose }: AvailabilityModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [service, setService] = useState('both');
  const [notes, setNotes] = useState('');
  const [checkedState, setCheckedState] = useState<'idle' | 'checking' | 'available'>('idle');

  // Today's date string for min date attribute
  const todayStr = new Date().toISOString().split('T')[0];

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

  const serviceLabels: Record<string, string> = {
    both: 'Photo & Film (Full Royal Cinema)',
    film: 'Cinematography Only (4K HDR)',
    photo: 'Editorial Photography Only',
    prewedding: 'Pre-Wedding Film & Teaser',
  };

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckedState('checking');
    setTimeout(() => {
      setCheckedState('available');
    }, 400);
  };

  const handleReset = () => {
    setCheckedState('idle');
  };

  // Build WhatsApp concierge inquiry URL
  const generateWhatsAppUrl = () => {
    const message = `Hello The Royal Films!%0A%0AI would like to inquire about wedding / event date availability:%0A%0A• *Client / Couple:* ${encodeURIComponent(name || 'Client')}%0A• *Date:* ${encodeURIComponent(date || 'Upcoming')}%0A• *Destination / Venue:* ${encodeURIComponent(city || 'Gaya / Destination')}%0A• *Coverage:* ${encodeURIComponent(serviceLabels[service] || 'Photo & Film')}${phone ? `%0A• *Phone:* ${encodeURIComponent(phone)}` : ''}${notes ? `%0A• *Notes:* ${encodeURIComponent(notes)}` : ''}%0A%0APlease let me know the availability and package details. Thank you!`;
    return `https://wa.me/918210351286?text=${message}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop - Click outside to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
          aria-hidden="true"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="clay-card relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-[#FFFDF9] text-[#241912] border-2 border-[#FFCB56] rounded-3xl p-5 sm:p-8 shadow-[0_24px_70px_rgba(36,25,18,0.25),0_0_30px_rgba(255,203,86,0.35)] flex flex-col gap-5 sm:gap-6 z-10 my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Golden Glossy Sheen Line */}
          <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#FFE9A9] to-transparent shadow-[0_0_12px_#FFCB56] pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#594233] hover:text-[#FF933E] p-2 rounded-full hover:bg-[#FAF3E6] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Studio Header */}
          <div className="flex items-start gap-3.5 pr-8">
            <div className="relative w-12 h-12 shrink-0">
              <Image
                src="/assets/golden-royal-films-emblem.png"
                alt="The Royal Films"
                width={48}
                height={48}
                className="w-full h-full object-contain drop-shadow-[0_2px_10px_rgba(255,203,86,0.5)]"
              />
            </div>
            <div className="flex flex-col">
              <span
                className="text-2xl sm:text-3xl text-[#FF933E] leading-tight"
                style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Apple Chancery', Georgia, serif" }}
              >
                The Royal Films
              </span>
              <span className="text-[10px] text-[#73A5CA] font-bold uppercase tracking-[0.24em] mt-0.5">
                Live Studio Date Availability
              </span>
            </div>
          </div>

          {checkedState === 'available' ? (
            /* Result State: Available & Ready for Concierge Booking */
            <div className="flex flex-col gap-5 bg-[#FAF3E6] p-5 sm:p-6 rounded-xl border border-[#FFCB56] shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FF933E]/15 border border-[#FF933E] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-6 h-6 text-[#FF933E]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-[#241912]">
                    Date Is Currently Available
                  </span>
                  <span className="text-xs text-[#594233] mt-0.5 leading-relaxed">
                    Our master cinema &amp; editorial photography crew is open for commissioning in{' '}
                    <strong className="text-[#241912]">{city || 'your chosen location'}</strong> on{' '}
                    <strong className="text-[#241912]">{date || 'your requested date'}</strong>.
                  </span>
                </div>
              </div>

              {/* Inquiry Summary Pill Box */}
              <div className="flex flex-col gap-2 p-3.5 bg-white rounded-lg border border-[#FFE9A9] text-xs">
                <div className="flex justify-between items-center text-[#594233]">
                  <span>Couple / Client:</span>
                  <span className="text-[#241912] font-semibold">{name || 'Private Client'}</span>
                </div>
                <div className="flex justify-between items-center text-[#594233]">
                  <span>Event Date:</span>
                  <span className="text-[#FF933E] font-semibold">{date || 'Not specified'}</span>
                </div>
                <div className="flex justify-between items-center text-[#594233]">
                  <span>Location:</span>
                  <span className="text-[#241912] font-semibold">{city || 'Gaya / Destination'}</span>
                </div>
                <div className="flex justify-between items-center text-[#594233]">
                  <span>Coverage Scope:</span>
                  <span className="text-[#73A5CA] font-bold">{serviceLabels[service]}</span>
                </div>
              </div>

              {/* Action Buttons: WhatsApp Concierge (Minimal Icon) & Call */}
              <div className="flex flex-col gap-2.5 pt-1">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-button w-full py-3.5 bg-[#FF933E] hover:bg-[#ff8425] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full flex items-center justify-center gap-2.5 shadow-[0_6px_20px_rgba(255,147,62,0.45)] border border-[#FFCB56] transition-transform active:scale-95 group cursor-pointer"
                >
                  <MinimalWhatsAppIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>Connect on WhatsApp Concierge</span>
                  <ArrowRight className="w-4 h-4 text-[#FFE9A9] transition-transform group-hover:translate-x-1" />
                </a>

                <div className="flex items-center justify-between text-xs text-[#594233] pt-1">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-[#73A5CA] hover:text-[#FF933E] hover:underline font-semibold cursor-pointer"
                  >
                    ← Check another date
                  </button>
                  <a
                    href="tel:+918210351286"
                    className="flex items-center gap-1.5 text-[#594233] hover:text-[#FF933E] font-medium"
                    title="Call studio directly"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FF933E]" />
                    <span>Call Studio Directly</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* Inquiry & Availability Form */
            <form onSubmit={handleCheck} className="flex flex-col gap-4">
              {/* Couple / Client Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#FF933E] font-bold flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#FFCB56]" />
                  <span>Your Name / Couple Names *</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aditi & Rohan"
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E8DCCF] text-sm text-[#241912] placeholder:text-[#594233]/45 focus:outline-none focus:border-[#FF933E] focus:ring-1 focus:ring-[#FF933E] transition-all"
                />
              </div>

              {/* Contact Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#FF933E] font-bold flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#FFCB56]" />
                  <span>WhatsApp / Contact Number *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E8DCCF] text-sm text-[#241912] placeholder:text-[#594233]/45 focus:outline-none focus:border-[#FF933E] focus:ring-1 focus:ring-[#FF933E] transition-all"
                />
              </div>

              {/* Two Column: Date & Venue */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Event Date */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#FF933E] font-bold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#FFCB56]" />
                    <span>Wedding Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={todayStr}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E8DCCF] text-sm text-[#241912] focus:outline-none focus:border-[#FF933E] focus:ring-1 focus:ring-[#FF933E] transition-all [color-scheme:light]"
                  />
                </div>

                {/* Destination / Venue */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#FF933E] font-bold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FFCB56]" />
                    <span>Destination / City *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Gaya, Patna, Dubai"
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E8DCCF] text-sm text-[#241912] placeholder:text-[#594233]/45 focus:outline-none focus:border-[#FF933E] focus:ring-1 focus:ring-[#FF933E] transition-all"
                  />
                </div>
              </div>

              {/* Coverage Requirement Pills */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#FF933E] font-bold flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-[#FFCB56]" />
                  <span>Coverage Requirement</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'both', label: 'Photo & Film' },
                    { id: 'film', label: 'Film Only' },
                    { id: 'photo', label: 'Photo Only' },
                    { id: 'prewedding', label: 'Pre-Wedding' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setService(item.id)}
                      className={`py-2 px-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer text-center ${
                        service === item.id
                          ? 'bg-[#FFE9A9] border-[#FF933E] text-[#FF933E] shadow-sm'
                          : 'bg-white border-[#E8DCCF] text-[#594233] hover:border-[#FFCB56]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes / Special Wishes */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#594233] font-semibold">
                  Additional Details / Ceremonies (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. 2-day wedding with Sangeet and Haldi at Bodh Gaya resort"
                  className="w-full px-4 py-2 rounded-lg bg-white border border-[#E8DCCF] text-xs text-[#241912] placeholder:text-[#594233]/45 focus:outline-none focus:border-[#FF933E] focus:ring-1 focus:ring-[#FF933E] resize-none transition-all"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={checkedState === 'checking'}
                className="clay-button mt-2 w-full py-3.5 bg-[#FF933E] hover:bg-[#ff8425] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full shadow-[0_6px_20px_rgba(255,147,62,0.45)] border border-[#FFCB56] transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                {checkedState === 'checking' ? (
                  <span>Checking Live Studio Schedule...</span>
                ) : (
                  <>
                    <span>Check Date Availability</span>
                    <ArrowRight className="w-4 h-4 text-[#FFE9A9]" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
