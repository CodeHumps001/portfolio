"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const words = [
    "Frontend Developer.",
    "Problem Solver.",
    "Backend Developer.",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Mounted state prevents theme hydration flashing
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleTyping = () => {
      const fullWord = words[currentWordIndex];

      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed, mounted]);

  const skills = [
    { name: "Next.js", icon: "/next.png" },
    { name: "React", icon: "/react.jpg" },
    { name: "Tailwind", icon: "/tailwind.jpg" },
    { name: "Node.js", icon: "/node.png" },
    { name: "Express", icon: "/express.png" },
    { name: "GitHub", icon: "/github.png" },
    { name: "HTML5", icon: "/html.avif" },
    { name: "CSS3", icon: "/css.png" },
  ];

  return (
    <section className="w-11/12 mx-auto min-h-[75vh] py-12 flex flex-col lg:flex-row items-center justify-around gap-16 lg:gap-8">
      {/* LEFT COLUMN: The Human Story */}
      <div className="flex-1 space-y-6 text-left w-full lg:max-w-[360px]">
        <div className="h-8 flex items-center">
          <p className="text-zinc-900 dark:text-zinc-100 font-mono text-sm font-medium">
            I am a{" "}
            <span className="text-lime-600 dark:text-lime-300 border-r-2 border-lime-600 dark:border-lime-300 pr-1 animate-pulse">
              {mounted ? currentText : "Frontend Developer."}
            </span>
          </p>
        </div>

        <h3 className="text-zinc-400 dark:text-zinc-500 font-mono text-xs uppercase tracking-widest">
          — My Story
        </h3>

        <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed font-light">
          I started out on a frustratingly slow laptop, fueled just by curiosity
          and an urge to figure out how things work. That taught me patience and
          an appreciation for optimization.
        </p>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-light">
          Today, I use that same focus to write code that clears the path
          instead of standing in the way. I believe good engineering makes
          complex tech feel simple, human, and completely natural to use.
        </p>

        <div className="flex items-center gap-6 pt-2">
          <Link
            href="#projects"
            className="group flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-lime-600 dark:text-lime-300 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
          >
            <span>Read Case Studies</span>
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      {/* CENTER COLUMN: Chinese Fan Fan-Out Arrangement */}
      <div className="w-full max-w-[280px] sm:max-w-[260px] flex justify-center shrink-0 relative py-8">
        <div className="relative aspect-[2/3] w-full group/fan">
          {/* Left Shadow Fan Image */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden  transition-all duration-500 ease-out origin-bottom transform -rotate-30 -translate-x-20 opacity-60 blur-[0.5px] scale-95 group-hover/fan:-rotate-[20deg] group-hover/fan:-translate-x-16 group-hover/fan:opacity-50">
            <Image
              src="/my-self.png"
              alt="Portrait Fan Left"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Shadow Fan Image */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden  transition-all duration-500 ease-out origin-bottom transform rotate-30 translate-x-20 opacity-60 blur-[0.5px] scale-95 group-hover/fan:rotate-[20deg] group-hover/fan:translate-x-16 group-hover/fan:opacity-50">
            <Image
              src="/my-self.png"
              alt="Portrait Fan Right"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Core Center Focal Image */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden  transition-all duration-500 ease-out transform origin-bottom scale-150 group-hover/fan:scale-[1.02]">
            <Image
              src="/my-self.png"
              alt="My Core Portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Grid of Local Image Icons */}
      <div className="flex-1 space-y-6 text-left w-full lg:max-w-[380px]">
        <h3 className="text-zinc-400 dark:text-zinc-500 font-mono text-xs uppercase tracking-widest">
          — Craft & Stack
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-light">
          Tools are just extension cords for ideas. These are the frameworks and
          technologies I lean on daily to bring digital experiences to life
          cleanly:
        </p>

        {/* Local Grid Layout for Stack Images */}
        <div className="grid grid-cols-4 gap-3 pt-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center p-3 rounded-xl border border-zinc-200 dark:border-white/5 bg-white/40 dark:bg-zinc-900/20 hover:border-lime-500 dark:hover:border-lime-300/30 hover:bg-zinc-100 dark:hover:bg-lime-300/[0.02] transition-all duration-300 cursor-default shadow-sm dark:shadow-none"
            >
              <div className="relative w-7 h-7 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 group-hover:text-lime-600 dark:group-hover:text-lime-300 mt-2 transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
