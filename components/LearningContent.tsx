"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */

const WHY_LEARN_CARDS = [
  {
    title: "Microsoft AI 103 Training",
    body: "Launch your AI career with our 12-week, live online program covering Microsoft Azure AI Fundamentals (AI-901) and Microsoft Azure AI Engineer Associate (AI-103). Gain foundational knowledge, then advance to real-world AI engineering through hands-on projects—guided by Microsoft-certified experts to build job-ready, in-demand skills.",
  },
  {
    title: "Anthropic — Claude Code/Cowork Training",
    body: "Master intelligent AI agent development with Claude AI in this hands-on course. Learn to design advanced agents, integrate automation, and enhance decision-making using cutting-edge GenAI. Gain practical experience with Copilot and workflows while building real-world, voice-enabled solutions that elevate your AI capabilities and drive business impact.",
  },
  {
    title: "AI Workforce Enablement Programs",
    body: "AI+ Workforce Enablement Programs equip organizations with role-based AI skills, combining hands-on training, certifications, and expert-led instruction to boost productivity and career growth. These programs deliver flexible, customized learning paths that help teams adopt AI effectively, close skill gaps, and drive measurable business outcomes in an AI-driven workplace.",
  },
  {
    title: "Microsoft 365 Copilot Training",
    body: "Microsoft 365 Copilot Training equips professionals with practical AI skills to transform productivity across Word, Excel, PowerPoint, Outlook, and Teams. Through hands-on labs and expert-led instruction, learners master prompt design, workflow automation, and real-world use cases to streamline tasks, enhance collaboration, and drive smarter business outcomes.",
  },
];

const AZURE_ACCORDION = [
  { title: "Discover Chamco Digital's Flagship Microsoft AI Training Program", body: "Chamco Digital offers a comprehensive flagship Microsoft AI Training Program designed to equip individuals and professionals with cutting-edge artificial intelligence capabilities. Through structured learning paths aligned with Microsoft certifications, participants gain practical knowledge and hands-on skills to thrive in the evolving AI landscape and build enterprise-ready solutions." },
  { title: "Azure AI-901: Microsoft Azure AI Fundamentals", body: "AI-901 is Microsoft's foundational AI certification designed for individuals who want to start working with AI solutions built on Azure. The exam assesses your ability to demonstrate conceptual knowledge and practical understanding of AI on Azure, including: understanding core cloud concepts such as services and resource deployments; using Microsoft Foundry to deploy models and implement single-agent solutions; recognizing how client applications consume AI models and services; and understanding Python code examples that call AI models and services. This certification is suitable for aspiring developers beginning to incorporate AI capabilities into applications." },
  { title: "AI-103: Azure AI Apps and Agents Developer Associate", body: "AI-103 is Microsoft's intermediate-level certification validating expertise in designing, developing, and deploying advanced Azure AI solutions using Python and Microsoft Foundry. As a candidate, you are an Azure AI engineer who builds, manages, and deploys agents and AI solutions that take advantage of Microsoft Foundry. You should have experience developing apps using Python and be familiar with the capabilities of general AI, generative AI, and Azure services. The certification covers five core responsibility areas: planning and managing Azure AI solutions; implementing generative AI and agentic solutions; implementing computer vision solutions; implementing text analysis solutions; and implementing information extraction solutions. Passing score: 700." },
  { title: "Why Choose Chamco Digital", body: "Enroll today to access expert-led training, hands-on Azure labs, and certification support. Whether you are starting your AI journey with AI-901 or advancing to enterprise AI engineering with AI-103, Chamco Digital's programs deliver flexible, instructor-led pathways to success in Microsoft Azure AI technologies — with a 12-week structured curriculum designed for real-world impact." },
];

const MOSAIC_CARDS: { bg: string | null; bgImage: string | null; title: string; summary: string }[] = [
  { bg: "#3d5afe", bgImage: null, title: "Training Program Overview", summary: "12-week bootcamp with two live sessions weekly (2 hours teaching + 30 min Q&A), covering Python, data analytics, Azure generative/agentic AI, and hands-on labs for real-world AI solutions." },
  { bg: "#7b1fa2", bgImage: null, title: "Python Foundations", summary: "Build strong Python skills: syntax, scripts, logic, loops, functions, data structures, OOP (classes, inheritance), Jupyter Notebooks, file handling (CSV/JSON), exceptions, and a mini data-processing project." },
  { bg: "#e53935", bgImage: null, title: "Data Analytics Essentials", summary: "Master NumPy arrays, broadcasting, vectorization; Pandas data loading, cleaning, transformation; exploratory analysis with grouping, merging, pivoting, statistics; Matplotlib visualizations and intro to scikit-learn ML models." },
  { bg: null, bgImage: "/images/Continuous-Integration-Continuous-Delivery-CI_CD-1024x683.png", title: "Generative AI Basics", summary: "Select/deploy Azure OpenAI models; build chat apps with completions/memory; implement RAG pipelines indexing documents via embeddings/Azure AI Search for custom data-powered generative applications." },
  { bg: "#f9a825", bgImage: null, title: "Responsible AI & Evaluation", summary: "Apply Azure content safety filters and responsible policies; evaluate generative outputs for groundedness, coherence, relevance using Azure tools to ensure high-quality, safe AI deployments." },
  { bg: null, bgImage: "/images/Data-Governance-Security.png", title: "AI Agents Mastery", summary: "Learn agent planning, tools, memory; build single/multi-agents with API calls, roles, collaboration via Azure AI Foundry; advanced integrations using MCP and Semantic Kernel SDK." },
  { bg: "#00695c", bgImage: null, title: "Advanced AI Capabilities", summary: "Develop NLP (sentiment/NER), QA/custom classification; speech/audio apps; image analysis/OCR/face detection; generative vision/multimodal; enterprise Document Intelligence with RAG/agents capstone, plus AI-103 certification prep." },
];

/* ═══════════════════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════════════════ */

function LightAccordion({ items }: { items: { title: string; body: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ borderTop: "1px solid #e5e7eb" }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: "1px solid #e5e7eb" }}>
          <button
            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", textAlign: "left", background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span style={{ color: "#111", fontWeight: 600, fontSize: "14px", lineHeight: "1.4", paddingRight: "24px" }}>{item.title}</span>
            <span style={{ color: "#2563eb", fontSize: "20px", fontWeight: 300, flexShrink: 0, width: "20px", textAlign: "center", lineHeight: 1 }}>
              {open === i ? "−" : "+"}
            </span>
          </button>
          <div style={{ maxHeight: open === i ? "600px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.7", paddingBottom: "20px" }}>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MosaicCard({ card, height }: { card: typeof MOSAIC_CARDS[0]; height: number }) {
  const style: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    height: `${height}px`,
    flex: 1,
    cursor: "default",
    ...(card.bgImage
      ? { backgroundImage: `url('${card.bgImage}')`, backgroundSize: "cover", backgroundPosition: "center" }
      : { backgroundColor: card.bg ?? "#333" }),
  };
  return (
    <div className="mosaic-card" style={style}>
      {card.bgImage && (
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.45)" }} />
      )}
      <div className="mc-title" style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", zIndex: 2 }}>
        <h3 style={{ color: "white", fontWeight: 700, fontSize: "20px", lineHeight: "1.2" }}>{card.title}</h3>
      </div>
      <div className="mc-summary" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", zIndex: 2 }}>
        <p style={{ color: "white", fontSize: "15px", lineHeight: "1.6", textAlign: "center", maxWidth: "80%" }}>{card.summary}</p>
      </div>
    </div>
  );
}

/* ─── Hero auto-slider (right column) ───────────────────── */
function HeroSlider() {
  const [active, setActive] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const activateSlide = (index: number) => {
    setActive(index);
    setProgressKey((prev) => prev + 1);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % WHY_LEARN_CARDS.length);
      setProgressKey((prev) => prev + 1);
    }, 10000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % WHY_LEARN_CARDS.length);
      setProgressKey((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="relative h-full flex flex-col">
      {/* Progress bar — key forces CSS animation restart on slide change */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          backgroundColor: "rgba(255,255,255,0.15)",
          zIndex: 10,
        }}
      >
        <div
          key={progressKey}
          style={{
            height: "100%",
            backgroundColor: "#2563eb",
            animation: "progressFill 10s linear forwards",
          }}
        />
      </div>

      {/* Accordion list — vertically centred */}
      <div
        className="flex-1 flex flex-col justify-center"
        style={{ padding: "60px 48px" }}
      >
        {WHY_LEARN_CARDS.map((card, i) => (
          <div key={i}>
            {i > 0 && (
              <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.2)", margin: "0" }} />
            )}
            <div style={{ paddingTop: "18px", paddingBottom: "18px" }}>
              <div className="flex items-center justify-between">
                <h3
                  className="font-bold text-white pr-4 leading-snug"
                  style={{ fontSize: "20px" }}
                >
                  {card.title}
                </h3>
                {active === i ? (
                  <span
                    className="text-white flex-shrink-0 leading-none font-light"
                    style={{ fontSize: "24px" }}
                  >
                    −
                  </span>
                ) : (
                  <button
                    onClick={() => activateSlide(i)}
                    className="text-white flex-shrink-0 leading-none font-light"
                    style={{
                      fontSize: "24px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      lineHeight: 1,
                    }}
                    aria-label={`Open ${card.title}`}
                  >
                    +
                  </button>
                )}
              </div>
              {active === i && (
                <p
                  key={`body-${progressKey}`}
                  className="text-white/85 leading-relaxed"
                  style={{
                    fontSize: "14px",
                    marginTop: "10px",
                    animation: "bodyFade 0.4s ease-out",
                  }}
                >
                  {card.body}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   COURSE CARD COMPONENT
═══════════════════════════════════════════════════════════ */

function CourseCard({ course }: { course: {
  tag: string; tagColor: string; tagBg: string; title: string;
  summary: string; duration: string; level: string; format: string;
  price: string; accent: string; link: string; highlights: string[];
}}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#ffffff',
        border: `1px solid ${hovered ? course.accent : '#e0e0e0'}`,
        borderRadius: '12px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'default',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Tag */}
      <span style={{
        display: 'inline-block',
        backgroundColor: course.tagBg,
        color: course.tagColor,
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '1.5px',
        padding: '4px 10px',
        borderRadius: '4px',
        alignSelf: 'flex-start',
      }}>{course.tag}</span>

      {/* Title */}
      <h3 style={{
        fontSize: '16px',
        fontWeight: 700,
        color: '#111111',
        lineHeight: 1.4,
        margin: 0,
      }}>{course.title}</h3>

      {/* Summary */}
      <p style={{
        fontSize: '13px',
        fontWeight: 300,
        color: '#555555',
        lineHeight: 1.7,
        margin: 0,
        flex: 1,
      }}>{course.summary}</p>

      {/* Highlights */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {course.highlights.map((h, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '12px', fontWeight: 500, color: '#333333',
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="7" fill={course.accent} opacity="0.15"/>
              <path d="M4 7l2 2 4-4" stroke={course.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {h}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#f0f0f0' }} />

      {/* Meta info */}
      <div style={{
        display: 'flex', gap: '16px', flexWrap: 'wrap',
      }}>
        {[
          { label: '⏱', value: course.duration },
          { label: '📶', value: course.level },
          { label: '🌐', value: course.format },
        ].map((meta, i) => (
          <span key={i} style={{
            fontSize: '11px', fontWeight: 400, color: '#777777',
          }}>
            {meta.label} {meta.value}
          </span>
        ))}
      </div>

      {/* Price + CTA */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: course.price ? 'space-between' : 'flex-end',
        marginTop: 'auto',
        paddingTop: '8px',
      }}>
        {course.price && (
          <span style={{
            fontSize: '18px',
            fontWeight: 800,
            color: '#111111',
          }}>{course.price}</span>
        )}

        <a
          href={course.link}
          style={{
            backgroundColor: hovered ? course.accent : '#ffffff',
            color: hovered ? '#ffffff' : course.accent,
            border: `2px solid ${course.accent}`,
            padding: '10px 20px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
          }}
        >
          View Course →
        </a>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */

export default function LearningContent() {
  const [azureModalOpen, setAzureModalOpen] = useState(false);
  const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);

  return (
    <main>
      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes bodyFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .mosaic-card .mc-title {
          opacity: 1;
          transition: opacity 0.25s ease;
        }
        .mosaic-card:hover .mc-title {
          opacity: 0;
        }
        .mosaic-card .mc-summary {
          opacity: 0;
          transition: opacity 0.3s ease 0.1s;
        }
        .mosaic-card:hover .mc-summary {
          opacity: 1;
        }
        .lcd-highlight-card {
          background: #ffffff;
          border: 1px solid #e8e8e8;
          border-radius: 12px;
          padding: 32px;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .lcd-highlight-card:hover {
          transform: translateY(-6px);
          border-color: #2563eb;
          box-shadow: 0 12px 32px rgba(37,99,235,0.12);
        }
        @media (max-width: 768px) {
          .lcd-course-grid,
          .lcd-three-col,
          .lcd-stats-grid,
          .lcd-two-col {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .lcd-course-grid,
          .lcd-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      {/* ════════════════════════════════════════
          HERO — Two-column layout
      ════════════════════════════════════════ */}
      <section
        className="svc-hero-row"
        style={{
          backgroundColor: "#050d1a",
          height: "100vh",
          display: "flex",
          minHeight: "640px",
          paddingTop: "70px",
          paddingBottom: "70px",
        }}
      >
        {/* Left column — 50% */}
        <div
          className="flex items-center svc-hero-text"
          style={{ width: "50%", paddingLeft: "6%", paddingRight: "4%" }}
        >
          <div>
            <p className="text-white" style={{ fontSize: "17px", marginBottom: "35px" }}>
              Master Cutting-Edge AI
            </p>
            <h1
              className="font-bold"
              style={{ fontSize: "clamp(36px, 4vw, 52px)", lineHeight: "1.05", marginBottom: "8px", color: '#5ce7ff' }}
            >
              Learn. Advance.
            </h1>
            <span style={{
              display: 'block',
              fontSize: 'clamp(24px, 4vw, 52px)',
              fontWeight: 700,
              color: '#5ce7ff',
              lineHeight: 1.15,
              marginBottom: '8px',
            }}>
              Own the digital edge
            </span>
            <span style={{
              display: 'block',
              fontSize: 'clamp(24px, 4vw, 52px)',
              fontWeight: 700,
              color: '#5ce7ff',
              lineHeight: 1.15,
              marginBottom: '35px',
            }}>
              Live, online. Anywhere.
            </span>
            <p
              className="text-white"
              style={{ fontSize: "clamp(19px, 2.38vw, 31px)", lineHeight: "1.2" }}
            >
              Elite AI training for the modern world.
            </p>
            <p
              className="text-gray-300 leading-relaxed"
              style={{ fontSize: "15px", maxWidth: "480px", marginTop: "24px" }}
            >
              Providing in-depth Microsoft AI, Claude Code &amp; Cowork and cloud technology training designed to empower
              individuals and organizations with the critical skills needed to innovate, compete,
              and thrive in today&apos;s digital economy. This 12 week AI certification program
              is priced at <strong>$2,499</strong>
            </p>
            <a
              href="https://www.chamco.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-bold uppercase tracking-wider text-sm text-white transition-colors hover:bg-white hover:text-[#050d1a]"
              style={{
                marginTop: "32px",
                border: "2px solid white",
                padding: "14px 32px",
                borderRadius: "4px",
              }}
            >
              Start Today
            </a>
          </div>
        </div>

        {/* Right column — 50% */}
        <div
          className="relative overflow-hidden svc-hero-slider"
          style={{
            width: "50%",
            backgroundImage: "url('/images/get-in.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} />
          <div className="relative h-full" style={{ zIndex: 10 }}>
            <HeroSlider />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MARQUEE
      ════════════════════════════════════════ */}
      <section
        onMouseEnter={() => setIsMarqueeHovered(true)}
        onMouseLeave={() => setIsMarqueeHovered(false)}
        style={{ backgroundColor: "#0000FF", borderTop: "1px solid #1e3a5f", borderBottom: "1px solid #1e3a5f", overflow: "hidden", paddingTop: "20px", paddingBottom: "20px" }}
      >
        <div
          style={{
            display: "inline-flex",
            whiteSpace: "nowrap",
            animation: "marqueeScroll 30s linear infinite",
            animationPlayState: isMarqueeHovered ? "paused" : "running",
          }}
        >
          {[0, 1].map((n) => (
            <span key={n} style={{ display: "inline-flex", alignItems: "center" }}>
              <span
                className="font-bold uppercase"
                style={{ fontSize: "16px", letterSpacing: "2px", color: "#ffffff" }}
              >
                Learn. Build. Lead in the Age of AI.
              </span>
              <span style={{ fontSize: "16px", letterSpacing: "2px", color: "#ffffff", margin: "0 24px" }}>—</span>
              <span
                style={{ fontSize: "16px", letterSpacing: "2px", color: "#ffffff" }}
              >
                Connect with us to explore our comprehensive AI training program
              </span>
              <span style={{ display: "inline-block", width: "75px" }} />
            </span>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — Leverage our AI (white)
      ════════════════════════════════════════ */}

      {/* Part A — full-width heading */}
      <section style={{ backgroundColor: "#ffffff", paddingTop: "110px", paddingBottom: "110px", paddingLeft: "50px", paddingRight: "50px" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <p style={{ color: "#111111", fontSize: "clamp(24px, 3vw, 42px)", fontWeight: 300, lineHeight: 1.35 }}>
            Leverage our <strong>AI, Claude Code &amp; Cowork, and premium AI+ Workforce Enablement</strong> training programs to transform your business or educational institution while advancing personal development and enhancing efficiency, innovation, and operational performance.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          OUR PROGRAMS — 4 course cards
      ════════════════════════════════════════ */}
      <section style={{
        backgroundColor: '#ffffff',
        padding: '80px 6%',
        position: 'relative',
      }}>
        {/* Section header */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{
            fontSize: '12px', fontWeight: 700, letterSpacing: '3px',
            textTransform: 'uppercase', color: '#2563eb',
            display: 'block', marginBottom: '12px',
          }}>OUR PROGRAMS</span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800,
            color: '#111111', margin: '0 0 16px 0', lineHeight: 1.15,
          }}>Explore Our Top Programs</h2>
          <p style={{
            fontSize: '16px', fontWeight: 300, color: '#555555',
            maxWidth: '580px', lineHeight: 1.7, margin: 0,
          }}>
            Industry-aligned AI training programs designed to build certified, job-ready professionals for the digital economy.
          </p>
        </div>

        {/* 4 course cards grid */}
        <div className="lcd-course-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
        }}>
          {[
            {
              tag: 'MICROSOFT CERTIFICATION',
              tagColor: '#0078d4',
              tagBg: '#e8f2fb',
              title: 'Microsoft AI-103: Azure AI Apps and Agents Developer Associate',
              summary: 'Master building, deploying, and managing enterprise-grade AI solutions using Azure AI Foundry, Azure OpenAI, and Microsoft Copilot. Earn the Microsoft Certified: Azure AI Apps and Agents Developer Associate credential in 12 weeks.',
              duration: '12 Weeks',
              level: 'Intermediate',
              format: 'Live Online',
              price: '$2,499',
              accent: '#0078d4',
              link: '/microsoft-ai-103-training',
              highlights: ['Azure AI Foundry', 'AI Agents & RAG', 'AI-103 Certification'],
            },
            {
              tag: 'ANTHROPIC',
              tagColor: '#c26a20',
              tagBg: '#fdf3e8',
              title: 'Anthropic: Claude Code & Cowork Training',
              summary: 'Build intelligent AI agents with Claude AI. Learn advanced agent design, automation integration, GenAI techniques, and Claude Code for terminal-based enterprise development. Hands-on, project-driven curriculum.',
              duration: '4 Weeks',
              level: 'Intermediate',
              format: 'Live Online',
              price: '',
              accent: '#c26a20',
              link: '/claude-code-cowork',
              highlights: ['Claude AI Agents', 'Automation & GenAI', 'Enterprise Deployment'],
            },
            {
              tag: 'MICROSOFT 365',
              tagColor: '#107c41',
              tagBg: '#e8f5ee',
              title: 'Microsoft 365 Copilot Training',
              summary: 'Master AI-powered productivity across Word, Excel, PowerPoint, Outlook, and Teams. Learn prompt engineering, workflow automation, and enterprise Copilot deployment through hands-on labs with certified instructors.',
              duration: '3 Weeks',
              level: 'Beginner–Intermediate',
              format: 'Live Online',
              price: '',
              accent: '#107c41',
              link: '/microsoft-365-copilot-training',
              highlights: ['All M365 Apps', 'Prompt Engineering', 'Workflow Automation'],
            },
            {
              tag: 'AI CERTS',
              tagColor: '#7c3aed',
              tagBg: '#f3eeff',
              title: 'AI+ Workforce Enablement Training Programs',
              summary: 'Role-based AI certification programs covering 20 AI+ tracks — from AI+ Everyone™ to AI+ Architect™. Customizable cohort-based delivery designed to close AI skills gaps across every industry and professional role.',
              duration: 'Flexible',
              level: 'All Levels',
              format: 'Live Online',
              price: '',
              accent: '#7c3aed',
              link: '/AI+-Workforce-Enablement-Courses',
              highlights: ['20 AI+ Tracks', 'All Industries', 'Customizable'],
            },
          ].map((course, i) => (
            <CourseCard key={i} course={course} />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 — Master Azure AI Skills
      ════════════════════════════════════════ */}

      {/* Azure Skills Modal */}
      {azureModalOpen && (
        <div
          style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
          onClick={(e) => { if (e.target === e.currentTarget) setAzureModalOpen(false); }}
        >
          <div style={{ backgroundColor: "white", borderRadius: "8px", maxWidth: "680px", width: "100%", maxHeight: "80vh", overflowY: "auto", padding: "40px", position: "relative" }}>
            <button
              onClick={() => setAzureModalOpen(false)}
              style={{ position: "absolute", top: "14px", right: "18px", fontSize: "28px", color: "#555", background: "none", border: "none", cursor: "pointer", lineHeight: 1 }}
            >
              ×
            </button>
            <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111", marginBottom: "8px", paddingRight: "40px" }}>
              Our Flagship AI Training Program
            </h2>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: "1.6", marginBottom: "24px" }}>
              Discover Chamco Digital&apos;s Flagship Microsoft AI Training Program
            </p>
            <LightAccordion items={AZURE_ACCORDION} />
          </div>
        </div>
      )}

      {/* Part A — light grey header */}
      <section style={{ backgroundColor: "#ebebeb", paddingTop: "80px", paddingBottom: "110px" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] mb-5">
            THE CORNERSTONE
          </p>
          <h2 style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300, color: "#111", lineHeight: 1.1 }}>
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Master the ideal</span>
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>economy with AI</span>
          </h2>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY CHOOSE US
      ════════════════════════════════════════ */}
      <section style={{ background: '#f5f5f5', padding: '120px 6%' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#2563eb', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
              WHY CHOOSE US
            </p>
            <h2 style={{ fontSize: '48px', fontWeight: 800, color: '#111111', lineHeight: 1.1, margin: 0 }}>
              Everything You Need to Launch Your AI Career
            </h2>
          </div>

          <div className="lcd-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="6" width="24" height="22" rx="3" />
                    <line x1="10" y1="4" x2="10" y2="8" />
                    <line x1="22" y1="4" x2="22" y2="8" />
                    <line x1="4" y1="13" x2="28" y2="13" />
                    <line x1="10" y1="19" x2="14" y2="19" />
                    <line x1="18" y1="19" x2="22" y2="19" />
                    <line x1="10" y1="24" x2="14" y2="24" />
                  </svg>
                ),
                title: '12-Week Structured Program',
                body: 'A carefully sequenced AI-103 curriculum that builds skills progressively from Azure AI fundamentals to advanced agent development and deployment.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4h8l2 6-3 2c1 2 2 4 2 6H11c0-2 1-4 2-6L10 10z" fill="rgba(37,99,235,0.1)" />
                    <path d="M11 18v4a5 5 0 0010 0v-4" />
                    <line x1="16" y1="22" x2="16" y2="26" />
                  </svg>
                ),
                title: 'Hands-On Azure Labs',
                body: 'Real lab environments on Microsoft Azure — not simulations. Build, deploy, and test AI solutions in production-grade cloud infrastructure.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 20l6-14h12l6 14H4z" fill="rgba(37,99,235,0.1)" />
                    <path d="M10 20v4a2 2 0 002 2h8a2 2 0 002-2v-4" />
                    <line x1="16" y1="6" x2="16" y2="14" />
                    <circle cx="16" cy="16" r="2" fill="#2563eb" stroke="none" />
                  </svg>
                ),
                title: 'Microsoft Certification Prep',
                body: 'Curriculum fully aligned with Microsoft AI-103 exam objectives. Graduate with industry-recognized credentials that open global career doors.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="8" width="24" height="18" rx="2" fill="rgba(37,99,235,0.1)" />
                    <path d="M10 8V6a2 2 0 012-2h8a2 2 0 012 2v2" />
                    <line x1="10" y1="16" x2="22" y2="16" />
                    <line x1="10" y1="20" x2="18" y2="20" />
                  </svg>
                ),
                title: 'Career-Ready Portfolio',
                body: 'Build a professional portfolio of real AI projects demonstrating expertise in generative AI, agents, computer vision, and document intelligence.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="16" cy="16" r="12" />
                    <ellipse cx="16" cy="16" rx="5" ry="12" />
                    <line x1="4" y1="16" x2="28" y2="16" />
                    <line x1="5" y1="10" x2="27" y2="10" />
                    <line x1="5" y1="22" x2="27" y2="22" />
                  </svg>
                ),
                title: 'Global Opportunities',
                body: 'AI-103 certification positions you for high-demand roles globally — Azure AI Engineer, AI Developer, and Cloud AI Specialist roles are in critical short supply.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="4" fill="rgba(37,99,235,0.1)" />
                    <circle cx="21" cy="11" r="4" fill="rgba(37,99,235,0.1)" />
                    <path d="M3 27c0-4.4 3.6-8 8-8" />
                    <path d="M21 19c4.4 0 8 3.6 8 8" />
                    <path d="M11 19c2-.6 4-.6 6 0 1.2.4 2.3 1 3.2 1.8" />
                  </svg>
                ),
                title: 'Expert Instructor-Led Training',
                body: 'Learn live from Microsoft-certified professionals through interactive sessions with real-time Q&A, mentorship, and personalized feedback.',
              },
            ].map(card => (
              <div key={card.title} className="lcd-highlight-card">
                <div style={{ marginBottom: '20px' }}>{card.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', margin: '0 0 12px 0' }}>{card.title}</h3>
                <p style={{ fontSize: '14.5px', color: '#666666', lineHeight: 1.75, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 5 — Training Program Overview
      ════════════════════════════════════════ */}

      {/* Part A — white text block */}
      <section style={{ backgroundColor: "#ffffff", paddingTop: "60px", paddingBottom: "110px" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <h2 style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 300, color: "#111", lineHeight: 1.25, marginBottom: "20px" }}>
            Driving digital transformation + AI
          </h2>
          <p style={{ color: "#444", fontSize: "16px", lineHeight: "1.7", maxWidth: "780px" }}>
            Leverage our hands-on bootcamp: our training includes developing generative AI apps, building AI agents, and solutions that implement knowledge connections and tools in your agentic applications. It also covers multimodal capabilities and understanding of complex content.
          </p>
        </div>
      </section>

      {/* Part B — mosaic card grid */}
      <section style={{ backgroundColor: "#ffffff", paddingBottom: "110px" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          {/* Row 1: 2 tall cards */}
          <div style={{ display: "flex", gap: "4px" }}>
            <MosaicCard card={MOSAIC_CARDS[0]} height={420} />
            <MosaicCard card={MOSAIC_CARDS[1]} height={420} />
          </div>
          {/* Row 2: 3 medium cards */}
          <div style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
            <MosaicCard card={MOSAIC_CARDS[2]} height={320} />
            <MosaicCard card={MOSAIC_CARDS[3]} height={320} />
            <MosaicCard card={MOSAIC_CARDS[4]} height={320} />
          </div>
          {/* Row 3: 2 tall cards */}
          <div style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
            <MosaicCard card={MOSAIC_CARDS[5]} height={420} />
            <MosaicCard card={MOSAIC_CARDS[6]} height={420} />
          </div>
        </div>
      </section>

      {/* AI Training Global Impact */}
      <section style={{
        backgroundColor: '#050d1a',
        paddingTop: '100px',
        paddingLeft: '6%',
        paddingRight: '6%',
        paddingBottom: '110px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(92,231,255,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{
              fontSize: '12px', fontWeight: 700, letterSpacing: '3px',
              textTransform: 'uppercase', color: '#5ce7ff',
              display: 'block', marginBottom: '20px',
            }}>GLOBAL IMPACT</span>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800,
              color: '#ffffff', margin: '0 0 24px 0', lineHeight: 1.1,
            }}>
              AI training is transforming the global economy
            </h2>
            <p style={{
              fontSize: '18px', fontWeight: 300,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '640px', margin: '0 auto', lineHeight: 1.7,
            }}>
              The data is clear — professionals and organizations that invest in AI skills today are building the competitive advantage that will define the next decade.
            </p>
          </div>

          <div className="lcd-stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2px',
            marginBottom: '80px',
            backgroundColor: 'rgba(255,255,255,0.06)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            {[
              { stat: '$4.4T', label: 'Global AI market value projected by 2030', source: 'Grand View Research, 2024' },
              { stat: '97M', label: 'New AI-related jobs expected globally by 2025', source: 'World Economic Forum' },
              { stat: '40%', label: 'Productivity increase for AI-skilled workers vs peers', source: 'McKinsey Global Institute' },
              { stat: '$200K+', label: 'Average salary for certified Azure AI Engineers in the US', source: 'LinkedIn Salary Insights, 2024' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '48px 32px',
                backgroundColor: 'rgba(255,255,255,0.03)',
                textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{
                  fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900,
                  color: '#5ce7ff', lineHeight: 1, marginBottom: '16px',
                }}>{item.stat}</div>
                <p style={{
                  fontSize: '14px', fontWeight: 300,
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.6, margin: '0 0 12px 0',
                }}>{item.label}</p>
                <span style={{
                  fontSize: '11px', fontWeight: 400,
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.5px',
                }}>{item.source}</span>
              </div>
            ))}
          </div>

          <div className="lcd-two-col" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            marginBottom: '80px',
          }}>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '40px',
            }}>
              <span style={{
                fontSize: '11px', fontWeight: 700, letterSpacing: '2px',
                textTransform: 'uppercase', color: '#5ce7ff',
                display: 'block', marginBottom: '20px',
              }}>WORKFORCE TRANSFORMATION</span>
              <h3 style={{
                fontSize: '24px', fontWeight: 700, color: '#ffffff',
                margin: '0 0 20px 0', lineHeight: 1.3,
              }}>
                85 million jobs will be displaced — 97 million new ones will emerge
              </h3>
              <p style={{
                fontSize: '15px', fontWeight: 300,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.75, margin: '0 0 24px 0',
              }}>
                The World Economic Forum&apos;s Future of Jobs Report identifies AI and cloud skills as the single most critical capability gap facing organizations globally. Workers who upskill now are not just future-proofing their careers — they are positioning themselves for roles that command significant salary premiums and offer global mobility.
              </p>
              <div style={{
                paddingTop: '24px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                fontSize: '12px', color: 'rgba(255,255,255,0.4)',
              }}>Source: World Economic Forum — Future of Jobs Report 2023</div>
            </div>

            <div style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '40px',
            }}>
              <span style={{
                fontSize: '11px', fontWeight: 700, letterSpacing: '2px',
                textTransform: 'uppercase', color: '#5ce7ff',
                display: 'block', marginBottom: '20px',
              }}>ENTERPRISE IMPACT</span>
              <h3 style={{
                fontSize: '24px', fontWeight: 700, color: '#ffffff',
                margin: '0 0 20px 0', lineHeight: 1.3,
              }}>
                Organizations with AI-trained workforces outperform by 3.5×
              </h3>
              <p style={{
                fontSize: '15px', fontWeight: 300,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.75, margin: '0 0 24px 0',
              }}>
                A Boston Consulting Group study found that companies with comprehensive AI workforce enablement programs achieve 3.5× higher revenue growth, 2× faster time-to-market, and significantly lower operational costs compared to industry peers without structured AI training investments.
              </p>
              <div style={{
                paddingTop: '24px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                fontSize: '12px', color: 'rgba(255,255,255,0.4)',
              }}>Source: Boston Consulting Group — AI at Scale Report 2024</div>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '60px 40px',
            backgroundColor: 'rgba(37,99,235,0.1)',
            border: '1px solid rgba(37,99,235,0.2)',
            borderRadius: '16px',
          }}>
            <h3 style={{
              fontSize: '28px', fontWeight: 700, color: '#ffffff',
              margin: '0 0 16px 0',
            }}>
              The opportunity is now. The window is closing.
            </h3>
            <p style={{
              fontSize: '16px', fontWeight: 300,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '560px', margin: '0 auto 32px',
              lineHeight: 1.7,
            }}>
              Every quarter without AI skills is a quarter your competitors pull further ahead. Join the professionals and organizations already building their AI advantage with Chamco Digital.
            </p>
            <a
              href="/learning-chamcodigital"
              style={{
                display: 'inline-block',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                padding: '16px 40px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
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
              Enroll in Our AI Training Program
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 7 — Bottom CTA Banner
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
          paddingBottom: "110px",
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
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
}
