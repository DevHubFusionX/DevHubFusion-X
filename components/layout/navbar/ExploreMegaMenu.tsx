"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layers, BookOpen, ImageIcon, PenLine, ArrowRight } from 'lucide-react';
import { posts } from '@/data/posts';

interface ExploreMegaMenuProps {
  onClose: () => void;
}

export function ExploreMegaMenu({ onClose }: ExploreMegaMenuProps) {
  const [activeTab, setActiveTab] = useState<'Blog' | 'Gallery'>('Blog');

  // Grab the first 3 posts for the Blog tab
  const blogCards = posts.slice(0, 3).map((post) => ({
    name: post.title,
    desc: post.excerpt,
    icon: BookOpen,
    href: `/blog/${post.slug}`,
  }));

  // Setup 3 key gallery projects for the Gallery tab
  const galleryCards = [
    {
      name: 'Blynque',
      desc: 'Dating mobile platform matching screens & chat feeds.',
      icon: ImageIcon,
      href: '/gallery',
    },
    {
      name: 'Tesla Console',
      desc: 'Automotive dashboard controls, battery levels & navigation.',
      icon: Layers,
      href: '/gallery',
    },
    {
      name: 'TraceX Logistics',
      desc: 'Real-time GPS routing, dispatch maps & cargo tracking.',
      icon: Layers,
      href: '/gallery',
    },
  ];

  const rightGrid = [
    { name: 'Engineering Journal', desc: 'Read app building guides & costs', icon: BookOpen, href: '/blog' },
    { name: 'Selected Works', desc: 'Browse dashboards we shipped', icon: Layers, href: '/projects' },
    { name: 'B2B Strategy', desc: 'Our Gatekeeper Method explained', icon: PenLine, href: '/strategy', isBeta: true },
    { name: 'DevHub Profile', desc: 'Learn about Frank\'s skill stack', icon: ImageIcon, href: '/about' },
  ];

  const currentCards = activeTab === 'Blog' ? blogCards : galleryCards;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-[calc(100%+12px)] right-0 w-[820px] z-50 pointer-events-auto"
    >
      {/* Soft glow behind the panel */}
      <div className="absolute -inset-1 rounded-3xl bg-primary/5 blur-xl pointer-events-none" />

      <div className="relative rounded-3xl border border-border/80 bg-background/98 backdrop-blur-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.02)] overflow-hidden p-6 grid grid-cols-12 gap-8 text-foreground">
        
        {/* Left Column (col-span-6) */}
        <div className="col-span-6 flex flex-col">
          {/* Tab Switcher */}
          <div className="bg-muted p-1 rounded-full flex w-fit mb-6 border border-border/30">
            <button
              onClick={() => setActiveTab('Blog')}
              className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                activeTab === 'Blog'
                  ? 'bg-background text-foreground shadow-[0_2px_8px_rgba(0,0,0,0.06)]'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => setActiveTab('Gallery')}
              className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                activeTab === 'Gallery'
                  ? 'bg-background text-foreground shadow-[0_2px_8px_rgba(0,0,0,0.06)]'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Gallery
            </button>
          </div>

          {/* Cards Stack */}
          <div className="flex flex-col gap-3">
            {currentCards.map((card) => (
              <Link
                key={card.name}
                href={card.href}
                onClick={onClose}
                className="group flex items-center gap-4 p-3.5 rounded-2xl border border-border/40 bg-background hover:border-primary/30 hover:bg-muted/30 transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
              >
                {/* Dark icon box */}
                <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center shrink-0 group-hover:bg-primary/10 border border-zinc-900 group-hover:border-primary/20 transition-all duration-200">
                  <card.icon size={16} className="text-zinc-400 group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-1 truncate">
                    {card.name}
                  </h4>
                  <p className="text-[10px] text-muted-foreground leading-normal line-clamp-2">
                    {card.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column (col-span-6) */}
        <div className="col-span-6 flex flex-col justify-between">
          
          {/* 2x2 Grid of smaller links */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 pt-2">
            {rightGrid.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="group flex items-center gap-3 py-1"
              >
                {/* Small gray icon box */}
                <div className="w-8 h-8 rounded-lg bg-muted border border-border/40 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                  <item.icon size={13} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors leading-none">
                      {item.name}
                    </span>
                    {item.isBeta && (
                      <span className="px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider bg-zinc-900 text-white leading-none scale-90">
                        Beta
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-normal mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Neon Chartreuse Bottom Banner */}
          <div className="rounded-2xl bg-[#c5f82a] flex items-center justify-between p-4 shadow-[0_12px_24px_-8px_rgba(197,248,42,0.3)] mt-6">
            <span className="text-zinc-950 font-black text-xs uppercase tracking-tight pl-2">
              Start in minutes. Get scoped tomorrow.
            </span>
            <button
              onClick={() => {
                onClose();
                const event = new CustomEvent('open-contact-modal');
                window.dispatchEvent(event);
              }}
              className="bg-zinc-950 text-white hover:bg-zinc-900 px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase transition-colors shrink-0 cursor-pointer"
            >
              Get Started
            </button>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
