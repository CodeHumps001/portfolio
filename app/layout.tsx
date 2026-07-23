import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";

// 1. Comprehensive SEO & Open Graph Metadata Configuration
export const metadata: Metadata = {
  title: {
    default: "Yaw Fosu — Portfolio",
    template: "%s | Yaw Fosu",
  },
  description:
    "Portfolio of Yaw Fosu (CodeHumps001), a Full Stack Developer and Computer Technology student passionate about building modern web and mobile applications that solve real-world problems.",
  keywords: [
    "Yaw Fosu",
    "CodeHumps001",
    "Full Stack Developer",
    "Software Developer",
    "Computer Technology Student",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "React Native Developer",
    "Portfolio",
    "Web Developer Ghana",
    "Software Engineer Ghana",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Yaw Fosu" }],
  creator: "Yaw Fosu",
  metadataBase: new URL("https://codewithyaw.vercel.app"),
  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    shortcut: [
      {
        url: "/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  // Social Media Previews (Open Graph for WhatsApp, LinkedIn, X, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codewithyaw.vercel.app",
    title: "Yaw Fosu | Full Stack Developer",
    description:
      "Building modern web and mobile applications with React, Next.js, Node.js and React Native while solving real-world problems.",
    siteName: "Yaw Fosu Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Yaw Fosu Logo Preview asset",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Yaw Fosu | Full Stack Developer",
    description:
      "Building modern web and mobile applications with React, Next.js, Node.js and React Native.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology",
  verification: {
    google: "googlebce795757b0ef5e3.html",
  },
};

// 2. Separate Viewport Configuration for Responsive Mobile Indexing
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100 antialiased min-h-screen transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
