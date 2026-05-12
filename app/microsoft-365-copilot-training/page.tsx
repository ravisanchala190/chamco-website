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
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4l2 6h6l-5 3.5 2 6L14 16l-5 3.5 2-6L6 10h6L14 4z" />
      </svg>
    ),
    title: 'Boost Productivity Immediately',
    body: 'Learn to use Copilot across all M365 apps to dramatically reduce time spent on repetitive tasks, document creation, and data analysis.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="9" r="4" />
        <path d="M6 24c0-4 3.6-7 8-7s8 3 8 7" />
        <path d="M20 5l2 2-2 2" />
      </svg>
    ),
    title: 'Expert-Led Instruction',
    body: 'Learn from Microsoft-certified trainers with real-world enterprise Copilot deployment experience across diverse industries and use cases.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="20" height="16" rx="2" />
        <path d="M4 24h20" />
        <path d="M10 20v4M18 20v4" />
        <polyline points="9,13 12,10 15,13 19,8" />
      </svg>
    ),
    title: 'Hands-On Lab Practice',
    body: 'Practice with real Copilot scenarios in live M365 environments — not simulations. Build confidence to apply skills immediately after training.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20V10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10" />
        <path d="M2 20h24" />
        <path d="M10 8V6a2 2 0 0 1 4 0v2" />
        <line x1="14" y1="12" x2="14" y2="16" />
        <circle cx="14" cy="17" r="1" fill="#2563eb" stroke="none" />
      </svg>
    ),
    title: 'Prompt Engineering Mastery',
    body: 'Master the art of writing effective prompts that consistently produce high-quality outputs from Copilot across every Microsoft 365 application.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="14" r="3" />
        <circle cx="20" cy="8" r="3" />
        <circle cx="20" cy="20" r="3" />
        <line x1="11" y1="13" x2="17" y2="9" />
        <line x1="11" y1="15" x2="17" y2="19" />
      </svg>
    ),
    title: 'Workflow Automation',
    body: 'Automate repetitive workflows using Copilot in Teams, Outlook, and SharePoint — freeing your team to focus on high-value strategic work.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4,22 10,14 15,17 22,8" />
        <path d="M18 8h4v4" />
        <line x1="4" y1="26" x2="24" y2="26" />
      </svg>
    ),
    title: 'Measurable Business Impact',
    body: 'Organizations report 30–40% productivity gains after deploying trained Copilot users — with measurable improvements in output quality and speed.',
  },
]

const MODULES = [
  {
    num: '01',
    title: 'Copilot Foundations',
    topics: [
      'What is Microsoft 365 Copilot',
      'How Copilot uses your data securely',
      'Responsible AI and governance',
      'Setting up your Copilot environment',
    ],
  },
  {
    num: '02',
    title: 'Copilot in Core Apps',
    topics: [
      'Word: drafting and editing with Copilot',
      'Excel: data analysis and formula generation',
      'PowerPoint: presentation creation',
      'Outlook: email drafting and summarization',
    ],
  },
  {
    num: '03',
    title: 'Copilot in Teams & SharePoint',
    topics: [
      'Meeting summaries and action items',
      'Teams chat assistance',
      'SharePoint content generation',
      'Collaborative Copilot workflows',
    ],
  },
  {
    num: '04',
    title: 'Advanced Copilot Skills',
    topics: [
      'Advanced prompt design techniques',
      'Building custom Copilot agents',
      'Integration with Power Platform',
      'Measuring and optimizing Copilot ROI',
    ],
  },
]

const INDIVIDUAL_FEATURES = [
  '3-day live online training',
  'Microsoft-certified trainer',
  'Hands-on lab access',
  'Course materials included',
  'Certificate of completion',
]

const ENTERPRISE_FEATURES = [
  'Everything in Individual',
  'Custom cohort scheduling',
  'Dedicated trainer',
  'Tailored use cases for your industry',
  'Post-training support',
  'Volume discounts available',
]

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */

export default function Microsoft365CopilotPage() {
  useEffect(() => {
    document.title = 'Microsoft 365 Copilot Training | Chamco Digital'
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

  const scrollToModules = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: '#ffffff' }}>
        <style>{`
          @keyframes cop-fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .cop-benefit-card {
            background: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 12px;
            padding: 32px;
            transition: border-color 0.3s ease, transform 0.3s ease;
          }
          .cop-benefit-card:hover {
            border-color: #2563eb;
            transform: translateY(-4px);
          }
          .cop-module-card {
            background: #ffffff;
            border: 1px solid #e8e8e8;
            border-radius: 12px;
            padding: 32px;
            transition: border-color 0.3s ease, transform 0.3s ease;
          }
          .cop-module-card:hover {
            border-color: #2563eb;
            transform: translateY(-3px);
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
            .cop-benefits-grid { grid-template-columns: 1fr !important; }
            .cop-modules-grid { grid-template-columns: 1fr !important; }
            .cop-pricing-grid { grid-template-columns: 1fr !important; }
            .cop-feature-grid { grid-template-columns: 1fr !important; }
            .cop-section-heading { font-size: clamp(28px, 7vw, 36px) !important; }
          }
        `}</style>

        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section style={{
          minHeight: '85vh',
          background: 'linear-gradient(135deg, #050d1a 0%, #0a1628 50%, #0d1f3c 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '15%', left: '10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', padding: '140px 24px', textAlign: 'center' }}>
            <p style={{
              fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase',
              color: '#60a5fa', margin: '0 0 28px 0',
              animation: 'cop-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
            }}>
              MICROSOFT 365
            </p>
            <h1 style={{
              fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.05, margin: 0,
              animation: 'cop-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
            }}>
              Microsoft 365 Copilot Training
            </h1>
            <p style={{
              fontSize: '20px', fontWeight: 300, color: 'rgba(255,255,255,0.8)',
              maxWidth: '680px', margin: '24px auto 0', lineHeight: 1.65,
              animation: 'cop-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both',
            }}>
              Master AI-powered productivity across Word, Excel, PowerPoint, Outlook, and Teams. Learn prompt design, workflow automation, and real-world Copilot use cases.
            </p>

            {/* Stat badges */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '12px', marginTop: '36px', flexWrap: 'wrap',
              animation: 'cop-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.25s both',
            }}>
              {['Live Online', 'Microsoft Certified Trainers', 'Hands-On Labs'].map((badge) => (
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
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '16px', marginTop: '40px', flexWrap: 'wrap',
              animation: 'cop-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both',
            }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center',
                backgroundColor: '#2563eb', color: '#ffffff',
                fontWeight: 600, fontSize: '16px', padding: '16px 36px',
                borderRadius: '6px', textDecoration: 'none',
              }}>
                Enquire Now
              </Link>
              <a
                href="#modules"
                onClick={scrollToModules}
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  border: '1px solid rgba(255,255,255,0.5)', color: '#ffffff',
                  fontWeight: 600, fontSize: '16px', padding: '16px 36px',
                  borderRadius: '6px', textDecoration: 'none', cursor: 'pointer',
                }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            BENEFITS
        ════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#ffffff', paddingTop: '100px', paddingBottom: '100px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#2563eb', margin: '0 0 20px 0' }}>
              WHY TRAIN WITH US
            </p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#111111', margin: 0, lineHeight: 1.15 }}>
              Why Microsoft 365 Copilot Training?
            </h2>
            <div className="cop-benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '60px' }}>
              {BENEFITS.map((b, i) => (
                <div key={i} className="cop-benefit-card">
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '10px',
                    backgroundColor: '#eff6ff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '4px',
                  }}>
                    {b.icon}
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#111111', margin: '16px 0 8px 0', lineHeight: 1.25 }}>
                    {b.title}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: '#555555', lineHeight: 1.65, margin: 0 }}>
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            COURSE MODULES
        ════════════════════════════════════════ */}
        <section id="modules" style={{ backgroundColor: '#f5f5f5', paddingTop: '100px', paddingBottom: '100px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#2563eb', margin: '0 0 20px 0' }}>
              CURRICULUM
            </p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#111111', margin: 0, lineHeight: 1.15 }}>
              Course modules
            </h2>
            <div className="cop-modules-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '60px' }}>
              {MODULES.map((mod) => (
                <div key={mod.num} className="cop-module-card">
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '40px', height: '40px', borderRadius: '8px',
                    backgroundColor: '#eff6ff', marginBottom: '20px',
                  }}>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#2563eb' }}>{mod.num}</span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#111111', margin: '0 0 20px 0', lineHeight: 1.25 }}>
                    {mod.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {mod.topics.map((topic, j) => (
                      <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
                        <span style={{ color: '#2563eb', fontSize: '16px', lineHeight: 1.4, flexShrink: 0 }}>›</span>
                        <span style={{ fontSize: '14px', color: '#444444', lineHeight: 1.55 }}>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
              <h2 className="cop-section-heading" style={{ fontSize: '48px', fontWeight: 800, color: '#111111', lineHeight: 1.1, margin: 0 }}>
                Everything You Need to Master Microsoft 365 Copilot
              </h2>
            </div>

            <div className="cop-feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
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
                  title: '3-Week Structured Program',
                  body: 'A carefully sequenced Copilot curriculum that builds AI productivity skills progressively across all Microsoft 365 applications.',
                },
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4h8l2 6-3 2c1 2 2 4 2 6H11c0-2 1-4 2-6L10 10z" fill="rgba(37,99,235,0.1)" />
                      <path d="M11 18v4a5 5 0 0010 0v-4" />
                      <line x1="16" y1="22" x2="16" y2="26" />
                    </svg>
                  ),
                  title: 'Hands-On M365 Labs',
                  body: 'Real Microsoft 365 environments — practice with actual Copilot in Word, Excel, PowerPoint, Outlook, and Teams, not simulations.',
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
                  title: 'Microsoft-Aligned Training',
                  body: 'Curriculum aligned with Microsoft 365 Copilot best practices and enterprise deployment standards recognized globally.',
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
                  title: 'Immediate Workplace Impact',
                  body: 'Build practical Copilot skills that deliver measurable productivity gains from day one back in your organization.',
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
                  title: 'Universal Professional Value',
                  body: 'Microsoft 365 Copilot skills are valued across every industry and role — from finance and healthcare to government and technology.',
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
                  body: 'Learn live from Microsoft-certified Copilot practitioners through interactive sessions with real-time Q&A and personalized mentorship.',
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
            PRICING
        ════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px', textAlign: 'center' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#2563eb', margin: '0 0 20px 0' }}>
              TRAINING OPTIONS
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, color: '#111111', margin: '0 0 60px 0', lineHeight: 1.15 }}>
              Flexible training options
            </h2>
            <div className="cop-pricing-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>

              {/* Individual */}
              <div style={{
                border: '2px solid #e0e0e0', borderRadius: '16px', padding: '40px',
                display: 'flex', flexDirection: 'column', textAlign: 'left',
              }}>
                <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#777777', margin: '0 0 20px 0' }}>
                  INDIVIDUAL
                </p>
                <p style={{ fontSize: '36px', fontWeight: 800, color: '#111111', margin: '0 0 32px 0', lineHeight: 1 }}>
                  Contact Us
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', flex: 1 }}>
                  {INDIVIDUAL_FEATURES.map((f, i) => (
                    <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '14px' }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <circle cx="9" cy="9" r="9" fill="#eff6ff" />
                        <path d="M5 9l3 3 5-5" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '14px', color: '#444444', lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid #2563eb', color: '#2563eb',
                  fontWeight: 600, fontSize: '15px', padding: '14px 28px',
                  borderRadius: '8px', textDecoration: 'none',
                }}>
                  Get a Quote
                </Link>
              </div>

              {/* Enterprise */}
              <div style={{
                border: '2px solid #2563eb', borderRadius: '16px', padding: '40px',
                backgroundColor: '#f0f4ff', display: 'flex', flexDirection: 'column', textAlign: 'left',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#2563eb', margin: 0 }}>
                    ENTERPRISE
                  </p>
                  <span style={{
                    fontSize: '10px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase',
                    backgroundColor: '#2563eb', color: '#ffffff',
                    padding: '3px 10px', borderRadius: '100px',
                  }}>
                    MOST POPULAR
                  </span>
                </div>
                <p style={{ fontSize: '36px', fontWeight: 800, color: '#111111', margin: '0 0 32px 0', lineHeight: 1 }}>
                  Custom Pricing
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', flex: 1 }}>
                  {ENTERPRISE_FEATURES.map((f, i) => (
                    <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '14px' }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <circle cx="9" cy="9" r="9" fill="#2563eb" />
                        <path d="M5 9l3 3 5-5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '14px', color: '#333333', lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: '#2563eb', color: '#ffffff',
                  fontWeight: 600, fontSize: '15px', padding: '14px 28px',
                  borderRadius: '8px', textDecoration: 'none',
                }}>
                  Schedule a Call
                </Link>
              </div>
            </div>
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
          <div style={{ position: 'relative', zIndex: 10, padding: '80px 24px', maxWidth: '760px' }}>
            <p style={{ color: 'white', fontStyle: 'italic', fontSize: '15px', margin: '0 0 16px 0' }}>Think Beyond. Think AI.</p>
            <h2 style={{ color: 'white', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.1, margin: 0 }}>
              Unlock the full potential of Microsoft 365 Copilot for your team.
            </h2>
            <p style={{ color: '#c0c8d8', fontSize: '16px', lineHeight: 1.75, maxWidth: '600px', margin: '20px auto 0' }}>
              Contact Chamco Digital today to schedule expert-led Microsoft 365 Copilot training tailored to your organization&apos;s needs.
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
