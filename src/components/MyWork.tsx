'use client';
import { FadeIn, FadeInStagger } from '@/components';
import { myself } from '@/data/myself';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';





// Helper to generate a fake system ID
const generateSysId = (name: string) => {
  return `PRJ_${name.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 6)}_${Math.floor(Math.random() * 1000)}`;
};

export default function MyWork() {
  return (
    <div className="relative z-10 @container font-mono w-full max-w-7xl mx-auto">

      {/* System Module Header */}
      <FadeIn className="mb-8 border-b border-[rgb(var(--dark-border))] pb-4 flex justify-between items-end">
        <div>
          <span className="text-[10px] tracking-widest uppercase opacity-50 block mb-1">
            // EXECUTABLE_ARCHIVES
          </span>
          <h2 className="text-3xl md:text-xl font-black uppercase tracking-tighter text-[rgb(var(--work-yellow))]">
            SYS.PROJECTS
          </h2>
        </div>
        <div className="text-[10px] hidden sm:flex items-center gap-2 opacity-60">
          <span className="w-2 h-2 bg-[rgb(var(--work-yellow))] animate-pulse"></span>
          NETWORK: LOCAL
        </div>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 gap-6 pt-4 @3xl:grid-cols-2">
        {myself.projects.map((project, index) => {
          const sysId = generateSysId(project.name);

          return (
            <FadeIn
              key={project.name}
              className={clsx(
                'group relative border border-[rgb(var(--dark-border))] bg-[rgb(var(--dark-bg))] overflow-hidden flex flex-col transition-colors duration-500 hover:border-[rgb(var(--work-yellow))]',
                project.full ? '@3xl:col-span-2 @2xl:flex-row' : '@3xl:col-span-1'
              )}
            >
              {/* Corner Targeting Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[rgb(var(--dark-border))] group-hover:border-[rgb(var(--work-yellow))] transition-colors z-20"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[rgb(var(--dark-border))] group-hover:border-[rgb(var(--work-yellow))] transition-colors z-20"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[rgb(var(--dark-border))] group-hover:border-[rgb(var(--work-yellow))] transition-colors z-20"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[rgb(var(--dark-border))] group-hover:border-[rgb(var(--work-yellow))] transition-colors z-20"></div>

              {/* Data & Text Panel */}
              <div className={clsx(
                'p-6 flex flex-col z-10 relative bg-[rgb(var(--dark-bg))]',
                project.full ? '@2xl:w-1/2 @2xl:border-r border-[rgb(var(--dark-border))]' : 'w-full'
              )}>
                {/* Meta Data Bar */}
                <div className="flex justify-between items-center mb-6 pb-2 border-b border-[rgb(var(--dark-border))]">
                  <span className="text-[10px] tracking-widest opacity-60">ID: {sysId}</span>
                  <span className="text-[9px] bg-[rgb(var(--menu-bg))] border border-[rgb(var(--dark-border))] px-2 py-0.5 text-[rgb(var(--work-yellow))]">
                    {project.full ? 'MAIN_THREAD' : 'SUB_PROCESS'}
                  </span>
                </div>

                <h3 className="text-2xl @2xl:text-3xl font-bold uppercase text-inherit mb-4 tracking-tight group-hover:text-[rgb(var(--work-yellow))] transition-colors">
                  {project.name}
                </h3>

                <p className="text-xs @2xl:text-sm opacity-70 leading-relaxed mb-8 font-sans">
                  {project.description}
                </p>

                {/* Execution Link / Button */}
                <div className="mt-auto flex flex-col @2xl:flex-row gap-2">
                  <Link
                    href={project.href}
                    className="inline-flex items-center justify-center @2xl:justify-start gap-3 text-[10px] @2xl:text-xs tracking-[0.2em] uppercase font-bold text-[rgb(var(--work-yellow))] hover:bg-[rgb(var(--work-yellow))] hover:text-[#000000] border border-[rgb(var(--work-yellow))] px-4 py-2 transition-all duration-300 flex-1 @2xl:flex-1"
                  >
                    <span>[ INIT_DEPLOYMENT ]</span>
                    <ArrowRightIcon className="w-3 h-3" />
                  </Link>
                  <Link
                    href={project.link}
                    className="inline-flex items-center justify-center @2xl:justify-start gap-3 text-[10px] @2xl:text-xs tracking-[0.2em] uppercase font-bold text-[rgb(var(--skills-purple))] hover:bg-[rgb(var(--skills-purple))] hover:text-[#000000] border border-[rgb(var(--skills-purple))] px-4 py-2 transition-all duration-300 flex-1 @2xl:flex-1"
                  >
                    <span>[ LIVE_SITE ]</span>
                    <ArrowRightIcon className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Asset Viewport (Image Panel) */}
              <div className={clsx(
                'relative bg-[rgb(var(--menu-bg))] overflow-hidden',
                project.full ? '@2xl:w-1/2 min-h-[300px] border-t @2xl:border-t-0 border-[rgb(var(--dark-border))]' : 'w-full h-64 border-t border-[rgb(var(--dark-border))] mt-auto'
              )}>
                {/* Viewport Overlay Readout */}
                <div className="absolute top-2 right-2 z-10 bg-[rgb(var(--dark-bg))] border border-[rgb(var(--dark-border))] px-1.5 py-0.5 text-[8px] tracking-widest opacity-60">
                  ASSET_VIEWER_ACTIVE
                </div>

                <Image
                  src={project.image.src}
                  alt={project.name}
                  fill
                  className="object-cover object-top grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />

                {/* Scanline CRT Effect */}
                <div className="absolute inset-0 bg-[url('/scanlines.png')] opacity-10 pointer-events-none mix-blend-overlay hidden group-hover:block z-10"></div>

                {/* Inner Reticle (Only visible on hover) */}
                <div className="absolute inset-4 border border-[rgb(var(--work-yellow))] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none z-10 scale-95 group-hover:scale-100"></div>
              </div>

            </FadeIn>
          );
        })}
      </FadeInStagger>
    </div>
  );
}

// Simple Arrow Icon Component
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" />
    </svg>
  );
}
