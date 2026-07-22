"use client";

export default function JourneyTimeline() {
  const timelineData = [
    {
      year: "The Beginning",
      title: "YouTube, Curiosity & a Slow Laptop",
      description:
        "My journey into tech started long before university with countless YouTube tutorials, a slow laptop, and a curiosity for how software works. I spent hours experimenting, making mistakes, and learning the fundamentals of programming one step at a time.",
      badge: "Curiosity & Patience",
      position: "left",
    },

    {
      year: "The Foundation",
      title: "University & Web Development",
      description:
        "Studying Computer Technology gave me the structure I needed to grow. I immersed myself in HTML, CSS, JavaScript, databases, and software engineering while building small projects and sharpening my problem-solving skills.",
      badge: "Learning the Craft",
      position: "right",
    },

    {
      year: "The Growth",
      title: "Building Real-World Solutions",
      description:
        "What started as practice projects quickly turned into solving real problems. I began developing inventory systems, hospital platforms, booking applications, and other tools that people could actually use in their daily work.",
      badge: "From Ideas to Products",
      position: "left",
    },

    {
      year: "Today",
      title: "Student, Builder & Lifelong Learner",
      description:
        "Today, I balance university, freelance opportunities, and personal projects while exploring technologies like React, React Native, Node.js, and cloud tools. My goal is simple: keep learning, keep building, and create software that genuinely improves people's lives.",
      badge: "Still Building",
      position: "right",
    },
  ];

  return (
    <section
      id="about"
      className="w-11/12 max-w-7xl mx-auto py-24 border-t border-zinc-200/40 dark:border-white/5 transition-colors duration-300"
    >
      {/* Section Headings */}
      <div className="space-y-2 mb-20 text-left md:text-center max-w-xl mx-auto">
        <h3 className="text-zinc-400 dark:text-zinc-500 font-mono text-xs uppercase tracking-widest">
          — My Journey
        </h3>
        <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-zinc-950 dark:text-zinc-50">
          From a slow laptop to fast engineering.
        </h2>
      </div>

      {/* Main Structural Layout Container */}
      <div className="relative">
        {/* Central Spine Line (Visible on Desktop, hidden on Mobile) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-zinc-200 dark:bg-zinc-800 hidden md:block" />

        {/* Mobile Left-Handed Rail Line (Visible only on Mobile screens) */}
        <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-zinc-200 dark:bg-zinc-800 md:hidden" />

        <div className="space-y-12 md:space-y-0 relative">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-stretch w-full md:mb-16 group ${
                item.position === "left" ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Panel Side */}
              <div
                className={`w-full md:w-1/2 pl-10 pr-4 md:pl-0 md:pr-0 ${
                  item.position === "left"
                    ? "md:text-right md:pr-12"
                    : "md:text-left md:pl-12"
                }`}
              >
                <div className="space-y-2 max-w-md mx-auto md:mx-0 inline-block text-left">
                  {/* Badge & Year Row */}
                  <div
                    className={`flex items-center gap-3 mb-1 ${
                      item.position === "left"
                        ? "md:flex-row-reverse"
                        : "md:flex-row"
                    }`}
                  >
                    <span className="text-xs font-mono font-bold text-lime-600 dark:text-lime-300 tracking-wider">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/40 text-zinc-500 dark:text-zinc-400">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 transition-colors duration-300 group-hover:text-lime-600 dark:group-hover:text-lime-300">
                    {item.title}
                  </h4>

                  {/* Narrative Text */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Central Spine Node Intersecting Dot */}
              {/* Desktop Node Placement */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-1.5 w-3 h-3 rounded-full border-2 border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-black group-hover:border-lime-500 dark:group-hover:border-lime-300 transition-colors duration-300 hidden md:block" />

              {/* Mobile Node Placement */}
              <div className="absolute left-[11.5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-black group-hover:border-lime-500 dark:group-hover:border-lime-300 transition-colors duration-300 md:hidden" />

              {/* Invisible Spacer Panel for Desktop Grid Alignment Balance */}
              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
