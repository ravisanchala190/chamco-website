"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */

const PARTNER_LOGOS = [
  "/images/Microsoft.png",
  "/images/AWS.png",
  "/images/Google.png",
  "/images/IBM.png",
  "/images/Nvidia.png",
  "/images/pax8-3.png",
  "/images/Dropbox.png",
  "/images/Oracle.png",
  "/images/Intel.png",
  "/images/Hitachi.png",
  "/images/Apple.png",
  "/images/LG.png",
  "/images/VMWare.png",
  "/images/Cisco.png",
  "/images/Ooma.png",
  "/images/Barracuda.png",
  "/images/Samsung.png",
  "/images/AMD.png",
  "/images/HP.png",
  "/images/Lenovo.png",
];

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */

export default function PartnersContent() {
  const logosRef = useRef<HTMLDivElement>(null);
  const [logosVisible, setLogosVisible] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);

  useEffect(() => {
    const el = logosRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLogosVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollToPartners = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById("partners")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <style>{`
        @keyframes pFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .partners-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 2px solid white;
          color: white;
          background: transparent;
          padding: 12px 28px;
          border-radius: 4px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 28px;
          transition: background-color 0.2s ease, color 0.2s ease;
          text-decoration: none;
        }
        .partners-btn-outline:hover {
          background-color: white;
          color: #1a3a6b;
        }
        @media (max-width: 768px) {
          .ptn-logos-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .ptn-value-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .ptn-value-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* ════════════════════════════════════════
          SECTION 1 — Hero
      ════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: "600px",
          backgroundImage: "url('/images/Partners-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} />
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "6%",
            right: "6%",
          }}
        >
          <h1
            style={{
              color: "white",
              fontWeight: 300,
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Chamco Digital<br />global alliances.
          </h1>
          <p
            style={{
              color: "white",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "1.75",
              maxWidth: "600px",
              marginTop: "24px",
            }}
          >
            We are dedicated to innovating and co-creating with strategic alliances that matter
            most to our customers, seamlessly designing, building, managing, and modernizing
            their critical systems across all technology stacks to drive transformative,
            future-ready solutions.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — White, left-aligned text only
      ════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "110px",
          paddingBottom: "110px",
          paddingLeft: "6%",
          paddingRight: "6%",
        }}
      >
        <h2
          style={{
            color: "#111111",
            fontWeight: 200,
            fontSize: "clamp(28px, 4vw, 52px)",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Strategic partnerships:<br />
          delivering innovation, driving success,<br />
          securing future growth. Now.
        </h2>
        <p
          style={{
            color: "#444444",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "1.75",
            maxWidth: "800px",
            marginTop: "32px",
          }}
        >
          We collaborate with the world&apos;s leading technology companies to deliver
          cutting-edge solutions that drive business success, enhance operational efficiency,
          and position organizations for future challenges, ensuring sustained growth and a
          competitive edge in an evolving digital landscape.
        </p>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 — Blue, layered images left + content right
      ════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#1a3a6b",
          paddingTop: "110px",
          paddingBottom: "110px",
          minHeight: "500px",
        }}
      >
        <div
          className="max-w-[1440px] mx-auto px-6 lg:px-10"
          style={{ display: "flex", gap: "60px", alignItems: "center", flexWrap: "wrap" }}
        >
          {/* Left column — layered images */}
          <div style={{ flex: "0 0 calc(50% - 30px)", minWidth: "280px", position: "relative", height: "380px" }}>
            {/* Image 1 — top, slightly right */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "10%",
                width: "55%",
                height: "240px",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                zIndex: 1,
              }}
            >
              <Image
                src="/images/Stakeholder-Management.png"
                alt="Partnership"
                fill
                style={{ objectFit: "cover" }}
                unoptimized
              />
            </div>
            {/* Image 2 — bottom-left */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "48%",
                height: "200px",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                zIndex: 2,
              }}
            >
              <Image
                src="/images/Machine-Learning.png"
                alt="Machine Learning"
                fill
                style={{ objectFit: "cover" }}
                unoptimized
              />
            </div>
            {/* Image 3 — bottom-right, on top */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: "5%",
                width: "44%",
                height: "190px",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                zIndex: 3,
              }}
            >
              <Image
                src="/images/Continuous-Improvement.png"
                alt="Continuous Improvement"
                fill
                style={{ objectFit: "cover" }}
                unoptimized
              />
            </div>
          </div>

          {/* Right column — content */}
          <div style={{ flex: "0 0 calc(50% - 30px)", minWidth: "280px" }}>
            <h2
              style={{
                color: "white",
                fontWeight: 700,
                fontSize: "clamp(22px, 2.5vw, 36px)",
                lineHeight: 1.25,
                margin: 0,
              }}
            >
              Built on a robust, collaborative, and innovative partner ecosystem network
            </h2>
            <p
              style={{
                color: "#c0cfe8",
                fontSize: "15px",
                lineHeight: "1.7",
                marginTop: "20px",
              }}
            >
              Our platform thrives on a robust, collaborative, and innovative partner ecosystem
              network, fostering seamless integration and driving transformative solutions.
            </p>
            <a
              href="#partners"
              onClick={scrollToPartners}
              className="partners-btn-outline"
            >
              Our Partners <span style={{ fontSize: "18px", lineHeight: 1 }}>›</span>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 — White, logo grid rows of 4
      ════════════════════════════════════════ */}
      <section
        id="partners"
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "110px",
          paddingBottom: "110px",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <h2
          style={{
            color: "#111111",
            fontWeight: 300,
            fontSize: "28px",
            marginBottom: "40px",
          }}
        >
          Featured partnerships
        </h2>

        <div
          ref={logosRef}
          className="ptn-logos-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            border: "1px solid #e0e0e0",
          }}
        >
          {PARTNER_LOGOS.map((src, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredLogo(i)}
              onMouseLeave={() => setHoveredLogo(null)}
              style={{
                backgroundColor: "white",
                border: "1px solid #e0e0e0",
                padding: "32px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: hoveredLogo === i ? 2 : 1,
                boxShadow: hoveredLogo === i
                  ? "0 0 0 2px #2563eb, 0 0 16px 4px rgba(37,99,235,0.35)"
                  : "none",
                transition: "box-shadow 0.25s ease, z-index 0s",
                opacity: logosVisible ? 1 : 0,
                transform: logosVisible ? "translateY(0)" : "translateY(20px)",
                /* stagger via inline transition override */
              }}
              className={logosVisible ? "" : ""}
            >
              <div
                style={{
                  opacity: logosVisible ? 1 : 0,
                  transform: logosVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.4s ease-out ${i * 0.05}s, transform 0.4s ease-out ${i * 0.05}s`,
                }}
              >
                <Image
                  src={src}
                  alt={`Partner logo ${i + 1}`}
                  width={120}
                  height={60}
                  style={{ objectFit: "contain", maxHeight: "60px", width: "100%" }}
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4b — Partnership Value Cards
      ════════════════════════════════════════ */}
      <section style={{
        backgroundColor: '#050d1a',
        paddingTop: '110px',
        paddingBottom: '110px',
        paddingLeft: '6%',
        paddingRight: '6%',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow effects */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 1 }}>
          <span style={{
            fontSize: '12px', fontWeight: 600, letterSpacing: '3px',
            textTransform: 'uppercase', color: '#60a5fa', display: 'block', marginBottom: '20px',
          }}>PARTNERSHIP VALUE</span>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800,
            color: '#ffffff', margin: '0 0 24px 0', lineHeight: 1.1,
          }}>
            What our alliances deliver for you
          </h2>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'rgba(255,255,255,0.7)',
            maxWidth: '620px', margin: '0 auto', lineHeight: 1.7,
          }}>
            Every partnership in our ecosystem is chosen to deliver a specific, measurable advantage to the organizations we serve.
          </p>
        </div>

        {/* 3-column value cards */}
        <div className="ptn-value-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
          maxWidth: '1200px',
          margin: '0 auto 80px',
          position: 'relative',
          zIndex: 1,
        }}>
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 4C9 4 5 8 5 13C5 18 9 22 14 22C19 22 23 18 23 13C23 8 19 4 14 4Z"/>
                  <path d="M14 8V14L18 16"/>
                </svg>
              ),
              title: 'Accelerated Time to Value',
              body: 'Our certified partnerships eliminate the integration complexity that slows AI and cloud adoption. You move from strategy to production in weeks, not months — with partner-validated architectures that are proven at enterprise scale.',
              stat: '3×', statLabel: 'faster deployment vs. non-partnered approaches',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="20" height="20" rx="3"/>
                  <path d="M9 14L12 17L19 10"/>
                </svg>
              ),
              title: 'Preferred Pricing & Licensing',
              body: 'As a Microsoft Partner and member of key technology alliances, we unlock preferred licensing tiers, co-sell incentives, and volume pricing that our clients could not access independently — reducing total cost of ownership.',
              stat: '20–30%', statLabel: 'typical cost reduction through partner licensing',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="14" cy="10" r="4"/>
                  <path d="M6 24C6 19 9 16 14 16C19 16 22 19 22 24"/>
                  <circle cx="22" cy="8" r="3"/>
                  <path d="M19 14C21 14 24 16 24 19"/>
                </svg>
              ),
              title: 'Joint Expert Delivery',
              body: 'Our ecosystem partnerships give you access to a combined bench of certified architects, trainers, and solution engineers. You benefit from co-delivered expertise that no single vendor or consultancy can match independently.',
              stat: '300+', statLabel: 'certified experts across our partner network',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 4L14 4C14 4 8 7 8 13L8 18L14 21L20 18L20 13C20 7 14 4 14 4Z"/>
                  <path d="M11 14L13 16L17 12"/>
                </svg>
              ),
              title: 'Compliance-Ready by Design',
              body: 'Technology alliances with Microsoft, AWS, and IBM means our solutions inherit enterprise-grade compliance frameworks — HIPAA, SOC 2, ISO 27001, and GDPR controls are built in, not bolted on.',
              stat: '100%', statLabel: 'of solutions built on compliance-certified platforms',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4,20 10,13 16,16 24,7"/>
                  <polyline points="18,7 24,7 24,13"/>
                </svg>
              ),
              title: 'Continuous Innovation Access',
              body: 'Partner status gives us early access to new platform features, beta programs, and roadmap previews. Your solutions benefit from the latest AI and cloud innovations before they are generally available.',
              stat: 'Early', statLabel: 'access to new features via partner programs',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="8" height="6" rx="1"/>
                  <rect x="17" y="6" width="8" height="6" rx="1"/>
                  <rect x="10" y="16" width="8" height="6" rx="1"/>
                  <line x1="7" y1="12" x2="7" y2="19"/>
                  <line x1="21" y1="12" x2="21" y2="19"/>
                  <line x1="7" y1="19" x2="14" y2="19"/>
                  <line x1="21" y1="19" x2="18" y2="19"/>
                </svg>
              ),
              title: 'End-to-End Ecosystem Integration',
              body: 'Our multi-vendor partnership model means we can connect Microsoft, AWS, Google, Nvidia, and IBM capabilities into unified solutions — eliminating the fragmentation that undermines most enterprise technology programs.',
              stat: '20+', statLabel: 'technology alliances in our active ecosystem',
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '36px 32px',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = 'rgba(255,255,255,0.08)'
                el.style.borderColor = 'rgba(96,165,250,0.4)'
                el.style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = 'rgba(255,255,255,0.04)'
                el.style.borderColor = 'rgba(255,255,255,0.1)'
                el.style.transform = 'translateY(0)'
              }}
            >
              {/* Icon */}
              <div style={{
                width: '52px', height: '52px',
                backgroundColor: 'rgba(96,165,250,0.12)',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '24px',
              }}>
                {card.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '18px', fontWeight: 700, color: '#ffffff',
                margin: '0 0 12px 0', lineHeight: 1.3,
              }}>{card.title}</h3>

              {/* Body */}
              <p style={{
                fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7, margin: '0 0 24px 0',
              }}>{card.body}</p>

              {/* Stat */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                <span style={{
                  fontSize: '28px', fontWeight: 800, color: '#60a5fa', display: 'block', lineHeight: 1,
                }}>{card.stat}</span>
                <span style={{
                  fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.5)', marginTop: '6px', display: 'block',
                }}>{card.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '60px',
        }}>
          <p style={{
            fontSize: '20px', fontWeight: 300, color: 'rgba(255,255,255,0.7)',
            marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px',
          }}>
            Ready to leverage our global technology ecosystem for your transformation?
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              padding: '16px 40px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background-color 0.25s ease, transform 0.25s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = '#1d4ed8'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = '#2563eb'
              el.style.transform = 'translateY(0)'
            }}
          >
            Start a Partnership Conversation
          </a>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 5 — Single full-width CTA
      ════════════════════════════════════════ */}
      <section
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 100%)",
          }}
        />
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
              transition: "background-color 0.2s ease",
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
