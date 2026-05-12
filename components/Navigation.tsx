"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

/* ─── data ─────────────────────────────────────────────── */
const servicesCol1 = [
  { label: "CLOUD & CYBERSECURITY", href: "/services/cybersecurity" },
  { label: "DATA & AI", href: "/services/data-and-ai" },
  { label: "CLOUD MIGRATION", href: "/services/migration" },
  { label: "APP INNOVATION & AUTOMATION", href: "/services/app-innovation" },
  { label: "CLOUD INFRASTRUCTURE", href: "/services/infrastructure" },
];
const servicesCol2 = [
  { label: "MODERN WORKPLACE", href: "/services/modern-work" },
  { label: "SYSTEM INTEGRATION", href: "/services/system-integration" },
  { label: "MANAGED IT SERVICES", href: "/services/managed-it-services" },
  { label: "EDI MANAGED SERVICES", href: "/services/edi-managed-services" },
];
const industriesCol1 = [
  { label: "HEALTHCARE & LIFE SCIENCES", href: "/industries/healthcare" },
  { label: "CHEMICAL, OIL & GAS", href: "/industries/chemical-oil-gas" },
  { label: "BANKING & FINANCIAL SERVICES", href: "/industries/banking-and-financial-services" },
  { label: "PUBLIC SECTOR", href: "/industries/public-sector" },
];
const industriesCol2 = [
  { label: "REAL ESTATE & CONSTRUCTION", href: "/industries/real-estate-construction" },
  { label: "MANUFACTURING", href: "/industries/manufacturing" },
  { label: "MEDIA & TELECOMMUNICATION", href: "/industries/media-telecommunication" },
];

const BLURB =
  "Delivering seamless experiences, digital and operational efficiency for enterprises, and actionable insights so you can outperform the competition – every time.";
const BULLETS = [
  "Seamless Experience Delivery",
  "Digital Efficiency Optimization",
  "Operational Excellence",
  "Actionable Competitive Insights",
];

/* ─── mega menu ─────────────────────────────────────────── */
function MegaMenuPanel({
  col1Heading,
  col1Links,
  col2Links,
}: {
  col1Heading: string;
  col1Links: { label: string; href: string }[];
  col2Links: { label: string; href: string }[];
}) {
  return (
    <div
      className="mega-menu-panel"
      style={{
        position: "fixed",
        top: "80px",
        left: 0,
        width: "100vw",
        backgroundColor: "#ffffff",
        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
        zIndex: 1000,
      }}
    >
      <div
        className="services-mega-menu-inner services-mega-menu-grid"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "48px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 420px",
        }}
      >
        {/* Column 1 */}
        <div style={{ paddingRight: "60px" }}>
          <p style={{ fontSize: "14px", fontWeight: 700, color: "#111111", letterSpacing: "1px", margin: "0 0 24px 0" }}>
            {col1Heading}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {col1Links.map((item) => (
              <Link key={item.href} href={item.href} className="mega-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="services-col-2" style={{ paddingLeft: "60px", paddingTop: "37px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {col2Links.map((item) => (
              <Link key={item.href} href={item.href} className="mega-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3 — right content panel with left border as divider */}
        <div
          style={{
            borderLeft: "2px solid #90D5FF",
            paddingLeft: "40px",
            marginLeft: "40px",
          }}
        >
          <p style={{ fontSize: "17px", fontWeight: 700, color: "#111111", margin: "0 0 16px 0" }}>
            Chamco Digital
          </p>
          <p style={{ fontSize: "14.3px", fontWeight: 300, color: "#444444", lineHeight: 1.7, margin: "0 0 20px 0" }}>
            {BLURB}
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {BULLETS.map((b) => (
              <li key={b} style={{ display: "flex", alignItems: "center", fontSize: "14.3px", fontWeight: 300, color: "#333333" }}>
                <span style={{ color: "#2563eb", marginRight: "8px", flexShrink: 0 }}>•</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─── main nav ──────────────────────────────────────────── */
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mServicesOpen, setMServicesOpen] = useState(false);
  const [mIndustriesOpen, setMIndustriesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest(".nav-dropdown-wrapper")) {
        setIsServicesOpen(false);
        setIsIndustriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function closeMobile() {
    setMobileOpen(false);
    setMServicesOpen(false);
    setMIndustriesOpen(false);
  }

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
    setIsIndustriesOpen(false);
  };

  const toggleIndustries = () => {
    setIsIndustriesOpen((prev) => !prev);
    setIsServicesOpen(false);
  };

  const navBg = scrolled ? "bg-[#000000] shadow-lg" : "bg-[#000000]";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-colors duration-300 ${navBg}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-full flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0" onClick={closeMobile}>
          <Image
            src="/images/Chamco-Digital_white-color.png"
            alt="Chamco Digital"
            width={180}
            height={40}
            className="h-10 w-auto object-contain"
            priority
            unoptimized
          />
        </Link>

        {/* ── Desktop links (md+) ── */}
        <div className="hidden lg:flex items-center gap-1 h-full">
          <Link
            href="/discover-chamco"
            className="h-full flex items-center px-4 text-white uppercase tracking-wider text-xs font-medium hover:text-[#2563eb] transition-colors"
          >
            Discover Chamco
          </Link>

          {/* Services */}
          <div className="nav-dropdown-wrapper relative h-full flex items-center">
            <button
              onClick={toggleServices}
              className="h-full flex items-center gap-1 px-4 text-white uppercase tracking-wider text-xs font-medium hover:text-[#2563eb] transition-colors"
            >
              Services
              <svg className={`w-3 h-3 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isServicesOpen && (
              <MegaMenuPanel
                col1Heading="Explore our listed Services"
                col1Links={servicesCol1}
                col2Links={servicesCol2}
              />
            )}
          </div>

          {/* Industries */}
          <div className="nav-dropdown-wrapper relative h-full flex items-center">
            <button
              onClick={toggleIndustries}
              className="h-full flex items-center gap-1 px-4 text-white uppercase tracking-wider text-xs font-medium hover:text-[#2563eb] transition-colors"
            >
              Industries
              <svg className={`w-3 h-3 transition-transform ${isIndustriesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isIndustriesOpen && (
              <MegaMenuPanel
                col1Heading="Explore our listed Industries"
                col1Links={industriesCol1}
                col2Links={industriesCol2}
              />
            )}
          </div>

          {[
            { label: "Insights Hub", href: "/blog" },
            { label: "Learning", href: "/learning" },
            { label: "Partners", href: "/partners" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="h-full flex items-center px-4 text-white uppercase tracking-wider text-xs font-medium hover:text-[#2563eb] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* ── Right side ── */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center bg-[#2563eb] hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded transition-colors"
          >
            Contact Us
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#070f1f] border-t border-[#1e3a5f] px-6 py-4 space-y-1">
          <Link href="/discover-chamco" className="block py-2.5 text-sm text-gray-200 hover:text-white uppercase tracking-wider" onClick={closeMobile}>
            Discover Chamco
          </Link>

          <div>
            <button
              onClick={() => setMServicesOpen(!mServicesOpen)}
              className="flex items-center justify-between w-full py-2.5 text-sm text-gray-200 hover:text-white uppercase tracking-wider"
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${mServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mServicesOpen && (
              <div className="pl-4 pb-2 space-y-2">
                {[...servicesCol1, ...servicesCol2].map((item) => (
                  <Link key={item.label} href={item.href} className="block py-1 text-sm text-gray-400 hover:text-white" onClick={closeMobile}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setMIndustriesOpen(!mIndustriesOpen)}
              className="flex items-center justify-between w-full py-2.5 text-sm text-gray-200 hover:text-white uppercase tracking-wider"
            >
              Industries
              <svg className={`w-4 h-4 transition-transform ${mIndustriesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mIndustriesOpen && (
              <div className="pl-4 pb-2 space-y-2">
                {[...industriesCol1, ...industriesCol2].map((item) => (
                  <Link key={item.label} href={item.href} className="block py-1 text-sm text-gray-400 hover:text-white" onClick={closeMobile}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { label: "Insights Hub", href: "/blog" },
            { label: "Learning", href: "/learning" },
            { label: "Partners", href: "/partners" },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="block py-2.5 text-sm text-gray-200 hover:text-white uppercase tracking-wider" onClick={closeMobile}>
              {item.label}
            </Link>
          ))}

          <Link href="/contact" className="block mt-4 bg-[#2563eb] hover:bg-blue-700 text-white text-sm font-semibold text-center px-5 py-3 rounded" onClick={closeMobile}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
