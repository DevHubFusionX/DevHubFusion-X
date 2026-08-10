import { Metadata } from 'next';
import { AboutContent } from '@/components/sections/AboutContent';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
   title: "About Frank & DevHubFusionX — High-Performance Systems",
   description: "Learn about Frank, a Lead Full-Stack Software Engineer and Systems Architect at DevHubFusionX building custom SaaS, logistics platforms, and business automation software.",
   keywords: [
      "Frank software engineer",
      "about DevHubFusionX",
      "software engineering agency Nigeria",
      "business automation Lagos",
      "custom software development Nigeria",
      "Next.js developer Africa"
   ],
   alternates: {
      canonical: "/about",
   },
   openGraph: {
      title: "About Frank & DevHubFusionX — High-Performance Systems",
      description: "Learn about Frank, a Lead Full-Stack Software Engineer and Systems Architect at DevHubFusionX building custom SaaS, logistics platforms, and business automation software.",
      url: "https://devhubfusionx.github.io/DevHubFusion-X/about",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "About Frank & DevHubFusionX — High-Performance Systems",
      description: "Lead Full-Stack Software Engineer & Systems Architect building custom software and business automations.",
   }
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
