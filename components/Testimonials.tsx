"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    role: "Real Estate Investor",
    company: "Houston, TX",
    avatar: "MT",
    rating: 5,
    bg: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    text: "Before FAR Agents, I was manually chasing every lead. Now my pipeline runs itself. We went from 12 deals a year to 31 in the first year after the build. The system they set up is the best investment I've made in my business.",
    highlight: "31 deals in the first year",
  },
  {
    name: "Angela R.",
    role: "Wholesale Operator",
    company: "Atlanta, GA",
    avatar: "AR",
    rating: 5,
    bg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
    text: "I was skeptical at first because I'd been burned by agencies before. But these guys actually delivered. Our lead response time went from hours to under 5 minutes. The A2P compliance setup alone was worth it — our SMS deliverability is night and day.",
    highlight: "Response time under 5 minutes",
  },
  {
    name: "Derek L.",
    role: "Brokerage Owner",
    company: "Phoenix, AZ",
    avatar: "DL",
    rating: 5,
    bg: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=80",
    text: "The sub-account architecture they built handles 14 agents without breaking a sweat. I can see every pipeline, every deal, every follow-up from one dashboard. My team actually uses the CRM now because it's actually built for how we work.",
    highlight: "14 agents, one clean dashboard",
  },
  {
    name: "Priya K.",
    role: "Acquisitions Manager",
    company: "Dallas, TX",
    avatar: "PK",
    rating: 5,
    bg: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80",
    text: "The cold caller they placed for us hit the ground running on day one. Already knew real estate scripts, understood objection handling, and updated the CRM properly. Exactly what we needed without the 3-month hiring process.",
    highlight: "Productive from day one",
  },
  {
    name: "James O.",
    role: "Fix & Flip Investor",
    company: "Chicago, IL",
    avatar: "JO",
    rating: 5,
    bg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    text: "What impressed me most was how they thought about the logic before building anything. They showed me a full workflow map before touching the CRM. That's when I knew these weren't just button-pushers — they actually understood automation.",
    highlight: "Logic-first approach",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const go = useCallback((next: number, dir: "next" | "prev") => {
    if (animating) return;
    setAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrent((next + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 350);
  }, [animating]);

  useEffect(() => {
    const t = setInterval(() => go(current + 1, "next"), 6000);
    return () => clearInterval(t);
  }, [current, go]);

  const t = testimonials[current];

  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
            Client Results
          </p>
          <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter">
            Real Operators.<br />Real Numbers.
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-20 bg-brand-red rounded-full" />
        </div>

        {/* ── Main layout: quote left, sidebar right ── */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">

          {/* ── Featured quote card ── */}
          <div className="relative">
            {/* Decorative quote mark */}
            <div className="absolute -top-4 -left-2 text-brand-blue/8 pointer-events-none select-none">
              <Quote size={120} strokeWidth={1} />
            </div>

            <div
              key={current}
              style={{
                opacity: animating ? 0 : 1,
                transform: animating
                  ? direction === "next" ? "translateY(16px)" : "translateY(-16px)"
                  : "translateY(0)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}
              className="relative rounded-3xl bg-brand-blue overflow-hidden shadow-2xl"
            >
              {/* ── Background image — opacitated ── */}
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
                  style={{
                    backgroundImage: `url(${item.bg})`,
                    opacity: i === current ? 0.18 : 0,
                  }}
                />
              ))}

              {/* Grid texture overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative z-10 p-10 lg:p-14">
                <StarRating count={t.rating} />

                {/* Highlight badge */}
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-red/15 border border-brand-red/20 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                  <span className="text-xs font-black uppercase tracking-widest text-brand-red">
                    {t.highlight}
                  </span>
                </div>

                <blockquote className="mt-6 text-xl lg:text-2xl font-medium text-white/90 leading-relaxed">
                  "{t.text}"
                </blockquote>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white font-black text-sm shadow-lg">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-black text-white text-sm">{t.name}</p>
                      <p className="text-white/50 text-xs font-medium">{t.role} · {t.company}</p>
                    </div>
                  </div>

                  {/* Nav arrows */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => go(current - 1, "prev")}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-brand-red transition-colors duration-200"
                      aria-label="Previous"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => go(current + 1, "next")}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-brand-red transition-colors duration-200"
                      aria-label="Next"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress dots */}
            <div className="mt-6 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > current ? "next" : "prev")}
                  className="transition-all duration-300 rounded-full h-2"
                  style={{
                    width: i === current ? 28 : 8,
                    backgroundColor: i === current ? "#E63946" : "#cbd5e1",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="hidden lg:flex flex-col gap-3">
            {testimonials.map((item, i) => (
              <button
                key={i}
                onClick={() => go(i, i > current ? "next" : "prev")}
                className={`text-left rounded-2xl overflow-hidden border transition-all duration-200 ${
                  i === current
                    ? "border-brand-red/20 shadow-sm"
                    : "border-brand-gray/15 hover:border-brand-blue/20 hover:shadow-sm opacity-60 hover:opacity-100"
                }`}
              >
                {/* Sidebar card with subtle bg image */}
                <div className="relative p-5">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.bg})`,
                      opacity: i === current ? 0.08 : 0.04,
                    }}
                  />
                  <div className={`absolute inset-0 ${i === current ? "bg-brand-red/5" : "bg-white"}`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black shrink-0 ${
                        i === current ? "bg-brand-red text-white" : "bg-brand-blue/10 text-brand-blue"
                      }`}>
                        {item.avatar}
                      </div>
                      <div>
                        <p className="text-xs font-black text-brand-blue">{item.name}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{item.company}</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">"{item.text}"</p>
                    {i === current && (
                      <div className="mt-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-red">
                          {item.highlight}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}