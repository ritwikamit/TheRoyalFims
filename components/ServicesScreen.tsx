'use client';

import InteractiveGrid from "./InteractiveGrid";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Camera, 
  Film, 
  Heart, 
  Users, 
  Clock, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Plane, 
  SlidersHorizontal,
  Check,
  ArrowRight,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesScreenProps {
  onOpenAvailability: () => void;
  onNavigateTab: (tab: string) => void;
}

export default function ServicesScreen({ onOpenAvailability, onNavigateTab }: ServicesScreenProps) {
  // Estimator state
  const [selectedFunctions, setSelectedFunctions] = useState<string[]>(['Wedding', 'Reception']);
  const [coverageMedium, setCoverageMedium] = useState<'both' | 'photography' | 'films'>('both');
  const [eventDates, setEventDates] = useState('');
  const [venueCity, setVenueCity] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFunction = (func: string) => {
    setSelectedFunctions(prev => 
      prev.includes(func) 
        ? prev.filter(f => f !== func) 
        : [...prev, func]
    );
  };

  const handleEstimatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const estimatedCrew = () => {
    const baseCrew = coverageMedium === 'both' ? 4 : 2;
    const additional = selectedFunctions.length >= 3 ? 2 : 0;
    return baseCrew + additional;
  };

  return (
    <div className="flex flex-col w-full text-on-surface overflow-hidden">
      {/* REDESIGNED CINEMATIC SERVICES HERO - Atmospheric, Clearly Visible Background, Glassmorphic */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] flex items-end pb-16 sm:pb-20 pt-28 px-5 sm:px-8 lg:px-14 overflow-hidden bg-black">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-80 scale-100 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBkAd1nZHC9Lj2JT9c93kstWLsBFJtQkwkL-tixM4OaZXnD8P3xb3AcZa3PMspMDFopjTkbbMmmJ5vBlSm2ZokooUmwSJZzEEnD10iwazkeqWW3ax3PRRdWIUzgrLb0IpnIvdA1OFhg4O9E7oevPgxCPWHHAkalLvxhkzQH4Vb1J9XhV9H48WUfcJ92_RrKPm9VOXuvhBBBwwNAf80AaeCgaA6mtp5Q70zzomULC04WGgpD_g1FkM_0A')`
          }}
        />
        {/* Soft Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none" />

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col gap-5 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
          >
            {/* NO cylinders or dots - Clean text only */}
            <span className="text-xs sm:text-sm text-[#e8c17a] uppercase tracking-[0.28em] font-semibold">
              Cinema &amp; Stills • Gaya Atelier
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-headline text-3xl sm:text-5xl lg:text-6xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] uppercase tracking-tight leading-[1.12]"
          >
            Wedding &amp; Pre-Wedding Photography in Gaya
          </motion.h1>

          {/* Romantic Cursive Excerpt */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="font-cursive-romantic text-2xl sm:text-3xl lg:text-4xl text-[#e8c17a] -mt-1 tracking-wide drop-shadow-md"
          >
            &ldquo;Crafting family heirlooms, framed with light and genuine emotion.&rdquo;
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-[#e8bcb5] max-w-2xl font-light leading-relaxed"
          >
            Every wedding has its own pace. There are planned rituals, family photographs, unexpected laughter, and moments that happen in between. Coverage planned around your event and the moments you want to remember.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a 
              href="#estimator" 
              className="px-7 py-3 bg-[#d60000] text-[#ffe5e1] hover:bg-[#ff3333] hover:text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(214,0,0,0.45)] text-center cursor-pointer"
            >
              Plan Your Coverage
            </a>
            <a 
              href="tel:+917004375740" 
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-black/60 backdrop-blur-xl text-[#e8c17a] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-black/80 hover:text-white transition-colors border border-white/15"
            >
              <Phone className="w-3.5 h-3.5 text-[#e8c17a]" />
              <span>+91 70043 75740</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Editorial Services Section */}
      <section className="relative w-full bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-[#FAF7F2] px-5 sm:px-8 lg:px-14 py-16 sm:py-24 border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 overflow-hidden">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6"
          >
            <div className="flex flex-col">
              <span className="text-xs text-[#e8c17a] uppercase tracking-[0.25em] font-semibold mb-1">
                Service Overview
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] uppercase">
                In-Depth Service Breakdown
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] max-w-md font-light leading-relaxed">
              Documenting your ceremonies across Gaya, Bihar, and destination celebrations with deliberate pacing and authentic attention.
            </p>
          </motion.div>

          {/* Service Card Mosaic with Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
            {/* Card 1: Pre-Wedding (Span 7) */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-7 glass-panel rounded-xl flex flex-col shadow-2xl group overflow-hidden"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-black">
                <Image 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80" 
                  alt="Pre-wedding photography"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 backdrop-blur-md border border-[#e8c17a]/30">
                  <span className="text-[10px] sm:text-xs text-[#e8c17a] uppercase tracking-[0.2em] font-medium">
                    01 • Prior to the Day
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline text-2xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
                    Pre-Wedding Photography &amp; Videography
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
                    A pre-wedding shoot gives you and your partner a little time together before the wedding. We talk through the setting, outfits, preferred style, and whether you would like photographs, a video story, or both without the rush of wedding-day timelines.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 text-[#e8c17a] text-xs uppercase tracking-wider border-t border-white/10">
                  <span>Gaya • Bodh Gaya • Destination Shoots</span>
                  <div className="flex items-center gap-1.5">
                    <Camera className="w-4 h-4 text-[#e8c17a]" />
                    <span>Fine Art Stills</span>
                  </div>
                </div></div>
            </motion.div>

            {/* Card 2: Wedding-Day Coverage (Span 5) */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="md:col-span-5 glass-panel rounded-xl flex flex-col shadow-2xl group overflow-hidden"
            >
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-black">
                <Image 
                  src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80" 
                  alt="Wedding-Day Photography"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 backdrop-blur-md border border-[#e8c17a]/30">
                  <span className="text-[10px] sm:text-xs text-[#e8c17a] uppercase tracking-[0.2em] font-medium">
                    02 • The Big Day
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline text-2xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
                    Wedding-Day Photography &amp; Videography
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
                    From morning preparation and baraat arrivals through the phere rituals and evening reception. We capture the main ceremonies alongside honest interactions between loved ones.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 text-[#e8c17a] text-xs uppercase tracking-wider border-t border-white/10">
                  <span>Full-Day Continuous Coverage</span>
                  <div className="flex items-center gap-1.5">
                    <Film className="w-4 h-4 text-[#e8c17a]" />
                    <span>4K Cinema</span>
                  </div>
                </div></div>
            </motion.div>

            {/* Card 3: Candid Photography (Span 4) */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-4 glass-panel rounded-xl flex flex-col shadow-2xl group overflow-hidden"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                <Image 
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Candid Wedding Photography"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 backdrop-blur-md border border-[#e8c17a]/30">
                  <span className="text-[10px] sm:text-xs text-[#e8c17a] uppercase tracking-[0.2em] font-medium">
                    03 • Documentary Stills
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline text-xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
                    Candid Wedding Photography
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
                    Unposed, natural moments captured while everyone is immersed in the celebration. Spontaneous smiles, glances, and quiet family exchanges alongside formal family groupings.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 text-[#e8c17a] text-xs uppercase tracking-wider border-t border-white/10">
                  <span>Natural &amp; Unobtrusive</span>
                  <Heart className="w-4 h-4 text-[#e8c17a]" />
                </div></div>
            </motion.div>

            {/* Card 4: Cinematic Wedding Films (Span 4) */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-4 glass-panel rounded-xl flex flex-col shadow-2xl group overflow-hidden"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                <Image 
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80" 
                  alt="Cinematic Wedding Films"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 backdrop-blur-md border border-[#e8c17a]/30">
                  <span className="text-[10px] sm:text-xs text-[#e8c17a] uppercase tracking-[0.2em] font-medium">
                    04 • Cinema &amp; Sound
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline text-xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
                    Cinematic Wedding Films
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
                    Bringing together the voices, ambient sounds, music, and motion of your day. Multi-angle storytelling includes teaser edits, ceremony highlights, and feature films.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 text-[#e8c17a] text-xs uppercase tracking-wider border-t border-white/10">
                  <span>4K Masters &amp; Drone</span>
                  <Film className="w-4 h-4 text-[#e8c17a]" />
                </div></div>
            </motion.div>

            {/* Card 5: Post-Wedding Photography (Span 4) */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-4 glass-panel rounded-xl flex flex-col shadow-2xl group overflow-hidden"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                <Image 
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80" 
                  alt="Post-Wedding Photography"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 backdrop-blur-md border border-[#e8c17a]/30">
                  <span className="text-[10px] sm:text-xs text-[#e8c17a] uppercase tracking-[0.2em] font-medium">
                    05 • Unrushed Portraits
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline text-xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
                    Post-Wedding Photography
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
                    A relaxed portrait session scheduled after the main events have wrapped up. Dedicated time to wear your preferred attires and create quiet, timeless portraits.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 text-[#e8c17a] text-xs uppercase tracking-wider border-t border-white/10">
                  <span>Bespoke Location Sessions</span>
                  <Sparkles className="w-4 h-4 text-[#e8c17a]" />
                </div></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process & Deliverables Transparency Section - Glassmorphism */}
      <section className="relative w-full bg-[#0e0e0e] dark:bg-[#0e0e0e] light:bg-[#F5F0E6] px-5 sm:px-8 lg:px-14 py-16 sm:py-24 border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 overflow-hidden">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col max-w-2xl"
          >
            <span className="text-xs text-[#e8c17a] uppercase tracking-[0.25em] font-semibold mb-1">
              Clarity &amp; Trust
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] uppercase">
              Process &amp; Deliverables Transparency
            </h2>
            <p className="font-cursive-editorial text-xl sm:text-2xl text-[#e8c17a] mt-1 leading-relaxed">
              &ldquo;With honest pacing, respectful presence, and uncompromising craft.&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] mt-2 leading-relaxed font-light">
              Clear delivery dates and straightforward collaboration so you always know what to expect before, during, and after your event.
            </p>
          </motion.div>

          {/* Deliverables Timeline & What to Expect Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Delivery Timelines Visual Card */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 glass-panel p-6 sm:p-8 flex flex-col justify-between shadow-2xl rounded-xl"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="font-headline text-xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Delivery Timelines</h3>
                  <Clock className="w-5 h-5 text-[#e8c17a]" />
                </div>
                <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
                  Every photograph and film cut receives meticulous attention, from initial color selection to audio balancing.
                </p>

                {/* Photo Timeline Bar */}
                <div className="bg-black/40 backdrop-blur-md p-4 flex flex-col gap-2 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Edited Photographs</span>
                    <span className="text-xs text-[#e8c17a] uppercase font-bold tracking-wider">4 – 6 Weeks</span>
                  </div>
                  <p className="text-[12px] text-[#e8bcb5]/70 dark:text-[#e8bcb5]/70 light:text-[#6E6354] font-light">
                    High-resolution, color-corrected digital images delivered via private cloud gallery and memory drive.
                  </p>
                  <div className="w-full h-1.5 bg-white/10 mt-1 rounded-full overflow-hidden">
                    <div className="w-3/5 h-full bg-[#e8c17a]"></div>
                  </div>
                </div>

                {/* Film Timeline Bar */}
                <div className="bg-black/40 backdrop-blur-md p-4 flex flex-col gap-2 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Cinematic Wedding Films</span>
                    <span className="text-xs text-[#ffb4a8] uppercase font-bold tracking-wider">6 – 8 Weeks</span>
                  </div>
                  <p className="text-[12px] text-[#e8bcb5]/70 dark:text-[#e8bcb5]/70 light:text-[#6E6354] font-light">
                    Teaser highlight reel and comprehensive ceremony film with balanced audio and licensed music.
                  </p>
                  <div className="w-full h-1.5 bg-white/10 mt-1 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-[#d60000]"></div>
                  </div>
                </div>
              </div>

              <div className="pt-4 text-[#e8bcb5]/70 dark:text-[#e8bcb5]/70 light:text-[#6E6354] text-xs uppercase tracking-wider flex items-center gap-2 border-t border-white/10 mt-6">
                <Info className="w-4 h-4 text-[#e8c17a] shrink-0" />
                <span>Final schedules confirmed prior to booking agreement</span>
              </div>
            </motion.div>

            {/* Right: What to Expect Matrix */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: Users,
                  title: 'Pre-Event Consultation',
                  desc: 'We review your family itinerary, event timing, key rituals, and family dynamics to ensure key moments are not missed.'
                },
                {
                  icon: SlidersHorizontal,
                  title: 'Custom Crew Sizing',
                  desc: 'Whether an intimate ceremony or a large multi-day affair, our team configuration is planned around your guest scale and venues.'
                },
                {
                  icon: Plane,
                  title: 'Drone Aerial Coverage',
                  desc: 'Licensed aerial views of your baraat and venue architecture, subject to location safety permissions and weather clarity.'
                },
                {
                  icon: Sparkles,
                  title: 'Color-Graded Masters',
                  desc: 'Every deliverable is graded for true-to-life skin tones, natural warmth, and consistent presentation across screens and prints.'
                }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    className="glass-panel p-6 rounded-xl flex flex-col gap-2 shadow-lg"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#e8c17a]/10 flex items-center justify-center text-[#e8c17a] mb-1 border border-[#e8c17a]/20">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">{item.title}</h4>
                    <p className="text-xs text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Coverage Estimator Module */}
      <section className="relative w-full bg-[#080808] dark:bg-[#080808] light:bg-[#FAF7F2] px-5 sm:px-8 lg:px-14 py-16 sm:py-24 border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 overflow-hidden" id="estimator">
        <InteractiveGrid />
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto glass-panel p-6 sm:p-10 lg:p-12 shadow-2xl rounded-2xl flex flex-col gap-8"
        >
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#e8c17a] uppercase tracking-[0.25em] font-semibold">
              Interactive Planner
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] uppercase">
              Estimate Your Wedding Coverage
            </h2>
            <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] font-light leading-relaxed">
              Select the functions you are planning and specify your preferred services. We will respond with availability, crew structure, and an estimate.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleEstimatorSubmit} className="flex flex-col gap-8">
              {/* Step 1: Functions Selection */}
              <div className="flex flex-col gap-3">
                <label className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] flex items-center justify-between">
                  <span>1. Select Your Functions</span>
                  <span className="text-xs text-[#e8c17a] uppercase font-normal tracking-wider">Multiple Choice</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {[
                    { id: 'Haldi', label: 'Haldi', sub: 'Morning Ritual' },
                    { id: 'Mehendi', label: 'Mehendi', sub: 'Celebration' },
                    { id: 'Sangeet', label: 'Sangeet', sub: 'Evening Gala' },
                    { id: 'Wedding', label: 'Wedding', sub: 'Baraat & Phere' },
                    { id: 'Reception', label: 'Reception', sub: 'Family Banquet' },
                  ].map(func => {
                    const isSelected = selectedFunctions.includes(func.id);
                    return (
                      <button
                        key={func.id}
                        type="button"
                        onClick={() => toggleFunction(func.id)}
                        className={`relative flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer select-none transition-all text-center border ${
                          isSelected 
                            ? 'bg-black/85 border-[#e8c17a] shadow-lg' 
                            : 'bg-black/40 border-white/10 hover:bg-black/60'
                        }`}
                      >
                        <span className={`text-sm mb-1 ${isSelected ? 'text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] font-bold' : 'text-[#e5e2e1] dark:text-[#e5e2e1] light:text-[#2A2621]'}`}>
                          {func.label}
                        </span>
                        <span className={`text-[10px] uppercase tracking-wider ${isSelected ? 'text-[#e8c17a]' : 'text-[#e8bcb5]/60'}`}>
                          {func.sub}
                        </span>
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#e8c17a] text-black flex items-center justify-center text-[10px]">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Coverage Type */}
              <div className="flex flex-col gap-3">
                <label className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
                  2. Service Medium Needed
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'both', label: 'Photos & Cinematic Films', desc: 'Complete photo and cinema crew' },
                    { id: 'photography', label: 'Photography Only', desc: 'Candid and traditional stills' },
                    { id: 'films', label: 'Cinematic Films Only', desc: 'Teaser and feature cinema' },
                  ].map(opt => (
                    <label 
                      key={opt.id} 
                      className={`relative flex items-center gap-3 p-4 rounded-lg cursor-pointer border transition-all ${
                        coverageMedium === opt.id 
                          ? 'bg-black/85 border-[#e8c17a]' 
                          : 'bg-black/40 border-white/10 hover:bg-black/60'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="coverage_type" 
                        checked={coverageMedium === opt.id} 
                        onChange={() => setCoverageMedium(opt.id as any)}
                        className="sr-only" 
                      />
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                        coverageMedium === opt.id ? 'border-[#e8c17a] bg-[#e8c17a]' : 'border-white/20 bg-black/40'
                      }`}>
                        {coverageMedium === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-black"></div>}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] font-medium">{opt.label}</span>
                        <span className="text-[11px] text-[#e8bcb5]/70 dark:text-[#e8bcb5]/70 light:text-[#6E6354]">{opt.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Real-time Calculation Card */}
              <div className="p-4 sm:p-5 bg-black/60 backdrop-blur-md border border-[#e8c17a]/30 rounded-xl flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#e8c17a]/15 text-[#e8c17a] flex items-center justify-center border border-[#e8c17a]/30">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#e8c17a] uppercase tracking-widest font-semibold">Recommended Configuration</span>
                    <span className="text-sm sm:text-base text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] font-medium">
                      {estimatedCrew()} Dedicated Visual Artists ({selectedFunctions.length} function{selectedFunctions.length !== 1 ? 's' : ''})
                    </span>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-[10px] text-[#e8bcb5]/70 dark:text-[#e8bcb5]/70 light:text-[#6E6354] uppercase tracking-wider block">Estimated Master Delivery</span>
                  <span className="text-sm sm:text-base text-[#e8c17a] font-medium">
                    {coverageMedium === 'photography' ? '4-6 Weeks' : '6-8 Weeks (4K HDR)'}
                  </span>
                </div>
              </div>

              {/* Step 3: Event Logistics & Contact Details */}
              <div className="flex flex-col gap-3">
                <label className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
                  3. Dates, Venue &amp; Contact
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-[#e8c17a] uppercase tracking-wider font-medium">Event Date(s) *</span>
                    <input 
                      type="text" 
                      required 
                      value={eventDates} 
                      onChange={e => setEventDates(e.target.value)}
                      placeholder="e.g. 18-20 November 2025" 
                      className="bg-black/50 px-3.5 py-2.5 text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#e8c17a] rounded border border-white/10"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-[#e8c17a] uppercase tracking-wider font-medium">Venue / City *</span>
                    <input 
                      type="text" 
                      required 
                      value={venueCity} 
                      onChange={e => setVenueCity(e.target.value)}
                      placeholder="e.g. Gaya, Patna, or Destination" 
                      className="bg-black/50 px-3.5 py-2.5 text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#e8c17a] rounded border border-white/10"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-[#e8c17a] uppercase tracking-wider font-medium">Phone / WhatsApp *</span>
                    <input 
                      type="tel" 
                      required 
                      value={phone} 
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+91 98765 43210" 
                      className="bg-black/50 px-3.5 py-2.5 text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#e8c17a] rounded border border-white/10"
                    />
                  </div>
                  <div className="flex flex-col gap-1 sm:col-span-2 lg:col-span-3">
                    <span className="text-[11px] text-[#e8c17a] uppercase tracking-wider font-medium">Notes or Special Requirements (Optional)</span>
                    <textarea 
                      rows={2} 
                      value={notes} 
                      onChange={e => setNotes(e.target.value)}
                      placeholder="Tell us about the crowd size, special rituals, or pre-wedding shoot plans..." 
                      className="bg-black/50 px-3.5 py-2.5 text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#e8c17a] rounded border border-white/10"
                    />
                  </div>
                </div>
              </div>

              {/* Summary & CTA Action Bar */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-xs text-[#e8c17a] uppercase tracking-[0.2em] font-semibold">Commission Availability</span>
                  <span className="text-xs text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] font-light">
                    Accepting bookings for Gaya, Patna, Varanasi &amp; International horizons.
                  </span>
                </div>
                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#d60000] text-[#ffe5e1] hover:bg-[#ff3333] hover:text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(214,0,0,0.45)] cursor-pointer"
                >
                  Discuss Your Coverage
                </button>
              </div>
            </form>
          ) : (
            <div className="p-8 bg-black/60 border border-[#e8c17a] text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] rounded-xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <CheckCircle2 className="w-10 h-10 text-[#e8c17a] shrink-0" />
              <div className="flex flex-col gap-1">
                <h4 className="text-lg font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Thank you! Your wedding coverage request is received.</h4>
                <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] font-light">
                  We will contact you directly on WhatsApp or call at {phone || 'your phone number'} within 24 hours to discuss your dates and customized crew allocation.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="mt-2 text-[#e8c17a] text-xs uppercase tracking-wider underline text-left cursor-pointer"
                >
                  Edit coverage estimate
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* Studio Footnote Guarantee */}
      <section className="relative w-full bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-[#F5F0E6] px-5 sm:px-8 lg:px-14 py-8 border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 overflow-hidden">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#e8c17a] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
              Studio Promise: No Hidden Crew or Equipment Charges
            </span>
          </div>
          <p className="text-xs text-[#e8bcb5]/70 dark:text-[#e8bcb5]/70 light:text-[#6E6354] text-center md:text-right font-light">
            Coverage details, expected hours, deliverables, and team allocation are clearly outlined prior to signing.
          </p>
        </div>
      </section>
    </div>
  );
}
