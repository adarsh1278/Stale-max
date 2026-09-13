import type { Metadata } from "next";
import PortfolioList from "@/components/portfolio/PortfolioList";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore production platforms engineered and shipped by Stalemax Technologies, including KVS Academy, TBI-KIET, Quality Veda, and Vijay Sharma Furniture House.",
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