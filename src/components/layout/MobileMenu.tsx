"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Phone, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    // Prevent background scrolling when menu is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      <div className="mobile-menu-overlay" onClick={onClose} aria-hidden="true" />
      <div className="mobile-menu-card" role="dialog" aria-modal="true" aria-label="Navigation Menu">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", borderBottom: "1px solid var(--border)", paddingBottom: "10px" }}>
          <span style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "17px", color: "var(--navy)" }}>
            {siteConfig.shortName}
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              background: "rgba(23, 20, 60, 0.05)",
              border: "none",
              borderRadius: "50%",
              color: "var(--navy)",
              padding: "8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mobile-menu-nav">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={onClose} className="mobile-nav-link">
              <span>{link.label}</span>
              <ArrowUpRight size={15} style={{ opacity: 0.4 }} />
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: "16px", paddingTop: "14px", borderTop: "1px solid var(--border)" }}>
          <Link href="/contact" onClick={onClose}>
            <button className="cta-btn" style={{ width: "100%", padding: "12px 18px", fontSize: "14px" }}>
              Get Started &amp; Book Call
            </button>
          </Link>

          <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="btn-secondary"
              style={{
                flex: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                fontSize: "12.5px",
                padding: "9px 12px",
                textDecoration: "none",
                borderRadius: "100px",
              }}
            >
              <Phone size={13} />
              <span>Call Us</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                flex: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                fontSize: "12.5px",
                padding: "9px 12px",
                textDecoration: "none",
                borderRadius: "100px",
              }}
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
