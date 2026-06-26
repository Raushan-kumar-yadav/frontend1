import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GeniFlow | High-Performance AI Automation",
  description:
    "Next-Gen AI platform for data automation and native Vulkan rendering pipelines.",
  keywords: [
    "AI automation",
    "data pipeline",
    "machine learning",
    "AI SaaS",
    "Vulkan renderer",
    "GenAI platform",
  ],
  authors: [{ name: "GeniFlow Team", url: "https://geniflow.ai" }],
  creator: "GeniFlow",
  robots: { index: true, follow: true },

  openGraph: {
    title: "GeniFlow | High-Performance AI Automation",
    description:
      "Next-Gen AI platform for data automation and native Vulkan rendering pipelines.",
    url: "https://geniflow.ai",
    siteName: "GeniFlow",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GeniFlow | High-Performance AI Automation",
    description:
      "Next-Gen AI platform for data automation and native Vulkan rendering pipelines.",
    creator: "@geniflow_ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          geistSans.variable,
          geistMono.variable,

          "glass-page-bg text-foreground",
          "min-h-screen flex flex-col",
          "antialiased",
        ].join(" ")}
        suppressHydrationWarning
      >
        <header
          role="banner"
          className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2"
        >
          <NavBar />
        </header>

        {/*
       
        */}
        <main id="main-content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
