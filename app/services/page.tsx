import { Metadata } from 'next';
import { ServicesContent } from '@/components/sections/ServicesContent';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
   title: "Web Development Services — Custom Apps, SaaS, E-commerce | Anyanwu Franklin",
   description: "Professional web development services by Anyanwu Franklin. Custom web applications, ride-hailing platforms, logistics systems, SaaS products, e-commerce websites, and fintech solutions. Based in Nigeria, available worldwide. React, Next.js, Node.js expert.",
   keywords: [
      "web development services Nigeria",
      "custom web application development",
      "hire React developer",
      "SaaS development Nigeria",
      "e-commerce website developer",
      "ride-hailing app development",
      "logistics platform development",
      "web developer for hire Nigeria"
   ],
};

export default function ServicesPage() {
   const serviceListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Web Development Services by Anyanwu Franklin",
      "description": "Professional web development services offered by DevHubFusionX",
      "itemListElement": [
         {
            "@type": "ListItem",
            "position": 1,
            "item": {
               "@type": "Service",
               "name": "Custom Web Application Development",
               "description": "Building high-performance, scalable web applications using React, Next.js, Node.js, and TypeScript. From MVP to production-ready products.",
               "provider": { "@type": "Person", "name": "Anyanwu Franklin" },
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
               "provider": { "@type": "Person", "name": "Anyanwu Franklin" },
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
               "provider": { "@type": "Person", "name": "Anyanwu Franklin" },
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
               "provider": { "@type": "Person", "name": "Anyanwu Franklin" },
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
