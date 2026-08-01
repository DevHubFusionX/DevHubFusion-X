"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What kind of software do you build?",
        answer: "I am a lead full-stack software engineer specializing in custom web applications, SaaS dashboards, e-commerce storefronts, logistics tracking systems, and automation pipelines that maximize sales and operational output for startups and enterprises globally."
    },
    {
        question: "Can you build ride-hailing platforms or logistics systems?",
        answer: "Yes. I have direct experience engineering ride-hailing, mobility, and delivery tracking platforms. I build complete custom systems including real-time GPS tracking, driver interfaces, intelligent booking engines, secure payments, and administrative control panels."
    },
    {
        question: "How much does it cost to build a custom system?",
        answer: "The cost depends on system complexity. A simple website starts from ₦150,000–₦500,000. A custom web application or SaaS platform typically ranges from ₦500,000–₦3,000,000+. Ride-hailing or logistics tracking systems with real-time requirements start from ₦1,500,000+. Contact me at devhubfusionx@gmail.com for a detailed scope and timeline proposal."
    },
    {
        question: "What technologies do you use?",
        answer: "My core technology stack features React and Next.js for the frontend, Node.js and Express for the backend, with MongoDB, Firebase, or MySQL/PostgreSQL for databases. I utilize TypeScript for type safety, Tailwind CSS for styling, Framer Motion for premium animations, and integrate robust third-party APIs for payments, map services, and real-time synchronization."
    },
    {
        question: "Do you work with clients outside Nigeria?",
        answer: "Yes. I serve clients and businesses globally. I have delivered production-grade systems for clients in the UK, US, and across West Africa, operating with structured remote delivery milestones and clear communication."
    },
    {
        question: "What kind of projects or startups do you work best with?",
        answer: "I work best with businesses and founders ready to build or automate. My sweet spot is mobility systems (ride-hailing, logistics), SaaS platforms, e-commerce operations, and custom business workflows. I have shipped products like blynQe, FindMe, Comtranz Global, and Dara Express."
    },
    {
        question: "Can you help automate or modernize an existing system?",
        answer: "Yes. I offer legacy system modernization, workflow automation, performance optimization, and custom API integrations. Whether you need to migrate an old codebase to modern React/Next.js or streamline manual spreadsheets into an automated dashboard, I can audit your system and build a clear path forward."
    }
];

export const FAQ = () => {
    const containerRef = useRef(null);
    const inView = useInView(containerRef, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const smoothEase = [0.25, 0.1, 0.25, 1] as const;
    const snappyEase = [0.16, 1, 0.3, 1] as const;

    return (
        <section className="py-28 md:py-36 bg-background" id="faq" ref={containerRef}>
            <div className="container mx-auto px-6 md:px-12">

                {/* Two-column layout: header left, accordion right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

                    {/* Left column — sticky header */}
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32">
                            <div className="flex items-center gap-3 mb-6">
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                                    transition={{ duration: 0.5, ease: snappyEase }}
                                    style={{ transformOrigin: 'left' }}
                                    className="h-0.5 w-12 bg-primary"
                                />
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                    transition={{ duration: 0.4, delay: 0.2, ease: smoothEase }}
                                    className="text-sm font-bold tracking-widest uppercase text-foreground"
                                >
                                    FAQ
                                </motion.span>
                            </div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
                                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(12px)" }}
                                transition={{ duration: 0.6, ease: smoothEase }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground leading-[1.1] mb-6"
                            >
                                Got <br />
                                <span className="text-primary">Questions?</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 10, filter: "blur(8px)" }}
                                transition={{ delay: 0.3, duration: 0.5, ease: smoothEase }}
                                className="text-lg text-muted-foreground leading-relaxed mb-8"
                            >
                                Everything you need to know about working with me. Can&apos;t find what you&apos;re looking for?
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 10, filter: "blur(6px)" }}
                                transition={{ delay: 0.4, duration: 0.5, ease: smoothEase }}
                            >
                                <a
                                    href="https://wa.me/2348030531624?text=Hi%20Frank%2C%20I%20have%20a%20question%20about%2520your%20services.%252520Can%252520we%252520chat%3F"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-colors duration-200 group"
                                >
                                    Ask Me Directly
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right column — accordion */}
                    <div className="lg:col-span-8">
                        <div className="space-y-0">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(10px)" }}
                                        transition={{ duration: 0.5, delay: 0.08 * index, ease: smoothEase }}
                                        className="border-b border-border/40"
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="w-full flex items-start justify-between py-7 text-left group cursor-pointer gap-6"
                                        >
                                            <div className="flex items-start gap-5">
                                                <span className="text-sm font-mono font-bold text-muted-foreground/50 mt-1.5 shrink-0 tabular-nums">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                                <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                                                    {faq.question}
                                                </h3>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: isOpen ? 90 : 0 }}
                                                transition={{ duration: 0.25, ease: snappyEase }}
                                                className="shrink-0 mt-1.5 w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors duration-200"
                                            >
                                                {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                                            </motion.div>
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.35, ease: snappyEase }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pb-8 pl-12 md:pl-14 pr-14">
                                                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
