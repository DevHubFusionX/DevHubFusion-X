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
        "name": "Who is Anyanwu Franklin and what does DevHubFusionX do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anyanwu Franklin is a fullstack web developer based in Lagos, Nigeria, operating under the brand DevHubFusionX. He specializes in building custom web applications, ride-hailing platforms, logistics systems, SaaS products, e-commerce websites, and fintech applications for startups and businesses across Africa and worldwide. His core tech stack includes React.js, Next.js, Node.js, TypeScript, MongoDB, Firebase, and MySQL."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build a ride-hailing app like Uber or Bolt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Anyanwu Franklin has direct experience building ride-hailing and mobility platforms. He can develop the complete system including real-time GPS tracking, driver and rider interfaces, booking engines, payment integration (Paystack, Flutterwave, Stripe), admin dashboards, and notification systems."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to build a web application in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost depends on the complexity of the project. A simple landing page or portfolio site can range from ₦150,000–₦500,000. A custom web application or SaaS platform typically ranges from ₦500,000–₦3,000,000+. Ride-hailing or logistics platforms with real-time features start from ₦1,500,000+. Contact DevHubFusionX@gmail.com for a free consultation."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does Anyanwu Franklin use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "His primary tech stack is React.js and Next.js for the frontend, Node.js and Express for the backend, with MongoDB, Firebase, or MySQL for databases. He uses TypeScript for type safety, Tailwind CSS for styling, Framer Motion for animations, and integrates third-party APIs for payments, real-time tracking, and authentication."
        }
      },
      {
        "@type": "Question",
        "name": "Does DevHubFusionX work with clients outside Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While based in Lagos, Nigeria, Anyanwu Franklin works with clients across Africa and worldwide. He has delivered projects for clients in the UK, US, and across West Africa, working remotely with clear communication processes and structured delivery milestones."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of startups does Anyanwu Franklin work best with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "He works best with founders who have a validated idea and are ready to build. His sweet spot is mobility startups (ride-hailing, logistics), SaaS companies, e-commerce businesses, and fintech companies targeting the African market. He has shipped products like blynQe (dating app, 500K+ users), FindMe (AI service discovery), Comtranz Global (cleaning service platform), and Dara Express (logistics tracking)."
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
