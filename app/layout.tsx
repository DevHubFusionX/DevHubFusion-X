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

const BASE_URL = "https://devhubfusionx.github.io/DevHubFusion-X";
const OG_IMAGE = `${BASE_URL}/devHub.png`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Frank. — Lead Full-Stack Software Engineer & Systems Architect",
    template: "%s | Frank."
  },
  description: "Frank is a lead full-stack software engineer based in Lagos, Nigeria, serving clients worldwide. He builds custom business systems, automated workflows, SaaS dashboards, ride-hailing and logistics platforms using React, Next.js, Node.js, and TypeScript.",
  keywords: [
    "Frank software engineer Nigeria",
    "lead full-stack developer Lagos",
    "software engineering agency Nigeria",
    "business automation Lagos",
    "custom software development Nigeria",
    "Next.js developer Africa",
    "hire software developer Lagos",
    "ride-hailing app developer Nigeria",
    "logistics system developer Nigeria",
    "SaaS developer Nigeria",
    "automation systems developer",
    "mobile app developer Lagos",
    "e-commerce developer Nigeria",
    "fintech developer Nigeria",
    "DevHubFusionX"
  ],
  authors: [{ name: "Frank", url: BASE_URL }],
  creator: "Frank",
  publisher: "DevHubFusionX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Frank. — Lead Full-Stack Software Engineer & Systems Architect",
    description: "Frank builds custom business systems, automated workflows, SaaS dashboards, and ride-hailing/logistics platforms for clients in Nigeria and worldwide. React, Next.js, Node.js expert.",
    url: BASE_URL,
    siteName: "Frank.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Frank — Lead Full-Stack Software Engineer & Systems Architect",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frank. — Lead Full-Stack Software Engineer & Systems Architect",
    description: "Frank builds custom business systems, automated workflows, SaaS dashboards, and ride-hailing/logistics platforms for clients in Nigeria and worldwide.",
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
    canonical: BASE_URL,
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
  const BASE_URL = "https://devhubfusionx.github.io/DevHubFusion-X";
  const OG_IMAGE = `${BASE_URL}/devHub.png`;

  // Person schema — Powers branded searches for "Frank software engineer"
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Frank",
    "jobTitle": "Lead Full-Stack Software Engineer & Systems Architect",
    "description": "Lead full-stack software engineer and systems architect based in Lagos, Nigeria. Specializes in custom web applications, SaaS platforms, ride-hailing apps, logistics systems, and business automation.",
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
      "Business Automation", "Systems Engineering"
    ],
    "sameAs": [
      "https://x.com/DevHubFusionX",
      "https://github.com/DevHubFusionX",
      "https://tiktok.com/@DevHubFusionX"
    ]
  };

  // Organization schema — Critical for AI search.
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevHubFusionX",
    "alternateName": ["DevHubFusion-X", "Frank."],
    "description": "DevHubFusionX is a high-performance software engineering agency based in Lagos, Nigeria, specializing in building custom web applications, business automation systems, logistics platforms, SaaS products, and ride-hailing platforms for clients in Nigeria and worldwide.",
    "url": BASE_URL,
    "logo": OG_IMAGE,
    "image": OG_IMAGE,
    "email": "devhubfusionx@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "addressCountry": "Nigeria"
    },
    "founder": {
      "@type": "Person",
      "name": "Frank"
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
      "https://tiktok.com/@DevHubFusionX"
    ]
  };

  // ProfessionalService schema — Tells AI exactly what services you offer
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Frank. — Software Engineering Services",
    "description": "Professional software engineering and automation services by Frank. Specializing in custom web applications, ride-hailing platforms, logistics systems, SaaS products, and e-commerce solutions. Based in Lagos, Nigeria. Available worldwide.",
    "url": BASE_URL,
    "logo": OG_IMAGE,
    "image": OG_IMAGE,
    "provider": {
      "@type": "Person",
      "name": "Frank"
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
      { "@type": "Place", "name": "Worldwide" }
    ],
    "serviceType": [
      "Custom Web Application Development",
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
      "https://tiktok.com/@DevHubFusionX"
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
    "name": "Frank.",
    "alternateName": ["DevHubFusionX", "DevHubFusion-X"],
    "url": BASE_URL,
    "description": "High-performance custom software systems, SaaS platforms, and automation workflows by Frank — lead full-stack engineer based in Lagos, Nigeria.",
    "creator": {
      "@type": "Person",
      "name": "Frank"
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
