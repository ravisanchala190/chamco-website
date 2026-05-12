import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Use | Chamco Digital',
}

const SECTIONS = [
  { id: 'acceptance', label: '1. Acceptance of Terms' },
  { id: 'use-of-services', label: '2. Use of Services' },
  { id: 'eligibility', label: '3. Eligibility' },
  { id: 'intellectual-property', label: '4. Intellectual Property' },
  { id: 'confidentiality', label: '5. Confidentiality' },
  { id: 'payment-and-fees', label: '6. Payment and Fees' },
  { id: 'limitation-of-liability', label: '7. Limitation of Liability' },
  { id: 'disclaimer', label: '8. Disclaimer of Warranties' },
  { id: 'termination', label: '9. Termination' },
  { id: 'governing-law', label: '10. Governing Law' },
  { id: 'third-party', label: '11. Third-Party Services' },
  { id: 'amendments', label: '12. Amendments' },
  { id: 'contact-us', label: '13. Contact Us' },
]

export default function TermsOfUsePage() {
  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: '#ffffff' }}>
        <style>{`
          .tou-toc a {
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
          .tou-toc a:hover {
            color: #2563eb;
            border-left-color: #2563eb;
          }
          .tou-bullet {
            list-style: none;
            padding: 0;
            margin: 16px 0 0 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .tou-bullet li {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            font-size: 16px;
            line-height: 1.8;
            color: #333333;
            font-weight: 300;
          }
          .tou-bullet li::before {
            content: '•';
            color: #2563eb;
            font-size: 18px;
            line-height: 1.6;
            flex-shrink: 0;
          }
          @media (max-width: 768px) {
            .tou-layout { flex-direction: column !important; }
            .tou-sidebar { display: none !important; }
          }
        `}</style>

        {/* ── Hero ── */}
        <section style={{
          background: 'linear-gradient(135deg, #050d1a 0%, #0a1628 50%, #0d1f3c 100%)',
          padding: '100px 24px',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{
              fontSize: '12px', fontWeight: 700, letterSpacing: '3px',
              textTransform: 'uppercase', color: '#60a5fa', margin: '0 0 24px 0',
            }}>
              LEGAL
            </p>
            <h1 style={{
              fontSize: 'clamp(38px, 5vw, 52px)', fontWeight: 800,
              color: '#ffffff', lineHeight: 1.05, margin: '0 0 24px 0',
            }}>
              Terms of Use
            </h1>
            <p style={{
              fontSize: '18px', fontWeight: 300,
              color: 'rgba(255,255,255,0.7)', lineHeight: 1.65,
              margin: '0 0 20px 0',
            }}>
              Chamco Digital is committed to empowering your success with cutting-edge AI and cloud technology solutions.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
              Effective Date: December 20, 2024
            </p>
          </div>
        </section>

        {/* ── Body ── */}
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          padding: '80px 24px',
          display: 'flex',
          gap: '60px',
          alignItems: 'flex-start',
        }} className="tou-layout">

          {/* Sidebar TOC */}
          <aside className="tou-sidebar" style={{
            width: '220px',
            flexShrink: 0,
            position: 'sticky',
            top: '100px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            padding: '24px',
          }}>
            <p style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '2px',
              textTransform: 'uppercase', color: '#888888',
              margin: '0 0 16px 0',
            }}>
              Contents
            </p>
            <nav className="tou-toc">
              {SECTIONS.map((s) => (
                <a key={s.id} href={`#${s.id}`}>{s.label}</a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div style={{ flex: 1, maxWidth: '860px' }}>

            {/* Opening paragraph */}
            <p style={bodyStyle}>
              Welcome to <span style={boldStyle}>Chamco Digital</span>, a leader in blending artificial intelligence with innovation to empower businesses to thrive in the dynamic digital age. Our expert team delivers transformative AI and cloud technology solutions designed to optimize operations, enhance decision-making, and fuel sustainable growth. These Terms of Use govern your access to and use of our website, services, platforms, and solutions. By accessing or using our Services, you agree to be bound by these Terms, which form a legally binding agreement between you and Chamco Digital. If you do not agree to these Terms, please refrain from accessing or using our Services.
            </p>

            {/* Section 1 */}
            <h2 id="acceptance" style={headingStyle}>Acceptance of Terms</h2>
            <p style={bodyStyle}>By accessing or using our Services, you confirm your acceptance of these Terms in their entirety. If you are acting on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms. Failure to comply with these Terms may result in restricted access to our Services. We recommend reviewing these Terms periodically to stay informed of any updates.</p>

            {/* Section 2 */}
            <h2 id="use-of-services" style={headingStyle}>Use of Services</h2>
            <p style={bodyStyle}>Chamco Digital grants you a limited, non-exclusive, non-transferable, revocable license to access and use our Services solely for legitimate business purposes in accordance with these Terms. This license permits you to leverage our AI-driven solutions, cloud platforms, and related tools to optimize your operations. You agree not to:</p>
            <ul className="tou-bullet">
              <li><span>Misuse, abuse, or exploit our Services for purposes outside their intended scope.</span></li>
              <li><span>Reverse-engineer, decompile, or attempt to derive the source code of our AI tools, platforms, or systems.</span></li>
              <li><span>Disrupt, interfere with, or compromise the functionality, security, or performance of our Services.</span></li>
              <li><span>Use our Services in a manner that violates applicable laws, regulations, or third-party rights.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>Any unauthorized use of our Services may result in immediate termination of your access and potential legal action.</p>

            {/* Section 3 */}
            <h2 id="eligibility" style={headingStyle}>Eligibility</h2>
            <p style={bodyStyle}>Our Services are designed for businesses, organizations, and their authorized representatives. By using our Services, you confirm that:</p>
            <ul className="tou-bullet">
              <li><span>You are at least 18 years of age or have the legal capacity to enter into contracts.</span></li>
              <li><span>You have the authority to act on behalf of your organization, if applicable.</span></li>
              <li><span>Your use of our Services complies with all applicable local, national, and international laws and regulations.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>We reserve the right to verify eligibility and restrict access to our Services where necessary.</p>

            {/* Section 4 */}
            <h2 id="intellectual-property" style={headingStyle}>Intellectual Property</h2>
            <p style={bodyStyle}>All content, software, algorithms, methodologies, trademarks, and materials associated with Chamco Digital&apos;s Services are the exclusive intellectual property of Chamco Digital or its licensors. This includes, but is not limited to, our AI models, cloud solutions, platform architectures, and proprietary tools. You are granted no ownership rights by accessing our Services. You may not:</p>
            <ul className="tou-bullet">
              <li><span>Reproduce, distribute, or publicly display any content from our Services without prior written consent.</span></li>
              <li><span>Use our trademarks, logos, or branding materials without explicit authorization.</span></li>
              <li><span>Create derivative works based on our proprietary technologies or solutions.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>Unauthorized use of our intellectual property may result in legal action and significant penalties.</p>

            {/* Section 5 */}
            <h2 id="confidentiality" style={headingStyle}>Confidentiality</h2>
            <p style={bodyStyle}>In the course of engaging with Chamco Digital&apos;s Services, you may access confidential information, including proprietary AI methodologies, business strategies, technical specifications, and client data. You agree to:</p>
            <ul className="tou-bullet">
              <li><span>Maintain strict confidentiality of all non-public information shared by Chamco Digital.</span></li>
              <li><span>Use confidential information solely for the purposes outlined in your service agreement.</span></li>
              <li><span>Implement reasonable security measures to prevent unauthorized disclosure.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>Confidentiality obligations survive the termination of your use of our Services and remain in force indefinitely or as specified in applicable agreements.</p>

            {/* Section 6 */}
            <h2 id="payment-and-fees" style={headingStyle}>Payment and Fees</h2>
            <p style={bodyStyle}>Access to certain Chamco Digital Services may require payment of fees as specified in your service agreement or our pricing documentation. By engaging paid Services, you agree to:</p>
            <ul className="tou-bullet">
              <li><span>Pay all applicable fees in the currency and manner specified by Chamco Digital.</span></li>
              <li><span>Provide accurate billing information and notify us promptly of any changes.</span></li>
              <li><span>Honor subscription or contract terms, including renewal and cancellation provisions.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>All fees are non-refundable unless otherwise stated in your service agreement. We reserve the right to adjust pricing with reasonable advance notice.</p>

            {/* Section 7 */}
            <h2 id="limitation-of-liability" style={headingStyle}>Limitation of Liability</h2>
            <p style={bodyStyle}>To the fullest extent permitted by law, Chamco Digital and its affiliates, officers, employees, and partners shall not be liable for:</p>
            <ul className="tou-bullet">
              <li><span>Indirect, incidental, consequential, or punitive damages arising from your use of our Services.</span></li>
              <li><span>Loss of data, revenue, profits, or business opportunities resulting from Service disruptions.</span></li>
              <li><span>Errors, inaccuracies, or omissions in AI-generated outputs or recommendations.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>Our total liability for any claim arising from these Terms shall not exceed the amount paid by you for the relevant Services in the preceding three months. This limitation applies regardless of the legal theory under which the claim is brought.</p>

            {/* Section 8 */}
            <h2 id="disclaimer" style={headingStyle}>Disclaimer of Warranties</h2>
            <p style={bodyStyle}>Our Services are provided on an &apos;as is&apos; and &apos;as available&apos; basis without warranties of any kind, express or implied. Chamco Digital does not warrant that:</p>
            <ul className="tou-bullet">
              <li><span>Our Services will be uninterrupted, error-free, or free from security vulnerabilities.</span></li>
              <li><span>AI-generated outputs will be accurate, complete, or suitable for your specific use case.</span></li>
              <li><span>Our Services will meet all your business requirements or expectations.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>You assume full responsibility for evaluating the suitability of our Services for your needs and for any decisions made based on AI-generated insights.</p>

            {/* Section 9 */}
            <h2 id="termination" style={headingStyle}>Termination</h2>
            <p style={bodyStyle}>Chamco Digital reserves the right to suspend or terminate your access to our Services at any time, with or without notice, for:</p>
            <ul className="tou-bullet">
              <li><span>Violation of these Terms or any applicable laws or regulations.</span></li>
              <li><span>Non-payment of fees or breach of contractual obligations.</span></li>
              <li><span>Conduct deemed harmful to Chamco Digital, its clients, or third parties.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>Upon termination, your license to use our Services will immediately cease. Provisions of these Terms that by their nature should survive termination — including intellectual property, confidentiality, and limitation of liability — shall remain in effect.</p>

            {/* Section 10 */}
            <h2 id="governing-law" style={headingStyle}>Governing Law and Dispute Resolution</h2>
            <p style={bodyStyle}>These Terms are governed by the laws of the State of Texas, United States, without regard to conflict of law principles. Any disputes arising from these Terms or your use of our Services shall be resolved through:</p>
            <ul className="tou-bullet">
              <li><span><span style={boldStyle}>Negotiation:</span> Parties shall first attempt to resolve disputes amicably through good-faith negotiation within 30 days of written notice.</span></li>
              <li><span><span style={boldStyle}>Mediation:</span> If negotiation fails, disputes shall be submitted to non-binding mediation conducted by a mutually agreed mediator.</span></li>
              <li><span><span style={boldStyle}>Arbitration:</span> Unresolved disputes shall be settled by binding arbitration in Houston, Texas, in accordance with the rules of the American Arbitration Association.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>You waive the right to participate in class action lawsuits related to our Services.</p>

            {/* Section 11 */}
            <h2 id="third-party" style={headingStyle}>Third-Party Services and Links</h2>
            <p style={bodyStyle}>Our Services may integrate with or link to third-party platforms, tools, or websites. Chamco Digital is not responsible for the content, practices, or policies of these third parties. Your interactions with third-party services are governed by their respective terms and privacy policies. We encourage you to review these before engaging with third-party integrations.</p>

            {/* Section 12 */}
            <h2 id="amendments" style={headingStyle}>Amendments</h2>
            <p style={bodyStyle}>Chamco Digital reserves the right to modify these Terms at any time to reflect changes in our Services, legal requirements, or business practices. Significant amendments will be communicated via email or prominent notice on our website at least 14 days before taking effect. Your continued use of our Services following notification constitutes acceptance of the revised Terms. If you disagree with the changes, you must discontinue use of our Services.</p>

            {/* Section 13 */}
            <h2 id="contact-us" style={headingStyle}>Contact Us</h2>
            <p style={bodyStyle}>For questions, concerns, or legal inquiries regarding these Terms, please contact:</p>
            <div style={{
              backgroundColor: '#f0f4ff',
              border: '1px solid #bfdbfe',
              borderRadius: '12px',
              padding: '32px',
              marginTop: '20px',
            }}>
              <p style={{ fontSize: '16px', fontWeight: 700, color: '#111111', margin: '0 0 16px 0' }}>
                Chamco Digital — Legal Department
              </p>
              <p style={{ fontSize: '15px', color: '#333333', margin: '0 0 8px 0', fontWeight: 300 }}>
                <span style={boldStyle}>Email:</span>{' '}
                <a href="mailto:legal@chamcodigital.com" style={{ color: '#2563eb' }}>legal@chamcodigital.com</a>
              </p>
              <p style={{ fontSize: '15px', color: '#333333', margin: '0 0 8px 0', fontWeight: 300 }}>
                <span style={boldStyle}>Website:</span>{' '}
                <a href="https://chamcodigital.com" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>chamcodigital.com</a>
              </p>
              <p style={{ fontSize: '15px', color: '#333333', margin: 0, fontWeight: 300 }}>
                <span style={boldStyle}>Address:</span> Beverly Hills, CA / Houston, TX
              </p>
            </div>
            <p style={{ ...bodyStyle, marginTop: '24px' }}>We are committed to addressing your inquiries promptly and maintaining a transparent, trust-based relationship with all our clients and partners.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

const headingStyle: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: 700,
  color: '#111111',
  marginTop: '48px',
  marginBottom: '16px',
  paddingBottom: '12px',
  borderBottom: '2px solid #2563eb',
}

const bodyStyle: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: 1.8,
  color: '#333333',
  fontWeight: 300,
  margin: 0,
}

const boldStyle: React.CSSProperties = {
  fontWeight: 600,
  color: '#111111',
}
