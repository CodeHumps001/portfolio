import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroPage";
import JourneyTimeline from "./components/JourneyTime";
import ProjectGallery from "./components/ProjectSection";
import SkillsGrid from "./components/SkillsPage";
import ContactAndFooter from "./components/FooterContact";

export default function Home() {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden selection:bg-lime-500 dark:selection:bg-lime-400 selection:text-black transition-colors duration-300">
      {/* Navigation Layer */}
      <Header />

      {/* Main Core Layout */}
      <main className="relative z-10">
        <HeroSection />
        <SkillsGrid />
        <JourneyTimeline />
        <ProjectGallery />
        <ContactAndFooter />
      </main>
    </div>
  );
}
