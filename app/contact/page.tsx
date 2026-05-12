import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Chamco Digital for AI & Cloud Solutions",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <ContactContent />
      <Footer />
    </>
  );
}
