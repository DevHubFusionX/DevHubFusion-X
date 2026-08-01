"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, MapPin, Calendar, Send, Briefcase } from 'lucide-react';
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
        { 
            icon: MapPin, 
            title: 'Lagos', 
            label: 'Location', 
            subtitle: 'Nigeria • Remote Ready', 
            offset: 0,
            cardBg: "bg-[#064e3b] text-white border-transparent",
            iconBg: "bg-emerald-800/40 text-emerald-100",
            titleColor: "text-white",
            labelColor: "text-emerald-200/90",
            subColor: "text-emerald-200/70"
        },
        { 
            icon: Calendar, 
            title: 'Systems', 
            label: 'Core Focus', 
            subtitle: 'Automation & Operations', 
            offset: 16,
            cardBg: "bg-[#059669] text-white border-transparent",
            iconBg: "bg-emerald-500/40 text-emerald-100",
            titleColor: "text-white",
            labelColor: "text-emerald-100/90",
            subColor: "text-emerald-100/75"
        },
        { 
            icon: Briefcase, 
            title: '15+', 
            label: 'Shipped Apps', 
            subtitle: 'Live Custom Platforms', 
            offset: 32,
            cardBg: "bg-[#34d399] text-emerald-950 border-transparent",
            iconBg: "bg-emerald-400/50 text-emerald-950",
            titleColor: "text-emerald-950",
            labelColor: "text-emerald-900/90",
            subColor: "text-emerald-850/80"
        },
        { 
            icon: Code, 
            title: 'React', 
            label: 'Core Toolkit', 
            subtitle: 'Next.js, Node & TS', 
            offset: 48,
            cardBg: "bg-black text-white border-transparent",
            iconBg: "bg-zinc-900 text-white",
            titleColor: "text-white",
            labelColor: "text-zinc-400",
            subColor: "text-zinc-500"
        },
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
            title: 'How I help you',
            content: `I engineer software that increases sales and automates your day-to-day operations. I build custom web applications, e-commerce checkouts, and logistics systems. I help startups and businesses globally scale without complexity.`
        },
        {
            title: 'How I build it',
            content: `I use high-performance frameworks like React, Next.js, and Node.js. Your applications load instantly, remain secure, and scale smoothly as your customer base grows.`
        },
        {
            title: 'Work with me',
            content: `Whether you need a custom SaaS platform to test an idea or a system to run your business operations, I can engineer it for you. Let's discuss your product requirements.`
        }
    ];

    return (
        <main className="min-h-screen bg-background pt-32 pb-20">

            {/* Header Section */}
            <section ref={headerRef} className="container mx-auto px-6 md:px-12 mb-24">
                <article className="max-w-4xl mx-auto text-center" itemScope itemType="https://schema.org/Person">
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
                        <span className="text-sm font-bold tracking-widest uppercase text-foreground">About Frank</span>
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
                        I engineer systems to <span className="text-primary">help you scale.</span>
                    </motion.h1>

                    {/* Bio — Person Schema properties */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: smoothEase }}
                        className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed max-w-2xl mb-12 mx-auto text-center"
                    >
                        <p>
                            I am a full-stack software engineer based in <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress"><span itemProp="addressLocality">Lagos</span>, <span itemProp="addressCountry">Nigeria</span></span>, working with clients worldwide. I build custom web applications, online platforms, and workflows that automate your business so you can scale efficiently.
                        </p>
                        <meta itemProp="name" content="Frank" />
                        <meta itemProp="jobTitle" content="Lead Full-Stack Engineer" />
                        <meta itemProp="email" content="devhubfusionx@gmail.com" />
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

            {/* Stats Grid - Green Color Variants */}
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
                                className={`p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300 flex flex-col items-start gap-6 group ${stat.cardBg}`}
                                style={{ marginTop: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `${stat.offset * 4}px` : 0 }}
                            >
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={statsInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                    className={`w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${stat.iconBg}`}
                                >
                                    <IconComponent size={28} strokeWidth={2} />
                                </motion.div>
                                <div>
                                    <motion.h3
                                        initial={{ opacity: 0 }}
                                        animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        className={`text-4xl font-bold mb-2 ${stat.titleColor}`}
                                    >
                                        {stat.title}
                                    </motion.h3>
                                    <p className={`text-sm font-bold uppercase tracking-wider mb-1 ${stat.labelColor}`}>{stat.label}</p>
                                    <p className={`text-sm font-medium ${stat.subColor}`}>{stat.subtitle}</p>
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
                            Why Work <br />
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={strategyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="text-primary inline-block"
                            >
                                With Me.
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
                subject="Project Inquiry — Frank"
                initialDescription="I'd like to discuss a project with Frank. Here are the details:"
            />
        </main>
    );
};
