'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  Pause,
  Volume2,
  VolumeX,
  Award,
  Instagram,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PortfolioItemData } from './PortfolioModal';
import InteractiveGrid from './InteractiveGrid';
import MinimalWhatsAppIcon from './MinimalWhatsAppIcon';
import {
  TRF_LANDSCAPE,
  TRF_PORTRAIT,
  INSTAGRAM_POSTS,
  INSTAGRAM_PROFILE_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_FOLLOWER_COUNT,
  SIGNATURE_AWARD_REEL,
  LANDSCAPE_REELS,
  PORTRAIT_REELS,
  InstagramReelItem,
} from '@/lib/trfImages';

interface HomeScreenProps {
  onSelectTab: (tab: string) => void;
  onOpenPortfolioItem: (item: PortfolioItemData) => void;
  onOpenAvailability: () => void;
}

interface MinimalReelBoxProps {
  reel: InstagramReelItem;
  className?: string;
  aspectClass?: string;
}

function MinimalReelBox({ reel, className = '', aspectClass }: MinimalReelBoxProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Auto-play when stopped there on smartphone / desktop (IntersectionObserver)
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise.then(() => setIsPlaying(true)).catch(() => {});
              }
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.55 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsPlaying(true)).catch(() => {});
      }
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const defaultAspect = reel.orientation === 'landscape' ? 'aspect-[16/10] sm:aspect-video' : 'aspect-[9/16]';

  return (
    <div
      ref={containerRef}
      onClick={handleTogglePlay}
      className={`clay-video-box group relative block overflow-hidden bg-black border-2 border-[#FFCB56]/50 transition-all duration-500 ease-out cursor-pointer select-none ${aspectClass || defaultAspect} ${className}`}
    >
      {/* Video Element (Plays in-place without redirecting) */}
      <video
        ref={videoRef}
        src={reel.video}
        poster={reel.poster}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
      />

      {/* Atmospheric Subtle Vignette (no text clutter covering the video) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20 pointer-events-none" />

      {/* Center Play/Pause Indicator (Smoothly fades out when playing) */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
          isPlaying ? 'opacity-0' : 'opacity-85 group-hover:opacity-100'
        }`}
      >
        <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-[#FFCB56] flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,147,62,0.45)] group-hover:scale-110 transition-transform">
          <Play className="w-5 h-5 ml-0.5 text-[#FFE9A9] fill-[#FFE9A9]" />
        </div>
      </div>

      {/* Dedicated Mute / Unmute Button on Video */}
      <button
        type="button"
        onClick={handleToggleMute}
        className="absolute bottom-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 hover:bg-black backdrop-blur-md border border-[#FFCB56]/70 text-white flex items-center justify-center transition-all duration-200 active:scale-90 shadow-md cursor-pointer"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        title={isMuted ? 'Unmute audio' : 'Mute audio'}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 text-[#FFE9A9]" />
        ) : (
          <Volume2 className="w-4 h-4 text-[#FF933E]" />
        )}
      </button>
    </div>
  );
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

  const heroVideoRef = React.useRef<HTMLVideoElement>(null);

  // Guarantee hero background video loops and never halts on smartphone / battery saver
  React.useEffect(() => {
    const vid = heroVideoRef.current;
    if (!vid) return;

    const playLoop = () => {
      vid.play().catch(() => {});
    };
    playLoop();

    vid.addEventListener('ended', playLoop);
    vid.addEventListener('pause', () => {
      if (document.visibilityState === 'visible') {
        playLoop();
      }
    });

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        playLoop();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      vid.removeEventListener('ended', playLoop);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  // Authentic TRF Portfolio Items combining Landscape & Portrait with wise orientation handling
  const portfolioItems: (PortfolioItemData & { orientation: 'landscape' | 'portrait' })[] = [
    {
      id: 'sacred-pheras-mandap',
      category: 'wedding',
      badge: '4K Master Film',
      badgeType: 'video',
      location: 'Gaya Royal Mandap • Holy Pheras',
      title: 'The Sacred Pheras & Royal Mandap',
      description:
        'Vows around the holy fire in traditional royal splendor, preserving tender glance exchanges and family blessings.',
      image: TRF_LANDSCAPE[0].src,
      orientation: 'landscape',
    },
    {
      id: 'royal-heirloom-bride',
      category: 'wedding',
      badge: 'Editorial Portrait',
      badgeType: 'photo',
      location: 'Royal Bridal Suite • Gaya',
      title: 'The Regal Heirloom Bride',
      description:
        'Crimson silk lehenga, heritage kundan jewelry, and timeless poise captured in natural diffused lighting.',
      image: TRF_PORTRAIT[0].src,
      orientation: 'portrait',
    },
    {
      id: 'grand-varmala-spectacle',
      category: 'wedding',
      badge: 'Cinematic Highlight',
      badgeType: 'video',
      location: 'Patna Heritage Courtyard • Varmala',
      title: 'The Grand Varmala Exchange',
      description:
        'Cold pyro sparks, rose petal showers, and royal entry rhythms celebrating the union of two families.',
      image: TRF_LANDSCAPE[1].src,
      orientation: 'landscape',
    },
    {
      id: 'yellow-petals-haldi',
      category: 'haldi',
      badge: 'Candid Joy',
      badgeType: 'story',
      location: 'Chhotki Nawada • Haldi Festivities',
      title: 'Golden Petals & Haldi Aura',
      description:
        'Drenched in vibrant yellow marigold petals and laughter, surrounded by cousins and elders.',
      image: TRF_PORTRAIT[3].src,
      orientation: 'portrait',
    },
    {
      id: 'dubai-destination-horizon',
      category: 'prewedding',
      badge: 'Destination Film',
      badgeType: 'video',
      location: 'Dubai Marina & Desert Oasis',
      title: 'Arabian Dunes & Skyline Pre-Wedding',
      description:
        'An international destination love story shot against warm desert sands and the Dubai waterfront.',
      image: TRF_LANDSCAPE[6].src,
      orientation: 'landscape',
    },
    {
      id: 'eternal-embrace-couple',
      category: 'prewedding',
      badge: 'Intimate Stills',
      badgeType: 'photo',
      location: 'Bihar Heritage Escapes',
      title: 'Eternal Embrace Before the Vows',
      description:
        'A quiet second away from wedding calendar crowds, framed with cinematic intimacy.',
      image: TRF_PORTRAIT[1].src,
      orientation: 'portrait',
    },
    {
      id: 'reception-chandeliers',
      category: 'reception',
      badge: 'Grand Stills',
      badgeType: 'photo',
      location: 'Bodh Gaya Luxury Pavilion',
      title: 'The Royal Reception Night',
      description:
        'Under soaring crystal chandeliers, celebrating heartfelt speeches, toasts, and evening congratulations.',
      image: TRF_LANDSCAPE[3].src,
      orientation: 'landscape',
    },
    {
      id: 'under-golden-dupatta',
      category: 'wedding',
      badge: 'Atelier Stills',
      badgeType: 'photo',
      location: 'Gaya Atelier • Ritual Details',
      title: 'Under the Golden Dupatta',
      description:
        'Delicate zardozi embroidery and emotional eyes capturing sacred traditions handed down through generations.',
      image: TRF_PORTRAIT[5].src,
      orientation: 'portrait',
    },
    {
      id: 'family-blessings-candid',
      category: 'wedding',
      badge: 'Candid Cinema',
      badgeType: 'story',
      location: 'Gaya • Family Blessings',
      title: 'Unspoken Family Blessings',
      description:
        'Paternal tears of pride and joyful smiles preserved with discretion and quiet reverence.',
      image: TRF_LANDSCAPE[7].src,
      orientation: 'landscape',
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
        'We provide complete royal wedding cinematography, 4K HDR master films, pre-wedding destination shoots, candid and traditional stage photography, licensed drone aerials, and bespoke handcrafted albums across Gaya, Bihar, and Dubai.',
    },
    {
      question: 'When will we receive our photos and films?',
      answer:
        'You receive a curated sneak-peek teaser within 72 hours. Complete color-graded master photography is delivered within 4–6 weeks, and the cinematic wedding feature film within 6–8 weeks, with written schedule guarantees.',
    },
    {
      question: 'Do you travel for destination weddings and shoots?',
      answer:
        'Yes! We frequently film across Bihar (Gaya, Patna, Bodh Gaya, Muzaffarpur) and internationally across UAE destinations like Dubai Marina, Al Qudra Desert, and luxury Abu Dhabi resorts.',
    },
    {
      question: 'Who leads the creative direction and filming?',
      answer:
        'The atelier is led by AAFT film school alumni using Sony Cinema line gear, prime cinema glass, and pro audio gear to ensure cinematic color science and heirloom storytelling.',
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
    }, 6000);
  };

  return (
    <div className="flex flex-col w-full bg-[#FFFDF9] text-[#241912] selection:bg-[#FFE9A9] selection:text-[#FF933E]">
      {/* =========================================================================
          HERO SECTION: SILENT INSTAGRAM REEL LOOP WITH FLOATING HIGHLIGHT OVERLAYS
          ========================================================================= */}
      <section className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-black">
        {/* Fullscreen Video Background Playing Seamlessly in Loop Without Chrome */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={heroVideoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 pointer-events-none"
            poster={TRF_LANDSCAPE[0].src}
          >
            <source src="/assets/hero-reel.mp4" type="video/mp4" />
          </video>
          {/* Subtle Warm Gradient Overlay for Perfect Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#FF933E]/10 to-black/60 mix-blend-overlay pointer-events-none" />
        </div>

        {/* Floating Highlights & Headlines Directly Over The Video */}
        <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center justify-center gap-6 pt-16">
          {/* Cursive Brand Tagline (Stars Removed as requested) */}
          <motion.div
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="flex items-center justify-center px-6 py-2 rounded-full bg-white/15 backdrop-blur-md border border-[#FFCB56]/60 shadow-[0_4px_20px_rgba(255,147,62,0.3)]"
          >
            <span
              className="text-2xl sm:text-3xl text-[#FFE9A9] drop-shadow-md"
              style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Pinyon Script', 'Apple Chancery', Georgia, serif" }}
            >
              The Royal Films Atelier
            </span>
          </motion.div>

          {/* Main Royal Title with Distinctive Editorial Cinema Font */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.25 }}
            className="text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
          >
            <span
              className="font-serif italic font-normal tracking-wide text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', 'Bodoni Moda', Georgia, serif" }}
            >
              Timeless Cinema
            </span>{' '}
            <span className="font-headline font-light uppercase tracking-[0.25em] text-sm sm:text-base text-[#FFE9A9]/80 align-middle inline-block mx-1">
              for
            </span>
            <br className="hidden sm:inline" />
            <span
              className="font-normal text-[#FFCB56] italic drop-shadow-[0_2px_14px_rgba(255,203,86,0.6)]"
              style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Pinyon Script', 'Apple Chancery', Georgia, serif" }}
            >
              Royal Celebrations
            </span>
          </motion.h1>

          {/* Floating Highlight Description Over Video */}
          <motion.p
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-[#FFE9A9] max-w-2xl font-light leading-relaxed drop-shadow-md"
          >
            Heirloom 4K wedding films and editorial stills documenting sacred rituals, authentic emotion, and grand royal family traditions across Bihar and Dubai.
          </motion.p>

          {/* Floating Location & Credential Pills Over Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.22em] text-white/90 font-medium"
          >
            <span className="px-3.5 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/25">
              Gaya • Patna • Bodh Gaya
            </span>
            <span className="hidden sm:inline text-[#FFCB56]">•</span>
            <span className="px-3.5 py-1.5 bg-[#FF933E]/30 backdrop-blur-md rounded-full border border-[#FFCB56]/60 text-[#FFE9A9]">
              Dubai Destination Hub
            </span>
            <span className="hidden sm:inline text-[#FFCB56]">•</span>
            <span className="px-3.5 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/25">
              AAFT Alumnus Direction
            </span>
          </motion.div>

          {/* Floating CTA Buttons Over Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-3"
          >
            <button
              onClick={onOpenAvailability}
              className="px-8 py-3.5 bg-[#FF933E] hover:bg-[#ff8425] text-white rounded-none border border-[#FFCB56] text-xs uppercase tracking-[0.24em] font-semibold shadow-[0_0_25px_rgba(255,147,62,0.6)] transition-all cursor-pointer active:scale-95 flex items-center gap-2 group"
            >
              <span>Reserve Your Wedding Date</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('portfolio');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-white/20 hover:bg-white/30 text-white backdrop-blur-md text-xs uppercase tracking-[0.24em] font-semibold border border-white/40 transition-all cursor-pointer shadow-lg"
            >
              Explore Royal Gallery
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/70 pointer-events-none z-20">
          <span className="text-[9px] uppercase tracking-[0.3em] font-light">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#FFCB56]" />
        </div>
      </section>

      {/* =========================================================================
          STORY & ATELIER PHILOSOPHY SECTION (WISE COMBINATION OF PORTRAIT & LANDSCAPE)
      {/* =========================================================================
          REDESIGNED: ATELIER HERITAGE & SIGNATURE MASTERPIECE SECTION
          Featuring signature.jpg, ambient backlights, and strict photo/video distinction
          ========================================================================= */}
      <section className="relative w-full py-20 sm:py-28 bg-[#FFFDF9] px-5 sm:px-8 lg:px-14 border-t border-[#FFCB56]/30 overflow-hidden">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Narrative (Content carefully crafted from signature.jpg visual analysis) */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-[2px] bg-[#FF933E]" />
              <span className="text-xs uppercase tracking-[0.28em] font-bold text-[#FF933E]">
                Atelier Heritage &amp; Vision
              </span>
            </div>

            <h2 className="font-headline text-3xl sm:text-5xl text-[#241912] font-light leading-tight">
              We Don&apos;t Just Shoot Weddings. <br />
              <span
                className="font-normal text-[#FF933E]"
                style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Pinyon Script', 'Apple Chancery', Georgia, serif" }}
              >
                We Preserve Sacred Dynasties.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#594233] leading-relaxed font-light">
              Grounded in the sacred heritage of Gaya and trusted across the palatial wedding circuits of Bihar and Dubai, The Royal Films approaches wedding cinema not as an ordinary event, but as an heirloom royal chronicle.
            </p>

            {/* Analysis of signature.jpg in narrative form */}
            <div className="clay-card p-5 sm:p-6 bg-[#FFF8EE] border border-[#FFCB56]/40 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF933E]">
                <span>The Royal Signature Shringaar</span>
              </div>
              <p className="text-xs sm:text-sm text-[#594233] leading-relaxed font-light">
                Observed in quiet contemplation: the bride adorned in hand-stitched crimson velvet, adorned with ancestral Polki jewels, traditional red chooda, and holding a solitary scarlet blossom in serene prayer. Every fold of silk, delicate mehendi flourish, and quiet prayer is preserved with reverence.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-[#241912] font-semibold">
                <span className="clay-pill px-3 py-1 bg-white border border-[#FFCB56]/60 shadow-xs">
                  Crimson Velvet &amp; Zardozi
                </span>
                <span className="clay-pill px-3 py-1 bg-white border border-[#FFCB56]/60 shadow-xs">
                  Polki Maang Tikka &amp; Nath
                </span>
                <span className="clay-pill px-3 py-1 bg-white border border-[#FFCB56]/60 shadow-xs">
                  Sacred Chooda &amp; Mehendi
                </span>
              </div>
            </div>

            {/* Cursive Highlight Quote */}
            <blockquote className="p-5 bg-[#FFE9A9]/35 border-l-4 border-[#FF933E] rounded-r-xl">
              <p
                className="text-xl sm:text-2xl text-[#241912] leading-snug"
                style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Pinyon Script', 'Apple Chancery', Georgia, serif" }}
              >
                &ldquo;Behind every grand ritual is a quiet prayer, an auspicious blossom, and a stolen smile across the sacred fire. That is where eternity lives.&rdquo;
              </p>
            </blockquote>

            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="flex flex-col p-4 bg-[#FFF8EE] border border-[#FFCB56]/40 rounded-xl shadow-sm text-center">
                <span className="font-headline text-2xl sm:text-3xl font-bold text-[#FF933E]">420+</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#594233] font-semibold mt-1">Weddings Filmed</span>
              </div>
              <div className="flex flex-col p-4 bg-[#FFF8EE] border border-[#FFCB56]/40 rounded-xl shadow-sm text-center">
                <span className="font-headline text-2xl sm:text-3xl font-bold text-[#FF933E]">4K HDR</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#594233] font-semibold mt-1">Master Cinema</span>
              </div>
              <div className="flex flex-col p-4 bg-[#FFF8EE] border border-[#FFCB56]/40 rounded-xl shadow-sm text-center">
                <span className="font-headline text-2xl sm:text-3xl font-bold text-[#73A5CA]">Dubai</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#594233] font-semibold mt-1">Global Coverage</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Exhibition: signature.jpg + Ambient Backlights + Photo/Video Pairing */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
            {/* Signature Portrait Masterpiece Card with Ambient Halo Light */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sm:col-span-7 relative group select-none"
            >
              {/* AMBIENT LIGHT HALO BEHIND PHOTO (Rich Honey Gold & Crimson Glow) */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#FF933E]/40 via-[#FFCB56]/30 to-[#C41E3A]/25 rounded-3xl blur-2xl sm:blur-3xl opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" />

              {/* Photo Box: Face completely visible, no cutting of bride's face or crown */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FFCB56] bg-[#120E0A]">
                <Image
                  src="/assets/signature.jpg"
                  alt="The Royal Films Signature Royal Bride - Crimson Velvet & Scarlet Blossom"
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#FFCB56]/60 text-[10px] uppercase tracking-wider font-bold text-[#FFE9A9] shadow-sm flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#FFCB56]" />
                    <span>Signature Masterpiece</span>
                  </span>
                </div>

                {/* Bottom Photo Caption matching actual visual */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span className="text-[10px] uppercase tracking-widest text-[#FFCB56] font-semibold">
                    Editorial Bridal Portrait
                  </span>
                  <h4 className="font-headline text-base sm:text-lg font-bold leading-tight mt-0.5 text-[#FFFDF9]">
                    The Serenity of Royal Shringaar
                  </h4>
                  <p className="text-[11px] text-[#FFE9A9]/80 line-clamp-2 mt-1 font-light">
                    Crimson velvet, Polki maang tikka, traditional chooda, and solitary scarlet blossom.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stacked Side Elements: Real Photo & Real Video Card (Both with Ambient Light) */}
            <div className="sm:col-span-5 flex flex-col gap-5 sm:gap-6">
              {/* Photo Card: Sacred Pheras Still (Faces not cut) */}
              <motion.div
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative group select-none"
              >
                {/* Ambient Backlight Glow */}
                <div className="absolute -inset-3 bg-gradient-to-br from-[#FFCB56]/30 via-[#FF933E]/20 to-transparent rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" />

                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border-2 border-[#FFCB56]/50 bg-black group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={TRF_LANDSCAPE[0].src}
                    alt="Sacred Pheras & Royal Mandap Ceremony Still"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[9px] uppercase tracking-wider font-semibold text-[#FFE9A9] flex items-center gap-1">
                      <Camera className="w-2.5 h-2.5 text-[#FFCB56]" />
                      <span>Fine Art Still</span>
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <span className="text-[9px] uppercase tracking-widest text-[#FFCB56] font-semibold">
                      Authentic Photo
                    </span>
                    <h5 className="font-headline text-xs sm:text-sm font-semibold leading-tight text-[#FFFDF9]">
                      Sacred Pheras &amp; Mandap
                    </h5>
                  </div>
                </div>
              </motion.div>

              {/* Video Card: Real Cinema Video Reel (Plays on hover) */}
              <motion.div
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative group select-none"
              >
                {/* Ambient Backlight Glow */}
                <div className="absolute -inset-3 bg-gradient-to-br from-[#73A5CA]/30 via-[#FF933E]/25 to-transparent rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" />

                <a
                  href="https://www.instagram.com/reel/DYUk0fbpr85/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video) video.play().catch(() => {});
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video) {
                      video.pause();
                      video.currentTime = 0;
                    }
                  }}
                  className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border-2 border-[#FFCB56]/50 bg-black block group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                >
                  <video
                    src="/assets/reels/DYUk0fbpr85.mp4"
                    poster="/assets/reels/DYUk0fbpr85.jpg"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[9px] uppercase tracking-wider font-semibold text-[#FFE9A9] flex items-center gap-1">
                      <Film className="w-2.5 h-2.5 text-[#FF933E]" />
                      <span>Cinema Video Reel</span>
                    </span>
                    <Instagram className="w-3.5 h-3.5 text-[#FFCB56]" />
                  </div>

                  {/* Center Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                    <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-[#FFCB56] flex items-center justify-center text-white shadow-lg">
                      <Play className="w-4 h-4 ml-0.5 text-[#FFE9A9] fill-[#FFE9A9]" />
                    </div>
                  </div>

                  {/* Bottom Video Caption */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <span className="text-[9px] uppercase tracking-widest text-[#FF933E] font-semibold">
                      Live Video Link
                    </span>
                    <h5 className="font-headline text-xs sm:text-sm font-semibold leading-tight text-[#FFFDF9]">
                      Grand Vows &amp; Pheras Teaser
                    </h5>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED GALLERY / PORTFOLIO SHOWCASE (AUTHENTIC TRF IMAGES, WISE ORIENTATIONS)
          ========================================================================= */}
      <section
        className="relative w-full py-20 sm:py-28 bg-[#FFF8EE] px-5 sm:px-8 lg:px-14 border-t border-[#FFCB56]/30 overflow-hidden"
        id="portfolio"
      >
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#FFCB56]/30 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-2"
            >
              <span className="text-xs text-[#FF933E] uppercase tracking-[0.25em] font-bold">
                Authentic Royal Archive
              </span>
              <h2 className="font-headline text-3xl sm:text-5xl text-[#241912] font-light leading-tight">
                Captured In Gold &amp; Motion. <br />
                <span
                  className="font-normal text-[#FF933E]"
                  style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Pinyon Script', 'Apple Chancery', Georgia, serif" }}
                >
                  Preserving Sacred Dynasties.
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#594233] max-w-xl font-light">
                Real wedding films, bridal portraits, and pre-wedding stories from Gaya, Patna, and Dubai.
              </p>
            </motion.div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                { id: 'all', label: 'All Stories' },
                { id: 'wedding', label: 'Wedding & Rituals' },
                { id: 'prewedding', label: 'Pre-Wedding & Dubai' },
                { id: 'haldi', label: 'Haldi & Sangeet' },
                { id: 'reception', label: 'Receptions' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`clay-pill px-4 py-2 text-xs uppercase tracking-[0.18em] font-semibold transition-all cursor-pointer ${
                    activeFilter === filter.id
                      ? 'bg-[#FF933E] text-white border border-[#FFCB56] shadow-[0_4px_14px_rgba(255,147,62,0.35)]'
                      : 'bg-white/80 border border-[#FFCB56]/40 text-[#594233] hover:bg-[#FFE9A9]/50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid - Responsive Wise Placement (No popup on photo click) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPortfolio.map((item, idx) => {
              const isLandscape = item.orientation === 'landscape';
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.06 }}
                  className="clay-card group relative flex flex-col overflow-hidden bg-white border border-[#FFCB56]/40 select-none"
                >
                  {/* Image Container with Proper Aspect Ratio */}
                  <div className={`relative overflow-hidden bg-stone-900 ${isLandscape ? 'aspect-video' : 'aspect-[4/5]'}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                    {/* Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-md text-[#FF933E] text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5 border border-[#FFCB56] shadow-sm rounded-full">
                      {item.badgeType === 'video' ? (
                        <Film className="w-3.5 h-3.5 text-[#FF933E]" />
                      ) : (
                        <Camera className="w-3.5 h-3.5 text-[#73A5CA]" />
                      )}
                      <span>{item.badge}</span>
                    </div>

                    {/* Play Button for Video Items */}
                    {item.badgeType === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#FF933E] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 ml-0.5 fill-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Caption & Metadata */}
                  <div className="p-5 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[#FF933E] text-[11px] uppercase tracking-widest font-bold">
                      <span>{item.location.split('•')[0]}</span>
                      <span className="text-[#73A5CA] font-semibold">
                        {item.location.split('•')[1] || item.category}
                      </span>
                    </div>
                    <h3 className="font-headline text-lg sm:text-xl text-[#241912] group-hover:text-[#FF933E] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#594233] line-clamp-2 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenAvailability}
              className="clay-button px-8 py-3.5 bg-[#FF933E] text-white hover:bg-[#ff8425] text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-[0_4px_18px_rgba(255,147,62,0.4)] cursor-pointer"
            >
              Check Date Availability
            </button>
            <Link
              href="/gallery"
              className="clay-button px-8 py-3.5 bg-white text-[#FF933E] hover:bg-[#FFE9A9]/40 text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-sm border border-[#FFCB56] cursor-pointer"
            >
              Explore Full Dedicated Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NEW SECTION: INSTAGRAM REELS & FEED HUB (@the.royal.films)
          Direct link, video playback, follow badges, and real photo feed cards
          ========================================================================= */}
      <section className="relative w-full py-20 sm:py-28 bg-[#FFFDF9] px-5 sm:px-8 lg:px-14 border-t border-[#FFCB56]/30 overflow-hidden">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Instagram Header with Profile Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 sm:p-8 bg-[#FFF8EE] rounded-2xl border border-[#FFCB56]/40 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-[#FFCB56] via-[#FF933E] to-[#73A5CA] shadow-md shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-1 flex items-center justify-center">
                  <Image
                    src="/assets/golden-royal-films-emblem.png"
                    alt="The Royal Films Instagram"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-headline text-xl sm:text-2xl font-bold text-[#241912]">
                    {INSTAGRAM_HANDLE}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#73A5CA]" />
                </div>
                <span
                  className="text-lg sm:text-xl text-[#FF933E]"
                  style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Pinyon Script', 'Apple Chancery', Georgia, serif" }}
                >
                  The Royal Films • Cinema &amp; Photography
                </span>
                <span className="text-xs text-[#594233] mt-0.5">
                  {INSTAGRAM_FOLLOWER_COUNT} Followers • 420+ Cinematic Stories • Gaya, Bihar &amp; Dubai
                </span>
              </div>
            </div>

            {/* Direct Link to Instagram */}
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-[#FF933E] to-[#FFCB56] hover:from-[#ff8425] hover:to-[#f0be4b] text-white font-semibold text-xs uppercase tracking-[0.2em] rounded-full shadow-[0_4px_16px_rgba(255,147,62,0.35)] flex items-center gap-2 transition-transform hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* =========================================================================
              FEATURE SPOTLIGHT: FOUNDER NEERAJ SINGH AWARD REEL
              Portrait orientation with minimal hover-to-play card & prestige panel
              ========================================================================= */}
          <div className="p-6 sm:p-10 bg-[#FFF8EE] rounded-3xl border border-[#FFCB56]/50 shadow-lg relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#FFCB56]/20 to-transparent blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-14">
              {/* Left: Minimal Hover-to-Play Award Reel Card */}
              <div className="w-full max-w-[280px] sm:max-w-[320px] shrink-0">
                <MinimalReelBox
                  reel={SIGNATURE_AWARD_REEL}
                  aspectClass="aspect-[9/16]"
                  className="ring-4 ring-[#FFCB56]/40 shadow-2xl"
                />
              </div>

              {/* Right: Prestige Acclaim Card for Founder Neeraj Singh */}
              <div className="flex flex-col gap-4 text-[#241912] flex-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-[#FF933E]/15 border border-[#FF933E]/50 text-[#FF933E] text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] flex items-center gap-1.5 shadow-sm">
                    <Award className="w-4 h-4 text-[#FF933E]" />
                    <span>Founder Felicitation &amp; Award</span>
                  </span>
                </div>

                <div className="flex flex-col">
                  <h3 className="font-headline text-2xl sm:text-4xl font-bold text-[#241912] leading-tight">
                    Neeraj Singh Honored for Cinematic Excellence
                  </h3>
                  <span
                    className="text-xl sm:text-2xl text-[#FF933E] mt-1 drop-shadow-sm"
                    style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Pinyon Script', Georgia, serif" }}
                  >
                    Founder &amp; Principal Cinematographer • The Royal Films
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#594233] leading-relaxed font-light">
                  Founder Neeraj Singh receiving the prestigious recognition for elevating wedding cinematography across Bihar and premier destination horizons. Trained with an AAFT cinema foundation, Neeraj leads our atelier with a signature cinematic eye—capturing authentic soul, sacred Vedic rituals, and royal grandeur on 4K Sony Cinema rigs.
                </p>

                {/* Accolades Pills */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs">
                  <span className="clay-pill px-3.5 py-1.5 bg-white border border-[#FFCB56] text-[#241912] font-semibold text-[11px] shadow-xs">
                    National Film Felicitation
                  </span>
                  <span className="clay-pill px-3.5 py-1.5 bg-white border border-[#FFCB56] text-[#241912] font-semibold text-[11px] shadow-xs">
                    AAFT Film Direction Alumnus
                  </span>
                  <span className="clay-pill px-3.5 py-1.5 bg-white border border-[#FFCB56] text-[#241912] font-semibold text-[11px] shadow-xs">
                    Dubai Destination Certified
                  </span>
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  <a
                    href={SIGNATURE_AWARD_REEL.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#FF933E] hover:bg-[#ff8425] text-white font-semibold text-xs uppercase tracking-[0.2em] rounded-full shadow-[0_4px_16px_rgba(255,147,62,0.35)] transition-all hover:scale-105 active:scale-95"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Watch Award Reel on Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              LANDSCAPE CINEMA REELS (4 Widescreen 16:9 Minimal Boxes)
              Plays on hover, slightly enlarges on hover
              ========================================================================= */}
          <div className="flex flex-col gap-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#FFCB56]/30 pb-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#FF933E]">
                  Widescreen 16:9 Showcase
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#241912]">
                  Landscape Cinema Reels
                </h3>
              </div>
              <span
                className="text-lg sm:text-xl text-[#FF933E]"
                style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Pinyon Script', Georgia, serif" }}
              >
                Widescreen Grandeur &amp; Regal Vows
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {LANDSCAPE_REELS.map((reel) => (
                <MinimalReelBox key={reel.id} reel={reel} aspectClass="aspect-[16/10]" />
              ))}
            </div>
          </div>

          {/* =========================================================================
              PORTRAIT REELS (4 Vertical 9:16 Minimal Boxes)
              Plays on hover, slightly enlarges on hover
              ========================================================================= */}
          <div className="flex flex-col gap-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#FFCB56]/30 pb-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#FF933E]">
                  Vertical 9:16 Cinema
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#241912]">
                  Portrait Stories &amp; Stills
                </h3>
              </div>
              <span
                className="text-lg sm:text-xl text-[#FF933E]"
                style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Pinyon Script', Georgia, serif" }}
              >
                Intimate Rituals &amp; Bridal Elegance
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {PORTRAIT_REELS.map((reel) => (
                <MinimalReelBox key={reel.id} reel={reel} aspectClass="aspect-[9/16]" />
              ))}
            </div>
          </div>

          {/* =========================================================================
              INSTAGRAM PHOTO FEED (6 Authentic TRF Visuals)
              ========================================================================= */}
          <div className="flex flex-col gap-6 pt-6">
            <div className="flex items-center justify-between border-b border-[#FFCB56]/30 pb-3">
              <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#594233]">
                Latest Visual Stills from Feed
              </h4>
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#FF933E] hover:text-[#ff8425] flex items-center gap-1 uppercase tracking-wider"
              >
                <span>View All on {INSTAGRAM_HANDLE}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {INSTAGRAM_POSTS.map((post) => (
                <a
                  key={post.id}
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-300 bg-stone-900 border border-[#FFCB56]/30 hover:scale-105"
                >
                  <Image
                    src={post.image}
                    alt={post.caption}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                  {/* Hover Overlay with Likes */}
                  <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white p-2 text-center pointer-events-none">
                    <span className="flex items-center gap-1 text-[#FFCB56] text-xs font-semibold">
                      <Heart className="w-3.5 h-3.5 fill-[#FFCB56]" />
                      {post.likes}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#FFE9A9]">
                      View Post ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WORDS FROM FAMILIES & TESTIMONIALS
          ========================================================================= */}
      <section className="relative w-full py-20 sm:py-28 bg-[#FFF8EE] px-5 sm:px-8 lg:px-14 border-t border-[#FFCB56]/30 overflow-hidden">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#FFCB56]/30 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-2"
            >
              <span className="text-xs text-[#FF933E] uppercase tracking-[0.25em] font-bold">
                Verified Love Stories
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#241912] font-light">
                Words From Royal Families
              </h2>
              <p className="text-xs sm:text-sm text-[#594233] max-w-xl font-light">
                Couples and parents who trusted The Royal Films to document their family memories.
              </p>
            </motion.div>

            {/* Google Rating Badge */}
            <div className="p-4 px-6 bg-white rounded-xl flex items-center gap-4 shadow-sm border border-[#FFCB56]/40">
              <div className="w-11 h-11 rounded-full bg-[#FF933E]/15 text-[#FF933E] flex items-center justify-center font-headline text-lg font-bold border border-[#FF933E]/30">
                4.9
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[#241912] uppercase tracking-wider">
                  Client Rating
                </span>
                <span className="text-[11px] text-[#594233]">
                  108+ Google Verified Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-7 bg-white rounded-2xl shadow-sm border border-[#FFCB56]/40 flex flex-col justify-between gap-6"
            >
              <p
                className="text-2xl sm:text-3xl text-[#FF933E] leading-relaxed"
                style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Pinyon Script', 'Apple Chancery', Georgia, serif" }}
              >
                &ldquo;They documented each sacred ritual with unmatched patience. Looking at our wedding film brought back every emotion of that evening. Truly royal.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#FFE9A9]">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-[#FFCB56]">
                  <Image
                    src={TRF_PORTRAIT[1].src}
                    alt="Pooja & Rohit"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#241912]">Pooja &amp; Rohit</span>
                  <span className="text-xs text-[#FF933E]">Grand Wedding in Gaya</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-7 bg-white rounded-2xl shadow-sm border border-[#FFCB56]/40 flex flex-col justify-between gap-6"
            >
              <p
                className="text-2xl sm:text-3xl text-[#FF933E] leading-relaxed"
                style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Pinyon Script', 'Apple Chancery', Georgia, serif" }}
              >
                &ldquo;We were shy in front of cameras, but their crew made us laugh naturally. Our pre-wedding teaser in Dubai looks straight out of a Bollywood cinema!&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#FFE9A9]">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-[#FFCB56]">
                  <Image
                    src={TRF_PORTRAIT[4].src}
                    alt="Anjali & Siddharth"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#241912]">Anjali &amp; Siddharth</span>
                  <span className="text-xs text-[#73A5CA]">Dubai Destination &amp; Reception</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-7 bg-white rounded-2xl shadow-sm border border-[#FFCB56]/40 flex flex-col justify-between gap-6"
            >
              <p
                className="text-2xl sm:text-3xl text-[#FF933E] leading-relaxed"
                style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Pinyon Script', 'Apple Chancery', Georgia, serif" }}
              >
                &ldquo;My parents loved the traditional family portraits and how respectfully the crew handled all rituals. The coffee table album is our family heirloom.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#FFE9A9]">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-[#FFCB56]">
                  <Image
                    src={TRF_PORTRAIT[0].src}
                    alt="Vikram Family"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#241912]">Vikram&apos;s Family</span>
                  <span className="text-xs text-[#FF933E]">3-Day Royal Celebrations, Patna</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION
          ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 bg-[#FFFDF9] px-5 sm:px-8 lg:px-14 border-t border-[#FFCB56]/30 overflow-hidden">
        <InteractiveGrid />
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center items-center">
            <span className="text-xs text-[#FF933E] uppercase tracking-[0.25em] font-bold">
              Clear &amp; Transparent
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#241912] font-light">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#FFCB56]/40"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left text-[#241912] text-sm sm:text-base font-semibold cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#FF933E] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-[#594233] font-light leading-relaxed border-t border-[#FFE9A9] pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ATELIER STUDIO HEADQUARTERS & GOOGLE MAPS SECTION
          ========================================================================= */}
      <section className="relative w-full py-20 sm:py-28 bg-[#FFF8EE] px-5 sm:px-8 lg:px-14 border-t border-[#FFCB56]/30 overflow-hidden" id="studio-map">
        <InteractiveGrid />
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#FFCB56]/30 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF933E]" />
                <span className="text-xs text-[#FF933E] uppercase tracking-[0.25em] font-bold">
                  Atelier Headquarters &amp; Studio
                </span>
              </div>
              <h2 className="font-headline text-3xl sm:text-5xl text-[#241912] font-light">
                Visit The Royal Films Studio
              </h2>
              <span
                className="text-xl sm:text-2xl text-[#FF933E]"
                style={{ fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Pinyon Script', Georgia, serif" }}
              >
                Gaya • Patna • Bodh Gaya • Dubai
              </span>
            </motion.div>

            {/* Quick Minimal Direction & WhatsApp Actions (NO number exposed) */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://maps.google.com/?q=Chhotki+Nawada,+Delha,+Gaya,+Bihar+823002"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#FF933E] hover:bg-[#ff8425] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-none border border-[#FFCB56] shadow-[0_4px_16px_rgba(255,147,62,0.35)] flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#FFE9A9]" />
                <span>Open in Google Maps</span>
              </a>
              <a
                href="https://wa.me/918210351286?text=Hello%20The%20Royal%20Films%2C%20I%20would%20like%20to%20visit%20the%20Gaya%20studio."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-none border border-[#25D366] shadow-[0_4px_16px_rgba(37,211,102,0.35)] flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MinimalWhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Appointment</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Google Map Embedded Iframe Card */}
            <motion.div
              initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FFCB56]/50 bg-black min-h-[380px] sm:min-h-[460px] group"
            >
              {/* Ambient backlight glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF933E]/25 via-[#FFCB56]/20 to-[#73A5CA]/20 rounded-3xl blur-2xl pointer-events-none -z-10" />
              
              <iframe
                title="The Royal Films Atelier Location"
                src="https://maps.google.com/maps?q=Chhotki+Nawada,+Delha,+Gaya,+Bihar+823002&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[380px] sm:min-h-[460px] border-0 filter contrast-[1.05] brightness-[0.98]"
                loading="lazy"
                allowFullScreen
              />
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto px-4 py-3 bg-white/95 backdrop-blur-md rounded-xl border border-[#FFCB56] shadow-lg flex items-center gap-3 text-xs text-[#241912] pointer-events-none">
                <MapPin className="w-4 h-4 text-[#FF933E] shrink-0" />
                <div>
                  <p className="font-bold">The Royal Films Atelier</p>
                  <p className="text-[11px] text-[#594233]">Chhotki Nawada, Delha, Gaya, Bihar 823002</p>
                </div>
              </div>
            </motion.div>

            {/* Studio Info Card with Minimal Icons (No raw numbers) */}
            <motion.div
              initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 p-7 sm:p-8 bg-white rounded-3xl shadow-xl border border-[#FFCB56]/50 flex flex-col justify-between gap-6 relative overflow-hidden"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF933E]/15 border border-[#FFCB56] flex items-center justify-center text-[#FF933E] shrink-0 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg sm:text-xl font-bold text-[#241912]">
                      Gaya Atelier Studio
                    </h3>
                    <p className="text-xs text-[#FF933E] font-semibold tracking-wider uppercase">
                      Primary Headquarters
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 text-xs text-[#594233] pt-2">
                  <div className="p-3.5 bg-[#FFF8EE] rounded-xl border border-[#FFCB56]/30">
                    <p className="font-bold text-[#241912] mb-1">Address:</p>
                    <p className="leading-relaxed">
                      Chhotki Nawada, Delha, Gaya, Bihar 823002 <br />
                      <span className="text-[11px] text-[#73A5CA] font-medium">Near Delha Post Office</span>
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#FFF8EE] rounded-xl border border-[#FFCB56]/30">
                    <p className="font-bold text-[#241912] mb-1">Consultation Hours:</p>
                    <p className="leading-relaxed">
                      Monday – Sunday <br />
                      10:00 AM – 8:00 PM IST <br />
                      <span className="text-[11px] text-[#FF933E] font-medium italic">By Advance Appointment Only</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Minimal Action Buttons (NO raw numbers exposed) */}
              <div className="flex flex-col gap-3 pt-3 border-t border-[#FFE9A9]">
                <p className="text-[11px] uppercase tracking-wider font-semibold text-[#594233]">
                  Direct Atelier Assistance:
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href="tel:+918210351286"
                    className="py-3 px-3 bg-[#FF933E] hover:bg-[#ff8425] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    aria-label="Direct Phone Concierge"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Concierge</span>
                  </a>
                  <a
                    href="https://wa.me/918210351286?text=Hello%20The%20Royal%20Films%2C%20I%20would%20like%20to%20inquire%20about%20wedding%20dates."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    aria-label="WhatsApp Concierge"
                  >
                    <MinimalWhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOOKING & DATE RESERVATION FORM
          ========================================================================= */}
      <section
        className="relative w-full py-20 sm:py-28 bg-[#FFFDF9] px-5 sm:px-8 lg:px-14 border-t border-[#FFCB56]/30 overflow-hidden"
        id="enquiry"
      >
        <InteractiveGrid />
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl border border-[#FFCB56]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Prompt Info */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-3">
                <span className="text-xs text-[#FF933E] uppercase tracking-[0.25em] font-bold">
                  Reserve Your Date
                </span>
                <h2 className="font-headline text-3xl text-[#241912] font-light">
                  Tell Us About Your Wedding
                </h2>
                <p className="text-xs sm:text-sm text-[#594233] font-light leading-relaxed">
                  We accept a strictly limited number of royal weddings each calendar season to preserve cinematic quality and personalized dedication. Share your wedding dates below.
                </p>
              </div>

              {/* Direct Atelier Minimal Icon Contacts (No Raw Number Exposed) */}
              <div className="flex flex-col gap-3 text-xs sm:text-sm text-[#594233] pt-4 border-t border-[#FFE9A9]">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#594233]">
                    Instant Concierge:
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="tel:+918210351286"
                    className="flex items-center gap-2 px-3.5 py-2 bg-[#FFF8EE] border border-[#FFCB56] text-[#FF933E] hover:bg-[#FF933E] hover:text-white transition-all rounded-lg text-xs font-semibold uppercase tracking-wider shadow-xs cursor-pointer group"
                    aria-label="Call Atelier Direct"
                  >
                    <Phone className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                    <span>Call Concierge</span>
                  </a>
                  <a
                    href="https://wa.me/918210351286?text=Hello%20The%20Royal%20Films%2C%20I%20would%20like%20to%20inquire%20about%20wedding%20dates."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 bg-[#25D366]/15 border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all rounded-lg text-xs font-semibold uppercase tracking-wider shadow-xs cursor-pointer group"
                    aria-label="WhatsApp Concierge"
                  >
                    <MinimalWhatsAppIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <span className="w-8 h-8 rounded-full bg-[#FF933E]/10 text-[#FF933E] flex items-center justify-center shrink-0 border border-[#FF933E]/30">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span>
                    Direct:{' '}
                    <a
                      className="text-[#FF933E] font-bold hover:underline"
                      href="mailto:contact@theroyalfilms.com"
                    >
                      contact@theroyalfilms.com
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#FF933E]/10 text-[#FF933E] flex items-center justify-center shrink-0 border border-[#FF933E]/30">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span>Chhotki Nawada, Delha, Gaya, Bihar 823002</span>
                </div>
              </div>
            </div>

            {/* Right Light Luxury Form */}
            <div className="lg:col-span-7 bg-[#FFFDF9] p-6 sm:p-8 rounded-xl shadow-sm border border-[#FFCB56]/30">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center p-8 gap-4 bg-[#FFE9A9]/20 rounded-lg border border-[#FF933E]/40">
                  <CheckCircle2 className="w-12 h-12 text-[#FF933E]" />
                  <h3 className="font-headline text-2xl text-[#241912]">
                    Enquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#594233] leading-relaxed font-light">
                    Thank you. We have received your celebration details and will contact you promptly on WhatsApp or phone to check master calendar availability.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] text-[#FF933E] uppercase tracking-wider font-bold">
                        Your Name *
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 bg-white rounded text-[#241912] placeholder:text-[#594233]/40 focus:outline-none focus:ring-1 focus:ring-[#FF933E] text-xs sm:text-sm border border-[#FFCB56]/50"
                        placeholder="e.g. Aditi Sharma"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] text-[#FF933E] uppercase tracking-wider font-bold">
                        Phone / WhatsApp *
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 bg-white rounded text-[#241912] placeholder:text-[#594233]/40 focus:outline-none focus:ring-1 focus:ring-[#FF933E] text-xs sm:text-sm border border-[#FFCB56]/50"
                        placeholder="+91 82103 51286"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] text-[#FF933E] uppercase tracking-wider font-bold">
                        Event Date *
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 bg-white rounded text-[#241912] focus:outline-none focus:ring-1 focus:ring-[#FF933E] text-xs sm:text-sm border border-[#FFCB56]/50"
                        required
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] text-[#FF933E] uppercase tracking-wider font-bold">
                        Venue / City *
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 bg-white rounded text-[#241912] placeholder:text-[#594233]/40 focus:outline-none focus:ring-1 focus:ring-[#FF933E] text-xs sm:text-sm border border-[#FFCB56]/50"
                        placeholder="e.g. Gaya, Patna, Bodh Gaya, Dubai"
                        required
                        type="text"
                        value={formData.venue}
                        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] text-[#FF933E] uppercase tracking-wider font-bold">
                      Services Needed *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <label
                        className={`flex items-center gap-2 p-2.5 rounded cursor-pointer text-xs transition-colors border ${
                          formData.service === 'both'
                            ? 'bg-[#FFE9A9] border-[#FF933E] text-[#241912] font-bold'
                            : 'bg-white border-[#FFCB56]/40 hover:bg-[#FFE9A9]/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value="both"
                          checked={formData.service === 'both'}
                          onChange={() => setFormData({ ...formData, service: 'both' })}
                          className="accent-[#FF933E]"
                        />
                        <span>Photo &amp; Film</span>
                      </label>

                      <label
                        className={`flex items-center gap-2 p-2.5 rounded cursor-pointer text-xs transition-colors border ${
                          formData.service === 'photo'
                            ? 'bg-[#FFE9A9] border-[#FF933E] text-[#241912] font-bold'
                            : 'bg-white border-[#FFCB56]/40 hover:bg-[#FFE9A9]/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value="photo"
                          checked={formData.service === 'photo'}
                          onChange={() => setFormData({ ...formData, service: 'photo' })}
                          className="accent-[#FF933E]"
                        />
                        <span>Photo Only</span>
                      </label>

                      <label
                        className={`flex items-center gap-2 p-2.5 rounded cursor-pointer text-xs transition-colors border ${
                          formData.service === 'film'
                            ? 'bg-[#FFE9A9] border-[#FF933E] text-[#241912] font-bold'
                            : 'bg-white border-[#FFCB56]/40 hover:bg-[#FFE9A9]/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value="film"
                          checked={formData.service === 'film'}
                          onChange={() => setFormData({ ...formData, service: 'film' })}
                          className="accent-[#FF933E]"
                        />
                        <span>Film Only</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] text-[#FF933E] uppercase tracking-wider font-bold">
                      Functions &amp; Details
                    </label>
                    <textarea
                      className="w-full px-3.5 py-2.5 bg-white rounded text-[#241912] placeholder:text-[#594233]/40 focus:outline-none focus:ring-1 focus:ring-[#FF933E] text-xs sm:text-sm border border-[#FFCB56]/50"
                      placeholder="Tell us about the planned celebrations (Haldi, Mehendi, Sangeet, Wedding, Reception) and your thoughts..."
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    />
                  </div>

                  <button
                    className="w-full py-3.5 bg-[#FF933E] text-white hover:bg-[#ff8425] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-[0_4px_18px_rgba(255,147,62,0.4)] mt-1 cursor-pointer"
                    type="submit"
                  >
                    Check Master Availability
                  </button>

                  <p className="text-[11px] text-[#594233] text-center font-light">
                    We respond within hours on WhatsApp or direct phone.
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
