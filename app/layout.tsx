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
    default: "Anyanwu Franklin — Fullstack Web Developer for Startups in Nigeria | DevHubFusionX",
    template: "%s | DevHubFusionX — Anyanwu Franklin"
  },
  description: "Anyanwu Franklin is a fullstack web developer based in Lagos, Nigeria, specializing in building ride-hailing apps, logistics platforms, SaaS products, and scalable web applications for African startups. Expert in React, Next.js, Node.js, and TypeScript. Available for hire.",
  keywords: [
    "web developer Nigeria",
    "fullstack developer Lagos",
    "React developer Nigeria",
    "Next.js developer Africa",
    "hire web developer Nigeria",
    "website developer for startups",
    "ride-hailing app developer",
    "logistics app developer Nigeria",
    "SaaS developer Africa",
    "freelance web developer Nigeria",
    "mobile app developer Lagos",
    "e-commerce developer Nigeria",
    "fintech developer Nigeria",
    "web application development Nigeria",
    "Anyanwu Franklin developer",
    "DevHubFusionX",
    "best web developer Nigeria",
    "website developer near me Nigeria",
    "custom web app development",
    "Node.js developer Nigeria",
    "TypeScript developer Africa",
    "frontend developer Nigeria",
    "backend developer Nigeria"
  ],
  authors: [{ name: "Anyanwu Franklin", url: "https://devhubfusionx.github.io/DevHubFusion-X/" }],
  creator: "Anyanwu Franklin",
  publisher: "DevHubFusionX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Anyanwu Franklin — Fullstack Web Developer for Startups in Nigeria",
    description: "I build ride-hailing platforms, logistics systems, SaaS products, and custom web applications for startups across Africa. Based in Lagos, Nigeria. React, Next.js, Node.js expert.",
    url: "https://devhubfusionx.github.io/DevHubFusion-X/",
    siteName: "DevHubFusionX",
    images: [
      {
        url: "devHub.png",
        width: 1200,
        height: 630,
        alt: "Anyanwu Franklin — Fullstack Web Developer | DevHubFusionX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anyanwu Franklin — Fullstack Developer for African Startups",
    description: "Building ride-hailing apps, logistics platforms, and SaaS products for startups in Nigeria. Expert in React, Next.js, Node.js. Hire me for your next project.",
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
  // Person schema — Critical for AI search. AI models index PEOPLE, not just organizations.
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anyanwu Franklin",
    "alternateName": "DevHubFusionX",
    "jobTitle": "Fullstack Web Developer",
    "description": "Anyanwu Franklin is a fullstack web developer based in Lagos, Nigeria, specializing in building ride-hailing apps, logistics platforms, SaaS products, and scalable web applications for African startups and businesses worldwide.",
    "url": "https://devhubfusionx.github.io/DevHubFusion-X/",
    "image": "https://devhubfusionx.github.io/DevHubFusion-X/portrait.png",
    "email": "DevHubFusionX@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "addressCountry": "Nigeria"
    },
    "nationality": {
      "@type": "Country",
      "name": "Nigeria"
    },
    "knowsAbout": [
      "React.js", "Next.js", "Node.js", "TypeScript", "JavaScript",
      "MongoDB", "Firebase", "MySQL", "REST APIs",
      "Web Application Development", "SaaS Development",
      "Ride-Hailing App Development", "Logistics Platform Development",
      "E-commerce Development", "Fintech Development",
      "Frontend Architecture", "Backend Engineering",
      "Tailwind CSS", "Framer Motion", "Cloudinary"
    ],
    "knowsLanguage": ["English"],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Self-Taught & Professional Experience"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "DevHubFusionX",
      "url": "https://devhubfusionx.github.io/DevHubFusion-X/"
    },
    "sameAs": [
      "https://x.com/DevHubFusionX",
      "https://github.com/DevHubFusionX",
      "https://tiktok.com/@DevHubFusionX"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Fullstack Web Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Lagos, Nigeria"
      },
      "skills": "React, Next.js, Node.js, TypeScript, MongoDB, Firebase, MySQL, REST APIs, Tailwind CSS"
    }
  };

  // ProfessionalService schema — Tells AI exactly what services you offer
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "DevHubFusionX — Web Development Services",
    "description": "Professional web development services for startups and businesses. Specializing in custom web applications, ride-hailing platforms, logistics systems, SaaS products, and e-commerce solutions. Based in Lagos, Nigeria. Available worldwide.",
    "url": "https://devhubfusionx.github.io/DevHubFusion-X/",
    "logo": "https://devhubfusionx.github.io/DevHubFusion-X/devHub.png",
    "image": "https://devhubfusionx.github.io/DevHubFusion-X/devHub.png",
    "founder": {
      "@type": "Person",
      "name": "Anyanwu Franklin"
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
      { "@type": "Continent", "name": "Africa" },
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
      "Technical Strategy & Consulting"
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
    "alternateName": "Anyanwu Franklin Portfolio",
    "url": "https://devhubfusionx.github.io/DevHubFusion-X/",
    "description": "Portfolio and web development services by Anyanwu Franklin — Fullstack developer for startups in Nigeria and Africa.",
    "creator": {
      "@type": "Person",
      "name": "Anyanwu Franklin"
    }
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd data={personData} />
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
