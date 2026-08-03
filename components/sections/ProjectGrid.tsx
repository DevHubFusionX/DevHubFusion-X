"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { getAssetPath } from '@/lib/assets';

export const ProjectGrid = () => {
  const smoothEase = [0.25, 0.1, 0.25, 1] as const;

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: smoothEase }}
              className="group"
            >
              <Link href={`/projects/${project.id}`} className="block relative aspect-[16/10] overflow-hidden rounded-[0.5rem] bg-muted">
                {/* project image */}
                <Image
                  src={getAssetPath(project.image)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized // Based on previous session context
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center"
                  >
                    <ArrowUpRight size={28} />
                  </motion.div>
                </div>

                {/* Content Overlay (Bottom) */}
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md bg-white/5">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base max-w-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
