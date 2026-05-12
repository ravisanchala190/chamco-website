import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ManagedITContent from "@/components/ManagedITContent";

export const metadata: Metadata = {
  title: "Chamco Digital Managed IT Services",
};

export default function ManagedITPage() {
  return (
    <>
      <Navigation />
      <ManagedITContent />
      <Footer />
    </>
  );
}
