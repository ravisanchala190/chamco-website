'use client'

export const dynamic = 'force-dynamic'

import { useEffect } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */

const LEARN_CARDS = [
  {
    title: 'Intelligent Agent Design',
    body: 'Learn to architect and build sophisticated AI agents using Claude AI that can reason, plan, and execute complex multi-step tasks autonomously.',
  },
  {
    title: 'Automation Integration',
    body: 'Connect Claude agents to enterprise workflows, APIs, and business systems to automate repetitive processes and drive operational efficiency.',
  },
  {
    title: 'Advanced GenAI Techniques',
    body: 'Master cutting-edge generative AI techniques including chain-of-thought prompting, tool use, context management, and multi-agent orchestration.',
  },
  {
    title: 'Voice-Enabled AI Solutions',
    body: 'Build real-world voice-enabled AI applications that combine Claude\'s language capabilities with speech recognition and synthesis technologies.',
  },
  {
    title: 'Claude Code for Developers',
    body: 'Use Claude Code for terminal-based AI-assisted development, complex refactoring, codebase analysis, and automated software engineering tasks.',
  },
  {
    title: 'Enterprise Deployment',
    body: 'Deploy Claude-powered solutions at enterprise scale with proper governance, security controls, monitoring, and responsible AI practices.',
  },
]

const MODULES = [
  {
    num: '01',
    title: 'Foundations of Claude AI',
    topics: [
      'Claude architecture and capabilities',
      'Prompt engineering fundamentals',
      'Tool use and function calling',
      'Responsible AI with Claude',
    ],
  },
  {
    num: '02',
    title: 'Building AI Agents',
    topics: [
      'Agent design patterns',
      'Multi-agent orchestration',
      'Memory and context management',
      'Planning and reasoning systems',
    ],
  },
  {
    num: '03',
    title: 'Enterprise Integration',
    topics: [
      'API integration and webhooks',
      'Workflow automation',
      'Security and governance',
      'Monitoring and observability',
    ],
  },
  {
    num: '04',
    title: 'Advanced Capabilities',
    topics: [
      'Voice-enabled solutions',
      'Multimodal AI applications',
      'Claude Code for development',
      'Capstone project delivery',
    ],
  },
]

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */

export default function ClaudeCodeCoworkPage() {
  useEffect(() => {
    document.title = 'Claude Code & Cowork Training | Chamco Digital'
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
          @keyframes ccc-fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .ccc-learn-card {
            background: #fff8f5;
            border-radius: 12px;
            padding: 28px;
            border-top: 4px solid #ff6b35;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .ccc-learn-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(255,107,53,0.12);
          }
          .ccc-module-card {
            background: #ffffff;
            border: 1px solid #e8e8e8;
            border-radius: 12px;
            padding: 32px;
            transition: border-color 0.3s ease, transform 0.3s ease;
          }
          .ccc-module-card:hover {
            border-color: #ff6b35;
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
            .ccc-learn-grid { grid-template-columns: 1fr !important; }
            .ccc-modules-grid { grid-template-columns: 1fr !important; }
            .ccc-feature-grid { grid-template-columns: 1fr !important; }
            .ccc-section-heading { font-size: clamp(28px, 7vw, 36px) !important; }
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
          <div style={{ position: 'absolute', top: '15%', left: '10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', padding: '140px 24px', textAlign: 'center' }}>
            <p style={{
              fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase',
              color: '#ff6b35', margin: '0 0 28px 0',
              animation: 'ccc-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
            }}>
              ANTHROPIC TRAINING
            </p>
            <h1 style={{
              fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.05, margin: 0,
              animation: 'ccc-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
            }}>
              Claude Code & Cowork: Building Intelligent AI Agents
            </h1>
            <p style={{
              fontSize: '20px', fontWeight: 300, color: 'rgba(255,255,255,0.8)',
              maxWidth: '680px', margin: '24px auto 0', lineHeight: 1.65,
              animation: 'ccc-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both',
            }}>
              Master intelligent AI agent development with Claude AI. Learn to design advanced agents, integrate automation, and build voice-enabled enterprise solutions.
            </p>

            {/* Stat badges */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '12px', marginTop: '36px', flexWrap: 'wrap',
              animation: 'ccc-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.25s both',
            }}>
              {['Hands-On Labs', 'Enterprise-Ready', 'GenAI Focused'].map((badge) => (
                <span key={badge} style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(255,107,53,0.15)',
                  border: '1px solid rgba(255,107,53,0.35)',
                  color: '#ffb59a', fontSize: '13px', fontWeight: 600,
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
              animation: 'ccc-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both',
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
                href="https://www.anthropic.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  border: '1px solid rgba(255,255,255,0.5)', color: '#ffffff',
                  fontWeight: 600, fontSize: '16px', padding: '16px 36px',
                  borderRadius: '6px', textDecoration: 'none',
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            WHAT YOU'LL LEARN
        ════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#ffffff', paddingTop: '100px', paddingBottom: '100px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#ff6b35', margin: '0 0 20px 0' }}>
              WHAT YOU&apos;LL LEARN
            </p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#111111', margin: 0, lineHeight: 1.15 }}>
              Master the future of AI agent development
            </h2>
            <div className="ccc-learn-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '60px' }}>
              {LEARN_CARDS.map((card, i) => (
                <div key={i} className="ccc-learn-card">
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px',
                    backgroundColor: 'rgba(255,107,53,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px',
                  }}>
                    <span style={{ fontSize: '20px', fontWeight: 800, color: '#ff6b35' }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', margin: '0 0 10px 0', lineHeight: 1.25 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: '#555555', lineHeight: 1.65, margin: 0 }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            COURSE MODULES
        ════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#f5f5f5', paddingTop: '100px', paddingBottom: '100px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#ff6b35', margin: '0 0 20px 0' }}>
              CURRICULUM
            </p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#111111', margin: 0, lineHeight: 1.15 }}>
              Course curriculum
            </h2>
            <div className="ccc-modules-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '60px' }}>
              {MODULES.map((mod) => (
                <div key={mod.num} className="ccc-module-card">
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '40px', height: '40px', borderRadius: '8px',
                    backgroundColor: '#fff0eb', marginBottom: '20px',
                  }}>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#ff6b35' }}>{mod.num}</span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#111111', margin: '0 0 20px 0', lineHeight: 1.25 }}>
                    {mod.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {mod.topics.map((topic, j) => (
                      <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
                        <span style={{ color: '#ff6b35', fontSize: '16px', lineHeight: 1.4, flexShrink: 0 }}>›</span>
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
              <h2 className="ccc-section-heading" style={{ fontSize: '48px', fontWeight: 800, color: '#111111', lineHeight: 1.1, margin: 0 }}>
                Everything You Need to Master Claude AI Development
              </h2>
            </div>

            <div className="ccc-feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
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
                  title: '4-Week Structured Program',
                  body: 'A carefully sequenced curriculum that builds Claude AI agent development skills progressively from foundations to advanced enterprise deployment.',
                },
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4h8l2 6-3 2c1 2 2 4 2 6H11c0-2 1-4 2-6L10 10z" fill="rgba(37,99,235,0.1)" />
                      <path d="M11 18v4a5 5 0 0010 0v-4" />
                      <line x1="16" y1="22" x2="16" y2="26" />
                    </svg>
                  ),
                  title: 'Hands-On Agent Development',
                  body: 'Real development environments — build, test, and deploy actual Claude AI agents and automation workflows, not simulations.',
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
                  title: 'Industry-Recognized Skills',
                  body: 'Curriculum aligned with enterprise AI development standards. Graduate with practical Claude Code and Cowork expertise that employers demand.',
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
                  body: 'Build a professional portfolio of real Claude AI projects demonstrating expertise in agent design, automation, and enterprise deployment.',
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
                  title: 'Global AI Opportunities',
                  body: 'Claude AI expertise positions you for high-demand roles globally — AI Engineer, Automation Specialist, and GenAI Developer roles are rapidly growing.',
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
                  body: 'Learn live from certified Claude AI practitioners through interactive sessions with real-time Q&A, mentorship, and personalized feedback.',
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
              Transform your AI development capabilities with Claude.
            </h2>
            <p style={{ color: '#c0c8d8', fontSize: '16px', lineHeight: 1.75, maxWidth: '580px', margin: '20px auto 0' }}>
              Join the next generation of AI engineers building intelligent, autonomous systems with Claude AI and Chamco Digital&apos;s expert-led training.
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
