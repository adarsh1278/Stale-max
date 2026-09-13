import type { Metadata } from "next";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { siteConfig } from "@/data/siteConfig";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Software Consulting & Engineering",
  description:
    "Everything you need to know about working with Stalemax Technologies: consulting engagements, project pricing, development timelines, tech stacks, code ownership, and post-launch support.",
  keywords: [
    "Stalemax FAQ",
    "software consulting questions",
    "custom software pricing",
    "software development timeline",
    "software code ownership",
    "hiring software consulting firm",
  ],
  openGraph: {
    title: "FAQ | Stalemax Technologies — Software Consulting Firm",
    description:
      "Frequently asked questions about software consulting, development timelines, pricing, code ownership, and post-launch support.",
    url: `${siteConfig.url}/faq`,
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="page-hero">
        <span className="section-tag">Help &amp; Transparency</span>
        <h1>Frequently asked questions.</h1>
        <p>Everything you need to know about pricing, development cycles, code ownership, and how our software consulting engagements work.</p>
      </section>
      <section className="section" style={{ paddingTop: "20px" }}>
        <FaqAccordion />
      </section>
    </div>
  );
}
