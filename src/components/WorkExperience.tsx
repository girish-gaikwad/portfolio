import { FadeIn, FadeInStagger } from '@/components';
import { myself } from '@/data/myself';
import Image from 'next/image';

export default function WorkExperience() {
  return (
    <div className="mt-5 text-zinc-400 relative z-10 font-mono @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        {/* Main Timeline Axis */}
        <div className="border-l border-zinc-600 absolute bottom-0 top-2 left-[11px] md:left-0"></div>
      </FadeIn>

      <FadeInStagger>
        <div className="flex flex-col gap-12">
          {myself.experience.map((item, index) => (
            <WorkRole
              key={index}
              company={item.company}
              role={item.role}
              date={item.date}
              tag={item.tag}
              links={item.links}
              image={item.image}
            >
              {item.description.map((desc, i) => (
                <li key={i} className="py-1 flex items-start text-xs md:text-sm">
                  <span className="text-zinc-600 mr-3 mt-0.5 select-none">{'>'}</span>
                  <span className="leading-relaxed">{desc}</span>
                </li>
              ))}
            </WorkRole>
          ))}
        </div>
      </FadeInStagger>
    </div>
  );
}

function WorkRole({
  children,
  company,
  role,
  date,
  tag,
  links,
  image
}: {
  children: React.ReactNode;
  company: string;
  role: string;
  date: string;
  tag: string;
  links?: { label: string; url: string }[];
  image?: string;
}) {
  return (
    <FadeIn className="relative group pl-8 md:pl-0 flex flex-col md:flex-row md:gap-8">

      {/* Timeline Node Marker */}
      <div className="absolute left-[8px] md:-left-[3px] top-1.5 w-1.5 h-1.5 bg-zinc-500 rounded-none group-hover:bg-zinc-300 transition-colors duration-300 outline outline-4 outline-[#020202]"></div>

      {/* Left Column: Meta Data (Desktop) */}
      <div className="hidden md:flex flex-col min-w-[100px] max-w-[200px] shrink-0 pt-0.5">
        <div className="text-xs text-zinc-400 mb-2 ml-4 tracking-widest uppercase">
          TS: {date}
        </div>
        <div className="inline-block border ml-4 border-zinc-800 bg-black/50 px-2 py-1 text-[10px] text-zinc-400 w-max mb-auto">
          [{tag}]
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="flex-1 border border-zinc-800/50 bg-black/20 p-4 md:p-6 relative hover:border-zinc-700/80 transition-colors duration-300">

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white"></div>

        {/* Mobile Meta Data */}
        <div className="md:hidden flex justify-between items-start mb-4 border-b border-zinc-800 pb-2">
          <div className="text-[10px] text-zinc-500 tracking-widest uppercase">
            {date}
          </div>
          <div className="text-[10px] text-zinc-600 uppercase">
            [{tag}]
          </div>
        </div>

        {/* Header with Image */}
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-work_experience_orange text-lg md:text-xl font-bold uppercase tracking-tight">
              {company}
            </h3>
            <p className="text-zinc-500 text-sm mt-1 uppercase tracking-wider">
              // {role}
            </p>
          </div>

          {/* Asset Container */}
          {image && (
            <div className="relative shrink-0 border border-zinc-600 bg-black/50 p-1 hidden sm:block">
              <div className="absolute -top-2.5 -right-2 bg-zinc-950 border border-zinc-600 px-1 py-0.5 text-[8px] text-work_experience_orange tracking-widest uppercase z-10">
                ASSET
              </div>
              <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden">
                <Image
                  src={image}
                  alt={`${company} logo`}
                  fill
                  className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Image Fallback (If you want it to show on small screens too) */}
        {image && (
          <div className="sm:hidden mb-4 border border-zinc-800 bg-black/50 p-1 w-max">
            <div className="relative w-10 h-10 overflow-hidden">
              <Image
                src={image}
                alt={`${company} logo`}
                fill
                className="object-contain grayscale opacity-60"
              />
            </div>
          </div>
        )}

        {/* Description List */}
        <ul className="flex flex-col gap-2 mb-6">
          {children}
        </ul>

        {/* Action Links */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-zinc-800/50">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] md:text-xs text-zinc-400 bg-zinc-900/30 border border-zinc-800 px-3 py-1.5 hover:bg-zinc-800 hover:text-zinc-200 hover:border-zinc-600 transition-all duration-300 uppercase tracking-widest flex items-center gap-2 group/link"
              >
                <span className="text-zinc-600 group-hover/link:text-zinc-400">#</span>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </FadeIn>
  );
}