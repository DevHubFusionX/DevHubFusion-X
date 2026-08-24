"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Layout, ShoppingCart, Truck } from 'lucide-react';
import Link from 'next/link';
import { ApplicationModal } from '@/components/sections/ApplicationModal';

export function ServicesContent() {
    const headerRef = useRef(null);
    const servicesRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
    const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const smoothEase = [0.25, 0.1, 0.25, 1] as const;

    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-20">
            <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Simple User-Friendly Header Section */}
            <section ref={headerRef} className="container mx-auto px-6 md:px-12 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: smoothEase }}
                    className="max-w-3xl"
                >
                    <div className="flex items-center gap-3 mb-5">
                        <div className="h-[2px] w-8 bg-primary"></div>
                        <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">What I Do</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 uppercase mb-6">
                        Custom Software Development in <span className="text-primary">Lagos, Nigeria.</span>
                    </h1>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                        Franklin Anyanwu (DevHubFusionX) builds custom websites, SaaS platforms, and automation tools for businesses in Nigeria and worldwide. 5+ years experience. 20+ projects shipped. You focus on growth — I handle the technical heavy lifting.
                    </p>
                </motion.div>
            </section>

            {/* Bento Grid: 1 Tall Card on the left, 2 stacked cards on the right */}
            <section ref={servicesRef} className="container mx-auto px-6 md:px-12 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

                    {/* Card 1: Tall Card - Web Apps & SaaS (Deep Emerald Green) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.6, delay: 0.05, ease: smoothEase }}
                        onClick={() => setIsModalOpen(true)}
                        className="lg:col-span-7 p-8 md:p-10 rounded-[1.5rem] bg-[#034d35] text-white border border-transparent transition-all duration-300 flex flex-col justify-between min-h-[420px] lg:min-h-[500px] overflow-hidden shadow-sm hover:scale-[1.01] cursor-pointer hover:border-emerald-500/20"
                    >
                        <div className="relative z-10">
                            {/* Icon Box */}
                            <div className="w-12 h-12 rounded-xl bg-emerald-800/50 text-white flex items-center justify-center mb-8">
                                <Layout size={20} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
                                Web Applications & SaaS
                            </h3>

                            <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed max-w-xl">
                                Custom web apps, SaaS dashboards, and business platforms that load fast, look great on any device, and automate your daily operations. Built for Nigerian businesses scaling without a full engineering team.
                            </p>
                        </div>

                        <div className="relative z-10 mt-8 pt-4 border-t border-emerald-800/50 flex items-center justify-between text-emerald-200">
                            <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Start a project</span>
                            <ArrowRight size={14} />
                        </div>
                    </motion.div>

                    {/* Right Column: Stacked Cards (Card 2 & 3) */}
                    <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">

                        {/* Card 2: E-Commerce & Payments (Sage/Mint Light Green) */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
                            onClick={() => setIsModalOpen(true)}
                            className="p-8 rounded-[1.5rem] bg-[#e6f4ea] text-[#0a361c] border border-transparent transition-all duration-300 flex flex-col justify-between min-h-[220px] lg:min-h-[236px] overflow-hidden shadow-sm hover:scale-[1.01] cursor-pointer hover:border-emerald-600/20"
                        >
                            <div className="relative z-10">
                                {/* Icon Box */}
                                <div className="w-12 h-12 rounded-xl bg-[#0a361c]/10 text-[#0a361c] flex items-center justify-center mb-6">
                                    <ShoppingCart size={20} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-[#0a361c] tracking-tight mb-2">
                                    E-Commerce & Payments
                                </h3>

                                <p className="text-sm text-[#0a361c]/80 leading-relaxed">
                                    High-converting e-commerce stores with Paystack checkout, smart inventory management, and order tracking — built specifically for Nigerian shoppers who pay by card, bank transfer, and USSD.
                                </p>
                            </div>

                            <div className="relative z-10 mt-6 pt-3 border-t border-[#0a361c]/10 flex items-center justify-between text-[#0a361c]/60">
                                <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Start a project</span>
                                <ArrowRight size={14} />
                            </div>
                        </motion.div>

                        {/* Card 3: Logistics & Delivery (Solid Black) */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.6, delay: 0.15, ease: smoothEase }}
                            onClick={() => setIsModalOpen(true)}
                            className="p-8 rounded-[1.5rem] bg-black text-white border border-transparent transition-all duration-300 flex flex-col justify-between min-h-[220px] lg:min-h-[236px] overflow-hidden shadow-sm hover:scale-[1.01] cursor-pointer hover:border-zinc-800"
                        >
                            <div className="relative z-10">
                                {/* Icon Box */}
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center mb-6">
                                    <Truck size={20} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
                                    Logistics & Mobile Apps
                                </h3>

                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    Ride-hailing and delivery apps with live GPS tracking, driver dispatch, and route optimization — built for Nigerian road networks and designed to handle unstable connectivity.
                                </p>
                            </div>

                            <div className="relative z-10 mt-6 pt-3 border-t border-zinc-800 flex items-center justify-between text-zinc-400">
                                <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Start a project</span>
                                <ArrowRight size={14} />
                            </div>
                        </motion.div>

                    </div>

                </div>
            </section>

            {/* Bottom CTA Block */}
            <section className="container mx-auto px-6 md:px-12 mb-20">
                <div className="border border-slate-200 bg-slate-50/50 p-12 md:p-20 relative overflow-hidden group rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-8 shadow-sm">
                    <div className="absolute top-0 left-0 w-2.5 h-full bg-primary" />

                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase leading-[1.05] mb-4">
                            Ready to build <br />
                            your <span className="text-primary italic font-serif">product?</span>
                        </h2>
                        <p className="text-slate-600 max-w-xl">
                            Work with me to build your custom software. I help startups and businesses worldwide build high-performance systems.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0">
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center gap-3 h-14 px-8 bg-slate-900 text-white font-bold text-sm rounded-lg transition-colors hover:bg-primary hover:text-white group/btn uppercase tracking-wider cursor-pointer"
                        >
                            <span>Start Your Project</span>
                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

        </main>
    );
}
