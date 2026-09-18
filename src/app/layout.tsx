import type { Metadata } from "next";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Stalemax Technologies — Software Consulting & Technology Engineering Company",
    template: "%s | Stalemax Technologies — Software Consulting Firm",
  },
  description:
    "Stalemax Technologies is a premier software consulting company and technology engineering firm. We architect, design, and engineer custom enterprise software, AI solutions, SaaS platforms, and high-performance digital products for startups and enterprises worldwide.",
  keywords: [
    "Stalemax",
    "Stalemax Technology",
    "Stalemax Technologies",
    "Stalemax Tech",
    "Stalemax Consulting",
    "Stalemax Software",
    "stalemax.tech",
    "www.stalemax.tech",
    "stalemx.tech",
    "stalemx",
    "Stalemax Technologies Pvt Ltd",
    "software consulting company",
    "IT consulting company",
    "software consulting firm",
    "technology consulting firm",
    "custom software development company",
    "custom software consulting",
    "SaaS consulting company",
    "enterprise software consulting",
    "AI consulting company",
    "digital transformation consultancy",
    "web development consulting",
    "full stack software consulting",
    "cloud architecture consulting",
    "Next.js consulting agency",
    "startup tech consulting",
    "software engineering agency",
    "KVS Academy ERP",
    "TBI-KIET portal",
    "Quality Veda compliance",
    "Vijay Sharma Furniture",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Technology & Software Consulting",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Stalemax Technologies — Software Consulting & Technology Engineering",
    description:
      "Premier software consulting company and digital engineering firm. We architect, build, and scale high-performance custom software, SaaS products, and AI solutions for ambitious businesses worldwide.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Stalemax Technologies — Software Consulting Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stalemax Technologies — Software Consulting & Technology Company",
    description:
      "Premier software consulting company. We architect, build, and scale custom enterprise software, SaaS platforms, and AI applications.",
    images: ["/icon.jpg"],
    creator: "@stalemax",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.jpg", sizes: "any" },
    ],
    apple: [{ url: "/icon.jpg" }],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService", "ConsultingService"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: "Stalemax Technologies",
        alternateName: [
          "Stalemax",
          "Stalemax Technology",
          "Stalemax Technologies",
          "Stalemax Consulting",
          "Stalemax Tech",
          "Stalemax Technologies Pvt Ltd",
          "Stalemax Software",
          "stalemax.tech",
          "stalemx.tech",
        ],
        disambiguatingDescription:
          "Stalemax Technologies (stalemax.tech) is a custom software consulting and technology engineering company specializing in enterprise software, AI, and SaaS platforms, distinct from industrial sealant or steel manufacturing brands.",
        brand: {
          "@type": "Brand",
          name: "Stalemax",
          alternateName: [
            "Stalemax Technology",
            "Stalemax Technologies",
            "Stalemax Tech",
          ],
          url: siteConfig.url,
          logo: `${siteConfig.url}/icon.jpg`,
        },
        url: siteConfig.url,
        logo: `${siteConfig.url}/icon.jpg`,
        image: `${siteConfig.url}/icon.jpg`,
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        priceRange: "$$",
        currenciesAccepted: "INR, USD, EUR",
        paymentAccepted: "Cash, Credit Card, Bank Transfer",
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "AdministrativeArea", name: "Worldwide" },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.line1,
          addressLocality: "Meerut",
          addressRegion: "Uttar Pradesh",
          postalCode: "250001",
          addressCountry: "IN",
        },
        sameAs: [
          siteConfig.social.github,
          siteConfig.social.linkedin,
          siteConfig.social.twitter,
          siteConfig.social.instagram,
          siteConfig.social.youtube,
        ],
        knowsAbout: [
          "Software Consulting",
          "Custom Software Engineering",
          "Enterprise ERP & CRM Systems",
          "SaaS Platform Development",
          "Artificial Intelligence & Machine Learning",
          "Cloud & DevOps Architecture",
          "Next.js & React Full-Stack Development",
          "Institutional School ERP Portals",
          "Startup Incubator Systems",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software Consulting & Development Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Software Consulting & Technical Architecture",
                description:
                  "High-level technical advisory, software architecture consulting, and code audits for scaling businesses.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Enterprise Software & ERP Systems",
                description:
                  "Tailored full-stack enterprise portals, school ERPs, and workflow management systems.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SaaS Platform Engineering",
                description:
                  "Multi-tenant cloud SaaS products engineered with robust security, subscription billing, and scalability.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI & Automation Integration",
                description:
                  "AI chatbots, generative workflow copilots, automated indexing, and intelligent data systems.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cloud, DevOps & Security Strategy",
                description:
                  "Cloud native migration, Docker containerization, CI/CD automated deployment, and monitoring.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        alternateName: [
          "Stalemax",
          "Stalemax Technology",
          "Stalemax Technologies",
          "stalemax.tech",
          "stalemx.tech",
        ],
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
