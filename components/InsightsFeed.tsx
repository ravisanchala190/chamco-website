import Link from "next/link";

const CARDS = [
  {
    image: "/images/Men-Standing.webp",
    category: "BLOG",
    title: "AI and cloud technology in harmony with mankind and nature's digital evolution >",
    href: "/blog/ai-and-cloud-technology-in-harmony-with-mankind-and-natures-digital-evolution",
  },
  {
    image: "/images/Black-Pearl.webp",
    category: "VISIONARY TECHNOLOGY",
    title: "What else can light do for a connected world? >",
    href: "/blog/what-else-can-light-do-for-a-connected-world",
  },
  {
    image: "/images/Cheetah.webp",
    category: "BLOG",
    title: "Adaptive leadership at the intersection of environmental stewardship and emerging technology >",
    href: "/blog/adaptive-leadership-at-the-intersection-of-environmental-stewardship-and-emerging-technology",
  },
  {
    image: "/images/Photonics.jpg",
    category: "REPORT",
    title: "Next-generation quantum photonics platform for secure communications >",
    href: "/blog/next-generation-quantum-photonics-platform-for-secure-communications-signals-infrastructure-shift-in-global-cybersecurity",
  },
  {
    image: "/images/Rare-Earth-Minerals.webp",
    category: "REPORT",
    title: "The critical role of rare earth minerals in advanced technology manufacturing >",
    href: "/blog/the-critical-role-of-rare-earth-minerals-in-advanced-technology-manufacturing",
  },
  {
    image: "/images/Abstract-Shape.webp",
    category: "BLOG",
    title: "Why hybrid cloud infrastructure is the future of scalable IT operations >",
    href: "/blog/why-hybrid-cloud-infrastructure-is-the-future-of-scalable-it-operations",
  },
  {
    image: "/images/Tech-Workers.webp",
    category: "GROWTH",
    title: "Closing the global tech skills gap: how Microsoft AI & cloud training programs are powering the next generation of digital leaders >",
    href: "/blog/closing-the-global-tech-skills-gap-how-microsoft-ai-cloud-training-programs-are-powering-the-next-generation-of-digital-leaders",
  },
  {
    image: "/images/Flowers.webp",
    category: "REPORT",
    title: "The future of enterprise automation: building resilient hybrid cloud architectures with AI at the core >",
    href: "/blog/the-future-of-enterprise-automation-building-resilient-hybrid-cloud-architectures-with-ai-at-the-core",
  },
];

export default function InsightsFeed() {
  return (
    <section style={{ backgroundColor: "#000000", paddingTop: "10px", paddingBottom: "35px" }}>
      <style>{`
        .insights-card {
          transition: transform 0.3s ease;
        }
        .insights-card:hover {
          transform: scale(1.02);
        }
        @media (max-width: 768px) {
          .insights-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .insights-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
      <div style={{ paddingLeft: "6%", paddingRight: "6%" }}>
        <div
          className="insights-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
          }}
        >
          {CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="insights-card"
              style={{
                display: "block",
                position: "relative",
                width: "100%",
                aspectRatio: "3 / 4",
                maxHeight: "440px",
                borderRadius: "4px",
                overflow: "hidden",
                backgroundImage: `url('${card.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                textDecoration: "none",
              }}
            >
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                }}
              />
              {/* Category label */}
              <span
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  color: "white",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  zIndex: 1,
                }}
              >
                {card.category}
              </span>
              {/* Title */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "16px",
                  right: "16px",
                  zIndex: 1,
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {card.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
