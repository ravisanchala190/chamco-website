import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EDIManagedServicesContent from "@/components/EDIManagedServicesContent";

export const metadata: Metadata = {
  title: "Chamco Digital EDI Managed Services",
};

export default function EDIManagedServicesPage() {
  return (
    <>
      <Navigation />
      <EDIManagedServicesContent />
      <Footer />
    </>
  );
}
