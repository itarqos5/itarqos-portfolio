import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ReviewsSection from "@/components/ReviewsSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";
import TechnologiesSection from "@/components/TechnologiesSection";
import GradientWaves from "@/components/GradientWaves";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070708] text-neutral-100 overflow-x-hidden antialiased">
      {/* 3D Gradient Waves Background Animation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <GradientWaves
          horizonColor="#7C3AED"
          waveColor="#FF9FFC"
          crestColor="#FFFFFF"
          speed={0.4}
          amplitude={2.5}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1.0}
          height={5.5}
          fogDepth={15}
          detail="medium"
          brightness={1.0}
          opacity={1.0}
          mouseInteraction={true}
          parallaxStrength={0.5}
          grain={true}
          grainIntensity={0.05}
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