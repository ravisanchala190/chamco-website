"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const HERO_SLIDES = [
  { title: "The Service", body: "We design and implement system integration solutions that connect disparate applications, databases, and platforms, enabling seamless data flow and operational efficiency across your enterprise." },
  { title: "Enterprise Application Integration", body: "Connecting enterprise applications including ERP, CRM, HRM, and custom systems to eliminate data silos and enable real-time information sharing." },
  { title: "API Design & Management", body: "Designing, building, and managing APIs that serve as the connective tissue between applications, enabling flexible and scalable integrations." },
  { title: "Data Integration & ETL", body: "Building data pipelines that extract, transform, and load data between systems, ensuring data consistency, quality, and availability across the enterprise." },
];

const MOSAIC_CARDS = [
  { color: "#3d5afe", title: "Enterprise Application Integration (EAI)", summary: "Integrate ERP, CRM, HRM, and other enterprise applications to enable seamless data exchange and unified business processes across your organization." },
  { color: "#7b1fa2", title: "API-Led Integration", summary: "Build API-led integration architectures that expose business capabilities as reusable APIs, enabling flexible connectivity between systems and partners." },
  { color: "#00695c", title: "Middleware & ESB Solutions", summary: "Implement middleware and enterprise service bus solutions that orchestrate complex integrations, manage message routing, and ensure reliable data delivery." },
  { color: "#1565c0", title: "Cloud Integration Platforms", summary: "Leverage cloud integration platforms like Azure Integration Services and AWS AppFlow to connect cloud and on-premises applications seamlessly." },
  { color: "#c62828", title: "B2B & Partner Integration", summary: "Enable seamless electronic data interchange with trading partners through EDI, AS2, and API-based B2B integration solutions." },
  { color: "#f57f17", title: "Real-Time Data Streaming", summary: "Implement event-driven architectures and real-time data streaming solutions that enable instant data synchronization and reactive business processes." },
  { color: "#283593", title: "Integration Monitoring & Management", summary: "Monitor integration flows, track message delivery, and manage exceptions with comprehensive integration operations and support services." },
  { color: "#2e7d32", title: "Legacy System Integration", summary: "Connect legacy systems with modern applications and cloud services using adapters, custom connectors, and proven integration patterns." },
];

const SOLUTION_BLOCKS = [
  { title: "Integration Assessment", body: "Map your current application landscape, identify integration gaps, and develop an integration strategy that aligns with your business objectives." },
  { title: "Integration Architecture", body: "Design a scalable, maintainable integration architecture using proven patterns and modern platforms that supports current and future integration needs." },
  { title: "Data Quality & Governance", body: "Implement data quality controls and governance frameworks that ensure data consistency, accuracy, and compliance across integrated systems." },
  { title: "Testing & Validation", body: "Rigorously test integration flows to ensure data integrity, performance, and reliability across all connected systems and scenarios." },
  { title: "Integration Support & Evolution", body: "Maintain and evolve your integration landscape with ongoing support, monitoring, and enhancement services as your business and technology needs change." },
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
        <div key={progressKey} style={{ height: "100%", backgroundColor: "#1e90ff", animation: "csDrain 10s linear forwards" }} />
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
                <p key={`body-${progressKey}`} style={{ color: "#c0c8d8", fontSize: "14px", lineHeight: "1.6", marginTop: "12px", marginBottom: 0, animation: "csBodyFade 0.4s ease-out" }}>
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
    <div className="cs-mc-card" style={{ position: "relative", overflow: "hidden", height: `${height}px`, flex: 1, backgroundColor: card.color, cursor: "pointer" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" }} />
      <div className="cs-mc-overlay" style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.35)", zIndex: 2 }} />
      <div className="cs-mc-title" style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", zIndex: 3 }}>
        <h3 style={{ color: "white", fontWeight: 700, fontSize: "20px", margin: 0, lineHeight: "1.2" }}>{card.title}</h3>
      </div>
      <div className="cs-mc-summary" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "28px", zIndex: 4 }}>
        <p style={{ color: "white", fontSize: "15px", lineHeight: "1.6", textAlign: "center", maxWidth: "80%", margin: 0 }}>{card.summary}</p>
      </div>
    </div>
  );
}

export default function SystemIntegrationContent() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main>
      <style>{`
        @keyframes csMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes csDrain { from { width: 100%; } to { width: 0%; } }
        @keyframes csBodyFade { from { opacity: 0; } to { opacity: 1; } }
        .cs-mc-card .cs-mc-overlay { opacity: 0; transition: opacity 0.3s ease; }
        .cs-mc-card:hover .cs-mc-overlay { opacity: 1; }
        .cs-mc-card .cs-mc-title { opacity: 1; transition: opacity 0.3s ease; }
        .cs-mc-card:hover .cs-mc-title { opacity: 0; }
        .cs-mc-card .cs-mc-summary { opacity: 0; transition: opacity 0.3s ease 0.15s; }
        .cs-mc-card:hover .cs-mc-summary { opacity: 1; }
      `}</style>

      {/* SECTION 1 — Hero */}
      <section className="svc-hero-row" style={{ display: "flex", height: "100vh", minHeight: "640px", backgroundImage: "url('/images/Systems-integration-image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="svc-hero-text" style={{ width: "60%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)" }} />
          <div style={{ position: "relative", zIndex: 1, paddingLeft: "6%", paddingRight: "5%", paddingBottom: "12%" }}>
            <h1 style={{ color: "white", fontWeight: 200, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, margin: 0 }}>
              Connect your systems.<br />Unify your data.
            </h1>
          </div>
        </div>
        <div className="svc-hero-slider" style={{ width: "40%", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.75)" }} />
          <div style={{ position: "relative", zIndex: 1, height: "100%" }}>
            <HeroSlider />
          </div>
        </div>
      </section>

      {/* SECTION 2 — Marquee */}
      <section style={{ backgroundColor: isHovered ? "#ffffff" : "#90D5FF", transition: "background-color 0.3s ease", overflow: "hidden", paddingTop: "28px", paddingBottom: "28px", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div style={{ display: "inline-flex", whiteSpace: "nowrap", animation: "csMarquee 35s linear infinite", animationPlayState: isHovered ? "paused" : "running" }}>
          {[0, 1].map((n) => (
            <span key={n} style={{ paddingRight: "60px" }}>
              <span style={{ color: "#1a3a8f", fontWeight: 700, fontSize: "15px", letterSpacing: "1px" }}>Innovate. Transform. Thrive.</span>
              <span style={{ color: "#111111", fontWeight: 400, fontSize: "15px", letterSpacing: "1px" }}>{" "}— Connect with us and explore our comprehensive suite of AI and cloud services</span>
            </span>
          ))}
        </div>
      </section>

      {/* SECTION 3 — Unlocking Value */}
      <section style={{ backgroundColor: "#ffffff", paddingTop: "100px", overflow: "hidden", paddingBottom: '0', marginBottom: '0' }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div style={{ display: "flex", gap: "0", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: "0 0 45%", minWidth: "260px", paddingRight: "40px" }}>
              <h2 style={{ color: "#111111", fontWeight: 200, fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1, margin: 0 }}>
                Break down silos.<br />Unlock enterprise potential.
              </h2>
            </div>
            <div style={{ flex: "0 0 55%", minWidth: "260px", paddingLeft: "60px", boxSizing: "border-box" }}>
              <p style={{ color: "#444444", fontSize: "16px", fontWeight: 300, lineHeight: "1.7", margin: 0 }}>
                Disconnected systems create inefficiency and missed opportunities. Our system integration solutions connect your applications and data sources to create a unified, intelligent enterprise.
              </p>
            </div>
          </div>
        </div>
        <div className="svc-watermark" style={{ fontSize: "clamp(80px, 10vw, 130px)", fontWeight: 800, color: "#ebebeb", lineHeight: 1, paddingLeft: "6%", marginTop: "48px", marginBottom: "-20px", whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none" }}>
          System Integration
        </div>
      </section>

      {/* SECTION 4 — Our Methods */}
      <section style={{ backgroundColor: "#ebebeb", paddingTop: "60px", paddingBottom: "80px", marginTop: '0' }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <p style={{ color: "#2563eb", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>Our Methods</p>
          <h2 style={{ color: "#111111", fontWeight: 200, fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1.1, margin: 0 }}>Power the<br />future, today</h2>
        </div>
      </section>

      {/* SECTION 5 — Service Offerings */}
      <section style={{ backgroundColor: "#ffffff", paddingTop: "80px", overflow: "hidden", paddingBottom: '0', marginBottom: '0' }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <h2 style={{ color: "#2563eb", fontWeight: 400, fontSize: "clamp(24px, 3vw, 38px)", marginBottom: "16px" }}>Service offerings</h2>
          <p style={{ color: "#444", fontSize: "16px", lineHeight: "1.6", maxWidth: "700px", marginBottom: "48px" }}>
            Our system integration services connect your applications, data, and processes to create a unified digital ecosystem that drives efficiency and enables innovation.
          </p>
          <div className="svc-mosaic-row" style={{ display: "flex", gap: "4px" }}>
            {MOSAIC_CARDS.slice(0, 2).map((card) => <MosaicCard key={card.title} card={card} height={380} />)}
          </div>
          <div className="svc-mosaic-row" style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
            {MOSAIC_CARDS.slice(2, 5).map((card) => <MosaicCard key={card.title} card={card} height={300} />)}
          </div>
          <div className="svc-mosaic-row" style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
            {MOSAIC_CARDS.slice(5, 8).map((card) => <MosaicCard key={card.title} card={card} height={300} />)}
          </div>
        </div>
        <div className="svc-watermark" style={{ fontSize: "clamp(80px, 10vw, 130px)", fontWeight: 800, color: "#ebebeb", lineHeight: 1, paddingLeft: "6%", marginTop: "56px", marginBottom: "-20px", whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none" }}>
          Book a Call
        </div>
      </section>

      {/* SECTION 6 — Expertise */}
      <section style={{ backgroundColor: "#ebebeb", paddingTop: "60px", paddingBottom: "80px", marginTop: '0' }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <p style={{ color: "#2563eb", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>Expertise</p>
          <h2 style={{ color: "#111111", fontWeight: 200, fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.15, margin: 0 }}>Driving digital AI +<br />transformation.</h2>
          <p style={{ color: "#444444", fontSize: "16px", lineHeight: "1.7", maxWidth: "600px", marginTop: "24px", fontWeight: 300 }}>
            Our integration experts design and implement solutions that connect your entire enterprise. We create the digital backbone that enables your systems to work together seamlessly.
          </p>
        </div>
      </section>

      {/* SECTION 7 — Solution */}
      <section className="svc-darkrow" style={{ display: "flex", minHeight: "700px" }}>
        <div style={{ width: "45%", position: "relative", backgroundImage: "url('/images/wc2.webp')", backgroundSize: "cover", backgroundPosition: "center", flexShrink: 0 }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.3)" }} />
        </div>
        <div style={{ flex: 1, backgroundColor: "#1a1a1a", padding: "60px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ color: "white", fontWeight: 700, fontSize: "clamp(22px, 2.5vw, 36px)", lineHeight: 1.2, marginBottom: "40px" }}>
            Your Integration Solution Starts with Us
          </h2>
          <div>
            {SOLUTION_BLOCKS.map((block, i) => (
              <div key={i}>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "18px", marginBottom: "8px" }}>{block.title}</h3>
                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.6", marginBottom: "28px" }}>{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — CTA */}
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
