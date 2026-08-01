import { Metadata } from 'next';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { Contact } from '@/components/sections/Contact';
import { JsonLd } from '@/components/seo/JsonLd';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
    title: "Portfolio — Software Systems Engineered by Frank",
    description: "View the portfolio of Frank: custom business systems, automated workflows, SaaS dashboards, and ride-hailing/logistics platforms.",
    keywords: [
        "Frank portfolio",
        "Frank software engineer portfolio",
        "software engineering projects",
        "business automation systems",
        "Next.js applications"
    ],
};

export default function ProjectsPage() {
    const portfolioSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Portfolio by Frank",
        "description": "A collection of web applications, SaaS platforms, and digital products engineered by Frank",
        "creator": {
            "@type": "Person",
            "name": "Frank",
            "jobTitle": "Lead Full-Stack Engineer"
        },
        "hasPart": projects.map(project => ({
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.description,
            "dateCreated": project.year,
            "url": project.liveLink || "",
            "creator": {
                "@type": "Person",
                "name": "Frank"
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
                    A selection of live software systems and automations I&apos;ve engineered for startups and businesses. Each project represents real engineering — from custom logistics tracking to complex SaaS dashboards handling high-volume workflows.
                </p>
            </div>

            <ProjectGrid />

            <div className="border-t border-border/40">
                <Contact />
            </div>
        </main>
    );
}
