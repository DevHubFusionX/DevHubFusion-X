"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  // Stagger animation for social links
  const socialLinks = [
    { name: 'Twitter / X', url: 'https://x.com/DevHubFusionX' },
    { name: 'GitHub', url: 'https://github.com/DevHubFusionX' },
    { name: 'TikTok', url: 'https://tiktok.com/@DevHubFusionX' }
  ];

  // Letter animation for "LET'S TALK"
  const letters = "LET'S TALK".split('');

  return (
    <footer
      ref={footerRef}
      className="bg-primary text-white overflow-hidden relative pt-16 md:pt-24 pb-10 sm:pb-12"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">

        {/* Top Row: Links & Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-10 md:gap-12">

          {/* Connect Section */}
          <div className="space-y-4 sm:space-y-5">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-xs font-mono uppercase tracking-widest text-white/60"
            >
              Connect
            </motion.h3>
            <div className="flex flex-col space-y-2.5 sm:space-y-3">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + (index * 0.08),
                    ease: "easeOut"
                  }}
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl font-bold text-white hover:text-white/70 transition-colors flex items-center gap-2 group w-fit"
                    itemProp="sameAs"
                  >
                    <span className="relative overflow-hidden">
                      {social.name}
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-white/50"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ transformOrigin: 'left' }}
                      />
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="text-left md:text-right w-full md:w-auto"
          >
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-xs font-mono uppercase tracking-widest text-white/60 mb-2 sm:mb-3"
            >
              Inquiries
            </motion.h3>
            <Link
              href="mailto:devhubfusionx@gmail.com"
              className="group relative text-[5.2vw] sm:text-2xl md:text-3xl font-black text-white hover:text-white/80 transition-colors inline-block leading-none break-all"
              itemProp="email"
            >
              <span className="relative z-10">devhubfusionx@gmail.com</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[2px] bg-white/30"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-3 sm:mt-4 max-w-xs md:ml-auto text-white font-bold text-sm"
            >
              <span itemProp="name">Franklin Anyanwu</span> — Lead Full-Stack Engineer
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-1 text-xs max-w-xs md:ml-auto text-white/70 font-medium leading-relaxed"
              itemProp="address" itemScope itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="addressLocality">Lagos</span>, <span itemProp="addressRegion">Lagos State</span>, <span itemProp="addressCountry">Nigeria</span> • Available Worldwide
            </motion.p>
          </motion.div>
        </div>

        {/* Oversized Footer Text - Letter by Letter Animation */}
        <div className="border-t border-white/20 pt-10 pb-4">
          <div className="text-[10vw] md:text-[11vw] leading-none font-black tracking-tighter text-center md:text-left py-2 text-white">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-[2vw] gap-y-4 sm:gap-y-5">
              <div className="flex">
                {letters.map((letter, index) => (
                  <motion.span
                    key={`letter-${index}`}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + (index * 0.04),
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="inline-block"
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </div>

              {/* Pill 1: Deep forest/emerald-950 backdrop for high contrast on green background */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="px-3 py-1.5 sm:px-6 sm:py-3 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 font-mono text-[8px] sm:text-xs uppercase tracking-widest font-black shadow-lg shrink-0 select-none cursor-default hover:scale-105 transition-transform duration-200"
              >
                patronize frank
              </motion.div>

              {/* Pill 2: Light Slate/White Theme */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ delay: 0.95, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="px-3 py-1.5 sm:px-6 sm:py-3 rounded-full bg-white border border-slate-200 text-zinc-950 font-mono text-[8px] sm:text-xs uppercase tracking-widest font-black shadow-md shrink-0 select-none cursor-default hover:scale-105 transition-transform duration-200"
              >
                excel is not a database
              </motion.div>

              {/* Pill 3: Black Theme */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ delay: 1.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="px-3 py-1.5 sm:px-6 sm:py-3 rounded-full bg-black border border-zinc-800 text-white font-mono text-[8px] sm:text-xs uppercase tracking-widest font-black shadow-lg shrink-0 select-none cursor-default hover:scale-105 transition-transform duration-200"
              >
                code runs, cash flows
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.4, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/20 text-sm text-white/60 font-medium"
        >
          <p>© {new Date().getFullYear()} Franklin Anyanwu | DevHubFusionX — Custom Software & Automations</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};
