import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogContent from "@/components/BlogContent";

export const metadata: Metadata = {
  title: "Chamco Digital Blog – AI, Cloud & Tech Insights",
};

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <BlogContent />
      <Footer />
    </>
  );
}
