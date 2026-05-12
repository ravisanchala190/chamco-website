import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DiscoverChamcoContent from "@/components/DiscoverChamcoContent";

export const metadata: Metadata = {
  title: "Chamco Digital – Discover AI & Cloud Solutions",
};

export default function DiscoverChamcoPage() {
  return (
    <>
      <Navigation />
      <DiscoverChamcoContent />
      <Footer />
    </>
  );
}
