"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Sparkles,
  AppWindow,
} from "lucide-react";

export default function ProjectGallery() {
  const projects = {
    featured: {
      title: "Storeroom — Smart Inventory & POS",
      description:
        "A multi-tenant inventory and point-of-sale system built for pharmacies, groceries, electronics stores, and wholesalers. It includes sales tracking, receipt generation, barcode support, analytics, role management, and premium business insights.",

      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgresSQL",
        "Prismas",
        "Paystack",
      ],

      image: "/storeroom.png",

      liveUrl: "https://storeroom-in.vercel.app/",

      repoUrl: "https://github.com/CodeHumps001/storeroom-frontend",
    },

    hospital: {
      title: "Divine Staff — Hospital Operations Platform",

      description:
        "A complete web and mobile platform developed for Divine Netcare Hospital. Staff can chat, view shifts, request leave, receive announcements, mark attendance, and manage daily hospital activities from anywhere.",

      tags: [
        "React Native",
        "Expo",
        "Next.js",
        "Express",
        "PostgressSQL",
        "Zustand",
        "Prismas",
      ],

      image: "/divine.jpeg",

      liveUrl: "https://divinenetcarehospital.vercel.app/",

      repoUrl: "https://github.com/CodeHumps001/lifecare-frontend",
    },

    attendance: {
      title: "MediTrack — Attendance & Staff Management",

      description:
        "A hospital staff management system focused on attendance monitoring, leave moderation, employee records, and administrative reporting.",

      tags: ["React", "Node.js", "Express", "MySQL", "Tailwind"],

      image: "/meditrack.png",

      liveUrl: "#",

      repoUrl: "#",
    },

    booking: {
      title: "MediBook — Hospital Booking System",

      description:
        "An appointment and booking platform that allows patients to schedule visits while helping hospitals manage appointments more efficiently.",

      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MySQL"],

      image: "/medibook.png",

      liveUrl: "#",

      repoUrl: "#",
    },

    education: {
      title: "Bravo Study",

      description:
        "An educational platform currently under development, focused on improving learning experiences and making study resources more accessible to students.",

      tags: ["Next.js", "Node.js", "TypeScript", "MySQL"],

      image: "/bravo-study.png",

      liveUrl: "#",

      repoUrl: "#",
    },
  };

  // Safe inline SVG for the GitHub icon so it never breaks TypeScript compilers
  const GitHubIcon = ({ size = 18 }: { size?: number }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );

  return (
    <section
      id="projects"
      className="w-11/12 max-w-6xl mx-auto py-24 border-t border-zinc-200/40 dark:border-white/5 transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="space-y-2 mb-16 text-left">
        <h3 className="text-zinc-400 dark:text-zinc-500 font-mono text-xs uppercase tracking-widest">
          — Case Studies & Builds
        </h3>
        <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-zinc-950 dark:text-zinc-50">
          Selected spaces I've engineered.
        </h2>
      </div>

      {/* Modern Bento Grid Structure */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* BOX 1: Flagship Featured Project (Spans 2 columns on desktop) */}
        <div className="md:col-span-2 flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white/40 dark:bg-zinc-900/20 hover:border-lime-500/30 dark:hover:border-lime-300/20 transition-all duration-500 group shadow-sm dark:shadow-none">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-md bg-lime-100 text-lime-800 dark:bg-lime-400/10 dark:text-lime-300 font-medium">
                Featured System
              </span>
              <div className="flex items-center gap-3 text-zinc-400 dark:text-zinc-500">
                <Link
                  href={projects.featured.repoUrl}
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <GitHubIcon size={18} />
                </Link>
                <Link
                  href={projects.featured.liveUrl}
                  className="hover:text-lime-600 dark:hover:text-lime-300 transition-colors"
                >
                  <ExternalLink size={18} />
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-lime-600 dark:group-hover:text-lime-300 transition-colors duration-300">
                {projects.featured.title}
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-xl">
                {projects.featured.description}
              </p>
            </div>

            {/* Micro Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {projects.featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 bg-zinc-100/50 dark:bg-zinc-900/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Clean Mock Image Wrapper */}
          <div className="relative aspect-[16/9] w-full mt-6 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-zinc-200/50 dark:border-white/5">
            <Image
              src={projects.featured.image}
              alt={projects.featured.title}
              fill
              className="object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* BOX 2: Live Focus / Problem Solving Block (Spans 1 column) */}
        <div className="p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white/40 dark:bg-zinc-900/20 flex flex-col justify-between shadow-sm dark:shadow-none">
          <div className="space-y-4">
            <div className="p-2 w-fit rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500">
              <Code2 size={20} />
            </div>
            <h4 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
              Current Focus
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Right now, I am going deep into database index optimizations and
              headless layout architectures. I'm focusing on minimizing initial
              client bundles to keep core interactions fast, even on lower-end
              devices.
            </p>
          </div>
          <div className="pt-4 border-t border-zinc-200/60 dark:border-white/5 flex items-center gap-2 text-[11px] font-mono text-lime-600 dark:text-lime-300">
            <Sparkles
              size={12}
              className="animate-spin"
              style={{ animationDuration: "3s" }}
            />
            <span>Refining performance metrics</span>
          </div>
        </div>

        {/* BOX 3: Minimalist Github Statistics Hook (Spans 1 column) */}
        <div className="p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white/40 dark:bg-zinc-900/20 flex flex-col justify-between group shadow-sm dark:shadow-none">
          <div className="space-y-4">
            <div className="p-2 w-fit rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500">
              <GitHubIcon size={20} />
            </div>
            <h4 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
              Open Source
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              I believe in sharing knowledge. Most of my structural experimental
              code repos, components, and design utility setups are fully open
              for review.
            </p>
          </div>

          <Link
            href="https://github.com"
            target="_blank"
            className="group/link flex items-center justify-between text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 pt-4 border-t border-zinc-200/60 dark:border-white/5 transition-colors"
          >
            <span>Explore my profile</span>
            <ArrowUpRight
              size={14}
              className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>

        {/* BOX 4: Secondary Project Block (Spans 2 columns on desktop) */}
        <div className="md:col-span-2 flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white/40 dark:bg-zinc-900/20 hover:border-lime-500/30 dark:hover:border-lime-300/20 transition-all duration-500 group shadow-sm dark:shadow-none">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500">
                <AppWindow size={14} />

                <span className="text-[10px] font-mono tracking-wider uppercase">
                  Hospital Ecosystem
                </span>
              </div>

              <div className="flex items-center gap-3 text-zinc-400 dark:text-zinc-500">
                <Link
                  href={projects.hospital.repoUrl}
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <GitHubIcon size={18} />
                </Link>

                <Link
                  href={projects.hospital.liveUrl}
                  className="hover:text-lime-600 dark:hover:text-lime-300 transition-colors"
                >
                  <ExternalLink size={18} />
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-lime-600 dark:group-hover:text-lime-300 transition-colors duration-300">
                {projects.hospital.title}
              </h4>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-xl">
                {projects.hospital.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {projects.hospital.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 bg-zinc-100/50 dark:bg-zinc-900/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-[21/10] w-full mt-6 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-zinc-200/50 dark:border-white/5">
            <Image
              src={projects.hospital.image}
              alt={projects.hospital.title}
              fill
              className="object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
