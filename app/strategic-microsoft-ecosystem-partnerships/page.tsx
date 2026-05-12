import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StrategicMicrosoftContent from "@/components/StrategicMicrosoftContent";

export const metadata: Metadata = {
  title: "Strategic Microsoft Ecosystem Partnerships Are the Defining Leadership Imperative in the AI Era | Chamco Digital",
};

export default function StrategicMicrosoftPage() {
  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: "#ffffff" }}>
        <StrategicMicrosoftContent />
      </main>
      <Footer />
    </>
  );
}
