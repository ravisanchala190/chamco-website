import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Chamco Digital',
}

const SECTIONS = [
  { id: 'information-we-collect', label: '1. Information We Collect' },
  { id: 'how-we-use', label: '2. How We Use Your Information' },
  { id: 'data-sharing', label: '3. Data Sharing and Disclosure' },
  { id: 'data-security', label: '4. Data Security' },
  { id: 'your-rights', label: '5. Your Rights' },
  { id: 'cookies', label: '6. Cookies and Tracking' },
  { id: 'data-retention', label: '7. Data Retention' },
  { id: 'international-transfers', label: '8. International Transfers' },
  { id: 'childrens-privacy', label: '9. Children\'s Privacy' },
  { id: 'third-party-links', label: '10. Third-Party Links' },
  { id: 'changes', label: '11. Changes to This Policy' },
  { id: 'contact-us', label: '12. Contact Us' },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: '#ffffff' }}>
        <style>{`
          .pp-toc a {
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
          .pp-toc a:hover {
            color: #2563eb;
            border-left-color: #2563eb;
          }
          .pp-bullet {
            list-style: none;
            padding: 0;
            margin: 16px 0 0 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .pp-bullet li {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            font-size: 16px;
            line-height: 1.8;
            color: #333333;
            font-weight: 300;
          }
          .pp-bullet li::before {
            content: '•';
            color: #2563eb;
            font-size: 18px;
            line-height: 1.6;
            flex-shrink: 0;
          }
          @media (max-width: 768px) {
            .pp-layout { flex-direction: column !important; }
            .pp-sidebar { display: none !important; }
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
              Privacy Policy
            </h1>
            <p style={{
              fontSize: '18px', fontWeight: 300,
              color: 'rgba(255,255,255,0.7)', lineHeight: 1.65,
              margin: '0 0 20px 0',
            }}>
              Chamco Digital is committed to safeguarding your privacy while empowering your business with transformative AI solutions.
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
        }} className="pp-layout">

          {/* Sidebar TOC */}
          <aside className="pp-sidebar" style={{
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
            <nav className="pp-toc">
              {SECTIONS.map((s) => (
                <a key={s.id} href={`#${s.id}`}>{s.label}</a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div style={{ flex: 1, maxWidth: '860px' }}>

            {/* Opening paragraph */}
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333333', fontWeight: 300, margin: 0 }}>
              At <span style={{ fontWeight: 600, color: '#111111' }}>Chamco Digital</span>, we are dedicated to blending artificial intelligence with innovation to empower businesses to excel in the dynamic digital landscape. Our mission to deliver transformative AI and cloud technology solutions, optimizing operations for clients worldwide, is anchored in trust, integrity, and an unwavering commitment to safeguarding your privacy. This Privacy Policy articulates our practices for collecting, using, protecting, and sharing information when you engage with our services, ensuring transparency as we drive your success. We adhere to global data protection standards, including GDPR, HIPAA, and other applicable regulations, to foster confidence in our partnership.
            </p>

            {/* Section 1 */}
            <h2 id="information-we-collect" style={headingStyle}>Information We Collect</h2>
            <p style={bodyStyle}>To deliver our cutting-edge AI and cloud technology services, we collect the following categories of information:</p>
            <ul className="pp-bullet">
              <li><span><span style={boldStyle}>Personal Data:</span> This includes your name, email address, phone number, job title, and other contact details you provide when interacting with us, such as during onboarding, inquiries, or event registrations. For example, we collect this data when you sign up for a consultation or newsletter.</span></li>
              <li><span><span style={boldStyle}>Business Data:</span> Operational, system, or proprietary data shared to tailor our AI solutions to your organization&apos;s needs. This may include workflow configurations, ERP/CRM data, or technical specifications required to optimize performance.</span></li>
              <li><span><span style={boldStyle}>Usage Data:</span> Analytics on how you interact with our platforms, including website visits, feature usage, and service performance metrics. We collect this data via cookies, web beacons, and similar technologies to enhance user experience and drive innovation.</span></li>
              <li><span><span style={boldStyle}>Device and Technical Data:</span> Information such as IP addresses, browser types, operating systems, and device identifiers, gathered to ensure compatibility and security across our services.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>We collect only the data necessary to fulfill our contractual obligations and improve your experience, ensuring minimal intrusion while maximizing value.</p>

            {/* Section 2 */}
            <h2 id="how-we-use" style={headingStyle}>How We Use Your Information</h2>
            <p style={bodyStyle}>Chamco Digital processes your information to deliver exceptional services and support your business objectives, including:</p>
            <ul className="pp-bullet">
              <li><span><span style={boldStyle}>Service Delivery:</span> Utilize personal and business data to design, deploy, and maintain tailored AI solutions that streamline operations, enhance decision-making, and drive growth.</span></li>
              <li><span><span style={boldStyle}>Communication:</span> Engage with you via email, phone, or digital channels to provide updates, respond to inquiries, and share insights on our latest AI innovations and service offerings.</span></li>
              <li><span><span style={boldStyle}>Analytics and Improvement:</span> Analyze usage data to refine our platforms, identify trends, and develop new features that align with your evolving business needs.</span></li>
              <li><span><span style={boldStyle}>Compliance and Security:</span> Process data to meet legal obligations, prevent fraud, and maintain the integrity and security of our systems.</span></li>
              <li><span><span style={boldStyle}>Marketing:</span> With your consent, share relevant content, case studies, and promotional materials about our AI and cloud services. You may opt out at any time.</span></li>
            </ul>

            {/* Section 3 */}
            <h2 id="data-sharing" style={headingStyle}>Data Sharing and Disclosure</h2>
            <p style={bodyStyle}>We value your privacy and limit data sharing to circumstances that support our mission:</p>
            <ul className="pp-bullet">
              <li><span><span style={boldStyle}>Service Providers:</span> Trusted third-party vendors, such as cloud infrastructure providers (e.g., Microsoft Azure, AWS) and analytics platforms, who assist in delivering our services under strict confidentiality agreements.</span></li>
              <li><span><span style={boldStyle}>Business Partners:</span> Select partners involved in co-delivering AI solutions, subject to data protection agreements ensuring your information is handled responsibly.</span></li>
              <li><span><span style={boldStyle}>Legal Compliance:</span> Regulatory authorities or law enforcement when required by applicable law, court orders, or to protect the rights and safety of Chamco Digital and its clients.</span></li>
              <li><span><span style={boldStyle}>Business Transfers:</span> In the event of a merger, acquisition, or asset sale, your data may be transferred to the successor entity, with prior notice provided where legally required.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>We do not sell your personal data to third parties, maintaining our commitment to trust and integrity.</p>

            {/* Section 4 */}
            <h2 id="data-security" style={headingStyle}>Data Security</h2>
            <p style={bodyStyle}>Chamco Digital employs industry-leading security measures to protect your information:</p>
            <ul className="pp-bullet">
              <li><span>End-to-end encryption for data in transit and at rest, using advanced cryptographic standards.</span></li>
              <li><span>Role-based access controls to restrict data access to authorized personnel only.</span></li>
              <li><span>Regular security audits, penetration testing, and vulnerability assessments to identify and mitigate risks.</span></li>
              <li><span>Compliance with SOC 2, ISO 27001, and other security frameworks relevant to our operations.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>While we strive for the highest security standards, no system is entirely immune to breaches. In the unlikely event of a data breach, we will notify affected parties in accordance with applicable regulations.</p>

            {/* Section 5 */}
            <h2 id="your-rights" style={headingStyle}>Your Rights</h2>
            <p style={bodyStyle}>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
            <ul className="pp-bullet">
              <li><span><span style={boldStyle}>Access:</span> Request a copy of the personal data we hold about you.</span></li>
              <li><span><span style={boldStyle}>Rectification:</span> Correct inaccurate or incomplete data.</span></li>
              <li><span><span style={boldStyle}>Erasure:</span> Request deletion of your data, subject to legal retention requirements.</span></li>
              <li><span><span style={boldStyle}>Portability:</span> Receive your data in a structured, machine-readable format.</span></li>
              <li><span><span style={boldStyle}>Objection:</span> Opt out of certain data processing activities, including marketing communications.</span></li>
              <li><span><span style={boldStyle}>Restriction:</span> Limit how we process your data in specific circumstances.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>To exercise these rights, contact us at <a href="mailto:privacy@chamcodigital.com" style={{ color: '#2563eb', fontWeight: 500 }}>privacy@chamcodigital.com</a>. We will respond within 30 days, as required by applicable law.</p>

            {/* Section 6 */}
            <h2 id="cookies" style={headingStyle}>Cookies and Tracking Technologies</h2>
            <p style={bodyStyle}>Our website and platforms use cookies and similar technologies to enhance your experience:</p>
            <ul className="pp-bullet">
              <li><span><span style={boldStyle}>Essential Cookies:</span> Required for core functionality, such as authentication and session management.</span></li>
              <li><span><span style={boldStyle}>Analytics Cookies:</span> Used to track website performance and user behavior, helping us improve our services.</span></li>
              <li><span><span style={boldStyle}>Marketing Cookies:</span> Deployed with your consent to deliver relevant advertisements and measure campaign effectiveness.</span></li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: '20px' }}>You can manage cookie preferences through your browser settings or our cookie consent tool. Disabling certain cookies may affect platform functionality.</p>

            {/* Section 7 */}
            <h2 id="data-retention" style={headingStyle}>Data Retention</h2>
            <p style={bodyStyle}>We retain your data for as long as necessary to fulfill the purposes outlined in this policy or as required by law:</p>
            <ul className="pp-bullet">
              <li><span>Personal data is retained for the duration of our business relationship and up to 7 years thereafter for legal and compliance purposes.</span></li>
              <li><span>Usage data is anonymized and retained for up to 2 years for analytical purposes.</span></li>
              <li><span>Business data is retained as specified in contractual agreements, with secure deletion upon contract termination.</span></li>
            </ul>

            {/* Section 8 */}
            <h2 id="international-transfers" style={headingStyle}>International Data Transfers</h2>
            <p style={bodyStyle}>As a global AI solutions provider, Chamco Digital may transfer your data across borders. We ensure all international transfers comply with applicable data protection laws, including GDPR&apos;s Standard Contractual Clauses (SCCs) and other approved transfer mechanisms. Your data is treated with the same level of protection regardless of where it is processed.</p>

            {/* Section 9 */}
            <h2 id="childrens-privacy" style={headingStyle}>Children&apos;s Privacy</h2>
            <p style={bodyStyle}>Our services are not directed at individuals under the age of 16. We do not knowingly collect personal data from minors. If we become aware of such collection, we will promptly delete the data and take appropriate corrective action. Parents or guardians who believe their child&apos;s data has been collected should contact us immediately.</p>

            {/* Section 10 */}
            <h2 id="third-party-links" style={headingStyle}>Third-Party Links</h2>
            <p style={bodyStyle}>Our platforms may contain links to third-party websites or services. Chamco Digital is not responsible for the privacy practices of these external entities. We encourage you to review their privacy policies before sharing any personal information.</p>

            {/* Section 11 */}
            <h2 id="changes" style={headingStyle}>Changes to This Policy</h2>
            <p style={bodyStyle}>We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or service offerings. Significant changes will be communicated via email or prominent notice on our website. The updated policy will be effective upon posting, and your continued use of our services constitutes acceptance of the revised terms.</p>

            {/* Section 12 */}
            <h2 id="contact-us" style={headingStyle}>Contact Us</h2>
            <p style={bodyStyle}>For questions, concerns, or to exercise your privacy rights, please contact our Data Protection Officer:</p>
            <div style={{
              backgroundColor: '#f0f4ff',
              border: '1px solid #bfdbfe',
              borderRadius: '12px',
              padding: '32px',
              marginTop: '20px',
            }}>
              <p style={{ fontSize: '16px', fontWeight: 700, color: '#111111', margin: '0 0 16px 0' }}>
                Chamco Digital — Data Protection Officer
              </p>
              <p style={{ fontSize: '15px', color: '#333333', margin: '0 0 8px 0', fontWeight: 300 }}>
                <span style={{ fontWeight: 600 }}>Email:</span>{' '}
                <a href="mailto:privacy@chamcodigital.com" style={{ color: '#2563eb' }}>privacy@chamcodigital.com</a>
              </p>
              <p style={{ fontSize: '15px', color: '#333333', margin: '0 0 8px 0', fontWeight: 300 }}>
                <span style={{ fontWeight: 600 }}>Website:</span>{' '}
                <a href="https://chamcodigital.com" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>chamcodigital.com</a>
              </p>
              <p style={{ fontSize: '15px', color: '#333333', margin: 0, fontWeight: 300 }}>
                <span style={{ fontWeight: 600 }}>Address:</span> Beverly Hills, CA / Houston, TX
              </p>
            </div>
            <p style={{ ...bodyStyle, marginTop: '24px' }}>We are committed to resolving your concerns promptly and transparently, reinforcing our dedication to trust and your privacy.</p>
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
