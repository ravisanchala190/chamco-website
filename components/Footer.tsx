import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Cloud & Cybersecurity", href: "/services/cybersecurity" },
  { label: "Data & AI", href: "/services/data-and-ai" },
  { label: "Cloud Migration", href: "/services/migration" },
  { label: "App Innovation & Automation", href: "/services/app-innovation" },
  { label: "Cloud Infrastructure", href: "/services/infrastructure" },
  { label: "Modern Work", href: "/services/modern-work" },
  { label: "System Integration", href: "/services/system-integration" },
  { label: "Managed IT Services", href: "/services/managed-it-services" },
  { label: "EDI Managed Services", href: "/services/edi-managed-services" },
];

const industries = [
  { label: "Health & Life Science", href: "/industries/healthcare" },
  { label: "Chemical Oil & Gas", href: "/industries/chemical-oil-gas" },
  { label: "Banking & Financial Services", href: "/industries/banking-and-financial-services" },
  { label: "Public Sector", href: "/industries/public-sector" },
  { label: "Real Estate & Construction", href: "/industries/real-estate-construction" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Media & Telecommunication", href: "/industries/media-telecommunication" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Cookie Policy", href: "/cookie-policies-settings" },
  { label: "Accessibility", href: "/accessibility-statement" },
  { label: "Do Not Sell My Info", href: "/do-not-sell-share-my-personal-information" },
];

/* ─── social icon SVGs ──────────────────────────────────── */
function LinkedInSVG() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function FacebookSVG() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function XSVG() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function ThreadsSVG() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 192 192">
      <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.05l13.378 9.177c5.512-8.356 14.165-10.171 21.742-10.171h.23c8.408.053 14.755 2.498 18.867 7.27 2.979 3.408 4.975 8.14 5.953 14.114a92.98 92.98 0 0 0-11.907-.611c-11.977 0-24.546 3.313-33.647 9.388-10.246 6.756-15.46 16.876-14.675 28.21.764 11.02 7.078 20.487 17.274 26.197 8.61 4.864 19.553 7.232 30.943 6.928 15.074-.417 27.57-5.904 36.146-15.88 6.547-7.67 10.882-17.667 12.92-29.75 2.177.868 4.198 1.882 6.01 3.044C152.433 131.048 160 145.24 160 160v.548c0 11.41-4.498 22.06-12.664 29.99-8.165 7.931-19.175 12.476-30.946 12.65-12.11.178-22.968-3.824-31.208-11.397-8.24-7.572-12.927-17.874-13.2-29.016-.047-1.942-.065-3.9-.047-5.889l-14.18.33c-.02 2.086.002 4.141.054 6.16.33 13.75 6.27 26.433 16.716 35.794C85.104 207.926 100.25 213.5 116.39 213.5c.77 0 1.545-.01 2.321-.031C154.75 212.5 184 183.4 184 147.548V147c0-21.576-10.518-40.957-28.463-53.012zm-49.15 60.104c-7.72-.22-13.74-2.617-17.383-6.928-3.276-3.883-4.905-9.22-4.616-14.863.578-11.087 8.857-17.82 22.306-17.82 2.88 0 5.693.266 8.39.787 4.64.895 8.953 2.475 12.782 4.688-.64 8.148-3.237 14.626-7.705 19.187-4.02 4.094-9.25 6.326-14.774 6.949z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#020810] border-t border-[#1e3a5f]">
      {/* Main grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/images/Chamco-Digital_final-color-1024x251.png"
                alt="Chamco Digital"
                width={180}
                height={44}
                className="h-11 w-auto object-contain"
                unoptimized
              />
            </Link>
            <p className="text-[#2563eb] font-semibold text-sm mb-6">
              Think Beyond. Think AI.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {[
                { href: "https://www.linkedin.com/company/chamco-digital", Icon: LinkedInSVG, label: "LinkedIn" },
                { href: "https://www.facebook.com/ChamcoDigital", Icon: FacebookSVG, label: "Facebook" },
                { href: "https://x.com/ChamcoMedia", Icon: XSVG, label: "X" },
                { href: "https://www.threads.com/@chamcodigital", Icon: ThreadsSVG, label: "Threads" },
              ].map(({ href, Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-5">
              Industries
            </h4>
            <ul className="space-y-3">
              {industries.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company quick links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Discover Chamco", href: "/discover-chamco" },
                { label: "Insights Hub", href: "/blog" },
                { label: "Learning", href: "/learning" },
                { label: "Partners", href: "/partners" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-[#1e3a5f]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy;2025, Chamco Digital LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-5 gap-y-2">
            {legal.map((l) => (
              <Link key={l.label} href={l.href} className="text-gray-600 hover:text-gray-400 text-xs transition-colors whitespace-nowrap">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
