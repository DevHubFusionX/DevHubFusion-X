"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { StrategyGrid } from '@/components/sections/StrategyGrid';
import { Contact } from '@/components/sections/Contact';

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

export const StrategyContent = () => {
    return (
        <main className="min-h-screen bg-background text-foreground pt-24">
            <div className="container mx-auto px-6 md:px-12 mb-12 text-center max-w-3xl">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: smoothEase }}
                    className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6"
                >
                    How we build <span className="text-primary">your software.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
                    className="text-xl text-muted-foreground leading-relaxed mx-auto max-w-2xl"
                >
                    We follow a simple, step-by-step process. This keeps things on track and makes sure you get exactly what your business needs.
                </motion.p>
            </div>

            <StrategyGrid />

            {/* Re-use Contact for conversion at bottom of strategy */}
            <div className="border-t border-border/40">
                <Contact />
            </div>
        </main>
    );
};
