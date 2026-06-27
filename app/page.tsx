import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-neutral-950 scroll-smooth">
      <LoadingOverlay />
      <Navbar />
      <HeroSection />
      <ReviewsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}