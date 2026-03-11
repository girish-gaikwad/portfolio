'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Laptop } from 'lucide-react';
import Image from 'next/image';

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Fast, intentional loading duration
    const timer = setTimeout(() => {
      setShow(false);
    }, 1200); 
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center select-none cursor-wait"
        >
          <div className="flex flex-col items-center justify-center relative z-10">
            {/* Logo Presentation - Clean, no artificial glow */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 mb-6"
            >
              <Image 
                src="/logos/gg.png" 
                alt="Girish Gaikwad Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Brand Name - High-end typography focus */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="text-center overflow-hidden"
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-[0.2em] uppercase mb-2">
                Girish Gaikwad
              </h1>
              <p className="text-[10px] sm:text-xs text-[#858585] tracking-widest uppercase font-mono">
                SDE & Creative Technologist
              </p>
            </motion.div>
          </div>

          {/* Razor-thin Minimalist Progress Line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1a1a1a]">
            <motion.div 
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} // Elegant Apple-style easing
            />
          </div>

          {/* Elegant Mobile Warning - Unobtrusive */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 flex sm:hidden items-center gap-2 text-[#666] text-[10px] tracking-widest uppercase font-sans"
          >
             <Laptop size={12} className="opacity-70" />
             <span>Desktop Experience Recommended</span>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}