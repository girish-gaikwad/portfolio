'use client';

import { FadeIn } from '@/components';
import { myself } from '@/data/myself';
import Image from 'next/image';


const achievements = myself.achievements;

// We duplicate the array to create a seamless infinite loop
const scrollingData = [...achievements, ...achievements];

export default function Achievements() {
  return (
    <div className="relative z-10 font-mono w-full max-w-7xl mx-auto">
      <FadeIn>
        {/* Stream Header */}
        <div className="flex justify-between items-end mb-6 border-b border-[rgb(var(--dark-border))] pb-2">
          <div className="text-[10px] tracking-[0.2em] flex items-center gap-2 opacity-60">
            <span className="w-1.5 h-1.5 bg-[rgb(var(--about-green))] animate-pulse"></span>
            SYS.ACHIEVEMENT_STREAM :: ACTIVE
          </div>
          <div className="text-[9px] opacity-50 hidden md:block">
            SCROLL_LOCK: HOVER
          </div>
        </div>

        {/* The Scrolling Container with Fade Edges */}
        <div className="relative w-full overflow-hidden flex items-center border border-[rgb(var(--dark-border))] bg-[rgb(var(--dark-bg))] shadow-xl">

          {/* Gradient Masks for fade in/out effect at the edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[rgb(var(--dark-bg))] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[rgb(var(--dark-bg))] to-transparent z-10 pointer-events-none"></div>

          {/* The Track (Animated) */}
          <div className="flex gap-6 py-6 px-6 animate-system-scroll hover:[animation-play-state:paused] w-max">
            {scrollingData.map((item, index) => (
              <AchievementCard key={`${item.id}-${index}`} data={item} />
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Custom keyframes for the marquee */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes system-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.75rem)); } 
        }
        .animate-system-scroll {
          animation: system-scroll 35s linear infinite;
        }
      `}} />
    </div>
  );
}

function AchievementCard({ data }: { data: typeof achievements[0] }) {
  return (
    <div className="group flex flex-col border border-[rgb(var(--dark-border))] bg-[rgba(var(--menu-bg),0.5)] hover:border-[rgb(var(--about-green))] hover:bg-[rgb(var(--menu-bg))] transition-all duration-300 relative h-full w-[300px] md:w-[350px] shrink-0">

      {/* Corner Targeting Brackets */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[rgb(var(--dark-border))] z-20 group-hover:border-[rgb(var(--about-green))] transition-colors"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[rgb(var(--dark-border))] z-20 group-hover:border-[rgb(var(--about-green))] transition-colors"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[rgb(var(--dark-border))] z-20 group-hover:border-[rgb(var(--about-green))] transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[rgb(var(--dark-border))] z-20 group-hover:border-[rgb(var(--about-green))] transition-colors"></div>

      {/* Card Header / Image Section */}
      <div className="relative w-full h-40 border-b border-[rgb(var(--dark-border))] overflow-hidden bg-[rgb(var(--input-bg))]">

        {/* Record ID Overlay */}
        <div className="absolute top-2 right-2 z-10 bg-[rgb(var(--dark-bg))] border border-[rgb(var(--dark-border))] px-2 py-1 text-[9px] tracking-widest opacity-60 group-hover:opacity-100 group-hover:text-[rgb(var(--about-green))] group-hover:border-[rgb(var(--about-green))] transition-colors">
          {data.id}
        </div>

        {data.image && (
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
          />
        )}

        {/* Scanline overlay effect */}
        <div className="absolute inset-0 bg-[url('/scanlines.png')] opacity-10 pointer-events-none mix-blend-overlay hidden group-hover:block z-10"></div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow">

        {/* Meta Data */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] tracking-widest uppercase opacity-50">TS: {data.date}</span>
            <span className="inline-block border border-[rgb(var(--dark-border))] bg-[rgb(var(--input-bg))] px-1.5 py-0.5 text-[9px] w-max group-hover:border-[rgb(var(--about-green))] group-hover:text-[rgb(var(--about-green))] transition-colors">
              [{data.tag}]
            </span>
          </div>
          <div className="text-[9px] flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
            <span className="w-1.5 h-1.5 rounded-none bg-[rgb(var(--dark-border))] group-hover:bg-[rgb(var(--about-green))] group-hover:shadow-[0_0_5px_rgb(var(--about-green))] transition-all"></span>
            <span className="tracking-wider">{data.status}</span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-base md:text-lg font-bold uppercase tracking-tight leading-tight mb-3 group-hover:text-[rgb(var(--about-green))] transition-colors">
          {data.title}
        </h3>

        <div className="text-[11px] md:text-xs leading-relaxed flex items-start gap-2 mb-6 opacity-70">
          <span className="select-none mt-0.5 opacity-50">{'>'}</span>
          <p className="line-clamp-3">{data.description}</p>
        </div>

        {/* Footer / Action */}
        <div className="mt-auto pt-4 border-t border-[rgb(var(--dark-border))] flex justify-end">
          <a
            href={data.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] border border-[rgb(var(--dark-border))] bg-[rgb(var(--input-bg))] px-3 py-2 hover:bg-[rgb(var(--hover-item-bg))] hover:border-[rgb(var(--about-green))] hover:text-[rgb(var(--about-green))] transition-all duration-300 uppercase tracking-widest flex items-center gap-2 group/btn"
          >
            {data.link.label}
            <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 transition-opacity" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}