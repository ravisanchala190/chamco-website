import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chamco Digital | AI & Cloud Technology Solutions",
  description:
    "Chamco Digital delivers AI and cloud solutions that transform operations and drive competitive growth.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#050d1a] text-white antialiased font-sans" suppressHydrationWarning>
        <div className="page-wrapper">{children}</div>
      </body>
    </html>
  );
}
