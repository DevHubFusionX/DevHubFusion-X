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

export const metadata: Metadata = {
  metadataBase: new URL("https://devhubfusionx.github.io/DevHubFusion-X/"),
  title: {
    default: "DevHubFusionX — High-Performance Software Systems & Automations",
    template: "%s | DevHubFusionX"
  },
  description: "DevHubFusionX is a high-performance software engineering agency based in Lagos, Nigeria, serving clients worldwide. We build custom business systems, automated workflows, SaaS dashboards, and ride-hailing/logistics platforms. React, Next.js, Node.js, and TypeScript experts.",
  keywords: [
    "DevHubFusionX",
    "software engineering agency Nigeria",
    "business automation Lagos",
    "custom software development Nigeria",
    "Next.js agency Africa",
    "hire software developers Lagos",
    "business systems developer",
    "ride-hailing app developer",
    "logistics system developer Nigeria",
    "SaaS engineering agency",
    "automation systems developer",
    "mobile app developer Lagos",
    "e-commerce systems Nigeria",
    "fintech systems development",
    "custom web app development"
  ],
  authors: [{ name: "DevHubFusionX", url: "https://devhubfusionx.github.io/DevHubFusion-X/" }],
  creator: "DevHubFusionX",
  publisher: "DevHubFusionX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "DevHubFusionX — High-Performance Software Systems & Automations",
    description: "We build custom business systems, automated workflows, SaaS dashboards, and ride-hailing/logistics platforms for clients in Nigeria and worldwide. React, Next.js, Node.js experts.",
    url: "https://devhubfusionx.github.io/DevHubFusion-X/",
    siteName: "DevHubFusionX",
    images: [
      {
        url: "devHub.png",
        width: 1200,
        height: 630,
        alt: "DevHubFusionX — High-Performance Software Systems & Automations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevHubFusionX — High-Performance Software Systems & Automations",
    description: "We build custom business systems, automated workflows, SaaS dashboards, and ride-hailing/logistics platforms for clients in Nigeria and worldwide. React, Next.js, Node.js experts.",
    images: ["devHub.png"],
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
    canonical: "/",
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
  // Organization schema — Critical for AI search.
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevHubFusionX",
    "alternateName": "DevHubFusion-X",
    "description": "DevHubFusionX is a high-performance software engineering agency based in Lagos, Nigeria, specializing in building custom web applications, business automation systems, logistics platforms, SaaS products, and ride-hailing platforms for clients in Nigeria and worldwide.",
    "url": "https://devhubfusionx.github.io/DevHubFusion-X/",
    "logo": "https://devhubfusionx.github.io/DevHubFusion-X/devHub.png",
    "image": "https://devhubfusionx.github.io/DevHubFusion-X/devHub.png",
    "email": "DevHubFusionX@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "addressCountry": "Nigeria"
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
    "name": "DevHubFusionX — Software Engineering Services",
    "description": "Professional software engineering and automation services for businesses. Specializing in custom web applications, ride-hailing platforms, logistics systems, SaaS products, and e-commerce solutions. Based in Lagos, Nigeria. Available worldwide.",
    "url": "https://devhubfusionx.github.io/DevHubFusion-X/",
    "logo": "https://devhubfusionx.github.io/DevHubFusion-X/devHub.png",
    "image": "https://devhubfusionx.github.io/DevHubFusion-X/devHub.png",
    "provider": {
      "@type": "Organization",
      "name": "DevHubFusionX"
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
      "email": "DevHubFusionX@gmail.com",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  };

  // WebSite schema — helps with sitelinks
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DevHubFusionX",
    "alternateName": "DevHubFusion-X",
    "url": "https://devhubfusionx.github.io/DevHubFusion-X/",
    "description": "High-performance software systems and custom automation workflows by DevHubFusionX.",
    "creator": {
      "@type": "Organization",
      "name": "DevHubFusionX"
    }
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
