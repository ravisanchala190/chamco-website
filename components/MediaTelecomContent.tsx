"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */

const MOSAIC_CARDS = [
  {
    color: "#3d5afe",
    image: "",
    title: "Content Personalization",
    summary: "AI recommendation engines that deliver the right content to the right audience at the right moment.",
    href: "/blog/content-personalization",
  },
  {
    color: "#7b1fa2",
    image: "",
    title: "Network Optimization",
    summary: "ML-powered network management that predicts congestion, optimizes routing, and ensures reliability.",
    href: "/blog/network-optimization",
  },
  {
    color: "#00695c",
    image: "",
    title: "Automated Content Creation",
    summary: "Generative AI tools that accelerate content production, automate editing, and scale creative workflows.",
    href: "/blog/automated-content-creation",
  },
  {
    color: "#1565c0",
    image: "",
    title: "Real-Time Analytics",
    summary: "Live audience analytics and operational dashboards that enable instant data-driven decisions.",
    href: "/blog/real-time-analytics",
  },
  {
    color: "#c62828",
    image: "",
    title: "Operational Efficiency",
    summary: "Cloud automation tools that streamline broadcast operations, reduce costs, and improve reliability.",
    href: "/blog/operational-efficiency",
  },
  {
    color: "#f57f17",
    image: "",
    title: "Cybersecurity Protection",
    summary: "Advanced security frameworks protecting broadcast infrastructure, content, and customer data.",
    href: "/blog/cybersecurity-protection",
  },
  {
    color: "#283593",
    image: "",
    title: "Scalable Infrastructure",
    summary: "Cloud platforms that scale on demand to support live events, streaming peaks, and global audiences.",
    href: "/blog/scalable-infrastructure",
  },
  {
    color: "#2e7d32",
    image: "",
    title: "Predictive Insights",
    summary: "AI analytics that forecast audience behaviour, content trends, and market opportunities.",
    href: "/blog/predictive-insights",
  },
];

/* ═══════════════════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════════════════ */

const HERO_SLIDES = [
  { title: "Content Personalization", body: "AI-powered recommendation engines delivering personalized content experiences that drive engagement and retention." },
  { title: "Network Optimization", body: "Machine learning tools that optimize network performance, predict congestion, and ensure seamless connectivity." },
  { title: "Automated Content Creation", body: "Generative AI tools that accelerate content production, automate editing workflows, and scale creative output." },
  { title: "Customer Experience", body: "AI-driven customer service and analytics platforms that reduce churn and improve satisfaction across channels." },
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
        <div key={progressKey} style={{ height: "100%", backgroundColor: "#1e90ff", animation: "mtDrain 10s linear forwards" }} />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {HERO_SLIDES.map((slide, i) => (
          <div key={i}>
            {i > 0 && <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.15)" }} />}
            <div style={{ padding: "24px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "white", fontWeight: 700, fontSize: "18px", lineHeight: "1.3", paddingRight: "16px" }}>{slide.title}</span>
                {active === i ? (
                  <span style={{ color: "white", fontSize: "22px", fontWeight: 300, flexShrink: 0, lineHeight: 1 }}>−</span>
                ) : (
                  <button onClick={() => activateSlide(i)} style={{ color: "white", fontSize: "22px", fontWeight: 300, flexShrink: 0, lineHeight: 1, background: "none", border: "none", cursor: "pointer", padding: 0 }}>+</button>
                )}
              </div>
              {active === i && (
                <p key={`body-${progressKey}`} style={{ color: "#c0c8d8", fontSize: "14px", lineHeight: "1.6", marginTop: "12px", marginBottom: 0, animation: "mtBodyFade 0.4s ease-out" }}>
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
    <Link href={card.href} target="_blank" rel="noopener noreferrer" className="mt-mc-card" style={{ position: "relative", overflow: "hidden", height: `${height}px`, flex: 1, backgroundColor: card.color, backgroundImage: card.image ? `url('${card.image}')` : undefined, backgroundSize: "cover", backgroundPosition: "center", cursor: "pointer", textDecoration: "none", display: "block" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
      <div className="mt-mc-overlay" style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)", zIndex: 2 }} />
      <div className="mt-mc-title" style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", zIndex: 3 }}>
        <h3 style={{ color: "white", fontWeight: 700, fontSize: "20px", margin: 0, lineHeight: "1.2" }}>{card.title}</h3>
      </div>
      <div className="mt-mc-summary" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "28px", zIndex: 4 }}>
        <p style={{ color: "white", fontSize: "15px", lineHeight: "1.6", textAlign: "center", maxWidth: "80%", margin: 0 }}>{card.summary}</p>
      </div>
    </Link>
  );
}

function MediaTelecomMetrics() {
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
      stat: "$2.5T",
      text: "Global media and entertainment market projected to reach $2.5 trillion by 2028.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="22" height="16" rx="2" />
          <line x1="9" y1="25" x2="19" y2="25" />
          <line x1="14" y1="21" x2="14" y2="25" />
          <polygon points="11,9 11,17 19,13" fill="#2563eb" stroke="none" />
        </svg>
      ),
    },
    {
      stat: "5G",
      text: "5G network rollout is accelerating demand for AI-powered network management and optimization tools.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20 C4 20 8 14 14 14 C20 14 24 20 24 20" />
          <path d="M7 17 C7 17 10 13 14 13 C18 13 21 17 21 17" />
          <path d="M10 14 C10 14 11.5 12 14 12 C16.5 12 18 14 18 14" />
          <circle cx="14" cy="21" r="2" fill="#2563eb" stroke="none" />
        </svg>
      ),
    },
    {
      stat: "35%",
      text: "Content engagement lift achievable through AI-driven personalization and recommendation engines.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4,20 10,13 15,16 24,7" />
          <polyline points="18,7 24,7 24,13" />
        </svg>
      ),
    },
    {
      stat: "#1",
      text: "Customer experience and content relevance are the top competitive priorities in media and telecoms.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="14" cy="9" r="4" />
          <path d="M6 24 C6 19 9 16 14 16 C19 16 22 19 22 24" />
          <path d="M19 7 L21 9 L19 11" />
          <path d="M21 9 L17 9" />
        </svg>
      ),
    },
  ];

  return (
    <div ref={ref} className="industry-metrics-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "48px", marginTop: "72px" }}>
      {metrics.map((m, i) => (
        <div key={i} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(18px)", transition: `opacity 0.6s ease ${i * 70}ms, transform 0.6s ease ${i * 70}ms` }}>
          <div style={{ width: "52px", height: "52px", backgroundColor: "#f4f6f9", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>{m.icon}</div>
          <div style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, color: "#111111", lineHeight: 1, marginBottom: "10px", letterSpacing: "-0.5px" }}>{m.stat}</div>
          <p style={{ fontSize: "15px", color: "#555555", lineHeight: 1.55, margin: "0 0 14px 0", fontWeight: 300 }}>{m.text}</p>
          <div style={{ width: "30px", height: "2px", backgroundColor: "#2563eb" }} />
        </div>
      ))}
    </div>
  );
}

export default function MediaTelecomContent() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main style={{ backgroundColor: "#ffffff" }}>
      <style>{`
        @keyframes mtMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes mtDrain {
          from { width: 100%; }
          to   { width: 0%; }
        }
        @keyframes mtBodyFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .mt-mc-card .mt-mc-overlay { opacity: 0; transition: opacity 0.3s ease; }
        .mt-mc-card:hover .mt-mc-overlay { opacity: 1; }
        .mt-mc-card .mt-mc-title { opacity: 1; transition: opacity 0.3s ease; }
        .mt-mc-card:hover .mt-mc-title { opacity: 0; }
        .mt-mc-card .mt-mc-summary { opacity: 0; transition: opacity 0.3s ease 0.15s; }
        .mt-mc-card:hover .mt-mc-summary { opacity: 1; }
        @media (max-width: 1024px) {
          .industry-metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .industry-context-container { padding-left: 48px !important; padding-right: 48px !important; }
        }
        @media (max-width: 640px) {
          .industry-metrics-grid { grid-template-columns: 1fr !important; }
          .industry-context-container { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>

      {/* SECTION 1 — Hero */}
      <section className="svc-hero-row" style={{ display: "flex", height: "100vh", minHeight: "640px", backgroundImage: "url('/images/Ind-Media-telecommunication-image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="svc-hero-text" style={{ width: "60%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)" }} />
          <div style={{ position: "relative", zIndex: 1, paddingLeft: "6%", paddingRight: "5%", paddingBottom: "12%" }}>
            <p style={{ color: "#2563eb", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 20px 0" }}>Media &amp; Telecommunication</p>
            <h1 style={{ color: "white", fontWeight: 200, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, margin: 0 }}>
              Transforming media and<br />telecoms with AI &amp;<br />cloud innovation.
            </h1>
            <p style={{ color: "#c0c8d8", fontSize: "16px", fontWeight: 300, maxWidth: "480px", marginTop: "24px", lineHeight: 1.7, marginBottom: 0 }}>
              Chamco Digital delivers AI and cloud solutions that help media companies and telecoms providers optimize networks, personalize content, automate operations, and deliver next-generation digital experiences.
            </p>
          </div>
        </div>
        <div className="svc-hero-slider" style={{ width: "40%", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.75)" }} />
          <div style={{ position: "relative", zIndex: 1, height: "100%" }}><HeroSlider /></div>
        </div>
      </section>

      {/* SECTION 2 — Marquee */}
      <section
        style={{ backgroundColor: isHovered ? "#ffffff" : "#008000", transition: "background-color 0.3s ease", overflow: "hidden", paddingTop: "28px", paddingBottom: "28px", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ display: "inline-flex", whiteSpace: "nowrap", animation: "mtMarquee 35s linear infinite", animationPlayState: isHovered ? "paused" : "running" }}>
          {[0, 1].map((n) => (
            <span key={n} style={{ paddingRight: "60px" }}>
              <span style={{ color: isHovered ? "#1a3a8f" : "#ffffff", fontWeight: 700, fontSize: "15px", letterSpacing: "1px" }}>Innovate. Transform. Thrive.</span>
              <span style={{ color: isHovered ? "#111111" : "#ffffff", fontWeight: 400, fontSize: "15px", letterSpacing: "1px" }}>{" "}— Connect with us and explore our comprehensive suite of AI and cloud services</span>
            </span>
          ))}
        </div>
      </section>

      {/* SECTION 3 — Unlocking Value */}
      <section style={{ backgroundColor: "#ffffff", paddingTop: "100px", paddingBottom: "0", marginBottom: "0", overflow: "hidden" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div style={{ display: "flex", gap: "0", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: "0 0 45%", minWidth: "260px", paddingRight: "40px" }}>
              <h2 style={{ fontFamily: "inherit", fontWeight: 200, fontSize: "clamp(24px, 3.2vw, 52px)", color: "#111111", lineHeight: 1.1, textAlign: "left", margin: 0, whiteSpace: "nowrap" }}>
                <span style={{ display: "block" }}>AI &amp; cloud technology</span>
                <span style={{ display: "block" }}>solutions for Media &amp;</span>
                <span style={{ display: "block" }}>Telecommunication</span>
              </h2>
            </div>
            <div style={{ flex: "0 0 55%", minWidth: "260px", paddingLeft: "60px", boxSizing: "border-box" }}>
              <p style={{ color: "#444444", fontSize: "16px", fontWeight: 300, lineHeight: "1.7", margin: "0 0 20px 0" }}>
                Chamco Digital provides AI and cloud solutions that help media and telecom companies deliver personalized experiences, optimize networks, and automate operations in an increasingly competitive digital landscape.
              </p>
              <Link href="/discover-chamco" style={{ color: "#2563eb", fontSize: "16px", fontWeight: 400, textDecoration: "none" }}>Learn more →</Link>
            </div>
          </div>
        </div>
        <div className="svc-watermark" style={{ fontSize: "clamp(80px, 10vw, 130px)", fontWeight: 800, color: "#ebebeb", lineHeight: 1, paddingLeft: "6%", marginTop: "48px", marginBottom: "-20px", whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none" }}>
          Media
        </div>
      </section>

      {/* SECTION 4 — Our Methods */}
      <section style={{ backgroundColor: "#ebebeb", paddingTop: "60px", paddingBottom: "80px", marginTop: "0" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <p style={{ color: "#2563eb", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>Our Methods</p>
          <h2 style={{ color: "#111111", fontWeight: 200, fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1.1, margin: 0 }}>
            Power the<br />future, today.
          </h2>
        </div>
      </section>

      {/* SECTION 5 — Content + Image */}
      <section className="svc-darkrow" style={{ display: "flex", minHeight: "600px" }}>
        <div className="svc-darkrow-content" style={{ flex: 1, backgroundColor: "#ffffff", padding: "60px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ color: "#111111", fontWeight: 200, fontSize: "clamp(24px, 2.5vw, 36px)", lineHeight: 1.2, margin: 0 }}>Your AI + Your way</h2>
          <h3 style={{ color: "#111111", fontWeight: 600, fontSize: "20px", marginTop: "20px", marginBottom: 0 }}>What we do</h3>
          <h4 style={{ color: "#111111", fontWeight: 600, fontSize: "18px", marginTop: "20px", marginBottom: 0 }}>Powering next-gen media &amp; connectivity</h4>
          <p style={{ color: "#333333", fontSize: "16px", fontWeight: 300, lineHeight: 1.7, marginTop: "16px", marginBottom: 0 }}>
            AI and cloud technology are reshaping media and telecoms — enabling hyper-personalized content, intelligent network management, automated production workflows, and data-driven audience insights.
          </p>
        </div>
        <div className="svc-darkrow-image" style={{ width: "50%", backgroundImage: "url('/images/executive-touching-icon-social-network.jpg')", backgroundSize: "cover", backgroundPosition: "center", flexShrink: 0 }} />
      </section>

      {/* SECTION 6 — Service Offerings */}
      <section style={{ backgroundColor: "#ffffff", paddingTop: "80px", overflow: "hidden" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <h2 style={{ color: "#2563eb", fontWeight: 400, fontSize: "clamp(24px, 3vw, 38px)", marginBottom: "16px" }}>Service offerings</h2>
          <p style={{ color: "#444", fontSize: "16px", lineHeight: "1.6", maxWidth: "700px", marginBottom: "48px" }}>
            Empowering media and telecom companies with AI and cloud solutions that drive audience engagement, network performance, and operational efficiency.
          </p>
          <div className="svc-mosaic-row" style={{ display: "flex", gap: "4px" }}>
            {MOSAIC_CARDS.slice(0, 2).map((card) => (<MosaicCard key={card.title} card={card} height={380} />))}
          </div>
          <div className="svc-mosaic-row" style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
            {MOSAIC_CARDS.slice(2, 5).map((card) => (<MosaicCard key={card.title} card={card} height={300} />))}
          </div>
          <div className="svc-mosaic-row" style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
            {MOSAIC_CARDS.slice(5, 8).map((card) => (<MosaicCard key={card.title} card={card} height={300} />))}
          </div>
        </div>
      </section>

      {/* INDUSTRY CONTEXT */}
      <section style={{ position: "relative", background: "#ffffff", marginTop: "150px", marginBottom: "150px", paddingTop: "100px", paddingBottom: "80px", overflow: "hidden" }}>
        <span aria-hidden="true" style={{ position: "absolute", top: "10px", left: "4%", fontSize: "clamp(100px, 12vw, 160px)", fontWeight: 900, color: "#000000", opacity: 0.04, lineHeight: 1, letterSpacing: "-4px", pointerEvents: "none", userSelect: "none", zIndex: 0, whiteSpace: "nowrap" }}>MEDIA</span>
        <div className="industry-context-container" style={{ position: "relative", zIndex: 1, maxWidth: "1240px", margin: "0 auto", paddingLeft: "80px", paddingRight: "80px" }}>
          <div style={{ marginBottom: "32px" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#2563eb", display: "block", marginBottom: "10px" }}>THE INDUSTRY CONTEXT</span>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#2563eb" }} />
          </div>
          <h2 style={{ fontSize: "clamp(36px, 4.5vw, 54px)", fontWeight: 700, color: "#111111", lineHeight: 1.15, letterSpacing: "-0.5px", maxWidth: "700px", margin: "0 0 28px 0" }}>
            Competing in a hyper-connected, content-driven world
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#444444", maxWidth: "680px", margin: "0", fontWeight: 300 }}>
            Media and telecom companies face relentless disruption — from cord-cutting and streaming wars to 5G rollouts and rising infrastructure costs. AI and cloud technology are essential to delivering the personalized, seamless experiences that audiences and customers now demand.
          </p>
          <MediaTelecomMetrics />
        </div>
      </section>

      {/* BOOK A CALL */}
      <section style={{ backgroundColor: "#ffffff", paddingTop: "60px", paddingBottom: "80px" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <p style={{ color: "#2563eb", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>Expertise</p>
          <h2 style={{ color: "#111111", fontWeight: 200, fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.15, margin: 0 }}>
            Driving digital AI +<br />transformation.
          </h2>
          <p style={{ color: "#444444", fontSize: "16px", lineHeight: "1.7", maxWidth: "600px", marginTop: "24px", fontWeight: 300 }}>
            Partner with us to implement AI and cloud strategies that transform your media or telecom operations — from intelligent networks to personalized audience experiences.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="svc-cta" style={{ position: "relative", minHeight: "600px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundImage: "url('/images/cta1-bg-img-1.webp')", backgroundSize: "cover", backgroundPosition: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 100%)" }} />
        <div style={{ position: "relative", zIndex: 10, padding: "60px 24px", maxWidth: "700px" }}>
          <p style={{ color: "white", fontStyle: "italic", fontSize: "15px", margin: 0 }}>Think Beyond. Think AI.</p>
          <h2 style={{ color: "white", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1, marginTop: "16px" }}>Ready to Solve What&apos;s Next?</h2>
          <p style={{ color: "#c0c8d8", fontSize: "16px", lineHeight: "1.75", maxWidth: "620px", margin: "20px auto 0" }}>
            Schedule your delivery call today and discover why Chamco Digital is the ideal Partner for your Digital Transformation
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#2563eb", color: "white", fontWeight: 600, fontSize: "18px", padding: "18px 48px", borderRadius: "6px", textDecoration: "none", marginTop: "32px" }}>
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
