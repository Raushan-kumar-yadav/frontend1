"use client";

import { useState, useEffect } from "react";
import HeroWebGL from "@/components/HeroWebGL";
import Price from "@/components/price";
import FeaturesBentoAccordion from "@/components/feature";

type TypePhase = "typing" | "pause-end" | "deleting" | "pause-start";

export default function Home() {
  const [titleText, setTitleText] = useState("");
  const [phase, setPhase] = useState<TypePhase>("typing");
  const fullText = "Native Rendering.\nZero Bottlenecks.";

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (titleText.length < fullText.length) {
        timeout = setTimeout(() => {
          setTitleText(fullText.substring(0, titleText.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setPhase("pause-end"), 1800);
      }
    } else if (phase === "pause-end") {
      timeout = setTimeout(() => setPhase("deleting"), 200);
    } else if (phase === "deleting") {
      if (titleText.length > 0) {
        timeout = setTimeout(() => {
          setTitleText((prev) => prev.substring(0, prev.length - 1));
        }, 28);
      } else {
        timeout = setTimeout(() => setPhase("pause-start"), 600);
      }
    } else if (phase === "pause-start") {
      timeout = setTimeout(() => setPhase("typing"), 300);
    }

    return () => clearTimeout(timeout);
  }, [titleText, phase]);

  return (
    <div
      className="relative flex flex-col w-full min-h-screen text-arctic"
      style={{
        background: `
          radial-gradient(ellipse 120% 40% at 50% 0%, rgba(26, 172, 202, 0.18) 0%, transparent 60%),
          radial-gradient(ellipse 80% 50% at 20% 50%, rgba(26, 172, 202, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse 80% 50% at 80% 60%, rgba(26, 172, 202, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse 120% 35% at 50% 100%, #1aacca 0%, rgba(26, 90, 110, 0.5) 30%, transparent 65%),
          linear-gradient(180deg, #172b36 0%, #1e3a48 40%, #1a3340 60%, #172b36 100%)
        `,
      }}
    >
      {/* 1. HERO */}
      <section className="relative flex flex-col items-center justify-center w-full min-h-screen px-6 text-center border-b border-white/5 overflow-hidden pointer-events-none">
        <HeroWebGL />

        <div className="relative z-10 flex flex-col items-center max-w-5xl gap-6 -mt-24 pointer-events-none">
          {/* Animated Edge Line Loop Glow Pill */}
          <div className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-[0_0_30px_rgba(56,189,248,0.25)] pointer-events-auto group">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#38bdf8_50%,transparent_100%)]" />
            <div className="relative px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-[#050505]/90 text-mystic backdrop-blur-xl w-full h-full border border-white/5 transition-colors group-hover:bg-[#050505]/70">
              GeniFlow API v2.0
            </div>
          </div>

          {/* Typewriter Header */}
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl pb-2 min-h-[3em] flex items-center justify-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-neutral-300">
              {titleText.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx === 0 && titleText.includes("\n") && <br />}
                </span>
              ))}
            </span>
            <span
              className={`inline-block w-[4px] h-[0.9em] ml-1 align-middle transition-opacity duration-300 ${
                phase === "deleting"
                  ? "bg-arctic/40"
                  : "bg-arctic animate-pulse"
              }`}
            />
          </h1>

          <p className="max-w-2xl text-lg text-white/75 sm:text-xl">
            Bypass the standard web stack. Harness a custom C++ and native
            Vulkan architecture built specifically for high-speed AI video
            automation and multi-track pipelines.
          </p>

          <div className="flex gap-4 mt-8 pointer-events-auto">
            {/* ── Deploy Pipeline — Spinning conic edge glow ── */}
            <div className="relative inline-flex overflow-hidden rounded-full p-[2px] shadow-[0_0_50px_rgba(251,191,36,0.5),0_0_20px_rgba(251,191,36,0.3)] group">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#fbbf24_35%,#f97316_65%,transparent_100%)]" />
              <button className="relative z-10 px-8 py-3.5 font-bold text-[#080808] bg-gradient-to-r from-amber-400 to-orange-400 rounded-full transition-all duration-200 ease-out hover:from-yellow-300 hover:to-amber-400 hover:scale-[1.04] hover:shadow-[0_0_35px_rgba(251,191,36,0.6)] active:scale-95 tracking-wide">
                Deploy Pipeline
              </button>
            </div>

            {/* ── Read the Docs — Spinning conic edge glow (white) ── */}
            <div className="relative inline-flex overflow-hidden rounded-full p-[2px] shadow-[0_0_50px_rgba(255,255,255,0.25),0_0_20px_rgba(255,255,255,0.15)] group">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ffffff_35%,#e0f2fe_65%,transparent_100%)]" />
              <button className="relative z-10 px-8 py-3.5 font-bold text-white bg-white/10 backdrop-blur-md rounded-full transition-all duration-200 ease-out hover:bg-white/20 hover:text-arctic active:scale-95 tracking-wide">
                Read the Docs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES BENTO ACCORDION */}
      <section className="relative z-10 w-full mx-auto px-6 py-24 border-t border-white/5 pointer-events-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-arctic sm:text-5xl mb-4">
              Architecture & Workflows
            </h2>
            <p className="text-white/60 text-lg">
              Transparent API costs. No hidden fees.
            </p>
          </div>
          <FeaturesBentoAccordion />
        </div>
      </section>

      {/* 3. PRICING */}
      <section
        id="pricing"
        className="relative z-10 w-full mx-auto px-6 py-24 border-t border-white/5 pointer-events-auto"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-arctic sm:text-5xl mb-4">
              Compute Pricing
            </h2>
            <p className="text-white/60 text-lg">
              Transparent API costs. No hidden fees.
            </p>
          </div>
          <Price />
        </div>
      </section>

      {/* 4. CTA */}
      <section className="relative z-10 w-full mx-auto px-6 py-32 border-t border-white/5 pointer-events-auto overflow-hidden">
        {/* Ambient glow orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1aacca]/20 blur-[120px]" />
          <div className="absolute left-1/4 bottom-0 w-[300px] h-[300px] rounded-full bg-[#1e3a48]/40 blur-[80px]" />
          <div className="absolute right-1/4 top-0 w-[250px] h-[250px] rounded-full bg-[#1aacca]/15 blur-[80px]" />
        </div>

        <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <div className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-[0_0_20px_rgba(26,172,202,0.5)]">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#1aacca_50%,transparent_100%)]" />
            <div className="relative px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-[#1e3a48]/90 text-white/70 backdrop-blur-xl border border-white/5">
              Start Building Today
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50">
              Ship Faster.
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] via-white to-[#7dd3fc]">
              Scale Infinitely.
            </span>
          </h2>

          {/* Subtext */}
          <p className="max-w-2xl text-lg text-white/60 sm:text-xl leading-relaxed">
            Join thousands of engineers running production AI pipelines on
            GeniFlow. Get started in minutes with our native SDK — no DevOps
            overhead required.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 py-4">
            {[
              { value: "10ms", label: "Avg. Latency" },
              { value: "99.99%", label: "Uptime SLA" },
              { value: "5TB+", label: "Daily Throughput" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-3xl font-extrabold text-white">
                  {stat.value}
                </span>
                <span className="text-xs tracking-widest uppercase text-white/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            {/* Primary — amber glow */}
            <div className="relative inline-flex overflow-hidden rounded-full p-[2px] shadow-[0_0_60px_rgba(251,191,36,0.5),0_0_25px_rgba(251,191,36,0.3)]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#fbbf24_35%,#f97316_65%,transparent_100%)]" />
              <button className="relative z-10 px-10 py-4 font-bold text-[#080808] bg-gradient-to-r from-amber-400 to-orange-400 rounded-full transition-all duration-200 ease-out hover:from-yellow-300 hover:to-amber-400 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(251,191,36,0.7)] active:scale-95 tracking-wide text-base">
                Get Free API Key
              </button>
            </div>

            {/* Secondary — white glow */}
            <div className="relative inline-flex overflow-hidden rounded-full p-[2px] shadow-[0_0_40px_rgba(255,255,255,0.15),0_0_15px_rgba(255,255,255,0.1)]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ffffff_35%,#e0f2fe_65%,transparent_100%)]" />
              <button className="relative z-10 px-10 py-4 font-bold text-white bg-white/10 backdrop-blur-md rounded-full transition-all duration-200 ease-out hover:bg-white/20 hover:text-arctic active:scale-95 tracking-wide text-base">
                Talk to Sales
              </button>
            </div>
          </div>

          {/* Fine print */}
          <p className="text-xs text-white/30 tracking-wide">
            No credit card required · Free tier includes 1M tokens/month ·
            Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
