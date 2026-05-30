"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Copy, ArrowRight } from 'lucide-react';
import { ApplicationModal } from './ApplicationModal';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const copyEmail = () => {
    navigator.clipboard.writeText("devhubfusionx@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-48 bg-background border-t border-border/40 relative overflow-hidden"
      id="contact"
      aria-label="Contact Anyanwu Franklin — Hire a Web Developer"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          
          {/* Section Indicator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="h-[2px] w-12 bg-primary" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground">
              Hire a Web Developer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-foreground uppercase leading-[0.9] mb-12"
          >
            Let&apos;s build <br className="hidden md:block" />
            <span className="text-primary">your product.</span>
          </motion.h2>

          {/* Body Copy — AI-friendly description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6 mb-16 max-w-2xl"
          >
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
              Looking for a web developer? I&apos;m Anyanwu Franklin — a fullstack developer based in Lagos, Nigeria, available for projects worldwide.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Whether you need a custom web app, SaaS platform, ride-hailing system, or e-commerce site — let&apos;s talk about how I can help you build it.
            </p>
          </motion.div>

          {/* Action Area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
          >
            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center justify-center gap-4 h-16 px-10 bg-foreground text-background font-bold tracking-widest uppercase transition-all duration-300 hover:bg-primary"
            >
              <span>Start a Project</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Email Copy Box */}
            <div className="flex items-center">
              <button
                onClick={copyEmail}
                className="group flex items-center gap-3 h-16 px-6 border border-border bg-transparent hover:bg-muted transition-colors duration-200"
              >
                <span className="font-mono text-sm tracking-tight text-foreground/80 group-hover:text-foreground">
                  devhubfusionx@gmail.com
                </span>
                <div className="relative w-4 h-4 flex items-center justify-center text-muted-foreground group-hover:text-foreground">
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="text-primary text-sm absolute"
                      >
                        ✓
                      </motion.span>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute"
                      >
                        <Copy size={14} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
