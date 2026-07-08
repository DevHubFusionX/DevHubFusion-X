"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Copy, ArrowRight, MessageCircle, Send } from 'lucide-react';
import { ApplicationModal } from './ApplicationModal';
import { PerspectiveGrid } from '@/components/ui/perspective-grid';

const WA_LINK = "https://wa.me/2348030531624?text=Hi%20DevHubFusionX%2C%20I%27m%20ready%20to%20start%20a%20project.%20Let%27s%20talk.";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const smoothEase = [0.25, 0.1, 0.25, 1] as const;

  const copyEmail = () => {
    navigator.clipboard.writeText("devhubfusionx@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-background py-8 md:py-12"
      id="contact"
      aria-label="Contact DevHubFusionX — Software Systems & Automations"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Contained card */}
        <div className="relative overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-800/80">

          {/* Perspective Grid Background */}
          <div className="absolute inset-0 z-0 opacity-80">
            <PerspectiveGrid gridSize={25} showOverlay={true} fadeRadius={85} className="bg-zinc-950 [--fade-stop:#09090b]" />
          </div>

          {/* Content */}
          <div className="relative z-20 px-6 sm:px-10 md:px-14 py-10 md:py-16 pointer-events-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              
              {/* Left Column — Text & Actions */}
              <div className="lg:col-span-7">
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: smoothEase }}
                  className="flex items-center gap-2.5 mb-4 md:mb-6"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400">
                    Get Started
                  </span>
                </motion.div>
 
                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
                  className="text-xl sm:text-2xl md:text-4xl font-black tracking-tight text-white leading-[1.15] mb-4 md:mb-6 animate-pulse-faint"
                >
                  <span className="hidden sm:inline">
                    Start building your product <br className="hidden md:block" />
                    the way it should be built.
                  </span>
                  <span className="inline sm:hidden">
                    Start building your product.
                  </span>
                </motion.h2>
 
                {/* Body */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
                  className="text-xs md:text-base text-zinc-400 leading-relaxed max-w-md mb-6 md:mb-8"
                >
                  <span className="hidden sm:inline">
                    We build custom apps and automated workflows that run your business for you. Ready to start? Let&apos;s talk about what you need.
                  </span>
                  <span className="inline sm:hidden">
                    We build custom apps and automated workflows that run your business for you. Let&apos;s talk.
                  </span>
                </motion.p>
 
                {/* Action row */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: smoothEase }}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 w-full"
                >
                  {/* WhatsApp CTA */}
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-zinc-950 text-sm font-bold rounded-full hover:bg-primary hover:text-white transition-colors duration-300 pointer-events-auto group w-full sm:w-auto text-center"
                  >
                    <MessageCircle size={15} />
                    Chat on WhatsApp
                  </a>
 
                  {/* Start a Project */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-transparent border border-zinc-800 text-white text-sm font-bold rounded-full hover:bg-zinc-900 transition-colors duration-300 cursor-pointer pointer-events-auto group w-full sm:w-auto"
                  >
                    Start a Project
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
 
                  {/* Email copy */}
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer pointer-events-auto w-full sm:w-auto"
                  >
                    <span className="font-mono">devhubfusionx@gmail.com</span>
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.span
                          key="check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="text-primary text-xs font-bold"
                        >
                          ✓
                        </motion.span>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Copy size={12} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              </div>
 
              {/* Right Column — Email Subscribe Form */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: smoothEase }}
                  className="bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md rounded-2xl p-5 md:p-8"
                >
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 sm:mb-2">Subscribe</h3>
                  <p className="hidden sm:block text-xs text-zinc-400 mb-6">Stay updated with engineering insights and case studies.</p>
                  
                  <form onSubmit={handleSubscribe} className="relative flex flex-col gap-3 pointer-events-auto">
                    <div className="relative flex items-center bg-zinc-950 border border-zinc-800 rounded-full p-1.5 focus-within:border-primary/50 transition-colors">
                      <input
                        type="email"
                        required
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent pl-4 pr-16 py-2 text-xs md:text-sm text-white placeholder-zinc-500 focus:outline-none"
                      />
                      <button
                        type="submit"
                        disabled={subscribed}
                        className="absolute right-2 top-1.5 bottom-1.5 px-3 md:px-4 bg-primary text-white text-[10px] md:text-xs font-bold rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors disabled:bg-zinc-800 disabled:text-zinc-600 cursor-pointer"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
 
                  <AnimatePresence>
                    {subscribed && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-primary font-bold mt-3 text-center"
                      >
                        Thanks for subscribing!
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
 
            </div>
          </div>
        </div>
      </div>

      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
