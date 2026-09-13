export type Product = {
  id: string;
  title: string;
  slug: string;
  description: string;
  badge?: string;
  image: string;
  techStack: string[];
  features: string[];
  demoVideo?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
};

export const products: Product[] = [
  {
    id: "kvs-academy-erp",
    title: "KVS Academy — School ERP & Web Portal",
    slug: "kvs-academy-erp",
    badge: "Live Production Portal",
    description:
      "A complete full-stack school ERP and institutional portal managing 1,200+ students, automated fee payments, live attendance, and role-based access for staff, students, and parents.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Node.js"],
    features: [
      "Role-Based Portals (Admin / Staff / Parents)",
      "Automated Fee Invoicing & Tracking",
      "Live Attendance & Leave Management",
      "Online Admission Applications",
      "Digital Notice Board & Circulars",
      "Exam Grading & Performance Analytics",
      "Class Schedule Management",
      "Mobile-Friendly Parent Dashboard",
    ],
    liveDemoUrl: "https://www.kvsacademy.live/",
  },
  {
    id: "vijay-sharma-furniture",
    title: "Vijay Sharma Furniture — D2C E-Commerce",
    slug: "vijay-sharma-furniture",
    badge: "Live Storefront & PWA",
    description:
      "A high-conversion direct-to-consumer digital storefront and catalog built for handcrafted solid wood furniture, featuring one-click WhatsApp orders, customer reviews, and PWA capabilities.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
    techStack: ["Next.js", "React", "Tailwind CSS", "PWA", "Responsive Design"],
    features: [
      "Dynamic Hardwood Product Catalog",
      "One-Click WhatsApp & Call Orders",
      "PWA Offline & Mobile App Support",
      "Verified Customer Review Engine",
      "Interactive Filter & Gallery",
      "SEO Optimized Product Architecture",
      "Local Workshop Geo-Location",
      "Zero Middleman Broker Pricing",
    ],
    liveDemoUrl: "https://vijay-sharma-furniture.vercel.app/",
  },
  {
    id: "tbi-kiet-platform",
    title: "TBI-KIET — Startup Incubation System",
    slug: "tbi-kiet-platform",
    badge: "Government Incubation Hub",
    description:
      "A specialized startup incubation platform jointly supported by NSTEDB, DST Govt. of India & KIET Group of Institutions to screen startup applications, manage seed grants, and book prototyping labs.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Cloud Architecture"],
    features: [
      "Startup Application Pipeline",
      "Government Scheme Tracker",
      "Industry & Financial Mentor Directory",
      "Prototyping Lab & Co-working Booking",
      "Hackathons & Pitch Event Calendar",
      "Ecosystem Partners Directory",
      "Incubatee Progress Tracking",
      "Comprehensive Institutional FAQs",
    ],
    liveDemoUrl: "https://www.tbi-kiet.in/",
  },
  {
    id: "quality-veda-saas",
    title: "Quality Veda — Compliance & Training SaaS",
    slug: "quality-veda-saas",
    badge: "Backed by IIM Lucknow",
    description:
      "An EdTech and quality compliance portal providing accredited ISO/IEC 17025 and NABL certification courses, interactive laboratory tools, and expert quality auditor consultation.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI"],
    features: [
      "ISO/IEC 17025 Certified LMS Modules",
      "Interactive Lab Calculation Tools",
      "Auditor Consultation Booking",
      "IIM Lucknow EIC Supported Structure",
      "Light & Dark Adaptive Theming",
      "Automated Certificate Generation",
      "Pharma Quality Assurance Guides",
      "Searchable Knowledge Base",
    ],
    liveDemoUrl: "https://www.qualityveda.co/",
  },
];
