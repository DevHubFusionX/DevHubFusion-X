"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { TwistingRibbon } from '@/components/ui/twisting-ribbon';
import { ApplicationModal } from '@/components/sections/ApplicationModal';

// Brand green palette for the ribbon
const GREEN_RIBBON_COLORS = {
  face: "#059669",   // Emerald 600 — primary
  foldA: "#34d399",  // Emerald 400 — accent
  foldB: "#10b981",  // Emerald 500
  foldC: "#5eead4",  // Teal 300
};

// SVGs for the marquee tracks in Hero heading
const renderReactIcon = () => (
  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-sky-400" viewBox="-11.5 -10.23 23 20.46" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <ellipse rx="11" ry="4.2" />
    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
  </svg>
);

const renderNodeIcon = () => (
  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const renderTsIcon = () => (
  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
    <path d="M7 10h4" />
    <path d="M9 10v6" />
    <path d="M16 10h-2v6h2" />
    <path d="M14 13h2" />
  </svg>
);

const renderDatabaseIcon = () => (
  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const renderCodeIcon = () => (
  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const renderGlobeIcon = () => (
  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const trackAItems = [renderReactIcon, renderNodeIcon, renderTsIcon];
const trackBItems = [renderDatabaseIcon, renderCodeIcon, renderGlobeIcon];

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  // Smooth easing definitions
  const smoothEase = [0.25, 0.1, 0.25, 1] as const;
  const snappyEase = [0.16, 1, 0.3, 1] as const;

  // Simple, direct words for the ticker
  const words = [
    "get you sales.",
    "save your time.",
    "run on autopilot.",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-28 pb-16 md:pt-32"
      aria-label="DevHubFusionX — High-Performance Software Systems & Automations"
    >
      {/* Self-contained CSS styles for Marquee */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 10s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 10s linear infinite;
        }
      `}} />

      {/* Twisting Ribbon — animated background accent */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-30">
        <TwistingRibbon
          segments={400}
          waveSpeed={0.018}
          waveAmplitude={1}
          twistCycles={6}
          lightColors={GREEN_RIBBON_COLORS}
          darkColors={GREEN_RIBBON_COLORS}
          className="w-full h-full rounded-none"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ filter: "blur(12px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-left"
        >

          {/* Eyebrow / Intro */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ delay: 0.1, duration: 0.5, ease: smoothEase }}
            className="flex items-center gap-2.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground">
              Hi, I&apos;m Frank — Full-Stack Engineer
            </span>
          </motion.div>

          {/* Headline with ticker and marquee pills */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter uppercase leading-[1.1] mb-8 text-foreground">
            <span className="block sm:overflow-hidden overflow-visible pb-1 sm:pb-3">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
                className="inline-flex items-center flex-wrap gap-y-2"
              >
                I{' '}
                <span className="inline-block align-middle h-8 w-20 sm:h-14 sm:w-36 rounded-full overflow-hidden bg-muted border border-border mx-1.5 sm:mx-2.5 shadow-inner relative shrink-0">
                  <span className="absolute inset-y-0 left-0 w-2 sm:w-3 bg-gradient-to-r from-muted to-transparent z-10"></span>
                  <span className="absolute inset-y-0 right-0 w-2 sm:w-3 bg-gradient-to-l from-muted to-transparent z-10"></span>
                  <span className="animate-marquee-left h-full items-center py-1 sm:py-2">
                    {[...trackAItems, ...trackAItems, ...trackAItems].map((RenderIcon, idx) => (
                      <span key={idx} className="w-5 h-5 sm:w-9 sm:h-9 bg-background border border-border flex items-center justify-center rounded-md sm:rounded-lg shadow-xs mx-0.5 sm:mx-1 shrink-0">
                        <RenderIcon />
                      </span>
                    ))}
                  </span>
                </span>{' '}
                build{' '}
                <span className="inline-block align-middle h-8 w-20 sm:h-14 sm:w-36 rounded-full overflow-hidden bg-muted border border-border mx-1.5 sm:mx-2.5 shadow-inner relative shrink-0">
                  <span className="absolute inset-y-0 left-0 w-2 sm:w-3 bg-gradient-to-r from-muted to-transparent z-10"></span>
                  <span className="absolute inset-y-0 right-0 w-2 sm:w-3 bg-gradient-to-l from-muted to-transparent z-10"></span>
                  <span className="animate-marquee-right h-full items-center py-1 sm:py-2">
                    {[...trackBItems, ...trackBItems, ...trackBItems].map((RenderIcon, idx) => (
                      <span key={idx} className="w-5 h-5 sm:w-9 sm:h-9 bg-background border border-border flex items-center justify-center rounded-md sm:rounded-lg shadow-xs mx-0.5 sm:mx-1 shrink-0">
                        <RenderIcon />
                      </span>
                    ))}
                  </span>
                </span>{' '}
                software to
              </motion.span>
            </span>
            <span className="block overflow-hidden text-primary h-[1.3em] pb-3 relative mt-1">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={currentWordIndex}
                  initial={{ y: '80%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-80%', opacity: 0 }}
                  transition={{ duration: 0.5, ease: snappyEase }}
                  className="block whitespace-nowrap"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Simple, clear subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ delay: 0.6, duration: 0.6, ease: smoothEase }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed max-w-3xl mb-12"
          >
            I engineer bespoke web applications and automated software pipelines that run your business on autopilot. Less manual overhead, maximized conversion, and seamless scalability—built for growth.
          </motion.p>

          {/* Hidden semantic content for search indexers */}
          <div className="sr-only">
            <p>Frank is a full-stack software engineer building custom systems, automated workflows, and scalable web applications for businesses in Nigeria and worldwide. I design and deploy booking engines, logistics systems, SaaS dashboards, and automated funnels to maximize sales and operational output. Contact me at DevHubFusionX@gmail.com.</p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full pointer-events-auto mt-12"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-[0_10px_35px_-10px_rgba(5,150,105,0.4)] hover:bg-primary-hover hover:shadow-[0_15px_40px_-10px_rgba(5,150,105,0.5)] hover:-translate-y-0.5 transition-all duration-300 group text-center w-full sm:w-auto cursor-pointer"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-all duration-300 text-center w-full sm:w-auto"
            >
              See my work
            </Link>
          </motion.div>

        </motion.div>
      </div>
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};