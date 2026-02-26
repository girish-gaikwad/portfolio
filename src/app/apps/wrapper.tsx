import { AppIntro, FadeIn, FadeInStagger, PageLinks, Section } from '@/components';
import { App, loadApps } from '@/lib/mdx';
import Image from 'next/image';

export default async function AppsLayout({ appData, children }: { appData: App; children: React.ReactNode }) {
  const allApps = await loadApps();
  const moreApps = allApps.filter(({ metadata }) => metadata.url !== appData.url).slice(0, 2);

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden @container font-mono text-inherit">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header>
          <Section id="about">
            <FadeInStagger once>
              {/* Title / Intro Area */}
              <FadeIn>
                <div className="border-b border-[rgb(var(--dark-border))] pb-8 mb-12 relative">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 bg-[rgb(var(--work-yellow))] animate-pulse hidden md:block"></div>

                  <AppIntro eyebrow="[ SYS.ARCHIVE_RECORD ]" title={appData.title}>
                    <p className="opacity-70 text-sm md:text-base leading-relaxed mt-4 max-w-3xl">
                      {'>'} {appData.description}
                    </p>
                  </AppIntro>
                </div>
              </FadeIn>

              <FadeIn>
                {/* 1px Metadata Matrix */}
                <div className="border border-[rgb(var(--dark-border))] bg-[rgb(var(--dark-bg))] shadow-xl relative">
                  {/* Targeting Crosshairs */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[rgb(var(--dark-border))] z-10"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[rgb(var(--dark-border))] z-10"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[rgb(var(--dark-border))] z-10"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[rgb(var(--dark-border))] z-10"></div>

                  <div className="mx-auto w-full">
                    <dl className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[rgb(var(--dark-border))]">
                      <div className="p-6 md:p-8 flex flex-col gap-2 group hover:bg-[rgb(var(--hover-item-bg))] transition-colors">
                        <dt className="text-[10px] text-gray-400 tracking-widest uppercase opacity-50 font-bold">// INDUSTRY_TAG</dt>
                        <dd className="text-sm md:text-base font-bold text-[rgb(var(--work-yellow))] uppercase tracking-tight">{appData.industry}</dd>
                      </div>
                      <div className="p-6 md:p-8 flex flex-col gap-2 group hover:bg-[rgb(var(--hover-item-bg))] transition-colors">
                        <dt className="text-[10px] tracking-widest text-gray-400 uppercase opacity-50 font-bold">// DEPLOYMENT_YEAR</dt>
                        <dd className="text-sm md:text-base font-bold text-[rgb(var(--work-yellow))] uppercase tracking-tight">
                          <time dateTime={appData.date.split('-')[0]}>[ {appData.date.split('-')[0]} ]</time>
                        </dd>
                      </div>
                      <div className="p-6 md:p-8 flex flex-col gap-2 group hover:bg-[rgb(var(--hover-item-bg))] transition-colors">
                        <dt className="text-[10px] tracking-widest text-gray-400 uppercase opacity-50 font-bold">// SERVICE_PROTOCOLS</dt>
                        <dd className="text-sm md:text-base font-bold text-[rgb(var(--work-yellow))] uppercase tracking-tight">{appData.service}</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {/* Hero Asset Viewport */}
                <div className="mt-12 border border-[rgb(var(--dark-border))] bg-[rgb(var(--menu-bg))] p-2 md:p-4">
                  {/* UPDATED: Changed aspect ratio from 16/9 to 21/9 for a shorter, wider view */}
                  <div className="relative w-full aspect-[21/9] border border-[rgb(var(--dark-border))] overflow-hidden group">

                    <div className="absolute top-4 right-4 z-20 bg-[rgb(var(--dark-bg))] border border-[rgb(var(--dark-border))] px-2 py-1 text-[10px] tracking-widest opacity-80 uppercase group-hover:text-[rgb(var(--work-yellow))] group-hover:border-[rgb(var(--work-yellow))] transition-colors">
                      ASSET_VIEWER_ACTIVE
                    </div>

                    <Image
                      src={appData.image}
                      alt={`${appData.title} hero image`}
                      className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out z-0"
                      sizes="(min-width: 1216px) 76rem, 100vw"
                      priority
                    />

                    <div className="absolute inset-0 bg-[url('/scanlines.png')] opacity-10 pointer-events-none mix-blend-overlay hidden group-hover:block z-10"></div>
                  </div>
                </div>

              </FadeIn>
            </FadeInStagger>
          </Section>
        </header>

        <FadeIn>
          <div className="border-t border-[rgb(var(--dark-border))] ">
            <div className="prose prose-invert prose-zinc max-w-none font-sans">
              {children}
            </div>
          </div>
        </FadeIn>
      </article>

      <div className=" border-t border-[rgb(var(--dark-border))] bg-[rgb(var(--menu-bg))] pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3 text-[10px] text-gray-400 tracking-widest uppercase">
            <span className="w-2 h-2 bg-[rgb(var(--dark-border))]"></span>
            SYS.RELATED_ARCHIVES
          </div>
          {moreApps.length > 0 && <PageLinks pages={moreApps} />}
        </div>
      </div>
    </div>
  );
}