'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import RoyalLogo from '@/components/RoyalLogo';

interface LoadingScreenProps {
  onComplete?: () => void;
  minDuration?: number;
}

export default function LoadingScreen({ onComplete, minDuration = 1400 }: LoadingScreenProps) {
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
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAF4ED] dark:bg-[#120E0A] transition-colors"
        >
          {/* Subtle Ambient Radial Glow with Brand Palette */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.9, 1.25, 1], opacity: [0.15, 0.45, 0.25] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[440px] h-[440px] rounded-full bg-radial from-[#E89B5B]/30 via-[#D46743]/15 to-transparent blur-3xl pointer-events-none"
          />

          {/* Big Cinematic Minimalist Logo */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, filter: 'blur(10px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center p-6"
            >
              <RoyalLogo size="xl" showSubtitle={true} variant="stacked" />
            </motion.div>

            {/* Elegant Minimalist Progress Filament */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 140, opacity: 0.95 }}
              transition={{ delay: 0.25, duration: 1.1, ease: 'easeInOut' }}
              className="h-[1.5px] bg-gradient-to-r from-transparent via-[#D46743] dark:via-[#E89B5B] to-transparent mt-3"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
