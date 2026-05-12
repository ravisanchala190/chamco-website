"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */

const MOSAIC_CARDS = [
  {
    color: "#3d5afe",
    image: "/images/stop-3541821_1280-1.webp",
    title: "AI-Powered Drug Discovery",
    summary: "Accelerating drug discovery by analyzing large datasets to identify promising candidates, predict efficacy and safety, and optimize clinical trial design.",
    href: "/blog/revolutionizing-healthcare-how-ai-powered-drug-discovery-is-transforming-the-pharmaceutical-industry",
  },
  {
    color: "#7b1fa2",
    image: "/images/ai-generated-8722616_1280-r3qpmgpxrgsjun0jt7b2ya4bm8l917gzag3cdvd9zc.jpg",
    title: "Precision Medicine",
    summary: "Enabling personalized treatments by analyzing patient data, including genomics and lifestyle factors, to tailor therapies and predict disease risks effectively.",
    href: "/blog/the-future-of-personalized-healthcare-with-technology",
  },
  {
    color: "#00695c",
    image: "/images/dna-1811955_1280-r3qpsfyz8iz7pcbvwacnb9svnh4azw7ig1hja8i4eg.jpg",
    title: "AI-Driven Diagnostics & Imaging",
    summary: "Enhancing diagnostic accuracy by analyzing medical images and other datasets, enabling early disease detection and informed treatment decisions.",
    href: "/blog/ai-driven-diagnostics-imaging",
  },
  {
    color: "#1565c0",
    image: "/images/online-consultation-7988709_1280-r3qpybgny90q9lsolbrpeaflb65w3sj4949s9hsjig.png",
    title: "Telehealth & Remote Patient Monitoring",
    summary: "Supporting continuous monitoring and analysis through remote devices, enabling early intervention and improved patient outcomes.",
    href: "/blog/telehealth-remote-patient-monitoring",
  },
  {
    color: "#c62828",
    image: "/images/medical-8562583_1280.webp",
    title: "Clinical Trial Optimization",
    summary: "Optimizing Clinical Trials with Data-Driven Strategies and Technology.",
    href: "/blog/clinical-trial-optimization",
  },
  {
    color: "#f57f17",
    image: "/images/ai-generated-9061893_1280.webp",
    title: "Genomic Medicine & Personalized Therapies",
    summary: "Advancing Genomic Medicine and Personalized Therapies Through Data Innovation.",
    href: "/blog/genomic-medicine-personalized-therapies",
  },
  {
    color: "#283593",
    image: "/images/dentist-4373290_1280.webp",
    title: "Healthcare Administration & Operations",
    summary: "Streamlining Healthcare Administration and Operations for Better Patient Outcomes.",
    href: "/blog/healthcare-administration-operations",
  },
  {
    color: "#2e7d32",
    image: "/images/eye-766166_1280.webp",
    title: "Predictive & Preventive Healthcare",
    summary: "Advancing Predictive and Preventive Healthcare Through Data and Innovation.",
    href: "/blog/predictive-preventive-healthcare",
  },
];

/* ═══════════════════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════════════════ */

const HERO_SLIDES = [
  { title: "Data Protection", body: "Secure patient data, ensure compliance, empower healthcare innovation with robust protection." },
  { title: "Improved Outcomes", body: "Personalized care, enhanced management, improved patient experiences, driven by data insights." },
  { title: "Connected Experiences", body: "Personalized care, enhanced management, improved patient experiences, driven by data insights." },
  { title: "Increased Efficiency", body: "Streamlined workflows, automated processes, and reduced administrative burden, freeing up resources for patient care." },
];

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
            animation: "hcDrain 10s linear forwards",
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
                    animation: "hcBodyFade 0.4s ease-out",
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
      className="hc-mc-card"
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
      {/* Bottom gradient always visible */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />

      {/* Hover overlay */}
      <div
        className="hc-mc-overlay"
        style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)", zIndex: 2 }}
      />

      {/* Title at bottom-left */}
      <div
        className="hc-mc-title"
        style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", zIndex: 3 }}
      >
        <h3 style={{ color: "white", fontWeight: 700, fontSize: "20px", margin: 0, lineHeight: "1.2" }}>
          {card.title}
        </h3>
      </div>

      {/* Summary centred, visible on hover */}
      <div
        className="hc-mc-summary"
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

function HealthcareMetrics() {
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
      stat: "$10T+",
      text: "Global healthcare spending projected to exceed $10 trillion by 2030.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="20" height="20" rx="3" />
          <line x1="14" y1="9" x2="14" y2="19" />
          <line x1="9" y1="14" x2="19" y2="14" />
        </svg>
      ),
    },
    {
      stat: "+40%",
      text: "Increase in diagnostic accuracy achievable with AI-assisted tools.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 6 C6 6 4 9 4 12 C4 15 6 17 8 17 L8 22 L20 22 L20 17 C22 17 24 15 24 12 C24 9 22 6 18 6 C17 4 15 3 14 3 C13 3 11 4 10 6Z" />
          <line x1="11" y1="14" x2="17" y2="14" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      ),
    },
    {
      stat: "25–35%",
      text: "Administrative cost reduction potential through digital automation.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="6" width="8" height="6" rx="1" />
          <rect x="17" y="6" width="8" height="6" rx="1" />
          <rect x="10" y="16" width="8" height="6" rx="1" />
          <line x1="7" y1="12" x2="7" y2="19" />
          <line x1="21" y1="12" x2="21" y2="19" />
          <line x1="7" y1="19" x2="14" y2="19" />
          <line x1="21" y1="19" x2="18" y2="19" />
        </svg>
      ),
    },
    {
      stat: "#1",
      text: "Patient experience and outcomes remain the top priority for providers.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="14" cy="8" r="4" />
          <path d="M6 24 C6 19 9 16 14 16 C19 16 22 19 22 24" />
          <path d="M11 20 L14 23 L17 20" />
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

export default function HealthcareContent() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main style={{ backgroundColor: "#ffffff" }}>
      <style>{`
        @keyframes hcMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes hcDrain {
          from { width: 100%; }
          to   { width: 0%; }
        }
        @keyframes hcBodyFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        /* Mosaic card hover */
        .hc-mc-card .hc-mc-overlay { opacity: 0; transition: opacity 0.3s ease; }
        .hc-mc-card:hover .hc-mc-overlay { opacity: 1; }
        .hc-mc-card .hc-mc-title { opacity: 1; transition: opacity 0.3s ease; }
        .hc-mc-card:hover .hc-mc-title { opacity: 0; }
        .hc-mc-card .hc-mc-summary { opacity: 0; transition: opacity 0.3s ease 0.15s; }
        .hc-mc-card:hover .hc-mc-summary { opacity: 1; }
        /* Industry Context responsive */
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
          backgroundImage: "url('/images/Ind-Healthcare-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left column — 60% */}
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
              Healthcare &amp; Life Sciences
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
              Transforming healthcare<br />with AI &amp; cloud<br />technology.
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
              In partnership with Microsoft and AWS, Chamco Digital provides tailored AI and cloud
              solutions, enabling healthcare and life sciences to drive innovation, enhance operations,
              and improve patient outcomes through cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Right column — 40% */}
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
        <div style={{ display: "inline-flex", whiteSpace: "nowrap", animation: "hcMarquee 35s linear infinite", animationPlayState: isHovered ? "paused" : "running" }}>
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
          SECTION 3 — Unlocking Value (white, two-col)
          + watermark bridge at bottom
      ════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "100px",
          paddingBottom: "0",
          marginBottom: "0",
          overflow: "hidden",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div style={{ display: "flex", gap: "0", alignItems: "flex-start", flexWrap: "wrap" }}>
            {/* Left 45% */}
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
                <span style={{ display: "block" }}>solutions for healthcare</span>
                <span style={{ display: "block" }}>and life sciences</span>
              </h2>
            </div>
            {/* Right 55% */}
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
                solutions, enabling healthcare and life sciences to drive innovation, enhance operations,
                and improve patient outcomes through cutting-edge technology.
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
          Healthcare
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 — Our Methods (light grey)
      ════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#ebebeb", paddingTop: "60px", paddingBottom: "80px", marginTop: "0" }}>
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
          SECTION 5 — Life Science Image + Content
      ════════════════════════════════════════ */}
      <section className="svc-darkrow" style={{ display: "flex", minHeight: "600px" }}>
        {/* Left 50% — content */}
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
            AI-enhanced patient empowerment tools
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
            Empowering healthcare providers to secure data, systems, and operations across eight core
            segments, while delivering a proactive digital future.
          </p>
        </div>

        {/* Right 50% — image */}
        <div
          className="svc-darkrow-image"
          style={{
            width: "50%",
            backgroundImage: "url('/images/Life-Science-scaled.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexShrink: 0,
          }}
        />
      </section>

      {/* ════════════════════════════════════════
          SECTION 6 — Service Offerings (white, mosaic cards)
          + watermark bridge at bottom
      ════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "80px",
          overflow: "hidden",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          {/* Heading + body */}
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
            Empowering healthcare providers to secure data, systems, and operations across eight core
            segments, while delivering a proactive digital future.
          </p>

          {/* Row 1 — 2 large cards */}
          <div className="svc-mosaic-row" style={{ display: "flex", gap: "4px" }}>
            {MOSAIC_CARDS.slice(0, 2).map((card) => (
              <MosaicCard key={card.title} card={card} height={380} />
            ))}
          </div>

          {/* Row 2 — 3 medium cards */}
          <div className="svc-mosaic-row" style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
            {MOSAIC_CARDS.slice(2, 5).map((card) => (
              <MosaicCard key={card.title} card={card} height={300} />
            ))}
          </div>

          {/* Row 3 — 3 medium cards */}
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
        paddingTop: "100px",
        paddingBottom: "80px",
        overflow: "hidden",
      }}>
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
        }}>HEALTHCARE</span>

        <div
          className="industry-context-container"
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1240px",
            margin: "0 auto",
            paddingLeft: "80px",
            paddingRight: "80px",
          }}
        >
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

          <h2 style={{
            fontSize: "clamp(36px, 4.5vw, 54px)",
            fontWeight: 700,
            color: "#111111",
            lineHeight: 1.15,
            letterSpacing: "-0.5px",
            maxWidth: "700px",
            margin: "0 0 28px 0",
          }}>
            Advancing care in a rapidly evolving healthcare ecosystem
          </h2>

          <p style={{
            fontSize: "18px",
            lineHeight: 1.6,
            color: "#444444",
            maxWidth: "680px",
            margin: "0",
            fontWeight: 300,
          }}>
            Healthcare organizations are under increasing pressure to deliver better patient outcomes
            while managing rising costs, workforce shortages, and complex regulatory demands. Digital
            and AI-driven innovation are essential to enabling more efficient operations, personalized
            care, and resilient healthcare systems.
          </p>

          <HealthcareMetrics />
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 7 — Book a Call (light grey)
      ════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#ffffff", paddingTop: "60px", paddingBottom: "80px" }}>
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
            Partner with us to design and implement tailored healthcare AI and cloud strategies. Our
            expert guidance, advanced technology, and innovative approaches ensure your organization
            stays ahead in an increasingly complex digital healthcare landscape.
          </p>
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
