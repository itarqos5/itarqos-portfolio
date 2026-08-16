import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServersSection from "@/components/ServersSection";
import ReviewsSection from "@/components/ReviewsSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";
import TechnologiesSection from "@/components/TechnologiesSection";
import SpaceField from "@/components/SpaceField";

export default function Home() {
  return (
    <div className="site-shell">
      {/*
        THESIS: Literal's work is presented as clear signals in a deep field, refusing the usual portfolio card grid.
        OWN-WORLD: Pure black, paper white, graphite, hairline orbital paths, the original profile image, and square controls.
        STORY: Visitors meet Literal, inspect real work and experience, read client feedback, then contact on Discord.
        FIRST VIEWPORT: Large left-set name and contact action face the original profile image inside moving orbital paths.
        FORM: Approved orbital hero composition; seed 6b141d3d.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
      */}
      <SpaceField />

      <LoadingOverlay />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <ServersSection />
        <ReviewsSection />
        <SkillsSection />
        <TechnologiesSection />
      </main>
      <Footer />
    </div>
  );
}
