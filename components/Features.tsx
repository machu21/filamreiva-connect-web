"use client";

import { useState, useEffect, useCallback } from "react";

const features = [
  {
    title: "Advanced Automation",
    desc: "Complex workflows built with clean logic trees and trigger sequencing. We build bug-resistant systems with native safeguards.",
    bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80",
  },
  {
    title: "AI-Powered Execution",
    desc: "Deep N8N and CloseBot integrations that convert. Smart follow-ups driven by behavioral data and live feedback loops.",
    bg: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1400&q=80",
  },
  {
    title: "SaaS Backend Structuring",
    desc: "Scalable sub-account architecture and white-label infrastructure. Snapshots and version control designed for retention.",
    bg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80",
  },
  {
    title: "Conversion & Compliance",
    desc: "UX-optimized funnels with full A2P/SMS compliance. Backend tracking perfectly aligned with your sales operations.",
    bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
  },
];

export default function Features() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const go = useCallback(
    (next: number, dir: "next" | "prev") => {
      if (animating) return;
      setAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setCurrent((next + features.length) % features.length);
        setAnimating(false);
      }, 400);
    },
    [animating]
  );

  useEffect(() => {
    const t = setInterval(() => go(current + 1, "next"), 5000);
    return () => clearInterval(t);
  }, [current, go]);

  const item = features[current];

  return (
    <section id="features" className="relative overflow-hidden py-24">
      {/* Full-section background images — one per slide, crossfade */}
      {features.map((f, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${f.bg})`,
            opacity: i === current ? (animating ? 0 : 1) : 0,
            transition: "opacity 0.6s ease",
          }}
        />
      ))}

      {/* Dark overlay over entire section */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Brand-blue left edge accent */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-blue z-10" />

      {/* All content sits above the background */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl drop-shadow">
            Core Expertise
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-20 bg-brand-red rounded-full" />
        </div>

        {/* Slide content */}
        <div className="relative" style={{ minHeight: 320 }}>
          {/* Prev button */}
          <button
            onClick={() => go(current - 1, "prev")}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white hover:bg-brand-blue transition-colors duration-200"
            aria-label="Previous"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={() => go(current + 1, "next")}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white hover:bg-brand-blue transition-colors duration-200"
            aria-label="Next"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Centered slide content */}
          <div
            key={current}
            className="flex flex-col items-center justify-center text-center px-16"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? direction === "next"
                  ? "translateX(40px)"
                  : "translateX(-40px)"
                : "translateX(0)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            <h3 className="mb-4 text-3xl font-black text-white sm:text-4xl drop-shadow-md">
              {item.title}
            </h3>
            <p className="max-w-xl text-lg text-white/80 leading-relaxed">
              {item.desc}
            </p>
          </div>

          {/* Slide counter */}
          <div className="absolute top-0 right-14 text-xs font-bold text-white/40 tracking-widest uppercase">
            {String(current + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-12 flex justify-center gap-3">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? "next" : "prev")}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? 32 : 10,
                height: 10,
                backgroundColor: i === current ? "#fff" : "rgba(255,255,255,0.3)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail strip */}
        <div className="mt-6 grid grid-cols-4 gap-2">
          {features.map((f, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? "next" : "prev")}
              className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
                i === current
                  ? "ring-2 ring-white ring-offset-2 ring-offset-transparent scale-[1.02]"
                  : "opacity-50 hover:opacity-80"
              }`}
              style={{ height: 72 }}
            >
              <img src={f.bg} alt={f.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                <span className="text-xs font-black text-white leading-tight line-clamp-1">
                  {f.title}
                </span>
              </div>
              {i === current && (
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-brand-red" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}