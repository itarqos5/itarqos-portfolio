import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ReviewsSection from "@/components/ReviewsSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";
import TechnologiesSection from "@/components/TechnologiesSection";
import LightPillar from "@/components/LightPillar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070708] text-neutral-100 overflow-x-hidden antialiased">
      {/* 3D Light Pillar Background Animation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={0.9}
          rotationSpeed={0.25}
          glowAmount={0.006}
          pillarWidth={3.2}
          pillarHeight={0.4}
          noiseIntensity={0.3}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <LoadingOverlay />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <ReviewsSection />
        <SkillsSection />
        <TechnologiesSection />
      </div>
      <Footer />
    </div>
  );
}