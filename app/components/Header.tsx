"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

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
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nav = [
    { label: "About", href: "#about", icon: User },
    { label: "Projects", href: "#projects", icon: FolderKanban },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Skills", href: "#skills", icon: Code2 },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header className="sticky top-5 z-50 w-11/12 mx-auto">
      <div className="flex items-center justify-between px-6 md:px-8 py-4 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl shadow-black/30">
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
          {/* Hidden on mobile, visible on medium screens and up */}
          <h1 className="hidden md:block text-2xl font-bold tracking-wide">
            <span className="text-white">Yaw</span>
            <span className="text-lime-300">Fosu</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-2 text-white transition-all duration-300 hover:text-lime-300 hover:-translate-y-1"
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

        {/* Desktop Resume Dropdown */}
        <div className="relative hidden lg:block">
          <button
            onClick={() => setOpen(!open)}
            className="group flex items-center gap-2 rounded-2xl bg-lime-300 px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-300/30"
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

          {/* Desktop Dropdown Menu */}
          <div
            className={`absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl transition-all duration-300 ${
              open
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-4 invisible"
            }`}
          >
            <button
              className="flex w-full items-center gap-3 px-5 py-4 text-white transition-colors duration-300 hover:bg-zinc-800 hover:text-lime-300"
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
              className="flex items-center gap-3 px-5 py-4 text-white transition-colors duration-300 hover:bg-zinc-800 hover:text-lime-300"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-lime-300 transition-colors duration-300"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed left-0 right-0 mt-3 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 backdrop-blur-2xl shadow-2xl transition-all duration-300 origin-top ${
          mobileMenuOpen
            ? "opacity-100 scale-y-100 visible"
            : "opacity-0 scale-y-95 invisible"
        }`}
      >
        <nav className="flex flex-col p-4 border-b border-white/5">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-4 rounded-xl px-4 py-3 text-white transition-colors duration-300 hover:bg-white/5 hover:text-lime-300"
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Actions Container */}
        <div className="flex flex-col gap-2 p-4 bg-black/20">
          <button
            onClick={() => {
              setShowCV(true);
              setMobileMenuOpen(false);
            }}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-zinc-900 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
          >
            <Eye size={18} />
            <span>Preview CV</span>
          </button>

          <a
            href="/cv/YAW_FOSU_CV.pdf"
            download
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-300 py-3 font-semibold text-black transition-transform duration-300 active:scale-95"
          >
            <Download size={18} />
            <span>Download CV</span>
          </a>
        </div>
      </div>

      {/* CV Modal Overlay */}
      {showCV && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative h-[85vh] w-full max-w-4xl rounded-2xl bg-white shadow-2xl">
            <button
              onClick={() => setShowCV(false)}
              className="absolute -top-12 right-0 md:top-4 md:right-4 bg-black/50 md:bg-zinc-200 text-white md:text-black p-2 rounded-full hover:scale-105 transition-transform"
            >
              <X size={20} />
            </button>
            <iframe
              src="/cv/YAW_FOSU_CV.pdf"
              className="h-full w-full rounded-2xl"
            />
          </div>
        </div>
      )}
    </header>
  );
}
