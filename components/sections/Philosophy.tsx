"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ApplicationModal } from './ApplicationModal';

export const Philosophy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-32 bg-[#f8f9fa] text-slate-800 relative overflow-hidden border-t border-slate-200/50" 
      id="solutions"
    >
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Decorative vertical slide label on the left margin (Desktop only) */}
      <div className="hidden lg:flex absolute left-8 top-12 items-center gap-2 select-none pointer-events-none origin-left rotate-90 translate-y-16">
        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-black">
          voodoo / frank
        </span>
      </div>

      {/* Two horizontal dash bars on left margin (Desktop only) */}
      <div className="hidden lg:flex flex-col gap-1.5 absolute left-8 top-1/2 -translate-y-1/2 select-none pointer-events-none">
        <div className="w-6 h-[2px] bg-slate-400" />
        <div className="w-4 h-[2px] bg-slate-400" />
      </div>

      {/* Slide index number at the bottom left (Desktop only) */}
      <div className="hidden lg:block absolute left-8 bottom-12 select-none pointer-events-none">
        <span className="text-xs font-mono font-bold text-slate-400">167</span>
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Title & Editorial Paragraphs */}
          <motion.div 
            initial={{ opacity: 0, x: -35, filter: "blur(12px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, x: -35, filter: "blur(12px)" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Main Creative Title */}
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.05] uppercase mb-8">
              System <br />
              Blueprint <br />
              <span className="text-primary">Solutions.</span>
            </h2>

            {/* Editorial Heading */}
            <h3 className="text-lg font-extrabold text-slate-950 mb-4 tracking-tight">
              Software that runs your business
            </h3>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm text-slate-500 font-medium leading-relaxed max-w-sm mb-8">
              <p>
                I engineer custom storefronts, real-time dispatch dashboards, and automated database pipelines so you can eliminate manual tracking, boost conversions, and run your business on autopilot.
              </p>
              <p>
                Connect your existing software stack and build bespoke systems tailored to your workflows. Maximize operational throughput with zero-maintenance automation.
              </p>
            </div>

            {/* Action CTA */}
            <div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-slate-900 hover:bg-primary text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 group shadow-md"
              >
                <span>Start a project</span>
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Creative Staggered 3-Card Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
            
            {/* Grid Column 1: Card 1 (Aligned to bottom / staggered) */}
            <motion.div 
              initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 50, filter: "blur(12px)" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="sm:pt-28 flex flex-col justify-end"
            >
              {/* Card 1: Emerald Green Gradient */}
              <div 
                onClick={() => setIsModalOpen(true)}
                className="aspect-auto sm:aspect-square min-h-[240px] sm:min-h-0 flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer border border-emerald-500/20 relative overflow-hidden group"
              >
                <div className="absolute -right-16 -top-16 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                
                {/* Top Section */}
                <div className="flex items-center justify-between">
                  {/* Icon Container: Green Gradient mixed with white/black */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-950 border border-emerald-400/30 flex items-center justify-center shadow-inner relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10" />
                    <svg className="w-5 h-5 text-white relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest font-black text-emerald-200/80">[01]</span>
                </div>

                {/* Middle Content */}
                <div>
                  <h4 className="text-xl font-bold tracking-tight mb-2 uppercase">Storefronts</h4>
                  <p className="text-xs text-emerald-50/80 leading-relaxed font-medium">
                    Ultra-fast transaction engines with secure payments & order notifications.
                  </p>
                </div>

                {/* Bottom Technology Stack */}
                <div className="border-t border-emerald-500/20 pt-4 flex items-center justify-between">
                  <span className="text-[9px] font-mono tracking-wider text-emerald-300 font-bold uppercase">Next.js • Stripe</span>
                  <ArrowUpRight size={14} className="text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Grid Column 2: Card 2 & Card 3 Stacked */}
            <div className="flex flex-col gap-6">
              
              {/* Card 2: White Theme Card */}
              <motion.div
                initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 50, filter: "blur(12px)" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={() => setIsModalOpen(true)}
                className="aspect-auto sm:aspect-square min-h-[240px] sm:min-h-0 flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-b from-slate-50 to-white text-slate-900 border border-slate-200/80 shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute -right-16 -top-16 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                {/* Top Section */}
                <div className="flex items-center justify-between">
                  {/* Icon Container: Green Gradient */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-md relative">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <line x1="12" y1="18" x2="12" y2="18" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest font-black text-slate-400">[02]</span>
                </div>

                {/* Middle Content */}
                <div>
                  <h4 className="text-xl font-bold tracking-tight mb-2 uppercase">Logistics</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Real-time fleet tracking, driver dispatch & route optimization.
                  </p>
                </div>

                {/* Bottom Technology Stack */}
                <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
                  <span className="text-[9px] font-mono tracking-wider text-slate-500 font-bold uppercase">React Native • Mapbox</span>
                  <ArrowUpRight size={14} className="text-slate-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>

              {/* Card 3: Solid Black Card */}
              <motion.div
                initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 50, filter: "blur(12px)" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={() => setIsModalOpen(true)}
                className="aspect-auto sm:aspect-square min-h-[240px] sm:min-h-0 flex flex-col justify-between p-8 rounded-2xl bg-black text-white border border-zinc-800/80 shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute -right-16 -top-16 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                {/* Top Section */}
                <div className="flex items-center justify-between">
                  {/* Icon Container: Green Gradient mixed with black */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-black border border-emerald-500/30 flex items-center justify-center shadow-inner relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/30" />
                    <svg className="w-5 h-5 text-white relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 3v18h18" />
                      <path d="M18 9l-5 5-3-3-4 4" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest font-black text-zinc-500">[03]</span>
                </div>

                {/* Middle Content */}
                <div>
                  <h4 className="text-xl font-bold tracking-tight mb-2 uppercase">Pipelines</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    Automate invoicing, lead scoring, database syncs & dashboards.
                  </p>
                </div>

                {/* Bottom Technology Stack */}
                <div className="border-t border-zinc-800 pt-4 flex items-center justify-between">
                  <span className="text-[9px] font-mono tracking-wider text-zinc-400 font-bold uppercase">TypeScript • Zapier</span>
                  <ArrowUpRight size={14} className="text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>

            </div>

          </div>
        </div>

        {/* Bottom CTA Row (Optional / Custom designs) */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(8px)" }}
          transition={{ delay: 0.4, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-200 pt-10"
        >
          <p className="text-base md:text-lg text-slate-500 font-medium">
            Don&apos;t see your system blueprint? <span className="text-slate-900 font-bold">I design custom architectures too.</span>
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold text-sm rounded-full shadow-[0_10px_35px_-10px_rgba(5,150,105,0.4)] hover:bg-[#047857] hover:shadow-[0_15px_40px_-10px_rgba(5,150,105,0.5)] transition-all duration-300 group cursor-pointer"
          >
            <span>Tell me what you need</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
