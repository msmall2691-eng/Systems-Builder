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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="page-home">
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
  );
}
