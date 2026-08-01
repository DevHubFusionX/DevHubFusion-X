"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
    const [loading, setLoading] = useState(true);

    // Match the site's easing curves
    const smoothEase = [0.25, 0.1, 0.25, 1] as const;
    const snappyEase = [0.16, 1, 0.3, 1] as const;

    // Shorter, snappier duration
    const TOTAL_DURATION = 2000;

    useEffect(() => {
        const exit = setTimeout(() => setLoading(false), TOTAL_DURATION);
        return () => clearTimeout(exit);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: smoothEase }}
                    className="fixed inset-0 bg-background overflow-hidden flex items-center justify-center z-[999999]"
                >
                    <div className="flex flex-col items-center gap-8">

                        {/* Brand Name - Simple fade up */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                                ease: snappyEase
                            }}
                            className="text-center"
                        >
                            <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                                Frank
                            </span>
                            <span className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                                .
                            </span>
                        </motion.div>

                        {/* Simple progress line */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                            className="w-32 h-[2px] bg-border rounded-full overflow-hidden"
                        >
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-full h-full bg-primary"
                            />
                        </motion.div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
