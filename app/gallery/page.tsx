import { Metadata } from 'next';
import { GalleryContent } from '@/components/sections/GalleryContent';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: "Interface Gallery — Shipped Software & Automations by Frank",
    description: "Browse the interface gallery of Frank (DevHubFusionX). Production screenshots of custom SaaS dashboards, dating apps, logistics systems, and ERP portals.",
    keywords: [
        "Frank interface gallery",
        "Frank software screenshots",
        "Next.js app dashboard design",
        "logistics app tracking interface",
        "portfolio designs",
        "Blynque dating app",
        "Tesla dashboard clone",
        "DevHubFusionX gallery"
    ],
    alternates: {
        canonical: "/gallery",
    },
    openGraph: {
        title: "Interface Gallery — Shipped Software & Automations by Frank",
        description: "Browse the interface gallery of Frank (DevHubFusionX). Production screenshots of custom SaaS dashboards, dating apps, logistics systems, and ERP portals.",
        url: "https://devhubfusionx.github.io/DevHubFusion-X/gallery",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Interface Gallery — Shipped Software & Automations by Frank",
        description: "Browse production screenshots of custom software interfaces designed and engineered by Frank.",
    }
};

export default function GalleryPage() {
    const gallerySchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Interface Design Gallery by Frank",
        "description": "Production screenshots and interface designs of custom software systems built by Frank (DevHubFusionX) including dating apps, corporate portals, and fleet dashboards.",
        "creator": {
            "@type": "Person",
            "name": "Frank",
            "jobTitle": "Lead Full-Stack Engineer"
        },
        "hasPart": [
            {
                "@type": "ImageObject",
                "name": "Blynque Interface Design",
                "caption": "Dating mobile application layouts including discovery match screens and in-app chat systems."
            },
            {
                "@type": "ImageObject",
                "name": "Tesla Console Dashboard",
                "caption": "Automotive center console dashboard design featuring battery monitoring and live navigation maps."
            },
            {
                "@type": "ImageObject",
                "name": "TraceX Fleet Logistics System",
                "caption": "Real-time dispatch maps and route logistics tracking dashboard."
            },
            {
                "@type": "ImageObject",
                "name": "Nemvol Business ERP Portal",
                "caption": "Inventory count audit logs and financial analytics dashboard interface."
            },
            {
                "@type": "ImageObject",
                "name": "DigitalEhub Portal Dashboard",
                "caption": "Enterprise corporate hub offering wallet operations and invoice generators."
            }
        ]
    };

    return (
        <>
            <JsonLd data={gallerySchema} />
            <GalleryContent />
        </>
    );
}
