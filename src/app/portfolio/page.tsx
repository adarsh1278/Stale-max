import type { Metadata } from "next";
import PortfolioList from "@/components/portfolio/PortfolioList";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Portfolio & Client Case Studies | Software Consulting Work",
  description:
    "Explore proven software consulting case studies by Stalemax Technologies. Discover how we engineered KVS Academy ERP, TBI-KIET Incubator Portal, Quality Veda SaaS, and Vijay Sharma Furniture House.",
  keywords: [
    "Stalemax portfolio",
    "Stalemax case studies",
    "software consulting projects",
    "KVS Academy ERP",
    "TBI-KIET incubator",
    "Quality Veda compliance",
    "Vijay Sharma Furniture website",
    "custom software development portfolio",
    "enterprise software case studies",
  ],
  openGraph: {
    title: "Portfolio & Case Studies | Stalemax Technologies — Software Consulting",
    description:
      "Proven production platforms and software engineering case studies delivered by Stalemax Technologies.",
    url: `${siteConfig.url}/portfolio`,
    images: [{ url: "/icon.jpg", width: 1200, height: 630, alt: "Stalemax Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | Stalemax Technologies",
    description: "Real-world production platforms and software consulting case studies.",
    images: ["/icon.jpg"],
  },
};

export default function PortfolioPage() {
  return (
    <div className="wrap">
      <section className="page-hero">
        <span className="section-tag">Case Studies &amp; Proven Work</span>
        <h1>Work we&apos;re proud of.</h1>
        <p>
          A selection of real-world portals, SaaS architectures, and full-stack platforms engineered, deployed, and scaling for our clients.
        </p>
      </section>

      <section className="section" style={{ paddingTop: "10px" }}>
        <PortfolioList />
      </section>
    </div>
  );
}