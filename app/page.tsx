import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import InsightsFeed from "@/components/InsightsFeed";
import CEOQuote from "@/components/CEOQuote";
import TabbedContent from "@/components/TabbedContent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <InsightsFeed />
        <CEOQuote />
        <TabbedContent />
      </main>
      <Footer />
    </>
  );
}
