'use client';
import { Section } from '@/lib/redux/slices/sectionSlice/sectionSlice';
import { Github, Linkedin, Mail, Twitter, Laptop, Smartphone, Headphones, Monitor, Terminal, Keyboard, Server, Camera } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// --- 3D Imports ---
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Grid, Text, Billboard } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';
import { myself } from '@/data/myself';

export const sections = [
  { id: 'profile', title: 'Identity.sys' },
  { id: 'loadout', title: 'Hardware_Matrix' },
  { id: 'gallery', title: 'Digital_Collection' },
  { id: 'about', title: 'Decrypted_Log.md' },
];




export default function PersonalInfo() {
  // Animation variants for scroll reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="h-full w-full overflow-y-auto vscode-scroll text-[#a3a3a3] font-sans relative selection:bg-[#00f0ff] selection:text-black">

      {/* Global Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none z-0 fixed"></div>

      <div className="mx-auto w-full max-w-6xl px-6 py-10 md:px-12 md:py-16 relative z-10">

        {/* ================= IDENTITY MODULE ================= */}
        <motion.section
          id="profile"
          className="flex flex-col lg:flex-row gap-10 mb-24 scroll-mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="flex-1 flex flex-col justify-center" variants={itemVariants}>
            <div className="text-[10px] font-mono text-gray-400 tracking-[0.3em] uppercase mb-4 opacity-80">
              {'>'} INITIALIZING_USER_PROFILE...
            </div>

            <div className="flex items-center gap-6 mb-8">
              {/* Cyberpunk Avatar Viewport */}
              <div className="relative w-28 h-28 border border-[#333] bg-black p-1 shrink-0 group">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00f0ff] transition-all group-hover:w-3 group-hover:h-3"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00f0ff] transition-all group-hover:w-3 group-hover:h-3"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00f0ff] transition-all group-hover:w-3 group-hover:h-3"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00f0ff] transition-all group-hover:w-3 group-hover:h-3"></div>

                <div className="relative w-full h-full overflow-hidden bg-[#111]">
                  <Image
                    src={myself.githubImg}
                    alt="Girish Gaikwad"
                    fill
                    className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[url('/scanlines.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                </div>

                <div className="absolute -bottom-2 -right-2 bg-gray-800 text-white text-[9px] font-bold px-1.5 py-0.5 z-10">
                  LVL.99
                </div>
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-1 ">
                  Girish_Gaikwad
                </h1>
                <p className="text-gray-400 font-mono text-[13px] tracking-widest uppercase">
                  Software_Dev_Engineer // Creative_Tech
                </p>
              </div>
            </div>

            <p className="text-[14px] leading-relaxed text-[#d4d4d8] mb-8 max-w-xl border-l-2 border-[#333] pl-4">
              I build scalable backend architectures and dynamic user interfaces. Passionate about AI tooling, system design, and creating developer experiences that actually make sense. Connecting the nodes between backend logic and frontend execution.
            </p>

            <div className="flex flex-wrap items-center gap-3 font-mono">
              <SocialExec icon={<Github size={14} />} text="GitHub.exe" href="https://github.com" />
              <SocialExec icon={<Linkedin size={14} />} text="LinkedIn.sh" href="https://linkedin.com" />
              <SocialExec icon={<Twitter size={14} />} text="Twitter.bat" href="https://twitter.com" />
              <SocialExec icon={<Mail size={14} />} text="Ping_Me" href="mailto:your@email.com" primary />
            </div>
          </motion.div>


          {/* Holographic 3D Viewport */}
          <motion.div variants={itemVariants} className="w-full lg:w-[500px] h-[400px] border-2 border-[#333] relative flex flex-col shrink-0 group shadow-[0_0_40px_rgba(255,100,0,0.05)] overflow-hidden">
            {/* Fancy Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gray-600 pointer-events-none z-30"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gray-600 pointer-events-none z-30"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gray-600 pointer-events-none z-30"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gray-600 pointer-events-none z-30 group-hover:border-[#fcee0a] transition-colors"></div>

            {/* Viewport UI Overlay */}
            <div className="absolute inset-0 pointer-events-none z-20 border-[4px] border-transparent transition-colors">
              <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#ff6600]/10 to-transparent flex items-center justify-between px-4">
                <span className="text-[10px] text-[#ffffff] font-mono uppercase tracking-widest flex items-center gap-2 drop-shadow-md">
                  <Monitor size={14} /> OBSERVATORY // SINGULARITY.dat
                </span>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-4 bg-[#333] skew-x-12"></div>
                  <div className="w-1.5 h-4 bg-[#333] skew-x-12"></div>
                  <div className="w-1.5 h-4 bg-[#fff] animate-pulse skew-x-12"></div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-[9px] font-mono text-gray-400">MASS: 4.3M M☉ | SPIN: 0.998c</div>
              <div className="absolute bottom-4 right-4 text-[9px] font-mono text-gray-600">EVENT_HORIZON: STABLE</div>
            </div>

            <div className="flex-1 relative cursor-grab active:cursor-grabbing overflow-hidden">
              {/* REACT THREE FIBER CANVAS */}
              <Canvas camera={{ position: [5, 10, 8], fov: 45 }} className="w-full h-full" gl={{ antialias: false }}>
                <color attach="background" args={['#020202']} />

                {/* No lights needed! A black hole emits its own light via the accretion disk */}

                <BlackHole />

                <OrbitControls enableZoom={true} maxDistance={12} minDistance={4} enablePan={false} autoRotate autoRotateSpeed={0.3} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />

                <EffectComposer enabled={true} multisampling={0}>
                  {/* Heavy Bloom is critical for the Black Hole glow effect */}
                  <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} intensity={2.5} mipmapBlur radius={0.8} />
                  <ChromaticAberration offset={new THREE.Vector2(0.002, 0.002)} radialModulation={1} modulationOffset={0} />
                  <Noise opacity={0.12} />
                </EffectComposer>
              </Canvas>
            </div>
          </motion.div>

        </motion.section>

        {/* ================= HARDWARE LOADOUT ================= */}
        <motion.section
          id="loadout"
          className="mb-24 scroll-mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
              Hardware_Matrix
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#333] to-transparent"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#333] border border-[#333] ">
            {myself.hardwareData.map((hw) => (
              <HardwareModule
                key={hw.id}
                icon={<hw.icon size={24} />} id={hw.id} name={hw.name} status={hw.status}
                specs={hw.specs}
              />
            ))}
          </motion.div>
        </motion.section>


        {/* ================= NEW SECTION: VISUAL RECORDS (IMAGES) ================= */}
        <motion.section
          id="gallery"
          className="mb-24 scroll-mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
            <div className="relative">
              <Camera size={32} className="text-[#fcee0a] absolute -top-8 -left-6 opacity-20" />
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight flex items-center gap-3 relative z-10">
                Visual_Records.db
              </h2>
            </div>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#fcee0a] to-transparent mb-1 opacity-50"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {myself.gallaryImages.map((src, index) => (
              <div key={index} className="aspect-square relative border-2 border-[#333] bg-[#0a0a0a] p-1 group overflow-hidden hover:border-[#fcee0a] transition-colors duration-300">
                {/* Data Overlays */}
                <div className="absolute top-0 left-0 z-20 bg-[#111] px-2 py-1 text-[9px] font-mono text-[#fcee0a]/70 border-b border-r border-[#333] group-hover:text-[#fcee0a] group-hover:border-[#fcee0a]">
                  REC_00{index + 1}
                </div>
                <div className="absolute bottom-2 right-2 z-20 text-[9px] font-mono text-white/50 group-hover:text-[#fcee0a] opacity-0 group-hover:opacity-100 transition-opacity">
                  [ ARCHIVED ]
                </div>

                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden bg-[#111]">
                  {/* Color burst on hover */}
                  <div className="absolute inset-0 bg-[#fcee0a] mix-blend-color z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>

                  <Image
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Scanlines */}
                  <div className="absolute inset-0 bg-[url('/scanlines.png')] opacity-40 mix-blend-overlay pointer-events-none z-10"></div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* ================= DECRYPTED LOG ================= */}
        <motion.section
          id="about"
          className="mb-20 scroll-mt-10 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight flex items-center gap-3">
              <Terminal size={28} className="text-[#fcee0a]" />
              Decrypted_Log.md
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="relative bg-dark_bg border border-[#333] p-6 md:p-10 font-mono text-[13px] leading-relaxed text-[#a1a1aa] shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            <div className="absolute top-0 left-0 w-full h-6 bg-[#111] border-b border-[#333] flex items-center px-4">
              <span className="text-[9px] text-[#00f0ff] tracking-widest">root@girish-server:~# cat journey.txt</span>
            </div>

            <div className="mt-4 space-y-6">
              <p>
                My journey into software engineering started with a fascination for how systems fit together. I don't just write code; I design solutions. Over the past few years, I've transitioned from building simple frontends to architecting comprehensive full-stack platforms.
              </p>

              <div className="border-l-2 border-[#fcee0a] bg-gradient-to-r from-[#fcee0a]/10 to-transparent p-4 text-white italic shadow-inner">
                <span className="text-[#fcee0a] font-bold not-italic mr-2">{'>'}</span>
                "The best code is no code at all. The second best is code that is easy to delete."
              </div>

              <p>
                During my internship at the <span className="text-[#00f0ff]">Police Department</span>, I developed AI-driven solutions and built platforms to manage large-scale operations. Currently, I am actively building <span className="text-[#00f0ff]">GlobalXport</span>—an AI-powered startup aiming to automate compliance and international trade documentation for SMBs in India.
              </p>

              <div className="mt-8 border-t border-[#333] pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-[11px] text-[#fcee0a] tracking-widest uppercase mb-4">
                    {'>'} EXECUTING: hobbies.sh
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-3"><span className="text-[#333]">01</span> Lifting heavy things and maintaining system endurance.</li>
                    <li className="flex gap-3"><span className="text-[#333]">02</span> Decoding sci-fi/fantasy literature.</li>
                    <li className="flex gap-3"><span className="text-[#333]">03</span> Tinkering with UI designs and 3D modeling.</li>
                  </ul>
                </div>
                {/* ASCII Art Decoration */}
                <div className="hidden md:flex justify-end items-end text-[#333] text-[8px] leading-[8px] select-none pointer-events-none">
                  <pre>
                    {`   _____  __     __  _____ 
  / ____| \\ \\   / / / ____|
 | (___    \\ \\_/ / | (___  
  \\___ \\    \\   /   \\___ \\ 
  ____) |    | |    ____) |
 |_____/     |_|   |_____/ `}
                  </pre>
                </div>
              </div>

              <div className="w-2 h-4 bg-[#00f0ff] animate-pulse mt-4"></div>
            </div>
          </motion.div>
        </motion.section>

      </div>
    </div>
  );
}



// --- SUB-COMPONENTS ---
function SocialExec({ icon, text, href, primary = false }: { icon: JSX.Element, text: string, href: string, primary?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group flex items-center gap-2 px-3 py-1.5 text-[11px] tracking-widest transition-all ${primary
        ? 'bg-[#00f0ff] text-black hover:bg-white hover:shadow-[0_0_15px_rgba(0,240,255,0.6)]'
        : 'bg-[#0a0a0a] border border-[#333] text-[#a1a1aa] hover:border-white hover:text-white hover:bg-[#00f0ff]/5'
        }`}
    >
      <span className={primary ? "text-black" : "text-[#555] group-hover:text-white"}>[</span>
      {icon}
      {text}
      <span className={primary ? "text-black" : "text-[#555] group-hover:text-white"}>]</span>
    </a>
  );
}

function HardwareModule({ icon, id, name, status, specs }: { icon: JSX.Element, id: string, name: string, status: string, specs: string[] }) {
  return (
    <div className="bg-dark_bg p-5 transition-all relative group font-mono overflow-hidden">
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-l-[10px] border-t-[#333] border-l-transparent group-hover:border-t-[#fcee0a] transition-colors z-10"></div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="text-[#ffff] opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all origin-top-left">
          {icon}
        </div>
        <div className="text-right">
          <div className="text-[10px] text-[#555] tracking-widest group-hover:text-[#00f0ff] transition-colors">{id}</div>
          <div className="text-[9px] text-[#00ff41] flex items-center justify-end gap-1 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse"></span>
            {status}
          </div>
        </div>
      </div>

      <h3 className="text-[14px] font-bold text-white uppercase tracking-tight mb-4 relative z-10">{name}</h3>

      <ul className="space-y-1.5 relative z-10">
        {specs.map((spec, i) => (
          <li key={i} className="text-[11px] text-[#858585] flex items-start gap-2">
            <span className="text-[#333] mt-0.5 group-hover:text-[#00f0ff] transition-colors">{'>'}</span>
            <span className="group-hover:text-[#cccccc] transition-colors">{spec}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


















// ─── Shader: Accretion Disk ──────────────────────────────────────────────────
// Models the Novikov-Thorne temperature profile: T ∝ r^(-3/4)
// with a Doppler brightening factor on the approaching side.
const diskVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition;
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const diskFragmentShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uTime;
  uniform float uInnerRadius;   // r_isco
  uniform float uOuterRadius;

  // Hash for procedural noise
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f*f*(3.0 - 2.0*f);
    return mix(
      mix(hash(i), hash(i + vec2(1,0)), f.x),
      mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x),
      f.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = p * 2.1 + vec2(1.7, 9.2);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    float r = length(vPosition.xy);
    float angle = atan(vPosition.y, vPosition.x);

    // ── Radial temperature profile (Novikov-Thorne inspired) ─────────────────
    // Normalized radius from inner edge
    float rNorm = (r - uInnerRadius) / (uOuterRadius - uInnerRadius);
    rNorm = clamp(rNorm, 0.0, 1.0);

    // Brightness peaks just outside ISCO then falls off steeply outward
    float brightness = pow(1.0 - rNorm, 3.5) * (1.0 - exp(-rNorm * 8.0));
    brightness = clamp(brightness, 0.0, 1.0);

    // ── Doppler beaming ───────────────────────────────────────────────────────
    // Disk rotates counter-clockwise (positive angle velocity).
    // Approaching side (left, cos(angle) < 0 roughly) is boosted.
    // Simplified: doppler ~ 1 + beta * cos(angle), with beta ≈ 0.3
    float beta = 0.35;
    float doppler = 1.0 + beta * (-cos(angle)); // left side approaching
    doppler = pow(max(doppler, 0.01), 3.0);     // relativistic beaming exponent

    // ── Turbulent filaments ───────────────────────────────────────────────────
    float spiral = angle + uTime * (0.4 + 0.6 * (1.0 - rNorm)) - rNorm * 6.0;
    vec2 noiseUV = vec2(spiral * 0.3, rNorm * 4.0);
    float turb = fbm(noiseUV + vec2(uTime * 0.08, 0.0));
    float filament = smoothstep(0.3, 0.7, turb);

    // ── Final colour: blackbody ramp ──────────────────────────────────────────
    // Inner: near-white / yellow-white (hottest)
    // Mid:   orange
    // Outer: deep red, fading to nothing
    float heat = brightness * doppler;

    vec3 innerColor  = vec3(1.0,  0.95, 0.75);  // white-yellow
    vec3 midColor    = vec3(1.0,  0.45, 0.05);  // orange
    vec3 outerColor  = vec3(0.55, 0.05, 0.0);   // deep red

    vec3 col;
    if (rNorm < 0.25) {
      col = mix(innerColor, midColor, rNorm / 0.25);
    } else {
      col = mix(midColor, outerColor, (rNorm - 0.25) / 0.75);
    }

    // Filament brightening
    col += col * filament * 0.4;

    float alpha = heat * (0.7 + 0.3 * filament);
    alpha = clamp(alpha, 0.0, 1.0);

    // Hard cutoff at inner/outer radii
    if (r < uInnerRadius || r > uOuterRadius) discard;

    gl_FragColor = vec4(col * (heat + 0.05), alpha);
  }
`;

// ─── Shader: Gravitational Lensing Halo ─────────────────────────────────────
// A screen-facing arc that mimics light bent over the poles.
const lensVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition;
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const lensFragmentShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uTime;

  void main() {
    float r = length(vPosition.xy);
    float angle = atan(vPosition.y, vPosition.x);

    // Only show the arc: thin band
    float arcWidth = 0.18;
    float radialFade = 1.0 - abs((r - 1.55) / arcWidth);
    radialFade = clamp(radialFade, 0.0, 1.0);
    radialFade = pow(radialFade, 1.5);

    // Angular masking: top bright arc (photon ring seen lensed)
    // In Interstellar view, the top arc is brighter, bottom dimmer
    float topArc = smoothstep(-0.1, 0.6, sin(angle)); // upper semicircle
    float bottomArc = smoothstep(-0.1, 0.6, -sin(angle)) * 0.35;
    float arcMask = max(topArc, bottomArc);

    // Slight Doppler: left side of lensed arc is brighter
    float dop = 1.0 + 0.5 * (-cos(angle));

    vec3 col = mix(vec3(0.9, 0.4, 0.0), vec3(1.0, 0.85, 0.5), topArc);

    float alpha = radialFade * arcMask * dop * 0.85;
    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
  }
`;

// ─── Shader: Innermost Shadow Edge (photon sphere glow) ─────────────────────
const photonFragShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    float r = length(vPosition.xy);
    // Very tight glowing ring just outside the event horizon
    float ring = exp(-pow((r - 1.02) * 28.0, 2.0));
    vec3 col = vec3(1.0, 0.75, 0.3);
    gl_FragColor = vec4(col, ring * 0.9);
  }
`;

// ─── AccretionDisk Mesh ──────────────────────────────────────────────────────
function AccretionDisk() {
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uInnerRadius: { value: 1.4 },
      uOuterRadius: { value: 5.2 },
    }),
    []
  );

  useFrame(({ clock }) => {
    if (matRef.current) matRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    // Tilt to match classic Interstellar viewing angle
    <group rotation={[Math.PI / 2 - 0.22, 0, 0]}>
      <mesh>
        <ringGeometry args={[1.4, 5.2, 256, 1]} />
        <shaderMaterial
          ref={matRef}
          vertexShader={diskVertexShader}
          fragmentShader={diskFragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// ─── Lensing Arc (Billboard) ─────────────────────────────────────────────────
function LensingArc() {
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame(({ clock }) => {
    if (matRef.current) matRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <Billboard>
      {/* Lensed arc halo */}
      <mesh>
        <ringGeometry args={[1.37, 1.73, 256, 1]} />
        <shaderMaterial
          ref={matRef}
          vertexShader={lensVertexShader}
          fragmentShader={lensFragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Photon sphere ring */}
      <mesh>
        <ringGeometry args={[0.98, 1.12, 256, 1]} />
        <shaderMaterial
          vertexShader={lensVertexShader}
          fragmentShader={photonFragShader}
          uniforms={{ uTime: { value: 0 } }}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Billboard>
  );
}

// ─── Black Hole ──────────────────────────────────────────────────────────────
function BlackHole() {
  return (
    <group position={[0, 0, 0]}>
      {/* Event horizon — absolute void */}
      <mesh>
        <sphereGeometry args={[1.18, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Subtle gravitational shadow / depth ring behind the disk */}
      <mesh>
        <sphereGeometry args={[1.22, 64, 64]} />
        <meshBasicMaterial color="#000000" transparent opacity={1} side={THREE.BackSide} />
      </mesh>

      <AccretionDisk />
      <LensingArc />
    </group>
  );
}

// ─── Canvas Block (drop-in replacement) ─────────────────────────────────────
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

