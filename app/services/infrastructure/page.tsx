import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InfrastructureContent from "@/components/InfrastructureContent";

export const metadata: Metadata = {
  title: "Chamco Digital Infrastructure Services",
};

export default function InfrastructurePage() {
  return (
    <>
      <Navigation />
      <InfrastructureContent />
      <Footer />
    </>
  );
}
