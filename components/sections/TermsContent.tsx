"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function TermsContent() {
    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: "By accessing or using the engineering services provided by Frank, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use my services."
        },
        {
            title: "2. Services Provided",
            content: "Frank provides custom software development, technical consulting, database pipeline construction, and automation services. The specific scope of work for any project will be governed by a separate Service Agreement, Statement of Work (SOW), or contract."
        },
        {
            title: "3. User Responsibilities",
            content: "You are responsible for providing accurate project details and requirements and maintaining the confidentiality of any credentials provided. You agree not to use my services for any unlawful or prohibited activities."
        },
        {
            title: "4. Intellectual Property",
            content: "All codebase delivery, software designs, and custom architectures engineered by Frank are protected by intellectual property laws. Unless otherwise agreed in writing, Frank retains the rights to general background tools and proprietary methodologies."
        },
        {
            title: "5. Limitation of Liability",
            content: "Frank shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the delivered systems or services."
        },
        {
            title: "6. Governing Law",
            content: "These terms shall be governed by and construed in accordance with the laws of Lagos, Nigeria, without regard to its conflict of law provisions."
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
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Terms of Service</h1>
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
