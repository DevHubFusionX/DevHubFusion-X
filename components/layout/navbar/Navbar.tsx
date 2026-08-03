"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, BookOpen, ImageIcon } from 'lucide-react';
import { ApplicationModal } from '@/components/sections/ApplicationModal';
import { useScrollDirection } from './useScrollDirection';
import { ExploreMegaMenu } from './ExploreMegaMenu';
import { MobileDrawer } from './MobileDrawer';

const navLinks = [
  { name: 'Work',      href: '/projects' },
  { name: 'Services',  href: '/services' },
  { name: 'Strategy',  href: '/strategy' },
  { name: 'About',     href: '/about' },
];

const exploreItems = [
  { name: 'Blog',    href: '/blog',    icon: BookOpen,  desc: 'Engineering & build guides' },
  { name: 'Gallery', href: '/gallery', icon: ImageIcon, desc: 'Process & visual work' },
];

export function Navbar() {
  const navVisible = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const handleExploreEnter = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setExploreOpen(true);
  };

  const handleExploreLeave = () => {
    leaveTimer.current = setTimeout(() => setExploreOpen(false), 150);
  };

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setExploreOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Listen to custom event to open contact modal from mega menu
  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('open-contact-modal', handleOpenModal);
    return () => window.removeEventListener('open-contact-modal', handleOpenModal);
  }, []);

  // Disable body scroll when mega dropdown or mobile menu is open
  useEffect(() => {
    if (exploreOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [exploreOpen, isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Explore Mega Menu Backdrop Blur Overlay */}
      <AnimatePresence>
        {exploreOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExploreOpen(false)}
            className="fixed inset-0 z-40 bg-black/[0.08] backdrop-blur-[6px] pointer-events-auto hidden md:block"
          />
        )}
      </AnimatePresence>

      {/* ── FLOATING BAR ───────────────────────────────────────── */}
      <motion.div
        animate={{ y: navVisible ? 0 : -120, opacity: navVisible ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none p-4 md:p-6 lg:p-8 flex items-center justify-between max-w-7xl mx-auto"
      >
        {/* Logo Capsule */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto bg-background/80 backdrop-blur-md border border-border/40 px-5 py-3 rounded-full shadow-md hover:-translate-y-0.5 transition-transform duration-300"
        >
          <Link href="/" className="group flex items-center leading-none font-black tracking-tighter text-xl uppercase">
            <span className="group-hover:text-primary transition-colors text-slate-900">Frank</span>
            <span className="text-primary group-hover:translate-x-0.5 transition-transform">.</span>
          </Link>
        </motion.div>

        {/* Mobile Hamburger */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto md:hidden bg-background/80 backdrop-blur-md border border-border/40 w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-all duration-300"
        >
          <button
            className="text-foreground p-2 focus:outline-none flex items-center justify-center cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>

        {/* Desktop Nav Capsule (with relative positioning for absolute dropdown) */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto hidden md:flex items-center gap-1 bg-background/80 backdrop-blur-md border border-border/40 pl-5 pr-2 py-2 rounded-full shadow-md relative"
        >
          {/* Standard links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest transition-colors duration-200 ${
                    isActive
                      ? 'text-primary bg-primary/8'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Explore hover trigger */}
            <div
              ref={exploreRef}
              className="relative"
              onMouseEnter={handleExploreEnter}
              onMouseLeave={handleExploreLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
                  exploreOpen
                    ? 'text-primary bg-primary/8'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}
              >
                Explore
                <motion.span
                  animate={{ rotate: exploreOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-4 bg-border/40 mx-1" />

          {/* CTA */}
          <button onClick={() => setIsModalOpen(true)} className="focus:outline-none cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 rounded-full bg-primary hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center gap-1.5"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={14} />
            </motion.div>
          </button>

          {/* Explore Mega Menu Dropdown (Rendered absolute relative to capsule) */}
          <AnimatePresence>
            {exploreOpen && (
              <div
                onMouseEnter={handleExploreEnter}
                onMouseLeave={handleExploreLeave}
              >
                <ExploreMegaMenu onClose={() => setExploreOpen(false)} />
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        exploreItems={exploreItems}
        onOpenModal={() => setIsModalOpen(true)}
      />

      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
