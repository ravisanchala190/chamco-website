import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChemicalOilGasContent from "@/components/ChemicalOilGasContent";

export const metadata: Metadata = {
  title: "AI & Cloud Solutions for Chemical, Oil & Gas Industry",
};

export default function ChemicalOilGasPage() {
  return (
    <>
      <Navigation />
      <ChemicalOilGasContent />
      <Footer />
    </>
  );
}
