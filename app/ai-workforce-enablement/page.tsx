import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIWorkforceEnablementContent from "@/components/AIWorkforceEnablementContent";

export const metadata: Metadata = {
  title: "AI Workforce Enablement Emerges as a Strategic Imperative | Chamco Digital",
};

export default function AIWorkforceEnablementPage() {
  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: "#ffffff" }}>
        <AIWorkforceEnablementContent />
      </main>
      <Footer />
    </>
  );
}
