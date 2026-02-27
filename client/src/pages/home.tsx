import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedSystems from "@/components/sections/FeaturedSystems";
import About from "@/components/sections/About";
import SystemsAndTechnical from "@/components/sections/SystemsAndTechnical";
import PlatformsExperience from "@/components/sections/PlatformsExperience";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import CursorGlow from "@/components/CursorGlow";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden" data-testid="page-home">
      <CursorGlow />
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
      <div className="relative z-10 pb-16 lg:pb-0">
        <Navbar />
        <Hero />
        <FeaturedSystems />
        <About />
        <SystemsAndTechnical />
        <PlatformsExperience />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
