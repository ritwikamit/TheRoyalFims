'use client';

import InteractiveGrid from "./InteractiveGrid";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Plane, 
  MapPin, 
  Calendar, 
  Clock, 
  Camera, 
  Film, 
  MessageCircle, 
  Phone, 
  Mail, 
  Sun, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  Lock,
  ArrowRight,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';

interface DubaiScreenProps {
  onOpenAvailability: () => void;
  onNavigateTab: (tab: string) => void;
}

export default function DubaiScreen({ onOpenAvailability, onNavigateTab }: DubaiScreenProps) {
  const [coupleNames, setCoupleNames] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [travelWindow, setTravelWindow] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [serviceScope, setServiceScope] = useState('both');
  const [shootDays, setShootDays] = useState('1-day');
  const [selectedLocations, setSelectedLocations] = useState<string[]>(['desert', 'skyline']);
  const [shootNotes, setShootNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleLocation = (loc: string) => {
    setSelectedLocations(prev => 
      prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full text-on-surface overflow-hidden">
      {/* Immersive Destination Hero - Entire Screen Height (100vh) & Clearly Visible Background */}
      <section className="relative w-full h-screen min-h-[640px] flex items-end sm:items-center pb-14 sm:pb-20 pt-24 px-5 sm:px-8 lg:px-14 overflow-hidden bg-black">
        {/* Cinematic Desert Background - High Visibility */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85 scale-100 transition-transform duration-1000"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=2000&q=85')` 
          }}
        />
        {/* Soft Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/55 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-5 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
          >
            {/* NO cylinders or dots - Clean text only */}
            <span className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#e8c17a] font-semibold">
              Bespoke Destination Commission
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 25, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-headline text-3xl sm:text-5xl lg:text-6xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] max-w-4xl tracking-tight leading-[1.12]"
          >
            A Pre-Wedding Shoot in Dubai, Planned Around Your Story
          </motion.h1>

          {/* Romantic Cursive Excerpt */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="font-cursive-romantic text-2xl sm:text-3xl lg:text-4xl text-[#e8c17a] -mt-1 tracking-wide drop-shadow-md"
          >
            &ldquo;Golden sands, glowing twilight, and your eternal promises.&rdquo;
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-[#e8bcb5] max-w-2xl leading-relaxed font-light"
          >
            From city skylines and waterfront promenades to open desert sands and historic architecture. Share your travel window to plan your cinematography and photography coverage.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1"
          >
            <a 
              href="#enquiry-section" 
              className="px-7 py-3 bg-[#d60000] text-[#ffe5e1] hover:bg-[#ff3333] hover:text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(214,0,0,0.45)] cursor-pointer"
            >
              Plan Your Dubai Shoot
            </a>
            <a 
              href="https://wa.me/917004375740" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black/60 backdrop-blur-xl hover:bg-black/80 text-[#e8c17a] hover:text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 border border-white/15"
            >
              <MessageCircle className="w-4 h-4 text-[#e8c17a]" />
              <span>WhatsApp Direct Chat</span>
            </a>
          </motion.div>

          {/* Quick Horizon Metadata Bar - Glassmorphism, NO cylinders */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-4 p-5 sm:p-6 glass-panel shadow-2xl rounded-xl"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] sm:text-xs text-[#e8c17a] uppercase tracking-[0.2em] font-medium">Primary Locations</span>
              <span className="text-xs sm:text-sm text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] font-semibold">Dunes, Marina, Old Al Seef</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] sm:text-xs text-[#e8c17a] uppercase tracking-[0.2em] font-medium">Capture Format</span>
              <span className="text-xs sm:text-sm text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] font-semibold">4K Cinema + Editorial Stills</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] sm:text-xs text-[#e8c17a] uppercase tracking-[0.2em] font-medium">Golden Windows</span>
              <span className="text-xs sm:text-sm text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] font-semibold">Dawn Sunburst &amp; Twilight</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] sm:text-xs text-[#e8c17a] uppercase tracking-[0.2em] font-medium">Studio Base</span>
              <span className="text-xs sm:text-sm text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] font-semibold">India • Traveling to Dubai</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Introduction with Asymmetric Framing */}
      <section className="relative w-full px-5 sm:px-8 lg:px-14 py-16 sm:py-24 bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-[#FAF7F2] border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 overflow-hidden">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <span className="text-xs text-[#e8c17a] uppercase tracking-[0.25em] font-semibold">
              The Royal Vision
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
              Why Consider a Dubai Shoot?
            </h2>
            <p className="text-xs sm:text-sm text-[#e8bcb5]/85 leading-relaxed font-light">
              Dubai offers several settings for a pre-wedding shoot, from city views and waterfront locations to desert scenery and historic streets. If you are planning a shoot there, tell us the dates and locations you have in mind. We can discuss the photography and video coverage you need and confirm what arrangements are possible.
            </p>
            <div className="p-5 glass-panel rounded-xl border-l-2 border-[#e8c17a] shadow-lg">
              <p className="font-cursive-calligraphy text-2xl sm:text-3xl text-[#e8c17a] leading-relaxed">
                &ldquo;We focus on real moments between couples against dramatic natural and urban sceneries, allowing your connection to lead every frame.&rdquo;
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-72 sm:h-80 overflow-hidden rounded-xl shadow-2xl glass-panel group"
            >
              <Image 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80" 
                alt="City Horizon & Reflections"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-5">
                <span className="text-sm font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">City Horizon &amp; Reflections</span>
              </div>
            </motion.div>

            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative h-72 sm:h-80 sm:-mt-6 overflow-hidden rounded-xl shadow-2xl glass-panel group"
            >
              <Image 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80" 
                alt="Timeless Sand Terraces"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-5">
                <span className="text-sm font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Timeless Sand Terraces</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curated Location Backdrops (Glassmorphic Cards) */}
      <section className="relative w-full px-5 sm:px-8 lg:px-14 py-16 sm:py-24 bg-[#0e0e0e] dark:bg-[#0e0e0e] light:bg-[#F5F0E6] border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 overflow-hidden">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#e8c17a] uppercase tracking-[0.25em] font-semibold">
                Cinematic Canvas
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
                Curated Backdrops &amp; Themes
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] max-w-md font-light leading-relaxed">
              Select distinct moods for your visual gallery. From modern towers to wind-tower historic brickwork, we shape the lighting to each locale.
            </p>
          </motion.div>

          {/* Backdrop Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Backdrop 1: City & Skyline */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative flex flex-col glass-panel rounded-xl overflow-hidden shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <Image 
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80" 
                  alt="City and Skyline"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-md text-[#e8c17a] text-[10px] uppercase tracking-wider font-semibold border border-[#e8c17a]/30">
                  Modern Horizon
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-grow justify-between">
                <div>
                  <h3 className="font-headline text-xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">City and Skyline Photos</h3>
                  <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] mt-1 leading-relaxed font-light">
                    If you like modern city views, locations around Dubai&apos;s skyline may suit your shoot. The best time and exact spot will depend on access rules and permissions.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-[#e8c17a] border-t border-white/10 text-xs uppercase tracking-wider">
                  <span>Recommended: Blue Hour</span>
                  <Camera className="w-4 h-4" />
                </div></div>
            </motion.div>

            {/* Backdrop 2: Desert Dunes */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative flex flex-col glass-panel rounded-xl overflow-hidden shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <Image 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80" 
                  alt="Desert Photos"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-md text-[#e8c17a] text-[10px] uppercase tracking-wider font-semibold border border-[#e8c17a]/30">
                  Expansive Sands
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-grow justify-between">
                <div>
                  <h3 className="font-headline text-xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Desert Photos</h3>
                  <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] mt-1 leading-relaxed font-light">
                    The desert offers open views and a different feel from the city. Timing, travel, weather, and location access are coordinated thoughtfully.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-[#e8c17a] border-t border-white/10 text-xs uppercase tracking-wider">
                  <span>Recommended: Sunset &amp; Dusk</span>
                  <Sun className="w-4 h-4" />
                </div></div>
            </motion.div>

            {/* Backdrop 3: Dubai Marina & Waterfront */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative flex flex-col glass-panel rounded-xl overflow-hidden shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <Image 
                  src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80" 
                  alt="Waterfront Locations"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-md text-[#e8c17a] text-[10px] uppercase tracking-wider font-semibold border border-[#e8c17a]/30">
                  Waterfront &amp; Harbor
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-grow justify-between">
                <div>
                  <h3 className="font-headline text-xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Waterfront Locations</h3>
                  <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] mt-1 leading-relaxed font-light">
                    Dubai Marina and other waterfront areas work wonderfully for couples who prefer city architecture and water reflections.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-[#e8c17a] border-t border-white/10 text-xs uppercase tracking-wider">
                  <span>Recommended: Night Promenade</span>
                  <Film className="w-4 h-4" />
                </div></div>
            </motion.div>

            {/* Backdrop 4: Historic Al Fahidi & Al Seef */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative flex flex-col glass-panel rounded-xl overflow-hidden shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <Image 
                  src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80" 
                  alt="Historic Al Fahidi"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-md text-[#e8c17a] text-[10px] uppercase tracking-wider font-semibold border border-[#e8c17a]/30">
                  Heritage &amp; Textures
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-grow justify-between">
                <div>
                  <h3 className="font-headline text-xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Historic Streets</h3>
                  <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] mt-1 leading-relaxed font-light">
                    Areas such as Al Fahidi and Al Seef offer textured clay wind-towers, antique lanterns, and character-rich heritage pathways.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-[#e8c17a] border-t border-white/10 text-xs uppercase tracking-wider">
                  <span>Recommended: Early Morning</span>
                  <MapPin className="w-4 h-4" />
                </div></div>
            </motion.div>

            {/* Backdrop 5: Palm Jumeirah & Beach Resorts */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative flex flex-col glass-panel rounded-xl overflow-hidden shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <Image 
                  src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80" 
                  alt="Palm Jumeirah"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-md text-[#e8c17a] text-[10px] uppercase tracking-wider font-semibold border border-[#e8c17a]/30">
                  Resort Coastline
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-grow justify-between">
                <div>
                  <h3 className="font-headline text-xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Palm Jumeirah Coast</h3>
                  <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] mt-1 leading-relaxed font-light">
                    If you prefer a resort or beach setting, gentle Arabian Gulf tides and sweeping architectural views create effortless elegance.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-[#e8c17a] border-t border-white/10 text-xs uppercase tracking-wider">
                  <span>Recommended: Sunrise Calm</span>
                  <Sun className="w-4 h-4" />
                </div></div>
            </motion.div>

            {/* Backdrop 6: Bespoke Combination */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex flex-col glass-panel p-6 sm:p-8 rounded-xl justify-between shadow-2xl border border-[#e8c17a]/40"
            >
              <div className="flex flex-col gap-3">
                <span className="text-xs text-[#d60000] uppercase tracking-[0.2em] font-bold">
                  Full Experience
                </span>
                <h3 className="font-headline text-xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
                  Multi-Location Itinerary
                </h3>
                <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
                  Many couples opt for a dual-session schedule across two days: dedicating one sunrise to the quiet desert expanse and an afternoon to the heritage lanes of Al Seef and waterfront nightlights.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <a 
                  href="#enquiry-section" 
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#e8c17a] hover:text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] font-semibold"
                >
                  <span>Explore shoot dates</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logistics & Planning Checklist - Glassmorphism */}
      <section className="relative w-full px-5 sm:px-8 lg:px-14 py-16 sm:py-24 bg-[#080808] dark:bg-[#080808] light:bg-[#FAF7F2] border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 overflow-hidden">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Planning Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            <span className="text-xs text-[#e8c17a] uppercase tracking-[0.25em] font-semibold">
              Step-By-Step Coordination
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
              Planning Your Shoot
            </h2>
            <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
              To help us understand your plans and advise on a timeline that allows comfortable outfit changes and pleasant light conditions, please prepare:
            </p>

            <div className="flex flex-col gap-3 mt-2">
              {[
                { title: 'Travel Window', desc: 'Your preferred dates or general arrival window in Dubai.', icon: Calendar },
                { title: 'Desired Locations', desc: 'The specific locations or general backdrop aesthetics you have in mind.', icon: MapPin },
                { title: 'Media Deliverables', desc: 'Whether you require high-resolution stills photography, a cinematic video teaser, or both.', icon: Film },
                { title: 'Session Duration', desc: 'The number of shoot days or half-day sessions you are considering.', icon: Clock },
                { title: 'Mood References', desc: 'Any mood boards or styling references you would like our team to review.', icon: Compass },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 glass-panel rounded-lg">
                    <IconComponent className="w-4 h-4 text-[#e8c17a] mt-1 shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">{item.title}</span>
                      <span className="text-xs text-[#e8bcb5]/70 dark:text-[#e8bcb5]/70 light:text-[#6E6354] font-light">{item.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Practical Notes & Clarity */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-6 sm:p-8 glass-panel rounded-xl flex flex-col gap-4 shadow-xl"
            >
              <div className="flex items-center gap-2 text-[#e8c17a]">
                <Info className="w-4 h-4" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold">Practical Logistics &amp; Notes</span>
              </div>
              <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
                Travel, permits, location fees, local vendor support, and other arrangements must be confirmed directly before booking. We do not assume permits are pre-cleared, and private venues such as resorts or chartered vessels charge separate media permits.
              </p>
              <div className="space-y-3 pt-2 border-t border-white/10">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Weather &amp; Seasons</span>
                  <span className="text-xs text-[#e8bcb5]/70 dark:text-[#e8bcb5]/70 light:text-[#6E6354] font-light leading-relaxed">
                    The optimal shooting months run from October through April when desert winds and daytime temperatures are most agreeable for outdoor portraits.
                  </span>
                </div>
                <div className="flex flex-col gap-1 pt-2">
                  <span className="text-sm font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Permits &amp; Clearances</span>
                  <span className="text-xs text-[#e8bcb5]/70 dark:text-[#e8bcb5]/70 light:text-[#6E6354] font-light leading-relaxed">
                    Public landmarks and designated historic zones have clear filming regulations. We help you navigate which locations require prior municipal clearance.
                  </span>
                </div></div>
            </motion.div>

            {/* Direct Instant Contact Box */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="p-6 sm:p-8 glass-panel rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#e8c17a]/30"
            >
              <div className="flex flex-col text-center sm:text-left">
                <span className="text-[10px] text-[#e8c17a] uppercase tracking-wider font-semibold">Immediate Consultation</span>
                <span className="font-headline text-xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Discuss Over WhatsApp</span>
                <span className="text-xs text-[#e8bcb5]/70 dark:text-[#e8bcb5]/70 light:text-[#6E6354] font-light">Quick replies on travel windows and dates</span>
              </div>
              <a 
                href="https://wa.me/917004375740" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#d60000] text-[#ffe5e1] hover:bg-[#ff3333] hover:text-white text-xs uppercase tracking-wider font-semibold transition-all duration-300 whitespace-nowrap shadow-[0_0_20px_rgba(214,0,0,0.45)] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>+91 70043 75740</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destination Enquiry Form Section - Glassmorphism */}
      <section className="relative w-full px-5 sm:px-8 lg:px-14 py-16 sm:py-24 bg-[#0e0e0e] dark:bg-[#0e0e0e] light:bg-[#F5F0E6] border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 overflow-hidden" id="enquiry-section">
        <InteractiveGrid />
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col gap-8"
        >
          <div className="text-center flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#e8c17a] font-semibold">
              Commissioning Concierge
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
              Planning a Pre-Wedding Shoot in Dubai?
            </h2>
            <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] max-w-xl mx-auto font-light leading-relaxed">
              Send us your preferred dates and locations. We can discuss the shoot requirements and confirm availability, travel arrangements, and pricing.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-10 lg:p-12 shadow-2xl rounded-2xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Names */}
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-[#e8c17a] font-medium">
                    Couple Names *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={coupleNames}
                    onChange={e => setCoupleNames(e.target.value)}
                    placeholder="e.g. Ananya &amp; Rohit"
                    className="w-full px-3.5 py-2.5 bg-black/50 text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] placeholder:text-[#e8bcb5]/40 focus:outline-none focus:ring-1 focus:ring-[#e8c17a] text-xs sm:text-sm border border-white/10 rounded"
                  />
                </div>

                {/* Contact Phone / WhatsApp */}
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-[#e8c17a] font-medium">
                    Phone / WhatsApp Number *
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={contactPhone}
                    onChange={e => setContactPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-black/50 text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] placeholder:text-[#e8bcb5]/40 focus:outline-none focus:ring-1 focus:ring-[#e8c17a] text-xs sm:text-sm border border-white/10 rounded"
                  />
                </div>

                {/* Travel Dates / Window */}
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-[#e8c17a] font-medium">
                    Preferred Travel Window *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={travelWindow}
                    onChange={e => setTravelWindow(e.target.value)}
                    placeholder="e.g. November 10 - 18, 2025"
                    className="w-full px-3.5 py-2.5 bg-black/50 text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] placeholder:text-[#e8bcb5]/40 focus:outline-none focus:ring-1 focus:ring-[#e8c17a] text-xs sm:text-sm border border-white/10 rounded"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-[#e8c17a] font-medium">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    value={contactEmail}
                    onChange={e => setContactEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 bg-black/50 text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] placeholder:text-[#e8bcb5]/40 focus:outline-none focus:ring-1 focus:ring-[#e8c17a] text-xs sm:text-sm border border-white/10 rounded"
                  />
                </div>

                {/* Shoot Coverage Scope */}
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-[#e8c17a] font-medium">
                    Coverage Required *
                  </label>
                  <select 
                    value={serviceScope}
                    onChange={e => setServiceScope(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-black/50 text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] focus:outline-none focus:ring-1 focus:ring-[#e8c17a] text-xs sm:text-sm border border-white/10 rounded"
                  >
                    <option value="both" className="bg-[#121212]">Both Photography &amp; Cinematic Film</option>
                    <option value="photo-only" className="bg-[#121212]">Photography Stills Only</option>
                    <option value="film-only" className="bg-[#121212]">Cinematic Film Only</option>
                  </select>
                </div>

                {/* Duration */}
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-[#e8c17a] font-medium">
                    Number of Shoot Days
                  </label>
                  <select 
                    value={shootDays}
                    onChange={e => setShootDays(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-black/50 text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] focus:outline-none focus:ring-1 focus:ring-[#e8c17a] text-xs sm:text-sm border border-white/10 rounded"
                  >
                    <option value="1-day" className="bg-[#121212]">1 Full Day (Dawn to Twilight)</option>
                    <option value="2-days" className="bg-[#121212]">2 Days (Multi-backdrop Split)</option>
                    <option value="flexible" className="bg-[#121212]">Flexible / To Discuss</option>
                  </select>
                </div>

                {/* Preferred Locations / Backdrops Checkboxes */}
                <div className="md:col-span-2 flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-[#e8c17a] font-medium">
                    Preferred Dubai Backdrops (Select Any)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                    {[
                      { id: 'desert', label: 'Desert Dunes' },
                      { id: 'skyline', label: 'City & Skyline' },
                      { id: 'marina', label: 'Dubai Marina' },
                      { id: 'al-fahidi', label: 'Historic Al Fahidi' },
                      { id: 'palm', label: 'Palm Jumeirah / Beach' },
                      { id: 'open-suggestions', label: 'Need Suggestions' },
                    ].map(item => (
                      <label 
                        key={item.id}
                        onClick={() => toggleLocation(item.id)}
                        className={`flex items-center gap-2.5 p-3 rounded cursor-pointer border transition-colors ${
                          selectedLocations.includes(item.id)
                            ? 'bg-black/80 border-[#e8c17a] text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]'
                            : 'bg-black/40 border-white/10 text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] hover:bg-black/60'
                        }`}
                      >
                        <input 
                          type="checkbox" 
                          checked={selectedLocations.includes(item.id)} 
                          onChange={() => {}}
                          className="accent-[#d60000]"
                        />
                        <span className="text-xs sm:text-sm">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="md:col-span-2 flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-[#e8c17a] font-medium">
                    Additional Details or Style References
                  </label>
                  <textarea 
                    rows={3}
                    value={shootNotes}
                    onChange={e => setShootNotes(e.target.value)}
                    placeholder="Tell us about outfits, preferred moods, specific landmarks, or questions regarding permits and dates..."
                    className="w-full px-3.5 py-2.5 bg-black/50 text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] placeholder:text-[#e8bcb5]/40 focus:outline-none focus:ring-1 focus:ring-[#e8c17a] text-xs sm:text-sm border border-white/10 rounded"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244]">
                    <Lock className="w-3.5 h-3.5 text-[#e8c17a]" />
                    <span className="uppercase tracking-wider font-light">Direct Studio Response within 24 Hours</span>
                  </div>
                  <button 
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-[#d60000] hover:bg-[#ff3333] text-[#ffe5e1] hover:text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(214,0,0,0.45)] cursor-pointer"
                  >
                    Send Shoot Enquiry
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-8 bg-black/60 border border-[#e8c17a] text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] rounded-xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <CheckCircle2 className="w-10 h-10 text-[#e8c17a] shrink-0" />
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Thank you! Your destination shoot request is received.</h4>
                  <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] font-light">
                    Our team will review your travel window ({travelWindow}) and preferred Dubai backdrops, and contact you shortly at {contactPhone || contactEmail}.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)} 
                    className="mt-2 text-[#e8c17a] text-xs uppercase tracking-wider underline text-left cursor-pointer"
                  >
                    Submit another destination inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick Contact Alternatives with Icons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] pt-2">
            <span>Prefer speaking directly?</span>
            <a 
              href="tel:+917004375740" 
              className="text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] hover:text-[#e8c17a] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#e8c17a]" />
              <span>+91 70043 75740</span>
            </a>
            <span className="hidden sm:inline text-white/20">•</span>
            <a 
              href="mailto:info@theroyalfilms.in" 
              className="text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] hover:text-[#e8c17a] flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#e8c17a]" />
              <span>info@theroyalfilms.in</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
