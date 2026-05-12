import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cookie Policy & Preferences | Chamco Digital',
}

const SECTIONS = [
  { id: 'what-are-cookies', label: '1. What Are Cookies' },
  { id: 'types-of-cookies', label: '2. Types of Cookies We Use' },
  { id: 'managing-preferences', label: '3. Managing Your Preferences' },
  { id: 'third-party-cookies', label: '4. Third-Party Cookies' },
  { id: 'retention-periods', label: '5. Cookie Retention Periods' },
  { id: 'updates', label: '6. Updates to This Policy' },
  { id: 'contact-us', label: '7. Contact Us' },
]

export default function CookiePolicyPage() {
  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: '#ffffff' }}>
        <style>{`
          .cp-toc a {
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
          .cp-toc a:hover { color: #2563eb; border-left-color: #2563eb; }
          .cp-bullet {
            list-style: none; padding: 0; margin: 16px 0 0 0;
            display: flex; flex-direction: column; gap: 10px;
          }
          .cp-bullet li {
            display: flex; gap: 10px; align-items: flex-start;
            font-size: 16px; line-height: 1.8; color: #333333; font-weight: 300;
          }
          .cp-bullet li::before {
            content: '•'; color: #2563eb; font-size: 18px;
            line-height: 1.6; flex-shrink: 0;
          }
          @media (max-width: 768px) {
            .cp-layout { flex-direction: column !important; }
            .cp-sidebar { display: none !important; }
          }
        `}</style>

        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, #050d1a 0%, #0a1628 50%, #0d1f3c 100%)',
          padding: '100px 24px', textAlign: 'center',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#60a5fa', margin: '0 0 24px 0' }}>LEGAL</p>
            <h1 style={{ fontSize: 'clamp(38px, 5vw, 52px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.05, margin: '0 0 24px 0' }}>Cookie Policy & Preferences</h1>
            <p style={{ fontSize: '18px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, margin: '0 0 20px 0' }}>
              Learn how Chamco Digital uses cookies, manage your preferences, and understand data use for service personalization and privacy protection.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>Effective Date: December 20, 2024</p>
          </div>
        </section>

        {/* Body */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px', display: 'flex', gap: '60px', alignItems: 'flex-start' }} className="cp-layout">

          {/* Sidebar */}
          <aside className="cp-sidebar" style={{ width: '220px', flexShrink: 0, position: 'sticky', top: '100px', backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#888888', margin: '0 0 16px 0' }}>Contents</p>
            <nav className="cp-toc">
              {SECTIONS.map((s) => <a key={s.id} href={`#${s.id}`}>{s.label}</a>)}
            </nav>
          </aside>

          {/* Main */}
          <div style={{ flex: 1, maxWidth: '860px' }}>
            <p style={bodyStyle}>
              At <span style={boldStyle}>Chamco Digital</span>, we are committed to transparency in how we collect and use data. This Cookie Policy explains what cookies are, how we use them, and the choices available to you. Cookies are small text files placed on your device when you visit our website or use our platforms. They enable us to deliver a seamless, personalized experience while supporting our mission to provide transformative AI and cloud technology solutions. By continuing to use our Services, you consent to our use of cookies as described in this policy.
            </p>

            <h2 id="what-are-cookies" style={headingStyle}>What Are Cookies</h2>
            <p style={bodyStyle}>Cookies are lightweight data files stored on your device by your web browser. They serve various purposes, from enabling essential website functionality to helping us understand how you interact with our platforms. Cookies can be:</p>
            <ul className="cp-bullet">
              <li><span><span style={boldStyle}>Session Cookies:</span> Temporary files deleted when you close your browser. They maintain your session state during a single visit.</span></li>
              <li><span><span style={boldStyle}>Persistent Cookies:</span> Remain on your device for a defined period or until manually deleted. They remember your preferences across visits.</span></li>
              <li><span><span style={boldStyle}>First-Party Cookies:</span> Set directly by Chamco Digital to support our Services.</span></li>
              <li><span><span style={boldStyle}>Third-Party Cookies:</span> Set by external partners, such as analytics and advertising providers, to support additional functionality.</span></li>
            </ul>

            <h2 id="types-of-cookies" style={headingStyle}>Types of Cookies We Use</h2>
            <p style={bodyStyle}>We use the following categories of cookies to deliver and improve our Services:</p>
            <ul className="cp-bullet">
              <li><span><span style={boldStyle}>Essential Cookies:</span> Required for core website functionality, including authentication, session management, and security. These cannot be disabled without affecting Service performance.</span></li>
              <li><span><span style={boldStyle}>Analytics Cookies:</span> Help us understand how visitors interact with our website by collecting anonymized data on page visits, time spent, and navigation paths. We use tools such as Google Analytics for this purpose.</span></li>
              <li><span><span style={boldStyle}>Functionality Cookies:</span> Remember your preferences, such as language settings, regional configurations, and display options, to provide a personalized experience.</span></li>
              <li><span><span style={boldStyle}>Marketing Cookies:</span> Used with your consent to deliver targeted advertisements and measure the effectiveness of our marketing campaigns across digital channels.</span></li>
              <li><span><span style={boldStyle}>Performance Cookies:</span> Monitor website performance, including load times and error rates, to help us maintain a high-quality user experience.</span></li>
            </ul>

            <h2 id="managing-preferences" style={headingStyle}>Managing Your Cookie Preferences</h2>
            <p style={bodyStyle}>You have full control over cookie settings. Here is how you can manage them:</p>
            <ul className="cp-bullet">
              <li><span><span style={boldStyle}>Browser Settings:</span> Most browsers allow you to block or delete cookies through their privacy or security settings. Refer to your browser&apos;s help documentation for instructions.</span></li>
              <li><span><span style={boldStyle}>Cookie Consent Tool:</span> Our website provides a cookie consent banner when you first visit, allowing you to accept or decline non-essential cookies.</span></li>
              <li><span><span style={boldStyle}>Opt-Out Links:</span> For third-party analytics cookies, you can opt out via tools such as Google Analytics Opt-Out Add-On.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>Please note that disabling certain cookies may affect the functionality of our website and Services.</p>

            <h2 id="third-party-cookies" style={headingStyle}>Third-Party Cookies</h2>
            <p style={bodyStyle}>Some features on our platforms are provided by third-party services that may set their own cookies. These include:</p>
            <ul className="cp-bullet">
              <li><span>Analytics providers (e.g., Google Analytics, Microsoft Clarity)</span></li>
              <li><span>Advertising networks for targeted marketing campaigns</span></li>
              <li><span>Social media platforms for sharing and engagement features</span></li>
              <li><span>Cloud service providers supporting platform infrastructure</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>Third-party cookies are governed by the respective privacy policies of those providers. We encourage you to review them.</p>

            <h2 id="retention-periods" style={headingStyle}>Cookie Retention Periods</h2>
            <p style={bodyStyle}>Different cookies are retained for varying periods:</p>
            <ul className="cp-bullet">
              <li><span>Session cookies expire when you close your browser.</span></li>
              <li><span>Analytics cookies are retained for up to 26 months.</span></li>
              <li><span>Marketing cookies are retained for up to 12 months or until you withdraw consent.</span></li>
              <li><span>Functionality cookies are retained for up to 12 months to remember your preferences.</span></li>
            </ul>

            <h2 id="updates" style={headingStyle}>Updates to This Policy</h2>
            <p style={bodyStyle}>We may update this Cookie Policy periodically to reflect changes in technology, regulation, or our Services. Significant changes will be communicated via our website. Your continued use of our Services following an update constitutes acceptance of the revised policy.</p>

            <h2 id="contact-us" style={headingStyle}>Contact Us</h2>
            <p style={bodyStyle}>For questions about our cookie practices or to exercise your privacy rights, contact us at:</p>
            <div style={cardStyle}>
              <p style={cardTitleStyle}>Chamco Digital — Privacy Team</p>
              <p style={cardRowStyle}><span style={boldStyle}>Email:</span>{' '}<a href="mailto:privacy@chamcodigital.com" style={linkStyle}>privacy@chamcodigital.com</a></p>
              <p style={cardRowStyle}><span style={boldStyle}>Website:</span>{' '}<a href="https://chamcodigital.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>chamcodigital.com</a></p>
              <p style={{ ...cardRowStyle, marginBottom: 0 }}><span style={boldStyle}>Address:</span> Beverly Hills, CA / Houston, TX</p>
            </div>
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
