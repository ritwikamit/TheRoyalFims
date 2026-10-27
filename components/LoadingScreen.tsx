'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import RoyalLogo from '@/components/RoyalLogo';

interface LoadingScreenProps {
  onComplete?: () => void;
  minDuration?: number;
}

export default function LoadingScreen({ onComplete, minDuration = 1200 }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, minDuration);
    return () => clearTimeout(timer);
  }, [minDuration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#73A5CA] overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow with Palette Gold & Cream */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.9, 1.25, 1], opacity: [0.35, 0.65, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[520px] h-[520px] rounded-full bg-radial from-[#FFCB56]/35 via-[#FFE9A9]/20 to-transparent blur-3xl pointer-events-none"
          />

          {/* Floating Subtle Golden Sparks */}
          <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-[#FFCB56] shadow-[0_0_12px_#FFCB56] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-[#FFE9A9] shadow-[0_0_12px_#FFE9A9] animate-pulse [animation-delay:1s]" />

          {/* Big Golden Laurel Emblem Logo with Palette Blue Theme */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, filter: 'blur(10px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center p-6"
            >
              <RoyalLogo size="xl" showSubtitle={true} variant="stacked" theme="blue" />
            </motion.div>

            {/* Elegant Golden Progress Filament */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 160, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1.0, ease: 'easeInOut' }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#FFCB56] to-transparent mt-3 shadow-[0_0_12px_#FFCB56]"
            />

            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[#FFE9A9] text-[10px] uppercase tracking-[0.32em] font-semibold mt-3.5 drop-shadow-sm"
            >
              Curating Heirloom Cinema
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
