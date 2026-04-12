"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const isInView = useInView(sectionRef, { once: true });

  // Parallax for background text
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -120]);
  const bgOpacity = useTransform(scrollY, [0, 400], [0.03, 0.01]);

  // Smooth easing
  const smoothEase = [0.25, 0.1, 0.25, 1] as const;
  const snappyEase = [0.16, 1, 0.3, 1] as const;

  // Cycled Words for Ticker
  const words = [
    "Selecting.",
    "Scaling.",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500); 
    return () => clearInterval(interval);
  }, [words.length]);

  const bodyLines = [
    "Most developers beg for work. I filter for it.",
    "I build scalable assets for founders who understand that",
    "quality is the only leverage that matters."
  ];

  const stats = [
    { value: '02', label: 'Partnerships / Qtr' },
    { value: '10x', label: 'Impact' }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-24 md:pt-32 pb-20"
    >
      {/* Oversized Background Typography */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <motion.div
          style={{ y: y1, opacity: bgOpacity }}
          className="absolute top-[5%] -left-[5%] text-[20vw] font-black text-foreground whitespace-nowrap leading-none"
        >
          STRATEGY
        </motion.div>
        <motion.div
          style={{ y: y2, opacity: bgOpacity }}
          className="absolute bottom-[10%] -right-[5%] text-[25vw] font-black text-foreground whitespace-nowrap leading-none"
        >
          AUTHORITY
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl">

          {/* 1. Eyebrow Text - Slide in with line grow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="mb-8 flex items-center gap-3"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: snappyEase }}
              style={{ transformOrigin: 'left' }}
              className="h-[2px] w-12 bg-primary"
            />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.3, ease: smoothEase }}
              className="text-sm font-bold tracking-[0.3em] uppercase text-foreground"
            >
              The DevHubFusionX Approach
            </motion.span>
          </motion.div>

          {/* 2. Headline - Architecture Ticker Animation */}
          <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter uppercase leading-[0.95] md:leading-[1] mb-10">
            <span className="block text-foreground overflow-hidden">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: smoothEase }}
                className="block"
              >
                Stop Competing.
              </motion.span>
            </span>
            <span className="flex flex-wrap items-center overflow-hidden">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: smoothEase }}
                className="block text-foreground mr-4"
              >
                Start
              </motion.span>
              <div className="relative inline-flex overflow-hidden text-primary">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.4, ease: smoothEase }}
                    className="block"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </span>
          </h1>

          {/* 3. Body Paragraph */}
          <div className="mb-12 max-w-2xl">
            {bodyLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  delay: 0.8 + (i * 0.12),
                  duration: 0.4,
                  ease: smoothEase
                }}
                className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed"
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* 4. CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2, duration: 0.5, ease: smoothEase }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
          >
            <Link href="#contact" className="group">
              <motion.div
                className="flex items-center gap-6"
                whileHover="hover"
                initial="initial"
              >
                <div className="relative flex flex-col items-start">
                  <motion.span
                    variants={{
                      initial: { x: 0 },
                      hover: { x: -4 }
                    }}
                    transition={{ duration: 0.3, ease: smoothEase }}
                    className="text-2xl font-black text-foreground uppercase tracking-tight relative z-10"
                  >
                    See if you qualify
                  </motion.span>

                  <motion.span
                    variants={{
                      initial: { scaleX: 0 },
                      hover: { scaleX: 1 }
                    }}
                    transition={{ duration: 0.4, ease: snappyEase }}
                    style={{ transformOrigin: 'left' }}
                    className="h-[2px] w-full bg-primary block -mt-1"
                  />
                </div>

                <motion.div
                  variants={{
                    initial: { x: 0, opacity: 0.5 },
                    hover: { x: 8, opacity: 1 }
                  }}
                  transition={{ duration: 0.3, ease: smoothEase }}
                  className="text-primary"
                >
                  <ArrowRight size={32} strokeWidth={3} />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Footer Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-24 flex items-start gap-12 border-t border-border/40 pt-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ delay: 1.6 + (index * 0.15), duration: 0.4, ease: smoothEase }}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.9 }}
                  transition={{ delay: 1.7 + (index * 0.15), duration: 0.3 }}
                  className="text-3xl font-bold text-foreground"
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
