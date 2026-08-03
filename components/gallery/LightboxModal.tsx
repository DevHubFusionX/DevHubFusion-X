import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryProject } from './galleryData';
import { getAssetPath } from '@/lib/assets';

interface LightboxModalProps {
  isOpen: boolean;
  projectIndex: number;
  imageIndex: number;
  projects: GalleryProject[];
  closeLightbox: () => void;
  navigateLightbox: (direction: 'next' | 'prev') => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  projectIndex,
  imageIndex,
  projects,
  closeLightbox,
  navigateLightbox,
}) => {
  const activeProject = projects[projectIndex];
  const activeImage = activeProject?.images[imageIndex];

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, navigateLightbox]);

  if (!isOpen || !activeProject || !activeImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between"
      >
        {/* Lightbox Header - Contain ONLY close button, NO TEXT */}
        <div className="flex items-center justify-end p-6 md:p-8 select-none z-10">
          <button
            onClick={closeLightbox}
            className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all flex items-center justify-center text-white cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Main Viewer Area */}
        <div className="relative flex-1 flex items-center justify-center px-4 md:px-20 z-0">
          
          {/* Prev Button */}
          <button
            onClick={() => navigateLightbox('prev')}
            className="absolute left-2 sm:left-4 md:left-8 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-black/40 hover:bg-white hover:text-black text-white transition-all flex items-center justify-center cursor-pointer z-10"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Image Frame - Scaled Big for both Mobile & Desktop */}
          <div className="relative w-full h-[70vh] md:h-[82vh] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  const swipeThreshold = 50;
                  if (info.offset.x < -swipeThreshold) {
                    navigateLightbox('next');
                  } else if (info.offset.x > swipeThreshold) {
                    navigateLightbox('prev');
                  }
                }}
                className="relative max-w-full max-h-full aspect-auto flex items-center justify-center w-full h-full cursor-grab active:cursor-grabbing touch-pan-y"
              >
                <img
                  src={getAssetPath(activeImage.src)}
                  alt={activeImage.label}
                  className="rounded-lg object-contain max-w-[90%] md:max-w-full max-h-[70vh] md:max-h-[82vh] w-full shadow-2xl border border-white/10 pointer-events-none select-none"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={() => navigateLightbox('next')}
            className="absolute right-2 sm:right-4 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-black/40 hover:bg-white hover:text-black text-white transition-all flex items-center justify-center cursor-pointer z-10"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Footers and labels completely removed for pure screen focus */}
        <div className="h-6" />
      </motion.div>
    </AnimatePresence>
  );
};
export default LightboxModal;
