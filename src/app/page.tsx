"use client";
import { AboutMe, AnimatedRoles, AnimatedTitle, Architecture3D, Border, ContactForm, Container, FadeIn, GridPattern, MyWork, Section, SectionHeader, Skills, WorkExperience } from '@/components';
import Achievements from '@/components/Achivements';
import { myself } from '@/data/myself';
import { Archive, BookOpen, BriefCase, Envelope, Explorer } from '@/icons';
import Link from 'next/link';

// export const metadata = {
//   title: 'Girish Gaikwad | Developer',
//   description: 'Personal portfolio and system interface.',
// };

export const sections = [
  { index: 0, title: 'About Me', id: 'about-me' },
  { index: 1, title: 'Work Experience', id: 'work-experience' },
  { index: 2, title: 'Skills', id: 'skills' },
  { index: 3, title: 'My Work', id: 'my-work' },
  { index: 4, title: 'Achievements', id: 'achievements' },
  { index: 5, title: 'Contact Me', id: 'contact' },
];

interface contentSection {
  id: string;
  sectionHeader: {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
  };
  mainContent: React.ReactNode;
}

const content: contentSection[] = [
  {
    id: sections[1].id,
    sectionHeader: {
      icon: (
        <>
          <BriefCase height="28" width="28" />
          <span className="bg-work_experience_orange icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Work Experience',
      description: (
        <div>
          <span className="text-work_experience_orange mr-2">SDE</span>
          <span className="text-work_experience_orange mr-2">{myself.yearsOfExperience}+ years</span>
          across fast-moving startups and companies.
        </div>
      ),
    },
    mainContent: <WorkExperience />,
  },
  {
    id: sections[2].id,
    sectionHeader: {
      icon: (
        <>
          <BookOpen height="28" width="28" />
          <span className="bg-skills_purple icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Skills',
      description: (
        <div>
          <span className="text-skills_purple">Tech Stack</span>, <span className="text-skills_purple">Programming Languages</span>, {' '}
          <span className="text-skills_purple">Technologies</span> and{' '} <span className="text-skills_purple">tools</span> I worked with in my projects and work experience
        </div>
      ),
    },
    mainContent: <Skills />,
  },
  {
    id: sections[3].id,
    sectionHeader: {
      icon: (
        <>
          <Archive height="28" width="28" />
          <span className="bg-my_work_yellow icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'My Work',
      description: (
        <div>
          Some of <span className="text-my_work_yellow">my work</span> that Scaled in production.
        </div>
      ),
    },
    mainContent: <MyWork />,
  },
  {
    id: sections[4].id,
    sectionHeader: {
      icon: (
        <>
          <Explorer height="28" width="28" />
          <span className="bg-blue-400 icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Achievements',
      description: (
        <div>
          Completed <span className="text-blue-400">challenging projects</span> and earned <span className="text-blue-400">recognition</span> in the tech industry
        </div>
      ),
    },
    mainContent: <Achievements />,
  },
  {
    id: sections[5].id,
    sectionHeader: {
      icon: (
        <>
          <Envelope height="28" width="28" />
          <span className="bg-blue-400 icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Contact Me',
      description: (
        <div>
          Get in <span className="text-blue-400">contact</span> and let&apos;s <span className="text-blue-400">work together</span>
        </div>
      ),
    },
    mainContent: <ContactForm />,
  },
];

export default function Index() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden  text-zinc-300 selection:bg-zinc-800 selection:text-white">
      <GridPattern />
      <Section id={sections[0].id}>
        <Container>
          <div className="relative flex flex-col justify-center items-center md:items-start overflow-hidden ">

            {/* Subtle, gritty background elements instead of bright spinners */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
              <div className="absolute inset-0 border border-zinc-800 rounded-full"></div>
              <div className="absolute inset-20 border-t border-r border-zinc-700 rounded-full animate-[spin_40s_linear_infinite]"></div>
            </div>

            <FadeIn className="max-w-7xl w-full pt-5 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Text Content - Stark, Monospace, Terminal UI */}
                <div className="lg:col-span-6 relative flex flex-col justify-center">

                  {/* System Header */}
                  <div className="mb-8 flex items-center gap-4 text-[10px] md:text-xs font-mono text-zinc-500 border-b border-zinc-800 pb-2 w-max">
                    <span className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 bg-zinc-400 animate-pulse"></span>
                      SYS.LOGIN_SUCCESS
                    </span>
                    <span className="text-zinc-700">|</span>
                    <span>TS: {new Date().getFullYear()}</span>
                  </div>

                  {/* Main Title */}
                  <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-2 uppercase leading-none">
                    {myself.firstName} <br />
                    <span className="text-zinc-600">{myself.lastName}</span>
                  </h1>

                  {/* Subtitle / Readout */}
                  <div className="mt-8 font-mono text-sm text-zinc-400 flex flex-col gap-2 max-w-lg bg-black/50 p-4 border border-zinc-800/80 backdrop-blur-sm">
                    <div className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-600">CLASS</span>
                      <AnimatedRoles roles={myself.roles} />
                    </div>
                    <div className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-600">EXPERIENCE</span>
                      <span className="text-zinc-200">{myself.yearsOfExperience} STARTUP-CORPORATE</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-zinc-600">STATUS</span>
                      <span className="text-zinc-200">AVAILABLE {new Date().getFullYear()}</span>
                    </div>

                    <div className="flex items-center gap-2 mt-4 text-zinc-300 bg-zinc-900/50 p-2">
                      <span className="text-zinc-500 animate-pulse">$&gt;</span>
                      <AnimatedTitle />
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs">
                    {myself.socials.slice(0, 4).map((social) => (
                      <Link
                        key={social.name}
                        href={social.url}
                        className="px-4 py-2 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 hover:text-zinc-100 transition-all duration-200 uppercase tracking-widest text-zinc-400 flex items-center gap-2 group"
                      >
                        {social.icon}
                        {social.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 3D Scene Container - Wrapped in a terminal-like frame */}
                <div className="lg:col-span-6 relative h-[450px] w-full hidden lg:flex items-center justify-center group p-4 border border-zinc-800/50 bg-dark_bg">
                  {/* Decorative corner brackets */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-zinc-700"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-zinc-700"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-zinc-700"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-zinc-700"></div>

                  <div className="absolute inset-2">
                    <Architecture3D />
                  </div>
                </div>

              </div>
            </FadeIn>

            <div className="relative  z-10 mt-1 lg:mt-10 w-full border-t border-zinc-900 pt-8 flex justify-end items-center font-mono text-xs text-zinc-600">
              <div className="hidden md:block mb-2">ENCRYPTION: ENABLED // LOKI_LOGGING: OK</div>
            </div>
          </div>
          <Border />
          <AboutMe />
          <Border />
        </Container>
      </Section>

      <div id="stars-container" className="relative">
        <Container>
          {/* <Stars id="stars-container" /> */}
          {content.map((section: contentSection) => (
            <Section key={section.id} id={section.id} className={section.id === sections[1].id ? "pb-10" : "pt-5 pb-10"}>
              {section.id !== sections[1].id &&
                <Border />
              }

              <SectionHeader className={section.id === sections[1].id ? "" : "mt-5"} {...section.sectionHeader} />
              {section.mainContent}
            </Section>
          ))}
        </Container>
      </div>
    </div>
  );
}