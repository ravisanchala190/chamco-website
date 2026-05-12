'use client'

export const dynamic = 'force-dynamic'

import { useEffect } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */

const BENEFITS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4L2 11l14 7 14-7-14-7z" />
        <path d="M2 11v9" />
        <path d="M8 14.5v6c0 2.5 3.6 4.5 8 4.5s8-2 8-4.5v-6" />
      </svg>
    ),
    title: 'Certified, Recognized Skills',
    body: 'Earn globally recognized Microsoft certifications that validate your AI expertise and open doors to high-demand roles across industries.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4,24 10,16 16,19 24,10 28,13" />
        <polyline points="22,10 28,10 28,16" />
        <line x1="4" y1="28" x2="28" y2="28" />
      </svg>
    ),
    title: 'Accelerated Career Growth',
    body: 'Professionals with AI certifications command higher salaries and advance faster. AI+ training positions you at the forefront of the digital economy.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="12" width="24" height="16" rx="2" />
        <path d="M10 12V9a6 6 0 0 1 12 0v3" />
        <line x1="16" y1="18" x2="16" y2="22" />
        <circle cx="16" cy="18" r="1.5" fill="#2563eb" stroke="none" />
      </svg>
    ),
    title: 'Enterprise-Ready Outcomes',
    body: 'Programs are designed for immediate workplace application — every skill learned translates directly to business impact from day one.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="9" r="4" />
        <circle cx="22" cy="11" r="3" />
        <path d="M4 26c0-4 3.6-7 8-7s8 3 8 7" />
        <path d="M22 14c2.8 0 5 2 5 5" />
      </svg>
    ),
    title: 'Applicable Across All Industries',
    body: 'Whether you work in healthcare, finance, manufacturing, or public sector — AI skills are now essential in every professional domain.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" />
        <polyline points="16,9 16,16 21,19" />
      </svg>
    ),
    title: 'Live Online, Anywhere',
    body: 'Attend expert-led live sessions from anywhere in the world. Flexible scheduling accommodates professionals and organizations of all sizes.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3L5 7v9c0 6.6 4.8 12.8 11 14.4C22.2 28.8 27 22.6 27 16V7L16 3z" />
        <polyline points="11,16 14,19 21,12" />
      </svg>
    ),
    title: 'Microsoft-Authorized Training',
    body: 'All programs are delivered in alignment with official Microsoft certification pathways by certified instructors with real-world enterprise experience.',
  },
]

const COURSES = [
  { accent: '#2563eb', category: 'AI+ FOR ALL', title: 'AI+ Everyone™', description: 'Foundational AI literacy for every professional. Understand how AI works, how to use AI tools effectively, and how to apply AI thinking to solve everyday business challenges across any role or industry.', duration: '2 Days', link: '/images/AI+Everyone™.pdf' },
  { accent: '#7c3aed', category: 'MARKETING', title: 'AI+ Marketing™', description: 'Master AI-powered marketing strategies including content generation, campaign optimization, audience targeting, and data-driven decision making to transform marketing performance and ROI.', duration: '2 Days', link: '/images/AI+Marketing™.pdf' },
  { accent: '#0891b2', category: 'LEGAL', title: 'AI+ Legal™', description: 'Equip legal professionals with AI skills for contract analysis, legal research automation, compliance monitoring, and document review — reducing time and cost while improving accuracy.', duration: '2 Days', link: '/images/AI+Legal™.pdf' },
  { accent: '#059669', category: 'ETHICS', title: 'AI+ Ethics™', description: 'Develop critical understanding of responsible AI principles including fairness, transparency, accountability, and bias mitigation — essential for any professional working with AI systems.', duration: '2 Days', link: '/images/AI+Ethics™.pdf' },
  { accent: '#dc2626', category: 'RESEARCH', title: 'AI+ Researcher™', description: 'Leverage AI tools to accelerate research workflows — from literature review and data analysis to hypothesis generation and research synthesis across academic and enterprise environments.', duration: '2 Days', link: '/images/AI+Researcher™.pdf' },
  { accent: '#d97706', category: 'POLICY', title: 'AI+ Policy Maker™', description: 'Build AI governance and policy expertise for public sector leaders. Understand AI regulation, ethical frameworks, risk assessment, and how to design effective AI policy for government and institutions.', duration: '2 Days', link: '/images/AI+PolicyMaker™.pdf' },
  { accent: '#2563eb', category: 'HEALTHCARE', title: 'AI+ Healthcare™', description: 'Apply AI in clinical settings, hospital operations, diagnostics, patient engagement, and healthcare administration. Drive better outcomes while maintaining compliance with healthcare regulations.', duration: '2 Days', link: '/images/AI+Healthcare™.pdf' },
  { accent: '#7c3aed', category: 'ROBOTICS', title: 'AI+ Robotics™', description: 'Integrate AI with robotics systems for automation, computer vision, autonomous decision-making, and intelligent manufacturing — driving efficiency and innovation in physical operations.', duration: '2 Days', link: '/images/AI+Robotics™.pdf' },
  { accent: '#0891b2', category: 'BUSINESS INTELLIGENCE', title: 'AI+ Business Intelligence™', description: 'Transform business analytics with AI-powered insights, predictive modelling, and intelligent dashboards that help organizations make faster, smarter, data-driven strategic decisions.', duration: '2 Days', link: '/images/AI+BusinessIntelligence™.pdf' },
  { accent: '#059669', category: 'DATA', title: 'AI+ Data™', description: 'Master AI-powered data management, analysis, and engineering. Build skills in data pipelines, feature engineering, and AI model integration to drive value from enterprise data assets.', duration: '2 Days', link: '/images/AI+Data™.pdf' },
  { accent: '#dc2626', category: 'SUPPLY CHAIN', title: 'AI+ Supply Chain™', description: 'Apply AI to optimize supply chain operations including demand forecasting, inventory management, logistics automation, and supplier risk analysis for resilient, efficient supply chains.', duration: '2 Days', link: '/images/AI+SupplyChain.pdf' },
  { accent: '#d97706', category: 'PROJECT MANAGEMENT', title: 'AI+ Project Manager™', description: 'Integrate AI into project management workflows for smarter planning, risk prediction, resource optimization, and automated reporting — delivering projects faster and more reliably.', duration: '2 Days', link: '/images/AI+ProjectManager™.pdf' },
  { accent: '#2563eb', category: 'WRITING', title: 'AI+ Writer™', description: 'Master AI-assisted content creation, editing, and optimization. Learn to use generative AI tools to produce high-quality written content at scale across marketing, technical, and creative domains.', duration: '2 Days', link: '/images/AI+Writer™.pdf' },
  { accent: '#7c3aed', category: 'FINANCE', title: 'AI+ Finance™', description: 'Apply AI to financial analysis, fraud detection, risk modelling, algorithmic trading, and regulatory compliance — building quantitative AI skills for modern financial services professionals.', duration: '2 Days', link: '/images/AI+Finance™.pdf' },
  { accent: '#0891b2', category: 'QUALITY ASSURANCE', title: 'AI+ Quality Assurance™', description: 'Leverage AI for automated testing, defect detection, quality prediction, and process optimization — raising quality standards while reducing manual testing time and operational costs.', duration: '2 Days', link: '/images/AI+QualityAssurance.pdf' },
  { accent: '#059669', category: 'PROMPT ENGINEERING', title: 'AI+ Prompt Engineer Level 1™', description: 'Build foundational prompt engineering skills to effectively communicate with AI models. Learn prompt design patterns, context management, and techniques to get optimal AI outputs consistently.', duration: '2 Days', link: '/images/AI+PromptEngineerLevel1™.pdf' },
  { accent: '#dc2626', category: 'PROMPT ENGINEERING', title: 'AI+ Prompt Engineer Level 2™', description: 'Advanced prompt engineering for complex AI workflows. Master chain-of-thought prompting, multi-step reasoning, agentic prompt design, and enterprise-scale prompt optimization strategies.', duration: '2 Days', link: '/images/AI+PromptEngineerLevel2™.pdf' },
  { accent: '#d97706', category: 'DEVELOPMENT', title: 'AI+ Developer™', description: 'Build AI-powered applications using modern frameworks, APIs, and cloud platforms. Learn to integrate LLMs, build intelligent features, and deploy production-ready AI solutions at scale.', duration: '3 Days', link: '/images/AI+Developer™.pdf' },
  { accent: '#2563eb', category: 'CLOUD', title: 'AI+ Cloud™', description: 'Master cloud-based AI services across Azure, AWS, and GCP. Build, deploy, and manage AI workloads in the cloud with security, governance, and cost optimization best practices.', duration: '3 Days', link: '/images/AI+Cloud™.pdf' },
  { accent: '#7c3aed', category: 'ARCHITECTURE', title: 'AI+ Architect™', description: 'Design enterprise AI architectures that are scalable, secure, and production-ready. Master AI system design patterns, platform selection, integration strategies, and governance frameworks.', duration: '3 Days', link: '/images/AI+Architect™.pdf' },
]

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */

export default function AIWorkforceEnablementCoursesPage() {
  useEffect(() => {
    document.title = 'AI+ Workforce Enablement Courses | Chamco Digital'
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    const handlePageHide = () => {}
    const handleBeforeUnload = () => {}
    window.addEventListener('pagehide', handlePageHide)
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('pagehide', handlePageHide)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  const scrollToCourses = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: '#ffffff' }}>
        <style>{`
          @keyframes awe-fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .awe-benefit-card {
            background: #ffffff;
            border: 1px solid #e8e8e8;
            border-radius: 12px;
            padding: 32px;
            transition: border-color 0.3s ease, transform 0.3s ease;
          }
          .awe-benefit-card:hover {
            border-color: #2563eb;
            transform: translateY(-4px);
          }
          .awe-course-card {
            background: #ffffff;
            border-radius: 10px;
            border: 1px solid #e0e0e0;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: box-shadow 0.25s ease, transform 0.25s ease;
          }
          .awe-course-card:hover {
            box-shadow: 0 8px 24px rgba(0,0,0,0.1);
            transform: translateY(-4px);
          }
          @media (max-width: 1024px) {
            .awe-courses-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .awe-benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 640px) {
            .awe-courses-grid { grid-template-columns: 1fr !important; }
            .awe-benefits-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        {/* ════════════════════════════════════════
            SECTION 1 — Hero
        ════════════════════════════════════════ */}
        <section style={{
          minHeight: '85vh',
          background: 'linear-gradient(135deg, #050d1a 0%, #0a1628 50%, #0d1f3c 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Glow blobs */}
          <div style={{ position: 'absolute', top: '15%', left: '10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', padding: '140px 24px', textAlign: 'center' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#60a5fa',
              margin: '0 0 28px 0',
              animation: 'awe-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
            }}>
              AI+ WORKFORCE ENABLEMENT
            </p>
            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 64px)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.05,
              margin: 0,
              animation: 'awe-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
            }}>
              Build the AI skills your organization needs — now.
            </h1>
            <p style={{
              fontSize: '20px',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '680px',
              margin: '24px auto 0',
              lineHeight: 1.65,
              animation: 'awe-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both',
            }}>
              Chamco Digital&apos;s AI+ Workforce Enablement programs deliver Microsoft-certified, expert-led training that closes critical AI skills gaps across every role and industry. From foundational AI literacy to advanced engineering — we build job-ready talent at enterprise scale.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '40px',
              flexWrap: 'wrap',
              animation: 'awe-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both',
            }}>
              <Link href="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '16px',
                padding: '16px 36px',
                borderRadius: '6px',
                textDecoration: 'none',
              }}>
                Enquire Now
              </Link>
              <a
                href="#courses"
                onClick={scrollToCourses}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  border: '1px solid rgba(255,255,255,0.5)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '16px',
                  padding: '16px 36px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                Explore Courses ↓
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 2 — Benefits
        ════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#ffffff', paddingTop: '100px', paddingBottom: '100px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#2563eb', margin: '0 0 20px 0' }}>
              WHY AI+ TRAINING
            </p>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 700, color: '#111111', margin: 0, lineHeight: 1.15 }}>
              Transform your workforce. Transform your results.
            </h2>
            <p style={{ fontSize: '18px', fontWeight: 300, color: '#444444', maxWidth: '600px', marginTop: '20px', lineHeight: 1.65, marginBottom: 0 }}>
              AI+ Workforce Enablement programs deliver measurable outcomes for professionals across every industry — from healthcare and finance to manufacturing and government.
            </p>

            <div className="awe-benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '60px' }}>
              {BENEFITS.map((b, i) => (
                <div key={i} className="awe-benefit-card">
                  <div>{b.icon}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', marginTop: '16px', marginBottom: 0, lineHeight: 1.25 }}>
                    {b.title}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: '#555555', lineHeight: 1.6, marginTop: '8px', marginBottom: 0 }}>
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 3 — Course Cards
        ════════════════════════════════════════ */}
        <section id="courses" style={{ backgroundColor: '#f5f5f5', paddingTop: '100px', paddingBottom: '100px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '6%', paddingRight: '6%' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#2563eb', margin: '0 0 20px 0' }}>
              OUR PROGRAMS
            </p>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 700, color: '#111111', margin: 0, lineHeight: 1.15 }}>
              AI+ Workforce Enablement Courses
            </h2>
            <p style={{ fontSize: '18px', fontWeight: 300, color: '#444444', marginTop: '20px', lineHeight: 1.65, marginBottom: 0 }}>
              AI CERTs certification programs covering every role, industry, and skill level — from foundational AI literacy to advanced engineering.
            </p>

            <div className="awe-courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginTop: '60px' }}>
              {COURSES.map((c, i) => (
                <div key={i} className="awe-course-card">
                  {/* Coloured top accent bar */}
                  <div style={{ height: '6px', backgroundColor: c.accent, flexShrink: 0 }} />
                  {/* Card body */}
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <p style={{ fontSize: '11px', letterSpacing: '2px', fontWeight: 600, textTransform: 'uppercase', color: '#2563eb', margin: 0 }}>
                      {c.category}
                    </p>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111111', marginTop: '8px', marginBottom: 0, lineHeight: 1.3 }}>
                      {c.title}
                    </h3>
                    <p style={{ fontSize: '13px', fontWeight: 300, color: '#555555', lineHeight: 1.5, marginTop: '10px', flex: 1, marginBottom: 0 }}>
                      {c.description}
                    </p>
                    <p style={{ fontSize: '12px', color: '#2563eb', fontWeight: 600, marginTop: '16px', marginBottom: '8px' }}>
                      {c.duration}
                    </p>
                    <a href={c.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}>
                      Learn more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 4 — CTA Banner
        ════════════════════════════════════════ */}
        <section style={{
          position: 'relative',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundImage: "url('/images/cta1-bg-img-1.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 10, padding: '80px 24px', maxWidth: '700px' }}>
            <p style={{ color: 'white', fontStyle: 'italic', fontSize: '15px', margin: '0 0 16px 0' }}>
              Think Beyond. Think AI.
            </p>
            <h2 style={{ color: 'white', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1, margin: 0 }}>
              Ready to build your AI-ready workforce?
            </h2>
            <p style={{ color: '#c0c8d8', fontSize: '16px', lineHeight: 1.75, maxWidth: '580px', margin: '20px auto 0' }}>
              Contact Chamco Digital today to design a customized AI+ training program for your organization.
            </p>
            <Link href="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: 600,
              fontSize: '18px',
              padding: '18px 48px',
              borderRadius: '6px',
              textDecoration: 'none',
              marginTop: '32px',
            }}>
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
