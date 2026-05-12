import Link from "next/link";

export default function BottomCTABanner() {
  return (
    <section className="bg-[#050d1a] py-[100px]">
      {/* Inner container with a subtle radial glow */}
      <div
        className="max-w-[860px] mx-auto px-6 text-center"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
      >
        <h2
          className="font-bold text-white leading-tight mb-5"
          style={{ fontSize: "clamp(28px, 3.2vw, 42px)" }}
        >
          Ready to Solve What&apos;s Next?
        </h2>
        <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-lg mx-auto">
          Schedule your delivery call today and discover why Chamco Digital is
          the ideal partner for your digital transformation.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-[#2563eb] hover:bg-blue-700 text-white text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
