"use client";

import React, { useState } from 'react';
import { Mulish } from 'next/font/google';
import { ApplicationModal } from '@/components/sections/ApplicationModal';

// Import split gallery subcomponents
import { GALLERY_PROJECTS, CARDS_DATA } from '@/components/gallery/galleryData';
import { DeckSelector } from '@/components/gallery/DeckSelector';
import { BentoGrid } from '@/components/gallery/BentoGrid';
import { LightboxModal } from '@/components/gallery/LightboxModal';

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  display: 'swap',
});

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

export const GalleryContent = () => {
  const [activeProject, setActiveProject] = useState<string>("blynque");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    projectIndex: number;
    imageIndex: number;
  }>({
    isOpen: false,
    projectIndex: 0,
    imageIndex: 0
  });

  const activeProjIdx = GALLERY_PROJECTS.findIndex(p => p.id === activeProject);
  const currentProject = GALLERY_PROJECTS[activeProjIdx >= 0 ? activeProjIdx : 0];

  const openLightbox = (projIdx: number, imgIdx: number) => {
    setLightboxState({
      isOpen: true,
      projectIndex: projIdx,
      imageIndex: imgIdx
    });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
    document.body.style.overflow = 'unset';
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    const { projectIndex, imageIndex } = lightboxState;
    const currentProj = GALLERY_PROJECTS[projectIndex];
    let nextImgIdx = imageIndex;

    if (direction === 'next') {
      if (imageIndex < currentProj.images.length - 1) {
        nextImgIdx = imageIndex + 1;
      } else {
        const nextProjIdx = (projectIndex + 1) % GALLERY_PROJECTS.length;
        setLightboxState({
          isOpen: true,
          projectIndex: nextProjIdx,
          imageIndex: 0
        });
        return;
      }
    } else {
      if (imageIndex > 0) {
        nextImgIdx = imageIndex - 1;
      } else {
        const prevProjIdx = (projectIndex - 1 + GALLERY_PROJECTS.length) % GALLERY_PROJECTS.length;
        setLightboxState({
          isOpen: true,
          projectIndex: prevProjIdx,
          imageIndex: GALLERY_PROJECTS[prevProjIdx].images.length - 1
        });
        return;
      }
    }

    setLightboxState(prev => ({
      ...prev,
      imageIndex: nextImgIdx
    }));
  };

  return (
    <section className={`${mulish.className} relative min-h-screen bg-background text-foreground pb-32`}>
      {/* Structural layout gridlines */}
      <div className="absolute left-[8%] md:left-[16%] top-0 bottom-0 w-[1px] bg-border/20 pointer-events-none z-0" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-border/20 pointer-events-none z-0" />

      {/* Hero Page Header */}
      <div className="container mx-auto px-6 md:px-16 pt-36 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-2 select-none">
              <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">
                DevHubFusionX / Gallery
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[0.9] text-foreground">
              Interface <span className="text-primary">Gallery.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm text-muted-foreground max-w-sm ml-auto leading-relaxed border-l-2 lg:border-l-0 lg:border-r-2 border-primary/50 pl-4 lg:pl-0 lg:pr-4 py-1">
              Select a project from the stack on the left to view screenshot galleries.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Main Grid */}
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col gap-6">

          {/* Left curved selection deck */}
          <DeckSelector
            cards={CARDS_DATA}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />

          {/* Right bento screenshot viewer */}
          <BentoGrid
            currentProject={currentProject}
            activeProjIdx={activeProjIdx}
            openLightbox={openLightbox}
            openCTAModal={() => setIsModalOpen(true)}
            smoothEase={smoothEase}
            activeProject={activeProject}
          />
        </div>
      </div>

      {/* Premium Lightbox Modal Carousel */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        projectIndex={lightboxState.projectIndex}
        imageIndex={lightboxState.imageIndex}
        projects={GALLERY_PROJECTS}
        closeLightbox={closeLightbox}
        navigateLightbox={navigateLightbox}
      />

      {/* Inquiry Form Modal wrapper */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default GalleryContent;
