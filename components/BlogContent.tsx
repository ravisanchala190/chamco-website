import Image from "next/image";
import Link from "next/link";

type Post = {
  image: string | null;
  title: string;
  href: string;
  date: string;
};

const POSTS: Post[] = [
  { image: "/images/stop-3541821_1280-1.webp", title: "Revolutionizing Healthcare: How AI-Powered Drug Discovery is Rapidly Transforming the Pharmaceutical Industry", href: "/blog/revolutionizing-healthcare-how-ai-powered-drug-discovery-is-transforming-the-pharmaceutical-industry", date: "April 2, 2025" },
  { image: "/images/businessman-interacting-with-futuristic-graphics-1.jpg", title: "Project Optimization: Improving timelines, resources, and outcomes with intelligent planning tools.", href: "/blog/project-optimization", date: "April 2, 2025" },
  { image: "/images/Digital-Ecosystem.png", title: "Digital Ecosystems: Building Integrated Digital Ecosystems for Seamless Business Collaboration and Innovation", href: "/blog/digital-ecosystems", date: "April 3, 2025" },
  { image: "/images/Innovation-Image.png", title: "Innovation: Fueling the Future with Cutting-Edge Innovation and Digital Transformation", href: "/blog/innovation", date: "April 3, 2025" },
  { image: "/images/ai-generated-8722616_1280.webp", title: "The Future of Personalized Healthcare with Technology: Empowering tailored treatments using AI, data, and connected devices.", href: "/blog/the-future-of-personalized-healthcare-with-technology", date: "April 2, 2025" },
  { image: "/images/dna-1811955_1280.webp", title: "AI-Driven Diagnostics & Imaging: Revolutionizing Diagnostics and Imaging with AI-Powered Precision", href: "/blog/ai-driven-diagnostics-imaging", date: "April 2, 2025" },
  { image: "/images/online-consultation-7988709_1280.webp", title: "Telehealth & Remote Patient Monitoring: Connecting patients and providers through seamless, real-time digital health solutions", href: "/blog/telehealth-remote-patient-monitoring", date: "April 2, 2025" },
  { image: "/images/medical-8562583_1280.webp", title: "Clinical Trial Optimization: Optimizing Clinical Trials with Data-Driven Strategies and Technology", href: "/blog/clinical-trial-optimization", date: "April 2, 2025" },
  { image: "/images/ai-generated-9061893_1280.webp", title: "Genomic Medicine & Personalized Therapies: Advancing Genomic Medicine and Personalized Therapies Through Data Innovation", href: "/blog/genomic-medicine-personalized-therapies", date: "April 2, 2025" },
  { image: "/images/dentist-4373290_1280.webp", title: "Healthcare Administration & Operations: Streamlining Healthcare Administration and Operations for Better Patient Outcomes", href: "/blog/healthcare-administration-operations", date: "April 2, 2025" },
  { image: "/images/eye-766166_1280.webp", title: "Predictive & Preventive Healthcare: Advancing Predictive and Preventive Healthcare Through Data and Innovation", href: "/blog/predictive-preventive-healthcare", date: "April 2, 2025" },
  { image: "/images/oil-rig-514035_1280-1.webp", title: "Predictive Maintenance in the Chemical, Oil and Gas Industry: Using AI and IoT to prevent downtime and extend asset lifespan.", href: "/blog/predictive-maintenance-in-the-chemical-oil-and-gas-industry", date: "April 2, 2025" },
  { image: "/images/technology-7111799_1280.webp", title: "Exploration Optimization in the Oil & Gas Industry: Enhancing discovery and reducing costs through advanced analytics and AI.", href: "/blog/exploration-optimization-in-the-oil-gas-industry", date: "April 2, 2025" },
  { image: "/images/data-center-2476790_1280.webp", title: "Operational Automation: Automating workflows to increase efficiency, reduce errors, and save time.", href: "/blog/operational-automation", date: "April 2, 2025" },
  { image: null, title: "Safety Enhancement: Advancing Safety Enhancement Through Smart Technology and Proactive Measures", href: "/blog/safety-enhancement", date: "April 2, 2025" },
  { image: "/images/pollution-4846741_1280.webp", title: "Environmental Monitoring: Enhancing Supply Chain Efficiency in Chemical, Oil, and Gas", href: "/blog/environmental-monitoring", date: "April 2, 2025" },
  { image: "/images/train-7036270_1280.webp", title: "Supply Chain Efficiency: Optimizing logistics and inventory to reduce costs and improve reliability.", href: "/blog/supply-chain-efficiency", date: "April 2, 2025" },
  { image: "/images/artificial-intelligence-3382521_1280.webp", title: "Data Driven Decisions: Harnessing analytics to optimize operations, safety, and resource management.", href: "/blog/data-driven-decisions", date: "April 2, 2025" },
  { image: "/images/technology-3402365_1280.webp", title: "Scalable Infrastructure: Designing flexible, future-ready systems for evolving business demands and expansion.", href: "/blog/scalable-infrastructure", date: "April 2, 2025" },
  { image: "/images/security-265130_1280.webp", title: "Enhanced Security and Fraud Detection: Enhancing Security and Fraud Detection with Intelligent, Real-Time Solutions", href: "/blog/enhanced-security-and-fraud-detection", date: "April 2, 2025" },
  { image: "/images/client-3691432_1280.webp", title: "Personalized Customer Experience: Delivering Personalized Customer Experiences That Drive Loyalty and Growth", href: "/blog/personalized-customer-experience", date: "April 2, 2025" },
  { image: "/images/caution-454360_1280.webp", title: "Risk Management and Compliance: Mitigating risks and ensuring regulatory adherence with integrated technology solutions.", href: "/blog/risk-management-and-compliance", date: "April 2, 2025" },
  { image: "/images/turn-on-2923046_1280.webp", title: "Operational Efficiency & Automation: Streamlining workflows to reduce costs, save time, and enhance performance.", href: "/blog/operational-efficiency-automation", date: "April 2, 2025" },
  { image: "/images/hand-3044387_1280.webp", title: "Data-Driven Insights & Analytics: Turning raw data into actionable intelligence for informed decision-making", href: "/blog/data-driven-insights-analytics", date: "April 2, 2025" },
  { image: null, title: "Algorithmic Trading & Investment: Leveraging AI and automation to optimize speed, accuracy, and returns.", href: "/blog/algorithmic-trading-investment", date: "April 2, 2025" },
  { image: "/images/ux-788002_1280.webp", title: "Financial Inclusion & Accessibility: Bridging economic gaps with secure, inclusive, and user-friendly solutions", href: "/blog/financial-inclusion-accessibility", date: "April 2, 2025" },
  { image: "/images/blockchain-3055701_1280.jpg", title: "Blockchain Technology Integration: Securing data, streamlining processes, and enabling decentralized digital ecosystems.", href: "/blog/blockchain-technology-integration", date: "April 2, 2025" },
  { image: "/images/business-5475661_1280.jpg", title: "Citizen-Centric Services: Enhancing public engagement through personalized, accessible, and technology-driven solutions.", href: "/blog/citizen-centric-services", date: "April 2, 2025" },
  { image: "/images/earth-2254769_1280-1.jpg", title: "Operational Streamlining: Reducing complexity and boosting productivity with smart automation solutions.", href: "/blog/operational-streamlining", date: "April 2, 2025" },
  { image: "/images/internet-3563638_1280.jpg", title: "Data Transparency: Making data accessible, accountable, and understandable for better decisions.", href: "/blog/data-transparency", date: "April 2, 2025" },
  { image: "/images/internet-3484137_1280.jpg", title: "Regulatory Compliance: Navigating complex regulations with automated, consistent, and transparent solutions.", href: "/blog/regulatory-compliance", date: "April 2, 2025" },
  { image: "/images/cyber-4610993_1280.jpg", title: "Cybersecurity Resilience: Strengthening Cybersecurity Resilience to Protect Against Evolving Threats", href: "/blog/cybersecurity-resilience", date: "April 2, 2025" },
  { image: "/images/architecture-2562705_1280.jpg", title: "Scalable Infrastructure: Building Scalable Infrastructure That Grows Seamlessly with Your Business", href: "/blog/scalable-infrastructure-2", date: "April 2, 2025" },
  { image: "/images/analysis-1841158_1280.jpg", title: "Predictive Analytics: Transforming data into actionable forecasts for smarter, proactive decisions.", href: "/blog/predictive-analytics", date: "April 2, 2025" },
  { image: "/images/teamwork-3213924_1280.jpg", title: "Workforce Empowerment: Enabling collaboration, skill development, and engagement through innovative technologies.", href: "/blog/workforce-empowerment", date: "April 2, 2025" },
  { image: "/images/businessman-interacting-with-futuristic-graphics-1.jpg", title: "Project Optimization: Improving timelines, resources, and outcomes with intelligent planning tools.", href: "/blog/project-optimization", date: "April 2, 2025" },
  { image: "/images/young-businesswoman-searches-data-with-magnifying-glass-generated-by-ai-scaled-1.jpg", title: "Predictive Market Insights: Using AI and data analytics to forecast demand and drive growth.", href: "/blog/predictive-market-insights", date: "April 2, 2025" },
  { image: "/images/Consultants-Meeting-v46.png", title: "Workflow Automation: Streamlining Business Processes with Intelligent Workflow Automation", href: "/blog/workflow-automation", date: "April 2, 2025" },
  { image: "/images/Consultants-Meeting-v45.png", title: "Smart Property Management: Optimizing asset performance, tenant experience, and operational efficiency through technology.", href: "/blog/smart-property-management", date: "April 2, 2025" },
  { image: "/images/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-bus-scaled-1.jpg", title: "Scalable Collaboration: Facilitating seamless teamwork across locations with flexible, secure digital tools.", href: "/blog/scalable-collaboration", date: "April 2, 2025" },
  { image: "/images/person-using-ar-technology-perform-their-occupation.jpg", title: "Safety Monitoring: Proactively detecting risks to protect people, assets, and operations continuously.", href: "/blog/safety-monitoring", date: "April 2, 2025" },
  { image: "/images/3d-graph-computer-illustration-scaled-1.jpg", title: "Cost Efficiency: Reducing expenses while improving quality and operational performance effectively.", href: "/blog/cost-efficiency", date: "April 2, 2025" },
  { image: "/images/woman-is-looking-screen-with-monitor-showing-doctor-scaled-1.jpg", title: "Digital Twin Innovation: Creating virtual models to simulate, analyze, and optimize real-world assets", href: "/blog/digital-twin-innovation", date: "April 2, 2025" },
  { image: "/images/digital-illustration-bridge-with-blue-green-background-scaled-1.jpg", title: "Network Optimization: Optimizing connectivity to ensure faster, secure, and seamless digital experiences.", href: "/blog/network-optimization", date: "April 3, 2025" },
  { image: "/images/4099848_12321-scaled-1.jpg", title: "Content Personalization: Delivering Impactful Experiences with Intelligent Content Personalization", href: "/blog/content-personalization", date: "April 3, 2025" },
  { image: "/images/futuristic-technology-hologram-1-scaled-1.jpg", title: "Operational Efficiency: Optimizing processes to reduce costs, boost productivity, and enhance quality.", href: "/blog/operational-efficiency", date: "April 3, 2025" },
  { image: "/images/cybersecurity-concept-illustration-scaled-1.jpg", title: "Cybersecurity Protection: Defending your business with advanced, adaptive, and proactive security solutions.", href: "/blog/cybersecurity-protection", date: "April 3, 2025" },
  { image: "/images/futuristic-smart-city-with-5g-global-network-technology.jpg", title: "Scalable Infrastructure: Flexible, robust systems designed for seamless expansion and peak performance.", href: "/blog/scalable-infrastructure-3", date: "April 3, 2025" },
  { image: "/images/futuristic-technology-hologram-scaled-1.jpg", title: "Predictive Insights: Unlocking Future Opportunities with Advanced Predictive Insights", href: "/blog/predictive-insights", date: "April 3, 2025" },
  { image: "/images/enhancing-business-data-security-double-exposure-finger-print-drawing-desktop-computer-off-scaled-1.jpg", title: "Real-Time Analytics: Empowering faster decisions through live data monitoring and intelligent reporting.", href: "/blog/real-time-analytics", date: "April 3, 2025" },
  { image: "/images/executive-touching-icon-social-network.jpg", title: "Automated Content Creation: Generating personalized, scalable, and consistent content across channels in seconds.", href: "/blog/automated-content-creation", date: "April 3, 2025" },
  { image: "/images/robot-2301646_1280.jpg", title: "Production Optimization: Maximizing Efficiency and Output Through Smart Production Optimization", href: "/blog/production-optimization", date: "April 3, 2025" },
  { image: "/images/Predictive-Maintenance-Image.png", title: "Predictive Maintenance: Using real-time data and AI to prevent equipment failures early.", href: "/blog/predictive-maintenance", date: "April 3, 2025" },
  { image: "/images/a-book-3022615_1280.jpg", title: "Supply Chain Resilience: Enhancing visibility, agility, and risk management through data-driven innovation.", href: "/blog/supply-chain-resilience", date: "April 3, 2025" },
  { image: "/images/robot-7768527_1280.jpg", title: "Quality Assurance: Delivering reliable, high-quality solutions with systematic testing and validation.", href: "/blog/quality-assurance", date: "April 3, 2025" },
  { image: "/images/lego-628576_1280.jpg", title: "Operational Automation: Streamlining Operations with Intelligent Automation for Maximum Efficiency", href: "/blog/operational-automation-2", date: "April 3, 2025" },
  { image: "/images/ai-generated-7718658_1280.jpg", title: "Workforce Productivity: Maximizing Workforce Productivity Through Smart Tools and Collaboration", href: "/blog/workforce-productivity", date: "April 3, 2025" },
  { image: "/images/laptop-6332544_1280.jpg", title: "Scalable Infrastructure: Infrastructure That Grows Seamlessly With Your Business", href: "/blog/scalable-infrastructure-4", date: "April 3, 2025" },
  { image: "/images/lego-2383111_1280.jpg", title: "Smart Factory Insights: Unlocking Efficiency and Quality with Smart Factory Insights", href: "/blog/smart-factory-insights", date: "April 3, 2025" },
  { image: "/images/Innovation-Image.png", title: "Innovation: Fueling the Future with Cutting-Edge Innovation and Digital Transformation", href: "/blog/innovation", date: "April 3, 2025" },
  { image: "/images/Digital-Ecosystem.png", title: "Digital Ecosystems: Building Integrated Digital Ecosystems for Seamless Business Collaboration and Innovation", href: "/blog/digital-ecosystems", date: "April 3, 2025" },
  { image: "/images/hybrid-cloud-Image.png", title: "Hybrids: Empowering Hybrid Workplaces with Secure, Flexible, and Collaborative Technologies", href: "/blog/hybrids", date: "April 3, 2025" },
  { image: "/images/circuit-board-2528363_1280.jpg", title: "Predictive Maintenance: Optimizing Operations with Intelligent Predictive Maintenance Powered by AI", href: "/blog/predictive-maintenance-2", date: "April 3, 2025" },
  { image: "/images/Governance-Image.png", title: "Governance: Strengthening Governance to Ensure Compliance, Security, and Operational Excellence", href: "/blog/governance", date: "April 3, 2025" },
  { image: "/images/IoTs-Image.png", title: "IoTs: Harnessing IoT to Drive Smarter, Connected, and Automated Business Solutions", href: "/blog/iots", date: "April 3, 2025" },
  { image: "/images/img-1.jpeg", title: "Modern Work: Redefining productivity through AI, mobility, and seamless digital experiences.", href: "/blog/modern-work", date: "April 23, 2025" },
  { image: "/images/img-2.jpeg", title: "Cybersecurity: Protecting data, users, and systems in an evolving threat landscape.", href: "/blog/cybersecurity", date: "April 23, 2025" },
  { image: "/images/img-3.jpeg", title: "App Innovation & Infrastructure: Enabling agile development, scalable systems, and seamless digital transformation.", href: "/blog/app-innovation-infrastructure", date: "April 23, 2025" },
  { image: "/images/img-4.jpeg", title: "Data & AI: Powering smarter decisions, faster innovation, and next-gen business growth.", href: "/blog/data-ai", date: "April 23, 2025" },
  { image: null, title: "Customers Expect a Connected & Seamless Experience With Businesses: Meeting rising demands through unified, personalized, and real-time engagement strategies.", href: "/blog/customers-expect-a-connected-seamless-experience-with-businesses", date: "April 23, 2025" },
  { image: "/images/Consultants-Meeting-v80-scaled.webp", title: "How Copilot and AI Agents Are Rewriting the Rules of Personal Injury Law: Automating research, streamlining claims, and transforming client-lawyer interactions.", href: "/blog/rewriting-rules-of-modern-legal-practice", date: "August 13, 2025" },
  { image: "/images/Microsoft-Fabric-Image.webp", title: "Microsoft Fabric: Accelerating the Next Generation of Data Analytics Innovation", href: "/blog/microsoft-fabric-accelerates-data-analytics-breakthrough", date: "August 13, 2025" },
  { image: "/images/Cybersecurity-Image.webp", title: "Why Traditional Cybersecurity Approaches Are Failing Modern Businesses", href: "/blog/cybersecurity-approaches-are-failing-modern-businesses", date: "August 13, 2025" },
  { image: "/images/FHIR-Standards-Image.webp", title: "FHIR Standards Transforming Healthcare Data Exchange Across Platforms", href: "/blog/fhir-standards-transform-health-data", date: "August 13, 2025" },
  { image: "/images/Greenery-Image-v2.png", title: "Is This All Hype? Lessons from Past Tech Cycles for Agentic AI", href: "/blog/is-this-all-hype-lessons-from-past-tech-cycles-for-agentic-ai", date: "October 3, 2025" },
  { image: "/images/CEO-Deric-Gurley-v5.png", title: "Chamco Digital Welcomes Deric Gurley as New Chief Executive Officer", href: "/blog/chamco-digital-welcomes-deric-gurley-as-new-chief-executive-officer", date: "October 3, 2025" },
  { image: "/images/Nature-Image-v2.png", title: "Embrace the Paradigm Shift to Agentic AI Workflows for Success", href: "/blog/embrace-the-paradigm-shift-to-agentic-ai-workflows-for-success", date: "October 3, 2025" },
  { image: "/images/Industry-4.0-scaled.png", title: "Understanding AI Agents: The Four Evolutionary Stages from Chatbots to Digital Workforce", href: "/blog/understanding-ai-agents-the-four-evolutionary-stages-from-chatbots-to-digital-workforce", date: "October 3, 2025" },
  { image: "/images/Image-4-v1.jpg", title: "Dive into the Agentic Stack and Market Opportunity with Triple AI Acceleration Today", href: "/blog/dive-into-the-agentic-stack-and-market-opportunity-with-triple-ai-acceleration-today", date: "October 3, 2025" },
  { image: "/images/Image-3-v1-2.webp", title: "Redefining Managed Intelligence: How the Agentic Era Is Transforming the Future of Digital Service Delivery", href: "/blog/redefining-managed-intelligence-how-the-agentic-era-is-transforming-the-future-of-digital-service-delivery", date: "October 14, 2025" },
  { image: "/images/Execute-complex.webp", title: "Agentic AI: Simplifying Operational Complexity and Empowering SMBs to Thrive in the Dynamic Idea Economy", href: "/blog/agentic-ai-simplifying-operational-complexity-and-empowering-smbs-to-thrive-in-the-dynamic-idea-economy", date: "November 4, 2025" },
  { image: "/images/Access-expert-skills.webp", title: "Access world-class expert skills instantly through intuitive, user-friendly agent interfaces.", href: "/blog/access-world-class-expert-skills-instantly-through-intuitive-user-friendly-agent-interfaces", date: "November 4, 2025" },
  { image: "/images/Scale-large-operations.webp", title: "Scale large-scale operations economically and efficiently for small, agile teams with AI.", href: "/blog/scale-large-scale-operations-economically-and-efficiently-for-small-agile-teams-with-ai", date: "November 4, 2025" },
  { image: "/images/Compress-week-long.webp", title: "Compress week-long strategic decisions into actionable real-time minutes with advanced AI automation.", href: "/blog/compress-week-long-strategic-decisions-into-actionable-real-time-minutes-with-advanced-ai-automation", date: "November 4, 2025" },
  { image: "/images/Abstract-Shape.webp", title: "Why Hybrid Cloud Infrastructure Is the Future of Scalable IT Operations", href: "/blog/why-hybrid-cloud-infrastructure-is-the-future-of-scalable-it-operations", date: "March 26, 2026" },
  { image: "/images/Tech-Workers.webp", title: "Closing the Global Tech Skills Gap: How Microsoft AI & Cloud Training Programs Are Powering the Next Generation of Digital Leaders", href: "/blog/closing-the-global-tech-skills-gap-how-microsoft-ai-cloud-training-programs-are-powering-the-next-generation-of-digital-leaders", date: "March 26, 2026" },
  { image: "/images/Men-Standing.webp", title: "AI and Cloud Technology in Harmony with Mankind and Nature's Digital Evolution", href: "/blog/ai-and-cloud-technology-in-harmony-with-mankind-and-natures-digital-evolution", date: "March 26, 2026" },
  { image: "/images/Cheetah.webp", title: "Adaptive Leadership at the Intersection of Environmental Stewardship and Emerging Technology", href: "/blog/adaptive-leadership-at-the-intersection-of-environmental-stewardship-and-emerging-technology", date: "March 26, 2026" },
  { image: "/images/Black-Pearl.webp", title: "What Else Can Light Do for a Connected World?", href: "/blog/what-else-can-light-do-for-a-connected-world", date: "March 26, 2026" },
  { image: "/images/Photonics.jpg", title: "Next-Generation Quantum Photonics Platform for Secure Communications Signals Infrastructure Shift in Global Cybersecurity", href: "/blog/next-generation-quantum-photonics-platform-for-secure-communications-signals-infrastructure-shift-in-global-cybersecurity", date: "March 27, 2026" },
  { image: "/images/Rare-Earth-Minerals.webp", title: "The Critical Role of Rare Earth Minerals in Advanced Technology Manufacturing", href: "/blog/the-critical-role-of-rare-earth-minerals-in-advanced-technology-manufacturing", date: "March 27, 2026" },
  { image: "/images/Flowers.webp", title: "The Future of Enterprise Automation: Building Resilient Hybrid Cloud Architectures with AI at the Core", href: "/blog/the-future-of-enterprise-automation-building-resilient-hybrid-cloud-architectures-with-ai-at-the-core", date: "March 27, 2026" },
];

const CATEGORIES = [
  { label: "Banking and Finance",        href: "/blog/category/banking-and-finance" },
  { label: "Chemical, Gas and Oil",       href: "/blog/category/chemical-gas-and-oil" },
  { label: "Digital Ecosystems",          href: "/blog/category/digital-ecosystems" },
  { label: "Governance",                  href: "/blog/category/governance" },
  { label: "Healthcare and Life Science", href: "/blog/category/healthcare-and-life-science" },
  { label: "Hybrids",                     href: "/blog/category/hybrids" },
  { label: "Innovation",                  href: "/blog/category/innovation" },
  { label: "iOTs",                        href: "/blog/category/iots" },
  { label: "Manufacturing",               href: "/blog/category/manufacturing" },
  { label: "Media and Telecommunication", href: "/blog/category/media-and-telecommunication" },
  { label: "Predictive Maintenance",      href: "/blog/category/predictive-maintenance" },
  { label: "Public Sector",               href: "/blog/category/public-sector" },
  { label: "Real Estate",                 href: "/blog/category/real-estate" },
  { label: "Uncategorized",               href: "/blog/category/uncategorized" },
];

/* ─── helpers ────────────────────────────────────────────── */
function chunkArray<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

/* Split "Title: subtitle" into heading + excerpt where a colon exists */
function splitTitle(title: string): { heading: string; excerpt: string | null } {
  const idx = title.indexOf(":");
  if (idx === -1) return { heading: title, excerpt: null };
  return { heading: title.slice(0, idx).trim(), excerpt: title.slice(idx + 1).trim() };
}

/* ─── Featured post (post 0) ────────────────────────────── */
function FeaturedPost({ post }: { post: Post }) {
  const { heading, excerpt } = splitTitle(post.title);
  return (
    <div className="mb-10">
      <Link href={post.href} className="flex flex-col sm:flex-row gap-8 group">
        {post.image && (
          <div
            className="relative flex-shrink-0 overflow-hidden"
            style={{ width: "45%", aspectRatio: "4 / 3" }}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}
        <div className="flex flex-col justify-center flex-1 py-2">
          <h2
            className="font-bold text-[#111111] group-hover:text-[#2563eb] transition-colors leading-snug mb-3"
            style={{ fontSize: "24px" }}
          >
            {heading}
          </h2>
          {excerpt && (
            <p className="text-gray-500 leading-relaxed" style={{ fontSize: "15px" }}>
              {excerpt}
            </p>
          )}
        </div>
      </Link>
      <hr className="border-gray-200 mt-10" />
    </div>
  );
}

/* ─── Regular post card ──────────────────────────────────── */
function PostCard({ post }: { post: Post }) {
  return (
    <Link href={post.href} className="block group">
      {post.image && (
        <div className="relative w-full overflow-hidden mb-3" style={{ aspectRatio: "16 / 9" }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
      <h3
        className="font-bold text-[#111111] group-hover:text-[#2563eb] transition-colors leading-snug mb-1.5"
        style={{ fontSize: "15px" }}
      >
        {post.title}
      </h3>
      <p className="text-gray-400" style={{ fontSize: "13px" }}>
        {post.date}
      </p>
    </Link>
  );
}

/* ─── Sidebar social icon button ────────────────────────── */
function SocialBtn({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 bg-black hover:bg-[#2563eb] transition-colors flex items-center justify-center flex-shrink-0 text-white"
      style={{ borderRadius: "4px" }}
    >
      {children}
    </a>
  );
}

/* ─── Main export ────────────────────────────────────────── */
export default function BlogContent() {
  const featuredPost = POSTS[0];
  const rows = chunkArray(POSTS.slice(1), 3);

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row gap-14">

          {/* ── Left column: 70% ── */}
          <div className="w-full md:w-[70%] min-w-0">
            <FeaturedPost post={featuredPost} />

            <div>
              {rows.map((row, rowIdx) => (
                <div key={rowIdx}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8 py-10">
                    {row.map((post, i) => (
                      <PostCard key={i} post={post} />
                    ))}
                  </div>
                  {rowIdx < rows.length - 1 && <hr className="border-gray-200" />}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right sidebar: 30% ── */}
          <div className="w-full md:w-[30%] flex-shrink-0">
            <div style={{ position: "sticky", top: "80px" }}>

              {/* Section 1 — Blog heading + description */}
              <div className="mb-5">
                <h2
                  className="font-bold text-[#111111] mb-3"
                  style={{ fontSize: "22px" }}
                >
                  Blog
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  The Chamco Digital features insights, event recaps, news and more from our technology and industry experts.
                </p>
              </div>
              <hr className="border-gray-200 mb-5" />

              {/* Section 2 — Social icons */}
              <div className="flex items-center gap-2 mb-5">
                <SocialBtn href="https://www.linkedin.com/company/chamcodigital" label="LinkedIn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </SocialBtn>
                <SocialBtn href="https://www.facebook.com/ChamcoDigital" label="Facebook">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </SocialBtn>
                <SocialBtn href="https://x.com/ChamcoMedia" label="X">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </SocialBtn>
                <SocialBtn href="https://www.threads.com/@chamcodigital" label="Threads">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.868 1.206 8.617.024 12.197 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.792 3.104 3.313 5.373l-2.757.61c-.89-3.975-3.517-5.984-7.383-6.01-2.596.01-4.484.934-5.89 2.785C4.938 6.612 4.23 9.01 4.205 12c.024 2.998.733 5.397 2.115 7.147 1.406 1.862 3.294 2.786 5.883 2.795 2.366-.01 3.954-.641 5.023-2.01.811-1.047 1.235-2.48 1.261-4.264H12.35v-2.666h8.5c.077.5.109 1.012.109 1.55.001 2.697-.611 4.962-1.968 6.654C17.518 23.167 15.229 24 12.186 24z" />
                  </svg>
                </SocialBtn>
              </div>
              <hr className="border-gray-200 mb-5" />

              {/* Section 3 — At a glance */}
              <div className="mb-5">
                <h2
                  className="font-bold text-[#111111] mb-3"
                  style={{ fontSize: "16px" }}
                >
                  At a glance
                </h2>
                <div className="flex items-center gap-2 mb-2">
                  {/* Chat bubble icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="text-gray-600 text-sm">761 Total</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Envelope icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="text-gray-600 text-sm">761 Blogs</span>
                </div>
              </div>
              <hr className="border-gray-200 mb-5" />

              {/* Section 4 — What's related */}
              <div>
                <h2
                  className="font-bold text-[#111111] mb-3"
                  style={{ fontSize: "16px" }}
                >
                  What&apos;s related
                </h2>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="border border-gray-300 rounded-full px-3 py-1 text-xs text-gray-700 hover:text-[#2563eb] hover:border-[#2563eb] transition-colors whitespace-nowrap"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
