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
    "id": 2,
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
    "id": 3,
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
    "id": 4,
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
    "id": 5,
    "title": "TvFlix",
    "category": "Streaming Platform",
    "description": "A full-featured media streaming environment offering low-latency video, personalized watchlists, and secure content controls.",
    "metric": "HLS Video Delivery",
    "year": "2025",
    "status": "Live",
    "image": "/DevHubFusion-X/projects/Photography-web.png",
    "liveLink": "https://fullstack-movie-app-master.vercel.app/",
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
