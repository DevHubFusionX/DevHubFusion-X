"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Cpu, LineChart, ShieldCheck } from 'lucide-react';

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

export const StrategyGrid = () => {
  const row1Ref = useRef(null);
  const row1InView = useInView(row1Ref, { once: true, margin: "-100px" });

  const row2Ref = useRef(null);
  const row2InView = useInView(row2Ref, { once: true, margin: "-100px" });

  const row3Ref = useRef(null);
  const row3InView = useInView(row3Ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-background relative border-t border-primary/10" id="strategy">
      <div className="container mx-auto px-0">

        {/* Row 1: The Blueprint Header */}
        <div ref={row1Ref} className="grid grid-cols-1 md:grid-cols-12 border-b border-primary/10">
          <div className="md:col-span-8 p-12 md:p-24 border-r border-primary/10 relative overflow-hidden group">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={row1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">SYS.01</span>
              <div className="h-px w-24 bg-primary/20"></div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={row1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
              className="text-5xl md:text-8xl font-black text-foreground tracking-tighter uppercase leading-[0.85] mb-8"
            >
              Our code <br />
              <span className="text-primary text-outline-strong">standards.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={row1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: smoothEase }}
              className="text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              We write clean, high-quality code. Every app we build is designed to run fast, look great, and support your business growth.
            </motion.p>

            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={row1InView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="md:col-span-4 p-12 flex flex-col justify-end bg-primary/5"
          >
            <div className="font-mono text-xs text-muted-foreground mb-4 uppercase tracking-widest">System Status</div>
            <div className="text-4xl font-bold text-foreground mb-2">Operational</div>
            <div className="flex gap-1 h-2 w-full">
              <motion.div
                initial={{ width: 0 }}
                animate={row1InView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1.5, delay: 1, ease: smoothEase }}
                className="bg-primary"
              ></motion.div>
              <div className="w-1/3 bg-primary/30"></div>
            </div>
          </motion.div>
        </div>

        {/* Row 2: The Core Process (Asymmetrical) */}
        <div ref={row2Ref} className="grid grid-cols-1 md:grid-cols-3 border-b border-primary/10 divide-y md:divide-y-0 md:divide-x divide-primary/10">

          {/* Step 01 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={row2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
            className="p-12 hover:bg-muted/30 transition-colors group relative h-full"
          >
            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-100 group-hover:text-primary transition-all duration-300">
              <Code size={40} strokeWidth={1} />
            </div>
            <div className="font-mono text-5xl font-light text-primary/20 mb-8 group-hover:text-primary transition-colors">01</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Plan</h3>
            <p className="text-muted-foreground leading-relaxed">
              We talk about your business goals. We find the easiest and fastest way to build exactly what you need.
            </p>
          </motion.div>

          {/* Step 02 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={row2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.3, ease: smoothEase }}
            className="p-12 hover:bg-muted/30 transition-colors group relative h-full border-primary/10"
          >
            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-100 group-hover:text-primary transition-all duration-300">
              <Cpu size={40} strokeWidth={1} />
            </div>
            <div className="font-mono text-5xl font-light text-primary/20 mb-8 group-hover:text-primary transition-colors">02</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Design & Build</h3>
            <p className="text-muted-foreground leading-relaxed">
              We design and write the code for your app. We make sure it is super fast and ready to handle lots of users.
            </p>
          </motion.div>

          {/* Step 03 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={row2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.5, ease: smoothEase }}
            className="p-12 hover:bg-muted/30 transition-colors group relative h-full"
          >
            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-100 group-hover:text-primary transition-all duration-300">
              <ShieldCheck size={40} strokeWidth={1} />
            </div>
            <div className="font-mono text-5xl font-light text-primary/20 mb-8 group-hover:text-primary transition-colors">03</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Launch</h3>
            <p className="text-muted-foreground leading-relaxed">
              We test everything and launch your app. You get a complete, working product that is ready for your customers.
            </p>
          </motion.div>
        </div>

        {/* Row 3: The ROI / Gain (Breaking the Grid) */}
        <div ref={row3Ref} className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 md:p-24 border-r border-primary/10 flex flex-col justify-center">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={row3InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-8"
            >
              Why work with us.
            </motion.h3>
            <div className="space-y-6">
              {[
                { label: "Fast Delivery", value: "2x Faster" },
                { label: "App Quality", value: "Premium" },
                { label: "User Limits", value: "Unlimited" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={row3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1), ease: smoothEase }}
                  className="flex items-center justify-between border-b border-border pb-4 group/item"
                >
                  <span className="font-mono text-muted-foreground group-hover/item:text-foreground transition-colors">{item.label}</span>
                  <span className="text-2xl font-bold text-primary group-hover/item:scale-110 origin-right transition-transform">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* The Visual Breaker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={row3InView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative overflow-hidden bg-primary/5 flex items-center justify-center p-12"
          >
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(5, 150, 105, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(5, 150, 105, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 text-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-primary/40"
              >
                <LineChart className="text-white" size={40} />
              </motion.div>
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                animate={row3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-3xl font-bold text-foreground mb-2"
              >
                More Sales
              </motion.h4>
              <motion.p
                initial={{ opacity: 0 }}
                animate={row3InView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-muted-foreground max-w-sm mx-auto"
              >
                We build custom systems that get you sales and save your time.
              </motion.p>
            </div>
          </motion.div>
        </div>

        <div className="h-px w-full bg-primary/10"></div>
      </div>
    </section>
  );
};
