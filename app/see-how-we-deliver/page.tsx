import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HowWeHelpContent from "@/components/HowWeHelpContent";

export const metadata: Metadata = {
  title: "How Chamco Digital Helps Clients – AI & Cloud Capabilities",
};

export default function HowWeHelpPage() {
  return (
    <>
      <Navigation />
      <HowWeHelpContent />
      <Footer />
    </>
  );
}
