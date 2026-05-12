"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["200", "300"] });

/* ─── constants ──────────────────────────────────────────── */
const SECTION_IDS = ["our-story", "our-vantage", "unlock-potentials", "our-bottomline"] as const;
const SECTION_LABELS: Record<string, string> = {
  "our-story": "Our Story",
  "our-vantage": "Our Vantage",
  "unlock-potentials": "Unlock Potentials",
  "our-bottomline": "Our Bottomline",
};

const HERO_SERVICES = [
  "AI & Cloud Training",
  "Data & AI",
  "Business applications",
  "Infrastructure & security",
  "Digital & App Innovation",
  "Innovation",
];

const STORY_SLIDES = [
  {
    tagline: "Work hard, play hard, live bold, and conquer every goal with purpose. Embrace AI and cloud technology as the engine that powers your ambitions and transforms everyday effort into extraordinary, lasting achievement.",
    image: "/images/Stakeholder-Management.png",
  },
  {
    tagline: "Soar in AI and cloud technology — innovate with confidence, learn from the best, and lead your industry forward. Chamco Digital equips professionals with the skills to shape tomorrow's digital economy today.",
    image: "/images/Machine-Learning.png",
  },
  {
    tagline: "Automate today, innovate tomorrow, and streamline every aspect of your operations for lasting impact. AI and cloud solutions free your teams from repetitive tasks, unlocking capacity for creativity, growth, and strategic leadership.",
    image: "/images/Continuous-Improvement.png",
  },
  {
    tagline: "Power progress by learning to innovate, connect systems, and compute at scale with AI and cloud expertise. Chamco Digital helps organizations harness cutting-edge technology to build resilient, efficient, and future-ready digital operations.",
    image: "/images/Data-Governance-Security.png",
  },
  {
    tagline: "Connect with the right partners, collaborate across teams and borders, and grow beyond limits by seizing every AI-driven opportunity. Together, we shape a future where technology and human potential work in perfect harmony.",
    image: "/images/Data-Analysis-Visualization.png",
  },
];

const VANTAGE_SECTION_CARDS = [
  {
    image: "/images/Continuous-Integration-Continuous-Delivery-CI_CD-1024x683.png",
    title: "Innovation",
    desc: "We empower organizations through advanced AI and Cloud Technology training programs & solutions, delivering exceptional results and fostering innovation with a focus on enduring customer success.",
    href: "/blog/innovation",
  },
  {
    image: "/images/Data-Governance-Security.png",
    title: "Digital Ecosystems",
    desc: "Integrates advanced AI, cloud technology, and machine learning, empowering organizations to innovate, streamline operations, and achieve sustainable growth in the digital age.",
    href: "/blog/digital-ecosystems",
  },
  {
    image: "/images/Data-Handling-Processing.jpg",
    title: "Hybrids",
    desc: "Our cloud hybrid solutions combine the flexibility of public clouds with the security of private systems, delivering scalable, efficient, and secure infrastructure.",
    href: "/blog/hybrids",
  },
  {
    image: "/images/Data-Analysis-Visualization.png",
    title: "Predictive Maintenance",
    desc: "We use advanced analytics and AI for predictive maintenance, minimizing downtime, optimizing asset performance, and reducing costs by detecting issues before escalation.",
    href: "/blog/predictive-maintenance",
  },
  {
    image: "/images/Data-Acquisition-Ingestion.jpg",
    title: "Governance",
    desc: "We deliver secure cloud governance solutions, ensuring compliance, optimized resource management, and streamlined operations for scalable business success.",
    href: "/blog/governance",
  },
  {
    image: "/images/Core-GCP-Services.png",
    title: "IoTs",
    desc: "Our company harnesses IoT technology to connect devices, streamline operations, and deliver actionable insights for smarter, data-driven decisions.",
    href: "/blog/iots",
  },
];

const UNLOCK_CARDS = [
  { num: "01", title: "AI & Cloud Technology Training",  body: "Delivering AI and Cloud Technology training programs to build expertise, enhance productivity, and drive innovation across enterprises.",                                    src: "/images/Asset-29@4x-1024x578.png" },
  { num: "02", title: "Deep Domain Expertise",           body: "Specialized knowledge and experience in a specific industry, driving innovation, solving complex challenges, and delivering exceptional results.",                         src: "/images/2-4-1024x579.png"         },
  { num: "03", title: "Data-Driven & Proven Solutions",  body: "Solutions based on comprehensive data analysis, delivering reliable, effective results backed by measurable evidence and proven success.",                                     src: "/images/3-4-1024x578.png"         },
  { num: "04", title: "Cost Reduction",                  body: "Implementing strategies to streamline operations, optimize resources, and reduce expenses, ensuring efficient use of company resources.",                                     src: "/images/4-4-1024x578.png"         },
  { num: "05", title: "Competitive Advantage",           body: "AI-powered businesses gain a competitive edge by innovating, optimizing operations, and leveraging customer insights for strategic growth.",                                  src: "/images/5-4-1024x578.png"         },
  { num: "06", title: "New Revenue Streams",             body: "Cloud technology fuels revenue growth, enabling AI-powered products like personalized recommendations and predictive fraud detection.",                                       src: "/images/6-3-1024x578.png"         },
  { num: "07", title: "24/7 Availability",               body: "Unmatched offering of round-the-clock availability, ensuring continuous service, support, and data access for businesses globally.",                                         src: "/images/7-3-1024x579.png"         },
  { num: "08", title: "Reduced Human Error",             body: "Reduced human error through automation and AI, thereby improving accuracy, efficiency, and reliability, and minimizing mistakes in business operations.",                    src: "/images/8-3-1024x578.png"         },
];

/* ─── Vantage card ───────────────────────────────────────── */
function VantageCard({ image, title, desc, href }: {
  image: string; title: string; desc: string; href: string;
}) {
  return (
    <div className="vc" style={{ width: "38vw", maxWidth: "580px", height: "320px", flexShrink: 0, borderRadius: "8px" }}>
      <Image src={image} alt={title} fill style={{ objectFit: "cover", zIndex: 0 }} unoptimized />
      <div className="vc-gradient" />
      <div className="vc-overlay" />
      <div className="vc-title">{title}</div>
      <div className="vc-hover-content">
        <p style={{ color: "#d1d5db", fontSize: "14px", lineHeight: "1.5", marginBottom: "12px" }}>{desc}</p>
        <Link href={href} target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", fontSize: "14px", fontWeight: 600 }}>Learn more →</Link>
      </div>
    </div>
  );
}

/* ─── Our Vantage — sticky heading + staggered scrolling cards ── */
function VantageSection() {
  return (
    <section
      id="our-vantage"
      style={{
        position: "relative",
        backgroundColor: "#0a1628",
        minHeight: "300vh",
        paddingLeft: "6%",
        paddingRight: "6%",
        paddingTop: "420px",
        paddingBottom: "75px",
        marginBottom: 0,
      }}
    >
      {/* Sticky heading — pins to vertical centre while cards scroll over it */}
      <div
        style={{
          position: "sticky",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          pointerEvents: "none",
          textAlign: "center",
        }}
      >
        <h2
          className={nunito.className}
          style={{
            fontSize: "clamp(60px, 8vw, 100px)",
            fontWeight: 200,
            color: "white",
            lineHeight: 1.05,
            letterSpacing: "-1px",
            margin: 0,
          }}
        >
          Innovating the future<br />
          with AI &amp; cloud<br />
          technology
        </h2>
      </div>

      {/* Cards — normal flow, z-index 2 so they scroll over the heading */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ alignSelf: "flex-start", marginLeft: "4%", marginTop: "60px" }}>
          <VantageCard {...VANTAGE_SECTION_CARDS[0]} />
        </div>
        <div style={{ alignSelf: "flex-end", marginRight: "4%", marginTop: "-80px" }}>
          <VantageCard {...VANTAGE_SECTION_CARDS[1]} />
        </div>
        <div style={{ alignSelf: "flex-start", marginLeft: "30%", marginTop: "40px" }}>
          <VantageCard {...VANTAGE_SECTION_CARDS[2]} />
        </div>
        <div style={{ alignSelf: "flex-start", marginLeft: "4%", marginTop: "60px" }}>
          <VantageCard {...VANTAGE_SECTION_CARDS[3]} />
        </div>
        <div style={{ alignSelf: "flex-end", marginRight: "4%", marginTop: "-60px" }}>
          <VantageCard {...VANTAGE_SECTION_CARDS[4]} />
        </div>
        <div style={{ alignSelf: "flex-start", marginLeft: "25%", marginTop: "80px", marginBottom: "80px" }}>
          <VantageCard {...VANTAGE_SECTION_CARDS[5]} />
        </div>
      </div>
    </section>
  );
}

/* ─── Unlock card ────────────────────────────────────────── */
function UnlockCard({ num, title, body, src }: { num: string; title: string; body: string; src: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#e8e8e8",
        height: "320px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top portion: outline number (default) or image (hover) */}
      <div style={{ height: "55%", position: "relative", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Outline number */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "clamp(64px, 6vw, 100px)",
            fontWeight: 700,
            color: "transparent",
            WebkitTextStroke: "1px #c0c0c0",
            opacity: hovered ? 0 : 1,
            transition: "opacity 0.15s",
            userSelect: "none",
          } as React.CSSProperties}
        >
          {num}
        </span>
        {/* Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.15s",
          }}
        >
          <Image src={src} alt={title} fill style={{ objectFit: "cover" }} unoptimized />
        </div>
      </div>
      {/* Bottom portion: title + body */}
      <div style={{ flex: 1, padding: "14px 16px 16px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
        <p style={{ fontWeight: 700, fontSize: "14px", color: "#111111", lineHeight: 1.3, marginBottom: "6px" }}>{title}</p>
        <p style={{ fontSize: "12px", color: "#777777", lineHeight: 1.55 }}>{body}</p>
      </div>
    </div>
  );
}

/* ─── main component ─────────────────────────────────────── */
export default function DiscoverChamcoContent() {
  const [activeSection, setActiveSection] = useState("our-story");
  const [carouselIdx, setCarouselIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerOffset = 140;

      let currentSection = "our-story";

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        if (scrollY + headerOffset >= sectionTop - 80) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <main>
      <style>{`
        .vc { position: relative; overflow: hidden; cursor: pointer; }
        .vc-gradient { position: absolute; inset: 0; z-index: 1; background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%); }
        .vc-overlay { position: absolute; inset: 0; z-index: 2; background: rgba(0,0,0,0.80); opacity: 0; transition: opacity 0.35s ease; }
        .vc:hover .vc-overlay { opacity: 1; }
        .vc-title { position: absolute; bottom: 20px; left: 20px; z-index: 3; color: white; font-weight: 700; font-size: 18px; line-height: 1.2; transform: translateY(0); opacity: 1; transition: transform 0.3s ease-in, opacity 0.3s ease-in; }
        .vc:hover .vc-title { transform: translateY(-100%); opacity: 0; }
        .vc-hover-content { position: absolute; inset: 0; z-index: 3; display: flex; flex-direction: column; justify-content: center; padding: 24px; opacity: 0; transform: translateY(40px); transition: opacity 0.4s ease-out 0.15s, transform 0.4s ease-out 0.15s; }
        .vc:hover .vc-hover-content { opacity: 1; transform: translateY(0); }
        .dc-hero-cta:hover { background: rgba(255,255,255,0.1) !important; }
        .dc-subnav-btn { background: none; cursor: pointer; outline: none; white-space: nowrap; font-family: inherit; transition: color 0.2s; }
        @media (max-width: 768px) {
          .dc-hero-title {
            white-space: normal !important;
            font-size: clamp(24px, 6.5vw, 36px) !important;
          }
          .dc-story-row {
            flex-direction: column !important;
            padding-right: 6% !important;
            padding-top: 80px !important;
          }
          .dc-story-text {
            width: 100% !important;
            padding: 0 0 40px 0 !important;
          }
          .dc-four-col {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .dc-four-col {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      {/* ══════════════════════════════════════
          SECTION 1 — Hero (FIX 1)
      ══════════════════════════════════════ */}
      <section
        style={{
          height: "100vh",
          minHeight: "640px",
          backgroundImage: "url('/images/Discover-Chamco-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
          paddingBottom: 0,
          marginBottom: 0,
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative", zIndex: 1, paddingTop: "160px", paddingLeft: "6%", paddingRight: "5%", maxWidth: "700px" }}>
          {/* Heading */}
          <h1 className="dc-hero-title" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 700, fontSize: "clamp(28px, 3.8vw, 52px)", color: "#ffffff", lineHeight: 1.15, textAlign: "left", margin: 0, whiteSpace: "nowrap" }}>
            <span style={{ display: "block" }}>Our AI training &amp; solutions.</span>
            <span style={{ display: "block" }}>Transforming the tomorrow.</span>
          </h1>
          {/* Body */}
          <p style={{ color: "rgba(255,255,255,0.88)", fontWeight: 300, fontSize: "16px", lineHeight: 1.7, maxWidth: "520px", marginTop: "24px", marginBottom: 0 }}>
            Chamco Digital integrates AI and cloud innovation, empowering businesses
            through AI and cloud technology training programs &amp; solutions. Our experts
            deliver masterful online instructor-led sessions and transformative solutions,
            optimizing operations and accelerating growth.
          </p>
          {/* Outlined button */}
          <Link
            href="/contact"
            className="dc-hero-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginTop: "28px",
              border: "1.5px solid white",
              color: "white",
              background: "transparent",
              fontWeight: 300,
              fontSize: "15px",
              padding: "12px 28px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            Transform with us
          </Link>
          {/* Pipe-separated service list */}
          <div style={{ marginTop: "40px", display: "flex", flexWrap: "nowrap", alignItems: "center", whiteSpace: "nowrap" }}>
            {HERO_SERVICES.map((s, i) => (
              <span key={s} style={{ display: "inline-flex", alignItems: "center" }}>
                {i > 0 && (
                  <span style={{ color: "rgba(255,255,255,0.4)", padding: "0 4px" }}>|</span>
                )}
                <span style={{ color: "white", fontSize: "clamp(11px, 1.1vw, 13px)", fontWeight: 300, letterSpacing: "0.5px", padding: "0 8px" }}>
                  {s}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — Sticky Secondary Nav (FIX 2)
      ══════════════════════════════════════ */}
      <div
        className="sticky top-[72px] z-40"
        style={{ backgroundColor: "#add8e6", borderBottom: "1px solid rgba(0,0,0,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto" style={{ paddingLeft: "4%" }}>
          <div style={{ display: "flex", overflowX: "auto" }}>
            {SECTION_IDS.map((id) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(id);
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    color: "#111111",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: isActive ? 600 : 400,
                    paddingBottom: "8px",
                    borderBottom: isActive ? "3px solid #c84b11" : "3px solid transparent",
                    transition: "border-color 0.2s ease, font-weight 0.2s ease",
                    marginRight: "40px",
                    whiteSpace: "nowrap",
                    display: "inline-block",
                    paddingTop: "16px",
                  }}
                >
                  {SECTION_LABELS[id]}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          SECTION 3 — Our Story (FIX 3)
      ══════════════════════════════════════ */}
      <section id="our-story" className="dc-story-row" style={{ display: "flex", minHeight: "520px", paddingLeft: "6%", paddingRight: 0, backgroundColor: "#ffffff", paddingTop: "120px", marginBottom: 0 }}>
        {/* Left — 40% white */}
        <div
          className="dc-story-text"
          style={{
            width: "40%",
            flexShrink: 0,
            backgroundColor: "#ffffff",
            padding: "60px 48px 60px 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: "13px", fontWeight: 600, color: "#111111", margin: 0 }}>
            The charge
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 2.5vw, 32px)",
              fontWeight: 700,
              color: "#111111",
              lineHeight: 1.2,
              marginTop: "16px",
              marginBottom: 0,
            }}
          >
            Optimizing operations and innovating the future with AI &amp; cloud technology.
          </h2>
          <p style={{ fontWeight: 300, fontSize: "15px", color: "#444444", lineHeight: 1.7, marginTop: "20px", marginBottom: 0 }}>
            Chamco Digital integrates AI and cloud innovation, empowering businesses to
            excel. Our experts deliver transformative AI and Cloud Technology training
            programs &amp; solutions, optimizing operations and driving growth in the
            evolving digital age.
          </p>
        </div>

        {/* Right — 60% dark blue fade carousel */}
        <div style={{ flex: 1, backgroundColor: "#0a2a6e", position: "relative", overflow: "hidden", minHeight: "520px" }}>
          {STORY_SLIDES.map((slide, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                opacity: carouselIdx === i ? 1 : 0,
                transition: "opacity 0.5s ease",
                pointerEvents: carouselIdx === i ? "auto" : "none",
              }}
            >
              {/* Left of slide: logo + tagline */}
              <div
                style={{
                  width: "45%",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  padding: "48px 32px 48px 48px",
                }}
              >
                <Image
                  src="/images/Chamco-Digital_white-color.png"
                  alt="Chamco Digital"
                  width={160}
                  height={40}
                  style={{ height: "40px", width: "auto", objectFit: "contain" }}
                  unoptimized
                />
                <p
                  style={{
                    marginTop: "20px",
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "16px",
                    fontWeight: 300,
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    maxWidth: "280px",
                  }}
                >
                  {slide.tagline}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "20px",
                    marginTop: "auto",
                    paddingTop: "32px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setCarouselIdx(prev => (prev - 1 + 5) % 5)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ffffff",
                      fontSize: "28px",
                      fontWeight: 900,
                      cursor: "pointer",
                      lineHeight: 1,
                      padding: "4px 8px",
                      opacity: 0.9,
                      transition: "opacity 0.2s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "0.9")}
                    aria-label="Previous slide"
                  >&lt;</button>
                  <button
                    type="button"
                    onClick={() => setCarouselIdx(prev => (prev + 1) % 5)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ffffff",
                      fontSize: "28px",
                      fontWeight: 900,
                      cursor: "pointer",
                      lineHeight: 1,
                      padding: "4px 8px",
                      opacity: 0.9,
                      transition: "opacity 0.2s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "0.9")}
                    aria-label="Next slide"
                  >&gt;</button>
                </div>
              </div>
              {/* Right of slide: image */}
              <div style={{ flex: 1, position: "relative" }}>
                <Image src={slide.image} alt={`Slide ${i + 1}`} fill style={{ objectFit: "cover" }} unoptimized />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — Our Vantage (unchanged)
      ══════════════════════════════════════ */}
      <VantageSection />

      {/* ══════════════════════════════════════
          SECTION 5 — Unlock Potentials (FIX 4)
      ══════════════════════════════════════ */}
      <section id="unlock-potentials" style={{ backgroundColor: "#f0f0f0", paddingTop: "120px", paddingBottom: "230px", paddingLeft: "6%", paddingRight: "6%", marginBottom: 0 }}>
        <div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 200,
              color: "#111111",
              lineHeight: 1.1,
              marginBottom: "60px",
            }}
          >
            AI training +<br />AI solutions +<br />smarter decisions.
          </h2>
          <div className="dc-four-col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {UNLOCK_CARDS.map(card => (
              <UnlockCard key={card.num} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 6 — Our Bottomline (FIX 5)
      ══════════════════════════════════════ */}
      <section id="our-bottomline" style={{ backgroundColor: "#add8e6", overflow: "hidden", paddingLeft: "6%", paddingRight: "6%", paddingTop: "120px", marginBottom: "120px" }}>
        {/* Watermark — in-flow at top, bleeds from section above */}
        <div
          style={{
            fontSize: "clamp(64px, 8vw, 120px)",
            fontWeight: 800,
            color: "#8ec5d6",
            lineHeight: 1,
            paddingTop: "32px",
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          Our Bottomline
        </div>

        {/* Centred thin body text — the only other content */}
        <div style={{ padding: "80px 24px 100px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p
            style={{
              fontSize: "clamp(22px, 3vw, 42px)",
              fontWeight: 200,
              color: "#1a1a1a",
              textAlign: "center",
              maxWidth: "700px",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Delivering secure AI and Cloud Technology training programs &amp; solutions for
            individuals and institutions, ensuring compliance and scalable success.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 7 — Bottom CTA Banner
      ══════════════════════════════════════ */}
      <section
        className="relative py-[120px] overflow-hidden"
        style={{
          backgroundImage: "url('/images/cta1-bg-img-1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingLeft: "6%",
          paddingRight: "6%",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} />
        <div className="relative z-10 max-w-[860px] mx-auto px-6 text-center">
          <p className="text-white/75 italic text-base mb-1">AI Solutions + Smarter Decisions.</p>
          <p className="text-white/75 italic text-base mb-6">Think Beyond. Think AI.</p>
          <h2 className="font-bold text-white leading-tight mb-5" style={{ fontSize: "clamp(26px, 3.2vw, 42px)" }}>
            Ready to Solve What&apos;s Next?
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Schedule your delivery call today and discover why Chamco Digital is the ideal
            Partner for your Digital Transformation
          </p>
          <Link href="/contact" className="inline-flex items-center bg-[#2563eb] hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
