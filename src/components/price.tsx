"use client";

import React, { useRef } from "react";

// Feature 1 Requirement: Multi-dimensional configuration matrix [cite: 43]
const PRICING_MATRIX = {
  USD: { symbol: "$", rate: 1 },
  EUR: { symbol: "€", rate: 0.92 },
  INR: { symbol: "₹", rate: 83.1 },
};

const TIERS = [
  {
    name: "Free",
    icon: "🎁",
    subtitle: "Get started with essential features at no cost",
    basePrice: 0,
    features: [
      "10 free monthly renders",
      "Unlock all core engine features",
      "Build elegant video pipelines",
      "Instant access to standard models",
      "One-click API integration",
    ],
  },
  {
    name: "Standard",
    icon: "⚙️",
    subtitle: "Perfect for first-time builders",
    basePrice: 3,
    badge: "1st month offer",
    features: [
      "Everything in Free, plus:",
      "Native Vulkan backend access",
      "Private project hosting",
      "100 compute credits per month",
      "Purchase extra credits as needed",
      "GitHub integration",
      "Fork render tasks",
    ],
  },
  {
    name: "Pro",
    icon: "✨",
    subtitle: "Built for serious creators and pipelines",
    basePrice: 166,
    features: [
      "Everything in Standard, plus:",
      "1M context window processing",
      "Ultra-low latency C++ core",
      "System Prompt Edit",
      "Create custom AI render agents",
      "High-performance headless compute",
      "750 Monthly Credits",
      "Priority API support",
    ],
  },
];

const ANNUAL_DISCOUNT = 0.8; // 20% off [cite: 43]

export default function Price() {
  const priceRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const cycleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const toggleRef = useRef<HTMLInputElement>(null);
  const currencyRef = useRef<HTMLSelectElement>(null);

  // Pure DOM manipulation function (Zero React Re-renders)
  const calculatePrices = () => {
    const isAnnual = toggleRef.current?.checked || false;
    const currency = (currencyRef.current?.value ||
      "INR") as keyof typeof PRICING_MATRIX;

    const config = PRICING_MATRIX[currency];

    TIERS.forEach((tier, index) => {
      let finalPrice = tier.basePrice * config.rate;
      if (isAnnual) finalPrice *= ANNUAL_DISCOUNT;

      // Target the localized DOM text nodes directly [cite: 60]
      if (priceRefs.current[index]) {
        priceRefs.current[index]!.innerText =
          `${config.symbol}${Math.round(finalPrice).toLocaleString("en-US")}`;
      }

      if (cycleRefs.current[index]) {
        cycleRefs.current[index]!.innerText = isAnnual ? "/ year" : "/ month";
      }
    });
  };

  return (
    <div className="w-full flex flex-col items-center font-sans text-white">
      {/* Top Pill Toggle & Currency Switcher */}
      <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
        {/* Transparent Currency Switcher */}
        <select
          ref={currencyRef}
          onChange={calculatePrices}
          defaultValue="INR"
          className="bg-transparent border border-white/20 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:border-white backdrop-blur-md transition-colors cursor-pointer appearance-none"
        >
          <option value="INR" className="bg-gray-900">
            INR (₹)
          </option>
          <option value="USD" className="bg-gray-900">
            USD ($)
          </option>
          <option value="EUR" className="bg-gray-900">
            EUR (€)
          </option>
        </select>

        {/* Global Annual/Monthly Toggle - Transparent UI */}
        <div className="flex items-center gap-3 bg-transparent p-1 rounded-full border border-white/20 backdrop-blur-md">
          <span className="text-sm font-medium text-gray-300 pl-4">
            Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer mx-2">
            <input
              type="checkbox"
              className="sr-only peer"
              ref={toggleRef}
              onChange={calculatePrices}
            />
            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
          </label>
          <span className="text-sm font-medium text-gray-300 pr-4">
            Annual (-20%)
          </span>
        </div>
      </div>

      {/* Transparent 3-Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {TIERS.map((tier, index) => (
          <div
            key={tier.name}
            className="flex flex-col p-8 bg-transparent backdrop-blur-lg border border-white/20 rounded-2xl relative transition-transform hover:-translate-y-1 hover:border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            {/* Header Area */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                {tier.name} <span>{tier.icon}</span>
              </h3>
              {tier.badge && (
                <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
                  {tier.badge}
                </span>
              )}
            </div>

            <p className="text-sm text-gray-400 mb-8 min-h-[40px]">
              {tier.subtitle}
            </p>

            {/* Price Area isolated for DOM manipulation [cite: 60] */}
            <div className="flex items-baseline gap-1 mb-8">
              <span
                className="text-5xl font-bold tracking-tight"
                ref={(el) => {
                  priceRefs.current[index] = el;
                }}
              >
                {index === 0 ? "₹0" : index === 1 ? "₹249" : "₹13,849"}
              </span>
              <span
                className="text-gray-400 text-sm font-medium"
                ref={(el) => {
                  cycleRefs.current[index] = el;
                }}
              >
                / month
              </span>
            </div>

            {/* Features List */}
            <ul className="flex flex-col gap-4 mb-8 flex-grow">
              {tier.features.map((feature, fIndex) => {
                const isHeading = feature.includes("Everything in");
                return (
                  <li
                    key={fIndex}
                    className={`flex items-start gap-3 ${isHeading ? "text-gray-300 font-medium pb-2" : "text-sm text-gray-400"}`}
                  >
                    {!isHeading && (
                      <svg
                        className="w-5 h-5 text-white/80 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    )}
                    {feature}
                  </li>
                );
              })}
            </ul>

            {/* Bottom CTA */}
            <button
              className={`w-full py-3.5 px-4 rounded-full font-medium transition-all duration-200 ${
                index === 1
                  ? "bg-white text-black hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  : "bg-transparent border border-white/30 text-white hover:bg-white/10"
              }`}
            >
              Deploy Pipeline
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
