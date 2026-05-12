import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Chamco Digital',
}

const SECTIONS = [
  { id: 'our-commitment', label: '1. Our Commitment' },
  { id: 'conformance-status', label: '2. Conformance Status' },
  { id: 'technical-specifications', label: '3. Technical Specifications' },
  { id: 'accessibility-features', label: '4. Accessibility Features' },
  { id: 'known-limitations', label: '5. Known Limitations' },
  { id: 'feedback-and-contact', label: '6. Feedback and Contact' },
  { id: 'formal-complaints', label: '7. Formal Complaints' },
  { id: 'updates', label: '8. Updates to This Statement' },
]

export default function AccessibilityStatementPage() {
  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: '#ffffff' }}>
        <style>{`
          .as-toc a {
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
          .as-toc a:hover { color: #2563eb; border-left-color: #2563eb; }
          .as-bullet {
            list-style: none; padding: 0; margin: 16px 0 0 0;
            display: flex; flex-direction: column; gap: 10px;
          }
          .as-bullet li {
            display: flex; gap: 10px; align-items: flex-start;
            font-size: 16px; line-height: 1.8; color: #333333; font-weight: 300;
          }
          .as-bullet li::before {
            content: '•'; color: #2563eb; font-size: 18px;
            line-height: 1.6; flex-shrink: 0;
          }
          @media (max-width: 768px) {
            .as-layout { flex-direction: column !important; }
            .as-sidebar { display: none !important; }
          }
        `}</style>

        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, #050d1a 0%, #0a1628 50%, #0d1f3c 100%)',
          padding: '100px 24px', textAlign: 'center',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#60a5fa', margin: '0 0 24px 0' }}>ACCESSIBILITY</p>
            <h1 style={{ fontSize: 'clamp(38px, 5vw, 52px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.05, margin: '0 0 24px 0' }}>Accessibility Statement</h1>
            <p style={{ fontSize: '18px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, margin: '0 0 20px 0' }}>
              Chamco Digital is dedicated to ensuring our digital services are accessible to everyone, including individuals with disabilities.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>Effective Date: December 20, 2024</p>
          </div>
        </section>

        {/* Body */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px', display: 'flex', gap: '60px', alignItems: 'flex-start' }} className="as-layout">

          {/* Sidebar */}
          <aside className="as-sidebar" style={{ width: '220px', flexShrink: 0, position: 'sticky', top: '100px', backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#888888', margin: '0 0 16px 0' }}>Contents</p>
            <nav className="as-toc">
              {SECTIONS.map((s) => <a key={s.id} href={`#${s.id}`}>{s.label}</a>)}
            </nav>
          </aside>

          {/* Main */}
          <div style={{ flex: 1, maxWidth: '860px' }}>
            <p style={bodyStyle}>
              At <span style={boldStyle}>Chamco Digital</span>, we are dedicated to blending artificial intelligence with innovation to empower businesses and individuals in the dynamic digital landscape. Inclusive design is central to our mission. We are committed to ensuring that our website, platforms, and digital services are accessible to all users, including individuals with disabilities. This Accessibility Statement outlines our commitment, the standards we follow, and how you can reach us if you experience any barriers.
            </p>

            <h2 id="our-commitment" style={headingStyle}>Our Commitment</h2>
            <p style={bodyStyle}>Chamco Digital strives to ensure that all users, regardless of ability or technology, can access and benefit from our digital services. We believe that accessibility is not just a legal obligation but a fundamental aspect of delivering transformative, inclusive AI and cloud technology solutions. We are committed to:</p>
            <ul className="as-bullet">
              <li><span>Designing and developing digital content that meets internationally recognized accessibility standards.</span></li>
              <li><span>Continuously reviewing and improving our platforms to address accessibility gaps.</span></li>
              <li><span>Providing alternative means of accessing content where full accessibility cannot yet be achieved.</span></li>
              <li><span>Training our teams on inclusive design principles and accessibility best practices.</span></li>
            </ul>

            <h2 id="conformance-status" style={headingStyle}>Conformance Status</h2>
            <p style={bodyStyle}>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible to people with disabilities. Our conformance status is:</p>
            <ul className="as-bullet">
              <li><span><span style={boldStyle}>Partially Conformant:</span> Some content may not fully meet all WCAG 2.1 Level AA criteria. We are actively working to identify and remediate these gaps.</span></li>
              <li><span>We conduct regular accessibility audits using automated tools and manual testing by users with disabilities.</span></li>
              <li><span>Known issues are tracked and prioritized for remediation in our development roadmap.</span></li>
            </ul>

            <h2 id="technical-specifications" style={headingStyle}>Technical Specifications</h2>
            <p style={bodyStyle}>Our website relies on the following technologies for conformance with WCAG 2.1:</p>
            <ul className="as-bullet">
              <li><span>HTML5 and ARIA (Accessible Rich Internet Applications) landmarks and attributes</span></li>
              <li><span>CSS3 for visual presentation with sufficient color contrast ratios</span></li>
              <li><span>JavaScript for dynamic content, with keyboard navigation support</span></li>
              <li><span>SVG for scalable graphics with appropriate text alternatives</span></li>
            </ul>

            <h2 id="accessibility-features" style={headingStyle}>Accessibility Features</h2>
            <p style={bodyStyle}>We have implemented the following accessibility features across our digital services:</p>
            <ul className="as-bullet">
              <li><span>Keyboard navigation support for all interactive elements</span></li>
              <li><span>Screen reader compatibility with descriptive alt text for images and icons</span></li>
              <li><span>Sufficient color contrast ratios meeting WCAG 2.1 Level AA standards</span></li>
              <li><span>Resizable text without loss of content or functionality</span></li>
              <li><span>Descriptive link text and clear heading structures for easy navigation</span></li>
              <li><span>Video content with captions and transcripts where applicable</span></li>
            </ul>

            <h2 id="known-limitations" style={headingStyle}>Known Limitations</h2>
            <p style={bodyStyle}>Despite our best efforts, some areas of our website may not yet be fully accessible. Known limitations include:</p>
            <ul className="as-bullet">
              <li><span>Some legacy PDF documents may not be fully screen reader compatible. We are working to remediate these.</span></li>
              <li><span>Certain third-party embedded content may not fully meet our accessibility standards.</span></li>
              <li><span>Some complex data visualizations may have limited screen reader support.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>We are committed to addressing these limitations as part of our ongoing accessibility improvement program.</p>

            <h2 id="feedback-and-contact" style={headingStyle}>Feedback and Contact</h2>
            <p style={bodyStyle}>We welcome feedback on the accessibility of our digital services. If you experience any barriers or have suggestions for improvement, please contact us:</p>
            <div style={cardStyle}>
              <p style={cardTitleStyle}>Chamco Digital — Accessibility Team</p>
              <p style={cardRowStyle}><span style={boldStyle}>Email:</span>{' '}<a href="mailto:accessibility@chamcodigital.com" style={linkStyle}>accessibility@chamcodigital.com</a></p>
              <p style={cardRowStyle}><span style={boldStyle}>Website:</span>{' '}<a href="https://chamcodigital.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>chamcodigital.com</a></p>
              <p style={{ ...cardRowStyle, marginBottom: 0 }}><span style={boldStyle}>Address:</span> Beverly Hills, CA / Houston, TX</p>
            </div>
            <p style={{ ...bodyStyle, marginTop: '24px' }}>We aim to respond to accessibility feedback within 5 business days and will work to resolve issues as quickly as possible.</p>

            <h2 id="formal-complaints" style={headingStyle}>Formal Complaints</h2>
            <p style={bodyStyle}>If you are not satisfied with our response to your accessibility concern, you have the right to contact your national or regional accessibility authority. In the United States, you may file a complaint with the Department of Justice Civil Rights Division or the relevant regulatory body in your jurisdiction.</p>

            <h2 id="updates" style={headingStyle}>Updates to This Statement</h2>
            <p style={bodyStyle}>This Accessibility Statement is reviewed and updated annually or when significant changes are made to our digital services. We are committed to continuous improvement in making our Services accessible to all.</p>
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
