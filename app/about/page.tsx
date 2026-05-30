import { Metadata } from 'next';
import { AboutContent } from '@/components/sections/AboutContent';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
   title: "About Anyanwu Franklin — Fullstack Web Developer in Lagos, Nigeria",
   description: "Anyanwu Franklin is a fullstack web developer with 5+ years of experience building ride-hailing apps, logistics platforms, SaaS products, and custom web applications for startups in Nigeria and across Africa. Expert in React, Next.js, Node.js, TypeScript.",
   keywords: [
      "Anyanwu Franklin", "web developer Nigeria", "fullstack developer Lagos",
      "hire developer Nigeria", "React developer Africa", "Next.js developer Nigeria"
   ],
};

export default function AboutPage() {
   const aboutPageSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Anyanwu Franklin",
      "description": "Learn about Anyanwu Franklin, a fullstack web developer based in Lagos, Nigeria, specializing in building high-performance web applications for startups.",
      "mainEntity": {
         "@type": "Person",
         "name": "Anyanwu Franklin",
         "jobTitle": "Fullstack Web Developer",
         "description": "Anyanwu Franklin is a fullstack web developer based in Lagos, Nigeria with 5+ years of experience. He specializes in building ride-hailing apps, logistics and delivery platforms, SaaS products, e-commerce websites, and fintech applications for startups across Africa and worldwide.",
         "knowsAbout": [
            "React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", 
            "Firebase", "MySQL", "REST APIs", "Tailwind CSS", "Framer Motion",
            "Web Application Development", "Ride-Hailing App Development",
            "Logistics Platform Development", "SaaS Development"
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
