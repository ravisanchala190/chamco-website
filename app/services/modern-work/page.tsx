import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ModernWorkContent from "@/components/ModernWorkContent";

export const metadata: Metadata = {
  title: "Modern Work - Chamco Digital",
};

export default function ModernWorkPage() {
  return (
    <>
      <Navigation />
      <ModernWorkContent />
      <Footer />
    </>
  );
}
