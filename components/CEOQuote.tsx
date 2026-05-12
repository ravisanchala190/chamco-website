

import Image from "next/image";

export default function CEOQuote() {
  return (
    <section style={{ backgroundColor: "#000000", paddingTop: "85px", paddingBottom: "150px" }}>
      <style>{`
        @media (max-width: 768px) {
          .ceo-quote-row {
            flex-direction: column !important;
            padding-left: 6% !important;
            padding-right: 6% !important;
          }
          .ceo-quote-left {
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            padding-bottom: 32px !important;
          }
          .ceo-quote-right {
            width: 100% !important;
            min-height: 0 !important;
            aspect-ratio: 4 / 3 !important;
            align-self: auto !important;
          }
        }
      `}</style>
      <div className="ceo-quote-row" style={{ display: "flex", paddingLeft: "6%", paddingRight: "6%" }}>

        {/* Left column — 60% */}
        <div
          className="ceo-quote-left"
          style={{
            width: "60%",
            flexShrink: 0,
            paddingLeft: "6%",
            paddingRight: "48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Decorative opening quotation marks */}
          <div
            style={{
              fontSize: "80px",
              color: "rgba(255,255,255,0.15)",
              fontFamily: "Georgia, serif",
              lineHeight: 0.8,
              marginBottom: "24px",
              display: "block",
            }}
          >
            &ldquo;
          </div>

          {/* Quote text */}
          <p
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: 1.6,
              maxWidth: "560px",
              margin: 0,
            }}
          >
            We deliver AI and cloud solutions that transform operations and drive
            competitive growth. Our industry-aligned AI &amp; Cloud Technology
            training program equips professionals with hands-on,
            certification-focused skills for digital leadership.
          </p>

          {/* Attribution */}
          <p style={{ color: "white", fontWeight: 400, fontSize: "16px", marginTop: "32px", marginBottom: 0 }}>
            Deric Gurley
          </p>
        </div>

        {/* Right column — 40%, image fills full height */}
        <div className="ceo-quote-right" style={{ flex: 1, position: "relative", alignSelf: "stretch", minHeight: "420px" }}>
          <Image
            src="/images/Deric-Gurley.webp"
            alt="Deric Gurley"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center top",
              filter: "grayscale(30%)",
            }}
            unoptimized
          />
        </div>

      </div>
    </section>
  );
}
