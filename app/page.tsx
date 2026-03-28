"use client";
import React, { useEffect, useRef } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { 
  FadeUp, 
  FadeLeft, 
  FadeRight, 
  TypingText, 
  CountUp,
  ScrollProgress,
  VelocityMarquee,
  Magnetic,
  TextReveal,
  ParallaxNumber
} from "@/components/ui/animations";
import { PerLetterGlow } from "@/components/ui/text-color";
import TiltedCard from "@/components/ui/tilted-card";
import BorderGlow from "@/components/ui/border-glow";
import { SmoothScroll } from "@/components/ui/smooth-scroll";


export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex flex-col bg-white relative selection:bg-black selection:text-white">
        {/* Global effects */}
        <ScrollProgress />
        
        {/* Luxury Texture Overlay */}
        <div className="grain-overlay noise-animation" />

        {/* Ambient Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="ambient-glow top-[-10%] left-[-10%]" />
          <div className="ambient-glow bottom-[10%] right-[-10%] animation-delay-5000" style={{ animationDelay: '5s' }} />
          <div className="ambient-glow top-[40%] right-[-20%] animation-delay-10000" style={{ animationDelay: '10s', background: 'radial-gradient(circle, rgba(230, 190, 138, 0.1) 0%, rgba(230, 190, 138, 0) 70%)' }} />
        </div>

        <DottedSurface className="opacity-40 z-0 mix-blend-multiply" />
        <Navbar />

      {/* ─── Hero Section ─── */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
        {/* Background Grids & Orbs */}
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-zinc-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-zinc-200 rounded-full blur-3xl opacity-50" />

        <ContainerScroll
          titleComponent={
            <>
              {/* Badge */}
              <div className="flex justify-center mb-10">
                <FadeUp delay={0}>
                  <Magnetic>
                    <span className="hero-badge">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      Available for work
                    </span>
                  </Magnetic>
                </FadeUp>
              </div>

              <FadeUp delay={100}>
                <h1 className="text-3xl font-light text-zinc-400 mb-2 tracking-[0.2em] uppercase">
                  Hi, I&apos;m
                </h1>
              </FadeUp>

              <FadeUp delay={200}>
                <span 
                  className="block text-5xl md:text-[7.5rem] font-black mt-10 leading-[0.95] text-black uppercase tracking-[-0.02em]"
                  style={{ fontFamily: "'Neuropolitical-v2', sans-serif" }}
                >
                  <PerLetterGlow text="Tsabiq" gradientMode={1} className="mr-3" />
                  <br className="hidden md:block" />
                  <PerLetterGlow text="Riyu" gradientMode={2} className="mr-4" />
                  <PerLetterGlow text="Kautsar" gradientMode={3} />
                </span>
              </FadeUp>

              <FadeUp delay={350} className="pb-12">
                <p className="text-lg md:text-2xl text-zinc-500 mt-6 font-medium tracking-wide">
                  <TypingText texts={["Web Developer", "UI/UX Designer", "Frontend Engineer", "Creative Builder"]} />
                </p>
              </FadeUp>


            </>
          }
        >
          <div className="relative h-full w-full rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-2xl p-1">
            <video
              src="/video_saya.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="mx-auto rounded-xl object-cover h-full w-full grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </ContainerScroll>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-300 text-[10px] tracking-[0.4em] uppercase font-bold">
          <span>Explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-zinc-200 to-transparent" />
        </div>
      </section>

      {/* ─── About Section ─── */}
      <section id="about" className="min-h-screen bg-transparent section-padding relative">
        <ParallaxNumber value="01" />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeUp>
            <div className="flex items-center gap-4 mb-16">
              <span className="text-black text-xs font-black uppercase tracking-[0.4em]">01 / About</span>
              <div className="h-[2px] w-20 bg-black" />
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <FadeLeft delay={100}>
              <div className="space-y-8">
                <h2 className="text-5xl md:text-6xl font-black text-black leading-tight">
                  <TextReveal>
                    <PerLetterGlow text="Crafting Digital" gradientMode={1} />
                  </TextReveal>
                  <TextReveal>
                    <PerLetterGlow text="Experiences" gradientMode={2} />
                  </TextReveal>
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🎓", label: "Mahasiswa", value: "Informatika" },
                    { icon: "📍", label: "Lokasi", value: "Indonesia" },
                  ].map((item) => (
                    <Magnetic key={item.label}>
                      <div className="border border-zinc-100 p-6 rounded-2xl hover:border-black transition-colors duration-500 bg-white/50 backdrop-blur-sm">
                        <div className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">{item.label}</div>
                        <div className="text-lg text-black font-black">{item.value}</div>
                      </div>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </FadeLeft>

            <FadeRight delay={200}>
              <div className="relative w-full max-w-[400px] mx-auto z-10 transition-all duration-500">
                {/* Simulated Soft Spotify Shadow behind the card */}
                <div className="absolute inset-4 bg-black/40 blur-2xl -z-10 rounded-full" />
                
                <BorderGlow
                  edgeSensitivity={0}
                  glowColor="45 100 50"
                  backgroundColor="#ffffff"
                  borderRadius={8}
                  glowRadius={100}
                  glowIntensity={3}
                  coneSpread={30}
                  animated={true}
                  colors={['#FFD700', '#FDB931', '#E6BE8A']}
                >
                  <TiltedCard
                    imageSrc="/foto_saya.jpg"
                    altText="Tsabiq Riyu Kautsar"
                    captionText="Tsabiq Riyu Kautsar - Web Developer"
                    containerHeight="400px"
                    containerWidth="400px"
                    imageHeight="400px"
                    imageWidth="400px"
                    rotateAmplitude={12}
                    scaleOnHover={1.02}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={false}
                  />
                </BorderGlow>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      <VelocityMarquee baseVelocity={-5}>
        CREATIVE DEVELOPER • UI/UX DESIGNER • PROBLEM SOLVER •
      </VelocityMarquee>

      {/* ─── Projects Section ─── */}
      <section id="projects" className="min-h-screen section-padding bg-zinc-50 relative">
        <ParallaxNumber value="02" />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeUp>
            <div className="flex items-center gap-4 mb-16">
              <span className="text-black text-xs font-black uppercase tracking-[0.4em]">02 / Projects</span>
              <div className="h-[2px] w-20 bg-black" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-black mb-16">
              <TextReveal>
                <PerLetterGlow text="Selected Works" gradientMode={3} />
              </TextReveal>
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "E-commerce Platform",
                desc: "Platform belanja online minimalis dengan fokus pada kebersihan UI.",
                tags: ["React", "Node.js"],
              },
              {
                title: "Analytics Dashboard",
                desc: "Dashboard data dengan visualisasi monokrom yang elegan.",
                tags: ["Next.js", "TypeScript"],
              },
            ].map((p, i) => (
              <FadeUp key={p.title} delay={i * 100}>
                <BorderGlow
                  edgeSensitivity={0}
                  glowColor="45 100 50"
                  backgroundColor="#ffffff"
                  borderRadius={24}
                  glowRadius={100}
                  glowIntensity={3}
                  coneSpread={30}
                  animated={true}
                  colors={['#FFD700', '#FDB931', '#E6BE8A']}
                  className="group hover:shadow-2xl transition-shadow duration-500"
                >
                  <div className="p-10 space-y-6 w-full">
                    <div className="flex gap-2">
                      {p.tags.map(t => (
                        <Magnetic key={t}>
                          <span className="tech-badge cursor-default">{t}</span>
                        </Magnetic>
                      ))}
                    </div>
                    <h3 className="text-3xl font-black text-black group-hover:translate-x-2 transition-transform duration-500">{p.title}</h3>
                    <p className="text-zinc-500 font-medium text-lg leading-relaxed">{p.desc}</p>
                    
                    <div className="pt-4 flex items-center gap-2 text-black font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all duration-500">
                      View Project
                      <span className="text-xl">→</span>
                    </div>
                  </div>
                </BorderGlow>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Skills Section ─── */}
      <section id="skills" className="min-h-screen bg-transparent section-padding relative">
        <ParallaxNumber value="03" />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeUp>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-black text-xs font-black uppercase tracking-[0.4em]">03 / Skills</span>
              <div className="h-[2px] w-20 bg-black" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-black mb-20 text-center">
              <TextReveal>
                <PerLetterGlow text="Toolkit" gradientMode={1} />
              </TextReveal>
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: "Frontend", 
                skills: ["React / Next.js", "TypeScript", "Tailwind CSS"]
              },
              { 
                title: "Backend", 
                skills: ["Node.js / Express", "PostgreSQL", "MongoDB"]
              },
              { 
                title: "Others", 
                skills: ["Git & GitHub", "UI/UX Design", "Performance"]
              }
            ].map((cat, i) => (
              <FadeUp key={cat.title} delay={i * 100}>
                <Magnetic>
                  <div className="space-y-8 p-10 bg-zinc-50 rounded-[2.5rem] hover:bg-black group transition-colors duration-500">
                    <h3 className="text-2xl font-black text-black group-hover:text-white uppercase tracking-tighter">{cat.title}</h3>
                    <div className="space-y-4">
                      {cat.skills.map(s => (
                        <div key={s} className="flex items-center gap-3 text-reveal-trigger">
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-zinc-600 transition-colors" />
                          <span className="text-zinc-600 group-hover:text-zinc-400 font-bold uppercase text-xs tracking-widest">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Magnetic>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section id="contact" className="min-h-screen section-padding bg-black flex items-center relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10 invert" />
        <div className="max-w-4xl mx-auto w-full relative z-10 text-center space-y-12">
          <FadeUp>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
              <TextReveal>
                <PerLetterGlow text="Let's Work." gradientMode={2} />
              </TextReveal>
            </h2>
            <p className="text-xl text-zinc-500 font-medium">Tertarik berkolaborasi? Mari buat sesuatu yang luar biasa.</p>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Email", val: "your.email@example.com", href: "mailto:your.email@example.com" },
                { label: "LinkedIn", val: "Tsabiq Riyu", href: "#" },
                { label: "Github", val: "@tsabiq", href: "#" }
              ].map(c => (
                <Magnetic key={c.label}>
                  <a href={c.href} className="block bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:bg-white hover:text-black group transition-all duration-500">
                    <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em] mb-2 group-hover:text-zinc-400">{c.label}</div>
                    <div className="font-black text-lg">{c.val}</div>
                  </a>
                </Magnetic>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-white py-20 px-4 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-3xl font-black text-black tracking-tighter">TRK.</div>
          <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
            HiHiHiHiHi
          </p>
          <div className="flex gap-10">
            {["About", "Projects", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
      <div className="grain-overlay" />
      <div className="ambient-glow-orb" />
    </main>
  </SmoothScroll>
);
}
