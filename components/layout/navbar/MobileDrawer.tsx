"use client";

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, LucideIcon } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ name: string; href: string }>;
  exploreItems: Array<{ name: string; href: string; icon: LucideIcon; desc: string }>;
  onOpenModal: () => void;
}

export function MobileDrawer({ isOpen, onClose, navLinks, exploreItems, onOpenModal }: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md md:hidden"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 bg-background border-l border-border/40 shadow-2xl flex flex-col p-8 md:hidden justify-between text-foreground"
          >
            <div className="space-y-8 pt-20">
              <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold block uppercase border-b border-border/40 pb-2">
                Navigation
              </span>
              <div className="flex flex-col gap-5">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-3xl font-black uppercase tracking-tight text-foreground hover:text-primary transition-colors block"
                      onClick={onClose}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Explore sub-section */}
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-2 border-t border-border/40"
                >
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-primary/60 mb-3 block">Explore</span>
                  {exploreItems.map((item, idx) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: (navLinks.length + idx + 1) * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 py-2.5 text-xl font-black uppercase tracking-tight text-foreground hover:text-primary transition-colors"
                        onClick={onClose}
                      >
                        <item.icon size={16} className="text-primary" />
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="space-y-4">
              <button
                onClick={() => {
                  onClose();
                  onOpenModal();
                }}
                className="w-full focus:outline-none cursor-pointer"
              >
                <div className="flex items-center justify-between w-full p-4 rounded-xl bg-primary text-white font-bold">
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
  );
}
