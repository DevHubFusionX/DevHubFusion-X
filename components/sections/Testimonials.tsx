"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Testimonial {
    id: number;
    content: string;
    author: string;
    role: string;
    project?: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        content: "Franklin doesn't just write code; he architects systems that scale. He built our entire platform from scratch and the execution was flawless — our platform stability improved instantly after launch.",
        author: "Chinedu Eze",
        role: "CEO, TechFlow",
        project: "SaaS Platform"
    },
    {
        id: 2,
        content: "A rare blend of high-end frontend design and scalable backend engineering. He delivered a complex booking automation system that saved us 85% of our manual workflow. True engineering authority.",
        author: "Aisha Balogun",
        role: "CTO, Nexus Labs",
        project: "Booking Platform"
    },
    {
        id: 3,
        content: "He transformed our fragmented legacy systems into a high-performance modern web application. Precise, fast, and highly strategic — exactly the kind of developer every Nigerian startup needs.",
        author: "Oluwaseun Adebayo",
        role: "Founder, Peak Horizon",
        project: "System Modernization"
    }
];

export const Testimonials = () => {
    const containerRef = useRef(null);
    const inView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section 
            className="py-32 bg-background border-t border-border/40" 
            id="testimonials"
            aria-label="Client Testimonials for Anyanwu Franklin — Web Developer Reviews"
        >
            <div className="container mx-auto px-6 md:px-12" ref={containerRef}>
                
                {/* Minimalist Header */}
                <div className="mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-foreground uppercase"
                    >
                        Client <span className="text-primary">Reviews.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-lg text-muted-foreground mt-4 max-w-xl"
                    >
                        What founders and CTOs say about working with Anyanwu Franklin.
                    </motion.p>
                </div>

                {/* Editorial Grid */}
                <div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-border/40 divide-y md:divide-y-0 md:divide-x divide-border/40"
                    itemScope 
                    itemType="https://schema.org/Person"
                >
                    <meta itemProp="name" content="Anyanwu Franklin" />
                    {testimonials.map((t, index) => (
                        <motion.div 
                            key={t.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.25, 0.1, 0.25, 1] }}
                            className="p-8 md:p-12 group"
                            itemScope
                            itemType="https://schema.org/Review"
                            itemProp="review"
                        >
                            <div className="text-5xl font-serif text-primary/40 mb-6 leading-none">&quot;</div>
                            <p 
                                className="text-lg md:text-xl font-medium text-foreground/90 leading-relaxed mb-12"
                                itemProp="reviewBody"
                            >
                                {t.content}
                            </p>
                            <div>
                                <div 
                                    className="font-bold text-foreground tracking-wide uppercase text-sm mb-1"
                                    itemProp="author"
                                    itemScope
                                    itemType="https://schema.org/Person"
                                >
                                    <span itemProp="name">{t.author}</span>
                                </div>
                                <div className="text-xs text-muted-foreground uppercase tracking-widest">{t.role}</div>
                                {t.project && (
                                    <div className="text-xs text-primary/60 uppercase tracking-widest mt-1">{t.project}</div>
                                )}
                            </div>
                            <meta itemProp="itemReviewed" content="Web Development Services by Anyanwu Franklin" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
