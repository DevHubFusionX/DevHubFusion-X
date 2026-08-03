import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { GalleryProject } from './galleryData';
import { getAssetPath } from '@/lib/assets';

interface BentoGridProps {
  currentProject: GalleryProject;
  activeProjIdx: number;
  openLightbox: (projIdx: number, imgIdx: number) => void;
  openCTAModal: () => void;
  smoothEase: readonly number[];
  activeProject: string;
}

/* Reusable card shell */
const BentoCard = ({
  children,
  className = '',
  onClick,
  hoverScale = 1.008,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverScale?: number;
}) => (
  <motion.div
    className={`relative overflow-hidden rounded-2xl bg-[#0c0c0e] border border-zinc-800/60 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] cursor-pointer group ${className}`}
    onClick={onClick}
    whileHover={{ scale: hoverScale }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

/* Expand + gradient overlay shown on hover */
const ExpandIcon = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md border border-white/10 w-8 h-8 rounded-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <Maximize2 size={13} />
    </div>
  </>
);

export const BentoGrid: React.FC<BentoGridProps> = ({
  currentProject,
  activeProjIdx,
  openLightbox,
  openCTAModal,
  smoothEase,
  activeProject,
}) => {
  const imgs = currentProject?.images ?? [];

  return (
    <div className="w-full z-10 space-y-4">
      <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-black block border-b border-border/40 pb-2 select-none">
        Overview / {currentProject?.name}
      </span>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
          transition={{ duration: 0.4, ease: smoothEase as any }}
        >
          {/* ── 12-column bento grid ── */}
          <div className="grid grid-cols-12 gap-3">

            {/* Row 1: Hero wide (8 cols) + Tall portrait (4 cols) */}
            {imgs[0] && (
              <BentoCard
                className="col-span-12 md:col-span-8 h-[340px] lg:h-[420px]"
                onClick={() => openLightbox(activeProjIdx, 0)}
              >
                <Image src={getAssetPath(imgs[0].src)} alt={imgs[0].label} fill className="object-contain transition-transform duration-700 group-hover:scale-[1.03]" />
                <ExpandIcon />
              </BentoCard>
            )}

            {imgs[1] && (
              <BentoCard
                className="col-span-12 md:col-span-4 h-[340px] lg:h-[420px]"
                onClick={() => openLightbox(activeProjIdx, 1)}
              >
                <Image src={getAssetPath(imgs[1].src)} alt={imgs[1].label} fill className="object-contain transition-transform duration-700 group-hover:scale-[1.03]" />
                <ExpandIcon />
              </BentoCard>
            )}

            {/* Row 2: Three equal columns */}
            {imgs[2] && (
              <BentoCard
                className="col-span-12 md:col-span-4 h-[280px] lg:h-[320px]"
                onClick={() => openLightbox(activeProjIdx, 2)}
                hoverScale={1.012}
              >
                <Image src={getAssetPath(imgs[2].src)} alt={imgs[2].label} fill className="object-contain transition-transform duration-700 group-hover:scale-[1.04]" />
                <ExpandIcon />
              </BentoCard>
            )}

            {imgs[3] && (
              <BentoCard
                className="col-span-12 md:col-span-4 h-[280px] lg:h-[320px]"
                onClick={() => openLightbox(activeProjIdx, 3)}
                hoverScale={1.012}
              >
                <Image src={getAssetPath(imgs[3].src)} alt={imgs[3].label} fill className="object-contain transition-transform duration-700 group-hover:scale-[1.04]" />
                <ExpandIcon />
              </BentoCard>
            )}

            {imgs[4] && (
              <BentoCard
                className="col-span-12 md:col-span-4 h-[280px] lg:h-[320px]"
                onClick={() => openLightbox(activeProjIdx, 4)}
                hoverScale={1.012}
              >
                <Image src={getAssetPath(imgs[4].src)} alt={imgs[4].label} fill className="object-contain transition-transform duration-700 group-hover:scale-[1.04]" />
                <ExpandIcon />
              </BentoCard>
            )}

            {/* Row 3: Full-width image or CTA */}
            {imgs[5] ? (
              <BentoCard
                className="col-span-12 h-[240px] lg:h-[280px]"
                onClick={() => openLightbox(activeProjIdx, 5)}
              >
                <Image src={getAssetPath(imgs[5].src)} alt={imgs[5].label} fill className="object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                <ExpandIcon />
              </BentoCard>
            ) : (
              <motion.div
                className="col-span-12 rounded-2xl border border-emerald-500/30 bg-[#022c22]/90 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 min-h-[200px] shadow-[inset_0_0_0_1px_rgba(52,211,153,0.06)] select-none"
                whileHover={{ scale: 1.004 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div className="space-y-2">
                  <div className="text-[10px] font-mono tracking-widest text-emerald-400 font-bold uppercase">DevHubFusionX</div>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-white leading-none">Ready to build?</h4>
                  <p className="text-sm text-emerald-100/60 leading-relaxed max-w-md">
                    Let's automate and scale your custom operations with a high-performance system.
                  </p>
                </div>
                <button
                  onClick={openCTAModal}
                  className="shrink-0 text-sm font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/40 px-6 py-3 rounded-xl flex items-center gap-2 group hover:bg-emerald-500/10 hover:text-emerald-300 transition-all cursor-pointer"
                >
                  Start Project
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </motion.div>
            )}

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BentoGrid;
