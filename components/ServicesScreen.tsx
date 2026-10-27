'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Camera, 
  Film, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Phone, 
  Plane, 
  Users, 
  Calendar, 
  ChevronRight, 
  ShieldCheck, 
  Check, 
  SlidersHorizontal 
} from 'lucide-react';
import { motion } from 'motion/react';
import InteractiveGrid from './InteractiveGrid';

interface ServicesScreenProps {
  onOpenAvailability: () => void;
  onNavigateTab: (tab: string) => void;
}

export default function ServicesScreen({ onOpenAvailability, onNavigateTab }: ServicesScreenProps) {
  const [selectedFunctions, setSelectedFunctions] = useState<string[]>(['Wedding', 'Reception']);
  const [coverageMedium, setCoverageMedium] = useState<'both' | 'photography' | 'films'>('both');
  const [guestCount, setGuestCount] = useState<string>('300-600');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFunction = (func: string) => {
    setSelectedFunctions(prev => 
      prev.includes(func) ? prev.filter(f => f !== func) : [...prev, func]
    );
  };

  const calculateEstimate = () => {
    let base = 60000;
    const count = selectedFunctions.length;
    base += Math.max(0, count - 1) * 25000;
    if (coverageMedium === 'both') base *= 1.45;
    if (guestCount === '600+') base += 18000;
    return Math.round(base / 1000) * 1000;
  };

  const handleEstimatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-[#FFFDF9] text-[#241912] overflow-hidden transition-colors duration-300">
      {/* Services Hero - 100vh Atmospheric Screen */}
      <section className="relative w-full h-screen min-h-[640px] flex items-end sm:items-center pb-14 sm:pb-20 pt-24 px-5 sm:px-8 lg:px-14 overflow-hidden bg-[#120E0A]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85 scale-100 transition-transform duration-1000"
          style={{ 
            backgroundImage: `url('/TRFImages/Landscape/imgi_21_640426438_18570792793001135_5456093389828733330_n.jpg')` 
          }}
        />
        {/* Cinematic Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120E0A] via-[#120E0A]/40 to-[#120E0A]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120E0A]/80 via-[#120E0A]/35 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#73A5CA]" />
            <span className="text-xs sm:text-sm text-[#FFCB56] uppercase tracking-[0.28em] font-semibold">
              Cinema &amp; Stills • Gaya Atelier
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-headline text-3xl sm:text-5xl lg:text-6xl text-[#FFE9A9] uppercase tracking-tight leading-[1.12]"
          >
            Wedding &amp; Pre-Wedding Photography in Gaya
          </motion.h1>

          {/* Romantic Cursive Excerpt */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="font-cursive text-[#FF933E] text-3xl sm:text-4xl lg:text-5xl text-[#FFCB56] -mt-1 tracking-wide drop-shadow-md"
          >
            &ldquo;Crafting family heirlooms, framed with light and genuine emotion.&rdquo;
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-[#FFE9A9]/90 max-w-2xl font-light leading-relaxed"
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
              className="px-7 py-3.5 bg-[#FF933E] text-white hover:bg-[#FFCB56] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(212,103,67,0.45)] text-center cursor-pointer"
            >
              Plan Your Coverage
            </a>
            <a 
              href="tel:+917004375740" 
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-black/60 backdrop-blur-xl text-[#FFE9A9] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-black/80 hover:text-white transition-colors border border-[#FFCB56]/30"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFCB56]" />
              <span>+91 70043 75740</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Editorial Services Section */}
      <section className="relative w-full bg-[#FFFDF9] px-5 sm:px-8 lg:px-14 py-16 sm:py-24 border-t border-[#FFCB56]/30 overflow-hidden transition-colors">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#FFCB56]/30 pb-6"
          >
            <div className="flex flex-col">
              <span className="text-xs text-[#FF933E] dark:text-[#FFCB56] uppercase tracking-[0.25em] font-semibold mb-1">
                Service Overview
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#241912] uppercase">
                In-Depth Service Breakdown
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#594233] max-w-md font-light leading-relaxed">
              Documenting your ceremonies across Gaya, Bihar, and destination celebrations with deliberate pacing and authentic attention.
            </p>
          </motion.div>

          {/* Service Card Mosaic */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
            {/* Card 1: Pre-Wedding */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-7 bg-white border border-[#FFCB56]/30 rounded-xl flex flex-col shadow-xl group overflow-hidden"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-black">
                <Image 
                  src="/TRFImages/Landscape/imgi_15_621639958_18152969221441736_4683275603988541147_n.jpg" 
                  alt="Pre-wedding photography"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 backdrop-blur-md border border-[#FFCB56]/40">
                  <span className="text-[10px] sm:text-xs text-[#FFCB56] uppercase tracking-[0.2em] font-semibold">
                    01 • Prior to the Day
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline text-2xl text-[#241912]">
                    Pre-Wedding Photography &amp; Videography
                  </h3>
                  <p className="text-xs sm:text-sm text-[#594233] leading-relaxed font-light">
                    A pre-wedding shoot gives you and your partner a little time together before the wedding. We talk through the setting, outfits, preferred style, and whether you would like photographs, a video story, or both without the rush of wedding-day timelines.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 text-[#FF933E] dark:text-[#FFCB56] text-xs uppercase tracking-wider border-t border-[#FFCB56]/30 font-semibold">
                  <span>Gaya • Bodh Gaya • Destination Shoots</span>
                  <div className="flex items-center gap-1.5">
                    <Camera className="w-4 h-4 text-[#FF933E] dark:text-[#FFCB56]" />
                    <span>Fine Art Stills</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Wedding-Day Coverage */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="md:col-span-5 bg-white border border-[#FFCB56]/30 rounded-xl flex flex-col shadow-xl group overflow-hidden"
            >
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-black">
                <Image 
                  src="/TRFImages/Landscape/imgi_24_626668006_18323915833220040_8719699378467942941_n.jpg" 
                  alt="Wedding-Day Photography"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 backdrop-blur-md border border-[#FFCB56]/40">
                  <span className="text-[10px] sm:text-xs text-[#FFCB56] uppercase tracking-[0.2em] font-semibold">
                    02 • The Big Day
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline text-2xl text-[#241912]">
                    Wedding-Day Photography &amp; Videography
                  </h3>
                  <p className="text-xs sm:text-sm text-[#594233] leading-relaxed font-light">
                    From morning preparation and baraat arrivals through the phere rituals and evening reception. We capture the main ceremonies alongside honest interactions between loved ones.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 text-[#FF933E] dark:text-[#FFCB56] text-xs uppercase tracking-wider border-t border-[#FFCB56]/30 font-semibold">
                  <span>Full-Day Continuous Coverage</span>
                  <div className="flex items-center gap-1.5">
                    <Film className="w-4 h-4 text-[#FF933E] dark:text-[#FFCB56]" />
                    <span>4K Cinema</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Candid Photography */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="md:col-span-4 bg-white border border-[#FFCB56]/30 rounded-xl flex flex-col shadow-xl group overflow-hidden"
            >
              <div className="p-6 sm:p-7 flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] sm:text-xs text-[#FF933E] dark:text-[#FFCB56] uppercase tracking-[0.2em] font-semibold">
                    03 • Candid Lens
                  </span>
                  <h3 className="font-headline text-xl text-[#241912]">
                    Candid Photography
                  </h3>
                  <p className="text-xs sm:text-sm text-[#594233] leading-relaxed font-light">
                    Quiet smiles, fleeting glances, emotional embraces, and unprompted family joy documented without intrusive posing.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#FFCB56]/30 flex items-center justify-between text-xs text-[#FF933E] dark:text-[#FFCB56] uppercase tracking-wider font-semibold">
                  <span>Unscripted Emotion</span>
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Card 4: Traditional Stills */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:col-span-4 bg-white border border-[#FFCB56]/30 rounded-xl flex flex-col shadow-xl group overflow-hidden"
            >
              <div className="p-6 sm:p-7 flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] sm:text-xs text-[#FF933E] dark:text-[#FFCB56] uppercase tracking-[0.2em] font-semibold">
                    04 • Family Formals
                  </span>
                  <h3 className="font-headline text-xl text-[#241912]">
                    Traditional Photography
                  </h3>
                  <p className="text-xs sm:text-sm text-[#594233] leading-relaxed font-light">
                    Well-lit, formal stage and altar portraits ensuring every visiting family member and elder is respectfully preserved in your family archive.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#FFCB56]/30 flex items-center justify-between text-xs text-[#FF933E] dark:text-[#FFCB56] uppercase tracking-wider font-semibold">
                  <span>Stage &amp; Mandap</span>
                  <Users className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Card 5: Drone & Aerial */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="md:col-span-4 bg-white border border-[#FFCB56]/30 rounded-xl flex flex-col shadow-xl group overflow-hidden"
            >
              <div className="p-6 sm:p-7 flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] sm:text-xs text-[#FF933E] dark:text-[#FFCB56] uppercase tracking-[0.2em] font-semibold">
                    05 • Aerial Perspective
                  </span>
                  <h3 className="font-headline text-xl text-[#241912]">
                    Drone Cinematography
                  </h3>
                  <p className="text-xs sm:text-sm text-[#594233] leading-relaxed font-light">
                    Sweeping 4K aerial vistas showcasing your venue architecture, baraat processions, and sunset horizons where permitted.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#FFCB56]/30 flex items-center justify-between text-xs text-[#FF933E] dark:text-[#FFCB56] uppercase tracking-wider font-semibold">
                  <span>Grand Scale</span>
                  <Plane className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Standards & Timelines */}
      <section className="relative w-full bg-[#FFF8EE] px-5 sm:px-8 lg:px-14 py-16 sm:py-24 border-t border-[#FFCB56]/30 overflow-hidden transition-colors">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-2 max-w-3xl"
          >
            <span className="text-xs text-[#FF933E] dark:text-[#FFCB56] uppercase tracking-[0.25em] font-semibold mb-1">
              Quality Assurance
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#241912] uppercase">
              Production Standard &amp; Delivery Commitments
            </h2>
            <p className="font-cursive text-[#FF933E] text-2xl sm:text-3xl text-[#FF933E] dark:text-[#FFCB56] mt-1 leading-relaxed">
              &ldquo;We treat your wedding footage as an irreplaceable piece of family history.&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-[#594233] mt-2 leading-relaxed font-light">
              Clear timelines, professional color-grading, dual-card backup redundancy on site, and master archival preservation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Delivery Timeline Card */}
            <div className="lg:col-span-5 bg-white border border-[#FFCB56]/30 rounded-xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF933E]/10 flex items-center justify-center text-[#FF933E] dark:text-[#FFCB56]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline text-xl text-[#241912]">
                    Delivery Timelines
                  </h3>
                  <p className="text-xs text-[#7C685B] dark:text-[#A49182] font-light">
                    Guaranteed turnaround periods in writing
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="p-4 rounded-lg bg-[#FAF4ED] dark:bg-black/30 border border-[#FFCB56]/30 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#241912]">
                      Edited Photographs
                    </span>
                    <span className="text-xs text-[#FF933E] dark:text-[#FFCB56] uppercase font-bold tracking-wider">
                      4 – 6 Weeks
                    </span>
                  </div>
                  <p className="text-[12px] text-[#594233] font-light">
                    Full gallery color-graded, curated, and delivered via private client cloud portal.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#FAF4ED] dark:bg-black/30 border border-[#FFCB56]/30 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#241912]">
                      Cinematic Wedding Films
                    </span>
                    <span className="text-xs text-[#FF933E] dark:text-[#FFCB56] uppercase font-bold tracking-wider">
                      6 – 8 Weeks
                    </span>
                  </div>
                  <p className="text-[12px] text-[#594233] font-light">
                    Teaser highlight reel and master ceremony feature films in 4K resolution.
                  </p>
                </div>
              </div>
            </div>

            {/* Production Standards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: ShieldCheck,
                  title: 'Redundant In-Camera Backup',
                  desc: 'Dual SD/CFexpress card slot recording ensuring zero risk of data loss from corrupted media.',
                },
                {
                  icon: SlidersHorizontal,
                  title: 'Custom Crew Sizing',
                  desc: 'Planned around your venue architecture, guest count, and simultaneous multi-hall rituals.',
                },
                {
                  icon: Plane,
                  title: 'Licensed Drone Coverage',
                  desc: 'Grand cinematic establishing shots and aerial procession angles where regulations permit.',
                },
                {
                  icon: Sparkles,
                  title: 'Editorial Color Grading',
                  desc: 'Skin tones calibrated to look naturally luminous and timeless across all displays.',
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white border border-[#FFCB56]/30 flex flex-col gap-2.5 shadow-md"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#FF933E]/10 text-[#FF933E] dark:text-[#FFCB56] flex items-center justify-center">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-semibold text-[#241912]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#594233] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Coverage Estimator Module */}
      <section className="relative w-full bg-[#FFFDF9] px-5 sm:px-8 lg:px-14 py-16 sm:py-24 border-t border-[#FFCB56]/30 overflow-hidden transition-colors" id="estimator">
        <InteractiveGrid />
        <div className="max-w-5xl mx-auto bg-white border border-[#FFCB56]/30 p-6 sm:p-10 lg:p-12 shadow-2xl rounded-2xl flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#FF933E] dark:text-[#FFCB56] uppercase tracking-[0.25em] font-semibold">
              Interactive Planner
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#241912] uppercase">
              Estimate Your Wedding Coverage
            </h2>
            <p className="text-xs sm:text-sm text-[#594233] font-light leading-relaxed">
              Select the functions you are planning and specify your preferred services. We will respond with availability, crew structure, and an estimate.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleEstimatorSubmit} className="flex flex-col gap-8">
              {/* Step 1: Functions Selection */}
              <div className="flex flex-col gap-3">
                <label className="text-base font-semibold text-[#241912] flex items-center justify-between">
                  <span>1. Select Your Functions</span>
                  <span className="text-xs text-[#FF933E] dark:text-[#FFCB56] uppercase font-normal tracking-wider">
                    Multiple Choice
                  </span>
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
                            ? 'bg-[#FFE9A9] dark:bg-[#251C15] border-[#FF933E] shadow-md' 
                            : 'bg-[#FAF4ED] dark:bg-black/40 border-[#FFCB56]/30 hover:bg-[#FFE9A9]/40'
                        }`}
                      >
                        <span className={`text-sm mb-1 ${isSelected ? 'text-[#FF933E] dark:text-[#FFCB56] font-bold' : 'text-[#241912]'}`}>
                          {func.label}
                        </span>
                        <span className={`text-[10px] uppercase tracking-wider ${isSelected ? 'text-[#FF933E] dark:text-[#FFCB56]' : 'text-[#7C685B] dark:text-[#A49182]'}`}>
                          {func.sub}
                        </span>
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#FF933E] text-white flex items-center justify-center text-[10px]">
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
                <label className="text-base font-semibold text-[#241912]">
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
                          ? 'bg-[#FFE9A9] dark:bg-[#251C15] border-[#FF933E]' 
                          : 'bg-[#FAF4ED] dark:bg-black/40 border-[#FFCB56]/30 hover:bg-[#FFE9A9]/40'
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
                        coverageMedium === opt.id ? 'border-[#FF933E] bg-[#FF933E]' : 'border-[#E8DCCF] dark:border-white/20 bg-white dark:bg-black/40'
                      }`}>
                        {coverageMedium === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-[#241912] font-semibold">{opt.label}</span>
                        <span className="text-[11px] text-[#594233]">{opt.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Real-time Calculation Card */}
              <div className="p-4 sm:p-5 bg-[#FAF4ED] dark:bg-black/60 border border-[#FF933E]/30 rounded-xl flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <span className="w-10 h-10 rounded-full bg-[#FF933E]/15 text-[#FF933E] dark:text-[#FFCB56] flex items-center justify-center font-bold">
                    ₹
                  </span>
                  <div>
                    <span className="text-[10px] text-[#FF933E] dark:text-[#FFCB56] uppercase tracking-widest font-semibold block">
                      Estimated Investment Range
                    </span>
                    <span className="text-lg sm:text-2xl font-headline font-bold text-[#241912]">
                      ₹{calculateEstimate().toLocaleString('en-IN')} – ₹{(calculateEstimate() * 1.25).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenAvailability}
                  className="px-6 py-2.5 bg-[#FF933E] text-white hover:bg-[#FFCB56] text-xs uppercase tracking-widest font-semibold transition-colors shadow-md"
                >
                  Verify Date Availability
                </button>
              </div>
            </form>
          ) : (
            <div className="p-8 text-center bg-[#FAF4ED] dark:bg-black/40 rounded-xl border border-[#FF933E]/30 flex flex-col items-center gap-3">
              <CheckCircle2 className="w-12 h-12 text-[#FF933E]" />
              <h3 className="font-headline text-2xl text-[#241912]">
                Coverage Plan Prepared
              </h3>
              <p className="text-xs text-[#594233] max-w-md">
                Our concierge will get in touch with you shortly to finalize details.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
