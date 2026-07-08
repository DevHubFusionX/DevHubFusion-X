"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { TwistingRibbon } from '@/components/ui/twisting-ribbon';

// Brand green palette for the ribbon
const GREEN_RIBBON_COLORS = {
  face: "#059669",   // Emerald 600 — primary
  foldA: "#34d399",  // Emerald 400 — accent
  foldB: "#10b981",  // Emerald 500
  foldC: "#5eead4",  // Teal 300
};

const stats = [
  { value: '15+', label: 'Systems Shipped' },
  { value: '85%', label: 'Workflows Automated' },
  { value: '3x+', label: 'Output Increase' },
];

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2800); 
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      {/* ── Hero Section — Full viewport ─────────────────────────────── */}
      <section
        ref={sectionRef}
        className="relative h-screen flex items-center overflow-hidden bg-background pt-24 md:pt-32"
        aria-label="DevHubFusionX — High-Performance Software Systems & Automations"
      >
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
          <div className="max-w-4xl text-left">

            {/* Headline with ticker */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tighter uppercase leading-none mb-8 text-foreground">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%', opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
                  className="block"
                >
                  We build software to
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
              className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-3xl mb-12"
            >
              We build custom apps and automated workflows that run your business for you. Less manual work, more sales, and faster growth. For companies in Nigeria and worldwide.
            </motion.p>

            {/* Hidden semantic content for search indexers */}
            <div className="sr-only">
              <p>DevHubFusionX is a software engineering agency building custom systems, automated workflows, and scalable web applications for businesses in Nigeria and worldwide. We design and deploy booking engines, logistics systems, SaaS dashboards, and automated funnels to maximize sales and operational output. Contact us at DevHubFusionX@gmail.com.</p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6, ease: smoothEase }}
              className="flex flex-wrap items-center gap-5"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-[0_10px_35px_-10px_rgba(5,150,105,0.4)] hover:bg-primary-hover hover:shadow-[0_15px_40px_-10px_rgba(5,150,105,0.5)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="#work"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-all duration-300"
              >
                See our work
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Stats Divider — below hero ───────────────────────────────── */}
      <div
        ref={statsRef}
        className="relative z-10 bg-muted border-y border-border/40"
      >
        <div className="container mx-auto px-6 md:px-12 py-8 md:py-10">
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 md:gap-24">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ delay: 0.1 + (index * 0.1), duration: 0.5, ease: smoothEase }}
                className="flex flex-col items-center text-center"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground mt-2 font-bold">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
