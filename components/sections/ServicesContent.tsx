"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Database, Layout, GitMerge, Cpu, ShoppingCart, Smartphone } from 'lucide-react';
import Link from 'next/link';

export function ServicesContent() {
    const headerRef = useRef(null);
    const servicesRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
    const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

    const services = [
        {
            num: "01",
            title: "Custom Web Applications",
            desc: "We build custom websites and apps that load fast and look great on any screen. They help you get more users and keep them happy.",
            icon: Layout
        },
        {
            num: "02",
            title: "SaaS & Platform Engineering",
            desc: "We build software dashboards and tools for your business. We set up automated admin panels so you can track your business data in one place.",
            icon: Database
        },
        {
            num: "03",
            title: "Ride-Hailing & Logistics Platforms",
            desc: "We build apps with map tracking for deliveries and ride bookings. We handle driver management and show live routes so you can run your fleet easily.",
            icon: GitMerge
        },
        {
            num: "04",
            title: "E-Commerce & Fintech Solutions",
            desc: "We build online stores with secure checkout (Paystack, Stripe, etc.). We also build simple wallets and custom payment tools for your customers.",
            icon: ShoppingCart
        },
        {
            num: "05",
            title: "Mobile-Responsive Web Design",
            desc: "We make sure your website works perfectly on every mobile phone. Your customers can use it easily on the go, even with slow internet.",
            icon: Smartphone
        },
        {
            num: "06",
            title: "Technical Strategy & Code Audits",
            desc: "We check your existing software to see how to make it faster. We guide you on the best tools to use so you save money and build the right way.",
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
                        <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Web Development Services</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-foreground uppercase leading-[0.9] mb-10">
                        What We <br />
                        <span className="text-primary">Build.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed max-w-3xl">
                        We build custom apps and automated workflows that run your business for you. Less manual work, more sales, and faster growth. For companies in Nigeria and worldwide.
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
                        <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase leading-[0.9] mb-4">
                            Ready to build <br />
                            your <span className="text-primary italic font-serif">product?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                            Work with us to build your custom software. We help startups and businesses in Nigeria and all over the world.
                        </p>
                        
                        <Link href="/#contact" className="inline-flex items-center gap-4 h-16 px-10 bg-foreground text-background font-bold tracking-widest uppercase transition-all duration-300 hover:bg-primary">
                            <span>Get in Touch</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
