import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ProgramSection from "@/components/sections/ProgramSection";
import WhyDifferentSection from "@/components/sections/WhyDifferentSection";
import PricingSection from "@/components/sections/PricingSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ProgramSection />
      <WhyDifferentSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
