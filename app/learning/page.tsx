export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LearningContent from "@/components/LearningContent";
import NavigationRefresh from "@/components/NavigationRefresh";

export const metadata: Metadata = {
  title: "Chamco Digital Training – AI & Cloud Skills",
};

export default function LearningPage() {
  return (
    <>
      <NavigationRefresh />
      <Navigation />
      <LearningContent />
      <Footer />
    </>
  );
}
