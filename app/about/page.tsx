import { Metadata } from 'next';
import { AboutContent } from '@/components/sections/AboutContent';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
   title: "About DevHubFusionX — High-Performance Software Systems & Automations",
   description: "DevHubFusionX is a software engineering agency based in Lagos, Nigeria, serving clients worldwide. We build custom business systems, automated workflows, SaaS dashboards, and ride-hailing/logistics platforms.",
   keywords: [
      "DevHubFusionX", "software engineering agency Nigeria", "business automation Lagos",
      "custom software development Nigeria", "Next.js agency Africa"
   ],
};

export default function AboutPage() {
   const aboutPageSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About DevHubFusionX",
      "description": "Learn about DevHubFusionX, a high-performance software engineering agency based in Lagos, Nigeria, specializing in building custom web applications and business automations.",
      "mainEntity": {
         "@type": "Organization",
         "name": "DevHubFusionX",
         "description": "DevHubFusionX is a high-performance software engineering agency based in Lagos, Nigeria. We specialize in engineering ride-hailing apps, logistics platforms, SaaS products, e-commerce websites, and custom business automations for startups and enterprises worldwide.",
         "knowsAbout": [
            "React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", 
            "Firebase", "MySQL", "REST APIs", "Tailwind CSS", "Framer Motion",
            "Web Application Development", "Ride-Hailing App Development",
            "Logistics Platform Development", "SaaS Development", "Business Automation", "Systems Engineering"
         ],
         "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lagos",
            "addressRegion": "Lagos State",
            "addressCountry": "Nigeria"
         }
      }
   };

   return (
      <>
         <JsonLd data={aboutPageSchema} />
         <AboutContent />
      </>
   );
}
