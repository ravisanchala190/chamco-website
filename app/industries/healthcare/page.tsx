import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HealthcareContent from "@/components/HealthcareContent";

export const metadata: Metadata = {
  title: "Chamco Digital Healthcare & Life Sciences Tech",
};

export default function HealthcarePage() {
  return (
    <>
      <Navigation />
      <HealthcareContent />
      <Footer />
    </>
  );
}
