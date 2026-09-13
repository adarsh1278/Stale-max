"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { products } from "@/data/products";

const revealClasses = ["reveal-left", "reveal-right"];

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".product-card");
    if (!cards) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="products">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Featured Products</span>
          <h2 className="section-title">
            Production platforms, <em>crafted by us.</em>
          </h2>
          <p className="section-sub">
            Explore live, working web applications and portals delivered by Stalemax — from enterprise ERPs and incubator portals to specialized compliance platforms.
          </p>
        </div>

        <div className="grid-2" ref={containerRef}>
          {products.map((product, i) => (
            <div key={product.id} className={`product-card ${revealClasses[i % 2]}`}>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img className="product-card-img" src={product.image} alt={product.title} />
                {product.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: "14px",
                      right: "14px",
                      background: "rgba(23, 20, 60, 0.9)",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "5px 12px",
                      borderRadius: "100px",
                      letterSpacing: "0.04em",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="product-card-body">
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "var(--navy)",
                        background: "rgba(216, 211, 255, 0.45)",
                        padding: "3px 9px",
                        borderRadius: "6px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 style={{ fontSize: "19px", fontWeight: 700, color: "var(--navy)", marginBottom: "10px" }}>
                  {product.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, marginBottom: "18px" }}>
                  {product.description}
                </p>

                <ul className="feature-grid" style={{ marginBottom: "22px" }}>
                  {product.features.slice(0, 6).map((feature) => (
                    <li
                      key={feature}
                      style={{
                        fontSize: "12.5px",
                        color: "var(--text)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <CheckCircle2 size={13} color="#17143C" style={{ flexShrink: 0 }} />
                      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    alignItems: "center",
                    borderTop: "1px solid var(--border)",
                    paddingTop: "16px",
                  }}
                >
                  {product.liveDemoUrl && (
                    <a
                      href={product.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        fontSize: "13px",
                        padding: "10px 18px",
                        textDecoration: "none",
                        flex: "1 1 auto",
                      }}
                    >
                      <span>Explore Live Platform</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <Link
                    href={`/portfolio#${product.id}`}
                    className="btn-secondary"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      fontSize: "13px",
                      padding: "10px 16px",
                      textDecoration: "none",
                      flex: "1 1 auto",
                    }}
                  >
                    <span>Read Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}