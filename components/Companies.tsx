"use client";

import Image from "next/image";

const companies = [
  { name: "Lennar", logo: "https://www.google.com/s2/favicons?domain=lennar.com&sz=128" },
  { name: "D.R. Horton", logo: "https://www.google.com/s2/favicons?domain=drhorton.com&sz=128" },
  { name: "PulteGroup", logo: "https://www.google.com/s2/favicons?domain=pultegroup.com&sz=128" },
  { name: "Toll Brothers", logo: "https://www.google.com/s2/favicons?domain=tollbrothers.com&sz=128" },
  { name: "KB Home", logo: "https://www.google.com/s2/favicons?domain=kbhome.com&sz=128" },
  { name: "Taylor Morrison", logo: "https://www.google.com/s2/favicons?domain=taylormorrison.com&sz=128" },
  { name: "Meritage Homes", logo: "https://www.google.com/s2/favicons?domain=meritagehomes.com&sz=128" },
  { name: "Century Communities", logo: "https://www.google.com/s2/favicons?domain=centurycommunities.com&sz=128" },
];

// Duplicate for seamless infinite loop
const track = [...companies, ...companies];

export default function Companies() {
  return (
    <section className="bg-brand-gray/5 py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Trusted by Top Real Estate Teams Across the US
        </p>
      </div>

      {/* Ticker wrapper */}
      <div className="relative mx-auto max-w-[100vw] sm:max-w-7xl">
        
        <div 
          className="flex gap-6 animate-ticker will-change-transform hover:[animation-play-state:paused] py-4" 
          style={{ 
            width: "max-content",
            // CSS Mask creates a perfect fade without needing to match background colors
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          {track.map((company, i) => (
            <div
              key={i}
              className="group flex cursor-pointer items-center gap-4 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/60 px-6 py-3 shadow-sm hover:shadow-md hover:bg-white hover:-translate-y-0.5 transition-all duration-300 shrink-0"
            >
              {/* Logo container with greyscale to color transition */}
              <div className="relative h-7 w-7 shrink-0 grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  sizes="28px"
                  className="object-contain"
                />
              </div>
              
              <span className="text-sm font-semibold text-slate-500 group-hover:text-brand-blue transition-colors duration-300 whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          /* Using translate3d forces hardware acceleration for buttery smooth scrolling */
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
      `}</style>
    </section>
  );
}