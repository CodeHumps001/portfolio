"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Sparkles,
  AppWindow,
  Eye,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ---------- Type Definitions ----------
interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
  featured?: boolean;
}

// ---------- Helper: GitHub Icon (safe SVG) ----------
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

// ---------- Helper: Project Card Component ----------
const ProjectCard = ({
  project,
  index,
  isVisible,
}: {
  project: Project;
  index: number;
  isVisible: boolean;
}) => {
  const { title, description, tags, image, liveUrl, repoUrl, featured } =
    project;

  const hasLive = liveUrl && liveUrl !== "#";
  const hasRepo = repoUrl && repoUrl !== "#";

  return (
    <div
      className={`
        group relative flex flex-col rounded-3xl border border-zinc-200/60 dark:border-white/10 
        bg-white/50 dark:bg-zinc-900/30 backdrop-blur-sm shadow-sm dark:shadow-none
        transition-all duration-500 hover:shadow-xl hover:border-lime-500/30 dark:hover:border-lime-300/20
        ${featured ? "md:col-span-2" : ""}
        ${isVisible ? "animate-fade-up" : "opacity-0"}
      `}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-lime-500/10 px-3 py-1 text-[10px] font-mono font-medium uppercase tracking-wider text-lime-600 dark:bg-lime-400/10 dark:text-lime-300 border border-lime-500/20 backdrop-blur-sm">
          <Sparkles size={12} className="text-lime-500" />
          Featured
        </div>
      )}

      {/* Image area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-3xl bg-zinc-100 dark:bg-zinc-950">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay with action buttons on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {hasLive && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-900 transition-transform hover:scale-105 backdrop-blur-sm"
            >
              <Eye size={16} />
              Live
            </Link>
          )}
          {hasRepo && (
            <Link
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-900 transition-transform hover:scale-105 backdrop-blur-sm"
            >
              <GitHubIcon size={16} />
              Code
            </Link>
          )}
          {!hasLive && !hasRepo && (
            <span className="text-sm text-white/80 font-mono">Coming soon</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-lime-600 dark:group-hover:text-lime-300 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 bg-zinc-100/50 dark:bg-zinc-900/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className="mt-4 flex items-center justify-between border-t border-zinc-200/50 dark:border-white/5 pt-4">
          <div className="flex items-center gap-3 text-zinc-400 dark:text-zinc-500">
            {hasLive && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-600 dark:hover:text-lime-300 transition-colors"
              >
                <ExternalLink size={16} />
              </Link>
            )}
            {hasRepo && (
              <Link
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <GitHubIcon size={16} />
              </Link>
            )}
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            {hasLive ? "Live" : "In development"}
          </span>
        </div>
      </div>
    </div>
  );
};

// ---------- Main Component ----------
export default function ProjectGallery() {
  // Project data (all five)
  const projects: Project[] = [
    {
      title: "Storeroom — Smart Inventory & POS",
      description:
        "A multi-tenant inventory and point-of-sale system built for pharmacies, groceries, electronics stores, and wholesalers. Includes sales tracking, receipt generation, barcode support, analytics, role management, and premium business insights.",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Paystack",
      ],
      image: "/storeroom.png",
      liveUrl: "https://storeroom-in.vercel.app/",
      repoUrl: "https://github.com/CodeHumps001/storeroom-frontend",
      featured: true,
    },
    {
      title: "Divine Staff — Hospital Operations Platform",
      description:
        "A complete web and mobile platform developed for Divine Netcare Hospital. Staff can chat, view shifts, request leave, receive announcements, mark attendance, and manage daily hospital activities from anywhere.",
      tags: [
        "React Native",
        "Expo",
        "Next.js",
        "Express",
        "PostgreSQL",
        "Zustand",
        "Prisma",
      ],
      image: "/divine.jpeg",
      liveUrl: "https://divinenetcarehospital.vercel.app/",
      repoUrl: "https://github.com/CodeHumps001/lifecare-frontend",
    },
    {
      title: "MediTrack — Attendance & Staff Management",
      description:
        "A hospital staff management system focused on attendance monitoring, leave moderation, employee records, and administrative reporting.",
      tags: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
      image: "/meditrack.png",
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "MediBook — Hospital Booking System",
      description:
        "An appointment and booking platform that allows patients to schedule visits while helping hospitals manage appointments more efficiently.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MySQL"],
      image: "/medibook.png",
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Bravo Study",
      description:
        "An educational platform currently under development, focused on improving learning experiences and making study resources more accessible to students.",
      tags: ["Next.js", "Node.js", "TypeScript", "MySQL"],
      image: "/bravo-study.png",
      liveUrl: "#",
      repoUrl: "#",
    },
  ];

  // Intersection Observer for scroll‑triggered animations
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleIndices((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Separate featured and others for layout
  const featured = projects.find((p) => p.featured)!;
  const others = projects.filter((p) => !p.featured);
  const [firstOther, ...remainingOthers] = others;

  // Inject animation keyframes once (with cleanup)
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeUp {
        0% { opacity: 0; transform: translateY(24px) scale(0.98); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      .animate-fade-up {
        animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        opacity: 0;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      id="projects"
      className="w-11/12 max-w-6xl mx-auto py-24 border-t border-zinc-200/40 dark:border-white/5 transition-colors duration-300"
    >
      {/* Header */}
      <div className="space-y-2 mb-12 text-left">
        <h3 className="text-zinc-400 dark:text-zinc-500 font-mono text-xs uppercase tracking-widest">
          — Case Studies & Builds
        </h3>
        <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-zinc-950 dark:text-zinc-50">
          Selected spaces I've engineered.
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl font-light">
          Every project is a live, breathing system — from inventory to
          healthcare, designed to scale and delight.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Featured (spans 2 cols) */}
        <div
          ref={(el) => {
            cardRefs.current[0] = el;
          }}
          data-index={0}
        >
          <ProjectCard
            project={featured}
            index={0}
            isVisible={visibleIndices.has(0)}
          />
        </div>

        {/* First other project (1 col) */}
        {firstOther && (
          <div
            ref={(el) => {
              cardRefs.current[1] = el;
            }}
            data-index={1}
          >
            <ProjectCard
              project={firstOther}
              index={1}
              isVisible={visibleIndices.has(1)}
            />
          </div>
        )}

        {/* Remaining three projects (each 1 col) */}
        {remainingOthers.map((project, idx) => {
          const index = idx + 2;
          return (
            <div
              key={project.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-index={index}
            >
              <ProjectCard
                project={project}
                index={index}
                isVisible={visibleIndices.has(index)}
              />
            </div>
          );
        })}
      </div>

      {/* Extra personality cards (Current Focus & Open Source) */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Focus Card */}
        <div className="p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white/40 dark:bg-zinc-900/20 flex flex-col justify-between shadow-sm dark:shadow-none transition-all hover:border-lime-500/20 group">
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

        {/* Open Source Card */}
        <div className="p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white/40 dark:bg-zinc-900/20 flex flex-col justify-between group shadow-sm dark:shadow-none transition-all hover:border-lime-500/20">
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
            href="https://github.com/CodeHumps001"
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
      </div>
    </section>
  );
}
