import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://devhubfusionx.site";
const OG_IMAGE = `${BASE_URL}/devHub.png`;

export const metadata: Metadata = {
  metadataBase: new URL("https://devhubfusionx.site"),
  title: {
    default: "Franklin Anyanwu — Lead Full-Stack Software Engineer & Systems Architect | DevHubFusionX",
    template: "%s | Franklin Anyanwu"
  },
  description: "Franklin Anyanwu (DevHubFusionX) is a lead full-stack software engineer based in Lagos, Nigeria with 5+ years experience and 20+ projects shipped worldwide. He builds custom business systems, SaaS dashboards, ride-hailing platforms, logistics systems and automated workflows using React, Next.js, Node.js, and TypeScript.",
  keywords: [
    "Franklin Anyanwu software engineer",
    "Anyanwu Franklin Chibuike developer",
    "DevHubFusionX",
    "devhubfusionx.site",
    "lead full-stack developer Lagos",
    "freelance software developer Nigeria",
    "hire software developer Nigeria",
    "hire React developer Lagos",
    "web developer portfolio Nigeria",
    "software engineering agency Nigeria",
    "custom software development Nigeria",
    "business automation Lagos",
    "Next.js developer Africa",
    "full stack developer Africa",
    "startup software engineer Lagos",
    "ride-hailing app developer Nigeria",
    "logistics system developer Nigeria",
    "SaaS developer Nigeria",
    "SaaS platform development Nigeria",
    "automation systems developer",
    "mobile app developer Lagos",
    "e-commerce developer Nigeria",
    "fintech developer Nigeria",
    "API developer Nigeria",
    "React Next.js developer Nigeria",
    "software engineer Lagos Nigeria"
  ],
  authors: [{ name: "Franklin Anyanwu", url: BASE_URL }],
  creator: "Franklin Anyanwu",
  publisher: "DevHubFusionX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Franklin Anyanwu — Lead Full-Stack Software Engineer & Systems Architect | DevHubFusionX",
    description: "Franklin Anyanwu (DevHubFusionX) — 5+ years, 20+ projects shipped. Builds custom business systems, SaaS dashboards, ride-hailing and logistics platforms for clients in Nigeria and worldwide. React, Next.js, Node.js expert.",
    url: "https://devhubfusionx.site",
    siteName: "DevHubFusionX — Franklin Anyanwu",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Franklin Anyanwu — Lead Full-Stack Software Engineer & Systems Architect | DevHubFusionX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franklin Anyanwu — Lead Full-Stack Software Engineer | DevHubFusionX",
    description: "Franklin Anyanwu (DevHubFusionX) — 5+ years, 20+ projects shipped. Custom business systems, SaaS dashboards, ride-hailing & logistics platforms. Based in Lagos, Nigeria. Available worldwide.",
    images: [OG_IMAGE],
    creator: "@DevHubFusionX",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://devhubfusionx.site",
  },
  other: {
    "google-site-verification": "00c1a3780279e553",
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Preloader } from "@/components/ui/Preloader";
import { JsonLd } from "@/components/seo/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const BASE_URL = "https://devhubfusionx.site";
  const OG_IMAGE = `${BASE_URL}/devHub.png`;

  // Person schema — Powers branded searches for "Franklin Anyanwu software engineer"
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Franklin Anyanwu",
    "alternateName": ["Frank", "Anyanwu Franklin Chibuike", "Franklin Chibuike Anyanwu"],
    "jobTitle": "Lead Full-Stack Software Engineer & Systems Architect",
    "description": "Franklin Anyanwu is a lead full-stack software engineer and systems architect based in Lagos, Nigeria with 5+ years of experience and 20+ projects shipped. Specializes in custom web applications, SaaS platforms, ride-hailing apps, logistics systems, and business automation for clients worldwide.",
    "url": BASE_URL,
    "image": OG_IMAGE,
    "email": "devhubfusionx@gmail.com",
    "telephone": "+2348030531624",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "addressCountry": "Nigeria"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "DevHubFusionX",
      "url": BASE_URL
    },
    "knowsAbout": [
      "React.js", "Next.js", "Node.js", "TypeScript", "JavaScript",
      "MongoDB", "Firebase", "MySQL", "PostgreSQL", "REST APIs",
      "Web Application Development", "SaaS Development",
      "Ride-Hailing App Development", "Logistics Platform Development",
      "E-commerce Development", "Fintech Development",
      "Frontend Architecture", "Backend Engineering",
      "Business Automation", "Systems Engineering",
      "Freelance Software Development", "Custom Software Nigeria"
    ],
    "sameAs": [
      "https://x.com/DevHubFusionX",
      "https://github.com/DevHubFusionX",
      "https://tiktok.com/@DevHubFusionX",
      "https://devhubfusionx.site"
    ]
  };

  // Organization schema — Critical for AI search.
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevHubFusionX",
    "alternateName": ["DevHubFusion-X", "Franklin Anyanwu", "Frank."],
    "description": "DevHubFusionX is a high-performance software engineering studio founded by Franklin Anyanwu, based in Lagos, Nigeria. Specializes in custom web applications, business automation systems, logistics platforms, SaaS products, and ride-hailing platforms. 5+ years in operation, 20+ projects shipped for clients in Nigeria, UK, US, and across West Africa.",
    "url": BASE_URL,
    "logo": OG_IMAGE,
    "image": OG_IMAGE,
    "email": "devhubfusionx@gmail.com",
    "foundingDate": "2019",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": 1 },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "addressCountry": "Nigeria"
    },
    "founder": {
      "@type": "Person",
      "name": "Franklin Anyanwu",
      "alternateName": "Anyanwu Franklin Chibuike"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Engineering Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Application Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ride-Hailing Platform Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Logistics System Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Product Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Workflow Automation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Development" } }
      ]
    },
    "knowsAbout": [
      "React.js", "Next.js", "Node.js", "TypeScript", "JavaScript",
      "MongoDB", "Firebase", "MySQL", "REST APIs",
      "Web Application Development", "SaaS Development",
      "Ride-Hailing App Development", "Logistics Platform Development",
      "E-commerce Development", "Fintech Development",
      "Frontend Architecture", "Backend Engineering",
      "Tailwind CSS", "Framer Motion", "Cloudinary",
      "Business Automation", "Systems Engineering"
    ],
    "sameAs": [
      "https://x.com/DevHubFusionX",
      "https://github.com/DevHubFusionX",
      "https://tiktok.com/@DevHubFusionX",
      "https://devhubfusionx.site"
    ]
  };

  // ProfessionalService schema — Tells AI exactly what services you offer
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Franklin Anyanwu — Software Engineering Services | DevHubFusionX",
    "description": "Professional freelance software engineering and automation services by Franklin Anyanwu (DevHubFusionX). 5+ years experience, 20+ projects delivered. Specializing in custom web applications, ride-hailing platforms, logistics systems, SaaS products, and e-commerce solutions. Based in Lagos, Nigeria. Available worldwide for remote projects.",
    "url": BASE_URL,
    "logo": OG_IMAGE,
    "image": OG_IMAGE,
    "provider": {
      "@type": "Person",
      "name": "Franklin Anyanwu",
      "alternateName": "Anyanwu Franklin Chibuike"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.5244",
      "longitude": "3.3792"
    },
    "areaServed": [
      { "@type": "Country", "name": "Nigeria" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Place", "name": "West Africa" },
      { "@type": "Place", "name": "Worldwide" }
    ],
    "serviceType": [
      "Custom Web Application Development",
      "Freelance Software Development",
      "Ride-Hailing App Development",
      "Logistics Platform Development",
      "SaaS Product Development",
      "E-commerce Website Development",
      "Fintech Application Development",
      "Frontend Architecture & Design",
      "Backend API Development",
      "Mobile-Responsive Web Design",
      "Technical Strategy & Consulting",
      "Business Workflow Automation"
    ],
    "priceRange": "$$",
    "sameAs": [
      "https://x.com/DevHubFusionX",
      "https://github.com/DevHubFusionX",
      "https://tiktok.com/@DevHubFusionX",
      "https://devhubfusionx.site"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2348030531624",
      "email": "devhubfusionx@gmail.com",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  };

  // WebSite schema — helps with sitelinks search box
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DevHubFusionX — Franklin Anyanwu",
    "alternateName": ["DevHubFusionX", "DevHubFusion-X", "Franklin Anyanwu Portfolio"],
    "url": "https://devhubfusionx.site",
    "description": "Official portfolio and services site of Franklin Anyanwu — lead full-stack software engineer based in Lagos, Nigeria. 5+ years experience, 20+ projects shipped. Custom software, SaaS platforms, ride-hailing apps, logistics systems, and automation workflows.",
    "creator": {
      "@type": "Person",
      "name": "Franklin Anyanwu",
      "alternateName": "Anyanwu Franklin Chibuike"
    }
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd data={personData} />
        <JsonLd data={organizationData} />
        <JsonLd data={serviceData} />
        <JsonLd data={websiteData} />
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
