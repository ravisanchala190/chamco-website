import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RealEstateContent from "@/components/RealEstateContent";

export const metadata: Metadata = {
  title: "AI & Cloud Solutions for Real Estate & Construction",
};

export default function RealEstatePage() {
  return (
    <>
      <Navigation />
      <RealEstateContent />
      <Footer />
    </>
  );
}
