"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Who is Anyanwu Franklin and what does DevHubFusionX do?",
        answer: "Anyanwu Franklin is a fullstack web developer based in Lagos, Nigeria, operating under the brand DevHubFusionX. He specializes in building custom web applications, ride-hailing platforms, logistics systems, SaaS products, e-commerce websites, and fintech applications for startups and businesses across Africa and worldwide. His core tech stack includes React.js, Next.js, Node.js, TypeScript, MongoDB, Firebase, and MySQL."
    },
    {
        question: "Can you build a ride-hailing app like Uber or Bolt?",
        answer: "Yes. I have direct experience building ride-hailing and mobility platforms. I can develop the complete system including real-time GPS tracking, driver and rider interfaces, booking engines, payment integration (Paystack, Flutterwave, Stripe), admin dashboards, and notification systems. I've worked on platforms like F-Ride and understand the technical challenges of building mobility apps for the African market."
    },
    {
        question: "How much does it cost to build a web application in Nigeria?",
        answer: "The cost depends on the complexity of the project. A simple landing page or portfolio site can range from ₦150,000–₦500,000. A custom web application or SaaS platform typically ranges from ₦500,000–₦3,000,000+. Ride-hailing or logistics platforms with real-time features start from ₦1,500,000+. I provide detailed project scopes and transparent pricing before we begin. Contact me at DevHubFusionX@gmail.com for a free consultation."
    },
    {
        question: "What technologies do you use to build web applications?",
        answer: "My primary tech stack is React.js and Next.js for the frontend, Node.js and Express for the backend, with MongoDB, Firebase, or MySQL for databases. I use TypeScript for type safety, Tailwind CSS for styling, Framer Motion for animations, and Cloudinary for media handling. I also integrate third-party APIs for payments (Paystack, Flutterwave), real-time tracking, email notifications, and authentication (JWT, OAuth)."
    },
    {
        question: "Do you work with clients outside Nigeria?",
        answer: "Absolutely. While I'm based in Lagos, Nigeria, I work with clients across Africa and worldwide. I've delivered projects for clients in the UK, US, and across West Africa. I work remotely with clear communication processes, regular progress updates, and structured delivery milestones. My working hours are flexible to accommodate different time zones."
    },
    {
        question: "How long does it take to build a web application?",
        answer: "Timeline depends on project scope. A standard business website takes 1–2 weeks. A custom web application or SaaS platform takes 4–8 weeks. Complex platforms with real-time features (ride-hailing, logistics, marketplace) take 8–16 weeks. I prioritize shipping functional MVPs quickly, then iterating based on real user feedback. You'll receive weekly progress updates throughout."
    },
    {
        question: "What kind of startups do you work best with?",
        answer: "I work best with founders who have a validated idea and are ready to build. My sweet spot is mobility startups (ride-hailing, logistics), SaaS companies, e-commerce businesses, and fintech companies targeting the African market. I've shipped products like blynQe (dating app, 500K+ users), FindMe (AI service discovery), Comtranz Global (cleaning service platform), and Dara Express (logistics tracking)."
    },
    {
        question: "Can you help with an existing website or application?",
        answer: "Yes. I offer technical audits, performance optimization, and modernization services for existing web applications. Whether you need to migrate a legacy codebase to modern React/Next.js, improve page load speeds, fix bugs, add new features, or scale your infrastructure — I can help. I'll start with a thorough audit and provide a clear roadmap for improvements."
    }
];

export const FAQ = () => {
    const containerRef = useRef(null);
    const inView = useInView(containerRef, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const smoothEase = [0.25, 0.1, 0.25, 1] as const;

    return (
        <section className="py-32 bg-background border-t border-border/40" id="faq" ref={containerRef}>
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="max-w-4xl mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            style={{ transformOrigin: 'left' }}
                            className="h-[2px] w-12 bg-primary"
                        />
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.4, delay: 0.2, ease: smoothEase }}
                            className="text-sm font-bold tracking-widest uppercase text-foreground"
                        >
                            Frequently Asked Questions
                        </motion.span>
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, ease: smoothEase }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground leading-[1.1]"
                    >
                        Common <span className="text-primary">Questions.</span>
                    </motion.h2>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.1 * index, ease: smoothEase }}
                            className="border-b border-border/40"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
                            >
                                <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors pr-8">
                                    {faq.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: smoothEase }}
                                    className="text-muted-foreground shrink-0"
                                >
                                    <ChevronDown size={24} />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: smoothEase }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 text-lg text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
