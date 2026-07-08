"use client";
 
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
 
export const SelectedWorks = () => {
  // Show exactly the first 4 projects
  const displayedProjects = projects.slice(0, 4);
 
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden" id="projects">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
 
      {/* Section Header */}
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-0.5 w-10 bg-primary"></div>
          <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Selected Assets</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground leading-none">
              Evidence of <span className="text-primary">Impact.</span>
            </h2>
          </div>
 
          <div>
            <Link
              href="/projects"
              className="text-xs md:text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group border-b border-border/60 pb-0.5"
            >
              View all
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
 
      {/* Simple Grid showing exactly 4 items */}
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {displayedProjects.map((project, index) => (
            <div key={project.id} className="w-full">
              <Link
                href={`/projects/${project.id}`}
                className="block bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 transition-all duration-300 group h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
 
                {/* Content Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {project.year}
                    </span>
                  </div>
 
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
 
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
 
export default SelectedWorks;
