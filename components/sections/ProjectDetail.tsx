"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Server, Globe, Database, Cpu } from 'lucide-react';
import { Project } from '@/data/projects';
import Link from 'next/link';
import { useState } from 'react';
import { ApplicationModal } from './ApplicationModal';

interface ProjectDetailProps {
   project: Project;
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const headerRef = useRef<HTMLDivElement>(null);
   const archRef = useRef<HTMLDivElement>(null);
   const outcomesRef = useRef<HTMLDivElement>(null);
   const metricRef = useRef<HTMLDivElement>(null);

   const headerInView = useInView(headerRef, { once: true });
   const archInView = useInView(archRef, { once: true, margin: "-100px" });
   const outcomesInView = useInView(outcomesRef, { once: true, margin: "-100px" });
   const metricInView = useInView(metricRef, { once: true, margin: "-50px" });

   // Smooth easing curves
   const smoothEase = [0.25, 0.1, 0.25, 1] as const;
   const snappyEase = [0.16, 1, 0.3, 1] as const;
   const elasticEase = [0.68, -0.6, 0.32, 1.6] as const;

   // Architecture fallback
   const archSteps = project.architecture || ["Client", "API", "Core", "Database"];

   // Outcomes list from project data or fallback
   const outcomes = project.outcomes || [
      "Zero downtime during peak load (Black Friday)",
      "Latency reduced by 40% globally",
      "Infrastructure costs cut by 15%"
   ];

   return (
      <main className="min-h-screen bg-background text-foreground pt-32 pb-20 relative overflow-hidden">

         {/* Background Grid - Subtle Engineering Graph Paper */}
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
         />

         {/* Nav Back - Slide in from left */}
         <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: smoothEase }}
            className="fixed bottom-6 left-6 md:left-12 z-50"
         >
            <Link href="/projects" className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-border hover:border-primary transition-colors group">
               <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
               <span className="text-xs font-bold uppercase tracking-wider">System Log</span>
            </Link>
         </motion.div>

         <div className="container mx-auto px-6 md:px-12 relative z-10">

            {/* TOP: Header & Status */}
            <div ref={headerRef} className="border-b border-border/40 pb-12 mb-20">
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                     {/* Project ID & Category - Stagger in */}
                     <div className="flex items-center gap-3 mb-4">
                        <motion.span
                           initial={{ opacity: 0, scale: 0.8 }}
                           animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                           transition={{ duration: 0.4, ease: elasticEase }}
                           className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded"
                        >
                           PROJ.0{project.id}
                        </motion.span>
                        <motion.span
                           initial={{ opacity: 0, x: -10 }}
                           animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                           transition={{ duration: 0.4, delay: 0.1, ease: smoothEase }}
                           className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                        >
                           {project.category}
                        </motion.span>
                     </div>

                     {/* Title - Letter by letter reveal */}
                     <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-2 overflow-hidden">
                        <span className="flex flex-wrap gap-x-[0.2em]">
                           {project.title.split(' ').map((word, wordIndex) => (
                              <span key={wordIndex} className="inline-block whitespace-nowrap">
                                 {word.split('').map((letter, letterIndex) => {
                                    // Calculate global index for staggered delay
                                    const previousWords = project.title.split(' ').slice(0, wordIndex).join(' ');
                                    const globalIndex = previousWords.length + (wordIndex > 0 ? 1 : 0) + letterIndex;

                                    return (
                                       <motion.span
                                          key={letterIndex}
                                          initial={{ y: '100%', opacity: 0 }}
                                          animate={headerInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                                          transition={{
                                             duration: 0.4,
                                             delay: 0.15 + (globalIndex * 0.03),
                                             ease: snappyEase
                                          }}
                                          className="inline-block"
                                       >
                                          {letter}
                                       </motion.span>
                                    );
                                 })}
                              </span>
                           ))}
                        </span>
                     </h1>

                     {/* Description - Fade up */}
                     <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                        transition={{ duration: 0.5, delay: 0.5, ease: smoothEase }}
                        className="text-xl text-muted-foreground max-w-2xl"
                     >
                        {project.description}
                     </motion.p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                     {/* Status Indicator - Scale in with glow */}
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={headerInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: smoothEase }}
                        className="flex items-center gap-4 px-6 py-3 bg-muted/30 rounded-lg border border-border/50"
                     >
                        <div className="flex flex-col">
                           <span className="text-[10px] uppercase tracking-widest text-muted-foreground">System Status</span>
                           <span className="text-lg font-bold text-foreground flex items-center gap-2">
                              <motion.span
                                 animate={{ scale: [1, 1.2, 1] }}
                                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                 className={`w-2 h-2 rounded-full ${project.status === 'Live' ? 'bg-success' : 'bg-yellow-500'}`}
                              />
                              {project.status || "Deployed"}
                           </span>
                        </div>
                        <div className="w-[1px] h-8 bg-border/50 mx-2"></div>
                        <div className="flex flex-col">
                           <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Deploy Year</span>
                           <span className="text-lg font-bold text-foreground font-mono">{project.year}</span>
                        </div>
                     </motion.div>

                     {/* Live Project Link */}
                     {project.liveLink && (
                        <motion.div
                           initial={{ opacity: 0, scale: 0.9, y: 20 }}
                           animate={headerInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
                           transition={{ duration: 0.5, delay: 0.5, ease: smoothEase }}
                        >
                           <Link
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-6 py-4 bg-primary text-white rounded-lg font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all group"
                           >
                              <Globe size={18} />
                              <span>View Live Project</span>
                              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                           </Link>
                        </motion.div>
                     )}
                  </div>
               </div>
            </div>

            {/* MIDDLE: Architecture Blueprint (Horizontal Flow) */}
            <div ref={archRef} className="mb-24">
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={archInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: smoothEase }}
                  className="flex items-center gap-2 mb-8"
               >
                  <motion.div
                     initial={{ rotate: -180, opacity: 0 }}
                     animate={archInView ? { rotate: 0, opacity: 1 } : { rotate: -180, opacity: 0 }}
                     transition={{ duration: 0.5, ease: snappyEase }}
                  >
                     <Server size={18} className="text-primary" />
                  </motion.div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Architecture Map</h3>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={archInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
                  className="relative p-8 md:p-16 border border-border/40 rounded-[2rem] bg-muted/10 overflow-x-auto"
               >
                  <div className="flex items-center justify-between min-w-[800px] relative">

                     {/* Connecting Line - Animated draw */}
                     <motion.div
                        initial={{ scaleX: 0 }}
                        animate={archInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: snappyEase }}
                        style={{ transformOrigin: 'left' }}
                        className="absolute left-0 right-0 top-1/2 h-[2px] bg-border/30 -z-10"
                     />

                     {archSteps.map((step, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, y: 40, scale: 0.8 }}
                           animate={archInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.8 }}
                           transition={{
                              delay: 0.4 + (i * 0.15),
                              duration: 0.5,
                              ease: snappyEase
                           }}
                           whileHover={{ y: -8, transition: { duration: 0.2 } }}
                           className="relative z-10 flex flex-col items-center bg-background border border-border px-8 py-6 rounded-xl shadow-sm min-w-[160px] hover:border-primary transition-all hover:shadow-xl group cursor-pointer"
                        >
                           {/* Icon with spin on hover */}
                           <motion.div
                              initial={{ rotate: -90, opacity: 0 }}
                              animate={archInView ? { rotate: 0, opacity: 1 } : { rotate: -90, opacity: 0 }}
                              transition={{ delay: 0.5 + (i * 0.15), duration: 0.4, ease: snappyEase }}
                              className="mb-4 text-muted-foreground group-hover:text-primary transition-colors"
                           >
                              {i === 0 ? <Globe size={24} /> : i === archSteps.length - 1 ? <Database size={24} /> : <Cpu size={24} />}
                           </motion.div>
                           <span className="text-xs font-mono text-muted-foreground mb-1">NODE.0{i + 1}</span>
                           <span className="font-bold text-foreground uppercase tracking-tight">{step}</span>

                           {/* Drop Line + Dot */}
                           <motion.div
                              initial={{ scaleY: 0 }}
                              animate={archInView ? { scaleY: 1 } : { scaleY: 0 }}
                              transition={{ delay: 0.7 + (i * 0.1), duration: 0.3 }}
                              style={{ transformOrigin: 'top' }}
                              className="absolute -bottom-4 left-1/2 w-[1px] h-4 bg-border group-hover:bg-primary transition-colors"
                           />
                           <motion.div
                              initial={{ scale: 0 }}
                              animate={archInView ? { scale: 1 } : { scale: 0 }}
                              transition={{ delay: 0.8 + (i * 0.1), duration: 0.2, ease: elasticEase }}
                              className="absolute -bottom-5 left-1/2 w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors -translate-x-1/2"
                           />
                        </motion.div>
                     ))}
                  </div>
               </motion.div>
            </div>

            {/* NEW: Challenge & Solution Strategic Deep Dive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
               {/* Challenge Section */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="space-y-6"
               >
                  <div className="flex items-center gap-2 text-primary">
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-primary/30 pb-1">Phase 01</span>
                     <h4 className="text-xs font-black uppercase tracking-widest">The Challenge</h4>
                  </div>
                  <h3 className="text-3xl font-black tracking-tight leading-none uppercase">Strategic Problem<br />Statement</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                     {project.challenge || "The initial requirement focused on scaling infrastructure while maintaining extreme precision in execution and user experience."}
                  </p>
               </motion.div>

               {/* Solution Section */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="space-y-6"
               >
                  <div className="flex items-center gap-2 text-success">
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-success/30 pb-1">Phase 02</span>
                     <h4 className="text-xs font-black uppercase tracking-widest">The Solution</h4>
                  </div>
                  <h3 className="text-3xl font-black tracking-tight leading-none uppercase">Engineering<br />Execution</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                     {project.solution || "I architected a zero-waste system that prioritizes speed and scalability, ensuring that the primary objective was achieved with sub-second performance metrics."}
                  </p>

                  {/* Role Badge */}
                  {project.role && (
                     <div className="pt-4">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-muted/30 border border-border/50 rounded-full">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">My Role:</span>
                           <span className="text-xs font-bold text-foreground">{project.role}</span>
                        </div>
                     </div>
                  )}
               </motion.div>
            </div>

            {/* BOTTOM: Outcomes & Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border/40 pt-12">
               <div ref={outcomesRef}>
                  <motion.h3
                     initial={{ opacity: 0, x: -20 }}
                     animate={outcomesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                     transition={{ duration: 0.5, ease: smoothEase }}
                     className="text-2xl font-bold uppercase tracking-widest text-foreground mb-6"
                  >
                     Outcome Report
                  </motion.h3>
                  <motion.p
                     initial={{ opacity: 0, y: 10 }}
                     animate={outcomesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                     transition={{ duration: 0.4, delay: 0.1, ease: smoothEase }}
                     className="text-lg text-muted-foreground leading-relaxed mb-6"
                  >
                     {project.description}
                  </motion.p>
                  <ul className="space-y-4">
                     {outcomes.map((outcome, i) => (
                        <motion.li
                           key={i}
                           initial={{ opacity: 0, x: -15 }}
                           animate={outcomesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                           transition={{ delay: 0.2 + (i * 0.1), duration: 0.4, ease: smoothEase }}
                           className="flex items-center gap-3 text-muted-foreground"
                        >
                           <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={outcomesInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                              transition={{ delay: 0.3 + (i * 0.1), duration: 0.4, ease: elasticEase }}
                           >
                              <CheckCircle2 size={16} className="text-primary" />
                           </motion.div>
                           <span>{outcome}</span>
                        </motion.li>
                     ))}
                  </ul>
               </div>

               {/* Core Metric - Counter animation feel */}
               <motion.div
                  ref={metricRef}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={metricInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
                  transition={{ duration: 0.6, ease: snappyEase }}
                  className="bg-primary/5 rounded-3xl p-8 flex flex-col justify-center items-center text-center border border-primary/10 relative overflow-hidden"
               >
                  {/* Subtle glow pulse */}
                  <motion.div
                     animate={{ opacity: [0.1, 0.2, 0.1] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"
                  />

                  <motion.span
                     initial={{ opacity: 0, y: -10 }}
                     animate={metricInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                     transition={{ delay: 0.2, duration: 0.4 }}
                     className="text-sm font-bold uppercase tracking-widest text-primary mb-4 relative z-10"
                  >
                     Core Metric
                  </motion.span>

                  <motion.div
                     initial={{ opacity: 0, scale: 0.5 }}
                     animate={metricInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                     transition={{ delay: 0.3, duration: 0.5, ease: elasticEase }}
                     className="text-6xl md:text-8xl font-black text-foreground mb-2 relative z-10"
                  >
                     {project.metric.split(' ')[0]}
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     animate={metricInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                     transition={{ delay: 0.5, duration: 0.4 }}
                     className="text-xl text-muted-foreground uppercase tracking-widest relative z-10"
                  >
                     {project.metric.split(' ').slice(1).join(' ')}
                  </motion.div>
               </motion.div>
            </div>

            {/* CTA - Refined hover */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1, duration: 0.5, ease: smoothEase }}
               className="mt-24 pt-12 flex justify-center"
            >
               <div onClick={() => setIsModalOpen(true)} className="group cursor-pointer">
                  <motion.div
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     className="relative flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full overflow-hidden font-bold uppercase tracking-wider shadow-lg"
                  >
                     {/* Hover gradient sweep */}
                     <motion.div
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6, ease: smoothEase }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                     />
                     <span className="relative z-10">Initiate Similar Build</span>
                     <motion.div
                        className="relative z-10"
                        initial={{ x: 0, y: 0 }}
                        whileHover={{ x: 3, y: -3 }}
                        transition={{ duration: 0.2 }}
                     >
                        <ArrowUpRight size={18} />
                     </motion.div>
                  </motion.div>
               </div>
            </motion.div>

         </div>

         <ApplicationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Initiate Similar Build"
            subject={`Similar Build Request: ${project.title}`}
            initialDescription={`I'm interested in building something similar to ${project.title}. Here's what I have in mind:\n\n`}
         />
      </main>
   );
};
