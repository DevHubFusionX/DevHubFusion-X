export interface GalleryImage {
  src: string;
  type: 'desktop' | 'mobile';
  label: string;
}

export interface GalleryProject {
  id: string;
  name: string;
  category: string;
  images: GalleryImage[];
}

export interface CardData {
  id: string;
  name: string;
  bgClass: string;
  rotation: number;
  xOffset: number;
}

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "blynque",
    name: "Blynque",
    category: "Dating Platform",
    images: [
      { src: "/DevHubFusion-X/web-image/Blynquehero.png", type: "desktop", label: "Main Desktop Portal" },
      { src: "/DevHubFusion-X/web-image/Blynque1.png", type: "mobile", label: "Registration Walkthrough" },
      { src: "/DevHubFusion-X/web-image/Blynque2.png", type: "mobile", label: "Smart Profile Card" },
      { src: "/DevHubFusion-X/web-image/Blynque3.png", type: "mobile", label: "Smart Discovery Match" },
      { src: "/DevHubFusion-X/web-image/blynque4.png", type: "mobile", label: "Interactive In-app Chat" },
      { src: "/DevHubFusion-X/web-image/blynque5.png", type: "mobile", label: "Personalized Settings" }
    ]
  },
  {
    id: "tesla",
    name: "Tesla Dashboard",
    category: "Automotive Controls",
    images: [
      { src: "/DevHubFusion-X/web-image/Teslahero.png", type: "desktop", label: "Center Console Dashboard" },
      { src: "/DevHubFusion-X/web-image/Tesla1.png", type: "mobile", label: "Battery & Charging Level" },
      { src: "/DevHubFusion-X/web-image/Tesla2.png", type: "mobile", label: "Dynamic Climate Slider" },
      { src: "/DevHubFusion-X/web-image/Tesla3.png", type: "mobile", label: "Live GPS Navigation Map" },
      { src: "/DevHubFusion-X/web-image/Tesla4.png", type: "mobile", label: "Vehicle Status System" },
      { src: "/DevHubFusion-X/web-image/Tesla5.png", type: "mobile", label: "Entertainment Control Panel" }
    ]
  },
  {
    id: "tracex",
    name: "TraceX",
    category: "Logistics Tracking",
    images: [
      { src: "/DevHubFusion-X/web-image/TraceXhero.png", type: "desktop", label: "Operations Logistics Map" },
      { src: "/DevHubFusion-X/web-image/Trace1.png", type: "mobile", label: "Real-time Driver Dispatch" },
      { src: "/DevHubFusion-X/web-image/Trace2.png", type: "mobile", label: "Package Delivery Logging" },
      { src: "/DevHubFusion-X/web-image/Trace3.png", type: "mobile", label: "Fleet Routing Tracker" },
      { src: "/DevHubFusion-X/web-image/Trace4.png", type: "mobile", label: "Urgent Incident Alerts" }
    ]
  },
  {
    id: "nemvol",
    name: "Nemvol",
    category: "Business Operations",
    images: [
      { src: "/DevHubFusion-X/web-image/Nemvolhero.png", type: "desktop", label: "Admin ERP Platform" },
      { src: "/DevHubFusion-X/web-image/Nemvol1.png", type: "mobile", label: "Inventory Stock Counter" },
      { src: "/DevHubFusion-X/web-image/Nemvol2.png", type: "mobile", label: "Daily Ledger Balance" },
      { src: "/DevHubFusion-X/web-image/Nemvol3.png", type: "mobile", label: "Fulfillment Analytics" },
      { src: "/DevHubFusion-X/web-image/Nemvol4.png", type: "mobile", label: "Integration Gateway" }
    ]
  },
  {
    id: "digitalehub",
    name: "DigitalEhub",
    category: "Enterprise Portal",
    images: [
      { src: "/DevHubFusion-X/web-image/DigitalEhub.png", type: "desktop", label: "Main Business Hub" },
      { src: "/DevHubFusion-X/web-image/DigitalEhub1.png", type: "mobile", label: "Corporate Services Hub" },
      { src: "/DevHubFusion-X/web-image/DigitalEhub2.png", type: "mobile", label: "User Wallet Balance" },
      { src: "/DevHubFusion-X/web-image/DigitalEhub3.png", type: "mobile", label: "Fast Invoicing Setup" }
    ]
  }
];

export const CARDS_DATA: CardData[] = [
  {
    id: "blynque",
    name: "Blynque",
    bgClass: "bg-[#ff4f38] text-white border-transparent",
    rotation: -6,
    xOffset: -20
  },
  {
    id: "tesla",
    name: "Tesla",
    bgClass: "bg-[#0f0f10] text-white border border-zinc-800",
    rotation: 5,
    xOffset: 16
  },
  {
    id: "tracex",
    name: "TraceX",
    bgClass: "bg-[#1e293b] text-white border-transparent",
    rotation: -4,
    xOffset: -12
  },
  {
    id: "nemvol",
    name: "Nemvol",
    bgClass: "bg-white text-slate-950 border border-slate-200",
    rotation: 6,
    xOffset: 20
  },
  {
    id: "digitalehub",
    name: "DigitalEhub",
    bgClass: "bg-[#059669] text-white border-transparent",
    rotation: -3,
    xOffset: -8
  }
];
