import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";
import TechnologiesSection from "@/components/TechnologiesSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070708] text-neutral-100 overflow-x-hidden antialiased">
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <LoadingOverlay />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <ReviewsSection />
        <SkillsSection />
        <TechnologiesSection />
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
}