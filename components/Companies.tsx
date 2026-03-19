"use client";

const companies = [
  { initials: "PH", name: "PropHome Realty" },
  { initials: "BG", name: "BluGate Investments" },
  { initials: "NX", name: "Nexus Property Group" },
  { initials: "SV", name: "SilverVault RE" },
  { initials: "KL", name: "KeyLock Capital" },
  { initials: "TR", name: "TrueRoots Brokerage" },
  { initials: "AC", name: "Apex Closers" },
  { initials: "MW", name: "Midwest Wholesale Co." },
  { initials: "DX", name: "DealX Partners" },
  { initials: "FR", name: "First Run Realty" },
  { initials: "CB", name: "CloseBridge Group" },
  { initials: "VR", name: "Vantage RE Solutions" },
];

// Duplicate for seamless infinite loop
const track = [...companies, ...companies];

export default function Companies() {
  return (
    <section className="bg-brand-gray/5 border-y border-brand-gray/20 py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Trusted by Real Estate Teams Across the US
        </p>
      </div>

      {/* Ticker wrapper */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f8f9fa] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f8f9fa] to-transparent" />

        <div className="flex gap-5 animate-ticker" style={{ width: "max-content" }}>
          {track.map((company, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-2xl bg-white border border-brand-blue/8 px-5 py-3.5 shadow-sm shrink-0"
            >
              {/* Initial badge */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-white text-xs font-black">
                {company.initials}
              </div>
              <span className="text-sm font-bold text-brand-blue whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}