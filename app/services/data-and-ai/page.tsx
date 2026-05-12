import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DataAndAIContent from "@/components/DataAndAIContent";

export const metadata: Metadata = {
  title: "Chamco Digital Data & AI Services – Analytics & AI Models",
};

export default function DataAndAIPage() {
  return (
    <>
      <Navigation />
      <DataAndAIContent />
      <Footer />
    </>
  );
}
