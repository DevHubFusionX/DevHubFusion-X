"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Database, Layout, GitMerge, Cpu } from 'lucide-react';
import Link from 'next/link';

export function ServicesContent() {
    const headerRef = useRef(null);
    const servicesRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
    const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

    const services = [
        {
            num: "01",
            title: "Frontend Architecture",
            desc: "Designing high-fidelity, conversion-optimized interfaces that don't just load—they perform. Specializing in Next.js, React, and motion-rich UI systems to keep users deeply engaged.",
            icon: Layout
        },
        {
            num: "02",
            title: "SaaS & Platform Engineering",
            desc: "Building complex, scalable web applications. From custom booking engines to real-time dashboards, I architect the backend logic and database structures that drive core business operations.",
            icon: Database
        },
        {
            num: "03",
            title: "Logistics & API Integration",
            desc: "Unifying fragmented data. Seamless integration of global tracking APIs, secure payment gateways, and real-time operational communication tools to create a single source of truth.",
            icon: GitMerge
        },
        {
            num: "04",
            title: "Technical Strategy & Audits",
            desc: "Moving beyond code. Providing strategic oversight to optimize legacy systems, eliminate architectural debt, and ensure your digital assets directly compound your business leverage.",
            icon: Cpu
        }
    ];

    return (
        <main className="min-h-screen bg-background pt-32 pb-20">

            {/* Header Section */}
            <section ref={headerRef} className="container mx-auto px-6 md:px-12 mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="max-w-5xl"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-[2px] w-12 bg-primary"></div>
                        <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Capabilities</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-foreground uppercase leading-[0.9] mb-10">
                        Engineering <br />
                        <span className="text-primary">Capital.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed max-w-3xl">
                        I don't build generic SaaS templates. I architect robust, high-performance systems designed to automate operations and capture market share.
                    </p>
                </motion.div>
            </section>

            {/* Services List - Structural Row Format */}
            <section ref={servicesRef} className="container mx-auto px-6 md:px-12 mb-32">
                <div className="border-t border-border/40">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={service.num}
                                initial={{ opacity: 0, y: 30 }}
                                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.25, 0.1, 0.25, 1] }}
                                className="group flex flex-col md:flex-row items-start md:items-center py-12 md:py-16 border-b border-border/40 hover:bg-muted/30 transition-colors duration-500"
                            >
                                <div className="w-full md:w-1/4 mb-6 md:mb-0 flex items-center gap-6 text-muted-foreground/50 group-hover:text-primary transition-colors duration-500">
                                    <span className="text-5xl md:text-6xl font-black font-mono tracking-tighter">
                                        {service.num}
                                    </span>
                                    <IconComponent size={32} strokeWidth={1.5} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                                </div>
                                <div className="w-full md:w-1/3 mb-4 md:mb-0 pr-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-tight">
                                        {service.title}
                                    </h3>
                                </div>
                                <div className="w-full md:w-5/12 ml-auto">
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Authoritative Single CTA */}
            <section className="container mx-auto px-6 md:px-12 mb-20">
                <div className="border border-border/40 bg-transparent p-12 md:p-20 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                    
                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase leading-[0.9] mb-8">
                            Ready to formalize <br />
                            the <span className="text-primary italic font-serif">architecture?</span>
                        </h2>
                        
                        <Link href="/#contact" className="inline-flex items-center gap-4 h-16 px-10 bg-foreground text-background font-bold tracking-widest uppercase transition-all duration-300 hover:bg-primary">
                            <span>Initiate Strategy Call</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
