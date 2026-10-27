'use client';

import React, { useState } from 'react';
import { X, Lock, Key, ShieldCheck, Download, Eye, CheckCircle2 } from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientPortalModal({ isOpen, onClose }: ClientPortalModalProps) {
  const [passcode, setPasscode] = useState('');
  const [authenticatedGallery, setAuthenticatedGallery] = useState<{
    couple: string;
    location: string;
    date: string;
    totalStills: number;
    filmResolution: string;
  } | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.toLowerCase() === 'pooja' || passcode.toLowerCase() === 'rohit') {
      setAuthenticatedGallery({
        couple: 'Pooja & Rohit',
        location: 'Royal Heritage Hall, Gaya',
        date: 'Wedding Celebrations',
        totalStills: 840,
        filmResolution: '4K Cinema Teaser & 62-Min Feature',
      });
    } else if (passcode.toLowerCase() === 'anjali' || passcode.toLowerCase() === 'siddharth') {
      setAuthenticatedGallery({
        couple: 'Anjali & Siddharth',
        location: 'Dubai Destination & Bodh Gaya',
        date: 'Pre-Wedding & Reception',
        totalStills: 620,
        filmResolution: '4K Master Cinematic Teaser',
      });
    } else {
      setAuthenticatedGallery({
        couple: 'Private Client Preview',
        location: 'Gaya & Destination Atelier',
        date: 'Curated 2025/2026 Archive',
        totalStills: 750,
        filmResolution: '4K HDR Master Suite',
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-md bg-[#FAF4ED] dark:bg-[#16110D] text-[#1A130E] dark:text-[#FAF3EC] border border-[#E8DCCF] dark:border-[#E89B5B]/30 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#524237] dark:text-[#D9C7B8] hover:text-[#1A130E] dark:hover:text-white p-2 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] text-[#D46743] dark:text-[#E89B5B] uppercase tracking-[0.25em] font-semibold">
            Client Archive Atelier
          </span>
          <h3 className="font-headline text-2xl text-[#1A130E] dark:text-[#FAF3EC]">
            Private Wedding Gallery Access
          </h3>
          <p className="text-xs text-[#524237] dark:text-[#D9C7B8] font-light leading-relaxed">
            Enter your private access passcode to view, download, or share your full-resolution wedding gallery and cinematic masters.
          </p>
        </div>

        {authenticatedGallery ? (
          <div className="flex flex-col gap-4 bg-white dark:bg-black/50 p-5 rounded-xl border border-[#D46743]/30 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#D46743] dark:text-[#E89B5B] uppercase tracking-widest font-semibold">
                Access Granted
              </span>
              <ShieldCheck className="w-4 h-4 text-[#D46743] dark:text-[#E89B5B]" />
            </div>

            <div>
              <h4 className="font-headline text-xl text-[#1A130E] dark:text-[#FAF3EC]">
                {authenticatedGallery.couple}
              </h4>
              <p className="text-xs text-[#7C685B] dark:text-[#A49182]">
                {authenticatedGallery.location} • {authenticatedGallery.date}
              </p>
            </div>

            <div className="flex flex-col gap-2 py-3 border-y border-[#E8DCCF] dark:border-white/10 text-xs text-[#524237] dark:text-[#D9C7B8]">
              <div className="flex justify-between">
                <span>Color-Graded Stills:</span>
                <span className="text-[#1A130E] dark:text-[#FAF3EC] font-semibold">{authenticatedGallery.totalStills} Photos</span>
              </div>
              <div className="flex justify-between">
                <span>Film Masters:</span>
                <span className="text-[#D46743] dark:text-[#E89B5B] font-semibold">{authenticatedGallery.filmResolution}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={() => setDownloadSuccess(true)}
                className="w-full py-3 bg-[#D46743] hover:bg-[#E89B5B] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 rounded transition-colors shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Master ZIP Archive</span>
              </button>

              {downloadSuccess && (
                <div className="flex items-center gap-1.5 text-xs text-[#D46743] dark:text-[#E89B5B] justify-center mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Cloud archive decryption initialized. Download starting.</span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <form onSubmit={handleAccess} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-[#D46743] dark:text-[#E89B5B] font-semibold">
                Private Couple Passcode
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode (e.g. pooja / rohit)"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/50 border border-[#E8DCCF] dark:border-white/10 text-sm text-[#1A130E] dark:text-[#FAF3EC] placeholder:text-[#7C685B]/60 focus:outline-none focus:border-[#D46743]"
                />
                <Key className="w-4 h-4 text-[#D46743] absolute right-3.5 top-3.5" />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3.5 bg-[#D46743] hover:bg-[#E89B5B] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-[0_0_20px_rgba(212,103,67,0.45)] cursor-pointer"
            >
              Enter Client Portal
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
