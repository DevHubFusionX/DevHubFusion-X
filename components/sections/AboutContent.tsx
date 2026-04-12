"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, MapPin, Calendar, Terminal, Send } from 'lucide-react';
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
        { icon: MapPin, title: 'Remote', label: 'Location', subtitle: 'Available Globally', offset: 0 },
        { icon: Calendar, title: '5+ Years', label: 'Experience', subtitle: 'Professional Dev', offset: 16 },
        { icon: Terminal, title: '100%', label: 'Focus', subtitle: 'Scalable Systems', offset: 32 },
        { icon: Code, title: 'React', label: 'Core Stack', subtitle: 'Next.js & TypeScript', offset: 48 },
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
            title: 'The "Red Button" Effect',
            content: `Psychological Reactance is why I don't chase leads. When you are "too available," your value decreases. By being selective, I ensure that every partnership I take on gets my absolute best focus. This protects my time and your investment.`
        },
        {
            title: 'Authority Over Service',
            content: `I don't just "take tickets." I build assets. Whether it's a high-conversion landing page or a complex SaaS dashboard, I approach every line of code with a strategic outcome in mind. If it doesn't move the needle, I don't build it.`
        },
        {
            title: 'The "DevHubFusionX" Promise',
            content: `My process is designed to filter out noise. This means we move faster, communicate clearer, and launch sooner. No middle-managers, no bloat. Just direct, high-impact engineering.`
        }
    ];

    return (
        <main className="min-h-screen bg-background pt-32 pb-20">

            {/* Header Section */}
            <section ref={headerRef} className="container mx-auto px-6 md:px-12 mb-24">
                <div className="max-w-4xl">
                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, ease: smoothEase }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
                            style={{ transformOrigin: 'left' }}
                            className="h-[2px] w-12 bg-primary"
                        />
                        <span className="text-sm font-bold tracking-widest uppercase text-foreground">The Profile</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
                        className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-foreground uppercase mb-8"
                    >
                        Behind the <br />
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="text-primary"
                        >
                            Strategy.
                        </motion.span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: smoothEase }}
                        className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed max-w-2xl mb-12"
                    >
                        Frontend-focused Full-Stack Developer building production-grade web applications across logistics, SaaS, media, and service platforms. Focused on shipping fast, solving real problems, and leveraging modern tools to create high-impact digital products.
                    </motion.p>

                    {/* Dossier Download Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: smoothEase }}
                    >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center gap-4 px-8 py-5 bg-foreground text-background rounded-full font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-black/5 group cursor-pointer"
                        >
                            <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            <span>Request Technical Dossier</span>
                        </button>
                    </motion.div>
                </div>
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
                                className={`p-8 rounded-[2.5rem] bg-white border border-green-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start gap-6 group lg:mt-${stat.offset}`}
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
                        <h2 className="text-4xl font-bold text-foreground mb-4">The Arsenal</h2>
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
                        Proficiency audit across the full stack. Focus on production-grade systems.
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
                        <h3 className="text-xl font-bold uppercase tracking-widest text-muted-foreground border-b border-border pb-4">Backend & Infra</h3>
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

            {/* The Strategy Deep Dive */}
            <section ref={strategyRef} className="container mx-auto px-6 md:px-12 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={strategyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, ease: smoothEase }}
                            className="text-4xl md:text-5xl font-black text-foreground uppercase leading-none sticky top-32"
                        >
                            Why I <br />
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={strategyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="text-primary inline-block"
                            >
                                Win.
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
                title="Request Technical Dossier"
                subject="Technical Dossier Request"
                initialDescription="I would like to receive your Technical Dossier for DevHubFusion-X. Please send it to my email once reviewed."
            />
        </main>
    );
};
