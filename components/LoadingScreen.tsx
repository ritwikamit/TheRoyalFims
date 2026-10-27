'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import RoyalLogo from '@/components/RoyalLogo';

interface LoadingScreenProps {
  onComplete?: () => void;
  minDuration?: number;
}

export default function LoadingScreen({ onComplete, minDuration = 550 }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleReady = () => {
      // Allow progress line animation to complete gracefully before fadeout
      timer = setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, minDuration);
    };

    if (typeof window !== 'undefined' && document.readyState === 'complete') {
      handleReady();
    } else if (typeof window !== 'undefined') {
      window.addEventListener('load', handleReady, { once: true });
      // Fallback timer so it never blocks
      timer = setTimeout(handleReady, minDuration + 250);
      return () => {
        window.removeEventListener('load', handleReady);
        clearTimeout(timer);
      };
    }

    return () => clearTimeout(timer);
  }, [minDuration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#73A5CA] overflow-hidden pointer-events-none"
        >
          {/* Subtle Ambient Radial Glow with Palette Gold & Cream */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0.35 }}
            animate={{ scale: [0.95, 1.15, 1], opacity: [0.4, 0.6, 0.45] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[450px] h-[450px] rounded-full bg-radial from-[#FFCB56]/35 via-[#FFE9A9]/20 to-transparent blur-3xl"
          />

          {/* Big Golden Laurel Emblem Logo with Palette Blue Theme */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center p-4"
            >
              <RoyalLogo size="xl" showSubtitle={true} variant="stacked" theme="blue" />
            </motion.div>

            {/* Fast Elegant Golden Progress Filament */}
            <div className="w-44 h-[2.5px] bg-white/20 rounded-full overflow-hidden mt-3 shadow-inner">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#FFCB56] via-white to-[#FFCB56] shadow-[0_0_12px_#FFCB56]"
              />
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-[#FFE9A9] text-[10px] uppercase tracking-[0.32em] font-semibold mt-3 drop-shadow-sm"
            >
              Curating Heirloom Cinema
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
