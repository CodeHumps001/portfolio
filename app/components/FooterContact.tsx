"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function ContactAndFooter() {
  // Form State Management
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  // Handle Contact Form Submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setStatus("sending");

    // Simulating API form processing behavior cleanly
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setMessage("");
      // Reset back to idle after a brief showing of success message
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section className="w-11/12 max-w-7xl mx-auto pb-12 transition-colors duration-300">
      {/* "Virtual Coffee" Interactive Form Block Container */}
      <div
        id="contact"
        className="p-6 sm:p-10 rounded-3xl border border-zinc-200 dark:border-white/5 bg-gradient-to-br from-white/60 to-zinc-50/30 dark:from-zinc-900/30 dark:to-black/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-sm dark:shadow-none mb-24"
      >
        {/* Left Side: Call to Action Narrative */}
        <div className="space-y-4 max-w-md">
          <div className="flex items-center gap-2 text-lime-600 dark:text-lime-300 font-mono text-xs uppercase tracking-wider">
            <MessageSquare size={14} />
            <span>Let's Build Something Great</span>
          </div>
          <h3 className="text-2xl font-normal tracking-tight text-zinc-950 dark:text-zinc-50">
            Every great solution starts with a simple conversation.
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            Whether you have a project in mind, need help bringing an idea to
            life, or simply want to connect, I'd love to hear from you. Every
            conversation is an opportunity to learn, collaborate, and build
            something meaningful.
          </p>
        </div>

        {/* Right Side: Clean Input Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:max-w-md space-y-3 font-mono"
        >
          {/* Email Input Field */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your-email@domain.com"
              required
              disabled={status === "sending" || status === "success"}
              className="w-full text-xs px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-lime-500/50 dark:focus:border-lime-300/40 transition-colors disabled:opacity-50"
            />
            <Mail
              size={14}
              className="absolute right-4 top-4 text-zinc-400 dark:text-zinc-600"
            />
          </div>

          {/* Message Textarea Field */}
          <div className="relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me a bit about your idea..."
              required
              rows={3}
              disabled={status === "sending" || status === "success"}
              className="w-full text-xs px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-lime-500/50 dark:focus:border-lime-300/40 transition-colors resize-none disabled:opacity-50"
            />
          </div>

          {/* Dynamic Interactive Action Button */}
          <button
            type="submit"
            disabled={status !== "idle"}
            className={`w-full text-xs font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
              status === "success"
                ? "bg-emerald-600 text-white cursor-default"
                : "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black hover:bg-lime-600 dark:hover:bg-lime-300 dark:hover:text-black hover:text-white shadow-sm"
            }`}
          >
            {status === "idle" && (
              <>
                <span>Send Message</span>
                <Send size={12} />
              </>
            )}
            {status === "sending" && <span>Processing Transmission...</span>}
            {status === "success" && (
              <>
                <span>Dispatched Successfully</span>
                <CheckCircle2 size={12} />
              </>
            )}
          </button>
        </form>
      </div>

      {/* EDITORIAL FOOTER COMPONENT REGION */}
      <footer className="w-full py-12 border-t border-zinc-200/40 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Side: Copyright Notice */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 dark:text-zinc-500">
          <span>
            &copy; {new Date().getFullYear()} Fosu Yaw. Thanks for stopping by.
            Let's build something meaningful together.
          </span>
        </div>

        {/* Right Side: Quick Anchor Navigation Links */}
        <div className="flex items-center gap-6 text-xs font-mono text-zinc-400 dark:text-zinc-500">
          <Link
            href="#about"
            className="hover:text-lime-600 dark:hover:text-lime-300 transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-lime-600 dark:hover:text-lime-300 transition-colors"
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="hover:text-lime-600 dark:hover:text-lime-300 transition-colors"
          >
            Contact
          </Link>
        </div>
      </footer>
    </section>
  );
}
