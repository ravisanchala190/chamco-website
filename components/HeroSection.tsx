import Link from "next/link";

const upcomingTraining = [
  {
    title: "Microsoft AI 103 — Azure AI Apps and Agents Developer",
    date: "Coming soon—in June, 2026.",
    href: "/microsoft-ai-103-training",
  },
  {
    title: "Anthropic Cowork & Claude Code Training",
    date: "Coming soon—in June, 2026.",
    href: "/claude-code-cowork",
  },
  {
    title: "Microsoft 365 Copilot Training",
    date: "Coming soon—in June, 2026.",
    href: "/microsoft-365-copilot-training",
  },
  {
    title: "AI+ Workforce Enablement Training Programs",
    date: "Coming soon — June, 2026.",
    href: "/AI+-Workforce-Enablement-Courses",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden" style={{ paddingBottom: "10px" }}>
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        src="/images/revised_loop_mp4-1.mp4"
        poster="/images/videoframe_2236.png"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 1,
      }} />

      {/* Keyframes */}
      <style>{`
        @keyframes riseFromBottom {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(270px);
          }
        }

        @media (max-width: 768px) {
          .hero-text-container {
            left: 6% !important;
            right: 6% !important;
            width: auto !important;
          }
          .hero-headline {
            font-size: clamp(40px, 11vw, 80px) !important;
            white-space: normal !important;
            letter-spacing: -0.5px !important;
          }
          .hero-line-2 {
            animation: riseFromBottom 0.5s ease-out 0.5s forwards !important;
          }
          .hero-body-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          .hero-body-link {
            margin-left: 0 !important;
            font-size: 15px !important;
          }
          .hero-body-paragraph {
            font-size: 15px !important;
            max-width: 100% !important;
          }
          .hero-subheading {
            font-size: 17px !important;
          }
        }
      `}</style>

      {/* Text container — vertically centred, left-aligned at 6% */}
      <div
        className="hero-text-container"
        style={{
          position: "absolute",
          top: "50%",
          left: "6%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        {/* Headline */}
        <h1 style={{ margin: 0 }}>
          {/* Line 1 — rises at 0.1s */}
          <span
            className="hero-headline"
            style={{
              display: "block",
              fontSize: "clamp(64px, 9.2vw, 115px)",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-1px",
              lineHeight: 1.05,
              whiteSpace: "nowrap",
              opacity: 0,
              animation: "riseFromBottom 0.5s ease-out 0.1s forwards",
            }}
          >
            REDEFINE WHAT
          </span>

          {/* Line 2 — rises at 0.5s, then slides right at 1.5s */}
          <span
            className="hero-headline hero-line-2"
            style={{
              display: "block",
              fontSize: "clamp(64px, 9.2vw, 115px)",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-1px",
              lineHeight: 1.05,
              whiteSpace: "nowrap",
              opacity: 0,
              animation: "riseFromBottom 0.5s ease-out 0.5s forwards, slideRight 0.6s ease-out 1.5s forwards",
            }}
          >
            IS POSSIBLE
          </span>
        </h1>

        {/* Sub-content block — rises at 0.5s, same time as Line 2 */}
        <div
          style={{
            opacity: 0,
            animation: "riseFromBottom 0.5s ease-out 0.5s forwards",
            marginTop: "24px",
          }}
        >
          {/* Blue bar */}
          <div style={{ width: "60px", height: "3px", backgroundColor: "#2563eb", marginBottom: "16px" }} />

          {/* Subheading */}
          <p className="hero-subheading" style={{ color: "white", fontWeight: 700, fontSize: "20px", margin: "0 0 12px 0" }}>
            Skilling the Future.
          </p>

          {/* Body text + link side by side */}
          <div className="hero-body-row" style={{ display: "flex", alignItems: "center", gap: "48px" }}>
            <p
              className="hero-body-paragraph"
              style={{
                color: "white",
                fontSize: "17px",
                fontWeight: 300,
                maxWidth: "520px",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Powering the future through transformative AI and Cloud Technology
              training and AI adoption strategies, equipping communities,
              institutions, and industries with future-ready digital skills and
              scalable digital capabilities.
            </p>

            <Link
              href="/see-how-we-deliver"
              className="hero-body-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                color: "white",
                fontStyle: "italic",
                fontSize: "17px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                flexShrink: 0,
                marginLeft: "75px",
              }}
            >
              See how we deliver
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  border: "none",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9h12M10 4l5 5-5 5" stroke="black" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right panel — Upcoming Training */}
      <div
        className="hero-side-panel"
        style={{
          position: "absolute",
          top: "50%",
          right: "5%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: "240px",
        }}
      >
        {/* Section label */}
        <p style={{
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "2.5px",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.65)",
          margin: "0 0 10px 0",
        }}>
          Upcoming Training
        </p>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.18)", marginBottom: "20px" }} />

        {/* Items */}
        {upcomingTraining.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
              marginBottom: i < upcomingTraining.length - 1 ? "28px" : 0,
            }}
          >
            {/* Calendar icon */}
            <div style={{
              width: "32px",
              height: "32px",
              borderRadius: "6px",
              backgroundColor: "rgba(96, 165, 250, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: "1px",
            }}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="2.5" width="13" height="11" rx="1.5" stroke="#60a5fa" strokeWidth="1.3" />
                <path d="M1 6.5h13" stroke="#60a5fa" strokeWidth="1.3" />
                <path d="M4.5 1v3M10.5 1v3" stroke="#60a5fa" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>

            {/* Text */}
            <div>
              <Link href={item.href} className="hero-panel-title">
                {item.title}
              </Link>
              <p style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "12px",
                margin: "6px 0 0 0",
                lineHeight: 1.4,
              }}>
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
