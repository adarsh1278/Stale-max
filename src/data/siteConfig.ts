export const siteConfig = {
  name: "Stalemax Technologies",
  shortName: "Stalemax",
  tagline: "Software Consulting & Custom Product Engineering",
  description:
    "Stalemax Technologies is a premier software consulting company and technology engineering firm. We consult, architect, and engineer custom enterprise software, AI solutions, SaaS platforms, and high-performance digital products for fast-growing businesses worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.stalemax.tech",
  email: "ombansal1232003@gmail.com",
  phone: "+91 90795 95565",
  whatsapp: "919079595565",
  address: {
    line1: "Stalemax Technologies",
    line2: "Meerut, Uttar Pradesh",
    line3: "India — 250001",
  },
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113827.7!2d77.6!3d28.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMeerut%2C+Uttar+Pradesh!5e0!3m2!1sen!2sin",
  social: {
    github: "https://github.com/adarsh1278/Stale-max",
    linkedin: "https://linkedin.com/company/stalemax",
    instagram: "https://instagram.com/stalemax",
    twitter: "https://x.com/stalemax",
    youtube: "https://youtube.com/@stalemax",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Products", href: "/#products" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};
