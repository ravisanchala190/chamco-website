import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PublicSectorContent from "@/components/PublicSectorContent";

export const metadata: Metadata = {
  title: "AI & Cloud Solutions for the Public Sector",
};

export default function PublicSectorPage() {
  return (
    <>
      <Navigation />
      <PublicSectorContent />
      <Footer />
    </>
  );
}
