"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Truck, ShoppingBag, BarChart3, Zap, Smartphone } from 'lucide-react';
import Link from 'next/link';

const WA_NUMBER = "2348030531624";
const waLink = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const products = [
  {
    icon: ShoppingBag,
    tag: "Storefront",
    title: "Your Store, Open 24/7",
    body: "Stop losing sales after hours. Custom e-commerce with secure checkout, inventory tracking, and automated order flow — your store sells while you sleep.",
    accent: "#059669",
    waMessage: "Hi DevHubFusionX, I'm interested in building an online store / e-commerce system. Let's discuss.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  {
    icon: Truck,
    tag: "Logistics",
    title: "Track Every Delivery",
    body: "Real-time GPS tracking, driver management, and intelligent booking engines. One dashboard to control your entire fleet.",
    accent: "#10b981",
    waMessage: "Hi DevHubFusionX, I need a logistics / ride-hailing tracking platform built. Let's talk.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    icon: BarChart3,
    tag: "SaaS",
    title: "Data, One Screen",
    body: "Replace scattered spreadsheets with a custom dashboard showing revenue, users, and operations in real time. Built for your workflow.",
    accent: "#047857",
    waMessage: "Hi DevHubFusionX, I want to build a SaaS dashboard / admin panel for my business. Let's discuss.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    icon: Globe,
    tag: "Web Apps",
    title: "Fast Apps That Convert",
    body: "Custom web apps engineered for speed and SEO. Systems that rank on Google, handle thousands of users, and turn visitors into customers.",
    accent: "#34d399",
    waMessage: "Hi DevHubFusionX, I need a custom web application built. Let's discuss the details.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    icon: Zap,
    tag: "Automations",
    title: "Kill Repetitive Work",
    body: "Automated invoicing, email sequences, CRM pipelines, and data syncing. Your tools wired together so your team focuses on growth.",
    accent: "#059669",
    waMessage: "Hi DevHubFusionX, I want to automate my business workflows. Let's discuss what's possible.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&q=80",
  },
  {
    icon: Smartphone,
    tag: "Mobile-First",
    title: "Built for Phones",
    body: "80% of your customers are on mobile. Lightning-fast apps optimized for low bandwidth, any screen size, and real-world usage.",
    accent: "#10b981",
    waMessage: "Hi DevHubFusionX, I need a mobile-first web app built for my business. Let's talk.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
  },
];

export const Philosophy = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // For mobile tap-to-expand
  const [mobileActive, setMobileActive] = useState<number | null>(null);

  const smoothEase = [0.25, 0.1, 0.25, 1] as const;
  const snappyEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="py-28 md:py-36 bg-background relative overflow-hidden" id="solutions">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div ref={headerRef} className="max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, ease: snappyEase }}
              style={{ transformOrigin: 'left' }}
              className="h-0.5 w-12 bg-primary"
            />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.2, ease: smoothEase }}
              className="text-sm font-bold tracking-widest uppercase text-foreground"
            >
              What We Build
            </motion.span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground leading-[1.1] mb-6">
            <span className="block overflow-hidden">
              {["Software", "that", "runs"].map((word, i) => (
                <motion.span
                  key={`h1-${i}`}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={headerInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + (i * 0.06), ease: snappyEase }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block text-primary overflow-hidden">
              {["your", "business", "for", "you."].map((word, i) => (
                <motion.span
                  key={`h2-${i}`}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={headerInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + (i * 0.06), ease: snappyEase }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>
        </div>

        {/* ── Desktop: Hover-expandable horizontal panels ──────────────── */}
        <div
          ref={gridRef}
          className="hidden md:flex gap-2 h-[420px]"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {products.map((product, index) => {
            const Icon = product.icon;
            const isActive = activeIndex === index;
            const hasActive = activeIndex !== null;

            return (
              <motion.div
                key={product.tag}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView
                  ? {
                      opacity: 1,
                      y: 0,
                      flex: isActive ? 4 : hasActive ? 0.6 : 1,
                    }
                  : { opacity: 0, y: 30, flex: 1 }
                }
                transition={{
                  opacity: { duration: 0.5, delay: 0.05 * index, ease: smoothEase },
                  y: { duration: 0.5, delay: 0.05 * index, ease: smoothEase },
                  flex: { duration: 0.5, ease: snappyEase },
                }}
                onMouseEnter={() => setActiveIndex(index)}
                className="relative rounded-2xl overflow-hidden cursor-pointer border border-border/50 group"
                style={{ minWidth: 0 }}
              >
                {/* Background image — always visible */}
                <img
                  src={product.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

                {/* Left accent bar */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-primary z-20"
                  animate={{ scaleY: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: snappyEase }}
                  style={{ transformOrigin: 'top' }}
                />

                {/* Content */}
                <div className="relative z-10 h-full p-6 md:p-8">
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      /* ── Expanded state ── */
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: smoothEase }}
                        className="h-full flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary text-white shrink-0">
                              <Icon size={20} strokeWidth={2} />
                            </div>
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">
                              {product.tag}
                            </span>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight mb-3">
                            {product.title}
                          </h3>
                        </div>

                        <div className="mt-auto">
                          <p className="text-base text-white/80 leading-relaxed mb-5">
                            {product.body}
                          </p>
                          <a
                            href={waLink(product.waMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-primary-hover transition-colors duration-200 group/cta"
                          >
                            Build This
                            <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </motion.div>
                    ) : (
                      /* ── Collapsed state: vertical text ── */
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="h-full flex flex-col items-center"
                      >
                        <motion.div
                          className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 shrink-0 bg-white/20 backdrop-blur-sm text-white"
                        >
                          <Icon size={20} strokeWidth={2} />
                        </motion.div>
                        <div className="flex-1 flex items-center justify-center min-h-0">
                          <h3
                            className="text-base font-bold text-white tracking-tight whitespace-nowrap"
                            style={{
                              writingMode: 'vertical-rl',
                              textOrientation: 'mixed',
                              transform: 'rotate(180deg)',
                            }}
                          >
                            {product.title}
                          </h3>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Mobile: Tap-to-expand vertical accordion ─────────────────── */}
        <div className="flex md:hidden flex-col gap-3">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isOpen = mobileActive === index;

            return (
              <motion.div
                key={product.tag}
                initial={{ opacity: 0, y: 20 }}
                animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.05 * index, duration: 0.4, ease: smoothEase }}
                onClick={() => setMobileActive(isOpen ? null : index)}
                className="border border-border/50 rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Header row — always visible */}
                <div className="flex items-center gap-4 p-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300"
                    style={{
                      backgroundColor: isOpen ? 'var(--color-primary)' : 'rgba(5,150,105,0.1)',
                      color: isOpen ? '#ffffff' : 'var(--color-primary)',
                    }}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-foreground block">
                      {product.tag}
                    </span>
                    <h3 className="text-base font-bold text-foreground tracking-tight truncate">
                      {product.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-muted-foreground shrink-0"
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </div>

                {/* Expandable content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: snappyEase }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="rounded-lg overflow-hidden mb-4 h-40">
                          <img
                            src={product.image}
                            alt={product.tag}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {product.body}
                        </p>
                        <a
                          href={waLink(product.waMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-primary-hover transition-colors"
                        >
                          Build This
                          <ArrowRight size={12} />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5, ease: smoothEase }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border/40 pt-10"
        >
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Don&apos;t see your idea here? <span className="text-foreground font-bold">We build that too.</span>
          </p>
          <a
            href={waLink("Hi DevHubFusionX, I have a project idea I'd like to discuss. Let's talk.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-[0_10px_35px_-10px_rgba(5,150,105,0.4)] hover:bg-primary-hover hover:shadow-[0_15px_40px_-10px_rgba(5,150,105,0.5)] hover:-translate-y-0.5 transition-all duration-300 group"
          >
            Tell Us What You Need
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
