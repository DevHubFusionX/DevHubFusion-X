"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Terminal } from 'lucide-react';

export default function NotFound() {
    const smoothEase = [0.25, 0.1, 0.25, 1] as const;

    return (
        <main className="min-h-screen bg-background flex items-center justify-center p-6 text-center overflow-hidden">
            {/* Background glitch effect element */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none">
                <div className="absolute top-[20%] left-[10%] text-[30vw] font-black">404</div>
            </div>

            <div className="max-w-xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: smoothEase }}
                    className="mb-12 inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-primary/10 text-primary"
                >
                    <Terminal size={48} />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
                    className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6"
                >
                    Architecture <span className="text-primary">Error.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
                    className="text-xl text-muted-foreground/80 mb-12 leading-relaxed"
                >
                    The path you requested isn&apos;t part of the strategic roadmap. This route does not exist in the current system.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: smoothEase }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-black/10 group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Return to Strategy</span>
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
