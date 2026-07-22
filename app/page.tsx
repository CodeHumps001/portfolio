import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroPage";

export default function Home() {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden selection:bg-lime-500 dark:selection:bg-lime-400 selection:text-black transition-colors duration-300">
      {/* Navigation Layer */}
      <Header />

      {/* Main Core Layout */}
      <main className="relative z-10">
        <HeroSection />
      </main>
    </div>
  );
}
