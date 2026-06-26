"use client";

import React, { useState, useEffect } from "react";

// Content mapped directly from your screenshots, styling updated to official palette
const FEATURES = [
  {
    tag: "Plan",
    tagColor: "text-[#FF9932]", // Deep Saffron
    title: "Sitemaps",
    description:
      "Quickly map out your website pages with an AI-generated sitemap",
  },
  {
    tag: "Structure",
    tagColor: "text-[#FFC801]", // Forsythia
    title: "Wireframes",
    description:
      "Effortlessly structure your pages and copy with distraction-free wireframes",
  },
  {
    tag: "Conceptualise",
    tagColor: "text-[#D9E8E2]", // Mystic Mint
    title: "Style Guide",
    description:
      "Instantly create design concepts and apply the winning style across pages",
  },
  {
    tag: "Cross-team",
    tagColor: "text-[#F1F6F4]", // Arctic Powder
    title: "Collaboration",
    description:
      "Collaborate with the team and clients. Share projects and leave comments to streamline communication and get your designs approved.",
  },
  {
    tag: "Export to",
    tagColor: "text-[#FF9932]", // Deep Saffron
    title: "Figma, Webflow, React & Claude Design",
    description:
      "Site Builder works with the tools you already love and respects your process. Copy any component and paste wherever you need.",
  },
  {
    tag: "Native in",
    tagColor: "text-[#FFC801]", // Forsythia
    title: "Claude Design.",
    description:
      "Send your full design system straight into Claude. Design in one click. Colour, type, spacing, components. No Figma step, no manual rebuilds.",
  },
];

export default function FeaturesBentoAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInteraction = (index: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    // Set background to Oceanic Noir to allow the transparent glass to pop
    <section className="w-full  py-20 px-4 font-sans text-[#F1F6F4]">
      {/* Search/Generate Header Area */}
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h2 className="text-6xl font-bold tracking-tighter mb-4 text-[#D9E8E2]">
          Ship{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC801] to-[#FF9932] drop-shadow-sm">
            faster
          </span>
        </h2>
        <div className="mt-8 relative max-w-xl mx-auto p-[2px] rounded-full bg-gradient-to-r from-[#FFC801] to-[#FF9932]">
          <div className="flex bg-[#114C5A] rounded-full p-1.5 items-center justify-between shadow-lg">
            <input
              type="text"
              placeholder="Describe a company in a sentence or two..."
              className="w-full px-4 text-sm outline-none bg-transparent text-[#F1F6F4] placeholder-[#D9E8E2]/50"
            />
            <button className="bg-[#FF9932] hover:bg-[#FFC801] text-[#172B36] text-sm font-bold px-5 py-2.5 rounded-full transition-colors flex items-center gap-2">
              <span className="text-lg leading-none">+</span> Generate
            </button>
          </div>
        </div>
      </div>

      {/* Bento Grid / Accordion Wrapper */}
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-6">
        {FEATURES.map((feature, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => !isMobile && handleInteraction(index)}
              onClick={() => isMobile && handleInteraction(index)}
              className={`
                group relative flex flex-col bg-transparent backdrop-blur-xl rounded-3xl border border-[#D9E8E2]/20 overflow-hidden 
                transition-all duration-400 ease-in-out cursor-pointer hover:border-[#FFC801]/50
                ${isMobile ? "w-full" : "h-[450px] hover:shadow-[0_8px_30px_rgb(255,200,1,0.1)] hover:-translate-y-1"}
                ${index > 2 ? "md:col-span-1" : ""} 
                ${index === 4 ? "md:col-span-2" : ""} 
              `}
            >
              {/* Card Header */}
              <div className="p-8 pb-4">
                <span
                  className={`text-xs font-semibold tracking-wider uppercase mb-2 block ${feature.tagColor}`}
                >
                  {feature.tag}
                </span>
                <h3 className="text-2xl font-bold tracking-tight mb-3 text-[#F1F6F4]">
                  {feature.title}
                </h3>
              </div>

              {/* Native CSS Transition Body */}
              <div
                className={`
                  px-8 grid transition-[grid-template-rows,opacity] duration-400 ease-in-out
                  ${
                    isMobile
                      ? isActive
                        ? "grid-rows-[1fr] opacity-100 pb-8"
                        : "grid-rows-[0fr] opacity-0 pb-0"
                      : "grid-rows-[1fr] opacity-100 pb-8"
                  }
                `}
              >
                <div className="overflow-hidden flex flex-col justify-between h-full">
                  <p className="text-sm text-[#D9E8E2]/80 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <div className="mt-auto">
                    <button className="text-xs font-medium border border-[#D9E8E2]/30 text-[#D9E8E2] rounded-lg px-4 py-2 hover:bg-[#114C5A] hover:border-[#114C5A] transition-colors">
                      Give it a try
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
