'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Laptop } from 'lucide-react';
import Image from 'next/image';

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Super fast boot sequence (1.5 seconds total)
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000); 
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#020202] flex flex-col items-center justify-center select-none cursor-wait overflow-hidden"
          onClick={() => setShow(false)}
        >
          {/* CyberGrid Background - Faint */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

          {/* Glitchy Logo Viewport */}
          <motion.div 
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="relative mb-6"
          >
            {/* Replace src with your actual logo path */}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32">
              {/* Backglow */}
              <div className="absolute inset-0 bg-[#00f0ff] blur-[20px] opacity-20 animate-pulse"></div>
              
              <Image 
                src="/logos/gg.png"
                alt="System Logo"
                fill
                className="object-contain drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]"
                priority
              />
            </div>
            
            {/* Targeting Brackets */}
            <div className="absolute -top-4 -left-4 w-3 h-3 border-t-2 border-l-2 border-[#00f0ff] opacity-50"></div>
            <div className="absolute -top-4 -right-4 w-3 h-3 border-t-2 border-r-2 border-[#00f0ff] opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-3 h-3 border-b-2 border-l-2 border-[#00f0ff] opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-3 h-3 border-b-2 border-r-2 border-[#00f0ff] opacity-50"></div>
          </motion.div>

          {/* Hyper-fast Loading Bar */}
          <div className="w-48 sm:w-64 h-[2px] bg-[#222] overflow-hidden mb-6 relative shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "circIn" }}
            />
          </div>

          {/* Boot Sequence Text */}
          <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-[#00f0ff] uppercase flex flex-col items-center gap-1 opacity-80">
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ duration: 0.3, times: [0, 0.5, 1], repeat: Infinity }}
            >
              ESTABLISHING_UPLINK...
            </motion.span>
            <span>SYS.AUTH_GRANTED</span>
          </div>

          {/* Mobile Context Warning (Only visible on small screens) */}
          <div className="absolute bottom-8 flex sm:hidden items-center gap-2 px-3 py-1.5 border border-[#333] bg-[#111] text-[#fcee0a] text-[9px] font-mono tracking-widest uppercase">
             <Laptop size={12} />
             <span>Desktop Recommended</span>
          </div>

          {/* Scanline Effect */}
          <div className="absolute inset-0 bg-[url('/scanlines.png')] opacity-[0.15] pointer-events-none mix-blend-overlay"></div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}