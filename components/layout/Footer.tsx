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
      className="bg-primary text-white overflow-hidden relative pt-20 pb-10"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Top Row: Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">

          {/* Connect Section */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-xl font-bold uppercase tracking-widest"
            >
              Connect
            </motion.h3>
            <div className="flex flex-col space-y-2">
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
                    className="text-2xl font-bold hover:text-white/70 transition-colors flex items-center gap-2 group"
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
                      size={20}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Email Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="text-right"
          >
            <Link
              href="mailto:DevHubFusionX@gmail.com"
              className="group relative text-2xl md:text-3xl font-bold inline-block"
            >
              <span className="relative z-10">DevHubFusionX@gmail.com</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[2px] bg-white/30"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-4 max-w-xs ml-auto"
            >
              Available for select strategic partnerships.
            </motion.p>
          </motion.div>
        </div>

        {/* Oversized Footer Text - Letter by Letter Animation */}
        <div className="border-t border-white/20 pt-10">
          <div className="text-[10vw] md:text-[12vw] leading-[0.85] font-black tracking-tighter text-center md:text-left overflow-hidden">
            <div className="flex justify-center md:justify-start">
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
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.4, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-center mt-12 text-sm font-medium"
        >
          <p>© {new Date().getFullYear()} DEVHUBFUSIONX™ | Anyanwu Franklin</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:opacity-100 transition-opacity duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:opacity-100 transition-opacity duration-200">Terms of Service</Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};
