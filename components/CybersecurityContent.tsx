"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */

const HERO_SLIDES = [
  { title: "The Service", body: "Preventing threats, detecting vulnerabilities, responding to incidents, and ensuring recovery. Our service includes risk assessments, real-time monitoring, and tailored strategies to safeguard data, systems, and networks comprehensively." },
  { title: "Threat Prevention and Detection", body: "Implementing measures like firewalls, intrusion detection systems, and antivirus software to prevent and identify potential cyber threats in real time." },
  { title: "Incident Response and Recovery", body: "Developing and executing plans to respond to security breaches, mitigate damage, and restore systems and data to normal operation." },
  { title: "Risk Assessment and Management", body: "Conducting regular audits, vulnerability assessments, and risk analyses to identify weaknesses and implement strategies to reduce security risks." },
];

const MOSAIC_CARDS = [
  { color: "#3d5afe", title: "Threat Detection & Response", summary: "Stay ahead of cyber threats with advanced threat detection and response capabilities. Our solutions provide real-time monitoring, rapid incident response, and predictive analytics to mitigate risks and minimize disruptions." },
  { color: "#7b1fa2", title: "Identity & Access Management", summary: "Secure your digital environment with robust identity and access management solutions. Ensure that the right individuals have access to the right resources at the right times, safeguarding sensitive data and enhancing operational efficiency." },
  { color: "#00695c", title: "Cloud Security", summary: "Protect your cloud infrastructure with scalable and robust security solutions. From data encryption to secure access controls, we provide comprehensive cloud security to ensure your business-critical assets remain safe." },
  { color: "#1565c0", title: "Security Compliance & Risk Management", summary: "Meet regulatory standards and reduce risks with our compliance-focused cybersecurity solutions. We provide tools and expertise to help you identify vulnerabilities, address gaps, and maintain compliance with industry regulations." },
  { color: "#c62828", title: "Protect Against Emerging Threats", summary: "Stay protected with cutting-edge security solutions that adapt to evolving threats, ensuring uninterrupted operations and peace of mind." },
  { color: "#f57f17", title: "Comprehensive Network Security", summary: "Safeguard your network infrastructure with firewalls, intrusion prevention systems, and endpoint protection, ensuring seamless security across all digital touchpoints." },
  { color: "#283593", title: "Cybersecurity Awareness Training", summary: "Empower your workforce with the knowledge and tools to recognize and prevent cyber threats. Our training programs foster a culture of security awareness and responsibility." },
  { color: "#2e7d32", title: "Incident Response & Recovery", summary: "Minimize the impact of cyber incidents with our robust incident response and recovery services. We help you quickly recover operations and fortify defenses to prevent future breaches." },
];

const SOLUTION_BLOCKS = [
  { title: "Managed Security Services", body: "Outsource your security operations to our expert team. We provide 24/7 monitoring, incident management, and threat intelligence to keep your organization safe around the clock." },
  { title: "Zero Trust Architecture", body: "Implement a Zero Trust security model to eliminate unauthorized access and minimize risk. Our solutions ensure strict verification at every access point, enhancing security across your organization." },
  { title: "Data Protection & Encryption", body: "Protect sensitive data with advanced encryption solutions. From data at rest to data in transit, our tools ensure that your information remains secure and confidential." },
  { title: "Advanced Cyber Threat Intelligence", body: "Leverage threat intelligence to anticipate, detect, and neutralize cyber threats. Our intelligence-driven solutions empower you to act swiftly and effectively against adversaries." },
  { title: "Security Awareness & Training", body: "Strengthen your first line of defense with comprehensive security awareness programs and training. Empower your employees to recognize and mitigate potential threats, fostering a security-conscious culture across your organization." },
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
      {/* Draining progress bar */}
      <div style={{ height: "3px", backgroundColor: "rgba(255,255,255,0.12)", flexShrink: 0 }}>
        <div
          key={active}
          style={{
            height: "100%",
            backgroundColor: "#1e90ff",
            animation: "csDrain 10s linear forwards",
          }}
        />
      </div>

      {/* Accordion items — vertically centred */}
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
                    animation: "csBodyFade 0.4s ease-out",
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
    <div
      className="cs-mc-card"
      style={{
        position: "relative",
        overflow: "hidden",
        height: `${height}px`,
        flex: 1,
        backgroundColor: card.color,
        cursor: "pointer",
      }}
    >
      {/* Bottom gradient always visible */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" }} />

      {/* Hover overlay */}
      <div
        className="cs-mc-overlay"
        style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.35)", zIndex: 2 }}
      />

      {/* Title at bottom-left */}
      <div
        className="cs-mc-title"
        style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", zIndex: 3 }}
      >
        <h3 style={{ color: "white", fontWeight: 700, fontSize: "20px", margin: 0, lineHeight: "1.2" }}>
          {card.title}
        </h3>
      </div>

      {/* Summary centred, visible on hover */}
      <div
        className="cs-mc-summary"
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
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */

export default function CybersecurityContent() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main>
      <style>{`
        @keyframes csMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes csDrain {
          from { width: 100%; }
          to   { width: 0%; }
        }
        @keyframes csBodyFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        /* Mosaic card hover */
        .cs-mc-card .cs-mc-overlay { opacity: 0; transition: opacity 0.3s ease; }
        .cs-mc-card:hover .cs-mc-overlay { opacity: 1; }
        .cs-mc-card .cs-mc-title { opacity: 1; transition: opacity 0.3s ease; }
        .cs-mc-card:hover .cs-mc-title { opacity: 0; }
        .cs-mc-card .cs-mc-summary { opacity: 0; transition: opacity 0.3s ease 0.15s; }
        .cs-mc-card:hover .cs-mc-summary { opacity: 1; }
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
          backgroundImage: "url('/images/Cybersecurity-image.jpg')",
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
            <h1
              style={{
                color: "white",
                fontWeight: 200,
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Proactively<br />securing your<br />infrastructure.
            </h1>
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
          SECTION 2 — Marquee (white bg)
      ════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: isHovered ? "#ffffff" : "#90D5FF",
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
        <div style={{ display: "inline-flex", whiteSpace: "nowrap", animation: "csMarquee 35s linear infinite", animationPlayState: isHovered ? "paused" : "running" }}>
          {[0, 1].map((n) => (
            <span key={n} style={{ paddingRight: "60px" }}>
              <span style={{ color: "#1a3a8f", fontWeight: 700, fontSize: "15px", letterSpacing: "1px" }}>
                Innovate. Transform. Thrive.
              </span>
              <span style={{ color: "#111111", fontWeight: 400, fontSize: "15px", letterSpacing: "1px" }}>
                {" "}— Connect with us and explore our comprehensive suite of AI and cloud services
              </span>
            </span>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 — Unlocking Value (white, two-col)
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
                className="svc-unlock-heading"
                style={{
                  fontFamily: "inherit",
                  fontWeight: 200,
                  fontSize: "clamp(24px, 3.2vw, 44px)",
                  color: "#111111",
                  lineHeight: 1.15,
                  textAlign: "left",
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ display: "block" }}>Unlocking value with</span>
                <span style={{ display: "block" }}>advanced Cybersecurity</span>
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
                  margin: 0,
                }}
              >
                Embark on your cybersecurity journey today and unlock the potential to protect
                your organization from threats, ensuring business resilience and trust.
              </p>
            </div>
          </div>
        </div>

        {/* Watermark — sits at the bottom of the white section; grey begins at letter feet */}
        <div
          className="svc-watermark"
          style={{
            fontSize: "clamp(80px, 10vw, 130px)",
            fontWeight: 800,
            color: "#e8e8e8",
            lineHeight: 1,
            paddingLeft: "6%",
            marginTop: "48px",
            marginBottom: "-20px",
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          Cybersecurity
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
            Power the<br />future, today
          </h2>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 5 — Service Offerings (white, mosaic cards)
      ════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "80px",
          paddingBottom: "0",
          marginBottom: "0",
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
            In an era of increasing digital threats, our comprehensive cybersecurity solutions
            empower businesses to safeguard their data, systems, and operations. Experience a
            proactive approach to securing your digital future.
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

        {/* Watermark — sits at the bottom of the white section; grey begins at letter feet */}
        <div
          className="svc-watermark"
          style={{
            fontSize: "clamp(80px, 10vw, 130px)",
            fontWeight: 800,
            color: "#ebebeb",
            lineHeight: 1,
            paddingLeft: "6%",
            marginTop: "56px",
            marginBottom: "-20px",
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          Book a Call
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 6 — Book a Call (light grey)
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
            Partner with us to design and implement tailored cybersecurity strategies. Our
            expert guidance, advanced technology, and innovative approaches ensure your
            organization stays secure in an increasingly complex threat landscape.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 7 — Your Cybersecurity Solution (two-col dark)
      ════════════════════════════════════════ */}
      <section className="svc-darkrow" style={{ display: "flex", minHeight: "700px" }}>
        {/* Left 45% — image */}
        <div
          className="svc-darkrow-image"
          style={{
            width: "45%",
            position: "relative",
            backgroundImage: "url('/images/wc2.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexShrink: 0,
          }}
        >
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.3)" }} />
        </div>

        {/* Right 55% — content */}
        <div
          className="svc-darkrow-content"
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
            Your Cybersecurity Solution Starts with Us
          </h2>
          <div>
            {SOLUTION_BLOCKS.map((block, i) => (
              <div key={i} style={{ marginBottom: i < SOLUTION_BLOCKS.length - 1 ? "0" : "0" }}>
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
          SECTION 8 — Bottom CTA
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
        <div className="svc-cta-inner" style={{ position: "relative", zIndex: 10, padding: "60px 24px", maxWidth: "700px" }}>
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
