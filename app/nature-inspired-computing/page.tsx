import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NatureInspiredContent from "@/components/NatureInspiredContent";

export const metadata: Metadata = {
  title: "Bio-Inspired AI: Nature's Blueprint for Modern Algorithms | Chamco Digital",
};

export default function NatureInspiredPage() {
  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: "#ffffff" }}>
        <NatureInspiredContent />
      </main>
      <Footer />
    </>
  );
}
