import { Metadata } from 'next';
import { ServicesContent } from '@/components/sections/ServicesContent';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
   title: "Engineering Services | Full-Stack Software Systems",
   description: "Professional software engineering and business automation services by Frank. Custom web applications, ride-hailing platforms, logistics systems, SaaS products, e-commerce websites, and fintech solutions.",
   keywords: [
      "web development services",
      "custom web application development",
      "SaaS development",
      "business automation",
      "logistics platform development",
      "software engineer Nigeria"
   ],
};

export default function ServicesPage() {
   const serviceListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Software Systems & Automation Services by Frank",
      "description": "Professional software engineering and automation services offered by Frank",
      "itemListElement": [
         {
            "@type": "ListItem",
            "position": 1,
            "item": {
               "@type": "Service",
               "name": "Custom Web Application Development",
               "description": "Building high-performance, scalable web applications using React, Next.js, Node.js, and TypeScript. From MVP to production-ready products.",
               "provider": { "@type": "Person", "name": "Frank" },
               "areaServed": ["Nigeria", "Africa", "Worldwide"],
               "serviceType": "Web Application Development"
            }
         },
         {
            "@type": "ListItem",
            "position": 2,
            "item": {
               "@type": "Service",
               "name": "SaaS & Platform Engineering",
               "description": "Building multi-tenant SaaS platforms, booking engines, real-time dashboards, and complex business applications with scalable backend architecture.",
               "provider": { "@type": "Person", "name": "Frank" },
               "areaServed": ["Nigeria", "Africa", "Worldwide"],
               "serviceType": "SaaS Development"
            }
         },
         {
            "@type": "ListItem",
            "position": 3,
            "item": {
               "@type": "Service",
               "name": "Ride-Hailing & Logistics App Development",
               "description": "Developing ride-hailing platforms, delivery tracking systems, and logistics management dashboards with real-time GPS tracking and API integrations.",
               "provider": { "@type": "Person", "name": "Frank" },
               "areaServed": ["Nigeria", "Africa", "Worldwide"],
               "serviceType": "Transportation App Development"
            }
         },
         {
            "@type": "ListItem",
            "position": 4,
            "item": {
               "@type": "Service",
               "name": "Technical Strategy & Code Audits",
               "description": "Strategic technical consulting, legacy system modernization, architecture reviews, and performance optimization for existing web applications.",
               "provider": { "@type": "Person", "name": "Frank" },
               "areaServed": ["Nigeria", "Africa", "Worldwide"],
               "serviceType": "Technical Consulting"
            }
         }
      ]
   };

   return (
      <>
         <JsonLd data={serviceListSchema} />
         <ServicesContent />
      </>
   );
}
