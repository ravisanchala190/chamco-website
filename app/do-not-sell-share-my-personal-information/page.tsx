import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Do Not Sell or Share My Personal Information | Chamco Digital',
}

const SECTIONS = [
  { id: 'right-to-opt-out', label: '1. Your Right to Opt Out' },
  { id: 'what-we-may-share', label: '2. What We May Share' },
  { id: 'how-to-submit', label: '3. How to Submit a Request' },
  { id: 'verification', label: '4. Verification of Requests' },
  { id: 'authorized-agents', label: '5. Authorized Agents' },
  { id: 'financial-incentives', label: '6. Financial Incentives' },
  { id: 'non-discrimination', label: '7. Non-Discrimination' },
  { id: 'contact-us', label: '8. Contact Us' },
]

export default function DoNotSellPage() {
  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: '#ffffff' }}>
        <style>{`
          .dns-toc a {
            display: block;
            font-size: 13px;
            color: #444444;
            text-decoration: none;
            padding: 6px 0;
            line-height: 1.5;
            border-left: 2px solid transparent;
            padding-left: 12px;
            transition: color 0.2s, border-color 0.2s;
          }
          .dns-toc a:hover { color: #2563eb; border-left-color: #2563eb; }
          .dns-bullet {
            list-style: none; padding: 0; margin: 16px 0 0 0;
            display: flex; flex-direction: column; gap: 10px;
          }
          .dns-bullet li {
            display: flex; gap: 10px; align-items: flex-start;
            font-size: 16px; line-height: 1.8; color: #333333; font-weight: 300;
          }
          .dns-bullet li::before {
            content: '•'; color: #2563eb; font-size: 18px;
            line-height: 1.6; flex-shrink: 0;
          }
          @media (max-width: 768px) {
            .dns-layout { flex-direction: column !important; }
            .dns-sidebar { display: none !important; }
          }
        `}</style>

        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, #050d1a 0%, #0a1628 50%, #0d1f3c 100%)',
          padding: '100px 24px', textAlign: 'center',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#60a5fa', margin: '0 0 24px 0' }}>PRIVACY RIGHTS</p>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, margin: '0 0 24px 0' }}>Do Not Sell or Share My Personal Information</h1>
            <p style={{ fontSize: '18px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, margin: '0 0 20px 0' }}>
              Chamco Digital respects your privacy rights under the California Consumer Privacy Act (CCPA) and similar state privacy laws.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>Effective Date: December 20, 2024</p>
          </div>
        </section>

        {/* Body */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px', display: 'flex', gap: '60px', alignItems: 'flex-start' }} className="dns-layout">

          {/* Sidebar */}
          <aside className="dns-sidebar" style={{ width: '220px', flexShrink: 0, position: 'sticky', top: '100px', backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#888888', margin: '0 0 16px 0' }}>Contents</p>
            <nav className="dns-toc">
              {SECTIONS.map((s) => <a key={s.id} href={`#${s.id}`}>{s.label}</a>)}
            </nav>
          </aside>

          {/* Main */}
          <div style={{ flex: 1, maxWidth: '860px' }}>
            <p style={bodyStyle}>
              At <span style={boldStyle}>Chamco Digital</span>, we are committed to blending artificial intelligence with innovation to empower businesses to thrive in the dynamic digital landscape. We respect your privacy rights and are dedicated to transparency in how your personal information is handled. This page explains your rights under the California Consumer Privacy Act (CCPA) and similar state privacy laws, specifically your right to opt out of the sale or sharing of your personal information. Chamco Digital does not sell your personal data to third parties. However, certain data sharing activities with technology and advertising partners may qualify as &apos;sharing&apos; under applicable law, and this page provides you with the tools to opt out.
            </p>

            <h2 id="right-to-opt-out" style={headingStyle}>Your Right to Opt Out</h2>
            <p style={bodyStyle}>Under the CCPA and similar state laws, California residents and other qualifying individuals have the right to:</p>
            <ul className="dns-bullet">
              <li><span>Opt out of the sale of their personal information to third parties.</span></li>
              <li><span>Opt out of the sharing of their personal information for cross-context behavioral advertising.</span></li>
              <li><span>Request disclosure of the categories and specific pieces of personal information collected about them.</span></li>
              <li><span>Request deletion of personal information, subject to certain exceptions.</span></li>
              <li><span>Not be discriminated against for exercising their privacy rights.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>These rights apply to personal information collected in the preceding 12 months.</p>

            <h2 id="what-we-may-share" style={headingStyle}>What We May Share</h2>
            <p style={bodyStyle}>While Chamco Digital does not sell personal information for monetary compensation, we may share certain data with trusted technology and advertising partners in ways that could qualify as &apos;sharing&apos; under applicable law. Categories of information that may be shared include:</p>
            <ul className="dns-bullet">
              <li><span><span style={boldStyle}>Identifiers:</span> Such as name, email address, and device identifiers used for service delivery and analytics.</span></li>
              <li><span><span style={boldStyle}>Usage Data:</span> Including browsing behavior on our website used for platform improvement and targeted advertising.</span></li>
              <li><span><span style={boldStyle}>Technical Data:</span> Such as IP addresses and browser information shared with analytics and security providers.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>This sharing is conducted under strict data protection agreements and is limited to purposes that support our service delivery.</p>

            <h2 id="how-to-submit" style={headingStyle}>How to Submit an Opt-Out Request</h2>
            <p style={bodyStyle}>To exercise your right to opt out of the sale or sharing of your personal information, you may:</p>
            <ul className="dns-bullet">
              <li><span>Submit a request via email to: <a href="mailto:privacy@chamcodigital.com" style={linkStyle}>privacy@chamcodigital.com</a> with the subject line &apos;Do Not Sell or Share My Personal Information&apos;</span></li>
              <li><span>Contact us by phone or through our website contact form at chamcodigital.com/contact</span></li>
              <li><span>Use browser-based Global Privacy Control (GPC) signals, which we honor as opt-out requests</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>We will process your request within 15 business days of receipt and confirm the action taken.</p>

            <h2 id="verification" style={headingStyle}>Verification of Requests</h2>
            <p style={bodyStyle}>To protect your privacy and prevent unauthorized requests, we may need to verify your identity before processing your opt-out request. Verification may require:</p>
            <ul className="dns-bullet">
              <li><span>Confirmation of your name and email address associated with your account or interactions.</span></li>
              <li><span>Additional identifying information to match your request with our records.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>We will not use verification information for any purpose other than processing your request.</p>

            <h2 id="authorized-agents" style={headingStyle}>Authorized Agents</h2>
            <p style={bodyStyle}>You may designate an authorized agent to submit opt-out requests on your behalf. To do so:</p>
            <ul className="dns-bullet">
              <li><span>Provide written authorization signed by you designating the agent.</span></li>
              <li><span>The agent must submit proof of authorization along with the request.</span></li>
              <li><span>We may contact you directly to verify the agent&apos;s authority.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>We will not deny a request solely because it is submitted by an authorized agent.</p>

            <h2 id="financial-incentives" style={headingStyle}>Financial Incentives</h2>
            <p style={bodyStyle}>Chamco Digital does not offer financial incentives in exchange for the collection, sale, or retention of personal information. We treat all users equally regardless of whether they exercise their privacy rights.</p>

            <h2 id="non-discrimination" style={headingStyle}>Non-Discrimination</h2>
            <p style={bodyStyle}>Chamco Digital will not discriminate against you for exercising your CCPA rights. We will not:</p>
            <ul className="dns-bullet">
              <li><span>Deny you goods or services.</span></li>
              <li><span>Charge different prices or rates.</span></li>
              <li><span>Provide a different level or quality of service.</span></li>
              <li><span>Suggest that you will receive a different level of service for exercising your rights.</span></li>
            </ul>

            <h2 id="contact-us" style={headingStyle}>Contact Us</h2>
            <p style={bodyStyle}>For questions about your privacy rights or to submit a request, please contact:</p>
            <div style={cardStyle}>
              <p style={cardTitleStyle}>Chamco Digital — Privacy Rights Team</p>
              <p style={cardRowStyle}><span style={boldStyle}>Email:</span>{' '}<a href="mailto:privacy@chamcodigital.com" style={linkStyle}>privacy@chamcodigital.com</a></p>
              <p style={cardRowStyle}><span style={boldStyle}>Website:</span>{' '}<a href="https://chamcodigital.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>chamcodigital.com</a></p>
              <p style={{ ...cardRowStyle, marginBottom: 0 }}><span style={boldStyle}>Address:</span> Beverly Hills, CA / Houston, TX</p>
            </div>
            <p style={{ ...bodyStyle, marginTop: '24px' }}>We are committed to responding to all privacy rights requests promptly and in full compliance with applicable law.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

const headingStyle: React.CSSProperties = { fontSize: '22px', fontWeight: 700, color: '#111111', marginTop: '48px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '2px solid #2563eb' }
const bodyStyle: React.CSSProperties = { fontSize: '16px', lineHeight: 1.8, color: '#333333', fontWeight: 300, margin: 0 }
const boldStyle: React.CSSProperties = { fontWeight: 600, color: '#111111' }
const cardStyle: React.CSSProperties = { backgroundColor: '#f0f4ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '32px', marginTop: '20px' }
const cardTitleStyle: React.CSSProperties = { fontSize: '16px', fontWeight: 700, color: '#111111', margin: '0 0 16px 0' }
const cardRowStyle: React.CSSProperties = { fontSize: '15px', color: '#333333', margin: '0 0 8px 0', fontWeight: 300 }
const linkStyle: React.CSSProperties = { color: '#2563eb' }
