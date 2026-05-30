import { Metadata } from 'next';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { Contact } from '@/components/sections/Contact';
import { JsonLd } from '@/components/seo/JsonLd';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
    title: "Portfolio — Web Applications Built by Anyanwu Franklin | DevHubFusionX",
    description: "View projects built by Anyanwu Franklin: ride-hailing apps, SaaS platforms, logistics systems, dating apps, and e-commerce websites. Fullstack web developer in Lagos, Nigeria. React, Next.js, Node.js expert.",
    keywords: [
        "web developer portfolio Nigeria",
        "React projects",
        "Next.js portfolio",
        "ride-hailing app developer",
        "SaaS developer portfolio",
        "Anyanwu Franklin projects"
    ],
};

export default function ProjectsPage() {
    const portfolioSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Portfolio by Anyanwu Franklin",
        "description": "A collection of web applications, SaaS platforms, and digital products built by Anyanwu Franklin / DevHubFusionX",
        "creator": {
            "@type": "Person",
            "name": "Anyanwu Franklin"
        },
        "hasPart": projects.map(project => ({
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.description,
            "dateCreated": project.year,
            "url": project.liveLink || "",
            "creator": {
                "@type": "Person",
                "name": "Anyanwu Franklin"
            },
            "genre": project.category,
            "keywords": project.architecture?.join(", ")
        }))
    };

    return (
        <main className="min-h-screen bg-background pt-32 pb-20">
            <JsonLd data={portfolioSchema} />
            <div className="container mx-auto px-6 md:px-12 mb-16">
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6">
                    My <span className="text-primary">Work.</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    A selection of live web applications I&apos;ve built for startups and businesses. Each project represents real engineering — from ride-hailing platforms to SaaS products handling hundreds of thousands of users.
                </p>
            </div>

            <ProjectGrid />

            <div className="border-t border-border/40">
                <Contact />
            </div>
        </main>
    );
}
