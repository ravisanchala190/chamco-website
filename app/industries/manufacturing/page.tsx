import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ManufacturingContent from "@/components/ManufacturingContent";

export const metadata: Metadata = {
  title: "AI & Cloud Solutions for Manufacturing",
};

export default function ManufacturingPage() {
  return (
    <>
      <Navigation />
      <ManufacturingContent />
      <Footer />
    </>
  );
}
