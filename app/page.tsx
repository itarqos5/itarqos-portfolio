import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neutral-950">
      <LoadingOverlay />
      <Navbar />
      <HeroSection />
      <ReviewsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}