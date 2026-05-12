export default function JensenHuangQuote() {
  return (
    <section
      className="relative py-[120px] overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/quote-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.7)" }}
      />

      <div className="relative z-10 max-w-[860px] mx-auto px-6 text-center">
        <blockquote
          className="italic text-white font-light leading-relaxed mb-10"
          style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
        >
          Every job will be affected, and immediately. It is unquestionable.
          You&apos;re not going to lose your job to Artificial Intelligence
          (AI), but you&apos;re going to lose your job to somebody who uses
          Artificial Intelligence (AI).
        </blockquote>

        <div className="text-center">
          <p className="text-white font-bold text-sm">Jensen Huang</p>
          <p className="text-gray-300 text-sm mt-1">
            Founder and CEO of Nvidia. Milken Institute Global Conference, 2025
          </p>
        </div>
      </div>
    </section>
  );
}
