import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import LogosStrip from "@/components/home/LogosStrip";
import Features from "@/components/home/Features";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogosStrip />
      <Features />
      <CTASection />
      <Footer />
    </>
  );
}
