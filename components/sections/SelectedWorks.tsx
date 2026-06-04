"use client";

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, Project } from '@/data/projects';

/* ─── Compact Project Card ─── */
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: '-40px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/projects/${project.id}`}
        className="group block outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
      >
        <div className="relative bg-background rounded-xl overflow-hidden border border-border/50 hover:border-border transition-all duration-400 hover:shadow-lg">

          {/* ── Image ── */}
          <div className="relative aspect-[16/11] overflow-hidden bg-muted">
            <motion.div
              className="absolute inset-[-4%]"
              animate={{ scale: isHovered ? 1.03 : 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 4}
              />
            </motion.div>

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Category — bottom left over image */}
            <div className="absolute bottom-3 left-3 z-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                {project.category}
              </span>
            </div>

            {/* Metric — bottom right over image */}
            <div className="absolute bottom-3 right-3 z-10">
              <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                <span className="w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.5)]" />
                <span className="text-[10px] font-bold tracking-wider text-white/90 uppercase">{project.metric}</span>
              </div>
            </div>
          </div>

          {/* ── Content ── */}
          <div className="p-4 md:p-5">
            {/* Year + Status */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono text-muted-foreground tracking-wide">{project.year}</span>
              {project.status && (
                <>
                  <span className="w-0.5 h-0.5 rounded-full bg-border" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">{project.status}</span>
                </>
              )}
            </div>

            {/* Title + Arrow */}
            <div className="flex items-center justify-between gap-3 mb-2">
              <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground leading-snug line-clamp-1">
                {project.title}
              </h3>
              <motion.div
                className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center flex-shrink-0"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  borderRadius: isHovered ? '50%' : '0.5rem',
                }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                <motion.div
                  animate={{ x: isHovered ? 1 : 0, y: isHovered ? -1 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                >
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </motion.div>
              </motion.div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 mb-3">
              {project.description}
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-1">
              {project.architecture?.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground group-hover:bg-primary/8 group-hover:text-primary transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

/* ─── Section ─── */
export const SelectedWorks = () => {
  return (
    <section className="py-20 md:py-24 bg-background relative" id="projects">
      {/* Section Header */}
      <div className="container mx-auto px-6 md:px-12 mb-10 md:mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-[2px] w-10 bg-primary"></div>
          <span className="text-xs font-bold tracking-widest uppercase text-foreground">Selected Assets</span>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
            Evidence of{' '}
            <span className="text-primary">Impact.</span>
          </h2>
          <Link
            href="/projects"
            className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group"
          >
            View all projects
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Project Grid */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
