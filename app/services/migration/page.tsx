import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MigrationContent from "@/components/MigrationContent";

export const metadata: Metadata = {
  title: "Chamco Digital Cloud Migration Services",
};

export default function MigrationPage() {
  return (
    <>
      <Navigation />
      <MigrationContent />
      <Footer />
    </>
  );
}
