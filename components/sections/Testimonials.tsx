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
        content: "Franklin rebuilt our logistics platform from scratch. It now processes 300+ deliveries daily with zero downtime. Best engineering decision we've made.",
        author: "Chinedu Eze",
        role: "CEO, TechFlow",
        project: "Logistics Platform"
    },
    {
        id: 2,
        content: "The booking system Franklin built handles all our scheduling automatically. Our team saves 15+ hours a week that we used to spend on manual coordination. Customers love it.",
        author: "Aisha Balogun",
        role: "CTO, Nexus Labs",
        project: "Booking Platform"
    },
    {
        id: 3,
        content: "Our site went from loading in 8 seconds to under 1 second after Franklin rebuilt it. Enquiries increased 40% in the first month. He knows exactly what drives business results.",
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
            aria-label="Client Testimonials for Franklin Anyanwu (DevHubFusionX) — Software Engineering Reviews"
        >
            <div className="container mx-auto px-6 md:px-12" ref={containerRef}>

                {/* Minimalist Header */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
                        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(12px)" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-foreground uppercase"
                    >
                        Client <span className="text-primary">Results.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 10, filter: "blur(8px)" }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-lg text-muted-foreground mt-4 max-w-xl"
                    >
                        What clients say after building with Franklin Anyanwu.
                    </motion.p>
                </div>

                {/* Editorial Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-border/40 divide-y md:divide-y-0 md:divide-x divide-border/40"
                    itemScope
                    itemType="https://schema.org/Organization"
                >
                    <meta itemProp="name" content="Franklin Anyanwu — DevHubFusionX" />
                    <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                        <meta itemProp="ratingValue" content="5" />
                        <meta itemProp="bestRating" content="5" />
                        <meta itemProp="reviewCount" content="3" />
                    </div>
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(12px)" }}
                            transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.25, 0.1, 0.25, 1] }}
                            className="p-8 md:p-12 group"
                            itemScope
                            itemType="https://schema.org/Review"
                            itemProp="review"
                        >
                            <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                                <meta itemProp="ratingValue" content="5" />
                                <meta itemProp="bestRating" content="5" />
                            </div>
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
                            <meta itemProp="itemReviewed" content="Software Engineering Services by Franklin Anyanwu — DevHubFusionX" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
