export interface SystemPart {
  id: string;
  name: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  metric: string;
  year: string;
  image: string;
  status?: "Live" | "Scaled" | "In Progress" | "Deprecated";
  architecture?: string[];
  liveLink?: string;
  systemParts?: SystemPart[];
  challenge?: string;
  solution?: string;
  role?: string;
  outcomes?: string[];
}

export const projects: Project[] = [
  {
    "id": 1,
    "title": "DevhubxAPI",
    "category": "API Infrastructure",
    "description": "A unified API gateway that normalises 40+ African identity, payments, mobile money, and logistics providers into a single endpoint — replacing fragmented integrations with one key.",
    "metric": "2.8M+ API Calls",
    "year": "2026",
    "status": "Live",
    "image": "/DevHubFusion-X/projects/DevhubXapi.png",
    "liveLink": "https://devhubapi.vercel.app/",
    "architecture": ["Next.js", "Node.js", "Redis", "PostgreSQL", "REST"],
    "challenge": "African fintechs typically wire together NIMC, NIBSS, MTN MoMo, Airtel, Flutterwave, and numerous other providers by hand — each with its own authentication, schema, and rate limits. This fragmented approach turns every new integration into weeks of plumbing work.",
    "solution": "Built a normalisation layer that abstracts 40+ regional APIs behind a single RESTful endpoint with unified auth, consistent response schemas, and intelligent rate-limit management. Achieved 4.2ms average gateway latency with 99.98% uptime.",
    "role": "Creator & Lead Engineer",
    "outcomes": [
      "Processed over 2.8 million API calls per month with 99.98% uptime across 90 days",
      "Reduced average gateway latency to 4.2ms through edge caching and connection pooling",
      "Unified 40+ regional APIs (NIN, BVN, mobile money, logistics) into a single developer-friendly endpoint"
    ],
    "systemParts": [
      {
        "id": "gateway",
        "name": "API Gateway",
        "description": "High-throughput normalisation layer translating requests across 40+ provider schemas with unified auth and rate limiting."
      },
      {
        "id": "identity",
        "name": "Identity Engine",
        "description": "NIN, BVN, and KYC verification pipeline aggregating NIMC and NIBSS endpoints into single-call lookups."
      },
      {
        "id": "payments",
        "name": "Payments Hub",
        "description": "Unified payments interface spanning Flutterwave, MTN MoMo, Airtel Money, and card processors with consistent webhook delivery."
      }
    ]
  },
  {
    "id": 2,
    "title": "Noteable",
    "category": "Privacy-First AI Workspace",
    "description": "A local-first, privacy-focused AI notepad that runs entirely on-device, offering instant voice capture, smart summarization, and interactive chat without cloud exposure.",
    "metric": "100% On-Device",
    "year": "2026",
    "status": "Live",
    "image": "/DevHubFusion-X/projects/Noteable.png",
    "liveLink": "https://noteable-kappa.vercel.app/",
    "architecture": ["Next.js", "React.js", "Transformers.js", "IndexedDB", "Tailwind CSS"],
    "challenge": "Modern AI applications typically rely on remote cloud APIs, posing serious data privacy risks and latency issues. The goal was to build a highly responsive workspace where document processing, semantic auto-linking, and voice synthesis happen entirely offline.",
    "solution": "Developed a local-first architecture leveraging Transformers.js and Web Assembly for client-side LLM inference. Integrated IndexedDB for secure offline storage, and built a custom Web Audio pipeline for real-time transcription and fluid voice capturing.",
    "role": "Creator & Lead Architect",
    "outcomes": [
      "Achieved 100% on-device data privacy with zero cloud exposure or external API requests",
      "Engineered 'Note Buddy', an on-device AI chat assistant that dynamically queries and connects local notes",
      "Implemented a real-time speech transcription pipeline ('Fluid Capture') converting audio inputs directly into structured notes"
    ],
    "systemParts": [
      {
        "id": "ai-engine",
        "name": "Note Buddy AI",
        "description": "On-device LLM runner powered by Transformers.js, performing client-side inference, semantic analysis, and chat queries."
      },
      {
        "id": "capture",
        "name": "Fluid Capture",
        "description": "Client-side audio transcription pipeline converting voice notes into structured markdown documents instantly."
      },
      {
        "id": "storage",
        "name": "Local Storage Hub",
        "description": "IndexedDB-backed offline storage maintaining all user notes, automatic tags, and relationship graphs without cloud sync."
      }
    ]
  },
  {
    "id": 3,
    "title": "blynQe",
    "category": "Dating Mobile App",
    "description": "Built a modern, privacy-first dating platform focused on meaningful connections rather than swipe-based engagement.",
    "metric": "500K+ Users",
    "year": "2026",
    "status": "Live",
    "image": "/DevHubFusion-X/projects/Dating-app.png",
    "liveLink": "https://blynqe.online/",
    "architecture": ["React.js", "Next.js", "Node.js", "Tailwind CSS"],
    "challenge": "Conventional dating platforms prioritize volume over meaningful connections. The challenge was building an architecture and experience that fosters depth, privacy, and safety.",
    "solution": "Designed a calm, conversion-focused UI/UX centered on intentional user interaction. Implemented a structured journey flow: Profile → Match → Introduction → Connection.",
    "role": "Frontend Architect",
    "outcomes": [
      "Helped shape a platform used by 500,000+ users globally",
      "Contributed to product strategy emphasizing real-world connection",
      "Engineered an intuitive mobile-first interface optimized for conversion"
    ],
    "systemParts": [
      {
        "id": "social",
        "name": "Discovery Engine",
        "description": "Refined algorithms designed to encourage meaningful introductions over blind swiping."
      },
      {
        "id": "uiux",
        "name": "Calm UI Framework",
        "description": "Minimalist frontend built on Next.js to provide an elegant, unhurried user experience."
      }
    ]
  },
  {
    "id": 4,
    "title": "FindMe",
    "category": "SaaS Platform",
    "description": "Developed an AI-powered service discovery ecosystem connecting users and businesses across multiple verticals.",
    "metric": "AI Discovery Ecosystem",
    "year": "2026",
    "status": "Live",
    "image": "/DevHubFusion-X/projects/find-me.png",
    "liveLink": "http://findmeonline.com.ng/",
    "architecture": ["Next.js", "Node.js", "MongoDB", "Cloudinary"],
    "challenge": "Local businesses lacked a unified, intelligent system to showcase services and interact dynamically with potential customers.",
    "solution": "Architected a modular SaaS foundation with robust APIs, authentication mechanisms, and real-time interaction capabilities using the Next.js and MongoDB stack.",
    "role": "Full-Stack Developer",
    "outcomes": [
      "Built a modular architecture safely supporting myriad business use cases",
      "Implemented secure JWT authentication and efficient large-scale media handling",
      "Designed and deployed scalable backend APIs integrating real-time features"
    ],
    "systemParts": [
      {
        "id": "core",
        "name": "SaaS Foundation",
        "description": "Multitenant discovery service linking businesses with precise local demand."
      },
      {
        "id": "media",
        "name": "Asset Service",
        "description": "High-performance media handling integrated closely with Cloudinary."
      }
    ]
  },
  {
    "id": 5,
    "title": "Comtranz Global",
    "category": "Service Operations Architecture",
    "description": "Engineered a high-performance service ecosystem for a premier cleaning enterprise, featuring custom scheduling logic and a conversion-optimized client interface.",
    "metric": "85% Booking Automation",
    "year": "2026",
    "status": "Live",
    "architecture": ["React.js", "Firebase", "Express.js", "MySQL"],
    "image": "/DevHubFusion-X/projects/Cleaner-Image.png",
    "liveLink": "https://www.comtranzglobal.com",
    "challenge": "The enterprise faced serious operational bottlenecks due to manual scheduling and fragmented booking processes. They required a robust solution to handle complex service availabilities.",
    "solution": "Developed a custom booking engine automating the entire scheduling lifecycle, alongside a high-conversion client acquisition funnel using React and Firebase.",
    "role": "Lead Systems Architect & Frontend Engineer",
    "outcomes": [
      "Achieved 85% automation of the previously manual booking workflow",
      "Optimized frontend components to substantially improve client acquisition",
      "Integrated scalable backend services managing daily operations flawlessly"
    ],
    "systemParts": [
      {
        "id": "dev",
        "name": "Service Hub",
        "description": "Custom booking engine with specialized scheduling logic built on Node and Express."
      },
      {
        "id": "deploy",
        "name": "Client Portal",
        "description": "Conversion-focused interface engineered for maximum lead capture."
      }
    ]
  },
  {
    "id": 6,
    "title": "Dara Express",
    "category": "Logistics Systems",
    "description": "Comprehensive logistics and delivery platform optimized for cross-regional shipping and real-time tracking.",
    "metric": "Global Live Tracking",
    "year": "2025",
    "status": "Live",
    "image": "/DevHubFusion-X/projects/Dara-Logistics.png",
    "liveLink": "https://daraexpress.com",
    "architecture": ["React.js", "EmailJS", "Tracking APIs", "Cloud Infra"],
    "challenge": "Fragmented tracking mechanisms caused unacceptable delays and severe opacity within logistics operations.",
    "solution": "Built a centralized, API-driven logistics dashboard to aggregate real-time tracking and facilitate immediate cross-region coordination.",
    "role": "Frontend & Logistics Engineer",
    "outcomes": [
      "Deployed a unified live-tracking interface with deep API integrations",
      "Optimized frontend rendering paths explicitly for cross-region latency issues",
      "Integrated secure communication protocols streamlining delivery workflows"
    ],
    "systemParts": [
      {
        "id": "track",
        "name": "Live Tracking",
        "description": "High-frequency dashboard ensuring end-to-end package and driver visibility."
      },
      {
        "id": "sync",
        "name": "Ops Comm",
        "description": "Automated workflow notifications utilizing EmailJS for event triggers."
      }
    ]
  },
  {
    "id": 7,
    "title": "Photo Studio Website",
    "category": "Photography Portfolio",
    "description": "A professional photography portfolio website designed to showcase high-resolution images with an elegant, minimalist interface.",
    "metric": "Visual Experience",
    "year": "2025",
    "status": "Live",
    "image": "/DevHubFusion-X/projects/Photography-web.png",
    "liveLink": "https://www.frankimages.com/",
    "architecture": ["React.js", "Node.js", "MongoDB", "HLS/DASH"],
    "challenge": "Delivering high-quality video formats dynamically while preserving robust watchlists and access control features.",
    "solution": "Crafted an agile media environment built on structured data principles, allowing personalized media consumption through a highly responsive UI.",
    "role": "Full-Stack Media Engineer",
    "outcomes": [
      "Implemented seamless low-latency media streaming leveraging HLS/DASH protocols",
      "Built personalized user watchlists alongside robust admin moderation interfaces",
      "Engineered an adaptive media management system scaled by Cloudinary APIs"
    ],
    "systemParts": [
      {
        "id": "player",
        "name": "Streaming Hub",
        "description": "Dynamically adapting media player optimized for zero-buffering configurations."
      },
      {
        "id": "system",
        "name": "Media Engine",
        "description": "Data-intensive backend maintaining customized user states and extensive catalogs."
      }
    ]
  }
];
