"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Post, posts } from '@/data/posts';

function BodyRenderer({ post }: { post: Post }) {
  return (
    <div className="space-y-6">
      {post.body.map((section, i) => {
        switch (section.type) {
          case 'heading':
            return (
              <h2 key={i} className="text-2xl md:text-3xl font-black tracking-tight text-foreground pt-4">
                {section.content}
              </h2>
            );
          case 'subheading':
            return (
              <h3 key={i} className="text-lg md:text-xl font-bold text-foreground pt-2">
                {section.content}
              </h3>
            );
          case 'paragraph':
            return (
              <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            );
          case 'list':
            return (
              <ul key={i} className="space-y-2.5">
                {section.items?.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case 'callout':
            return (
              <div key={i} className="border-l-[3px] border-primary bg-secondary/60 rounded-r-xl px-4 py-3.5 sm:px-6 sm:py-5">
                <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">{section.label}</div>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{section.content}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export function BlogPostContent({ post }: { post: Post }) {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });
  const snappyEase = [0.16, 1, 0.3, 1] as const;
  const smoothEase = [0.25, 0.1, 0.25, 1] as const;

  const related = posts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <main className="min-h-screen bg-background text-foreground pt-20 sm:pt-28 pb-16 sm:pb-20">

      {/* ── BACK NAV ── */}
      <div className="container mx-auto px-6 md:px-12 mb-8 sm:mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group"
        >
          <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
          All Articles
        </Link>
      </div>

      {/* ── HERO ── */}
      <section ref={headerRef} className="container mx-auto px-6 md:px-12 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: snappyEase }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-8 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
              <Clock size={10} /> {post.readTime}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <span className="text-xs font-mono text-muted-foreground">{formattedDate}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-foreground mb-8">
            {post.title}
          </h1>

          {/* Excerpt / Lead */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed border-l-[3px] border-primary pl-5">
            {post.excerpt}
          </p>
        </motion.div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="h-px bg-border/40" />
      </div>

      {/* ── ARTICLE BODY + SIDEBAR ── */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Body */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
            className="lg:col-span-8"
          >
            <BodyRenderer post={post} />

            {/* Author sign-off */}
            <div className="mt-16 pt-10 border-t border-border/40 flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-black text-lg shrink-0">
                F
              </div>
              <div>
                <div className="font-bold text-foreground text-sm">Frank.</div>
                <div className="text-xs text-muted-foreground">Lead Full-Stack Engineer · Lagos, Nigeria</div>
                <a
                  href="mailto:devhubfusionx@gmail.com"
                  className="text-xs text-primary hover:underline mt-0.5 inline-block"
                >
                  devhubfusionx@gmail.com
                </a>
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-8">

              {/* CTA card — matches ServicesContent CTA block */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: smoothEase }}
                className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6"
              >
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-4">Start a Project</div>
                <h3 className="text-xl font-black tracking-tight text-white mb-3">
                  Ready to build?
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  I engineer custom software systems for businesses. Let&apos;s talk about what you need.
                </p>
                <a
                  href="https://wa.me/2348030531624?text=Hi%20Frank%2C%20I%20read%20your%20article%20and%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-hover transition-colors group w-full justify-center"
                >
                  Chat on WhatsApp
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>

              {/* Related posts */}
              {related.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: smoothEase }}
                >
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground mb-5">Related Articles</div>
                  <div className="space-y-0 border-t border-border/40">
                    {related.map(r => (
                      <Link
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        className="block group py-5 border-b border-border/40 hover:border-primary/30 transition-colors"
                      >
                        <div className="text-[10px] font-mono text-muted-foreground mb-1.5">{r.readTime}</div>
                        <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {r.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

            </div>
          </aside>

        </div>
      </section>

    </main>
  );
}
