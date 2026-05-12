import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SystemIntegrationContent from "@/components/SystemIntegrationContent";

export const metadata: Metadata = {
  title: "Chamco Digital System Integration Services",
};

export default function SystemIntegrationPage() {
  return (
    <>
      <Navigation />
      <SystemIntegrationContent />
      <Footer />
    </>
  );
}
