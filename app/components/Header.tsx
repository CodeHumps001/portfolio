"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import {
  User,
  FolderKanban,
  Briefcase,
  Code2,
  Mail,
  Download,
  Eye,
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // theme setup handles system detection overrides safely
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nav = [
    { label: "About", href: "#about", icon: User },
    { label: "Projects", href: "#projects", icon: FolderKanban },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Skills", href: "#skills", icon: Code2 },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header className="sticky top-5 z-50 w-11/12 mx-auto">
      <div className="flex items-center justify-between px-6 md:px-8 py-4 rounded-3xl border border-zinc-200/50 dark:border-white/10 bg-white/70 dark:bg-black/50 backdrop-blur-xl shadow-2xl shadow-zinc-200/20 dark:shadow-black/30 transition-colors duration-300">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="My Logo"
            width={48}
            height={48}
            priority
            className="rounded-full md:w-[58px] md:h-[58px]"
          />
          <h1 className="hidden md:block text-2xl font-bold tracking-wide">
            <span className="text-zinc-900 dark:text-white">Yaw</span>
            <span className="text-lime-600 dark:text-lime-300">Fosu</span>
          </h1>
        </Link>

        {/* Desktop Navigation Surface */}
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-2 text-zinc-700 dark:text-white transition-all duration-300 hover:text-lime-600 dark:hover:text-lime-300 hover:-translate-y-1"
              >
                <Icon
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Items Container */}
        <div className="flex items-center gap-4">
          {/* Manual Inline Theme Toggle Switch */}

          {/* Desktop Resume Dropdown Wrapper */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setOpen(!open)}
              className="group flex items-center gap-2 rounded-2xl bg-lime-500 dark:bg-lime-300 px-5 py-3 font-semibold text-white dark:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-500/20 dark:hover:shadow-lime-300/30"
            >
              <Download size={18} />
              <span>Resume</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Card */}
            <div
              className={`absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-2xl transition-all duration-300 ${
                open
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-4 invisible"
              }`}
            >
              <button
                className="flex w-full items-center gap-3 px-5 py-4 text-zinc-700 dark:text-white transition-colors duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-lime-600 dark:hover:text-lime-300"
                onClick={() => {
                  setShowCV(true);
                  setOpen(false);
                }}
              >
                <Eye size={18} />
                <span>Preview CV</span>
              </button>

              <a
                href="/cv/YAW_FOSU_CV.pdf"
                download
                className="flex items-center gap-3 px-5 py-4 text-zinc-700 dark:text-white transition-colors duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-lime-600 dark:hover:text-lime-300"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Mobile Hamburger Button Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-800 dark:text-white hover:text-lime-600 dark:hover:text-lime-300 transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide Drawer Overlay */}
      <div
        className={`lg:hidden fixed left-0 right-0 mt-3 overflow-hidden rounded-3xl border border-zinc-200 dark:border-white/10 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl shadow-2xl transition-all duration-300 origin-top ${
          mobileMenuOpen
            ? "opacity-100 scale-y-100 visible"
            : "opacity-0 scale-y-95 invisible"
        }`}
      >
        <nav className="flex flex-col p-4 border-b border-zinc-100 dark:border-white/5">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-4 rounded-xl px-4 py-3 text-zinc-700 dark:text-white transition-colors duration-300 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-lime-600 dark:hover:text-lime-300"
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Lower Actions Container */}
        <div className="flex flex-col gap-2 p-4 bg-zinc-50/50 dark:bg-black/20">
          <button
            onClick={() => {
              setShowCV(true);
              setMobileMenuOpen(false);
            }}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 py-3 font-semibold text-zinc-700 dark:text-white transition-colors duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <Eye size={18} />
            <span>Preview CV</span>
          </button>

          <a
            href="/cv/YAW_FOSU_CV.pdf"
            download
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-500 dark:bg-lime-300 py-3 font-semibold text-white dark:text-black transition-transform duration-300 active:scale-95 shadow-md"
          >
            <Download size={18} />
            <span>Download CV</span>
          </a>
        </div>
      </div>

      {/* Full Window CV Iframe Preview Modal Overlay */}
      {showCV && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/80 p-4">
          <div className="relative h-[85vh] w-full max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden">
            <button
              onClick={() => setShowCV(false)}
              className="absolute top-4 right-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 p-2 rounded-full hover:scale-105 transition-transform z-10 shadow-sm"
            >
              <X size={20} />
            </button>
            <iframe
              src="/cv/YAW_FOSU_CV.pdf"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      )}
    </header>
  );
}
