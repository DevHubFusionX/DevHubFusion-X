"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, MapPin, Calendar, Terminal, Send, Globe, Briefcase } from 'lucide-react';
import { ApplicationModal } from '@/components/sections/ApplicationModal';

export const AboutContent = () => {
    const headerRef = useRef<HTMLElement>(null);
    const statsRef = useRef<HTMLElement>(null);
    const arsenalRef = useRef<HTMLElement>(null);
    const strategyRef = useRef<HTMLElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
    const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
    const arsenalInView = useInView(arsenalRef, { once: true, margin: "-100px" });
    const strategyInView = useInView(strategyRef, { once: true, margin: "-100px" });

    // Smooth easing for balanced feel
    const smoothEase = [0.25, 0.1, 0.25, 1] as const;

    const statCards = [
        { icon: MapPin, title: 'Lagos', label: 'HQ Location', subtitle: 'Nigeria • Serving Worldwide', offset: 0 },
        { icon: Calendar, title: 'Systems', label: 'Core Focus', subtitle: 'Automation & Operations', offset: 16 },
        { icon: Briefcase, title: '15+', label: 'Products Shipped', subtitle: 'Live Custom Platforms', offset: 32 },
        { icon: Code, title: 'React', label: 'Tech Stack', subtitle: 'Next.js & Node.js', offset: 48 },
    ];

    const frontendSkills = [
        { name: 'Next.js', level: 98 },
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Framer Motion', level: 85 },
    ];

    const backendSkills = [
        { name: 'Node.js & Express', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 92 },
        { name: 'MySQL', level: 85 },
        { name: 'REST APIs & JWT', level: 90 },
    ];

    const strategyPoints = [
        {
            title: 'How we help you',
            content: `We build software that gets you more sales and automates your daily work. We make things like delivery trackers, booking apps, and custom dashboards. We help companies in Nigeria and all over the world grow faster without the stress.`
        },
        {
            title: 'How we build it',
            content: `We use modern, fast tools like React and Next.js. This means your software loads instantly, works perfectly on mobile phones, and runs smoothly as you get more customers. We have built apps for over 500,000 users and automated up to 85% of busywork.`
        },
        {
            title: 'Work with us',
            content: `Whether you need a simple app to test your idea or a full system to run your business, we can build it for you. We work with you step-by-step. Send us an email at DevHubFusionX@gmail.com to start.`
        }
    ];

    return (
        <main className="min-h-screen bg-background pt-32 pb-20">

            {/* Header Section */}
            <section ref={headerRef} className="container mx-auto px-6 md:px-12 mb-24">
                <article className="max-w-4xl mx-auto text-center" itemScope itemType="https://schema.org/Organization">
                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: smoothEase }}
                        className="flex items-center justify-center gap-3 mb-6"
                    >
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
                            style={{ transformOrigin: 'right' }}
                            className="h-0.5 w-12 bg-primary"
                        />
                        <span className="text-sm font-bold tracking-widest uppercase text-foreground">About DevHubFusionX</span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
                            style={{ transformOrigin: 'left' }}
                            className="h-0.5 w-12 bg-primary"
                        />
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground uppercase mb-8 max-w-3xl mx-auto"
                    >
                        We build software to <span className="text-primary">help you grow.</span>
                    </motion.h1>

                    {/* Bio — The most important paragraph for AI search */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: smoothEase }}
                        className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed max-w-2xl mb-12 mx-auto text-center"
                    >
                        <p>
                            We are a software team based in <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress"><span itemProp="addressLocality">Lagos</span>, <span itemProp="addressCountry">Nigeria</span></span>, working with clients worldwide. We build custom apps and automated workflows that run your business for you, so you can make more sales and save time.
                        </p>
                        <meta itemProp="name" content="DevHubFusionX" />
                        <meta itemProp="description" content="We build custom apps and automated workflows that run your business for you. Less manual work, more sales, and faster growth." />
                        <meta itemProp="email" content="DevHubFusionX@gmail.com" />
                        <meta itemProp="url" content="https://devhubfusionx.github.io/DevHubFusion-X/" />
                    </motion.div>

                    {/* Dossier Download Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: smoothEase }}
                        className="flex justify-center"
                    >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center gap-4 px-8 py-5 bg-foreground text-background rounded-full font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-black/5 group cursor-pointer"
                        >
                            <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            <span>Start Your Project</span>
                        </button>
                    </motion.div>
                </article>
            </section>

            {/* Stats Grid - Reference Style */}
            <section ref={statsRef} className="container mx-auto px-6 md:px-12 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">

                    {statCards.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: smoothEase
                                }}
                                className={`p-8 rounded-[2.5rem] bg-white border border-green-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start gap-6 group`}
                                style={{ marginTop: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `${stat.offset * 4}px` : 0 }}
                            >
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={statsInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                    className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                >
                                    <IconComponent size={28} strokeWidth={2} />
                                </motion.div>
                                <div>
                                    <motion.h3
                                        initial={{ opacity: 0 }}
                                        animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        className="text-4xl font-bold text-gray-900 mb-2"
                                    >
                                        {stat.title}
                                    </motion.h3>
                                    <p className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-1">{stat.label}</p>
                                    <p className="text-sm text-gray-500 font-medium">{stat.subtitle}</p>
                                </div>
                            </motion.div>
                        );
                    })}

                </div>
            </section>

            {/* Tech Stack - Skill Chart Layout */}
            <section ref={arsenalRef} className="container mx-auto px-6 md:px-12 mb-32">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={arsenalInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, ease: smoothEase }}
                    >
                        <h2 className="text-4xl font-bold text-foreground mb-4">Tech Stack & Skills</h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={arsenalInView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
                            style={{ transformOrigin: 'left' }}
                            className="h-1 w-20 bg-primary"
                        />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={arsenalInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: smoothEase }}
                        className="text-muted-foreground text-right max-w-sm"
                    >
                        Proficiency across the full stack. React, Next.js, Node.js, TypeScript — production-grade systems.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Frontend Domain */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={arsenalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
                        className="space-y-8"
                    >
                        <h3 className="text-xl font-bold uppercase tracking-widest text-muted-foreground border-b border-border pb-4">Frontend Architecture</h3>
                        <div className="space-y-6">
                            {frontendSkills.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={arsenalInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08, ease: smoothEase }}
                                >
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold text-foreground text-lg">{tech.name}</span>
                                        <span className="font-mono text-primary">{tech.level}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={arsenalInView ? { width: `${tech.level}%` } : { width: 0 }}
                                            transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                                            className="h-full bg-primary rounded-full"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Backend & Infrastructure */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={arsenalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: smoothEase }}
                        className="space-y-8"
                    >
                        <h3 className="text-xl font-bold uppercase tracking-widest text-muted-foreground border-b border-border pb-4">Backend & Infrastructure</h3>
                        <div className="space-y-6">
                            {backendSkills.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={arsenalInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.08, ease: smoothEase }}
                                >
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold text-foreground text-lg">{tech.name}</span>
                                        <span className="font-mono text-primary">{tech.level}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={arsenalInView ? { width: `${tech.level}%` } : { width: 0 }}
                                            transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                                            className="h-full bg-primary rounded-full"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* The Strategy Deep Dive — Rewritten for AI discoverability */}
            <section ref={strategyRef} className="container mx-auto px-6 md:px-12 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={strategyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, ease: smoothEase }}
                            className="text-4xl md:text-5xl font-black text-foreground uppercase leading-none sticky top-32"
                        >
                            Why Partner <br />
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={strategyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="text-primary inline-block"
                            >
                                With Us.
                            </motion.span>
                        </motion.h2>
                    </div>
                    <div className="lg:col-span-8 space-y-12">
                        {strategyPoints.map((point, index) => (
                            <motion.div
                                key={point.title}
                                initial={{ opacity: 0, y: 25 }}
                                animate={strategyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.15, ease: smoothEase }}
                            >
                                <h3 className="text-2xl font-bold text-foreground mb-4">{point.title}</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {point.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Start Your Project"
                subject="Project Inquiry — DevHubFusionX"
                initialDescription="We'd like to discuss a project with DevHubFusionX. Here are the details:"
            />
        </main>
    );
};
