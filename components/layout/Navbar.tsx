"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'How we work', href: '/strategy' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-6',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/40 py-4'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Architectural Logo Style */}
        <Link href="/" className="group flex flex-col items-start leading-none font-black tracking-tighter text-xl md:text-2xl uppercase">
          <span className="group-hover:text-primary transition-colors">DevHub</span>
          <span className="pl-4 group-hover:translate-x-1 transition-transform duration-300">FusionX</span>
        </Link>

        {/* Desktop Navigation & CTAs */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Reference-Style CTA Combo */}
          <div className="flex items-center gap-2 pl-4 border-l border-border/40">
            {/* 1. Circular Arrow Button */}
            <Link href="#contact" className="group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md"
              >
                <ArrowUpRight size={20} className="transition-transform group-hover:rotate-45" />
              </motion.div>
            </Link>

            {/* 2. Black Pill Button */}
            <Link href="mailto:DevHubFusionX@gmail.com">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full bg-foreground text-background font-bold text-sm hover:bg-foreground/90 transition-colors shadow-md flex items-center gap-2"
              >
                <span>Email Us</span>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/20 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-black uppercase tracking-tight text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-border/20 flex flex-col gap-4">
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="flex items-center justify-between w-full p-4 rounded-xl bg-muted">
                    <span className="font-bold">Start a Project</span>
                    <ArrowUpRight size={20} />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
