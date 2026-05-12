"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, type ReactNode } from "react";

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] mb-4">
      {children}
    </p>
  );
}

/* ═══════════════════════════════════════════════════════════
   TAB 1 — Who We Are
═══════════════════════════════════════════════════════════ */
const whoWeAreAccordion = [
  {
    title: "Our Mission",
    body: "To empower organizations with transformative AI and cloud technology training, fostering digital leadership and sustainable growth in an evolving tech landscape.",
  },
  {
    title: "Our Vision",
    body: "A world where every organization and professional is equipped with future-ready digital skills to lead confidently in the AI-driven economy.",
  },
  {
    title: "Our Values",
    body: "Fairness, transparency, safety, and privacy form the foundation of our responsible AI approach, guiding every solution and training program we deliver.",
  },
];

function WhoWeAre() {
  const [modalOpen, setModalOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

  return (
    <div style={{ paddingTop: 0, paddingBottom: "60px" }}>
      {/* Upper two-column row — spans full width; left column carries its own left padding */}
      <div className="tabbed-who-row" style={{ display: "flex", gap: 0, alignItems: "stretch" }}>
        {/* Left column */}
        <div className="tabbed-who-text" style={{ flex: 1, paddingLeft: "6%", paddingRight: "48px", paddingTop: "50px" }}>
          <h3
            style={{
              fontWeight: 200,
              fontSize: "clamp(28px, 3.2vw, 42px)",
              color: "#111111",
              lineHeight: 1.2,
              margin: "0 0 0 0",
              fontFamily: "inherit",
            }}
          >
            <span style={{ display: "block" }}>Cultivating trust with</span>
            <span style={{ display: "block" }}>responsible AI &amp;</span>
            <span style={{ display: "block" }}>cloud technology.</span>
          </h3>
          <p style={{ color: "#333333", fontSize: "20px", fontWeight: 300, lineHeight: 1.7, marginTop: "24px", marginBottom: 0 }}>
            Through our 12-Week Microsoft AI &amp; Cloud Technology Workforce
            Enablement Programs, we equip organizations with secure,
            enterprise-ready capabilities grounded in proven governance and
            responsible AI practices.
          </p>
          <p style={{ color: "#333333", fontSize: "17px", fontWeight: 300, lineHeight: 1.7, marginTop: "24px", marginBottom: 0 }}>
            Each cohort integrates risk management, compliance, and secure cloud
            architecture while emphasizing data protection and privacy-first
            design.
          </p>
          <p style={{ color: "#333333", fontSize: "17px", fontWeight: 300, lineHeight: 1.7, marginTop: "24px", marginBottom: 0 }}>
            Combining hands-on technical training with real-world use cases, we
            deliver measurable outcomes—empowering teams to innovate
            confidently, ethically, and strategically in today&apos;s rapidly
            evolving AI-driven economy.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, marginTop: "28px" }}>
            {["Fairness", "Transparency & Explainability", "Safety, Security & Privacy"].map((item) => (
              <li key={item} style={{ color: "#333333", fontSize: "17px", fontWeight: 700, lineHeight: 2 }}>
                &bull; {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — image fills full height of left column */}
        <div className="tabbed-who-image" style={{ width: "50%", flexShrink: 0, alignSelf: "stretch", position: "relative", minHeight: "800px", margin: 0, padding: 0 }}>
          <Image
            src="/images/Who-We-Are-Image.webp"
            alt="Who We Are"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            unoptimized
          />
        </div>
      </div>

      {/* Lower two-column row */}
      <div className="tabbed-lower-row" style={{ display: "grid", gridTemplateColumns: "35% 65%", gridTemplateRows: "auto", alignItems: "start", gap: "48px", marginTop: "60px", paddingLeft: "6%", paddingRight: "6%" }}>
        {/* Left column — sidebar card */}
        <div style={{ gridColumn: 1, gridRow: 1 }}>
          <div style={{ backgroundColor: "#dceefb", padding: "32px", borderRadius: "8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <p style={{ color: "#111111", fontWeight: 600, fontSize: "16px", margin: 0 }}>Learn More About Us</p>
              <button
                onClick={() => setModalOpen(true)}
                aria-label="Open details"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#111111",
                  color: "white",
                  border: "none",
                  fontSize: "22px",
                  lineHeight: 1,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                +
              </button>
            </div>
            <p style={{ color: "#444444", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
              Discover our mission, vision, and the values that drive our
              commitment to responsible AI adoption and workforce enablement.
            </p>
          </div>
        </div>

        {/* Right column — body text */}
        <div style={{ gridColumn: 2, gridRow: 1, paddingRight: "50px" }}>
          <p style={{ color: "#333333", fontSize: "20px", fontWeight: 300, lineHeight: 1.7, marginTop: 0, marginBottom: 0 }}>
            <span style={{ fontWeight: 700 }}>Chamco Digital&apos;s 12-Week Microsoft AI &amp; cloud technology</span>{" "}
            workforce enablement programs are designed to help organizations
            build secure, enterprise-grade AI and cloud capabilities with
            confidence. Grounded in proven governance frameworks and responsible
            AI principles, each cohort integrates risk management, regulatory
            compliance, and secure cloud architecture into a practical learning
            journey.
          </p>
          <p style={{ color: "#333333", fontSize: "20px", fontWeight: 300, lineHeight: 1.7, marginTop: "20px", marginBottom: 0 }}>
            By the end of the program, individuals and organizations are
            equipped with measurable, scalable capabilities that drive strategic
            innovation, strengthen operational resilience, and position them to
            compete effectively in today&apos;s rapidly evolving, AI-driven
            global economy.
          </p>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "40px",
              maxWidth: "560px",
              width: "90%",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h4 style={{ fontWeight: 700, fontSize: "20px", color: "#111111", margin: 0 }}>
                About Chamco Digital
              </h4>
              <button
                onClick={() => setModalOpen(false)}
                style={{ background: "none", border: "none", fontSize: "28px", cursor: "pointer", color: "#666666", lineHeight: 1 }}
              >
                &times;
              </button>
            </div>
            <div>
              {whoWeAreAccordion.map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #e5e7eb" }}>
                  <button
                    onClick={() => setAccordionOpen(accordionOpen === i ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontWeight: 600, fontSize: "15px", color: "#111111" }}>{item.title}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth={2}
                      style={{
                        transform: accordionOpen === i ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        flexShrink: 0,
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {accordionOpen === i && (
                    <div style={{ paddingBottom: "16px" }}>
                      <p style={{ color: "#444444", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
                        {item.body}
                      </p>
                    </div>
                  )}
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e5e7eb" }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   TAB 2 — Chamco Methodology
═══════════════════════════════════════════════════════════ */
const methodologyArticles = [
  {
    image: "/images/Jude-Slider-Image.jpg",
    title: "Strategic Microsoft Ecosystem Partnerships Are the Defining Leadership Imperative in the AI Era.",
    subtitle: "Strategic Microsoft Partnerships Emerge as the Competitive Edge in Responsible, Enterprise-Scale AI Transformation",
    label: "Article by",
    authorName: "N. Jude Nwosu",
    authorRole: "Chief Technology Officer",
    company: "Chamco Digital",
    href: "/strategic-microsoft-ecosystem-partnerships",
    linkedIn: "https://www.linkedin.com/in/judenwosu/",
  },
  {
    image: "/images/Slider-Image-1.jpg",
    title: "Bio-Inspired AI: Nature's Blueprint for Modern Algorithms",
    subtitle: "How Biology-Inspired Computation Is Transforming Enterprise Optimization and Strategic Decision-Making.",
    label: "Article by",
    authorName: "N. Jude Nwosu",
    authorRole: "Chief Technology Officer",
    company: "Chamco Digital",
    href: "/nature-inspired-computing",
    linkedIn: "https://www.linkedin.com/company/chamcodigital/?viewAsMember=true",
  },
  {
    image: "/images/Slider-Image-2.jpg",
    title: "AI Workforce Enablement Emerges as a Strategic Imperative in the Enterprise AI Era.",
    subtitle: "Closing the AI readiness gap through scalable training, measurable skills development, and leadership-driven transformation.",
    label: "Article by",
    authorName: "Dave Phillips",
    authorRole: "AI Consultant",
    company: "Chamco Digital",
    href: "/ai-workforce-enablement",
  },
];

function ChamcoMethodology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  const navigate = (dir: "prev" | "next") => {
    const next =
      dir === "next"
        ? (activeIndex + 1) % methodologyArticles.length
        : (activeIndex - 1 + methodologyArticles.length) % methodologyArticles.length;
    setActiveIndex(next);
    setFadeKey((k) => k + 1);
  };

  const article = methodologyArticles[activeIndex];

  return (
    <div style={{ paddingTop: "85px", paddingBottom: "150px", overflowX: "hidden" }}>
      <style>{`
        @keyframes methodFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .method-slide {
          animation: methodFadeIn 0.4s ease forwards;
        }
        .method-arrow-btn {
          width: 44px;
          height: 44px;
          background: #ffffff;
          border: 1px solid #dddddd;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 20px;
          color: #333333;
          line-height: 1;
          transition: background-color 0.2s ease;
        }
        .method-arrow-btn:hover {
          background-color: #f0f0f0;
        }
        .method-slide-btn {
          display: inline-block;
          border: 1px solid #111111;
          background: transparent;
          color: #111111;
          padding: 12px 32px;
          font-size: 14px;
          font-weight: 400;
          cursor: pointer;
          border-radius: 0;
          text-decoration: none;
          transition: background-color 0.2s ease, color 0.2s ease;
          margin-top: 32px;
        }
        .method-slide-btn:hover {
          background-color: #111111;
          color: #ffffff;
        }

        /* ── Mobile / tablet responsive overrides ───────────── */
        @media (max-width: 768px) {
          .tabbed-who-row {
            flex-direction: column !important;
          }
          .tabbed-who-text {
            flex: none !important;
            width: 100% !important;
            padding-left: 6% !important;
            padding-right: 6% !important;
          }
          .tabbed-who-image {
            width: 100% !important;
            min-height: 0 !important;
            aspect-ratio: 4 / 3 !important;
            align-self: auto !important;
          }
          .tabbed-lower-row {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .tabbed-three-col {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .tabbed-insight-row {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .tabbed-stats-grid {
            grid-template-columns: 1fr !important;
          }
          .tabbed-expertise-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .methodology-watermark {
            font-size: clamp(36px, 9vw, 60px) !important;
            white-space: normal !important;
            line-height: 1.1 !important;
          }
          .methodology-row {
            flex-direction: column !important;
          }
          .methodology-left {
            width: 100% !important;
            padding-left: 6% !important;
            padding-right: 6% !important;
          }
          .methodology-right {
            width: 100% !important;
            min-height: 280px !important;
            padding: 32px !important;
            padding-right: 32px !important;
          }
          .methodology-right img {
            width: 100% !important;
            max-width: 400px !important;
          }
          .methodology-headline {
            font-size: clamp(32px, 9vw, 48px) !important;
          }
          .method-slide {
            flex-direction: column !important;
            height: auto !important;
          }
          .method-slide > div {
            width: 100% !important;
            height: auto !important;
          }
          .method-slide > div:first-child img {
            height: 240px !important;
          }
          .method-slide > div:last-child {
            padding: 32px 24px !important;
            height: auto !important;
            overflow-x: hidden !important;
          }
          .method-slide h4 {
            font-size: 22px !important;
          }
          .method-arrows {
            position: static !important;
            flex-direction: row !important;
            justify-content: flex-end !important;
            margin-bottom: 16px !important;
            gap: 8px !important;
          }
          .tabbed-nav-link {
            font-size: 13px !important;
            margin-right: 20px !important;
            padding-top: 12px !important;
          }
          .tabbed-watermark {
            font-size: clamp(36px, 11vw, 60px) !important;
            white-space: normal !important;
            line-height: 1.05 !important;
            letter-spacing: -0.5px !important;
          }
          .tabbed-jensen-row {
            margin-left: 6% !important;
            margin-right: 6% !important;
            padding-bottom: 80px !important;
          }
          .tabbed-jensen-row > svg {
            width: 48px !important;
            height: 40px !important;
            margin-right: 12px !important;
          }
          .tabbed-jensen-text {
            font-size: 20px !important;
            padding-bottom: 28px !important;
          }
          .tabbed-jensen-attribution {
            font-size: 14px !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .tabbed-three-col {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .tabbed-insight-row {
            grid-template-columns: 1fr !important;
          }
          .tabbed-expertise-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: auto !important;
          }
        }
      `}</style>

      {/* Part 1 — Watermark */}
      <div style={{ paddingLeft: "6%" }}>
        <h2
          className="methodology-watermark"
          style={{
            fontSize: "clamp(60px, 8vw, 110px)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1,
            margin: 0,
            padding: 0,
          }}
        >
          Chamco Methodology
        </h2>
      </div>

      {/* Part 2 — Two-column layout */}
      <div className="methodology-row" style={{ display: "flex", alignItems: "stretch" }}>
        {/* Left — 55% */}
        <div className="methodology-left" style={{ width: "55%", flexShrink: 0, paddingLeft: "6%", paddingTop: "40px" }}>
          <p
            style={{
              color: "#2563eb",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              margin: "0 0 16px 0",
            }}
          >
            Our Methods
          </p>
          <h3
            className="methodology-headline"
            style={{
              fontWeight: 200,
              fontSize: "64px",
              color: "#111111",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            <span style={{ display: "block" }}>Power the</span>
            <span style={{ display: "block" }}>future, today.</span>
          </h3>
        </div>

        {/* Right — paint splash, contained with grey background */}
        <div
          className="methodology-right"
          style={{
            width: "52%",
            backgroundColor: "#ebebeb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "500px",
            padding: "40px",
            paddingTop: "50px",
            paddingRight: "150px",
          }}
        >
          <Image
            src="/images/Photonics-image.png"
            alt="Paint splash"
            width={2400}
            height={1600}
            unoptimized
            style={{
              width: "260%",
              height: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Methodology intro content */}
      <div style={{ padding: '60px 6% 0', maxWidth: '100%' }}>
        {/* Three-column value proposition row */}
        <div className="tabbed-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px', marginBottom: '60px' }}>
          {[
            {
              number: '01',
              title: 'Diagnose',
              body: "We begin every engagement with a structured assessment of your organization's AI readiness, skills gaps, technology landscape, and strategic objectives — ensuring every solution is grounded in your specific operational reality.",
            },
            {
              number: '02',
              title: 'Design',
              body: 'Our certified architects and training specialists co-design a tailored roadmap — combining the right technology platforms, certification pathways, and workforce enablement strategies to deliver measurable outcomes at your pace.',
            },
            {
              number: '03',
              title: 'Deploy',
              body: 'We execute with precision — deploying cloud and AI solutions, delivering live instructor-led training cohorts, and embedding the capabilities your teams need to operate independently and continuously innovate.',
            },
          ].map((item, i) => (
            <div key={i} style={{ borderTop: '2px solid #2563eb', paddingTop: '28px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#2563eb', letterSpacing: '2px', display: 'block', marginBottom: '12px' }}>{item.number}</span>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', margin: '0 0 16px 0', lineHeight: 1.2 }}>{item.title}</h3>
              <p style={{ fontSize: '20px', fontWeight: 300, color: '#444444', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#d0d0d0', marginBottom: '60px' }} />

        {/* Two-column insight block */}
        <div className="tabbed-insight-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '60px', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#2563eb', display: 'block', marginBottom: '16px' }}>WHY IT WORKS</span>
            <h3 style={{ fontSize: '32px', fontWeight: 700, color: '#111111', lineHeight: 1.2, margin: '0 0 24px 0' }}>
              Methodology built on the intersection of training and technology.
            </h3>
            <p style={{ fontSize: '20px', fontWeight: 300, color: '#444444', lineHeight: 1.8, margin: 0 }}>
              Most organizations fail at AI transformation not because of technology — but because their people are not equipped to use it. Chamco Digital&apos;s methodology closes both gaps simultaneously, delivering the cloud infrastructure and the certified human capability that make transformation stick.
            </p>
          </div>

          {/* Right — 4 stat highlights */}
          <div className="tabbed-stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {[
              { stat: '12', unit: 'Weeks', label: 'From enrollment to Microsoft certification' },
              { stat: '300+', unit: '', label: 'Microsoft-certified expert instructors' },
              { stat: '100%', unit: '', label: 'Hands-on Azure lab environments' },
              { stat: '3×', unit: '', label: 'Faster AI deployment with ecosystem partnerships' },
            ].map((s, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '28px 24px', border: '1px solid #e0e0e0' }}>
                <div style={{ fontSize: '40px', fontWeight: 800, color: '#2563eb', lineHeight: 1, marginBottom: '4px' }}>
                  {s.stat}<span style={{ fontSize: '20px', fontWeight: 400 }}>{s.unit}</span>
                </div>
                <p style={{ fontSize: '13px', fontWeight: 300, color: '#555555', lineHeight: 1.5, margin: '8px 0 0 0' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Part 3 — Subheader */}
      {/* CHANGE 2 — reduced from 75px */}
      <div style={{ paddingLeft: "6%", paddingBottom: "37px" }}>
        <h3
          style={{
            fontWeight: 200,
            fontSize: "40px",
            color: "#111111",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          Transformation. Responsible. Skilled.
        </h3>
      </div>

      {/* Part 4 — Body text */}
      <div style={{ paddingLeft: "6%", paddingBottom: "75px" }}>
        <p
          style={{
            fontSize: "20px",
            fontWeight: 300,
            color: "#333333",
            lineHeight: 1.7,
            maxWidth: "700px",
            margin: 0,
          }}
        >
          Chamco Digital drives Transformation through Responsible and Skilled AI
          training and adoption, empowering businesses with ethical, agentic AI
          solutions for sustainable growth and operational excellence.
        </p>
      </div>

      {/* Part 5 — Full-width article slider */}
      <div
        key={fadeKey}
        className="method-slide"
        style={{ display: "flex", width: "100%", height: "600px", overflow: "hidden" }}
      >
        {/* Left — full-height image, touches left viewport edge */}
        <div style={{ width: "60%", flexShrink: 0, overflow: "hidden" }}>
          <Image
            src={article.image}
            alt={article.title}
            width={900}
            height={600}
            unoptimized
            style={{ width: "100%", height: "600px", objectFit: "cover", objectPosition: "center top", display: "block" }}
          />
        </div>

        {/* Right — content panel */}
        <div
          style={{
            width: "40%",
            flexShrink: 0,
            backgroundColor: "#ebebeb",
            padding: "48px 40px",
            position: "relative",
            height: "600px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          {/* Navigation arrows — stacked in top-right corner */}
          <div className="method-arrows" style={{ position: "absolute", top: 0, right: 0, display: "flex", flexDirection: "column" }}>
            <button
              className="method-arrow-btn"
              onClick={() => navigate("next")}
              aria-label="Next article"
            >
              &rsaquo;
            </button>
            <button
              className="method-arrow-btn"
              onClick={() => navigate("prev")}
              aria-label="Previous article"
            >
              &lsaquo;
            </button>
          </div>

          {/* Article content */}
          <h4 style={{ fontWeight: 700, fontSize: "28px", color: "#111111", lineHeight: 1.3, margin: 0 }}>
            {article.title}
          </h4>
          <p style={{ fontWeight: 300, fontSize: "14px", color: "#555555", lineHeight: 1.6, marginTop: "20px", marginBottom: 0 }}>
            {article.subtitle}
          </p>

          <span style={{ fontSize: "13px", fontWeight: 300, color: "#777777", display: "block", marginTop: "28px" }}>
            {article.label}
          </span>
          <span style={{ fontSize: "16px", fontWeight: 600, color: "#111111", display: "block", marginTop: "4px" }}>
            {article.authorName}
          </span>
          <span style={{ fontSize: "13px", fontWeight: 300, color: "#555555", display: "block" }}>
            {article.authorRole}
          </span>
          <span style={{ fontSize: "13px", fontWeight: 300, color: "#555555", display: "block" }}>
            {article.company}
          </span>

          {/* LinkedIn icon */}
          {article.linkedIn ? (
            <a href={article.linkedIn} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", textDecoration: "none", marginTop: "24px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#0a66c2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "white", fontSize: "14px", fontWeight: 700, fontFamily: "Arial, sans-serif", lineHeight: 1 }}>
                  in
                </span>
              </div>
            </a>
          ) : (
            <div
              style={{
                marginTop: "24px",
                width: "32px",
                height: "32px",
                backgroundColor: "#0a66c2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "white", fontSize: "14px", fontWeight: 700, fontFamily: "Arial, sans-serif", lineHeight: 1 }}>
                in
              </span>
            </div>
          )}

          {/* Read article button */}
          <Link href={article.href} target="_blank" rel="noopener noreferrer" className="method-slide-btn" style={{ alignSelf: "flex-start" }}>
            Read article
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   TAB 3 — Chamco Expertise
═══════════════════════════════════════════════════════════ */
const expertiseCells = [
  { header: "Enterprise AI Training", summary: "Cohort-based AI training program delivering consistent, standardized AI outcomes across any organization." },
  { header: "Applied AI Workforce Training", summary: "Role-based AI enablement and fluency training for students, professionals, and enterprise teams." },
  { header: "Azure AI-102 Cert. Track", summary: "Building AI infused applications that leverage Microsoft Foundry." },
  { header: "Microsoft Copilot Suite", summary: "Enterprise AI assistant automating workflows across Teams, Outlook, and Azure." },
  { header: "Azure AI Foundry", summary: "Unified platform for building and deploying secure, scalable AI agents." },
  { header: "OpenAI Reasoning Models", summary: "Industry-leading foundation models powering generative content, reasoning, and enterprise workflows." },
  { header: "Claude Code", summary: "Agentic tool for terminal-based coding and complex refactoring." },
  { header: "Google Vertex AI", summary: "Google's enterprise platform for building and deploying custom AI agents." },
];

function ChamcoExpertise() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* Watermark */}
      <div style={{
        paddingTop: '100px',
        paddingLeft: '6%',
        lineHeight: 1,
        marginBottom: 0,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        <span className="tabbed-watermark" style={{
          fontSize: 'clamp(60px, 8vw, 110px)',
          fontWeight: 800,
          color: '#d0d0d0',
          display: 'block',
          lineHeight: 1,
          letterSpacing: '-2px',
          whiteSpace: 'nowrap',
        }}>
          Chamco Expertise
        </span>
      </div>

      {/* Part 1 — Header */}
      <div
        style={{
          paddingTop: "150px",
          paddingLeft: "6%",
          paddingRight: "6%",
          marginBottom: "70px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "32px", fontWeight: 200, color: "#111111", margin: 0, lineHeight: 1.4 }}>
          Strategy + Execution + Scale
        </p>
        <p style={{ fontSize: "32px", fontWeight: 200, color: "#111111", margin: 0, lineHeight: 1.4 }}>
          Disciplined delivery of AI training &amp; cloud solutions
        </p>
      </div>

      {/* Part 2 — 2×4 grid table with hover animation */}
      <style>{`
        .expertise-cell {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid #b8d4e8;
          min-height: 160px;
          background-color: #ffffff;
        }
        .expertise-cell-header {
          position: absolute;
          bottom: 50%;
          transform: translateY(50%);
          left: 0;
          right: 0;
          text-align: center;
          padding: 0 16px;
          transition: transform 0.35s ease, opacity 0.35s ease;
          font-size: 24px;
          font-weight: 700;
          color: #555555;
          line-height: 1.3;
        }
        .expertise-cell:hover .expertise-cell-header {
          transform: translateY(-100%);
          opacity: 0;
        }
        .expertise-cell-summary {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          text-align: center;
          transform: translateY(100%);
          opacity: 0;
          transition: transform 0.35s ease, opacity 0.35s ease;
          font-size: 14px;
          font-weight: 300;
          color: #333333;
          line-height: 1.5;
          background-color: #ffffff;
        }
        .expertise-cell:hover .expertise-cell-summary {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>
      <div
        className="tabbed-expertise-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          border: "1px solid #b8d4e8",
          marginLeft: "6%",
          marginRight: "6%",
          marginBottom: "80px",
        }}
      >
        {expertiseCells.map((cell) => (
          <div key={cell.header} className="expertise-cell">
            <div className="expertise-cell-header">{cell.header}</div>
            <div className="expertise-cell-summary">{cell.summary}</div>
          </div>
        ))}
      </div>

      {/* Part 3 — Jensen Huang quote */}
      <div
        className="tabbed-jensen-row"
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginLeft: "120px",
          marginRight: "120px",
          paddingBottom: "150px",
        }}
      >
        <svg
          width="80"
          height="64"
          viewBox="0 0 80 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0, marginRight: "24px", marginTop: "8px", alignSelf: "flex-start" }}
        >
          {/* Left quote mark */}
          <path
            d="M6 38 C6 28 10 18 20 12 L24 18 C16 22 13 28 13 34 L13 34 C15 33 17 33 19 33 C24 33 28 37 28 43 C28 49 24 53 18 53 C11 53 6 48 6 38 Z"
            stroke="#87CEEB"
            strokeWidth="2"
            fill="none"
          />
          {/* Right quote mark */}
          <path
            d="M42 38 C42 28 46 18 56 12 L60 18 C52 22 49 28 49 34 L49 34 C51 33 53 33 55 33 C60 33 64 37 64 43 C64 49 60 53 54 53 C47 53 42 48 42 38 Z"
            stroke="#87CEEB"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div style={{ flex: 1 }}>
          <p
            className="tabbed-jensen-text"
            style={{
              fontSize: "34px",
              fontWeight: 200,
              color: "#111111",
              lineHeight: 1.5,
              margin: 0,
              paddingBottom: "50px",
            }}
          >
            &ldquo;Every job will be affected, and immediately. It is unquestionable.
            You&apos;re not going to lose your job to Artificial Intelligence (AI), but
            you&apos;re going to lose your job to somebody who uses Artificial
            Intelligence (AI).&rdquo;
          </p>
          <p className="tabbed-jensen-attribution" style={{ fontSize: "18px", fontWeight: 700, color: "#333333", margin: 0 }}>
            Jensen Huang, founder and CEO of Nvidia.
          </p>
          <p className="tabbed-jensen-attribution" style={{ fontSize: "18px", fontWeight: 700, color: "#333333", marginTop: "16px", marginBottom: 0 }}>
            Milken Institute Global Conference, 2025
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   TAB 4 — Grow With Us
═══════════════════════════════════════════════════════════ */
type GrowCardData = {
  iconBg: string;
  icon: ReactNode;
  num: string;
  title: string;
  subtitle: string;
  subtitleHighlight: string;
  bullets: string[];
  link: string;
};

function GrowCard({ card }: { card: GrowCardData }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? 'rgba(255,255,255,0.13)' : 'rgba(255,255,255,0.08)',
        border: hovered ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(255,255,255,0.2)',
        borderRadius: '16px',
        padding: '28px',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.25)' : '0 4px 16px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {/* Top row: icon + number */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: card.iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          {card.icon}
        </div>
        <span style={{
          fontSize: '18px',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.35)',
          letterSpacing: '1px',
        }}>{card.num}</span>
      </div>

      {/* Title */}
      <div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 700,
          color: '#ffffff',
          margin: '0 0 8px 0',
          lineHeight: 1.3,
        }}>{card.title}</h3>
        <p style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.65)',
          margin: 0,
        }}>
          {card.subtitle} →{' '}
          <span style={{ color: '#7dd3fc', fontWeight: 500 }}>{card.subtitleHighlight}</span>
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.15)' }} />

      {/* Bullets */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {card.bullets.map((b: string, j: number) => (
          <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.85)', fontWeight: 300 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="9" fill="rgba(125,211,252,0.2)" />
              <path d="M5 9l3 3 5-5" stroke="#7dd3fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {b}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '14px',
          fontWeight: 600,
          color: '#7dd3fc',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          marginTop: 'auto',
          paddingTop: '8px',
        }}
      >
        Learn more →
      </a>
    </div>
  );
}

function GrowWithUs() {
  return (
    <>
      {/* Watermark */}
      <div style={{
        backgroundColor: '#2c67f2',
        paddingTop: '150px',
        paddingLeft: '6%',
        lineHeight: 1,
        marginBottom: 0,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        <span className="tabbed-watermark" style={{
          fontSize: 'clamp(60px, 8vw, 110px)',
          fontWeight: 800,
          color: '#d0d0d0',
          display: 'block',
          lineHeight: 1,
          letterSpacing: '-2px',
          whiteSpace: 'nowrap',
        }}>
          Grow With Us
        </span>
      </div>

      <style>{`
        @media (max-width: 1024px) { .grow-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .grow-grid { grid-template-columns: 1fr !important; } }
      `}</style>
      <div style={{
        backgroundColor: '#2c67f2',
        width: '100%',
        marginLeft: 0,
        marginRight: 0,
        boxSizing: 'border-box',
        paddingTop: '100px',
        paddingBottom: '150px',
        fontFamily: "'Inter', sans-serif",
        boxShadow: 'none',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}>
            <div style={{ height: '1px', width: '40px', backgroundColor: 'rgba(255,255,255,0.5)' }} />
            <span style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}>GROW WITH US</span>
            <div style={{ height: '1px', width: '40px', backgroundColor: 'rgba(255,255,255,0.5)' }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            margin: 0,
            lineHeight: 1.1,
            background: 'linear-gradient(90deg, #ffffff 40%, #7dd3fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Augmenting Human Potential</h2>
        </div>

        {/* Cards Grid */}
        <div
          className="grow-grid"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            paddingLeft: '24px',
            paddingRight: '24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {[
            {
              num: '01',
              iconBg: 'linear-gradient(135deg, #1e40af, #3b82f6)',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                </svg>
              ),
              title: 'AI Workforce Transformation',
              subtitle: 'From Skills Gap',
              subtitleHighlight: 'AI Fluency',
              bullets: ['12-week certification pipeline', 'Microsoft-aligned training', 'Job-ready outcomes'],
              link: '/learning',
            },
            {
              num: '02',
              iconBg: 'linear-gradient(135deg, #065f46, #10b981)',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
                </svg>
              ),
              title: 'Operational Intelligence',
              subtitle: 'From Complexity',
              subtitleHighlight: 'Clarity',
              bullets: ['Automated workflows', 'AI copilots across enterprise', 'Real-time decision systems'],
              link: '/services/data-and-ai',
            },
            {
              num: '03',
              iconBg: 'linear-gradient(135deg, #6d28d9, #a78bfa)',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              ),
              title: 'Scalable Innovation',
              subtitle: 'From Idea',
              subtitleHighlight: 'Deployment',
              bullets: ['Azure AI + OpenAI stack', 'Agentic workflows', 'Production-ready solutions'],
              link: '/services/app-innovation',
            },
            {
              num: '04',
              iconBg: 'linear-gradient(135deg, #92400e, #f59e0b)',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              ),
              title: 'Measurable Growth',
              subtitle: 'From Effort',
              subtitleHighlight: 'ROI',
              bullets: ['Reduced costs', 'Faster execution cycles', 'New revenue streams'],
              link: '/contact',
            },
          ].map((card, i) => (
            <GrowCard key={i} card={card} />
          ))}
        </div>

      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   TAB 5 — FAQs
═══════════════════════════════════════════════════════════ */
const faqs = [
  {
    q: "Benefits of your technology offerings for my business?",
    a: "Gain efficiency, reduce costs, and enhance customer experiences. Our AI & Cloud solutions empower your business with data-driven insights and innovative technologies.",
  },
  {
    q: "How secure is my data in the cloud?",
    a: "We employ robust encryption, access controls, and regular security audits. We adhere to industry-leading security standards and compliance regulations.",
  },
  {
    q: "How can I get started with AI and Cloud solutions for my business?",
    a: "Schedule a free consultation to discuss your business needs. We'll guide you through the process, from POC to ongoing support, ensuring a smooth transition.",
  },
  {
    q: "What cloud services do you offer?",
    a: "We provide end-to-end cloud solutions across AWS, Azure, & GCP, specializing in AI/ML, app innovation, migration, infrastructure and managed services, data analytics and EDI services, and cybersecurity.",
  },
];

function FAQs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div>
        <SectionLabel>FAQs</SectionLabel>
        <h3
          className="font-bold leading-tight mb-3"
          style={{ fontSize: "clamp(28px, 3vw, 42px)", color: "#000000" }}
        >
          Your questions + answered.
        </h3>
        <p className="text-sm leading-relaxed mb-10" style={{ color: "#000000", fontSize: "20px" }}>
          Navigating Digital Transformation: your questions answered. Discover
          how Chamco Digital, leveraging AI and cloud expertise, empowers
          businesses for sustainable growth in the evolving tech landscape.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#1e3a5f] rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-[#0d1b2e] hover:bg-[#0f2035] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-semibold text-sm pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-[#2563eb] flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5 pt-1 bg-[#0d1b2e] border-t border-[#1e3a5f]">
                  <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:sticky lg:top-36">
        <Image
          src="/images/FAQ-Image-min-1.webp"
          alt="FAQs"
          width={560}
          height={480}
          className="w-full h-auto rounded-2xl object-cover"
          unoptimized
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   TAB 4b — Digital Transformation
═══════════════════════════════════════════════════════════ */
function DigitalTransformation() {
  return (
    <div
      style={{
        backgroundColor: "#ebebeb",
        paddingTop: "120px",
        paddingBottom: "150px",
        paddingLeft: "6%",
        paddingRight: "6%",
      }}
    >
      {/* Watermark */}
      <div style={{
        paddingTop: '50px',
        lineHeight: 1,
        marginBottom: '50px',
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        <span className="tabbed-watermark" style={{
          fontSize: 'clamp(60px, 8vw, 110px)',
          fontWeight: 800,
          color: '#ffffff',
          display: 'block',
          lineHeight: 1,
          letterSpacing: '-2px',
          whiteSpace: 'nowrap',
        }}>
          Digital Transformation
        </span>
      </div>

      {/* Label */}
      <p
        style={{
          color: "#2563eb",
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "1px",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        The AI Transformation
      </p>

      {/* Heading */}
      <h3
        style={{
          fontSize: "48px",
          fontWeight: 200,
          color: "#111111",
          lineHeight: 1.2,
          marginTop: "16px",
          marginBottom: 0,
        }}
      >
        AI training + Digital transformation.
      </h3>

      {/* Body text */}
      <p
        style={{
          fontSize: "20px",
          fontWeight: 300,
          color: "#333333",
          lineHeight: 1.7,
          maxWidth: "680px",
          marginTop: "28px",
          marginBottom: 0,
        }}
      >
        Deep Dive into AI Training &amp; Workforce Enablement: Explore our
        comprehensive AI certification program and Applied AI Workforce
        Enablement tracks, designed to upskill individuals &amp; teams,
        accelerate adoption, and unlock your competitive edge in the digital
        age.
      </p>

      {/* CTA button */}
      <Link
        href="/contact"
        style={{
          display: "inline-block",
          marginTop: "40px",
          padding: "14px 36px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          fontSize: "16px",
          fontWeight: 600,
          cursor: "pointer",
          borderRadius: "4px",
          textDecoration: "none",
        }}
      >
        Schedule a Consultation
      </Link>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN — Sticky nav + all panels rendered simultaneously
═══════════════════════════════════════════════════════════ */
const SECTION_IDS = ["who-we-are", "chamco-methodology", "chamco-expertise", "digital-transformation", "grow-with-us", "faqs"] as const;
const SECTION_LABELS: Record<string, string> = {
  "who-we-are": "Who We Are",
  "chamco-methodology": "Chamco Methodology",
  "chamco-expertise": "Chamco Expertise",
  "digital-transformation": "Digital Transformation",
  "grow-with-us": "Grow With Us",
  "faqs": "FAQs",
};

export default function TabbedContent() {
  const [active, setActive] = useState("who-we-are");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const mainHeaderHeight = 72
    const secondNavHeight = 48
    const gap = 10
    const totalOffset = mainHeaderHeight + secondNavHeight + gap
    const elementTop = el.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: elementTop - totalOffset,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = 140;
      let currentSection = "who-we-are";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        if (window.scrollY + headerOffset >= sectionTop - 80) {
          currentSection = id;
        }
      }
      setActive(currentSection);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section style={{ backgroundColor: "#ebebeb", overflowX: "hidden" }}>
      {/* Sticky secondary tab nav */}
      <div
        className="sticky top-[72px] z-40"
        style={{ backgroundColor: "#add8e6", borderBottom: "1px solid rgba(0,0,0,0.08)" }}
      >
        <div style={{ paddingLeft: "4%" }}>
          <div style={{ display: "flex", justifyContent: "flex-start", overflowX: "auto" }}>
            {SECTION_IDS.map((id) => {
              const isActive = active === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(id);
                    scrollToSection(id);
                  }}
                  className="tabbed-nav-link"
                  style={{
                    color: "#111111",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: isActive ? 600 : 400,
                    paddingTop: "16px",
                    paddingBottom: "8px",
                    borderBottom: isActive ? "3px solid #c84b11" : "3px solid transparent",
                    transition: "border-color 0.2s ease",
                    marginRight: "40px",
                    whiteSpace: "nowrap",
                    display: "inline-block",
                  }}
                >
                  {SECTION_LABELS[id]}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Who We Are — outside the max-width container, no bottom border */}
      <div id="who-we-are">
        <WhoWeAre />
      </div>

      {/* Chamco Methodology — outside the max-width container, full-width layout */}
      <div id="chamco-methodology" className="border-b border-[#d0d0d0]">
        <ChamcoMethodology />
      </div>

      {/* Chamco Expertise — outside the max-width container, full-width white background */}
      <div id="chamco-expertise" className="border-b border-[#d0d0d0]">
        <ChamcoExpertise />
      </div>

      {/* Digital Transformation — outside the max-width container */}
      <div id="digital-transformation" className="border-b border-[#d0d0d0]">
        <DigitalTransformation />
      </div>

      {/* Grow With Us — outside the max-width container, full-width blue */}
      <div id="grow-with-us" style={{ backgroundColor: '#2c67f2', width: '100%', marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0, boxSizing: 'border-box' }}>
        <GrowWithUs />
      </div>

      {/* FAQs — inside the constrained container */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div id="faqs" className="py-16 lg:py-24" style={{ paddingBottom: '100px' }}>
          {/* Watermark */}
          <div style={{
            paddingTop: '80px',
            paddingLeft: '6%',
            lineHeight: 1,
            marginBottom: '40px',
            pointerEvents: 'none',
            userSelect: 'none',
            backgroundColor: 'inherit',
          }}>
            <span style={{
              fontSize: 'clamp(60px, 8vw, 110px)',
              fontWeight: 800,
              color: '#d0d0d0',
              display: 'block',
              lineHeight: 1,
              letterSpacing: '-2px',
              whiteSpace: 'nowrap',
            }}>
              FAQs
            </span>
          </div>
          <FAQs />
        </div>
      </div>
    </section>
  );
}
