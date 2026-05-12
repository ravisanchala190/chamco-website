'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

function RegistrationForm({
  defaultBatch = 'Batch 1 — June 23, 2026',
}: {
  defaultBatch?: string
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    batchName: defaultBatch,
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted] = useState(false)
  const [error, setError] = useState('')
  const [activeField, setActiveField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName || !formData.email || !formData.phone) {
      setError('Please fill in all required fields.')
      return
    }
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          batchName: formData.batchName,
          batchStartDate: formData.batchName.includes('Batch 1') ? 'June 23, 2026' : 'July 21, 2026',
        }),
      })
      if (res.ok) {
        // Redirect directly to Stripe payment link
        // Registrant enters coupon code on the Stripe checkout page
        window.location.href = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_URL || 'https://buy.stripe.com/00wbJ12x2bsE6w3g5a5Vu00'
      } else {
        const data = await res.json()
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.06)',
    border: `1px solid ${activeField === field ? '#60a5fa' : 'rgba(255,255,255,0.15)'}`,
    color: '#ffffff',
    borderRadius: '6px',
    padding: '14px 16px',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease',
  })

  if (submitted) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '48px 32px',
        backgroundColor: 'rgba(37,99,235,0.1)',
        border: '1px solid rgba(37,99,235,0.3)',
        borderRadius: '12px',
        marginTop: '48px',
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
        <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
          Registration Submitted Successfully!
        </h3>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto' }}>
          Thank you for registering. Our team will email you shortly with confirmation details and next steps. We look forward to having you in the program!
        </p>
      </div>
    )
  }

  return (
    <div style={{
      marginTop: '48px',
      backgroundColor: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '16px',
      padding: '48px',
      maxWidth: '680px',
      margin: '48px auto 0',
    }}>
      <h3 style={{
        fontSize: '22px', fontWeight: 700, color: '#ffffff',
        margin: '0 0 8px 0',
      }}>Register for Training</h3>
      <p style={{
        fontSize: '14px', color: 'rgba(255,255,255,0.6)',
        margin: '0 0 32px 0',
      }}>Fill in your details and we&apos;ll confirm your seat.</p>

      <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* Full Name */}
        <div>
          <label style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '8px', letterSpacing: '0.5px' }}>
            FULL NAME *
          </label>
          <input
            type="text"
            value={formData.fullName}
            onFocus={() => setActiveField('fullName')}
            onBlur={() => setActiveField(null)}
            onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            placeholder="First, Last Name"
            style={inputStyle('fullName')}
          />
        </div>

        {/* Email */}
        <div>
          <label style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '8px', letterSpacing: '0.5px' }}>
            EMAIL ADDRESS *
          </label>
          <input
            type="email"
            value={formData.email}
            onFocus={() => setActiveField('email')}
            onBlur={() => setActiveField(null)}
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="your@email.com"
            style={inputStyle('email')}
          />
        </div>

        {/* Phone */}
        <div>
          <label style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '8px', letterSpacing: '0.5px' }}>
            CONTACT NUMBER *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onFocus={() => setActiveField('phone')}
            onBlur={() => setActiveField(null)}
            onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            placeholder="+1 (000) 000-0000"
            style={inputStyle('phone')}
          />
        </div>

        {/* Batch display — read only, grayed out */}
        <div>
          <label style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '8px', letterSpacing: '0.5px' }}>
            BATCH START DATE
          </label>
          <div style={{
            width: '100%',
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.4)',
            borderRadius: '6px',
            padding: '14px 16px',
            fontSize: '15px',
            boxSizing: 'border-box',
            cursor: 'not-allowed',
          }}>
            {formData.batchName.includes('Batch 1') ? 'June 23, 2026' : 'July 21, 2026'}
          </div>
        </div>

        {/* Error message */}
        {error && (
          <p style={{ color: '#f87171', fontSize: '14px', margin: 0 }}>{error}</p>
        )}

        <p style={{
          fontSize: '13px',
          color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.6,
          margin: '0',
          textAlign: 'center',
        }}>
          Click <strong style={{ color: 'rgba(255,255,255,0.8)' }}>&quot;Proceed to Checkout&quot;</strong> below to enter your coupon code and securely complete your registration on the next page.
        </p>

        {/* Submit button */}
        <button
          type="submit"
          disabled={submitting}
          style={{
            width: '100%',
            padding: '16px',
            backgroundColor: submitting ? '#1d4ed8' : '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: submitting ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s ease',
            opacity: submitting ? 0.8 : 1,
            marginTop: '8px',
          }}
        >
          {submitting ? 'Processing...' : 'Proceed to Checkout'}
        </button>

        <p style={{
          textAlign: 'center', fontSize: '12px',
          color: 'rgba(255,255,255,0.4)', margin: 0,
        }}>
          🔒 Your information is safe &amp; secure with us
        </p>
      </form>
    </div>
  )
}

export default function LearningChamcoDigitalPage() {
  useEffect(() => {
    document.title = 'Microsoft AI-103 & AI Training Programs | Chamco Digital'
  }, [])

  const [showRegistrationModal, setShowRegistrationModal] = useState(false)
  const [selectedBatch, setSelectedBatch] = useState('Batch 1 — June 23, 2026')

  return (
    <>
      <Navigation />

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lcd-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
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
        .lcd-objective-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 36px;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .lcd-objective-card:hover {
          transform: translateY(-4px);
          border-color: rgba(37,99,235,0.5);
          box-shadow: 0 8px 24px rgba(37,99,235,0.15);
        }
        .lcd-objective-card::after {
          content: '';
          display: block;
          height: 3px;
          background: #2563eb;
          border-radius: 2px;
          margin-top: 24px;
        }
        .lcd-table-row:hover td {
          background: rgba(255,255,255,0.04);
        }
        @media (max-width: 768px) {
          .lcd-hero-grid {
            grid-template-columns: 1fr !important;
            padding: 100px 24px !important;
            gap: 40px !important;
          }
          .lcd-two-col-block {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .lcd-features-grid {
            grid-template-columns: 1fr !important;
          }
          .lcd-table-wrap {
            overflow-x: auto !important;
          }
          .lcd-programs-heading {
            font-size: clamp(28px, 7vw, 36px) !important;
          }
          .lcd-programs-row {
            flex-direction: column !important;
          }
          .lcd-table-hint {
            display: block !important;
          }
          .lcd-batch-table th,
          .lcd-batch-table td {
            padding: 12px 10px !important;
            font-size: 12px !important;
          }
          .lcd-batch-table th {
            letter-spacing: 0.5px !important;
          }
          .lcd-batch-table button {
            padding: 8px 14px !important;
            font-size: 12px !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .lcd-features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      <main>

        {/* ═══════════════════════════════════════════════════════
            SECTION 1 — HERO
        ═══════════════════════════════════════════════════════ */}
        <section
          style={{
            minHeight: '90vh',
            background: 'linear-gradient(135deg, #050d1a 0%, #0a1628 45%, #0d1f3c 100%)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Glow blobs */}
          <div style={{ position: 'absolute', top: '5%', left: '25%', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '5%', right: '5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '140px 80px',
              display: 'grid',
              gridTemplateColumns: '55fr 45fr',
              gap: '64px',
              alignItems: 'center',
              width: '100%',
            }}
            className="lcd-hero-grid"
          >
            {/* Left column */}
            <div>
              {/* Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', animation: 'heroFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both' }}>
                <Image
                  src="/images/Chamco-Digital_white-color.png"
                  alt="Chamco Digital"
                  width={140}
                  height={36}
                  style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                  unoptimized
                />
                <span style={{ fontSize: '12px', color: '#93c5fd', letterSpacing: '0.5px', fontWeight: 500 }}>
                  A Microsoft Partner
                </span>
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontSize: '68px',
                  fontWeight: 900,
                  lineHeight: 1.05,
                  marginTop: '24px',
                  color: '#ffffff',
                  animation: 'heroFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.18s both',
                }}
              >
                Microsoft AI-103
                <br />
                <span
                  style={{
                    background: 'linear-gradient(90deg, #2563eb 0%, #06b6d4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Training Program
                </span>
              </h1>

              {/* Body */}
              <p
                style={{
                  fontSize: '18px',
                  color: 'rgba(255,255,255,0.75)',
                  maxWidth: '520px',
                  marginTop: '20px',
                  lineHeight: 1.75,
                  animation: 'heroFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.24s both',
                }}
              >
                Chamco Digital&apos;s flagship 12-week Microsoft AI-103 program delivers certified,
                instructor-led workforce training in Azure AI Apps and Agents development —
                transforming motivated individuals into enterprise-ready AI professionals.
              </p>

              {/* Stat badges */}
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                  marginTop: '32px',
                  animation: 'heroFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.3s both',
                }}
              >
                {['12 Weeks', '100% Hands-On', 'Live Online', 'Microsoft Certified'].map(b => (
                  <span
                    key={b}
                    style={{
                      border: '1px solid rgba(37,99,235,0.6)',
                      color: '#93c5fd',
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      background: 'rgba(37,99,235,0.12)',
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  marginTop: '36px',
                  animation: 'heroFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.36s both',
                }}
              >
                <a
                  href="#register"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  style={{
                    display: 'inline-block',
                    background: '#2563eb',
                    color: '#ffffff',
                    textDecoration: 'none',
                    padding: '16px 36px',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    letterSpacing: '0.3px',
                    transition: 'background 0.25s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#1d4ed8')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#2563eb')}
                >
                  Register Now
                </a>
              </div>
            </div>

            {/* Right column — 3 floating stat cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { number: '12', label: 'Weeks of Intensive Training', delay: '0s', offset: '0px' },
                { number: '100%', label: 'Hands-On Azure Labs', delay: '0.8s', offset: '24px' },
                { number: 'AI-103', label: 'Microsoft Certification Track', delay: '1.6s', offset: '48px' },
              ].map(card => (
                <div
                  key={card.label}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '16px',
                    padding: '28px',
                    marginLeft: card.offset,
                    animation: `lcd-float 3s ease-in-out ${card.delay} infinite`,
                  }}
                >
                  <div style={{ fontSize: '44px', fontWeight: 900, color: '#2563eb', lineHeight: 1 }}>
                    {card.number}
                  </div>
                  <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginTop: '10px', fontWeight: 400 }}>
                    {card.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 2 — ABOUT THE PROGRAM
        ═══════════════════════════════════════════════════════ */}
        <section id="about" style={{ background: '#ffffff', padding: '120px 6%' }}>
          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center',
            }}
            className="lcd-two-col-block"
          >
            {/* Left */}
            <div>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#2563eb', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
                OUR FLAGSHIP PROGRAM
              </p>
              <h2 style={{ fontSize: '52px', fontWeight: 800, color: '#111111', lineHeight: 1.1, margin: 0 }}>
                Build Your Future in AI &amp; Cloud Technology
              </h2>
              <p style={{ fontSize: '17px', fontWeight: 300, color: '#333333', lineHeight: 1.85, maxWidth: '580px', marginTop: '24px', margin: '24px 0 0 0' }}>
                Chamco Digital&apos;s Microsoft AI-103 12-week program blends structured instruction,
                immersive hands-on Azure lab projects, and direct alignment with Microsoft AI-103
                certification to equip participants with both technical mastery and verified credentials.
                More than a training course — it represents access to global opportunity, competitive
                skills, and sustainable careers in the digital economy.
              </p>
              <p style={{ fontSize: '17px', fontWeight: 300, color: '#333333', lineHeight: 1.85, maxWidth: '580px', marginTop: '20px' }}>
                Graduates emerge prepared for in-demand roles in AI engineering, Azure AI development,
                and enterprise digital transformation. Training sessions are held twice per week, live
                online, with expert Microsoft-certified instructors providing personalized mentorship.
              </p>
              <a
                href="#register"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
                }}
                style={{
                  display: 'inline-block',
                  marginTop: '32px',
                  background: '#2563eb',
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '14px 32px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'background 0.25s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1d4ed8')}
                onMouseLeave={e => (e.currentTarget.style.background = '#2563eb')}
              >
                Secure Your Spot
              </a>
            </div>

            {/* Right — dark card */}
            <div style={{ background: '#050d1a', borderRadius: '16px', padding: '48px' }}>
              <Image
                src="/images/Microsoft.png"
                alt="Microsoft"
                width={120}
                height={32}
                style={{ height: '32px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                unoptimized
              />
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', marginTop: '24px', marginBottom: '28px' }}>
                Microsoft AI-103
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Design and develop Azure AI solutions using Python',
                  'Build generative AI apps with Azure OpenAI & Microsoft Foundry',
                  'Implement AI agents and multi-agent orchestration systems',
                  'Deploy computer vision, NLP, and document intelligence solutions',
                  'Earn the Microsoft Certified: Azure AI Apps and Agents Developer Associate credential',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.55 }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <circle cx="10" cy="10" r="10" fill="rgba(37,99,235,0.25)" />
                      <path d="M6 10l3 3 5-5" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 3 — WHY CHOOSE US
        ═══════════════════════════════════════════════════════ */}
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

            <div className="lcd-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
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

        {/* ═══════════════════════════════════════════════════════
            SECTION 5 — ADDITIONAL PROGRAMS
        ═══════════════════════════════════════════════════════ */}
        <section style={{ background: '#ffffff', padding: '120px 6%' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#2563eb', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
                OUR PROGRAMS
              </p>
              <h2 className="lcd-programs-heading" style={{ fontSize: '48px', fontWeight: 800, color: '#111111', lineHeight: 1.1, margin: '0 0 16px 0' }}>
                More Ways to Grow with Chamco Digital
              </h2>
              <p style={{ fontSize: '17px', color: '#555555', lineHeight: 1.75, maxWidth: '620px', margin: '0 auto' }}>
                Beyond our flagship AI-103 program, we offer specialized training to meet every professional&apos;s AI journey.
              </p>
            </div>

            <div className="lcd-programs-row" style={{ display: 'flex', gap: '24px', marginTop: '60px' }}>
              {[
                {
                  accent: '#ff6b35',
                  label: 'ANTHROPIC',
                  title: 'Claude Code & Cowork',
                  body: 'Master intelligent AI agent development with Claude AI. Design advanced agents, integrate automation, build voice-enabled solutions, and use Claude Code for enterprise-grade AI-assisted development.',
                  bullets: [
                    'Design and build Claude AI agents',
                    'Integrate automation and workflow systems',
                    'Advanced GenAI techniques and prompt engineering',
                    'Claude Code for terminal-based development',
                  ],
                  cta: 'Contact Us to Register',
                  ctaHref: '/contact',
                },
                {
                  accent: '#2563eb',
                  label: 'AI CERTS',
                  title: 'AI+ Workforce Enablement',
                  body: "Role-based AI enablement programs covering 20+ AI+ certification tracks — from AI+ Everyone™ to AI+ Architect™. Customizable for your organization's specific industry and workforce needs.",
                  bullets: [
                    '21 AI+ certification tracks available',
                    'Role-based, industry-specific learning paths',
                    'Customizable cohort-based delivery',
                    'From foundational to advanced AI skills',
                  ],
                  cta: 'Customize Your Program',
                  ctaHref: '/contact',
                },
                {
                  accent: '#059669',
                  label: 'MICROSOFT 365',
                  title: 'Microsoft 365 Copilot Training',
                  body: 'Master AI-powered productivity across Word, Excel, PowerPoint, Outlook, and Teams. Expert-led, hands-on training that produces immediate productivity gains for your organization.',
                  bullets: [
                    'Copilot across all M365 apps',
                    'Prompt engineering and workflow automation',
                    'Enterprise deployment and governance',
                    'Measurable productivity outcomes',
                  ],
                  cta: 'Contact Us to Register',
                  ctaHref: '/contact',
                },
              ].map(card => (
                <div
                  key={card.title}
                  style={{
                    flex: 1,
                    background: '#ffffff',
                    border: '1px solid #e8e8e8',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Accent top bar */}
                  <div style={{ height: '4px', background: card.accent, flexShrink: 0 }} />

                  {/* Content */}
                  <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, color: card.accent, letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
                      {card.label}
                    </p>
                    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#111111', margin: '0 0 16px 0' }}>
                      {card.title}
                    </h3>
                    <p style={{ fontSize: '14.5px', color: '#555555', lineHeight: 1.75, margin: '0 0 20px 0' }}>
                      {card.body}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0', display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1 }}>
                      {card.bullets.map(b => (
                        <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#333333', lineHeight: 1.5 }}>
                          <span style={{ color: card.accent, marginTop: '1px', flexShrink: 0, fontWeight: 700 }}>•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={card.ctaHref}
                      style={{
                        display: 'inline-block',
                        marginTop: '28px',
                        border: '2px solid #111111',
                        color: '#111111',
                        padding: '12px 24px',
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        textAlign: 'center',
                        transition: 'background 0.2s ease, color 0.2s ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#111111'
                        e.currentTarget.style.color = '#ffffff'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = '#111111'
                      }}
                    >
                      {card.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Info banner */}
            <div
              style={{
                marginTop: '40px',
                background: '#eff6ff',
                borderRadius: '12px',
                padding: '32px 40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '32px',
                flexWrap: 'wrap',
              }}
            >
              <p style={{ fontSize: '16px', fontWeight: 700, color: '#1e3a5f', margin: 0, maxWidth: '680px', lineHeight: 1.55 }}>
                Interested in Claude Code &amp; Cowork, Microsoft 365 Copilot, or customizing an AI+ Workforce Enablement program for your organization?
              </p>
              <a
                href="/contact"
                style={{
                  flexShrink: 0,
                  background: '#2563eb',
                  color: '#ffffff',
                  padding: '14px 32px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.25s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1d4ed8')}
                onMouseLeave={e => (e.currentTarget.style.background = '#2563eb')}
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 6 — BATCH REGISTRATION
        ═══════════════════════════════════════════════════════ */}
        <section id="register" style={{ background: '#050d1a', padding: '120px 6%' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#2563eb', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
                UPCOMING BATCHES
              </p>
              <h2 style={{ fontSize: '48px', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, margin: '0 0 16px 0' }}>
                Choose Your Batch &amp; Register
              </h2>
              <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>
                Limited seats available per batch. Secure your spot today.
              </p>
            </div>

            {/* Table */}
            <p className="lcd-table-hint" style={{
              display: 'none',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.55)',
              fontStyle: 'italic',
              textAlign: 'center',
              marginBottom: '12px',
            }}>
              Swipe table left/right to see all batches →
            </p>
            <div
              className="lcd-table-wrap"
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <table className="lcd-batch-table" style={{ width: '100%', borderCollapse: 'collapse', minWidth: '640px' }}>
                <thead>
                  <tr style={{ background: 'rgba(37,99,235,0.2)' }}>
                    {['BATCH', 'START DATE', 'DAYS & TIMINGS', 'DURATION', 'FEE', 'ACTION'].map(h => (
                      <th
                        key={h}
                        style={{
                          padding: '18px 24px',
                          textAlign: 'left',
                          fontSize: '12px',
                          fontWeight: 600,
                          color: '#ffffff',
                          letterSpacing: '1.5px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      batch: 'Batch 1',
                      startDate: 'June 23, 2026',
                      bg: 'rgba(255,255,255,0.02)',
                    },
                    {
                      batch: 'Batch 2',
                      startDate: 'July 21, 2026',
                      bg: 'rgba(255,255,255,0.04)',
                    },
                  ].map(row => (
                    <tr
                      key={row.batch}
                      className="lcd-table-row"
                      style={{ background: row.bg, borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <td style={{ padding: '20px 24px', color: '#ffffff', fontWeight: 700, fontSize: '15px' }}>
                        {row.batch}
                      </td>
                      <td style={{ padding: '20px 24px', color: '#ffffff' }}>
                        {row.startDate}
                      </td>
                      <td style={{ padding: '20px 24px', color: '#ffffff' }}>
                        <div style={{ marginBottom: '10px' }}>
                          <strong>Tuesday &amp; Thursday</strong>, 7 PM–10 PM <strong>WAT</strong> / 1 PM–4 PM <strong>CST</strong>
                        </div>
                        <div>
                          <strong>Saturday &amp; Sunday</strong>, 8 PM–11 PM <strong>WAT</strong> / 2 PM–5 PM <strong>CST</strong>
                        </div>
                      </td>
                      <td style={{ padding: '20px 24px', color: '#ffffff', fontSize: '15px' }}>12 Weeks</td>
                      <td style={{ padding: '20px 24px', color: '#60a5fa', fontWeight: 700, fontSize: '16px' }}>
                        $2,499 USD
                      </td>
                      <td style={{ padding: '20px 24px' }}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedBatch(`${row.batch} — ${row.startDate}`)
                            setShowRegistrationModal(true)
                          }}
                          style={{
                            backgroundColor: '#2563eb',
                            color: '#ffffff',
                            border: 'none',
                            padding: '12px 24px',
                            borderRadius: '6px',
                            fontSize: '14px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'background-color 0.2s ease',
                            whiteSpace: 'nowrap',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
                          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#2563eb')}
                        >
                          Register Here
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Email info */}
            <div style={{ textAlign: 'center', marginTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="4" width="16" height="12" rx="2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />
                <path d="M2 7l8 5 8-5" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                Email us at{' '}
                <a href="mailto:training@chamco.ai" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 600 }}>
                  training@chamco.ai
                </a>{' '}
                for inquiries
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 7 — BEGIN YOUR TRANSFORMATION
        ═══════════════════════════════════════════════════════ */}
        <section
          style={{
            minHeight: '500px',
            backgroundImage: "url('/images/cta1-bg-img-1.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(5,13,26,0.92) 0%, rgba(10,22,40,0.86) 100%)',
            }}
          />
          <div style={{ position: 'relative', textAlign: 'center', maxWidth: '720px', padding: '80px 40px' }}>
            <p style={{ fontSize: '18px', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', margin: '0 0 12px 0' }}>
              Think Beyond. Think AI.
            </p>
            <h2 style={{ fontSize: '52px', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, margin: '0 0 20px 0' }}>
              Begin Your Transformation Today
            </h2>
            <p style={{ fontSize: '17px', color: '#cccccc', lineHeight: 1.75, margin: '0 0 36px 0' }}>
              Take the first step toward a rewarding career in AI and Cloud Technology. Join professionals worldwide who are transforming their futures through Chamco Digital&apos;s programs.
            </p>
            <a
              href="#register"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                display: 'inline-block',
                background: '#2563eb',
                color: '#ffffff',
                textDecoration: 'none',
                padding: '18px 48px',
                borderRadius: '6px',
                fontSize: '17px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'background 0.25s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#1d4ed8'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#2563eb'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Secure Your Spot Now
            </a>
          </div>
        </section>

        {showRegistrationModal && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowRegistrationModal(false)
            }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.75)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            <div style={{
              backgroundColor: '#0a1628',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '48px',
              width: '100%',
              maxWidth: '580px',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}>
              {/* Close button */}
              <button
                type="button"
                onClick={() => setShowRegistrationModal(false)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '20px',
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '24px',
                  cursor: 'pointer',
                  lineHeight: 1,
                }}
              >×</button>

              {/* Registration form — pass selectedBatch as default */}
              <RegistrationForm defaultBatch={selectedBatch} />
            </div>
          </div>
        )}

      </main>

      <Footer />
    </>
  )
}
