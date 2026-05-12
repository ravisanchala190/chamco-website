"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */

const HERO_SLIDES = [
  { title: "Predictive Maintenance", body: "Utilizing AI-driven analytics and cloud-hosted data to monitor equipment health, predict failures, and reduce downtime, enhancing operational reliability." },
  { title: "Operational Efficiency", body: "Leveraging cloud scalability and AI automation to streamline exploration, drilling, and production processes, minimizing costs and boosting productivity." },
  { title: "Data-Driven Exploration", body: "Applying AI algorithms and cloud storage to analyze seismic data, optimize resource mapping, and improve decision-making for drilling and extraction." },
  { title: "Safety & Risk Management", body: "Integrating real-time AI insights with cloud-based monitoring to enhance worker safety, detect hazards, and ensure compliance with industry regulations." },
];

const MOSAIC_CARDS = [
  {
    color: "#3d5afe",
    image: "/images/oil-rig-514035_1280-r3rqcgu9v2ikr2qc8n9hsoewvglqw3qedr7v3v7yrs.jpg",
    title: "Predictive Maintenance",
    summary: "AI and cloud analytics monitor equipment, predict failures, and reduce downtime, ensuring operational reliability in oil and gas facilities.",
    href: "/blog/predictive-maintenance-in-the-chemical-oil-and-gas-industry",
  },
  {
    color: "#7b1fa2",
    image: "/images/technology-7111799_1280.webp",
    title: "Exploration Optimization",
    summary: "Enhancing discovery and reducing costs through advanced analytics and AI.",
    href: "/blog/exploration-optimization-in-the-oil-gas-industry",
  },
  {
    color: "#00695c",
    image: "/images/data-center-2476790_1280.webp",
    title: "Operational Automation",
    summary: "Automating workflows to increase efficiency, reduce errors, and save time.",
    href: "/blog/operational-automation",
  },
  {
    color: "#1565c0",
    image: "/images/caution-454360_1280.webp",
    title: "Safety Enhancement",
    summary: "Advancing Safety Enhancement Through Smart Technology and Proactive Measures.",
    href: "/blog/safety-enhancement",
  },
  {
    color: "#c62828",
    image: "/images/pollution-4846741_1280.webp",
    title: "Environmental Monitoring",
    summary: "Enhancing Supply Chain Efficiency in Chemical, Oil, and Gas.",
    href: "/blog/environmental-monitoring",
  },
  {
    color: "#f57f17",
    image: "/images/train-7036270_1280.webp",
    title: "Supply Chain Efficiency",
    summary: "Optimizing logistics and inventory to reduce costs and improve reliability.",
    href: "/blog/supply-chain-efficiency",
  },
  {
    color: "#283593",
    image: "/images/artificial-intelligence-3382521_1280.webp",
    title: "Data-Driven Decisions",
    summary: "Harnessing analytics to optimize operations, safety, and resource management.",
    href: "/blog/data-driven-decisions",
  },
  {
    color: "#2e7d32",
    image: "/images/technology-3402365_1280.webp",
    title: "Scalable Infrastructure",
    summary: "Designing flexible, future-ready systems for evolving business demands and expansion.",
    href: "/blog/scalable-infrastructure",
  },
];

const SOLUTION_BLOCKS = [
  { title: "Predictive Asset Management", body: "Deploy AI-powered monitoring systems that predict equipment failures before they occur, minimizing downtime and extending asset lifespans." },
  { title: "Digital Twin Technology", body: "Create virtual replicas of physical assets to simulate, analyze, and optimize operations, reducing risk and improving decision-making." },
  { title: "Seismic Data Analytics", body: "Leverage advanced AI algorithms to analyze seismic data faster and more accurately, improving exploration success rates and reducing drilling costs." },
  { title: "Emissions Monitoring & Compliance", body: "Track and manage emissions in real-time with AI-powered environmental monitoring solutions that ensure regulatory compliance." },
  { title: "Operational Command Centers", body: "Build integrated cloud-based command centers that provide real-time visibility across your entire operation for faster, smarter decisions." },
];

/* ═══════════════════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════════════════ */

function HeroSlider() {
  const [active, setActive] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const activateSlide = (index: number) => {
    setActive(index);
    setProgressKey((prev) => prev + 1);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % HERO_SLIDES.length);
      setProgressKey((prev) => prev + 1);
    }, 10000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_SLIDES.length);
      setProgressKey((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ height: "3px", backgroundColor: "rgba(255,255,255,0.12)", flexShrink: 0 }}>
        <div
          key={active}
          style={{
            height: "100%",
            backgroundColor: "#1e90ff",
            animation: "cogDrain 10s linear forwards",
          }}
        />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {HERO_SLIDES.map((slide, i) => (
          <div key={i}>
            {i > 0 && (
              <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.15)" }} />
            )}
            <div style={{ padding: "24px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "white", fontWeight: 700, fontSize: "18px", lineHeight: "1.3", paddingRight: "16px" }}>
                  {slide.title}
                </span>
                {active === i ? (
                  <span style={{ color: "white", fontSize: "22px", fontWeight: 300, flexShrink: 0, lineHeight: 1 }}>−</span>
                ) : (
                  <button onClick={() => activateSlide(i)} style={{ color: "white", fontSize: "22px", fontWeight: 300, flexShrink: 0, lineHeight: 1, background: "none", border: "none", cursor: "pointer", padding: 0 }}>+</button>
                )}
              </div>
              {active === i && (
                <p
                  key={`body-${progressKey}`}
                  style={{
                    color: "#c0c8d8",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    marginTop: "12px",
                    marginBottom: 0,
                    animation: "cogBodyFade 0.4s ease-out",
                  }}
                >
                  {slide.body}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MosaicCard({ card, height }: { card: typeof MOSAIC_CARDS[0]; height: number }) {
  return (
    <Link
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className="cog-mc-card"
      style={{
        position: "relative",
        overflow: "hidden",
        height: `${height}px`,
        flex: 1,
        backgroundColor: card.color,
        backgroundImage: `url('${card.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        textDecoration: "none",
        display: "block",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
      <div
        className="cog-mc-overlay"
        style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)", zIndex: 2 }}
      />
      <div
        className="cog-mc-title"
        style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", zIndex: 3 }}
      >
        <h3 style={{ color: "white", fontWeight: 700, fontSize: "20px", margin: 0, lineHeight: "1.2" }}>
          {card.title}
        </h3>
      </div>
      <div
        className="cog-mc-summary"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "28px",
          zIndex: 4,
        }}
      >
        <p style={{ color: "white", fontSize: "15px", lineHeight: "1.6", textAlign: "center", maxWidth: "80%", margin: 0 }}>
          {card.summary}
        </p>
      </div>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */

function IndustryMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      stat: "$4T+",
      text: "Global energy investment needed by 2030 to meet rising demand.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="14" cy="14" r="11" />
          <path d="M14 8 C14 8 10 12 10 15 C10 17.2 11.8 19 14 19 C16.2 19 18 17.2 18 15 C18 12 14 8 14 8Z" />
          <path d="M8 14 Q14 11 20 14" />
        </svg>
      ),
    },
    {
      stat: "-30%",
      text: "Upstream operators targeting emissions reduction by 2030.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 20 Q10 12 14 16 Q18 20 22 8" />
          <path d="M8 6 Q12 4 14 8 Q16 12 20 6" strokeOpacity="0.5" />
          <circle cx="14" cy="22" r="2" fill="#2563eb" stroke="none" />
        </svg>
      ),
    },
    {
      stat: "20–30%",
      text: "Operational efficiency improvement achievable through digitalization.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4,20 10,13 16,16 24,7" />
          <polyline points="18,7 24,7 24,13" />
        </svg>
      ),
    },
    {
      stat: "#1",
      text: "Workforce safety and asset reliability remain top industry priorities.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 4 L14 4 C14 4 8 7 8 13 L8 18 L14 21 L20 18 L20 13 C20 7 14 4 14 4Z" />
          <polyline points="11,14 13,16 17,12" />
        </svg>
      ),
    },
  ];

  return (
    <div
      ref={ref}
      className="industry-metrics-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "48px",
        marginTop: "72px",
      }}
    >
      {metrics.map((m, i) => (
        <div
          key={i}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(18px)",
            transition: `opacity 0.6s ease ${i * 70}ms, transform 0.6s ease ${i * 70}ms`,
          }}
        >
          <div style={{
            width: "52px",
            height: "52px",
            backgroundColor: "#f4f6f9",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}>
            {m.icon}
          </div>
          <div style={{
            fontSize: "clamp(28px, 3vw, 40px)",
            fontWeight: 700,
            color: "#111111",
            lineHeight: 1,
            marginBottom: "10px",
            letterSpacing: "-0.5px",
          }}>
            {m.stat}
          </div>
          <p style={{
            fontSize: "15px",
            color: "#555555",
            lineHeight: 1.55,
            margin: "0 0 14px 0",
            fontWeight: 300,
          }}>
            {m.text}
          </p>
          <div style={{
            width: "30px",
            height: "2px",
            backgroundColor: "#2563eb",
          }} />
        </div>
      ))}
    </div>
  );
}

export default function ChemicalOilGasContent() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main style={{ backgroundColor: "#ffffff" }}>
      <style>{`
        @keyframes cogMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes cogDrain {
          from { width: 100%; }
          to   { width: 0%; }
        }
        @keyframes cogBodyFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .cog-mc-card .cog-mc-overlay { opacity: 0; transition: opacity 0.3s ease; }
        .cog-mc-card:hover .cog-mc-overlay { opacity: 1; }
        .cog-mc-card .cog-mc-title { opacity: 1; transition: opacity 0.3s ease; }
        .cog-mc-card:hover .cog-mc-title { opacity: 0; }
        .cog-mc-card .cog-mc-summary { opacity: 0; transition: opacity 0.3s ease 0.15s; }
        .cog-mc-card:hover .cog-mc-summary { opacity: 1; }
        @media (max-width: 1024px) {
          .industry-metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .industry-context-container { padding-left: 48px !important; padding-right: 48px !important; }
        }
        @media (max-width: 640px) {
          .industry-metrics-grid { grid-template-columns: 1fr !important; }
          .industry-context-container { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>

      {/* ════════════════════════════════════════
          SECTION 1 — Hero
      ════════════════════════════════════════ */}
      <section
        className="svc-hero-row"
        style={{
          display: "flex",
          height: "100vh",
          minHeight: "640px",
          backgroundImage: "url('/images/Ind-Chemical-oil-gas-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="svc-hero-text" style={{ width: "60%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)" }} />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              paddingLeft: "6%",
              paddingRight: "5%",
              paddingBottom: "12%",
            }}
          >
            <p
              style={{
                color: "#2563eb",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                margin: "0 0 20px 0",
              }}
            >
              The Industry
            </p>
            <h1
              style={{
                color: "white",
                fontWeight: 200,
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Pioneering energy and<br />oil &amp; gas innovation<br />with AI and cloud expertise
            </h1>
            <p
              style={{
                color: "#c0c8d8",
                fontSize: "16px",
                fontWeight: 300,
                maxWidth: "480px",
                marginTop: "24px",
                lineHeight: 1.7,
                marginBottom: 0,
              }}
            >
              Chamco Digital provisions tailored AI and cloud technology services, enabling the oil
              and gas industry to drive innovation, enhance operational efficiency, and optimize
              resource management through cutting-edge solutions.
            </p>
          </div>
        </div>

        <div className="svc-hero-slider" style={{ width: "40%", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.75)" }} />
          <div style={{ position: "relative", zIndex: 1, height: "100%" }}>
            <HeroSlider />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — Marquee
      ════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: isHovered ? "#ffffff" : "#008000",
          transition: "background-color 0.3s ease",
          overflow: "hidden",
          paddingTop: "28px",
          paddingBottom: "28px",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ display: "inline-flex", whiteSpace: "nowrap", animation: "cogMarquee 35s linear infinite", animationPlayState: isHovered ? "paused" : "running" }}>
          {[0, 1].map((n) => (
            <span key={n} style={{ paddingRight: "60px" }}>
              <span style={{ color: isHovered ? "#1a3a8f" : "#ffffff", fontWeight: 700, fontSize: "15px", letterSpacing: "1px" }}>
                Innovate. Transform. Thrive.
              </span>
              <span style={{ color: isHovered ? "#111111" : "#ffffff", fontWeight: 400, fontSize: "15px", letterSpacing: "1px" }}>
                {" "}— Connect with us and explore our comprehensive suite of AI and cloud services
              </span>
            </span>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 — Unlocking Value
          + watermark bridge at bottom
      ════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "150px",
          paddingBottom: "0",
          marginBottom: "0",
          overflow: "hidden",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div style={{ display: "flex", gap: "0", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: "0 0 45%", minWidth: "260px", paddingRight: "40px" }}>
              <h2
                style={{
                  fontFamily: "inherit",
                  fontWeight: 200,
                  fontSize: "clamp(24px, 3.2vw, 52px)",
                  color: "#111111",
                  lineHeight: 1.1,
                  textAlign: "left",
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ display: "block" }}>AI &amp; cloud technology</span>
                <span style={{ display: "block" }}>solutions for Chemical,</span>
                <span style={{ display: "block" }}>Oil &amp; Gas</span>
              </h2>
            </div>
            <div style={{ flex: "0 0 55%", minWidth: "260px", paddingLeft: "60px", boxSizing: "border-box" }}>
              <p
                style={{
                  color: "#444444",
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: "1.7",
                  margin: "0 0 20px 0",
                }}
              >
                In partnership with Microsoft and AWS, Chamco Digital provides tailored AI and cloud
                solutions, enabling the chemical, oil and gas industry to drive innovation, enhance
                operations, and optimize resource management through cutting-edge technology.
              </p>
              <Link
                href="/discover-chamco"
                style={{ color: "#2563eb", fontSize: "16px", fontWeight: 400, textDecoration: "none" }}
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>

        {/* Watermark bridge */}
        <div
          className="svc-watermark"
          style={{
            fontSize: "clamp(80px, 10vw, 130px)",
            fontWeight: 800,
            color: "#ebebeb",
            lineHeight: 1,
            paddingLeft: "6%",
            marginTop: "48px",
            marginBottom: "-20px",
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          Chemical Oil &amp; Gas
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 — Our Methods (light grey)
      ════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#ebebeb", paddingTop: "150px", paddingBottom: "80px", marginTop: "0" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <p
            style={{
              color: "#2563eb",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Our Methods
          </p>
          <h2
            style={{
              color: "#111111",
              fontWeight: 200,
              fontSize: "clamp(40px, 5.5vw, 64px)",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Power the<br />future, today.
          </h2>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 5 — Industry Image + Content
      ════════════════════════════════════════ */}
      <section className="svc-darkrow" style={{ display: "flex", minHeight: "600px", paddingTop: "150px" }}>
        <div
          className="svc-darkrow-image"
          style={{
            width: "50%",
            backgroundImage: "url('/images/Consultants-Meeting-v69-1024x683.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexShrink: 0,
          }}
        />
        <div
          className="svc-darkrow-content"
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            padding: "60px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              color: "#111111",
              fontWeight: 200,
              fontSize: "clamp(24px, 2.5vw, 36px)",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Your AI + Your way
          </h2>
          <h3
            style={{
              color: "#111111",
              fontWeight: 600,
              fontSize: "20px",
              marginTop: "20px",
              marginBottom: 0,
            }}
          >
            What we do
          </h3>
          <h4
            style={{
              color: "#111111",
              fontWeight: 600,
              fontSize: "18px",
              marginTop: "20px",
              marginBottom: 0,
            }}
          >
            Optimizing energy&apos;s future, now
          </h4>
          <p
            style={{
              color: "#333333",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.7,
              marginTop: "16px",
              marginBottom: 0,
            }}
          >
            AI and cloud technology revolutionize oil and gas by optimizing exploration, enhancing
            predictive maintenance, streamlining operations, and driving sustainable, data-driven growth.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 6 — Service Offerings
          + watermark bridge at bottom
      ════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "150px",
          overflow: "hidden",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <h2
            style={{
              color: "#2563eb",
              fontWeight: 400,
              fontSize: "clamp(24px, 3vw, 38px)",
              marginBottom: "16px",
            }}
          >
            Service offerings
          </h2>
          <p
            style={{
              color: "#444",
              fontSize: "16px",
              lineHeight: "1.6",
              maxWidth: "700px",
              marginBottom: "48px",
            }}
          >
            AI and cloud technology revolutionize oil and gas by optimizing exploration, enhancing
            predictive maintenance, streamlining operations, and driving sustainable, data-driven growth.
          </p>

          <div className="svc-mosaic-row" style={{ display: "flex", gap: "4px" }}>
            {MOSAIC_CARDS.slice(0, 2).map((card) => (
              <MosaicCard key={card.title} card={card} height={380} />
            ))}
          </div>
          <div className="svc-mosaic-row" style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
            {MOSAIC_CARDS.slice(2, 5).map((card) => (
              <MosaicCard key={card.title} card={card} height={300} />
            ))}
          </div>
          <div className="svc-mosaic-row" style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
            {MOSAIC_CARDS.slice(5, 8).map((card) => (
              <MosaicCard key={card.title} card={card} height={300} />
            ))}
          </div>
        </div>

      </section>

      {/* ════════════════════════════════════════
          INDUSTRY CONTEXT SECTION
      ════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        background: "#ffffff",
        marginTop: "150px",
        marginBottom: "150px",
        paddingTop: "0",
        paddingBottom: "80px",
        overflow: "hidden",
      }}>
        {/* Background watermark */}
        <span aria-hidden="true" style={{
          position: "absolute",
          top: "10px",
          left: "4%",
          fontSize: "clamp(100px, 12vw, 160px)",
          fontWeight: 900,
          color: "#000000",
          opacity: 0.04,
          lineHeight: 1,
          letterSpacing: "-4px",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
          whiteSpace: "nowrap",
        }}>OIL &amp; GAS</span>

        {/* Content container */}
        <div
          className="industry-context-container"
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: "90px",
            maxWidth: "1240px",
            margin: "0 auto",
            paddingLeft: "80px",
            paddingRight: "80px",
          }}
        >
          {/* Eyebrow label */}
          <div style={{ marginBottom: "32px" }}>
            <span style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#2563eb",
              display: "block",
              marginBottom: "10px",
            }}>THE INDUSTRY CONTEXT</span>
            <div style={{
              width: "40px",
              height: "2px",
              backgroundColor: "#2563eb",
            }} />
          </div>

          {/* Main headline */}
          <h2 style={{
            fontSize: "clamp(36px, 4.5vw, 54px)",
            fontWeight: 700,
            color: "#111111",
            lineHeight: 1.15,
            letterSpacing: "-0.5px",
            maxWidth: "700px",
            margin: "0 0 28px 0",
          }}>
            Powering progress in a complex energy landscape
          </h2>

          {/* Body text */}
          <p style={{
            fontSize: "18px",
            lineHeight: 1.6,
            color: "#444444",
            maxWidth: "680px",
            margin: "0",
            fontWeight: 300,
          }}>
            The oil &amp; gas industry is navigating unparalleled volatility—from market shifts and
            geopolitical pressures to accelerating decarbonization and rising customer expectations.
            Digital innovation is no longer optional; it&apos;s the key to building a safer, smarter,
            and more sustainable energy future.
          </p>

          {/* Metrics row */}
          <IndustryMetrics />
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 7 — Book a Call (light grey)
      ════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#ebebeb", paddingTop: "150px", paddingBottom: "80px" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <p
            style={{
              color: "#2563eb",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Expertise
          </p>
          <h2
            style={{
              color: "#111111",
              fontWeight: 200,
              fontSize: "clamp(32px, 4.5vw, 56px)",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Driving digital AI +<br />transformation.
          </h2>
          <p
            style={{
              color: "#444444",
              fontSize: "16px",
              lineHeight: "1.7",
              maxWidth: "600px",
              marginTop: "24px",
              fontWeight: 300,
            }}
          >
            Partner with us to design and implement tailored AI and cloud strategies for the chemical,
            oil and gas industry. Our expert guidance, advanced technology, and innovative approaches
            ensure your organization optimizes operations and drives sustainable growth.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 8 — Solution (two-col dark)
      ════════════════════════════════════════ */}
      <section style={{ display: "flex", minHeight: "700px", paddingTop: "150px" }}>
        <div
          style={{
            width: "45%",
            position: "relative",
            backgroundImage: "url('/images/Oil-Gas-1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexShrink: 0,
          }}
        >
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.3)" }} />
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: "#1a1a1a",
            padding: "60px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: "clamp(22px, 2.5vw, 36px)",
              lineHeight: 1.2,
              marginBottom: "40px",
            }}
          >
            Your Oil &amp; Gas Solution Starts with Us
          </h2>
          <div>
            {SOLUTION_BLOCKS.map((block, i) => (
              <div key={i}>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "18px", marginBottom: "8px" }}>
                  {block.title}
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.6", marginBottom: "28px" }}>
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 9 — Bottom CTA
      ════════════════════════════════════════ */}
      <section
        className="svc-cta"
        style={{
          position: "relative",
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: "url('/images/cta1-bg-img-1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          paddingTop: "150px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 100%)" }} />
        <div style={{ position: "relative", zIndex: 10, padding: "60px 24px", maxWidth: "700px" }}>
          <p style={{ color: "white", fontStyle: "italic", fontSize: "15px", margin: 0 }}>
            Think Beyond. Think AI.
          </p>
          <h2
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 52px)",
              lineHeight: 1.1,
              marginTop: "16px",
            }}
          >
            Ready to Solve What&apos;s Next?
          </h2>
          <p
            style={{
              color: "#c0c8d8",
              fontSize: "16px",
              lineHeight: "1.75",
              maxWidth: "620px",
              margin: "20px auto 0",
            }}
          >
            Schedule your delivery call today and discover why Chamco Digital is the ideal
            Partner for your Digital Transformation
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#2563eb",
              color: "white",
              fontWeight: 600,
              fontSize: "18px",
              padding: "18px 48px",
              borderRadius: "6px",
              textDecoration: "none",
              marginTop: "32px",
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
