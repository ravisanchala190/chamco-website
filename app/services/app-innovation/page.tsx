import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppInnovationContent from "@/components/AppInnovationContent";

export const metadata: Metadata = {
  title: "Chamco Digital App Innovation & Development",
};

export default function AppInnovationPage() {
  return (
    <>
      <Navigation />
      <AppInnovationContent />
      <Footer />
    </>
  );
}
