'use client';
import { FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { useAnimationControls, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const skills = [
  { skill: 'Languages' },
  { skill: 'Front' },
  { skill: 'Back' },
  { skill: 'Mobile' },
  { skill: 'Tools' },
];

const skillsLogos = {
  ['Languages' as string]: [
    {
      name: 'JavaScript',
      image: '/logos/js-logo.png',
    },
    {
      name: 'TypeScript',
      image: '/logos/ts-logo.png',
    },
    { name: 'Dart', image: '/logos/dart-logo.png' },
    {
      name: 'Python',
      image: '/logos/python-logo.png',
    },
    {
      name: 'C#',
      image: '/logos/csharp-logo.png',
    },
    { name: 'Java', image: '/logos/java-logo.png' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
  ],
  ['Front' as string]: [
    {
      name: 'HTML5',
      image: '/logos/html5-logo.png',
    },
    {
      name: 'CSS3',
      image: '/logos/css-logo.png',
    },
    {
      name: 'ReactJS',
      image: '/logos/react-logo.png',
    },
    {
      name: 'NextJS',
      image: '/logos/nextjs-logo.png',
    },
    {
      name: 'TailwindCSS',
      image: '/logos/tailwindcss-logo.jpg',
    },
    {
      name: 'Sass',
      image: '/logos/sass-logo.png',
    },
    // {
    //   name: 'JQuery',
    //   image: '/logos/jquery-logo.webp',
    // },
    // {
    //   name: 'Svelte',
    //   image: '/logos/svelte-logo.png',
    // },
    {
      name: 'Gsap',
      image: '/logos/gsap-logo.png',
    },
    {
      name: 'FramerMotion',
      image: '/logos/framer-logo.png',
    },
    {
      name: 'Bootstrap',
      image: '/logos/bootstrap-logo.svg',
    },
    {
      name: 'MaterialUI',
      image: '/logos/materialui-logo.png',
    },
    {
      name: 'LeafletJS',
      image: '/logos/leaflet-logo.jpg',
    },
    { name: 'Redux', image: '/logos/redux-logo.png' },
    { name: '', image: '' },
    { name: '', image: '' },
  ],
  ['Back' as string]: [
    {
      name: 'NodeJS',
      image: '/logos/nodejs-logo.png',
    },
    {
      name: 'ExpressJS',
      image: '/logos/express-logo.png',
    },
    {
      name: 'NestJS',
      image: '/logos/nestjs-logo.png',
    },
    {
      name: 'MongoDB',
      image: '/logos/mongodb-logo.webp',
    },
    {
      name: 'PostgresSql',
      image: '/logos/postgres-logo.png',
    },
    {
      name: 'Firebase',
      image: '/logos/firebase-logo.jpg',
    },
    {
      name: 'Heroku',
      image: '/logos/heroku-logo.webp',
    },
    {
      name: 'DigitalOcean',
      image: '/logos/digital-ocean-logo.svg',
    },
    {
      name: 'Render',
      image: '/logos/render-logo.png',
    },
    // {
    //   name: 'Stripe',
    //   image: '/logos/stripe-logo.png',
    // },
    // {
    //   name: 'Paypal',
    //   image: '/logos/paypal-logo.png',
    // },
    // {
    //   name: 'MercadoPago',
    //   image: '/logos/mercadopago-logo.webp',
    // },
    {
      name: 'awsS3',
      image: '/logos/s3-logo.png',
    },
    {
      name: 'EC2',
      image: '/logos/ec2-logo.png',
    },
    // {
    //   name: 'StrapiCMS',
    //   image: '/logos/strapi-cms-logo.png',
    // },
    {
      name: 'SanityCMS',
      image: '/logos/sanity-cms-logo.png',
    },
    // {
    //   name: 'DatoCMS',
    //   image: '/logos/dato-cms-logo.png',
    // },
    {
      name: 'MySQL',
      image: '/logos/mysql-logo.png',
    },
    {
      name: 'PrismaORM',
      image: '/logos/prisma-logo.png',
    },
  ],
  ['Mobile' as string]: [
    {
      name: 'RNative',
      image: '/logos/rnative-logo.png',
    },
    { name: 'Flutter', image: '/logos/flutter-logo.png' },
    // {
    //   name: 'Swift',
    //   image: '/logos/swift-logo.png',
    // },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
  ],
  ['Tools' as string]: [
    {
      name: 'Git',
      image: '/logos/git-logo.png',
    },
    {
      name: 'Github',
      image: '/logos/github-logo.webp',
    },
    { name: 'Docker', image: '/logos/docker-logo.png' },
    {
      name: 'EsLint',
      image: '/logos/eslint-logo.png',
    },
    {
      name: 'Redux',
      image: '/logos/redux-logo.png',
    },
    {
      name: 'Figma',
      image: '/logos/figma-logo.webp',
    },
    {
      name: 'SocketIO',
      image: '/logos/socketio-logo.webp',
    },
    {
      name: 'Mailchimp',
      image: '/logos/mailchimp-logo.webp',
    },
    // {
    //   name: 'Postmark',
    //   image: '/logos/postmark-logo.png',
    // },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
  ],
};

const skillsTitles = {
  ['Languages' as string]: 'Programming Languages',
  ['Front' as string]: 'Frontend',
  ['Back' as string]: 'Backend',
  ['Mobile' as string]: 'Mobile',
  ['Tools' as string]: 'Tools',
};

const generateHex = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  return `0x${(hash >>> 0).toString(16).toUpperCase().padStart(8, '0')}`;
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState('Languages');
  const controls = useAnimationControls();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const handleChangeSkill: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    const skill = e.currentTarget.textContent?.replace(/[\[\]]/g, '').trim();
    if (!skill || skill === activeSkill) return;

    setActiveSkill(skill);
    await controls.start('hidden');
    await controls.start('visible');
  };

  return (
    <div className="font-mono mt- relative z-10 w-full max-w-7xl mx-auto">

      {/* System Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 border-b border-[rgb(var(--dark-border))] pb-4 gap-4">
        <div>
          <h2 className="text-3xl md:text-xl font-black text-inherit uppercase tracking-tighter">
            SYS.CAPABILITIES
          </h2>
          <div className="text-xs tracking-[0.2em] mt-2 flex items-center gap-2 opacity-60">
            <span className="w-2 h-2 animate-pulse bg-[rgb(var(--skills-purple))]"></span>
            MODULE_MATRIX // V.2.0.4
          </div>
        </div>
      </div>

      {/* The Dashboard Container */}
      <div className="border border-[rgb(var(--dark-border))] bg-[rgb(var(--dark-bg))] relative shadow-xl">

        {/* Command Ribbon (Category Selectors) */}
        <div className="flex flex-wrap border-b border-[rgb(var(--dark-border))] bg-[rgb(var(--menu-bg))]">
          {skills.map((skill) => {
            const isActive = activeSkill === skill.skill;
            return (
              <button
                onClick={handleChangeSkill}
                key={skill.skill}
                className={clsx(
                  'flex-1 min-w-[120px] px-4 py-3 text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 border-r border-[rgb(var(--dark-border))] last:border-r-0 relative group outline-none',
                  isActive
                    ? 'bg-[rgb(var(--dark-bg))] text-[rgb(var(--skills-purple))]'
                    : 'bg-transparent text-inherit opacity-60 hover:bg-[rgb(var(--hover-item-bg))] hover:opacity-100'
                )}
              >
                {isActive && (
                  <span className="absolute top-0 left-0 w-full h-[2px] bg-[rgb(var(--skills-purple))] shadow-[0_0_10px_rgb(var(--skills-purple))]"></span>
                )}
                <span className="relative z-10">
                  {isActive ? `[ ${skill.skill} ]` : skill.skill}
                </span>
              </button>
            );
          })}
        </div>

        {/* Data Viewport */}
        <div className="p-4 md:p-8 relative min-h-[400px]">

          <div className="mb-6 flex justify-between items-end">
            <div>
              <span className="text-[10px] tracking-widest uppercase block mb-1 opacity-50">
                // ACTIVE_SECTOR
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-widest uppercase text-[rgb(var(--skills-purple))]">
                {skillsTitles[activeSkill]}
              </h3>
            </div>
          </div>

          {/* 1px Wireframe Matrix Grid using dark-border for the grid lines */}
          <div ref={ref} className="bg-[rgb(var(--dark-border))] gap-px grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 border border-[rgb(var(--dark-border))]">
            <FadeInStagger animate={controls} faster className="contents">
              {skillsLogos[activeSkill].map((skill, index) => {
                if (!skill.name) return <div key={`empty-${index}`} className="bg-[rgb(var(--dark-bg))] hidden sm:block" />;
                const hexAddress = generateHex(skill.name);

                return (
                  <FadeIn key={skill.name} className="relative group bg-[rgb(var(--dark-bg))] flex flex-col items-center justify-center p-6 hover:bg-[rgb(var(--hover-item-bg))] transition-colors duration-300 min-h-[160px]">

                    {/* Top Data Bar */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                      <span className="text-[8px] tracking-widest">{hexAddress}</span>
                      <span className="w-1.5 h-1.5 bg-[rgb(var(--dark-border))] group-hover:bg-[rgb(var(--skills-purple))] rounded-full transition-colors"></span>
                    </div>

                    {/* Logo */}
                    <div className="relative w-12 h-12 md:w-16 md:h-16 mt-4 mb-4">
                      <Image
                        src={skill.image}
                        className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                        alt={`${skill.name} module`}
                        fill
                      />
                    </div>

                    {/* Skill Name */}
                    <h4 className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-center w-full truncate mt-auto opacity-70 group-hover:opacity-100 group-hover:text-[rgb(var(--skills-purple))] transition-colors">
                      {skill.name}
                    </h4>

                    {/* Targeting Brackets (Only visible on hover) */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[rgb(var(--skills-purple))] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[rgb(var(--skills-purple))] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </FadeIn>
                );
              })}
            </FadeInStagger>
          </div>

        </div>
      </div>
    </div>
  );
}