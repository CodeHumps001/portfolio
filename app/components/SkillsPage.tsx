"use client";

import Image from "next/image";

export default function SkillsGrid() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description:
        "I build responsive, accessible, and modern user interfaces with a strong focus on performance, usability, and creating experiences people genuinely enjoy using.",

      items: [
        { name: "Next.js", icon: "/next.png" },
        { name: "React", icon: "/react.jpg" },
        { name: "Tailwind", icon: "/tailwind.jpg" },
        { name: "HTML5", icon: "/html.avif" },
        { name: "CSS3", icon: "/css.png" },
        { name: "TypeScript", icon: "/typescript.webp" },
      ],
    },

    {
      title: "Backend Development",
      description:
        "I build REST APIs, manage databases, implement authentication, and develop scalable backend services that power modern web and mobile applications.",

      items: [
        { name: "Node.js", icon: "/node.png" },
        { name: "Express", icon: "/express.png" },
        { name: "PostgresSQL", icon: "/postgres.svg" },
        { name: "Prisma", icon: "/prisma.jpg" },
        { name: "GitHub", icon: "/github.png" },
        { name: "Postman", icon: "/postman.png" },
      ],
    },

    {
      title: "Mobile & Cloud Journey",
      description:
        "I'm currently expanding my skill set by learning cross-platform mobile development, cloud technologies, containerization, and AI integration to build complete production-ready systems.",

      items: [
        { name: "React Native", icon: "/native.png" },
        { name: "Expo", icon: "/expo.png" },
        { name: "Docker", icon: "/docker.png" },
        { name: "AWS", icon: "/aws.png" },
        { name: "Ollama", icon: "/ollama.svg" },
        { name: "Supabase", icon: "/supabase.jpg" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="w-11/12 max-w-7xl mx-auto py-24 border-t border-zinc-200/40 dark:border-white/5 transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="space-y-2 mb-16 text-left">
        <h3 className="text-zinc-400 dark:text-zinc-500 font-mono text-xs uppercase tracking-widest">
          — What I Work With
        </h3>
        <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-zinc-950 dark:text-zinc-50">
          Building modern software with the right tools.
        </h2>
      </div>

      {/* Grid Display Configuration */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white/40 dark:bg-zinc-900/20 shadow-sm dark:shadow-none space-y-6"
          >
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                {category.title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* In-Card Skill Icon Sub-Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {category.items.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center justify-center p-3 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 hover:border-lime-500 dark:hover:border-lime-300/30 transition-all duration-300"
                >
                  <div className="relative w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 group-hover:text-lime-600 dark:group-hover:text-lime-300 mt-2 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
