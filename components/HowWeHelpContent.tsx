"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ═══════════════════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════════════════ */

function ApproachCard({ image, label, title, desc }: { image: string; label: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.12)" : "0 2px 12px rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
        <Image src={image} alt={title} width={900} height={540} unoptimized style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
      <div style={{ padding: "28px" }}>
        <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#2563eb", margin: "0 0 12px 0" }}>{label}</p>
        <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#111111", margin: "0 0 12px 0", lineHeight: 1.3 }}>{title}</h3>
        <p style={{ fontSize: "15px", fontWeight: 300, color: "#555555", lineHeight: 1.6, margin: 0 }}>{desc}</p>
      </div>
    </div>
  );
}

function CaseStudyCard({ industry, title, desc, href }: { industry: string; title: string; desc: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        padding: "32px",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}>
        <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#2563eb", margin: "0 0 12px 0" }}>{industry}</p>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#111111", margin: "0 0 12px 0", lineHeight: 1.35 }}>{title}</h3>
        <p style={{ fontSize: "14px", fontWeight: 300, color: "#555555", lineHeight: 1.6, margin: "0 0 20px 0", flex: 1 }}>{desc}</p>
        <span style={{ fontSize: "14px", fontWeight: 600, color: "#2563eb" }}>Read more →</span>
      </div>
    </Link>
  );
}

function PartnerLogo({ src, alt }: { src: string; alt: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        minWidth: "120px",
        border: hovered ? "1px solid #2563eb" : "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: hovered ? "scale(1.03)" : "scale(1)",
        transition: "all 0.2s ease",
        backgroundColor: "#ffffff",
      }}
    >
      <Image src={src} alt={alt} width={200} height={50} unoptimized style={{ height: "50px", width: "auto", objectFit: "contain", display: "block" }} />
    </div>
  );
}

function PeopleCard({ image, name, title, bio, linkedin, imageStyle }: { image: string; name: string; title: string; bio: string; linkedin: string; imageStyle?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
        border: hovered ? "1px solid #2563eb" : "1px solid #e8e8e8",
        borderRadius: "12px",
        padding: "32px",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Image src={image} alt={name} width={160} height={160} unoptimized style={imageStyle ?? { width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", display: "block" }} />
      <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#111111", margin: "16px 0 4px 0" }}>{name}</h3>
      <p style={{ fontSize: "14px", fontWeight: 500, color: "#2563eb", margin: 0 }}>{title}</p>
      <p style={{ fontSize: "14px", fontWeight: 300, color: "#555555", lineHeight: 1.6, marginTop: "12px", flex: 1 }}>{bio}</p>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ marginTop: "20px", display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#2563eb">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/>
        </svg>
        <span style={{ fontSize: "13px", fontWeight: 500, color: "#2563eb" }}>LinkedIn</span>
      </a>
    </div>
  );
}

function InsightCard({ image, category, date, title, excerpt, href }: { image: string; category: string; date: string; title: string; excerpt: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href} style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        overflow: "hidden",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}>
        <Image src={image} alt={title} width={600} height={180} unoptimized style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }} />
        <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#2563eb", margin: "0 0 8px 0" }}>{category}</p>
          <p style={{ fontSize: "12px", color: "#888888", margin: "0 0 10px 0" }}>{date}</p>
          <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#111111", margin: "0 0 10px 0", lineHeight: 1.4 }}>{title}</h3>
          <p style={{ fontSize: "14px", fontWeight: 300, color: "#555555", lineHeight: 1.6, margin: "0 0 16px 0", flex: 1 }}>{excerpt}</p>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#2563eb" }}>Read article →</span>
        </div>
      </div>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */

export default function HowWeHelpContent() {
  return (
    <main style={{ backgroundColor: "#ffffff" }}>
      <style>{`
        @keyframes hwh-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .hwh-grid {
            grid-template-columns: 1fr !important;
          }
          .hwh-featured-row {
            flex-direction: column !important;
          }
          .hwh-featured-img {
            width: 100% !important;
            min-height: 220px !important;
          }
          .hwh-featured-row > div:last-child {
            padding: 32px 24px !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .hwh-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      {/* ════════════════════════════════════════
          SECTION 1 — Hero
      ════════════════════════════════════════ */}
      <section style={{
        minHeight: "85vh",
        backgroundImage: "url('/images/See-how-we-deliver.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Glow blobs */}
        <div style={{ position: "absolute", top: "15%", left: "10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "8%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto", padding: "140px 24px", textAlign: "center" }}>
          <p style={{
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#60a5fa",
            margin: "0 0 28px 0",
            animation: "hwh-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
          }}>
            HOW WE HELP CLIENTS
          </p>
          <h1 style={{
            fontSize: "clamp(42px, 6vw, 64px)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            margin: 0,
            animation: "hwh-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
          }}>
            AI and cloud that moves<br />everything forward.
          </h1>
          <p style={{
            fontSize: "20px",
            fontWeight: 300,
            color: "rgba(255,255,255,0.8)",
            maxWidth: "640px",
            margin: "24px auto 0",
            lineHeight: 1.65,
            animation: "hwh-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both",
          }}>
            We combine deep industry expertise, Microsoft, AWS and Pax8 partnerships, and applied AI capabilities to help organizations train their workforces, transform their operations, and scale their digital capabilities — faster than they thought possible.
          </p>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginTop: "40px",
            flexWrap: "wrap",
            animation: "hwh-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both",
          }}>
            <Link href="/contact" style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "16px",
              padding: "16px 36px",
              borderRadius: "6px",
              textDecoration: "none",
            }}>
              Schedule a consultation
            </Link>
            <a href="#insights" style={{
              display: "inline-flex",
              alignItems: "center",
              border: "1px solid rgba(255,255,255,0.5)",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "16px",
              padding: "16px 36px",
              borderRadius: "6px",
              textDecoration: "none",
            }}>
              Explore our insights
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — Our Approach
      ════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#ffffff", paddingTop: "120px", paddingBottom: "120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#2563eb", margin: "0 0 20px 0" }}>OUR APPROACH</p>
          <h2 style={{ fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 700, color: "#111111", margin: 0, lineHeight: 1.15 }}>Three pillars of transformation</h2>
          <p style={{ fontSize: "18px", fontWeight: 300, color: "#444444", maxWidth: "600px", marginTop: "20px", lineHeight: 1.65 }}>
            Every engagement we deliver is built on three interconnected capabilities that ensure your transformation sticks — from strategy through execution to measurable, lasting outcomes.
          </p>

          <div style={{ display: "flex", gap: "28px", marginTop: "60px", flexWrap: "wrap" }}>
            <ApproachCard
              image="/images/employees-working-together.png"
              label="STRATEGY"
              title="Strategy that reimagines"
              desc="We co-create bold AI and cloud strategies with your leadership team — identifying the highest-value transformation opportunities and building a roadmap that connects vision to measurable outcomes."
            />
            <ApproachCard
              image="/images/Continuous-Integration-Continuous-Delivery-CI_CD-1024x683.png"
              label="TECHNOLOGY"
              title="Technology that delivers"
              desc="Our certified Microsoft and AWS architects design and deploy cloud infrastructure, AI systems, and automation solutions that perform in the real world — not just on paper."
            />
            <ApproachCard
              image="/images/Tech-Workers.webp"
              label="WORKFORCE"
              title="Change that scales"
              desc="Through our 12-week AI and cloud workforce enablement programs, we build the internal capabilities your teams need to adopt, operate, and innovate with new technologies — sustainably."
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 — Case Studies
      ════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#f5f5f5", paddingTop: "120px", paddingBottom: "120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#2563eb", margin: "0 0 20px 0" }}>CLIENT IMPACT</p>
          <h2 style={{ fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 700, color: "#111111", margin: 0, lineHeight: 1.15 }}>Ambition in action</h2>
          <p style={{ fontSize: "18px", fontWeight: 300, color: "#444444", marginTop: "20px", lineHeight: 1.65 }}>
            How we have helped organizations across industries harness AI and cloud to drive real, measurable results.
          </p>

          <div className="hwh-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px", marginTop: "60px" }}>
            <CaseStudyCard
              industry="HEALTHCARE"
              title="AI-powered diagnostics reducing clinical decision time by 40%"
              desc="A regional health network partnered with Chamco Digital to deploy Azure AI vision tools that accelerated diagnostic workflows across five hospital sites."
              href="/blog/ai-driven-diagnostics-imaging"
            />
            <CaseStudyCard
              industry="BANKING & FINANCE"
              title="Real-time fraud detection saving $12M annually"
              desc="A mid-sized financial institution implemented our AI fraud detection platform, reducing false positives by 60% while catching 94% of fraudulent transactions."
              href="/blog/enhanced-security-and-fraud-detection"
            />
            <CaseStudyCard
              industry="MANUFACTURING"
              title="Predictive maintenance cutting downtime by 35%"
              desc="A global manufacturer deployed IoT sensors and Azure AI analytics to predict equipment failures, saving millions in unplanned downtime costs."
              href="/blog/predictive-maintenance"
            />
            <CaseStudyCard
              industry="PUBLIC SECTOR"
              title="Cloud migration enabling 3x faster citizen service delivery"
              desc="A government agency modernized its legacy infrastructure with Azure cloud, reducing service processing times from days to hours."
              href="/blog/operational-streamlining"
            />
            <CaseStudyCard
              industry="ENERGY"
              title="AI-driven exploration optimization reducing drilling costs by 28%"
              desc="An oil and gas operator leveraged our seismic data analytics platform to improve exploration targeting, significantly improving discovery rates."
              href="/blog/exploration-optimization-in-the-oil-gas-industry"
            />
            <CaseStudyCard
              industry="WORKFORCE ENABLEMENT"
              title="1,200 professionals certified in 12 weeks"
              desc="A large enterprise partnered with Chamco Digital to deliver our Microsoft AI & Cloud Technology training program across multiple business units."
              href="/blog/closing-the-global-tech-skills-gap-how-microsoft-ai-cloud-training-programs-are-powering-the-next-generation-of-digital-leaders"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 — Featured Capabilities
      ════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#ffffff", paddingTop: "120px", paddingBottom: "120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#2563eb", margin: "0 0 20px 0" }}>CAPABILITIES</p>
          <h2 style={{ fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 700, color: "#111111", margin: 0, lineHeight: 1.15 }}>What we bring to every engagement</h2>

          <div style={{ marginTop: "60px" }}>
            {[
              {
                heading: "AI & Cloud Training",
                desc: "Our 12-week Microsoft-aligned AI and Cloud Technology Workforce Enablement Program builds certified, enterprise-ready talent. Delivered live online with hands-on Azure labs, real-world projects, and AI-102 certification preparation — cohort by cohort, measurable outcome by outcome.",
                href: "/learning",
              },
              {
                heading: "Applied AI Solutions",
                desc: "We design and deploy AI solutions using Azure AI Foundry, OpenAI, Microsoft Copilot, and AWS AI services — from intelligent document processing and RAG pipelines to multi-agent systems and computer vision. Every solution is built for enterprise scale, governance, and responsible AI.",
                href: "/services/data-and-ai",
              },
              {
                heading: "Cloud Infrastructure & Security",
                desc: "Our certified architects design, migrate, and manage cloud environments across Azure, AWS, and multi-cloud configurations. From infrastructure as code and container orchestration to cybersecurity frameworks and compliance — we build the foundation your AI transformation runs on.",
                href: "/services/cybersecurity",
              },
            ].map((row, i) => (
              <div key={i}>
                {i > 0 && <div style={{ height: "1px", backgroundColor: "#e0e0e0" }} />}
                <div style={{ display: "flex", alignItems: "flex-start", paddingTop: "48px", paddingBottom: "48px", gap: "40px", flexWrap: "wrap" }}>
                  <div style={{ flex: "0 0 40%", minWidth: "220px" }}>
                    <h3 style={{ fontSize: "clamp(22px, 2.5vw, 28px)", fontWeight: 700, color: "#111111", margin: 0, lineHeight: 1.3 }}>{row.heading}</h3>
                  </div>
                  <div style={{ flex: 1, minWidth: "260px" }}>
                    <p style={{ fontSize: "16px", fontWeight: 300, color: "#444444", lineHeight: 1.7, margin: "0 0 20px 0" }}>{row.desc}</p>
                    <Link href={row.href} style={{ fontSize: "15px", fontWeight: 600, color: "#2563eb", textDecoration: "none" }}>Learn more →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 5 — Tech Capabilities Strip
      ════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#050d1a", paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#60a5fa", margin: "0 0 20px 0" }}>OUR TECHNOLOGY STACK</p>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, color: "#ffffff", margin: 0, lineHeight: 1.2 }}>The platforms powering our work</h2>
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
          marginTop: "48px",
          overflowX: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          flexWrap: "wrap",
        }}>
          {[
            { category: "FOUNDATION MODEL", name: "Azure OpenAI" },
            { category: "AI PLATFORM", name: "Azure AI Foundry" },
            { category: "PRODUCTIVITY AI", name: "Microsoft Copilot" },
            { category: "CLOUD", name: "Microsoft Azure" },
            { category: "CLOUD", name: "Amazon Web Services" },
            { category: "AI FRAMEWORK", name: "Semantic Kernel" },
            { category: "DEVELOPMENT", name: "Claude Code" },
            { category: "ML PLATFORM", name: "Google Vertex AI" },
          ].map((item, i, arr) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ padding: "0 36px", textAlign: "center" }}>
                <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#60a5fa", margin: "0 0 8px 0" }}>{item.category}</p>
                <p style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>{item.name}</p>
              </div>
              {i < arr.length - 1 && (
                <div style={{ width: "1px", height: "48px", backgroundColor: "rgba(255,255,255,0.15)", flexShrink: 0 }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 6 — Ecosystem of Alliances
      ════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#ffffff", paddingTop: "120px", paddingBottom: "120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#2563eb", margin: "0 0 20px 0" }}>PARTNERSHIPS</p>
          <h2 style={{ fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 700, color: "#111111", margin: 0, lineHeight: 1.15 }}>Built on a global ecosystem of technology alliances</h2>
          <p style={{ fontSize: "18px", fontWeight: 300, color: "#444444", maxWidth: "620px", marginTop: "20px", lineHeight: 1.65 }}>
            We co-deliver with the world&apos;s leading technology companies to bring you certified expertise, preferred pricing, and joint go-to-market capabilities that accelerate your transformation.
          </p>

          <div style={{ display: "flex", gap: "20px", marginTop: "60px", flexWrap: "wrap" }}>
            <PartnerLogo src="/images/Microsoft.png" alt="Microsoft" />
            <PartnerLogo src="/images/AWS.png" alt="AWS" />
            <PartnerLogo src="/images/Google.png" alt="Google" />
            <PartnerLogo src="/images/Nvidia.png" alt="Nvidia" />
            <PartnerLogo src="/images/pax8-3.png" alt="Pax8" />
            <PartnerLogo src="/images/IBM.png" alt="IBM" />
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/partners" style={{ fontSize: "15px", fontWeight: 600, color: "#2563eb", textDecoration: "none" }}>
              See all technology partners →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 7 — Insights
      ════════════════════════════════════════ */}
      <section id="insights" style={{ backgroundColor: "#f5f5f5", paddingTop: "120px", paddingBottom: "120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#2563eb", margin: "0 0 20px 0" }}>INSIGHTS</p>
          <h2 style={{ fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 700, color: "#111111", margin: 0, lineHeight: 1.15 }}>Our latest thinking on AI &amp; cloud</h2>
          <p style={{ fontSize: "18px", fontWeight: 300, color: "#444444", marginTop: "20px", lineHeight: 1.65 }}>
            Perspectives, research, and expert analysis from the Chamco Digital team.
          </p>

          {/* Featured article — top row */}
          <div className="hwh-featured-row" style={{ display: "flex", marginTop: "60px", backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
            <div className="hwh-featured-img" style={{ width: "60%", flexShrink: 0, minHeight: "360px" }}>
              <Image
                src="/images/Tech-Workers.webp"
                alt="Tech Workers"
                width={1200}
                height={720}
                unoptimized
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ flex: 1, padding: "48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#2563eb", margin: "0 0 10px 0" }}>WORKFORCE ENABLEMENT</p>
              <p style={{ fontSize: "12px", color: "#888888", margin: "0 0 16px 0" }}>March 26, 2026</p>
              <h3 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, color: "#111111", margin: "0 0 16px 0", lineHeight: 1.35 }}>
                Closing the Global Tech Skills Gap: How Microsoft AI &amp; Cloud Training Programs Are Powering the Next Generation of Digital Leaders
              </h3>
              <p style={{ fontSize: "15px", fontWeight: 300, color: "#555555", lineHeight: 1.6, margin: "0 0 24px 0" }}>
                As AI reshapes every industry, the organizations that will lead are those that invest in building certified, enterprise-ready AI talent at scale. Here is how Chamco Digital&apos;s 12-week program is doing exactly that.
              </p>
              <Link href="/blog/closing-the-global-tech-skills-gap-how-microsoft-ai-cloud-training-programs-are-powering-the-next-generation-of-digital-leaders" style={{ fontSize: "14px", fontWeight: 600, color: "#2563eb", textDecoration: "none" }}>
                Read article →
              </Link>
            </div>
          </div>

          {/* Bottom row — 3 cards */}
          <div className="hwh-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px", marginTop: "28px" }}>
            <InsightCard
              image="/images/Abstract-Shape.webp"
              category="CLOUD"
              date="March 26, 2026"
              title="Why Hybrid Cloud Infrastructure Is the Future of Scalable IT Operations"
              excerpt="The hybrid cloud model offers the flexibility, security, and scalability that modern enterprises need."
              href="/blog/why-hybrid-cloud-infrastructure-is-the-future-of-scalable-it-operations"
            />
            <InsightCard
              image="/images/Photonics.jpg"
              category="REPORT"
              date="March 27, 2026"
              title="Next-Generation Quantum Photonics Platform for Secure Communications"
              excerpt="A breakthrough in quantum photonics is signalling a major infrastructure shift in global cybersecurity."
              href="/blog/next-generation-quantum-photonics-platform-for-secure-communications-signals-infrastructure-shift-in-global-cybersecurity"
            />
            <InsightCard
              image="/images/Flowers.webp"
              category="AI"
              date="March 27, 2026"
              title="The Future of Enterprise Automation: Building Resilient Hybrid Cloud Architectures with AI at the Core"
              excerpt="Enterprise automation is entering its next phase — one where AI agents orchestrate complex workflows across hybrid cloud environments."
              href="/blog/the-future-of-enterprise-automation-building-resilient-hybrid-cloud-architectures-with-ai-at-the-core"
            />
          </div>

          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <Link href="/blog" style={{
              display: "inline-flex",
              alignItems: "center",
              border: "1px solid #2563eb",
              color: "#2563eb",
              fontWeight: 600,
              fontSize: "15px",
              padding: "14px 36px",
              borderRadius: "6px",
              textDecoration: "none",
            }}>
              See all insights →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 8 — Our People
      ════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#ffffff", paddingTop: "120px", paddingBottom: "120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#2563eb", margin: "0 0 20px 0" }}>OUR PEOPLE</p>
          <h2 style={{ fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 700, color: "#111111", margin: 0, lineHeight: 1.15 }}>The experts behind your transformation</h2>
          <p style={{ fontSize: "18px", fontWeight: 300, color: "#444444", marginTop: "20px", lineHeight: 1.65 }}>
            Our team combines deep technical expertise, industry knowledge, and a passion for building AI-ready organizations.
          </p>

          <div style={{ display: "flex", gap: "28px", marginTop: "60px", flexWrap: "wrap" }}>
            <PeopleCard
              image="/images/Deric-Gurley.webp"
              name="Deric Gurley"
              title="Chief Executive Officer, Chamco Digital"
              bio="Deric leads Chamco Digital's strategic direction, driving AI and cloud transformation programs for enterprises and institutions globally."
              linkedin="https://www.linkedin.com/in/dericgurley/"
            />
            <PeopleCard
              image="/images/N-Jude-Nwosu-v1.jpg"
              name="N. Jude Nwosu"
              title="Chief Technology Officer, Chamco Digital"
              bio="Jude architects Chamco Digital's AI and cloud technology strategy, leading the design of enterprise-grade AI training programs and cloud solutions."
              linkedin="https://www.linkedin.com/in/judenwosu/"
            />
            <PeopleCard
              image="/images/Chamco-Digital-Logo.png"
              name="Chamco Digital LLC"
              title="A Microsoft Partner Company"
              bio="Chamco Digital empowers enterprise and government sectors through strategic AI training and cloud solutions, driving innovation with expert-led Microsoft certification and implementation."
              linkedin="https://www.linkedin.com/company/chamcodigital/?viewAsMember=true"
              imageStyle={{ width: '120px', height: '60px', objectFit: 'contain', borderRadius: '8px', backgroundColor: '#ffffff', padding: '8px' }}
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 9 — Bottom CTA
      ════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: "url('/images/cta1-bg-img-1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 100%)" }} />
        <div style={{ position: "relative", zIndex: 10, padding: "60px 24px", maxWidth: "700px" }}>
          <p style={{ color: "white", fontStyle: "italic", fontSize: "15px", margin: "0 0 16px 0" }}>Think Beyond. Think AI.</p>
          <h2 style={{ color: "white", fontWeight: 700, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.1, margin: "0 0 20px 0" }}>
            Ready to start your transformation?
          </h2>
          <p style={{ color: "#c0c8d8", fontSize: "16px", lineHeight: 1.75, maxWidth: "560px", margin: "0 auto 32px" }}>
            Schedule a consultation today and discover how Chamco Digital can accelerate your AI and cloud journey.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "#2563eb",
            color: "white",
            fontWeight: 600,
            fontSize: "18px",
            padding: "18px 48px",
            borderRadius: "6px",
            textDecoration: "none",
          }}>
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
