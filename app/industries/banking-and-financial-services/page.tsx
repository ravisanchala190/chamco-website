import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BankingContent from "@/components/BankingContent";

export const metadata: Metadata = {
  title: "AI & Cloud Solutions for Banking & Financial Services",
};

export default function BankingPage() {
  return (
    <>
      <Navigation />
      <BankingContent />
      <Footer />
    </>
  );
}
