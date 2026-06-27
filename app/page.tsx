import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import LoadingOverlay from "@/components/LoadingOverlay";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-neutral-950" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-900/50 rounded-full blur-3xl" />
      <LoadingOverlay />
      <Navbar />
      <HeroSection />
      <SkillsSection />
    </div>
  );
}