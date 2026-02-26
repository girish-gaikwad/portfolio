'use client';
import { AnimatedRoles, AnimatedTitle, FadeIn, SectionHeader, Socials } from '@/components';
import { myself } from '@/data/myself';
import { Accounts } from '@/icons';
import { User, Globe, GraduationCap, Terminal } from 'lucide-react';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className="relative z-10 font-sans text-[#a3a3a3] mb-12 selection:bg-[#00f0ff] selection:text-black">
      {/* ================= HEADER ================= */}
      <SectionHeader className='mt-8 mb-8'
        icon={
          <>
            <Accounts height="28" width="28" />
            <span className="bg-about_me_green icon-blur absolute inset-0 -z-10"></span>
          </>
        }
        title="About Me"
        description={
          <div>
            I&apos;m a <span className="text-about_me_green">Software developer</span> specializing in <span className="text-about_me_green">Web & Mobile Applications</span> with <span className="text-about_me_green">AI/ML-powered </span> backend integration.
          </div>
        }
      />
      {/* ================= DENSE BENTO GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">

        {/* Bio & Image Box (Spans 3 columns, packed horizontally) */}
        <div className="lg:col-span-3 bg-dark_bg border border-[#333] p-5 relative group hover:border-[#00f0ff]/50 transition-colors shadow-lg flex flex-col md:flex-row gap-6">
          {/* Cyber Corner Accent */}
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-l-[10px] border-t-[#333] border-l-transparent group-hover:border-t-[#00f0ff] transition-colors"></div>

          {/* Image Viewport (Compact) */}
          <div className="relative w-28 h-28 md:w-36 md:h-36 border border-[#333] shrink-0 overflow-hidden group-hover:border-[#00f0ff]/30 transition-colors">
            {/* Targeting Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00f0ff] z-20"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00f0ff] z-20"></div>

            <div className="relative w-full h-full bg-[#111]">
              <Image
                className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 scale-105 group-hover:scale-100"
                src={myself.profilePicture}
                alt="Profile View"
                fill
              />
              <div className="absolute inset-0 bg-[url('/scanlines.png')] opacity-30 mix-blend-overlay pointer-events-none z-10"></div>
            </div>
            <div className="absolute bottom-1 right-1 bg-[#fcee0a] text-black font-mono text-[8px] font-bold px-1.5 py-0.5 z-20">
              VISUAL_ID
            </div>
          </div>

          {/* Bio Content (Dense) */}
          <div className="flex-1 flex flex-col justify-center gap-4">
            <div className="text-[9px] font-mono text-[#00f0ff] tracking-[0.2em] uppercase mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#00f0ff] animate-pulse"></span>
              ACTIVE_USER_RECORD
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase flex flex-col md:flex-row md:items-center md:justify-between tracking-tight mb-2 gap-2">
                {myself.name}
                <p className="text-[11px] md:text-[13px] font-mono text-[#00f0ff] font-semibold">
                  <AnimatedRoles roles={myself.roles} />
                </p>
              </h3>
            </div>

            <div className="space-y-3 text-[12px] leading-relaxed text-[#c4c4c8] border-l-2 border-[#00f0ff]/30 pl-4">
              <p>
                {myself.publicDescription.split('<br/>').map((line, index) => (
                  <span key={index} className="block mb-1">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>

        {/* Localization / Languages Module (Compact, spans 1 col) */}
        <FadeIn
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          className="lg:col-span-1 bg-dark_bg border border-[#333] p-4 relative group hover:border-[#333] transition-colors flex flex-col"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-[#222] pb-2">
            <Globe className="text-[#00f0ff]" size={14} />
            <h4 className="text-[11px] font-bold text-white uppercase tracking-widest">Localization</h4>
          </div>
          <div className="font-mono text-[11px] space-y-2 flex-1">
            {myself.speaklanguages.map((langObj, index) => {
              const lang = Object.keys(langObj)[0];
              const proficiency = Object.values(langObj)[0];
              const colorClass = proficiency === "Fluent" ? "text-[#fcee0a]" : proficiency === "Advanced" ? "text-[#00ff41]" : "text-[#a1a1aa]";
              return (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-[#a1a1aa]">"{lang}"</span>
                  <span className={`${colorClass} font-semibold`}>"{proficiency}"</span>
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-[#222] flex justify-center scale-90 origin-bottom">
            <Socials />
          </div>
        </FadeIn>

        {/* Education Module (Spans full 4 cols horizontally) */}
        <FadeIn
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          className="lg:col-span-4 bg-dark_bg border border-[#333] p-4 relative group hover:border-[#fcee0a]/40 transition-colors"
        >
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[8px] border-l-[8px] border-t-[#333] border-l-transparent group-hover:border-t-[#fcee0a] transition-colors z-20"></div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative w-14 h-14 shrink-0 border border-[#333] overflow-hidden bg-[#111]">
              <Image
                src={myself.clg.img}
                alt="Institution Logo"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-[#fcee0a] mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between w-full text-center sm:text-left gap-2">
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <GraduationCap size={14} className="text-[#fcee0a]" />
                  <h3 className="text-[14px] font-black text-white uppercase tracking-tight">
                    {myself.clg.currentYear}
                  </h3>
                </div>
                <p className="text-[11px] font-mono text-[#fcee0a] uppercase">
                  {myself.clg.name}
                  <span className='text-white ml-4'>
                    {myself.clg.duration}
                  </span>
                </p>
              </div>

              <div className="inline-flex items-center gap-2 border border-[#333] bg-[#111] px-3 py-1.5 shrink-0 mt-2 sm:mt-0">
                <Terminal size={12} className="text-[#a1a1aa]" />
                <p className="text-[10px] text-[#a1a1aa] font-mono tracking-widest uppercase">
                  {myself.clg.degree}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}