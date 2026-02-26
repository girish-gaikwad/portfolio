'use client';
import clsx from 'clsx';
import Link from 'next/link';

import { Container, FadeIn, FadeInStagger } from '@/components';
import { formatDate } from '@/lib/formatDate';

interface Page {
  href: string;
  date: string;
  title: string;
  description: string;
}

function PageLink({ page }: { page: Page }) {
  return (
    <article className="group relative border border-[rgb(var(--dark-border))] bg-[rgb(var(--dark-bg))] hover:border-[rgb(var(--work-yellow))] transition-colors duration-300 h-full flex flex-col">
      {/* Target Corner Crosshairs */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[rgb(var(--dark-border))] group-hover:border-[rgb(var(--work-yellow))] transition-colors z-10"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[rgb(var(--dark-border))] group-hover:border-[rgb(var(--work-yellow))] transition-colors z-10"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[rgb(var(--dark-border))] group-hover:border-[rgb(var(--work-yellow))] transition-colors z-10"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[rgb(var(--dark-border))] group-hover:border-[rgb(var(--work-yellow))] transition-colors z-10"></div>

      <div className="p-6 md:p-8 flex flex-col flex-1 relative z-0">
        
        {/* Meta Data Ribbon */}
        <div className="flex justify-between items-start mb-6 pb-2 border-b border-[rgb(var(--dark-border))]">
          <span className="text-[10px] tracking-widest uppercase opacity-50">
            TS: {formatDate(page.date)}
          </span>
          <span className="text-[9px] border border-[rgb(var(--dark-border))] bg-[rgb(var(--menu-bg))] px-1.5 py-0.5 tracking-widest uppercase text-[rgb(var(--work-yellow))]">
            [ ARCHIVE ]
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-inherit group-hover:text-[rgb(var(--work-yellow))] transition-colors mb-4">
          {page.title}
        </h3>
        
        <p className="text-sm font-sans opacity-70 mb-8 line-clamp-3 leading-relaxed">
          {page.description || "No system description provided."}
        </p>

        {/* Action Button */}
        <div className="mt-auto">
          <Link 
            href={page.href}
            className="inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase font-bold text-[rgb(var(--work-yellow))] hover:bg-[rgb(var(--work-yellow))] hover:text-[#000000] border border-[rgb(var(--work-yellow))] px-4 py-2 transition-all duration-300 w-max"
          >
            <span>[ READ_FILE ]</span>
            <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 group-hover:translate-x-1 transition-transform" stroke="currentColor" strokeWidth="2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" />
            </svg>
          </Link>
        </div>
        
      </div>
    </article>
  );
}

export default function PageLinks({ pages, className }: { pages: Array<Page>; className?: string }) {
  return (
    <Container className="mb-48 font-mono">
      {/* Replaced the generic border with a terminal section header */}
      <div className="border-t border-[rgb(var(--dark-border))] pt-16 mb-8 flex items-center gap-3 text-[10px] tracking-widest uppercase opacity-60">
        <span className="w-2 h-2 bg-[rgb(var(--work-yellow))] animate-pulse"></span>
        SYS.ADJACENT_MODULES
      </div>
      
      <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-[rgb(var(--work-yellow))] mb-8">
        More Applications
      </h2>
      
      <div className={clsx('relative', className)}>
        {/* Adjusted grid gap for a tighter, more cohesive block layout */}
        <FadeInStagger className="grid grid-cols-1 gap-6 lg:grid-cols-2" once>
          {pages.map((page) => (
            <FadeIn key={page.href} className="h-full">
              <PageLink page={page} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </Container>
  );
}