'use client';

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
import InteractiveGrid from './InteractiveGrid';

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
    <div className="flex flex-col w-full bg-[#FFFDF9] text-[#241912] overflow-hidden transition-colors duration-300">
      {/* Immersive Destination Hero */}
      <section className="relative w-full h-screen min-h-[640px] flex items-end sm:items-center pb-14 sm:pb-20 pt-24 px-5 sm:px-8 lg:px-14 overflow-hidden bg-[#120E0A]">
        {/* Cinematic Desert Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85 scale-100 transition-transform duration-1000"
          style={{ 
            backgroundImage: `url('/TRFImages/Landscape/imgi_25_636516568_18330827845174499_281208456552251551_n.jpg')` 
          }}
        />
        {/* Soft Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120E0A] via-[#120E0A]/40 to-[#120E0A]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120E0A]/80 via-[#120E0A]/35 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#73A5CA]" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#FFCB56] font-semibold">
              Bespoke Destination Commission
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 25, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-headline text-3xl sm:text-5xl lg:text-6xl text-[#FFE9A9] max-w-4xl tracking-tight leading-[1.12]"
          >
            A Pre-Wedding Shoot in Dubai, Planned Around Your Story
          </motion.h1>

          {/* Romantic Cursive Excerpt */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="font-cursive text-[#FF933E] text-3xl sm:text-4xl lg:text-5xl text-[#FFCB56] -mt-1 tracking-wide drop-shadow-md"
          >
            &ldquo;Golden sands, glowing twilight, and your eternal promises.&rdquo;
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-[#FFE9A9]/90 max-w-2xl leading-relaxed font-light"
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
              className="px-7 py-3.5 bg-[#FF933E] text-white hover:bg-[#FFCB56] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(212,103,67,0.45)] cursor-pointer"
            >
              Plan Your Dubai Shoot
            </a>
            <a 
              href="https://wa.me/917004375740" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-black/60 backdrop-blur-xl hover:bg-black/80 text-[#FFE9A9] hover:text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 border border-[#FFCB56]/30"
            >
              <MessageCircle className="w-4 h-4 text-[#FFCB56]" />
              <span>WhatsApp Direct Chat</span>
            </a>
          </motion.div>

          {/* Quick Horizon Metadata Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-4 p-5 sm:p-6 bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl rounded-xl"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] sm:text-xs text-[#FFCB56] uppercase tracking-[0.2em] font-semibold">Primary Locations</span>
              <span className="text-xs sm:text-sm text-[#FFE9A9] font-semibold">Dunes, Marina, Old Al Seef</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] sm:text-xs text-[#FFCB56] uppercase tracking-[0.2em] font-semibold">Capture Format</span>
              <span className="text-xs sm:text-sm text-[#FFE9A9] font-semibold">4K Cinema + Editorial Stills</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] sm:text-xs text-[#FFCB56] uppercase tracking-[0.2em] font-semibold">Golden Windows</span>
              <span className="text-xs sm:text-sm text-[#FFE9A9] font-semibold">Dawn Sunburst &amp; Twilight</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] sm:text-xs text-[#FFCB56] uppercase tracking-[0.2em] font-semibold">Studio Base</span>
              <span className="text-xs sm:text-sm text-[#FFE9A9] font-semibold">Gaya • Traveling to Dubai</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Introduction with Asymmetric Framing */}
      <section className="relative w-full px-5 sm:px-8 lg:px-14 py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#FFCB56]/30 overflow-hidden transition-colors">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <span className="text-xs text-[#FF933E] dark:text-[#FFCB56] uppercase tracking-[0.25em] font-semibold">
              The Royal Vision
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#241912]">
              Why Consider a Dubai Shoot?
            </h2>
            <p className="text-xs sm:text-sm text-[#594233] leading-relaxed font-light">
              Dubai offers several breathtaking settings for a pre-wedding shoot, from futuristic skyline reflections and luxury yachts to open desert sands and wind-tower historic streets. Tell us your travel dates and we will curate a personalized shooting schedule.
            </p>
            <div className="p-6 bg-white rounded-xl border-l-4 border-[#FF933E] shadow-lg border border-[#FFCB56]/30">
              <p className="font-cursive text-[#FF933E] text-2xl sm:text-3xl text-[#FF933E] dark:text-[#FFCB56] leading-relaxed">
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
              className="relative h-72 sm:h-80 overflow-hidden rounded-xl shadow-2xl group border border-[#FFCB56]/30"
            >
              <Image 
                src="/TRFImages/Landscape/imgi_13_624210763_18107160370805406_5261196569911533042_n.jpg" 
                alt="City Horizon & Reflections"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-5">
                <span className="text-sm font-semibold text-[#FFE9A9]">City Horizon &amp; Reflections</span>
              </div>
            </motion.div>

            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative h-72 sm:h-80 sm:-mt-6 overflow-hidden rounded-xl shadow-2xl group border border-[#FFCB56]/30"
            >
              <Image 
                src="/TRFImages/Portrait/imgi_18_652309555_18103077068497863_7634200969736434127_n.jpg" 
                alt="Timeless Sand Terraces"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-5">
                <span className="text-sm font-semibold text-[#FFE9A9]">Timeless Sand Terraces</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curated Location Backdrops */}
      <section className="relative w-full px-5 sm:px-8 lg:px-14 py-16 sm:py-24 bg-[#FFF8EE] border-t border-[#FFCB56]/30 overflow-hidden transition-colors">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#FFCB56]/30 pb-6"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#FF933E] dark:text-[#FFCB56] uppercase tracking-[0.25em] font-semibold">
                Cinematic Canvas
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#241912]">
                Curated Backdrops &amp; Themes
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#594233] max-w-md font-light leading-relaxed">
              Select distinct moods for your visual gallery. From modern towers to wind-tower historic brickwork, we shape the lighting to each locale.
            </p>
          </motion.div>

          {/* Backdrop Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Backdrop 1 */}
            <div className="group relative flex flex-col bg-white rounded-xl overflow-hidden shadow-xl border border-[#FFCB56]/30 hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <Image 
                  src="/TRFImages/Landscape/imgi_13_624210763_18107160370805406_5261196569911533042_n.jpg" 
                  alt="City and Skyline"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-md text-[#FFCB56] text-[10px] uppercase tracking-wider font-semibold border border-[#FFCB56]/30">
                  Modern Horizon
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-grow justify-between">
                <div>
                  <h3 className="font-headline text-xl text-[#241912]">
                    City and Skyline Photos
                  </h3>
                  <p className="text-xs sm:text-sm text-[#594233] mt-1 leading-relaxed font-light">
                    If you like modern city views, locations around Dubai&apos;s skyline and water fountains create striking editorial contrast.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-[#FF933E] dark:text-[#FFCB56] border-t border-[#FFCB56]/30 text-xs uppercase tracking-wider font-semibold">
                  <span>Recommended: Blue Hour</span>
                  <Camera className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Backdrop 2: Desert Dunes */}
            <div className="group relative flex flex-col bg-white rounded-xl overflow-hidden shadow-xl border border-[#FFCB56]/30 hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <Image 
                  src="/TRFImages/Portrait/imgi_18_652309555_18103077068497863_7634200969736434127_n.jpg" 
                  alt="Desert Photos"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-md text-[#FFCB56] text-[10px] uppercase tracking-wider font-semibold border border-[#FFCB56]/30">
                  Expansive Sands
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-grow justify-between">
                <div>
                  <h3 className="font-headline text-xl text-[#241912]">
                    Desert Dunes
                  </h3>
                  <p className="text-xs sm:text-sm text-[#594233] mt-1 leading-relaxed font-light">
                    The quiet desert dunes offer endless vistas and golden-hour sunset light. Coordinated with 4x4 transport and styling.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-[#FF933E] dark:text-[#FFCB56] border-t border-[#FFCB56]/30 text-xs uppercase tracking-wider font-semibold">
                  <span>Recommended: Sunset &amp; Dusk</span>
                  <Sun className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Backdrop 3: Dubai Marina */}
            <div className="group relative flex flex-col bg-white rounded-xl overflow-hidden shadow-xl border border-[#FFCB56]/30 hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <Image 
                  src="/TRFImages/Portrait/imgi_29_655024485_18177059080390589_2698320352380932793_n.jpg" 
                  alt="Waterfront Locations"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-md text-[#FFCB56] text-[10px] uppercase tracking-wider font-semibold border border-[#FFCB56]/30">
                  Waterfront &amp; Harbor
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-grow justify-between">
                <div>
                  <h3 className="font-headline text-xl text-[#241912]">
                    Waterfront &amp; Marina
                  </h3>
                  <p className="text-xs sm:text-sm text-[#594233] mt-1 leading-relaxed font-light">
                    Dubai Marina promenades and private yacht charters for couples seeking romantic reflections and modern elegance.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-[#FF933E] dark:text-[#FFCB56] border-t border-[#FFCB56]/30 text-xs uppercase tracking-wider font-semibold">
                  <span>Recommended: Evening Promenade</span>
                  <Film className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Enquiry Form Section */}
      <section className="relative w-full px-5 sm:px-8 lg:px-14 py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#FFCB56]/30 overflow-hidden transition-colors" id="enquiry-section">
        <InteractiveGrid />
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="text-center flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF933E] dark:text-[#FFCB56] font-semibold">
              Commissioning Concierge
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#241912]">
              Planning a Pre-Wedding Shoot in Dubai?
            </h2>
            <p className="text-xs sm:text-sm text-[#594233] max-w-xl mx-auto font-light leading-relaxed">
              Send us your preferred dates and locations. We will discuss shoot requirements and confirm availability, travel arrangements, and deliverables.
            </p>
          </div>

          <div className="bg-white border border-[#FFCB56]/30 p-6 sm:p-10 lg:p-12 shadow-2xl rounded-2xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-[#FF933E] dark:text-[#FFCB56] font-semibold">
                    Couple Names *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={coupleNames}
                    onChange={e => setCoupleNames(e.target.value)}
                    placeholder="e.g. Ananya &amp; Rohit"
                    className="w-full px-3.5 py-2.5 bg-[#FAF4ED] dark:bg-black/50 text-[#241912] placeholder:text-[#7C685B]/60 focus:outline-none focus:ring-1 focus:ring-[#FF933E] text-xs sm:text-sm border border-[#FFCB56]/30 rounded"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-[#FF933E] dark:text-[#FFCB56] font-semibold">
                    Phone / WhatsApp *
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={contactPhone}
                    onChange={e => setContactPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-[#FAF4ED] dark:bg-black/50 text-[#241912] placeholder:text-[#7C685B]/60 focus:outline-none focus:ring-1 focus:ring-[#FF933E] text-xs sm:text-sm border border-[#FFCB56]/30 rounded"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-[#FF933E] dark:text-[#FFCB56] font-semibold">
                    Travel Window *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={travelWindow}
                    onChange={e => setTravelWindow(e.target.value)}
                    placeholder="e.g. November 2025"
                    className="w-full px-3.5 py-2.5 bg-[#FAF4ED] dark:bg-black/50 text-[#241912] placeholder:text-[#7C685B]/60 focus:outline-none focus:ring-1 focus:ring-[#FF933E] text-xs sm:text-sm border border-[#FFCB56]/30 rounded"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-[#FF933E] dark:text-[#FFCB56] font-semibold">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    value={contactEmail}
                    onChange={e => setContactEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#FAF4ED] dark:bg-black/50 text-[#241912] placeholder:text-[#7C685B]/60 focus:outline-none focus:ring-1 focus:ring-[#FF933E] text-xs sm:text-sm border border-[#FFCB56]/30 rounded"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-[11px] uppercase tracking-wider text-[#FF933E] dark:text-[#FFCB56] font-semibold">
                    Additional Notes &amp; Preferred Backdrops
                  </label>
                  <textarea 
                    rows={3}
                    value={shootNotes}
                    onChange={e => setShootNotes(e.target.value)}
                    placeholder="Tell us about your outfits, ideas, or questions regarding permits and dates..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF4ED] dark:bg-black/50 text-[#241912] placeholder:text-[#7C685B]/60 focus:outline-none focus:ring-1 focus:ring-[#FF933E] text-xs sm:text-sm border border-[#FFCB56]/30 rounded"
                  />
                </div>

                <div className="md:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#FF933E] text-white hover:bg-[#FFCB56] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-[0_0_20px_rgba(212,103,67,0.45)] cursor-pointer"
                  >
                    Submit Dubai Inquiry
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-8 text-center bg-[#FAF4ED] dark:bg-black/40 rounded-xl border border-[#FF933E]/30 flex flex-col items-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-[#FF933E]" />
                <h3 className="font-headline text-2xl text-[#241912]">
                  Inquiry Received
                </h3>
                <p className="text-xs text-[#594233] max-w-md">
                  Thank you. We will contact you promptly on WhatsApp with our upcoming Dubai schedule.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
