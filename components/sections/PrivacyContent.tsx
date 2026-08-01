"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function PrivacyContent() {
    const sections = [
        {
            title: "1. Information I Collect",
            content: "I collect information you provide directly to me when you request a project inquiry, start a consultation, or contact me. This may include your name, email address, company name, and project details."
        },
        {
            title: "2. How I Use Your Information",
            content: "I use the information I collect to provide, maintain, and improve my services, to communicate with you, and to develop new project partnerships. I do not sell your personal data to third parties."
        },
        {
            title: "3. Cookies and Tracking",
            content: "I use cookies and similar tracking technologies to analyze site traffic and improve your browsing experience. You can control cookie settings through your browser."
        },
        {
            title: "4. Data Security",
            content: "I implement industry-standard security measures to protect your information from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."
        },
        {
            title: "5. Third-Party Links",
            content: "My website may contain links to third-party sites. I am not responsible for the privacy practices or content of those websites."
        },
        {
            title: "6. Changes to This Policy",
            content: "I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated 'Last Updated' date."
        }
    ];

    return (
        <main className="min-h-screen bg-background text-foreground py-24 px-6 md:px-12">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-bold transition-colors group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-12 uppercase tracking-widest text-sm font-bold">Last Updated: February 2026</p>
                </motion.div>

                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                            className="border-l-2 border-primary/20 pl-6 md:pl-8 py-2"
                        >
                            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {section.content}
                            </p>
                        </motion.section>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-24 pt-12 border-t border-border text-center text-muted-foreground"
                >
                    <p>© {new Date().getFullYear()} Frank. All rights reserved.</p>
                </motion.div>
            </div>
        </main>
    );
}
