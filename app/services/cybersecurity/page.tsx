import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CybersecurityContent from "@/components/CybersecurityContent";

export const metadata: Metadata = {
  title: "Chamco Digital Cybersecurity Services & Protection",
};

export default function CybersecurityPage() {
  return (
    <>
      <Navigation />
      <CybersecurityContent />
      <Footer />
    </>
  );
}
