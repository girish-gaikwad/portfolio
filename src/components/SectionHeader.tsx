import { FadeIn, Stagger } from '@/components';
import clsx from 'clsx';

export default function SectionHeader({ 
  icon, 
  className, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  className?: string; 
  title: string; 
  description: React.ReactNode 
}) {
  return (
    <Stagger className={clsx('relative flex flex-col gap-4 mb-16 font-mono', className)}>
      
      {/* Structural Tech Borders */}
      <div className="absolute -left-4 top-0 bottom-0 w-px bg-zinc-900 hidden md:block"></div>
      <div className="absolute -left-4 top-0 w-3 h-px bg-zinc-700 hidden md:block"></div>
      
      <div className="flex items-end gap-4 border-b border-zinc-800 pb-4">
        <FadeIn
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="relative flex items-center justify-center p-3 border border-zinc-700 bg-black/40 text-zinc-400 group"
        >
          {/* Corner brackets for the icon */}
          <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-zinc-400"></div>
          <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-zinc-400"></div>
          
          {/* Ensure the icon scales correctly and inherits the muted color */}
          <div className="w-6 h-6 *:w-full *:h-full opacity-70 group-hover:opacity-100 transition-opacity">
            {icon}
          </div>
        </FadeIn>

        <FadeIn
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col pb-1"
        >
          <span className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase mb-1">
            // SYS.MODULE_INIT
          </span>
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-widest text-zinc-200 leading-none">
            {title}
          </h2>
        </FadeIn>
      </div>

      <div className="max-w-3xl border-l-2 border-zinc-800 pl-4 py-2 mt-2 bg-gradient-to-r from-zinc-900/20 to-transparent">
        <FadeIn
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-base md:text-xl lg:text-2xl font-medium text-zinc-400 leading-snug tracking-tight flex items-start"
        >
          <span className="text-zinc-600 mr-3 mt-1 text-sm md:text-base align-middle animate-pulse select-none">$&gt;</span>
          <div className="flex-1">
            {description}
          </div>
        </FadeIn>
      </div>
    </Stagger>
  );
}