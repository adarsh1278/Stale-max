export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  tagline: string;
  image: string;
  technologies: string[];
  problem: string;
  solution: string;
  result: string;
  features: string[];
  duration: string;
  metrics: { label: string; value: string }[];
  clientFeedback?: string;
  link: string;
};

export const portfolio: PortfolioItem[] = [
  {
    id: "kvs-academy",
    title: "KVS Academy — School ERP & Institutional Management Portal",
    category: "EdTech & Institutional ERP",
    tagline: "Full-Stack CBSE School ERP & Academic Management System",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1400&auto=format&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Node.js", "PWA"],
    problem:
      "The academy was operating student attendance, examination results, fee invoices, and parent updates across disconnected paper registers and manual WhatsApp groups, creating billing discrepancies and communication lags.",
    solution:
      "We engineered a full-stack institutional portal with role-based access for students, teachers, administrators, and parents. Features automated fee reconciliation, live attendance tracking, online admissions, exam results publishing, and instant notifications.",
    result:
      "Successfully onboarded 1,200+ students and 55+ faculty. Fee collection reconciliation dropped from several days to under an hour, with zero parent update delays.",
    features: [
      "Role-Based Portals (Admin, Faculty, Parents)",
      "Automated Fee Invoicing & Tracking",
      "Live Attendance & Leave Management",
      "Online Admission Applications",
      "Digital Notice Board & Circulars",
      "Exam Grading & Performance Analytics",
    ],
    duration: "10 weeks",
    metrics: [
      { label: "Active Students", value: "1,200+" },
      { label: "Faculty Members", value: "55+" },
      { label: "Fee Reconciliation", value: "< 1 hour" },
    ],
    clientFeedback:
      "Stalemax streamlined our entire school operations into a single modern dashboard. Our teachers and parents love the ease of access.",
    link: "https://www.kvsacademy.live/",
  },
  {
    id: "tbi-kiet",
    title: "TBI-KIET — Technology Business Incubator Platform",
    category: "Startup Ecosystem & Incubator",
    tagline: "Govt-Promoted Incubation Society & Startup Acceleration Portal",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format&fit=crop",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Cloud Architecture"],
    problem:
      "Managing central government incubation schemes (NSTEDB, DST, MeitY, MSME), screening hundreds of startup applications, scheduling mentor sessions, and coordinating prototyping lab facilities lacked a unified digital platform.",
    solution:
      "We architected an all-in-one incubation portal that streamlines startup onboarding, incubation scheme workflows, mentor matching directories, facility booking (co-working & prototyping labs), and hackathon/event management.",
    result:
      "Created a central innovation hub serving early-stage startups across ICT, Robotics, and E-Mobility, significantly accelerating seed funding workflows and investor connections.",
    features: [
      "Startup Incubation Application Workflow",
      "Govt. Scheme & Grant Management",
      "Curated Industry & Financial Mentors",
      "Prototyping Labs & Co-working Booking",
      "Hackathon & Pitch Event Pipeline",
      "Ecosystem & Partner Showcase",
    ],
    duration: "12 weeks",
    metrics: [
      { label: "Incubation Schemes", value: "Multi-Track" },
      { label: "Ecosystem Partners", value: "DST & MeitY" },
      { label: "Process Time", value: "60% Faster" },
    ],
    clientFeedback:
      "The portal has transformed our ability to engage prospective entrepreneurs, evaluate startup pitches, and coordinate incubation resources effortlessly.",
    link: "https://www.tbi-kiet.in/",
  },
  {
    id: "quality-veda",
    title: "Quality Veda — Pharma & Lab Accreditation Platform",
    category: "Compliance SaaS & EdTech",
    tagline: "IIM Lucknow-Backed ISO/IEC 17025 & NABL Training Portal",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1400&auto=format&fit=crop",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI", "Dark Mode"],
    problem:
      "Laboratories and healthcare institutions faced rigid, outdated consulting processes to achieve ISO/IEC 17025, NABL, and NABH compliance without structured digital coursework or automated audit tools.",
    solution:
      "We built a compliance SaaS and EdTech platform backed by IIM Lucknow EIC, providing certified ISO/NABL professional courses, interactive laboratory calculation tools, expert consultation booking, and a multi-theme interface.",
    result:
      "Empowered compliance officers and laboratory professionals across India, drastically accelerating audit readiness and continuous quality assurance.",
    features: [
      "ISO/IEC 17025 & NABL Certified Courses",
      "Interactive Lab Calculation Tools",
      "Expert Auditor Consultation Scheduler",
      "Backed by IIM Lucknow EIC Modules",
      "Adaptive Multi-Theme Interface",
      "Assessment & Certification Generation",
    ],
    duration: "8 weeks",
    metrics: [
      { label: "Incubation", value: "IIM-L EIC" },
      { label: "Compliance Scope", value: "ISO & NABL" },
      { label: "Interactive Tools", value: "Lab Suite" },
    ],
    clientFeedback:
      "A game-changer for laboratory professionals seeking streamlined NABL and ISO compliance training with modern digital delivery.",
    link: "https://www.qualityveda.co/",
  },
  {
    id: "vijay-sharma-furniture",
    title: "Vijay Sharma Furniture House — Artisanal D2C Storefront",
    category: "E-commerce & Retail",
    tagline: "Handcrafted Teak & Sal Wood Showcase with PWA & Direct Orders",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1400&auto=format&fit=crop",
    technologies: ["Next.js", "React", "Tailwind CSS", "PWA", "Image Optimization", "Responsive Design"],
    problem:
      "A renowned 30-year-old handcrafted solid wood furniture workshop had no digital channel to showcase their authentic Teak and Sal wood pieces to modern buyers looking to avoid heavy marketplace commissions.",
    solution:
      "We designed an artisanal direct-to-consumer digital storefront with installable PWA support, high-resolution catalog showcases, one-click WhatsApp inquiries, customer review validation, and local workshop storytelling.",
    result:
      "Online inquiries grew by 2.5x in the first quarter, eliminating middleman distributor margins and establishing a trusted direct-to-consumer digital channel.",
    features: [
      "Rich Solid Wood Catalog & Specifications",
      "Instant WhatsApp & Call Order Inquiries",
      "Installable Progressive Web App (PWA)",
      "Customer Reviews & Rating System",
      "Workshop Storytelling & Map Integration",
      "Ultra-Fast Mobile First Experience",
    ],
    duration: "6 weeks",
    metrics: [
      { label: "Heritage", value: "30+ Years" },
      { label: "Inquiry Growth", value: "2.5x" },
      { label: "Platform", value: "PWA Ready" },
    ],
    clientFeedback:
      "Our customers love browsing our solid wood collections on their phones and contacting us directly. It elevated our family workshop into a modern brand.",
    link: "https://vijay-sharma-furniture.vercel.app/",
  },
];