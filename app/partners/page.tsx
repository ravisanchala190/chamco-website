import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PartnersContent from "@/components/PartnersContent";

export const metadata: Metadata = {
  title: "Chamco Digital Partners & Technology Alliances",
};

export default function PartnersPage() {
  return (
    <>
      <Navigation />
      <PartnersContent />
      <Footer />
    </>
  );
}
