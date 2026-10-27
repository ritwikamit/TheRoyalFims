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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
      <div
        className="relative w-full max-w-md glass-panel border border-[#e8c17a]/30 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6"
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
          <span className="text-[11px] text-[#e8c17a] uppercase tracking-[0.25em] font-semibold">
            Client Archive Atelier
          </span>
          <h3 className="font-headline text-2xl text-[#fef9f1]">
            Private Wedding Gallery Access
          </h3>
          <p className="text-xs text-[#e8bcb5]/80 font-light leading-relaxed">
            Enter your private access passcode to view, download, or share your full-resolution wedding gallery and cinematic masters.
          </p>
        </div>

        {authenticatedGallery ? (
          <div className="flex flex-col gap-4 bg-black/50 backdrop-blur-md p-5 rounded-xl border border-[#e8c17a]/40">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#e8c17a] uppercase tracking-widest font-semibold">
                Access Granted
              </span>
              <ShieldCheck className="w-4 h-4 text-[#e8c17a]" />
            </div>

            <div>
              <h4 className="font-headline text-xl text-[#fef9f1]">
                {authenticatedGallery.couple}
              </h4>
              <p className="text-xs text-[#e8bcb5]/70">
                {authenticatedGallery.location} • {authenticatedGallery.date}
              </p>
            </div>

            <div className="flex flex-col gap-2 py-3 border-y border-white/10 text-xs">
              <div className="flex justify-between">
                <span className="text-[#e5e2e1]/60">Color-Graded Stills:</span>
                <span className="text-[#fef9f1] font-medium">{authenticatedGallery.totalStills} Photos</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#e5e2e1]/60">Films Delivered:</span>
                <span className="text-[#e8c17a] font-medium">{authenticatedGallery.filmResolution}</span>
              </div>
            </div>

            {downloadSuccess ? (
              <div className="p-3 bg-black/70 border border-[#e8c17a] text-xs text-[#e8c17a] rounded text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e8c17a]" />
                <span>Gallery Drive link prepared and authorized</span>
              </div>
            ) : (
              <div className="flex flex-col gap-2 pt-1">
                <button
                  onClick={() => setDownloadSuccess(true)}
                  className="w-full py-2.5 bg-[#d60000] hover:bg-[#ff3333] text-[#ffe5e1] hover:text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Full Resolution Archive</span>
                </button>
                <button
                  onClick={() => setDownloadSuccess(true)}
                  className="w-full py-2 bg-black/60 hover:bg-black/80 text-[#e8c17a] text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Stream 4K Master Film</span>
                </button>
              </div>
            )}

            <button
              onClick={() => {
                setAuthenticatedGallery(null);
                setDownloadSuccess(false);
                setPasscode('');
              }}
              className="text-[11px] text-[#e5e2e1]/50 hover:text-white underline text-center pt-2 cursor-pointer"
            >
              Log out of private vault
            </button>
          </div>
        ) : (
          <form onSubmit={handleAccess} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-wider text-[#e8c17a] font-medium">
                Client Vault Passcode
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="e.g. Pooja or your private code"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-black/50 text-[#fef9f1] placeholder:text-[#e8bcb5]/40 text-xs sm:text-sm rounded border border-white/10 focus:border-[#e8c17a] focus:outline-none"
                />
                <Key className="w-4 h-4 text-[#e8c17a] absolute left-3 top-3" />
              </div>
              <span className="text-[10px] text-[#e8bcb5]/60">
                Hint: Enter &quot;Pooja&quot; or &quot;Anjali&quot; or your client access key
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#d60000] hover:bg-[#ff3333] text-[#ffe5e1] hover:text-white text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-xl cursor-pointer"
            >
              Unlock Vault
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
