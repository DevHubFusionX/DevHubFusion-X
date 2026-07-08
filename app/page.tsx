import { Hero } from "@/components/sections/Hero";
import { SelectedWorks } from "@/components/sections/SelectedWorks";
import { Philosophy } from "@/components/sections/Philosophy";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/seo/JsonLd";

export default async function Home() {
  // FAQPage schema — Directly matches what AI models pull from
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does DevHubFusionX do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DevHubFusionX is a high-performance software engineering agency based in Lagos, Nigeria. We specialize in building custom web applications, ride-hailing platforms, logistics tracking systems, SaaS products, e-commerce web systems, and custom business automations that maximize sales and operational output for startups and enterprises globally."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build ride-hailing platforms or logistics systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our team has direct experience engineering ride-hailing, mobility, and delivery tracking platforms. We develop complete custom systems including real-time GPS tracking, rider/driver interfaces, intelligent booking engines, secure payments (Paystack, Flutterwave, Stripe), and administrative control panels."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to build a custom system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost depends on system complexity. A simple website starts from ₦150,000–₦500,000. A custom web application or SaaS platform typically ranges from ₦500,000–₦3,000,000+. Ride-hailing or logistics tracking systems with real-time requirements start from ₦1,500,000+. Contact us at DevHubFusionX@gmail.com for a detailed scope and timeline proposal."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does DevHubFusionX use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our core technology stack features React and Next.js for the frontend, Node.js and Express for the backend, with MongoDB, Firebase, or MySQL for databases. We utilize TypeScript for type safety, Tailwind CSS for styling, Framer Motion for premium animations, and integrate robust third-party APIs for payments, map services, and real-time synchronization."
        }
      },
      {
        "@type": "Question",
        "name": "Does DevHubFusionX work with clients outside Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While our agency is headquartered in Lagos, Nigeria, we serve clients and businesses globally. We have delivered production-grade systems for clients in the UK, US, and across West Africa, operating with structured remote delivery milestones and clear communication."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of projects or startups do you work best with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work best with businesses and founders ready to build or automate. Our sweet spot is mobility systems (ride-hailing, logistics), SaaS platforms, e-commerce operations, and custom business workflows. We have shipped products like blynQe (dating app, 500K+ users), FindMe (AI service discovery), Comtranz Global (cleaning service platform), and Dara Express (logistics tracking)."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help automate or modernize an existing system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer legacy system modernization, workflow automation, performance optimization, and custom API integrations. Whether you need to migrate an old codebase to modern React/Next.js or streamline manual spreadsheets into an automated dashboard, we can audit your system and build a clear path forward."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqSchema} />
      <Hero />
      <SelectedWorks />
      <Philosophy />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
