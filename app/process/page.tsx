import Button from "@/components/ui/Button";
import Link from "next/link";

const steps = [
  { step: "01", title: "Audit & Architecture", desc: "We map out your current messy workflows and design a clean logic tree." },
  { step: "02", title: "Infrastructure Build", desc: "We deploy the GHL sub-accounts and wire up N8N/CloseBot integrations." },
  { step: "03", title: "Safeguard Testing", desc: "Every flow is stress-tested with bug-resistant safeguards before going live." },
  { step: "04", title: "Scaling & Handover", desc: "We hand over a clean, documented system that your team can actually use." }
];

const principles = [
  {
    icon: "🔩",
    title: "No Bloat. No Fluff.",
    desc: "We only build what serves your operation. Every component exists for a reason."
  },
  {
    icon: "🔁",
    title: "Built to Iterate",
    desc: "Systems are version-controlled and documented so changes are fast and safe."
  },
  {
    icon: "🛡️",
    title: "Safeguards First",
    desc: "Error handling, fallback triggers, and compliance checks baked in from day one."
  },
  {
    icon: "📡",
    title: "Live Feedback Loops",
    desc: "Behavioral signals feed back into your automation so performance compounds over time."
  },
  {
    icon: "🤝",
    title: "Handover Ready",
    desc: "Your team gets full documentation and training — not a black box they can't touch."
  },
  {
    icon: "⚡",
    title: "Speed Without Shortcuts",
    desc: "We move fast because our architecture is clean, not because we skip steps."
  }
];

const faqs = [
  {
    q: "How long does the full build take?",
    a: "Most infrastructure builds take 2–4 weeks depending on complexity. Audits and architecture are typically completed in the first 3 days."
  },
  {
    q: "Do I need to know N8N or GHL beforehand?",
    a: "No. We handle the build end-to-end and train your team at handover. You just need to know your own business workflows."
  },
  {
    q: "What if something breaks after handover?",
    a: "All systems include safeguard layers and fallback logic. We also offer ongoing retainer support for critical infrastructure."
  },
  {
    q: "Can you work with my existing GHL setup?",
    a: "Yes. We audit whatever you have first. Sometimes we rebuild from scratch, sometimes we extend — depends on what's salvageable."
  }
];

export default function OurProcess() {
  return (
    <main className="bg-white">

      {/* ── HERO ── */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-black text-brand-blue italic tracking-tighter uppercase">Our Process</h1>
            <p className="text-brand-red font-bold uppercase tracking-widest mt-2">Chaos to Control</p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={i} className="relative group">
                <span className="text-8xl font-black text-brand-gray/20 absolute -top-10 -left-4 group-hover:text-brand-red/10 transition-colors">
                  {s.step}
                </span>
                <div className="relative z-10 pt-4">
                  <h3 className="text-xl font-black text-brand-blue mb-3">{s.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-brand-gray/30" />
      </div>

      {/* ── HOW WE THINK ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-brand-blue tracking-tighter uppercase">How We Think</h2>
            <div className="mx-auto mt-4 h-1.5 w-20 bg-brand-red rounded-full" />
            <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
              The principles behind every system we build — not best practices borrowed from a blog, but rules we enforce on every engagement.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <div key={i} className="group rounded-2xl bg-white p-8 shadow-sm border-l-4 border-brand-blue transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="mb-4 text-4xl">{p.icon}</div>
                <h3 className="mb-2 text-xl font-black text-brand-blue leading-tight">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-brand-gray/30" />
      </div>

      {/* ── FAQ ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-brand-blue tracking-tighter uppercase">Common Questions</h2>
            <div className="mx-auto mt-4 h-1.5 w-20 bg-brand-red rounded-full" />
          </div>

          <div className="mx-auto max-w-3xl grid gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-brand-gray/20 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-black text-brand-blue mb-3">{faq.q}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-brand-blue py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Ready to Start?</p>
          <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase mb-6">
            Let's Map Out Your System
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Book a free strategy session. We'll audit your current setup and show you exactly what needs to change.
          </p>
          <Link href="#contact">
            <Button className="bg-brand-red text-white font-black uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white hover:text-brand-red transition-colors text-sm">
              Book Free Audit →
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}