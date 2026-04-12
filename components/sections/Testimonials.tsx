"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Testimonial {
    id: number;
    content: string;
    author: string;
    role: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        content: "Franklin doesn't just write code; he architects logic. The execution was flawless, and the platform stability improved instantly.",
        author: "Chinedu Eze",
        role: "CEO, TechFlow",
    },
    {
        id: 2,
        content: "A rare blend of high-end frontend design and scalable backend systems. True engineering authority that delivered beyond our expectations.",
        author: "Aisha Balogun",
        role: "CTO, Nexus Labs",
    },
    {
        id: 3,
        content: "He transformed our fragmented legacy systems into a high-performance modern asset. Precise, fast, and highly strategic.",
        author: "Oluwaseun Adebayo",
        role: "Founder, Peak Horizon",
    }
];

export const Testimonials = () => {
    const containerRef = useRef(null);
    const inView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section className="py-32 bg-background border-t border-border/40" id="testimonials">
            <div className="container mx-auto px-6 md:px-12" ref={containerRef}>
                
                {/* Minimalist Header */}
                <div className="mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-foreground uppercase"
                    >
                        Industry <span className="text-primary">Consensus.</span>
                    </motion.h2>
                </div>

                {/* Editorial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-border/40 divide-y md:divide-y-0 md:divide-x divide-border/40">
                    {testimonials.map((t, index) => (
                        <motion.div 
                            key={t.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.25, 0.1, 0.25, 1] }}
                            className="p-8 md:p-12 group"
                        >
                            <div className="text-5xl font-serif text-primary/40 mb-6 leading-none">"</div>
                            <p className="text-lg md:text-xl font-medium text-foreground/90 leading-relaxed mb-12">
                                {t.content}
                            </p>
                            <div>
                                <div className="font-bold text-foreground tracking-wide uppercase text-sm mb-1">{t.author}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-widest">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
