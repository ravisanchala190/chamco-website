"use client";

import Image from "next/image";
import { useState } from "react";

export default function StrategicMicrosoftContent() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        .smp-share-icon:hover { background: #2563eb !important; }
        .smp-related-card { transition: box-shadow 0.2s; }
        .smp-related-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
        .smp-read-more { color: #2563eb; text-decoration: none; font-size: 13px; font-weight: 600; }
        .smp-read-more:hover { text-decoration: underline; }
        .smp-cta-btn { transition: background-color 0.2s; }
        .smp-cta-btn:hover { background-color: #1d4ed8 !important; }
        .smp-article-subheading { font-size: 24px; font-weight: 700; color: #111111; margin-top: 48px; margin-bottom: 16px; line-height: 1.3; }
        .smp-pull-quote { border-left: 4px solid #2563eb; padding-left: 24px; font-size: 22px; font-style: italic; color: #333333; margin: 40px 0; line-height: 1.6; }
        .smp-body p { font-size: 18px; line-height: 1.8; color: #1a1a1a; font-weight: 300; margin: 0 0 28px 0; }
        @media (max-width: 768px) {
          .art-related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* SECTION 1 — Hero Image */}
      <section>
        <Image
          src="/images/Lead-the-AI-Era.jpg"
          alt="Strategic Microsoft Ecosystem Partnerships"
          width={1600}
          height={480}
          unoptimized
          priority
          style={{ width: "100%", height: "480px", objectFit: "cover", display: "block" }}
        />
      </section>

      {/* SECTION 2 — Article Hero */}
      <section style={{ backgroundColor: "#ffffff", paddingTop: "80px", paddingBottom: 0 }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          {/* Category label */}
          <p style={{ fontSize: "12px", letterSpacing: "2px", fontWeight: 600, color: "#2563eb", textTransform: "uppercase", margin: 0 }}>
            INSIGHT ARTICLE
          </p>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "#e0e0e0", marginTop: "16px" }} />

          {/* Headline */}
          <h1 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 800, color: "#111111", lineHeight: 1.15, marginTop: "32px", marginBottom: 0 }}>
            Strategic Microsoft Ecosystem Partnerships Are the Defining Leadership Imperative in the AI Era
          </h1>

          {/* Author */}
          <p style={{ fontSize: "14px", color: "#555555", marginTop: "24px", marginBottom: 0 }}>
            By N. Jude Nwosu, Chief Technology Officer, Chamco Digital
          </p>

          {/* Date */}
          <p style={{ fontSize: "13px", color: "#888888", marginTop: "8px", marginBottom: 0 }}>
            April 2026
          </p>

          {/* Social sharing row */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "20px" }}>
            <span style={{ fontSize: "13px", color: "#555555", fontWeight: 500 }}>Share:</span>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/judenwosu/"
              target="_blank"
              rel="noopener noreferrer"
              className="smp-share-icon"
              aria-label="Share on LinkedIn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#1a1a1a",
                transition: "background 0.2s",
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/ChamcoMedia"
              target="_blank"
              rel="noopener noreferrer"
              className="smp-share-icon"
              aria-label="Share on X"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#1a1a1a",
                transition: "background 0.2s",
                flexShrink: 0,
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Copy link */}
            <button
              onClick={handleCopyLink}
              className="smp-share-icon"
              aria-label="Copy link"
              title={copied ? "Copied!" : "Copy link"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#1a1a1a",
                transition: "background 0.2s",
                flexShrink: 0,
                border: "none",
                cursor: "pointer",
              }}
            >
              {copied ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                </svg>
              )}
            </button>
          </div>

          {/* Divider below social row */}
          <div style={{ height: "1px", backgroundColor: "#e0e0e0", marginTop: "20px" }} />
        </div>
      </section>

      {/* SECTION 3 — Article Body */}
      <section style={{ maxWidth: "740px", margin: "0 auto", padding: "80px 24px" }}>
        <div className="smp-body">
          {/* Intro paragraph */}
          <p>
            The question facing enterprise leaders today is no longer whether to adopt artificial intelligence — it is whether their organizational architecture is capable of sustaining it at scale. Across industries, AI initiatives that began as isolated pilots are colliding with the hard reality of fragmented infrastructure, misaligned governance, and workforce capability gaps. The organizations that are navigating this transition most effectively share a common strategic posture: they have chosen to build on ecosystem partnerships rather than assemble point solutions. And increasingly, the Microsoft ecosystem sits at the centre of that choice.
          </p>

          <h2 className="smp-article-subheading">From Experimentation to Execution: The Inflection Point Has Arrived</h2>
          <p>
            Enterprise AI has crossed a critical threshold. The era of proof-of-concept projects and exploratory pilots is giving way to something more demanding: the pressure to operationalize AI across core business functions, at enterprise scale, with measurable outcomes. This shift exposes a structural problem that many organizations did not anticipate. AI systems built in isolation — on disparate cloud environments, disconnected data pipelines, and vendor-specific tooling — cannot interoperate. They create maintenance burdens, compliance risk, and, ultimately, competitive disadvantage.
          </p>
          <p>
            The organizations that are moving fastest are not those with the largest AI budgets. They are those that made early, deliberate decisions about which ecosystem to anchor their transformation within — and then built systematically from that foundation. The Microsoft ecosystem, anchored by Azure, Azure AI Foundry, Microsoft Copilot, and OpenAI&apos;s frontier models, has emerged as the dominant platform for enterprise-grade AI deployment precisely because it addresses this interoperability challenge by design.
          </p>

          <blockquote className="smp-pull-quote">
            The organizations moving fastest are not those with the largest AI budgets. They are those that made early, deliberate decisions about which ecosystem to anchor their transformation within.
          </blockquote>

          <h2 className="smp-article-subheading">Why Ecosystem Architecture Matters More Than Individual Tools</h2>
          <p>
            A common mistake in enterprise AI strategy is treating AI as a procurement decision — selecting the best individual tool for each use case and assembling them into a portfolio. This approach produces what practitioners increasingly call &ldquo;AI sprawl&rdquo;: a growing collection of systems that each solve narrow problems but cannot share data, enforce consistent governance, or deliver compound organizational value over time.
          </p>
          <p>
            Ecosystem-anchored strategies operate differently. When an organization commits to building within the Microsoft architecture, it gains something more valuable than individual capabilities: it gains interoperability. Azure AI services share identity and access management with Microsoft 365. Azure OpenAI deployments inherit the same security and compliance controls as the broader Azure environment. Microsoft Copilot integrates natively with the productivity tools that employees already use daily. This convergence is not accidental — it is the product of deliberate platform design, and it is what makes scaled AI deployment operationally feasible.
          </p>

          <h2 className="smp-article-subheading">Governance, Security, and Responsible AI: Non-Negotiable at Scale</h2>
          <p>
            One dimension of ecosystem strategy that receives insufficient attention in most AI transformation discussions is governance. As AI systems move from internal experimentation to customer-facing applications and regulated workflows, the governance requirements become substantially more complex. Organizations must ensure that AI outputs are auditable, that data processing complies with applicable regulations, and that human oversight mechanisms are embedded in automated decision pipelines.
          </p>
          <p>
            The Microsoft ecosystem provides mature tooling for each of these requirements. Azure AI Content Safety, Microsoft Purview for data governance, and Azure Policy for infrastructure compliance create a governance stack that organizations can configure rather than construct from scratch. For regulated industries — healthcare, financial services, government — this is not a convenience. It is a prerequisite for deployment.
          </p>
          <p>
            Responsible AI principles, including fairness, transparency, and privacy-first design, are embedded in Microsoft&apos;s certification pathways and training materials. Organizations that build their AI programs within this framework inherit a set of responsible AI defaults that would take years to develop independently.
          </p>

          {/* Technology Stack Strip — full-bleed */}
          <section style={{
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            backgroundColor: '#06402B',
            padding: '80px 40px',
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <span style={{
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#60a5fa',
                display: 'block',
                marginBottom: '16px',
              }}>THE MICROSOFT ECOSYSTEM</span>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 800,
                color: '#ffffff',
                margin: 0,
                lineHeight: 1.15,
              }}>The platforms at the centre of enterprise AI</h2>
            </div>

            {/* Technology strip */}
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0',
            }}>
              {[
                { category: 'FOUNDATION MODEL', name: 'Azure OpenAI' },
                { category: 'AI PLATFORM', name: 'Azure AI Foundry' },
                { category: 'GOVERNANCE', name: 'Microsoft Purview' },
                { category: 'PRODUCTIVITY AI', name: 'Microsoft Copilot' },
                { category: 'CLOUD', name: 'Microsoft Azure' },
                { category: 'SECURITY', name: 'Azure Policy' },
                { category: 'AI FRAMEWORK', name: 'Semantic Kernel' },
                { category: 'CERTIFICATION', name: 'AI-102 & AI-900' },
              ].map((item, i, arr) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <div style={{
                    textAlign: 'center',
                    padding: '0 40px',
                  }}>
                    <span style={{
                      display: 'block',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: '#60a5fa',
                      marginBottom: '10px',
                    }}>{item.category}</span>
                    <span style={{
                      display: 'block',
                      fontSize: 'clamp(16px, 2vw, 22px)',
                      fontWeight: 700,
                      color: '#ffffff',
                      whiteSpace: 'nowrap',
                    }}>{item.name}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{
                      width: '1px',
                      height: '48px',
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      flexShrink: 0,
                    }} />
                  )}
                </div>
              ))}
            </div>
          </section>

          <h2 className="smp-article-subheading">Workforce Enablement: The Capability Layer That Determines Whether AI Delivers</h2>
          <p>
            Technology architecture alone does not produce AI value. The decisive variable in most AI transformations is organizational capability — whether the people who operate, configure, and work alongside AI systems have the skills to do so effectively. This is where many well-resourced AI initiatives stall. The infrastructure is deployed, the use cases are identified, but the workforce lacks the confidence and competence to integrate AI into daily workflows.
          </p>
          <p>
            Structured, certification-aligned workforce enablement programs address this gap directly. The Microsoft AI-102 Azure AI Engineer pathway, and the foundational AI-900 certification, provide organizations with a credentialed curriculum that builds practical capability — not just conceptual awareness. When delivered through intensive, cohort-based programs with hands-on Azure lab environments, these certifications produce practitioners who can design, deploy, and govern AI solutions in real enterprise contexts.
          </p>
          <p>
            The organizations that treat workforce enablement as a strategic investment — rather than a training line item — are the ones that close the gap between AI potential and AI performance most rapidly. Certification creates a common language across technical and business teams. It accelerates onboarding of new AI capabilities. And it builds the institutional knowledge that makes AI systems improvable over time rather than static after deployment.
          </p>

          <h2 className="smp-article-subheading">The Strategic Calculus: What Ecosystem Commitment Enables</h2>
          <p>
            For enterprise leaders evaluating their AI architecture decisions, the case for ecosystem commitment rests on four compounding advantages. First, speed of deployment: integrated platforms reduce the integration work required to launch new AI capabilities, compressing timelines from months to weeks. Second, compliance alignment: shared governance infrastructure across the ecosystem reduces the duplicative compliance work that multi-vendor environments require. Third, cost efficiency: consolidated licensing, unified management tooling, and reduced integration overhead lower the total cost of AI ownership over time. Fourth, ecosystem momentum: as the Microsoft AI ecosystem continues to expand — through OpenAI model releases, Azure AI Foundry enhancements, and Copilot integrations — organizations embedded in the ecosystem absorb new capabilities without requiring architectural rework.
          </p>
          <p>
            None of this is to suggest that ecosystem commitment means technology monoculture. Skilled technology leaders use Microsoft as a foundation while integrating best-in-class capabilities from adjacent providers where warranted. But the distinction between a foundation and a portfolio is decisive. Foundations are built to carry load. Portfolios are assembled to solve immediate problems. At enterprise scale, under the pressure of accelerating AI adoption, the difference between these two orientations determines whether AI transformation compounds or stagnates.
          </p>

          <h2 className="smp-article-subheading">The Leadership Imperative</h2>
          <p>
            The framing of AI as a technology decision has run its course. The executives who are shaping durable competitive advantage in the current environment are treating AI as an organizational architecture decision — one that begins with a deliberate choice about which ecosystem will serve as the foundation for their transformation, and then builds systematically from that foundation through governance design, workforce enablement, and continuous capability development.
          </p>
          <p>
            Strategic Microsoft ecosystem partnerships are not a vendor preference. They are a structural commitment to building AI capability in a way that is governable, scalable, and compoundable over time. For organizations serious about translating AI ambition into enterprise performance, this commitment is not one strategic option among many. It is the defining leadership imperative of the current era.
          </p>
        </div>

        {/* Author bio box */}
        <div style={{
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          padding: "32px",
          marginTop: "60px",
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
        }}>
          <Image
            src="/images/CEO-Deric-Gurley-v5.png"
            alt="N. Jude Nwosu"
            width={128}
            height={128}
            unoptimized
            style={{ width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
          />
          <div>
            <p style={{ fontSize: "16px", fontWeight: 700, color: "#111111", margin: "0 0 4px 0" }}>N. Jude Nwosu</p>
            <p style={{ fontSize: "14px", color: "#2563eb", fontWeight: 600, margin: "0 0 12px 0" }}>Chief Technology Officer, Chamco Digital</p>
            <p style={{ fontSize: "14px", color: "#555555", lineHeight: 1.6, margin: "0 0 16px 0" }}>
              N. Jude Nwosu leads AI and cloud technology strategy at Chamco Digital, designing enterprise-grade AI training programs and cloud solutions for organizations across North America.
            </p>
            <a
              href="https://www.linkedin.com/in/judenwosu/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", textDecoration: "none" }}
              aria-label="LinkedIn profile"
            >
              <div style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#0a66c2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Related Articles */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#111111", margin: 0 }}>Related insights</h2>
          <div style={{ height: "1px", backgroundColor: "#e8e8e8", marginTop: "16px" }} />

          <div className="art-related-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px", marginTop: "40px" }}>
            {[
              {
                image: "/images/Tech-Workers.webp",
                category: "WORKFORCE",
                title: "Closing the Global Tech Skills Gap",
                excerpt: "How Microsoft AI & cloud training programs are powering the next generation of digital leaders.",
                link: "/blog/closing-the-global-tech-skills-gap-how-microsoft-ai-cloud-training-programs-are-powering-the-next-generation-of-digital-leaders",
              },
              {
                image: "/images/Abstract-Shape.webp",
                category: "CLOUD",
                title: "Why Hybrid Cloud Infrastructure Is the Future of Scalable IT",
                excerpt: "The hybrid cloud model offers flexibility, security, and scalability for modern enterprises.",
                link: "/blog/why-hybrid-cloud-infrastructure-is-the-future-of-scalable-it-operations",
              },
              {
                image: "/images/Flowers.webp",
                category: "AI",
                title: "The Future of Enterprise Automation",
                excerpt: "Building resilient hybrid cloud architectures with AI at the core.",
                link: "/blog/the-future-of-enterprise-automation-building-resilient-hybrid-cloud-architectures-with-ai-at-the-core",
              },
            ].map((card, i) => (
              <a
                key={i}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="smp-related-card"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                  overflow: "hidden",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <Image src={card.image} alt={card.title} width={600} height={180} unoptimized style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }} />
                <div style={{ padding: "24px" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "1.5px", fontWeight: 600, color: "#2563eb", textTransform: "uppercase", margin: "0 0 8px 0" }}>
                    {card.category}
                  </p>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111111", margin: "0 0 8px 0", lineHeight: 1.4 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "13px", fontWeight: 300, color: "#555555", margin: "0 0 16px 0", lineHeight: 1.6 }}>
                    {card.excerpt}
                  </p>
                  <span className="smp-read-more">Read more →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Bottom CTA */}
      <section style={{ backgroundColor: "#050d1a", padding: "80px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, color: "#ffffff", margin: 0, lineHeight: 1.2 }}>
            Ready to build your AI ecosystem strategy?
          </h2>
          <p style={{ fontSize: "16px", fontWeight: 300, color: "#a0a0a0", marginTop: "16px", lineHeight: 1.7, marginBottom: 0 }}>
            Schedule a consultation with Chamco Digital&apos;s AI and cloud experts to design the ecosystem architecture your organization needs.
          </p>
          <a
            href="/contact"
            className="smp-cta-btn"
            style={{
              display: "inline-block",
              marginTop: "32px",
              padding: "16px 40px",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 600,
              borderRadius: "4px",
              textDecoration: "none",
            }}
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
