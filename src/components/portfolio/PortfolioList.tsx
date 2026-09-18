"use client";

import { useState } from "react";
import { portfolio, PortfolioItem } from "@/data/portfolio";
import { ExternalLink, Check, Sparkles, TrendingUp, Layers } from "lucide-react";

const categories = [
  "All Projects",
  "EdTech & Institutional ERP",
  "Startup Ecosystem & Incubator",
  "Compliance SaaS & EdTech",
  "E-commerce & Retail",
];

function PortfolioMedia({ item }: { item: PortfolioItem }) {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  return (
    <div className="case-study-media">
      {/* Loading Skeleton / Shimmer Animation */}
      {!loaded && !hasError && (
        <div className="skeleton-media-placeholder">
          <div className="skeleton-loading-text">
            <span className="skeleton-spinner" />
            <span>Loading Platform Preview...</span>
          </div>
        </div>
      )}

      {hasError ? (
        <div className="case-study-fallback">
          <span className="case-study-tag" style={{ marginBottom: "12px" }}>
            {item.category}
          </span>
          <h4 style={{ color: "var(--navy)", fontSize: "16px", fontWeight: 700, marginBottom: "6px" }}>
            {item.title}
          </h4>
          <p style={{ color: "var(--muted)", fontSize: "13px" }}>
            Live Production System
          </p>
        </div>
      ) : (
        <img
          className={`case-study-img ${loaded ? "img-loaded" : "img-loading"}`}
          src={item.image}
          alt={item.title}
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}

      <div className="case-study-media-overlay">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            setIsOpening(true);
            setTimeout(() => setIsOpening(false), 2000);
          }}
          className="btn-primary"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 22px",
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          {isOpening ? (
            <>
              <span className="btn-spinner" />
              <span>Launching Platform...</span>
            </>
          ) : (
            <>
              <span>Open Live Platform</span>
              <ExternalLink size={16} />
            </>
          )}
        </a>
      </div>
    </div>
  );
}

export default function PortfolioList() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredItems =
    selectedCategory === "All Projects"
      ? portfolio
      : portfolio.filter((item) => item.category.toLowerCase().includes(selectedCategory.toLowerCase()) || item.category === selectedCategory);

  return (
    <div>
      {/* Category filter tabs */}
      <div className="portfolio-tabs-wrap">
        <div className="portfolio-tabs">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`portfolio-tab-btn ${isActive ? "active" : ""}`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Case studies list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
        {filteredItems.map((item) => (
          <article key={item.id} id={item.id} className="case-study-card">
            <PortfolioMedia item={item} />

            <div className="case-study-body">
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <span className="case-study-tag">
                  {item.category}
                </span>
                <span style={{ fontSize: "12px", color: "var(--muted)", fontWeight: 600 }}>
                  · {item.duration} development cycle
                </span>
              </div>

              <h2 className="case-study-title">
                {item.title}
              </h2>

              <p className="case-study-tagline">
                {item.tagline}
              </p>

              {/* Metrics row */}
              {item.metrics && item.metrics.length > 0 && (
                <div className="case-study-metrics">
                  {item.metrics.map((m, idx) => (
                    <div key={idx} className="metric-box">
                      <span className="metric-val">{m.value}</span>
                      <span className="metric-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="case-study-section">
                <h5>
                  <span style={{ color: "#c0392b", marginRight: "6px" }}>●</span> The Challenge
                </h5>
                <p>{item.problem}</p>
              </div>

              <div className="case-study-section">
                <h5>
                  <span style={{ color: "var(--navy)", marginRight: "6px" }}>●</span> What We Engineered
                </h5>
                <p>{item.solution}</p>
              </div>

              <div className="case-study-section">
                <h5>
                  <span style={{ color: "#27ae60", marginRight: "6px" }}>●</span> The Result &amp; Impact
                </h5>
                <p>{item.result}</p>
              </div>

              {/* Key Features */}
              <div style={{ marginTop: "18px", marginBottom: "20px" }}>
                <h6 style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--navy)", marginBottom: "8px" }}>
                  Key Capabilities Delivered
                </h6>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "6px 12px" }}>
                  {item.features.map((feat) => (
                    <div key={feat} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", color: "var(--muted)" }}>
                      <Check size={13} color="#27ae60" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "18px 0" }}>
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "var(--navy)",
                      background: "rgba(216, 211, 255, 0.45)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {item.clientFeedback && (
                <div className="case-study-quote-box">
                  <p className="case-study-quote">
                    &ldquo;{item.clientFeedback}&rdquo;
                  </p>
                </div>
              )}

              {/* Mobile CTA */}
              <div className="case-study-mobile-action">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    width: "100%",
                    textDecoration: "none",
                    padding: "13px 20px",
                  }}
                >
                  <span>Launch Live Platform ({item.title.split("—")[0].trim()})</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
