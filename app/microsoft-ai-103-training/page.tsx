'use client'

export const dynamic = 'force-dynamic'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */

const LEARN_CARDS = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="18" cy="14" rx="8" ry="6" />
        <path d="M10 14c-2 1-4 3-4 6 0 4 5 7 12 7s12-3 12-7c0-3-2-5-4-6" />
        <line x1="18" y1="8" x2="18" y2="4" />
        <line x1="14" y1="10" x2="11" y2="7" />
        <line x1="22" y1="10" x2="25" y2="7" />
        <circle cx="18" cy="14" r="3" fill="#dbeafe" stroke="none" />
      </svg>
    ),
    title: 'Plan & Manage Azure AI Solutions',
    body: 'Design end-to-end AI solution architectures on Azure, manage resources, and implement governance and responsible AI practices at enterprise scale.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="4" width="20" height="16" rx="4" />
        <circle cx="14" cy="11" r="2" />
        <circle cx="22" cy="11" r="2" />
        <path d="M13 15h10" />
        <path d="M12 20v4l6 4 6-4v-4" />
        <line x1="18" y1="20" x2="18" y2="24" />
      </svg>
    ),
    title: 'Generative AI & Agentic Solutions',
    body: 'Build production-ready generative AI applications and multi-agent systems using Azure OpenAI, Azure AI Foundry, and Semantic Kernel.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="8" />
        <circle cx="18" cy="18" r="3" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
        <path d="M18 4v4M18 28v4M4 18h4M28 18h4" />
        <path d="M8.5 8.5l2.8 2.8M24.7 24.7l2.8 2.8M8.5 27.5l2.8-2.8M24.7 11.3l2.8-2.8" />
      </svg>
    ),
    title: 'Computer Vision Solutions',
    body: 'Implement image analysis, object detection, OCR, and custom vision models using Azure AI Vision and Azure AI Custom Vision services.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="28" height="24" rx="3" />
        <line x1="10" y1="13" x2="26" y2="13" />
        <line x1="10" y1="18" x2="22" y2="18" />
        <line x1="10" y1="23" x2="18" y2="23" />
      </svg>
    ),
    title: 'Text Analysis & NLP',
    body: 'Build natural language processing solutions including sentiment analysis, entity recognition, language detection, and custom text classification.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="24" height="28" rx="3" />
        <line x1="11" y1="11" x2="25" y2="11" />
        <line x1="11" y1="16" x2="25" y2="16" />
        <line x1="11" y1="21" x2="19" y2="21" />
        <rect x="18" y="19" width="8" height="6" rx="1" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.2" />
      </svg>
    ),
    title: 'Information Extraction',
    body: 'Deploy Azure AI Document Intelligence to extract structured data from forms, invoices, receipts, and complex enterprise documents at scale.',
  },
]

const SKILLS = [
  { label: 'Plan and manage an Azure AI solution', range: '15–20%', pct: 17 },
  { label: 'Implement generative AI and agentic solutions', range: '30–35%', pct: 32 },
  { label: 'Implement computer vision solutions', range: '15–20%', pct: 17 },
  { label: 'Implement text analysis solutions', range: '15–20%', pct: 17 },
  { label: 'Implement information extraction solutions', range: '10–15%', pct: 12 },
]

/* ═══════════════════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════════════════ */

function SkillsBars() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ marginTop: '60px' }}>
      {SKILLS.map((skill, i) => (
        <div key={i} style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ color: '#c0c8d8', fontSize: '16px', fontWeight: 300, lineHeight: 1.4 }}>{skill.label}</span>
            <span style={{ color: '#60a5fa', fontSize: '14px', fontWeight: 700, flexShrink: 0, marginLeft: '24px' }}>{skill.range}</span>
          </div>
          <div style={{ height: '8px', backgroundColor: '#1e3a5f', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              backgroundColor: '#2563eb',
              borderRadius: '4px',
              width: visible ? `${skill.pct}%` : '0%',
              transition: `width 1.2s ease ${i * 0.18}s`,
            }} />
          </div>
        </div>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */

export default function MicrosoftAI103Page() {
  useEffect(() => {
    document.title = 'Microsoft AI-103: Azure AI Apps and Agents Developer | Chamco Digital'
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

  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: '#ffffff' }}>
        <style>{`
          @keyframes mic-fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .mic-learn-card {
            background: #f0f4ff;
            border-radius: 12px;
            padding: 32px;
            border-top: 4px solid #2563eb;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .mic-learn-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          }
          @media (max-width: 768px) {
            .mic-learn-grid { grid-template-columns: 1fr !important; }
            .mic-learn-grid > div { grid-column: auto !important; max-width: 100% !important; }
            .mic-details-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        {/* ════════════════════════════════════════
            HERO
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
          <div style={{ position: 'absolute', top: '15%', left: '10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', padding: '140px 24px', textAlign: 'center' }}>
            <p style={{
              fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase',
              color: '#60a5fa', margin: '0 0 28px 0',
              animation: 'mic-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
            }}>
              MICROSOFT CERTIFICATION
            </p>
            <h1 style={{
              fontSize: 'clamp(34px, 5vw, 60px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.05, margin: 0,
              animation: 'mic-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
            }}>
              Microsoft AI-103: Azure AI Apps and Agents Developer Associate
            </h1>
            <p style={{
              fontSize: '20px', fontWeight: 300, color: 'rgba(255,255,255,0.8)',
              maxWidth: '680px', margin: '24px auto 0', lineHeight: 1.65,
              animation: 'mic-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both',
            }}>
              AI-103 — Validate your expertise in designing, developing, and deploying advanced Azure AI solutions using Python and Microsoft Foundry.
            </p>

            {/* Stat badges */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '12px', marginTop: '36px', flexWrap: 'wrap',
              animation: 'mic-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.25s both',
            }}>
              {['Intermediate Level', '12 — Weeks Intensive', 'Exam: AI-103'].map((badge) => (
                <span key={badge} style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(37,99,235,0.2)',
                  border: '1px solid rgba(37,99,235,0.4)',
                  color: '#93c5fd', fontSize: '13px', fontWeight: 600,
                  padding: '8px 18px', borderRadius: '100px',
                }}>
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{
              display: 'flex', justifyContent: 'center', marginTop: '40px',
              animation: 'mic-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both',
            }}>
              <a
                href="https://www.chamco.ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #ffffff',
                  color: '#ffffff',
                  padding: '14px 32px',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  transition: 'background-color 0.25s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                Register Now
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            WHAT YOU'LL LEARN
        ════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#ffffff', paddingTop: '100px', paddingBottom: '100px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#2563eb', margin: '0 0 20px 0' }}>
              WHAT YOU&apos;LL LEARN
            </p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#111111', margin: 0, lineHeight: 1.15 }}>
              What you&apos;ll master in AI-103
            </h2>
            <div className="mic-learn-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '60px' }}>
              {LEARN_CARDS.map((card, i) => (
                <div
                  key={i}
                  className="mic-learn-card"
                  style={i === 4 ? { gridColumn: '1 / span 2', maxWidth: 'calc(50% - 12px)', margin: '0 auto', width: '100%' } : {}}
                >
                  <div>{card.icon}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', margin: '16px 0 8px 0', lineHeight: 1.25 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '15px', fontWeight: 300, color: '#444444', lineHeight: 1.6, margin: 0 }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            COURSE DETAILS
        ════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#f5f5f5', paddingTop: '100px', paddingBottom: '100px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
            <div className="mic-details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
              {/* Left — detail rows */}
              <div>
                <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, color: '#111111', margin: '0 0 40px 0' }}>
                  Course at a Glance
                </h2>
                {[
                  { label: 'Duration', value: '12 Weeks' },
                  { label: 'Program Days', value: 'Tuesday & Thursday; Saturday & Sunday' },
                  { label: 'Hours/Session', value: '3 Hours' },
                  { label: 'Trainers', value: '300+ Microsoft Certified Instructors' },
                ].map((row, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '24px', alignItems: 'flex-start',
                    paddingTop: '16px', paddingBottom: '16px',
                    borderBottom: '1px solid #e0e0e0',
                  }}>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#777777', minWidth: '140px', flexShrink: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {row.label}
                    </span>
                    <span style={{ fontSize: '15px', color: '#111111', fontWeight: 400 }}>{row.value}</span>
                  </div>
                ))}
              </div>

              {/* Right — who should attend */}
              <div>
                <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, color: '#111111', margin: '0 0 40px 0' }}>
                  Who Should Attend
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Motivated students, individuals and career switchers seeking to break into AI',
                    'Azure AI engineers managing AI solutions',
                    'Developers familiar with Python',
                    'Professionals working with APIs and SDKs for AI development',
                    'Teams building generative AI and agentic solutions',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <circle cx="10" cy="10" r="10" fill="#2563eb" />
                        <path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '15px', color: '#444444', lineHeight: 1.65 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SKILLS ASSESSED
        ════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#050d1a', paddingTop: '100px', paddingBottom: '100px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#60a5fa', margin: '0 0 20px 0' }}>
              EXAM PREPARATION
            </p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#ffffff', margin: 0, lineHeight: 1.15 }}>
              Exam Skills Assessed
            </h2>
            <SkillsBars />
          </div>
        </section>

        {/* ════════════════════════════════════════
            CTA BANNER
        ════════════════════════════════════════ */}
        <section style={{
          position: 'relative', minHeight: '500px', display: 'flex',
          alignItems: 'center', justifyContent: 'center', textAlign: 'center',
          backgroundImage: "url('/images/cta1-bg-img-1.webp')",
          backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 10, padding: '80px 24px', maxWidth: '700px' }}>
            <p style={{ color: 'white', fontStyle: 'italic', fontSize: '15px', margin: '0 0 16px 0' }}>Think Beyond. Think AI.</p>
            <h2 style={{ color: 'white', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1, margin: 0 }}>
              Start your Azure AI Engineer journey today.
            </h2>
            <p style={{ color: '#c0c8d8', fontSize: '16px', lineHeight: 1.75, maxWidth: '580px', margin: '20px auto 0' }}>
              Join professionals worldwide who have earned the Microsoft Certified: Azure AI Apps and Agents Developer credential through Chamco Digital&apos;s expert-led training.
            </p>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center',
              backgroundColor: '#2563eb', color: 'white',
              fontWeight: 600, fontSize: '18px', padding: '18px 48px',
              borderRadius: '6px', textDecoration: 'none', marginTop: '32px',
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
