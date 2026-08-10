import { Metadata } from 'next';
import { StrategyContent } from '@/components/sections/StrategyContent';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "The Blueprint — Strategic Software Architecture by Frank",
  description: "Frank's calculated process for building high-impact digital systems and software automations. Zero waste, maximum authority, and client qualification methods.",
  keywords: [
    "strategic software architecture",
    "software engineering blueprint",
    "Frank software strategy",
    "DevHubFusionX blueprint",
    "business system blueprint",
    "Lagos tech consultant"
  ],
  alternates: {
    canonical: "/strategy",
  },
  openGraph: {
    title: "The Blueprint — Strategic Software Architecture by Frank",
    description: "Frank's calculated process for building high-impact digital systems and software automations. Zero waste, maximum authority, and client qualification methods.",
    url: "https://devhubfusionx.github.io/DevHubFusion-X/strategy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Blueprint — Strategic Software Architecture by Frank",
    description: "A calculated framework for constructing high-value digital systems with selective authority.",
  }
};

export default function StrategyPage() {
  const strategySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "The Blueprint — Strategic Architecture",
    "description": "Frank's client acquisition and engineering philosophy, outlining the Gatekeeper Method and psychological frameworks for high-value software delivery.",
    "publisher": {
      "@type": "Person",
      "name": "Frank",
      "jobTitle": "Lead Full-Stack Engineer"
    }
  };

  return (
    <>
      <JsonLd data={strategySchema} />
      <StrategyContent />
    </>
  );
}
