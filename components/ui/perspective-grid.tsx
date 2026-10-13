"use client";

import React, { useMemo, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

interface PerspectiveGridProps {
    /** Additional CSS classes for the grid container */
    className?: string;
    /** Number of tiles per row/column (default: 40) */
    gridSize?: number;
    /** Whether to show the gradient overlay (default: true) */
    showOverlay?: boolean;
    /** Fade radius percentage for the gradient overlay (default: 80) */
    fadeRadius?: number;
}

const emptySubscribe = () => () => {};

function subscribeMobile(callback: () => void) {
    window.addEventListener('resize', callback, { passive: true });
    return () => window.removeEventListener('resize', callback);
}

function getMobileSnapshot() {
    const hasHover = window.matchMedia('(hover: hover)').matches;
    return window.innerWidth < 768 || !hasHover;
}

function getServerSnapshot() {
    return true;
}

export function PerspectiveGrid({
    className,
    gridSize = 40,
    showOverlay = true,
    fadeRadius = 80,
}: PerspectiveGridProps) {
    const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
    const isMobile = useSyncExternalStore(subscribeMobile, getMobileSnapshot, getServerSnapshot);

    const tiles = useMemo(() => Array.from({ length: gridSize * gridSize }), [gridSize]);

    return (
        <div
            className={cn(
                "relative w-full h-full overflow-hidden",
                className
            )}
            style={{
                perspective: "2000px",
                transformStyle: "preserve-3d",
            }}
        >
            <div
                className="absolute w-7xl aspect-square grid origin-center"
                style={{
                    left: "50%",
                    top: "50%",
                    transform:
                        "translate(-50%, -50%) rotateX(30deg) rotateY(-5deg) rotateZ(20deg) scale(2)",
                    transformStyle: "preserve-3d",
                    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                    gridTemplateRows: `repeat(${gridSize}, 1fr)`,
                    ...(isMobile ? {
                        backgroundImage: `linear-gradient(to right, rgba(5, 150, 105, 0.15) 1px, transparent 1px),
                                          linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 1px, transparent 1px)`,
                        backgroundSize: `${100 / gridSize}% ${100 / gridSize}%`
                    } : {})
                }}
            >
                {mounted && !isMobile &&
                    tiles.map((_, i) => (
                        <div
                            key={i}
                            className="tile min-h-px min-w-px border transition-colors duration-1500 hover:duration-0"
                            style={{ borderColor: 'rgba(5,150,105,0.15)' }}
                            onMouseEnter={(e) => {
                                const colors = ['#059669', '#34d399', '#10b981'];
                                e.currentTarget.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        />
                    ))}
            </div>

            {/* Radial Gradient Mask */}
            {showOverlay && (
                <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                        background: `radial-gradient(circle, transparent 25%, var(--fade-stop, var(--background)) ${fadeRadius}%)`,
                    }}
                />
            )}
        </div>
    );
}

export default PerspectiveGrid;
