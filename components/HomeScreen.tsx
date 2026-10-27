'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Film,
  Camera,
  Plane,
  Heart,
  ChevronDown,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Play,
  Award,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PortfolioItemData } from './PortfolioModal';
import InteractiveGrid from './InteractiveGrid';
import AnimatedBorderCard from './AnimatedBorderCard';

interface HomeScreenProps {
  onSelectTab: (tab: string) => void;
  onOpenPortfolioItem: (item: PortfolioItemData) => void;
  onOpenAvailability: () => void;
}

export default function HomeScreen({
  onSelectTab,
  onOpenPortfolioItem,
  onOpenAvailability,
}: HomeScreenProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    venue: '',
    service: 'both',
    details: '',
  });

  const portfolioItems: PortfolioItemData[] = [
    {
      id: 'sacred-pheras',
      category: 'wedding',
      badge: '4K Film',
      badgeType: 'video',
      location: 'Gaya, Bihar • Wedding Ceremony',
      title: 'The Sacred Pheras',
      description:
        'Documenting the rituals, heartfelt vows, and family tears of joy during an evening royal celebration.',
      image:
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'golden-dunes',
      category: 'prewedding',
      badge: 'Stills & Film',
      badgeType: 'video',
      location: 'Dubai Destination • Pre-Wedding Shoot',
      title: 'Golden Dunes Session',
      description:
        'A serene couple session exploring Dubai’s open desert vistas and waterfront skyline before the wedding rush.',
      image:
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'yellow-petals',
      category: 'haldi',
      badge: 'Photo Story',
      badgeType: 'story',
      location: 'Chhotki Nawada • Haldi Celebrations',
      title: 'Yellow Petals & Laughter',
      description:
        'Unfiltered laughter among siblings, elders playfully tossing marigold flowers, and pure family affection.',
      image:
        'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'evening-congratulations',
      category: 'reception',
      badge: 'Stills',
      badgeType: 'photo',
      location: 'Bodh Gaya Venue • Grand Reception',
      title: 'Evening of Congratulations',
      description:
        'Welcoming hundreds of friends and extended family under grand chandelier lights and royal stage settings.',
      image:
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'before-vows',
      category: 'prewedding',
      badge: 'Cinematic Teaser',
      badgeType: 'video',
      location: 'Bihar Heritage • Pre-Wedding Story',
      title: 'Before the Vows',
      description:
        'Quiet moments away from the calendar rush, captured with patience and natural daylight.',
      image:
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'promise-forever',
      category: 'wedding',
      badge: 'Stills & Film',
      badgeType: 'photo',
      location: 'Gaya • Ring Ceremony',
      title: 'The Promise of Forever',
      description:
        'Heartfelt promises spoken in front of both families, preserving every smile and gentle glance.',
      image:
        'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const filteredPortfolio =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const faqs = [
    {
      question: 'What photography and videography services do you offer?',
      answer:
        'We provide complete wedding photography and videography, pre-wedding shoots, candid and traditional photography, cinematic wedding films, and drone footage. Please contact us to confirm which services and deliverables are available for your event and location.',
    },
    {
      question: 'When will we receive our photos and films?',
      answer:
        'We estimate 4–6 weeks for fully edited and color-graded high-resolution photos, and 6–8 weeks for cinematic wedding films and master ceremony documentation. Every booking schedule is agreed in writing prior to signing.',
    },
    {
      question: 'Can we book a pre-wedding shoot?',
      answer:
        'Yes. We offer pre-wedding photography and videography across scenic heritage locations in Gaya, Bodh Gaya, Patna, or international destinations like Dubai. Share your preferred date and thoughts so we can plan the session.',
    },
    {
      question: 'Do you offer drone footage?',
      answer:
        'Drone footage is included in our signature packages, subject to venue regulations, airspace permissions, and safe weather conditions.',
    },
    {
      question: 'Can we customise our package?',
      answer:
        'Absolutely. We tailor every commission around the number of functions (Haldi, Mehendi, Sangeet, Wedding, Reception), the guest scale, and whether you require photo, video, or complete coverage.',
    },
    {
      question: 'Do you travel outside Gaya?',
      answer:
        'Yes. Our team regularly documents destination weddings across Bihar, Varanasi, Kolkata, Delhi NCR, and international horizons including Dubai.',
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        date: '',
        venue: '',
        service: 'both',
        details: '',
      });
    }, 4500);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* HERO SECTION - Entire Screen Height (100vh) & Clearly Visible Background */}
      <section className="relative w-full h-screen min-h-[640px] flex items-end sm:items-center pb-14 sm:pb-20 pt-24 px-5 sm:px-8 lg:px-14 overflow-hidden bg-black">
        {/* Clearly Visible Ambient Background Image Layer */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-88 scale-100 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        {/* Cinematic Vignette Overlay - Keeps text legible while allowing photo to shine */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-5 sm:gap-6">
          {/* Studio Marker - Just Clean Text, NO cylinders or dots */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] sm:text-xs text-[#e8c17a] uppercase tracking-[0.28em] font-semibold">
              Wedding Photography &amp; Films • Gaya, Bihar
            </span>
          </motion.div>

          {/* Main Headline with Blur Reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 25, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-headline text-3xl sm:text-5xl lg:text-6xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] max-w-4xl tracking-tight leading-[1.12]"
          >
            Your Wedding Day, Just As You Remember It
          </motion.h1>

          {/* Romantic Cursive Excerpt */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="font-cursive-romantic text-2xl sm:text-3xl lg:text-4xl text-[#e8c17a] -mt-1 tracking-wide drop-shadow-md"
          >
            &ldquo;Every sacred ritual, every stolen glance, preserved for generations.&rdquo;
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base lg:text-lg text-[#e8bcb5] max-w-2xl font-light leading-relaxed"
          >
            Wedding photography and films in Gaya, Bihar. We capture the big moments, the family rituals, and the little expressions you may miss while the day is unfolding.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1"
          >
            <button
              onClick={() => {
                const el = document.getElementById('portfolio');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 sm:px-8 py-3 bg-[#d60000] text-[#ffe5e1] hover:bg-[#ff3333] hover:text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(214,0,0,0.5)] flex items-center gap-2 group cursor-pointer"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('enquiry');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 sm:px-8 py-3 bg-black/50 backdrop-blur-xl text-[#e8c17a] hover:text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] hover:bg-black/75 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 border border-white/15 cursor-pointer shadow-lg"
            >
              Talk About Your Wedding
            </button>
          </motion.div>

          {/* Metric Strip - Minimalistic Icons, NO star icons, NO cylinders */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-5 flex flex-wrap items-center gap-4 sm:gap-8 text-xs text-[#e8bcb5]/85 border-t border-white/10 mt-2"
          >
            {/* Minimalist Review Indicator without star icons */}
            <div className="flex items-center gap-2.5">
              <span className="font-headline text-lg sm:text-xl text-[#e8c17a] font-bold">4.6</span>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-xs text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] font-semibold uppercase tracking-wider">
                  Rating (108 Reviews)
                </span>
                <span className="text-[9px] text-[#e8bcb5]/60 uppercase tracking-widest">
                  Google Verified
                </span>
              </div>
            </div>

            <div className="h-4 w-px bg-white/15 hidden sm:block" />

            <div className="flex items-center gap-2">
              <Film className="w-3.5 h-3.5 text-[#e8c17a]" />
              <span className="uppercase tracking-wider font-medium text-[11px] sm:text-xs text-[#e5e2e1] dark:text-[#e5e2e1] light:text-[#2A2621]">
                Led by AAFT Alumnus
              </span>
            </div>

            <div className="h-4 w-px bg-white/15 hidden sm:block" />

            <div className="flex items-center gap-2">
              <Plane className="w-3.5 h-3.5 text-[#e8c17a]" />
              <span className="uppercase tracking-wider font-medium text-[11px] sm:text-xs text-[#e5e2e1] dark:text-[#e5e2e1] light:text-[#2A2621]">
                Gaya • Destination • Dubai
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION & EMOTIONAL CONNECTION SECTION */}
      <section className="relative w-full py-16 sm:py-24 bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-[#FAF7F2] px-5 sm:px-8 lg:px-14 border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 overflow-hidden">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            <span className="text-xs text-[#e8c17a] uppercase tracking-[0.25em] font-semibold">
              Authentic Documentary
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] leading-snug">
              Wedding Photography That Feels Like Your Day
            </h2>
            <p className="text-sm sm:text-base text-[#e8bcb5]/90 dark:text-[#e8bcb5]/90 light:text-[#5E5244] leading-relaxed font-light">
              A wedding moves quickly. Families come together, rituals unfold, friends laugh, and there are moments you may not get to see for yourself. At The Royal Films, we photograph and film your celebration so you can return to those moments whenever you want.
            </p>
            <p className="text-xs sm:text-sm text-[#e8bcb5]/75 dark:text-[#e8bcb5]/75 light:text-[#6E6354] leading-relaxed font-light">
              Based in Gaya, Bihar, we cover weddings and pre-wedding shoots. Tell us about your plans and we can discuss the coverage that fits your event.
            </p>

            {/* Asymmetric Highlight Card - Glassmorphism, NO cylinders */}
            <div className="group relative mt-4 rounded-xl p-[1.5px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.008] transition-all duration-500"><div className="absolute inset-[-150%] -z-10 animate-border-spin opacity-45 group-hover:opacity-100 transition-opacity" style={{ background: "conic-gradient(from 0deg, transparent 0 320deg, #e8c17a 340deg, #d60000 355deg, transparent 360deg)" }} /><div className="p-6 sm:p-7 rounded-[10px] bg-[#FAF8F5] dark:bg-[#161616] light:bg-[#FAF8F5] flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-[#e8c17a]">
                <Heart className="w-5 h-5 fill-[#e8c17a]/20" />
                <h3 className="text-2xl sm:text-3xl font-cursive-calligraphy text-[#e8c17a] tracking-wide">
                  The Small Moments Matter, Too
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
                Years from now, you may look back at the way your parents smiled, the laughter among cousins, or the few quiet seconds you shared before a ceremony. We keep an eye out for these moments while documenting the main events of your day.
              </p>
              {/* Clean text without cylinders */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-xs text-[#e8c17a] uppercase tracking-wider font-medium">
                <span>First Looks</span>
                <span className="text-white/20">•</span>
                <span>Parent’s Blessings</span>
                <span className="text-white/20">•</span>
                <span>Haldi Laughter</span>
                <span className="text-white/20">•</span>
                <span>Quiet Breaths</span>
              </div>
            </div></div>
          </motion.div>

          {/* Right Visual Grid Mosaic */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                onClick={() =>
                  onOpenPortfolioItem({
                    id: 'family-rituals',
                    category: 'wedding',
                    badge: 'Stills',
                    badgeType: 'photo',
                    location: 'Gaya • Family Rituals',
                    title: 'The Mother’s Blessing',
                    description:
                      'Intimate tender candid photograph of an Indian bride smiling softly while her mother fastens gold jewelry around her neck before the ceremony.',
                    image:
                      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
                  })
                }
                className="overflow-hidden rounded-xl glass-panel shadow-2xl aspect-[4/5] relative group cursor-pointer"
              >
                <Image
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80"
                  alt="Family Rituals"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                  Family Rituals
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                onClick={() =>
                  onOpenPortfolioItem({
                    id: 'joy-friends',
                    category: 'wedding',
                    badge: 'Candid',
                    badgeType: 'photo',
                    location: 'Gaya • Baraat Procession',
                    title: 'Joy Among Friends',
                    description:
                      'Candid laugh of groom sharing an unscripted joke with cousins during the baraat procession in Gaya.',
                    image:
                      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
                  })
                }
                className="overflow-hidden rounded-xl glass-panel shadow-2xl aspect-square relative group cursor-pointer"
              >
                <Image
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
                  alt="Joy Among Friends"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                  Joy Among Friends
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col gap-4 pt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                onClick={() =>
                  onOpenPortfolioItem({
                    id: 'haldi-mehendi',
                    category: 'haldi',
                    badge: 'Details',
                    badgeType: 'photo',
                    location: 'Chhotki Nawada • Mehendi',
                    title: 'Hands of Marigold',
                    description:
                      'Hands adorned with intricate dark mehendi holding vibrant yellow marigold flowers during a traditional pre-wedding haldi ceremony.',
                    image:
                      'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80',
                  })
                }
                className="overflow-hidden rounded-xl glass-panel shadow-2xl aspect-square relative group cursor-pointer"
              >
                <Image
                  src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80"
                  alt="Haldi & Mehendi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                  Haldi &amp; Mehendi
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                onClick={() =>
                  onOpenPortfolioItem({
                    id: 'couple-portraits',
                    category: 'prewedding',
                    badge: 'Heritage',
                    badgeType: 'photo',
                    location: 'Heritage Gateway • Gaya',
                    title: 'Echoes of the Palace',
                    description:
                      'Cinematic still of bride and groom walking slowly together under an arched heritage doorway in Gaya during sunset.',
                    image:
                      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
                  })
                }
                className="overflow-hidden rounded-xl glass-panel shadow-2xl aspect-[4/5] relative group cursor-pointer"
              >
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                  alt="Couple Portraits"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                  Couple Portraits
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORKS & PORTFOLIO PREVIEW */}
      <section className="relative w-full py-16 sm:py-24 bg-[#0e0e0e] dark:bg-[#0e0e0e] light:bg-[#F5F0E6] px-5 sm:px-8 lg:px-14 border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 overflow-hidden" id="portfolio">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-2"
            >
              <span className="text-xs text-[#e8c17a] uppercase tracking-[0.25em] font-semibold">
                Moments in Motion &amp; Stills
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
                A Look at the Moments We Have Captured
              </h2>
              <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] max-w-xl font-light">
                Browse photographs and films from wedding celebrations, ring ceremonies, haldi and mehendi, receptions, and pre-wedding shoots.
              </p>
            </motion.div>

            {/* Filter Buttons - Sleek Minimalist Tabs, NO cylinders */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { id: 'all', label: 'All Stories' },
                { id: 'wedding', label: 'Wedding' },
                { id: 'prewedding', label: 'Pre-Wedding' },
                { id: 'haldi', label: 'Haldi & Mehendi' },
                { id: 'reception', label: 'Reception' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-all pb-1.5 cursor-pointer relative ${
                    activeFilter === filter.id
                      ? 'text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] border-b-2 border-[#e8c17a]'
                      : 'text-[#e8bcb5]/70 hover:text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid with Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPortfolio.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onClick={() => onOpenPortfolioItem(item)}
                className="group relative flex flex-col rounded-xl p-[1.5px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 cursor-pointer bg-[#FAF8F5] dark:bg-[#141414] light:bg-[#FAF8F5]"><div className="absolute inset-[-150%] -z-10 animate-border-spin opacity-45 group-hover:opacity-100 transition-opacity" style={{ background: "conic-gradient(from 0deg, transparent 0 320deg, #e8c17a 340deg, #d60000 355deg, transparent 360deg)" }} /><div className="flex flex-col h-full w-full rounded-[10px] overflow-hidden bg-[#FAF8F5] dark:bg-[#141414] light:bg-[#FAF8F5]"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                  {/* Clean Glass Tag - NO cylinders */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-black/75 backdrop-blur-md text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] text-[10px] uppercase tracking-widest font-semibold flex items-center gap-1.5 border border-white/15">
                    {item.badgeType === 'video' ? (
                      <Film className="w-3.5 h-3.5 text-[#ffb4a8]" />
                    ) : (
                      <Camera className="w-3.5 h-3.5 text-[#e8c17a]" />
                    )}
                    <span>{item.badge}</span>
                  </div>

                  {item.badgeType === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#d60000]/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-white" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[#e8c17a] text-[11px] uppercase tracking-widest font-medium">
                    <span>{item.location.split('•')[0]}</span>
                    <span>{item.location.split('•')[1] || item.category}</span>
                  </div>
                  <h3 className="font-headline text-xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] group-hover:text-[#e8c17a] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] line-clamp-2 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div></div>
              </motion.div>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                const el = document.getElementById('enquiry');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-[#d60000] text-[#ffe5e1] hover:bg-[#ff3333] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-[0_0_20px_rgba(214,0,0,0.45)] cursor-pointer"
            >
              Talk About Your Wedding
            </button>
            <button
              onClick={() => onSelectTab('services')}
              className="px-8 py-3 bg-black/60 backdrop-blur-xl text-[#e8c17a] hover:text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] hover:bg-black/80 text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md border border-white/10 cursor-pointer"
            >
              Explore All Services
            </button>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SHOWCASE */}
      <section className="relative w-full py-16 sm:py-24 bg-[#080808] dark:bg-[#080808] light:bg-[#FAF7F2] px-5 sm:px-8 lg:px-14 border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 overflow-hidden" id="services-preview">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-2 max-w-3xl"
          >
            <span className="text-xs text-[#e8c17a] uppercase tracking-[0.25em] font-semibold">
              What We Provide
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
              Photography and Films for Your Celebration
            </h2>
            <p className="text-sm sm:text-base text-[#e8bcb5]/90 dark:text-[#e8bcb5]/90 light:text-[#5E5244] font-light leading-relaxed">
              Every celebration has different needs. Whether you are planning a single ceremony or multiple days of rituals, we tailor our coverage to match your schedule.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative rounded-xl p-[1.5px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500"><div className="absolute inset-[-150%] -z-10 animate-border-spin opacity-45 group-hover:opacity-100 transition-opacity" style={{ background: "conic-gradient(from 0deg, transparent 0 320deg, #e8c17a 340deg, #d60000 355deg, transparent 360deg)" }} /><div className="h-full w-full rounded-[10px] p-7 sm:p-8 bg-[#FAF8F5] dark:bg-[#161616] light:bg-[#FAF8F5] flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-full bg-[#ffb4a8]/10 text-[#ffb4a8] flex items-center justify-center border border-[#ffb4a8]/20">
                    <Film className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] text-[#e8c17a] uppercase tracking-widest font-semibold">
                    Multi-Day Coverage
                  </span>
                </div>
                <h3 className="font-headline text-2xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
                  Wedding Photography and Videography
                </h3>
                <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
                  From the wedding rituals to the moments shared between family members, we cover the day as it happens. Tell us which functions you are planning so we can discuss the right coverage for your celebration.
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#e5e2e1] dark:text-[#e5e2e1] light:text-[#2A2621] pt-1 font-light">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e8c17a] shrink-0" />
                    <span>Ritual coverage alongside candid family interactions</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e8c17a] shrink-0" />
                    <span>Traditional posed group shots with extended relatives</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e8c17a] shrink-0" />
                    <span>Cinematic highlight films and full ceremony documentation</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onSelectTab('services')}
                  className="inline-flex items-center gap-2 text-xs text-[#e8c17a] uppercase tracking-[0.2em] font-semibold group-hover:text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] transition-colors cursor-pointer"
                >
                  <span>Discuss Wedding Dates</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div></div>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group relative rounded-xl p-[1.5px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500"><div className="absolute inset-[-150%] -z-10 animate-border-spin opacity-45 group-hover:opacity-100 transition-opacity" style={{ background: "conic-gradient(from 0deg, transparent 0 320deg, #e8c17a 340deg, #d60000 355deg, transparent 360deg)" }} /><div className="h-full w-full rounded-[10px] p-7 sm:p-8 bg-[#FAF8F5] dark:bg-[#161616] light:bg-[#FAF8F5] flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-full bg-[#e8c17a]/10 text-[#e8c17a] flex items-center justify-center border border-[#e8c17a]/20">
                    <Camera className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] text-[#e8c17a] uppercase tracking-widest font-semibold">
                    Intimate Sessions
                  </span>
                </div>
                <h3 className="font-headline text-2xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
                  Pre-Wedding Photography and Videography
                </h3>
                <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
                  A pre-wedding shoot gives you time to be together away from the busy wedding schedule. We can discuss locations, the kind of photos you like, and whether you want a film as well.
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#e5e2e1] dark:text-[#e5e2e1] light:text-[#2A2621] pt-1 font-light">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e8c17a] shrink-0" />
                    <span>Gentle posing guidance so you feel relaxed in front of the lens</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e8c17a] shrink-0" />
                    <span>Local scenic settings across Bihar or destination locations like Dubai</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e8c17a] shrink-0" />
                    <span>Cinematic couple teaser film crafted with your favourite music</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onSelectTab('dubai-destination')}
                  className="inline-flex items-center gap-2 text-xs text-[#e8c17a] uppercase tracking-[0.2em] font-semibold group-hover:text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] transition-colors cursor-pointer"
                >
                  <span>Plan a Pre-Wedding Shoot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div></div>
            </motion.div>
          </div>

          {/* Credentials Trio with Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 glass-panel rounded-xl flex items-start gap-4">
              <Plane className="w-6 h-6 text-[#e8c17a] shrink-0 mt-1" />
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Drone Aerial Coverage</h4>
                <p className="text-xs text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
                  Available depending on venue regulations and local permissions to give grand scale to your baraat and venue.
                </p>
              </div>
            </div>

            <div className="p-6 glass-panel rounded-xl flex items-start gap-4">
              <Camera className="w-6 h-6 text-[#e8c17a] shrink-0 mt-1" />
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Candid &amp; Traditional</h4>
                <p className="text-xs text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
                  A balanced blend of unscripted real emotions with well-coordinated stage portraits for every family member.
                </p>
              </div>
            </div>

            <div className="p-6 glass-panel rounded-xl flex items-start gap-4">
              <Award className="w-6 h-6 text-[#e8c17a] shrink-0 mt-1" />
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Led by AAFT Alumnus</h4>
                <p className="text-xs text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
                  Trained filmmaking methodology and thoughtful composition guiding every wedding film we deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORDS FROM COUPLES & FAMILIES - Minimalistic rating, NO stars */}
      <section className="relative w-full py-16 sm:py-24 bg-[#0e0e0e] dark:bg-[#0e0e0e] light:bg-[#F5F0E6] px-5 sm:px-8 lg:px-14 border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 overflow-hidden">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-2"
            >
              <span className="text-xs text-[#e8c17a] uppercase tracking-[0.25em] font-semibold">
                Verified Experience
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
                Words From Couples and Families
              </h2>
              <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] max-w-xl font-light">
                Read what people have shared about their experience with The Royal Films.
              </p>
            </motion.div>

            {/* Minimalist Verified Score without stars */}
            <div className="p-4 px-6 glass-panel rounded-xl flex items-center gap-4 shadow-xl">
              <div className="w-11 h-11 rounded-full bg-[#e8c17a]/15 text-[#e8c17a] flex items-center justify-center font-headline text-lg font-bold border border-[#e8c17a]/30">
                4.6
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] uppercase tracking-wider">
                  Client Rating
                </span>
                <span className="text-[11px] text-[#e8bcb5]/70">
                  108 Google Verified Testimonials
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 glass-panel rounded-xl shadow-xl flex flex-col justify-between gap-6"
            >
              <p className="font-cursive-editorial text-xl sm:text-2xl text-[#B38842] dark:text-[#e8c17a] leading-relaxed">
                &ldquo;They documented each ritual with patience. Looking at the album and teaser film brought back all the warmth of that evening. We loved how gentle they were with our elders.&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Pooja &amp; Rohit</span>
                  <span className="text-xs text-[#e8c17a]">Wedding in Gaya</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#e8c17a]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 glass-panel rounded-xl shadow-xl flex flex-col justify-between gap-6"
            >
              <p className="font-cursive-editorial text-xl sm:text-2xl text-[#B38842] dark:text-[#e8c17a] leading-relaxed">
                &ldquo;We were both very nervous about being in front of cameras, but the team gave simple direction and let us just be ourselves. The candid smiles in our pre-wedding pictures are so special.&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Anjali &amp; Siddharth</span>
                  <span className="text-xs text-[#e8c17a]">Pre-Wedding &amp; Reception</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#e8c17a]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 glass-panel rounded-xl shadow-xl flex flex-col justify-between gap-6"
            >
              <p className="font-cursive-editorial text-xl sm:text-2xl text-[#B38842] dark:text-[#e8c17a] leading-relaxed">
                &ldquo;The team captured small moments we completely missed during the crowded events. My parents especially loved the traditional prints and how respectfully the crew handled all functions.&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Vikram&apos;s Family</span>
                  <span className="text-xs text-[#e8c17a]">3-Day Celebrations</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#e8c17a]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="relative w-full py-16 sm:py-24 bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-[#FAF7F2] px-5 sm:px-8 lg:px-14 border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 overflow-hidden">
        <InteractiveGrid />
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-2 text-center items-center"
          >
            <span className="text-xs text-[#e8c17a] uppercase tracking-[0.25em] font-semibold">
              Clear Answers
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] max-w-xl font-light">
              Everything you need to know about booking, team sizes, and delivery timelines.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-xl overflow-hidden shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] text-sm sm:text-base font-medium cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#e8c17a] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-[#e8bcb5]/90 dark:text-[#e8bcb5]/90 light:text-[#5E5244] font-light leading-relaxed border-t border-white/10 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENQUIRY & CALLBACK SECTION */}
      <section className="relative w-full py-16 sm:py-24 bg-[#0e0e0e] dark:bg-[#0e0e0e] light:bg-[#F5F0E6] px-5 sm:px-8 lg:px-14 border-t border-white/10 dark:border-white/10 light:border-[#1A1918]/10 overflow-hidden" id="enquiry">
        <InteractiveGrid />
        <div className="max-w-5xl mx-auto glass-panel rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Prompt Info */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-3">
                <span className="text-xs text-[#e8c17a] uppercase tracking-[0.25em] font-semibold">
                  Reserve Your Date
                </span>
                <h2 className="font-headline text-3xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">
                  Tell Us About Your Wedding
                </h2>
                <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] font-light leading-relaxed">
                  Share your event date, venue, and the functions you are planning. Let us know whether you need photography, videography, or both. We will get back to you to discuss availability and the next steps.
                </p>
              </div>

              {/* Contact with Dedicated Icons */}
              <div className="flex flex-col gap-3 text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#e8c17a]/10 flex items-center justify-center shrink-0 border border-[#e8c17a]/30">
                    <Phone className="w-3.5 h-3.5 text-[#e8c17a]" />
                  </span>
                  <span>
                    Concierge:{' '}
                    <a className="text-[#e8c17a] hover:text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] transition-colors" href="tel:+917004375740">
                      +91 70043 75740
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#e8c17a]/10 flex items-center justify-center shrink-0 border border-[#e8c17a]/30">
                    <Mail className="w-3.5 h-3.5 text-[#e8c17a]" />
                  </span>
                  <span>
                    Direct:{' '}
                    <a className="text-[#e8c17a] hover:text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] transition-colors" href="mailto:info@theroyalfilms.in">
                      info@theroyalfilms.in
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#e8c17a]/10 flex items-center justify-center shrink-0 border border-[#e8c17a]/30">
                    <MapPin className="w-3.5 h-3.5 text-[#e8c17a]" />
                  </span>
                  <span>Chhotki Nawada, Gaya, Bihar 823001</span>
                </div>
              </div>
            </div>

            {/* Right Luxury Glass Form */}
            <div className="lg:col-span-7 bg-black/40 backdrop-blur-xl p-6 sm:p-8 rounded-xl shadow-xl border border-white/10">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center p-8 gap-4 bg-black/60 rounded-lg border border-[#e8c17a]/40">
                  <CheckCircle2 className="w-12 h-12 text-[#e8c17a]" />
                  <h3 className="font-headline text-2xl text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614]">Enquiry Received</h3>
                  <p className="text-xs sm:text-sm text-[#e8bcb5]/80 dark:text-[#e8bcb5]/80 light:text-[#5E5244] leading-relaxed font-light">
                    Thank you. We have received your wedding details and will contact you promptly on WhatsApp or phone to check master calendar availability.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] text-[#e8c17a] uppercase tracking-wider font-medium">
                        Your Name *
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 bg-black/50 rounded text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] placeholder:text-[#e8bcb5]/40 focus:outline-none focus:ring-1 focus:ring-[#e8c17a] text-xs sm:text-sm border border-white/10"
                        placeholder="e.g. Aditi Sharma"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] text-[#e8c17a] uppercase tracking-wider font-medium">
                        Phone / WhatsApp *
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 bg-black/50 rounded text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] placeholder:text-[#e8bcb5]/40 focus:outline-none focus:ring-1 focus:ring-[#e8c17a] text-xs sm:text-sm border border-white/10"
                        placeholder="+91 98765 43210"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] text-[#e8c17a] uppercase tracking-wider font-medium">
                        Event Date *
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 bg-black/50 rounded text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] focus:outline-none focus:ring-1 focus:ring-[#e8c17a] text-xs sm:text-sm border border-white/10"
                        required
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] text-[#e8c17a] uppercase tracking-wider font-medium">
                        Venue / City *
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 bg-black/50 rounded text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] placeholder:text-[#e8bcb5]/40 focus:outline-none focus:ring-1 focus:ring-[#e8c17a] text-xs sm:text-sm border border-white/10"
                        placeholder="e.g. Gaya, Patna, Bodh Gaya"
                        required
                        type="text"
                        value={formData.venue}
                        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] text-[#e8c17a] uppercase tracking-wider font-medium">
                      Services Needed *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <label
                        className={`flex items-center gap-2 p-2.5 rounded cursor-pointer text-xs transition-colors border ${
                          formData.service === 'both'
                            ? 'bg-black/80 border-[#e8c17a]'
                            : 'bg-black/30 border-white/10 hover:bg-black/60'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value="both"
                          checked={formData.service === 'both'}
                          onChange={() => setFormData({ ...formData, service: 'both' })}
                          className="accent-[#d60000]"
                        />
                        <span className="text-[#e5e2e1] dark:text-[#e5e2e1] light:text-[#2A2621]">Photo &amp; Film</span>
                      </label>

                      <label
                        className={`flex items-center gap-2 p-2.5 rounded cursor-pointer text-xs transition-colors border ${
                          formData.service === 'photo'
                            ? 'bg-black/80 border-[#e8c17a]'
                            : 'bg-black/30 border-white/10 hover:bg-black/60'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value="photo"
                          checked={formData.service === 'photo'}
                          onChange={() => setFormData({ ...formData, service: 'photo' })}
                          className="accent-[#d60000]"
                        />
                        <span className="text-[#e5e2e1] dark:text-[#e5e2e1] light:text-[#2A2621]">Photo Only</span>
                      </label>

                      <label
                        className={`flex items-center gap-2 p-2.5 rounded cursor-pointer text-xs transition-colors border ${
                          formData.service === 'film'
                            ? 'bg-black/80 border-[#e8c17a]'
                            : 'bg-black/30 border-white/10 hover:bg-black/60'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value="film"
                          checked={formData.service === 'film'}
                          onChange={() => setFormData({ ...formData, service: 'film' })}
                          className="accent-[#d60000]"
                        />
                        <span className="text-[#e5e2e1] dark:text-[#e5e2e1] light:text-[#2A2621]">Film Only</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] text-[#e8c17a] uppercase tracking-wider font-medium">
                      Functions &amp; Details
                    </label>
                    <textarea
                      className="w-full px-3.5 py-2.5 bg-black/50 rounded text-[#fef9f1] dark:text-[#fef9f1] light:text-[#181614] placeholder:text-[#e8bcb5]/40 focus:outline-none focus:ring-1 focus:ring-[#e8c17a] text-xs sm:text-sm border border-white/10"
                      placeholder="Tell us about the planned functions (Haldi, Mehendi, Wedding, Reception) and your thoughts..."
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    />
                  </div>

                  <button
                    className="w-full py-3 bg-[#d60000] text-[#ffe5e1] hover:bg-[#ff3333] hover:text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-[0_0_20px_rgba(214,0,0,0.5)] mt-1 cursor-pointer"
                    type="submit"
                  >
                    Get a Call Back
                  </button>

                  <p className="text-[11px] text-[#e8bcb5]/60 text-center font-light">
                    We respond promptly to check calendar availability.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
