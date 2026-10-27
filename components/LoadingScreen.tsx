'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import RoyalLogo from '@/components/RoyalLogo';

interface LoadingScreenProps {
  onComplete?: () => void;
  minDuration?: number;
}

export default function LoadingScreen({ onComplete, minDuration = 1600 }: LoadingScreenProps) {
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
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070707] dark:bg-[#070707] light:bg-[#FAF7F2]"
        >
          {/* Subtle Ambient Golden Radial Beam */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.9, 1.25, 1], opacity: [0.15, 0.45, 0.25] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[420px] h-[420px] rounded-full bg-gradient-radial from-[#e8c17a]/30 via-[#d60000]/15 to-transparent blur-3xl pointer-events-none"
          />

          {/* Big Cinematic Minimalist Logo */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.82, opacity: 0, filter: 'blur(10px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center p-6"
            >
              <RoyalLogo size="lg" />
            </motion.div>

            {/* Elegant Minimalist Progress Filament */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 140, opacity: 0.9 }}
              transition={{ delay: 0.3, duration: 1.2, ease: 'easeInOut' }}
              className="h-[1.5px] bg-gradient-to-r from-transparent via-[#B38842] dark:via-[#e8c17a] to-transparent mt-4"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
