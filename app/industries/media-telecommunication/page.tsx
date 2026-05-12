import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MediaTelecomContent from "@/components/MediaTelecomContent";

export const metadata: Metadata = {
  title: "AI & Cloud Solutions for Media & Telecommunication",
};

export default function MediaTelecomPage() {
  return (
    <>
      <Navigation />
      <MediaTelecomContent />
      <Footer />
    </>
  );
}
