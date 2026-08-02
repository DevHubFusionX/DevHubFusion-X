"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { ApplicationModal } from './ApplicationModal';

const ITEMS = [
  {
    type: 'image',
    src: '/software/Built%20for%20Phones.jpeg',
    alt: 'Built for Phones',
  },
  {
    type: 'text',
    index: '01',
    title: 'Storefronts',
    description:
      'Ultra-fast transaction engines with secure payments, smart inventory, and real-time order notifications built to convert.',
    stack: 'Next.js · Stripe',
    theme: 'light',
  },
  {
    type: 'image',
    src: '/software/Track%20Every%20Delivery.jpeg',
    alt: 'Track Every Delivery',
  },
  {
    type: 'text',
    index: '02',
    title: 'Logistics',
    description:
      'Real-time fleet tracking, driver dispatch and route optimization. Full visibility from warehouse to doorstep.',
    stack: 'React Native · Mapbox',
    theme: 'dark',
  },
  {
    type: 'text',
    index: '03',
    title: 'Pipelines',
    description:
      'Automate invoicing, lead scoring, database syncs and reporting dashboards — zero manual overhead.',
    stack: 'TypeScript · Zapier',
    theme: 'slate',
  },
  {
    type: 'image',
    src: '/software/Kill%20Repetitive%20Work.jpeg',
    alt: 'Kill Repetitive Work',
  },
  {
    type: 'text',
    index: '04',
    title: 'Data Dashboards',
    description:
      'All your key metrics on one screen. Custom analytics interfaces designed for clarity and speed.',
    stack: 'React · Supabase',
    theme: 'light',
  },
  {
    type: 'image',
    src: '/software/Data%2C%20One%20Screen.jpeg',
    alt: 'Data, One Screen',
  },
];

const themeMap: Record<string, string> = {
  light: 'bg-white text-slate-900 border-slate-200/80',
  dark: 'bg-[#111218] text-white border-zinc-800/60',
  slate: 'bg-[#1e2130] text-white border-zinc-800/60',
};

const mutedMap: Record<string, string> = {
  light: 'text-slate-500',
  dark: 'text-zinc-400',
  slate: 'text-zinc-400',
};

const borderMap: Record<string, string> = {
  light: 'border-slate-200',
  dark: 'border-zinc-800',
  slate: 'border-zinc-700',
};

const stackMap: Record<string, string> = {
  light: 'text-slate-400',
  dark: 'text-zinc-500',
  slate: 'text-zinc-500',
};

const linkMap: Record<string, string> = {
  light: 'text-slate-900 border-slate-900/30 hover:border-slate-900',
  dark: 'text-emerald-400 border-emerald-400/30 hover:border-emerald-400',
  slate: 'text-emerald-400 border-emerald-400/30 hover:border-emerald-400',
};

export const Philosophy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: '-100px' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-[#f0f2f5] text-slate-800 relative overflow-hidden border-t border-slate-200/50"
      id="solutions"
    >
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />



      <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3 select-none">
            <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">
              DevHubFusionX / Solutions
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[0.95] uppercase">
            System <span className="text-primary">Blueprint.</span>
          </h2>
        </motion.div>

        {/* ── Bento Grid: 4 cols × 2 rows ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              className="min-h-[220px] lg:min-h-[260px]"
            >
              {item.type === 'image' ? (
                /* ── Image card ── */
                <div className="relative w-full h-full min-h-[220px] lg:min-h-[260px] rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={item.src!}
                    alt={item.alt!}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ) : (
                /* ── Text card ── */
                <div
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full h-full min-h-[220px] lg:min-h-[260px] rounded-2xl border p-6 flex flex-col justify-between cursor-pointer hover:scale-[1.015] transition-transform duration-300 shadow-sm ${themeMap[item.theme!]}`}
                >
                  {/* Top: index + stack */}
                  <div className="flex items-start justify-between">
                    <span className={`text-[9px] font-mono tracking-widest font-black ${stackMap[item.theme!]}`}>
                      [{item.index}]
                    </span>
                    <span className={`text-[9px] font-mono tracking-wider font-bold ${stackMap[item.theme!]}`}>
                      {item.stack}
                    </span>
                  </div>

                  {/* Middle: title + description */}
                  <div className="space-y-3">
                    <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className={`text-xs leading-relaxed font-medium ${mutedMap[item.theme!]}`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom: link */}
                  <button className={`self-start text-[10px] font-bold uppercase tracking-wider border-b pb-px flex items-center gap-1 transition-all group ${linkMap[item.theme!]}`}>
                    More Information
                    <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-200 pt-10"
        >
          <p className="text-base md:text-lg text-slate-500 font-medium">
            Don&apos;t see your system blueprint?{' '}
            <span className="text-slate-900 font-bold">I design custom architectures too.</span>
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
