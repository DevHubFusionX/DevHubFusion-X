import React from 'react';
import { motion } from 'framer-motion';
import { CardData } from './galleryData';

interface DeckSelectorProps {
  cards: CardData[];
  activeProject: string;
  setActiveProject: (id: string) => void;
}

export const DeckSelector: React.FC<DeckSelectorProps> = ({
  cards,
  activeProject,
  setActiveProject,
}) => {
  return (
    <div className="w-full z-20 space-y-3">
      <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-black block border-b border-border/40 pb-2 select-none">
        Slides
      </span>

      <div className="w-full max-w-full overflow-x-auto touch-pan-x scrollbar-none snap-x snap-mandatory flex flex-row gap-3 py-2 px-1 relative select-none items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {cards.map((card) => {
          const isActive = activeProject === card.id;

          return (
            <motion.div
              key={card.id}
              onClick={() => setActiveProject(card.id)}
              className={`flex-1 min-w-[105px] sm:min-w-[120px] md:min-w-0 h-14 sm:h-16 md:h-20 rounded-2xl shadow-md cursor-pointer relative overflow-hidden transition-all duration-300 border flex items-center justify-center shrink-0 snap-center ${card.bgClass} ${isActive
                  ? 'z-30 shadow-xl border-primary/60 opacity-100 ring-2 ring-primary/40 scale-[1.04]'
                  : 'opacity-50 hover:opacity-80 z-10'
                }`}
              whileHover={{ y: isActive ? 0 : -4 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {/* Decorative "frank." SVG watermark */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none select-none"
                viewBox="0 0 200 80"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
              >
                <text
                  x="50%"
                  y="72%"
                  textAnchor="middle"
                  fontFamily="'Georgia', serif"
                  fontStyle="italic"
                  fontWeight="900"
                  fontSize="62"
                  letterSpacing="-2"
                  fill="currentColor"
                  className={isActive ? 'opacity-[0.08]' : 'opacity-[0.06]'}
                >
                  frank.
                </text>
              </svg>

              {/* Card label */}
              <h3 className="relative z-10 text-[10px] sm:text-xs font-bold uppercase tracking-tight text-center leading-none px-2 select-none">
                {card.name}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default DeckSelector;
