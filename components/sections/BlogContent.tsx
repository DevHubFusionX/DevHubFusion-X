"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { posts, Post } from '@/data/posts';

const CATEGORIES = ["All", ...Array.from(new Set(posts.map(p => p.category)))];

function PostCard({ post, index, large = false }: { post: Post; index: number; large?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const smoothEase = [0.25, 0.1, 0.25, 1] as const;

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  });

  if (large) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href={`/blog/${post.slug}`}
          className="group block bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 transition-all duration-300"
        >
          {/* Large feature card body */}
          <div className="p-5 sm:p-8 md:p-12 flex flex-col justify-between min-h-[280px] sm:min-h-[340px]">
            {/* Top */}
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  {post.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                  <Clock size={9} /> {post.readTime}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white leading-[1.15] mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
            </div>
            {/* Bottom */}
            <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-zinc-800/60 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{formattedDate}</span>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:gap-3 transition-all duration-200">
                Read Article <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, delay: index * 0.06, ease: smoothEase }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col h-full border-b border-border/40 py-6 sm:py-8 hover:border-primary/30 transition-colors duration-300"
      >
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
            {post.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
            <Clock size={9} /> {post.readTime}
          </span>
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-foreground leading-snug mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>
        <div className="mt-4 sm:mt-5 flex items-center justify-between">
          <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">{formattedDate}</span>
          <span className="text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
            Read <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function BlogContent() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const smoothEase = [0.25, 0.1, 0.25, 1] as const;
  const snappyEase = [0.16, 1, 0.3, 1] as const;

  const featured = posts.filter(p => p.featured);
  const filtered = activeCategory === "All"
    ? posts
    : posts.filter(p => p.category === activeCategory);
  const nonFeatured = filtered.filter(p => !p.featured);

  return (
    <main className="min-h-screen bg-background text-foreground pt-24 sm:pt-32 pb-16 sm:pb-20">

      {/* ── HEADER ── */}
      <section ref={headerRef} className="container mx-auto px-6 md:px-12 mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: snappyEase }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, ease: snappyEase }}
              style={{ transformOrigin: 'left' }}
              className="h-0.5 w-10 bg-primary"
            />
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
              Engineering Journal
            </span>
          </div>

          {/* Headline */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[1.0]">
              Build <span className="text-primary">Smarter.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-sm md:max-w-xs pb-1">
              Real insights on building software systems, making technical decisions, and growing a tech business in Nigeria.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── FEATURED POSTS ── */}
      {(activeCategory === "All") && featured.length > 0 && (
        <section className="container mx-auto px-6 md:px-12 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-muted-foreground/50">Featured</span>
            <div className="h-px flex-1 bg-border/40" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featured.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} large />
            ))}
          </div>
        </section>
      )}

      {/* ── CATEGORY FILTER ── */}
      <section className="container mx-auto px-6 md:px-12 mb-8 sm:mb-12 overflow-hidden">
        <div className="w-full max-w-full flex items-center gap-2 overflow-x-auto touch-pan-x scrollbar-none snap-x snap-mandatory flex-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-2 md:pb-0">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer shrink-0 snap-center ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-[0_4px_14px_-4px_rgba(5,150,105,0.4)]'
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>


      {/* ── ALL POSTS LIST — editorial style matching testimonials grid ── */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-20">

          {/* Left: sticky count + CTA */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <div className="text-6xl font-black tracking-tighter text-foreground/10 mb-2 leading-none">
                  {String(filtered.length).padStart(2, '0')}
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
                  {activeCategory === "All" ? "Total Articles" : activeCategory}
                </div>

                <div className="border-t border-border/40 pt-8 space-y-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Have a topic you want covered? Or a project you want to discuss?
                  </p>
                  <a
                    href="https://wa.me/2348030531624?text=Hi%20Frank%2C%20I%20have%20a%20question%20about%20a%20blog%20topic."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-hover transition-colors group"
                  >
                    Ask me directly
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: posts list */}
          <div className="lg:col-span-9 border-t border-border/40">
            {filtered.length === 0 ? (
              <div className="py-20 text-center text-muted-foreground text-sm">
                No articles in this category yet.
              </div>
            ) : (
              filtered.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
