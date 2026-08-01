"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ApplicationModal } from '@/components/sections/ApplicationModal';

const navLinks = [
  { name: 'How I work', href: '/strategy' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Floating Wrapper (Click-through allowed except on pills) */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none p-4 md:p-6 lg:p-8 flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo Capsule (Top Left) */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto bg-background/80 backdrop-blur-md border border-border/40 px-5 py-3 rounded-full flex items-center justify-center shadow-md hover:-translate-y-0.5 transition-transform duration-300"
        >
          <Link href="/" className="group flex items-center leading-none font-black tracking-tighter text-xl uppercase">
            <span className="group-hover:text-primary transition-colors text-slate-900">Frank</span>
            <span className="text-primary group-hover:translate-x-0.5 transition-transform">.</span>
          </Link>
        </motion.div>

        {/* Floating Menu Trigger (Mobile only, Top Right) */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto md:hidden bg-background/80 backdrop-blur-md border border-border/40 w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-all duration-300"
        >
          <button
            className="text-foreground p-2 focus:outline-none flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>

        {/* Desktop Navigation Capsule (Top Right) */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto hidden md:flex items-center gap-6 bg-background/80 backdrop-blur-md border border-border/40 pl-6 pr-2.5 py-2 rounded-full shadow-md"
        >
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="w-[1px] h-4 bg-border/40" />

          {/* Premium Pill CTA */}
          <button onClick={() => setIsModalOpen(true)} className="focus:outline-none">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 rounded-full bg-primary hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={14} />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Mobile Drawer (Underlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-45 bg-background border-l border-border/40 shadow-2xl flex flex-col p-8 md:hidden justify-between"
            >
              <div className="space-y-8 pt-20">
                <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold block uppercase border-b border-border/40 pb-2">
                  Navigation
                </span>
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      key={link.name}
                    >
                      <Link
                        href={link.href}
                        className="text-3xl font-black uppercase tracking-tight text-foreground hover:text-primary transition-colors block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="space-y-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full text-left focus:outline-none"
                >
                  <div className="flex items-center justify-between w-full p-4 rounded-xl bg-primary text-white font-bold cursor-pointer">
                    <span>Start a Project</span>
                    <ArrowUpRight size={18} />
                  </div>
                </button>
                <div className="text-[10px] font-mono text-muted-foreground text-center">
                  © {new Date().getFullYear()} Frank. Lagos, Nigeria.
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
