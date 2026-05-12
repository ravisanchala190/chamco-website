"use client";

import Link from "next/link";
import { useState } from "react";

/* ─── Contact form ───────────────────────────────────────── */
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', subject: '', message: '',
  })
  const [activeField, setActiveField] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const requiredFields = ['name', 'email', 'subject', 'message']

  const validate = () => {
    const newErrors: Record<string, string> = {}
    requiredFields.forEach(field => {
      if (!formData[field as keyof typeof formData].trim()) {
        newErrors[field] = 'This field is required.'
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, services: selectedServices }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please try again or email us directly at develop@chamcodigital.com')
      }
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div style={{
        textAlign: 'center', padding: '60px 32px',
        background: 'rgba(37,99,235,0.06)', borderRadius: '12px',
        border: '1px solid rgba(37,99,235,0.2)',
      }}>
        <div style={{ fontSize: '48px', marginBottom: '20px' }}>✅</div>
        <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>
          Message Submitted Successfully
        </h3>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto' }}>
          Your message has been successfully submitted, and a member of our team will review your inquiry and respond shortly.
        </p>
      </div>
    )
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    backgroundColor: '#0d1b2e',
    border: `1px solid ${errors[field] ? '#ef4444' : activeField === field ? '#2563eb' : '#1e3a5f'}`,
    color: '#ffffff',
    borderRadius: '6px',
    padding: '14px 16px',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
    boxShadow: activeField === field ? '0 0 0 3px rgba(37,99,235,0.2)' : 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  })

  const renderField = (
    field: string,
    label: string,
    placeholder: string,
    type: string = 'text',
    isTextarea: boolean = false
  ) => {
    const isRequired = requiredFields.includes(field)
    const isActive = activeField === field
    const hasValue = formData[field as keyof typeof formData].trim().length > 0
    const showOverlay = isRequired && !isActive && !hasValue

    return (
      <div style={{ position: 'relative' }}>
        {showOverlay && (
          <div style={{
            position: 'absolute',
            left: '14px',
            top: isTextarea ? '14px' : '50%',
            transform: isTextarea ? 'none' : 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            pointerEvents: 'none',
            zIndex: 1,
          }}>
            <span style={{ color: '#ef4444', fontSize: '16px', fontWeight: 700, lineHeight: 1 }}>*</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '16px', fontWeight: 300 }}>{placeholder}</span>
          </div>
        )}
        {isTextarea ? (
          <textarea
            value={formData[field as keyof typeof formData]}
            onFocus={() => { setActiveField(field); setErrors(prev => ({ ...prev, [field]: '' })) }}
            onBlur={() => setActiveField(null)}
            onChange={e => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
            rows={5}
            placeholder=""
            style={{ ...inputStyle(field), resize: 'vertical' }}
          />
        ) : (
          <input
            type={type}
            value={formData[field as keyof typeof formData]}
            onFocus={() => { setActiveField(field); setErrors(prev => ({ ...prev, [field]: '' })) }}
            onBlur={() => setActiveField(null)}
            onChange={e => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
            placeholder=""
            style={{ ...inputStyle(field) }}
          />
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Service selector tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
        {[
          'CLOUD & CYBERSECURITY', 'DATA & AI', 'CLOUD MIGRATION',
          'APP INNOVATION & AUTOMATION', 'CLOUD INFRASTRUCTURE', 'MODERN WORKPLACE',
          'SYSTEM INTEGRATION', 'MANAGED IT SERVICES', 'EDI MANAGED SERVICES',
        ].map(s => (
          <button
            key={s}
            type="button"
            onClick={() => setSelectedServices(prev =>
              prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
            )}
            style={{
              padding: '8px 14px', borderRadius: '4px', fontSize: '11px',
              fontWeight: 600, letterSpacing: '0.5px', cursor: 'pointer',
              border: selectedServices.includes(s) ? 'none' : '1px solid #2563eb',
              backgroundColor: selectedServices.includes(s) ? '#2563eb' : 'transparent',
              color: '#ffffff', transition: 'all 0.2s ease',
            }}
          >{s}</button>
        ))}
      </div>

      {/* Name */}
      <div>
        {renderField('name', 'Name', 'First, Last Name')}
        {errors.name && <p style={{ color: '#ef4444', fontSize: '13px', margin: '4px 0 0 2px' }}>{errors.name}</p>}
      </div>

      {/* Phone — optional, no asterisk */}
      <div style={{ position: 'relative' }}>
        {activeField !== 'phone' && !formData.phone.trim() && (
          <div style={{
            position: 'absolute',
            left: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            zIndex: 1,
            color: 'rgba(255,255,255,0.4)',
            fontSize: '16px',
            fontWeight: 300,
          }}>
            Phone Number
          </div>
        )}
        <input
          type="tel"
          value={formData.phone}
          onFocus={() => setActiveField('phone')}
          onBlur={() => setActiveField(null)}
          onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          placeholder=""
          style={inputStyle('phone')}
        />
      </div>

      {/* Email */}
      <div>
        {renderField('email', 'Email', 'Email', 'email')}
        {errors.email && <p style={{ color: '#ef4444', fontSize: '13px', margin: '4px 0 0 2px' }}>{errors.email}</p>}
      </div>

      {/* Subject */}
      <div>
        {renderField('subject', 'Subject', 'Subject')}
        {errors.subject && <p style={{ color: '#ef4444', fontSize: '13px', margin: '4px 0 0 2px' }}>{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        {renderField('message', 'Message', 'Message', 'text', true)}
        {errors.message && <p style={{ color: '#ef4444', fontSize: '13px', margin: '4px 0 0 2px' }}>{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        style={{
          width: '100%', padding: '16px',
          backgroundColor: submitting ? '#1d4ed8' : '#2563eb',
          color: '#ffffff', border: 'none', borderRadius: '6px',
          fontSize: '16px', fontWeight: 600, cursor: submitting ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.2s ease',
          opacity: submitting ? 0.8 : 1,
        }}
      >
        {submitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  )
}

/* ─── Page content ───────────────────────────────────────── */
export default function ContactContent() {
  return (
    <main>
      {/* ════════════════════════════════════════
          SECTION 1 — Main Contact
      ════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#050d1a", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div style={{ display: "flex", gap: "60px", alignItems: "flex-start", flexWrap: "wrap" }}>

            {/* ── Left column — contact info ── */}
            <div style={{ flex: "0 0 calc(40% - 30px)", minWidth: "280px" }}>
              <h1
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  lineHeight: 1.15,
                  margin: 0,
                }}
              >
                Get in touch with us today
              </h1>
              <p
                style={{
                  color: "#c0c8d8",
                  fontSize: "16px",
                  lineHeight: "1.75",
                  maxWidth: "420px",
                  marginTop: "20px",
                }}
              >
                Share your project development ideas with us. We will move your company into the
                cloud, help you grow digitally and go to market on time.
              </p>

              {/* Contact blocks */}
              <div style={{ marginTop: "48px" }}>

                {/* Locations */}
                <div>
                  <p style={{ color: "#2563eb", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>
                    LOCATIONS
                  </p>
                  <p style={{ color: "white", fontWeight: 700, fontSize: "15px", marginTop: "10px", marginBottom: "4px" }}>
                    Houston, Texas
                  </p>
                  <p style={{ color: "#c0c8d8", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                    1 Riverway<br />Suite 1700<br />Houston, TX. 77056
                  </p>
                  <p style={{ color: "white", fontWeight: 700, fontSize: "15px", marginTop: "24px", marginBottom: "4px" }}>
                    Beverly Hills, California
                  </p>
                  <p style={{ color: "#c0c8d8", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                    8383 Wilshire Blvd.<br />Beverly Hills, CA 90211
                  </p>
                </div>

                {/* Phone */}
                <div style={{ marginTop: "32px" }}>
                  <p style={{ color: "#2563eb", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>
                    PHONE
                  </p>
                  <p style={{ color: "white", fontSize: "15px", marginTop: "10px", margin: "10px 0 0" }}>
                    (888) 556 7698
                  </p>
                </div>

                {/* Email */}
                <div style={{ marginTop: "32px" }}>
                  <p style={{ color: "#2563eb", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>
                    EMAIL
                  </p>
                  <a
                    href="mailto:develop@chamcodigital.com"
                    style={{ color: "#2563eb", fontSize: "15px", marginTop: "10px", display: "inline-block", textDecoration: "none" }}
                  >
                    develop@chamcodigital.com
                  </a>
                </div>
              </div>
            </div>

            {/* ── Right column — form ── */}
            <div style={{ flex: 1, minWidth: "280px" }}>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — Bottom CTA
      ════════════════════════════════════════ */}
      <style>{`
        @media (max-width: 768px) {
          .contact-cta {
            min-height: 440px !important;
          }
          .contact-cta-inner {
            padding: 40px 16px !important;
          }
        }
      `}</style>
      <section
        className="contact-cta"
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
        <div className="contact-cta-inner" style={{ position: "relative", zIndex: 10, padding: "60px 24px", maxWidth: "700px" }}>
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
