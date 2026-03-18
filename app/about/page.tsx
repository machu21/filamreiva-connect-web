import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import {
  Brain,
  Zap,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Users,
  Building2,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    Icon: Brain,
    title: "Logic First",
    desc: "We map the entire workflow before a single line of automation is written.",
  },
  {
    Icon: Zap,
    title: "Scalable Tech",
    desc: "Sub-account architectures that handle 10 leads or 10,000 without breaking.",
  },
  {
    Icon: ShieldCheck,
    title: "Bug-Resistant",
    desc: "Built-in safeguards and error handling to ensure your business never stops.",
  },
  {
    Icon: TrendingUp,
    title: "Revenue Focused",
    desc: "Every automation we build is designed to directly impact your bottom line.",
    highlight: true,
  },
];

const beliefs = [
  "Founders should spend their time closing deals, not fixing broken Zapier zaps.",
  "Automation should be invisible — it just works, every time.",
  "A system that can't scale is just an expensive mess with extra steps.",
  "Real estate operators deserve enterprise-grade infrastructure without enterprise pricing.",
];

const stats = [
  { Icon: Users, value: "180+", label: "Teams Deployed" },
  { Icon: Building2, value: "12+", label: "Industries Served" },
  { Icon: BarChart3, value: "3.2x", label: "Avg. Lead Increase" },
  { Icon: Zap, value: "99.9%", label: "Automation Uptime" },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative bg-brand-blue overflow-hidden py-24 lg:py-36 text-center text-white">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Decorative red bar */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-red" />
        <div className="relative mx-auto max-w-4xl px-6">
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">
            Who We Are
          </p>
          <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-6xl leading-none">
            We Build The{" "}
            <span className="text-brand-red italic">Invisible Engine</span>
          </h1>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Filamreiva Connect was founded on a simple premise: founders should spend their time
            closing deals and scaling revenue — not fixing broken Zapier zaps or manually
            tagging leads in a CRM.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white border-b border-brand-gray/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-gray/20">
            {stats.map(({ Icon, value, label }, i) => (
              <div key={i} className="py-8 px-6 flex flex-col items-center gap-2 text-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/8 text-brand-blue">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <div className="text-3xl font-black text-brand-blue">{value}</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION + PILLARS ── */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-center">

            {/* Left: copy */}
            <div className="space-y-6">
              <p className="text-brand-red font-bold uppercase tracking-widest text-sm">
                Our Mission
              </p>
              <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter leading-none">
                Chaos to{" "}
                <span className="text-brand-red italic">Control</span>
              </h2>
              <div className="h-1.5 w-20 bg-brand-red rounded-full" />
              <p className="text-slate-600 leading-relaxed text-lg">
                Most businesses hit a revenue ceiling because their internal systems are a mess.
                Leads fall through the cracks, follow-ups are forgotten, and scaling requires
                hiring more human capital to do repetitive data entry.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                We step in to map, build, and deploy high-level GoHighLevel (GHL) infrastructures,
                wired perfectly with N8N logic and AI bots. We don't just give you software —
                we give you your time back.
              </p>

              {/* Belief bullets */}
              <ul className="space-y-3 pt-2">
                {beliefs.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2
                      size={18}
                      className="text-brand-red mt-0.5 shrink-0"
                      strokeWidth={2.5}
                    />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link href="/process">
                  <Button variant="outline" size="lg" className="gap-2">
                    See Our Process <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: pillars grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              {pillars.map(({ Icon, title, desc, highlight }, i) => (
                <div
                  key={i}
                  className={`rounded-3xl p-8 border transition-all hover:-translate-y-1 ${
                    highlight
                      ? "bg-brand-red text-white shadow-xl shadow-brand-red/20 border-transparent"
                      : "bg-brand-gray/10 border-brand-blue/5 hover:border-brand-red/20 hover:shadow-lg"
                  } ${i % 2 !== 0 ? "sm:mt-8" : ""}`}
                >
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${
                      highlight ? "bg-white/15" : "bg-brand-blue/8 text-brand-blue"
                    }`}
                  >
                    <Icon size={22} strokeWidth={2} className={highlight ? "text-white" : ""} />
                  </div>
                  <h3
                    className={`text-lg font-black uppercase mb-2 ${
                      highlight ? "text-white" : "text-brand-blue"
                    }`}
                  >
                    {title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${highlight ? "text-white/85" : "text-slate-500"}`}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO + QUOTE BREAK ── */}
      <section className="relative overflow-hidden">
        <div
          className="h-80 lg:h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80)`,
          }}
        >
          <div className="absolute inset-0 bg-brand-blue/75" />
          <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
            <div className="max-w-3xl">
              <p className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight leading-snug italic">
                "Your competitors aren't slowing down. Your systems shouldn't either."
              </p>
              <p className="mt-4 text-brand-red font-bold uppercase tracking-widest text-sm">
                — Filamreiva Connect
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY REAL ESTATE ── */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80"
                alt="Real estate professional at work"
                className="w-full h-80 lg:h-[480px] object-cover"
              />
              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-6 py-4 shadow-xl border border-brand-gray/10">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Average Result</p>
                <p className="text-3xl font-black text-brand-blue mt-1">3.2x</p>
                <p className="text-xs text-slate-500 font-medium">Lead volume increase in 90 days</p>
              </div>
            </div>

            {/* Copy */}
            <div className="space-y-6">
              <p className="text-brand-red font-bold uppercase tracking-widest text-sm">
                Why Real Estate
              </p>
              <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter leading-none">
                We Speak Your<br />
                <span className="text-brand-red italic">Industry's Language</span>
              </h2>
              <div className="h-1.5 w-20 bg-brand-red rounded-full" />
              <p className="text-slate-600 leading-relaxed text-lg">
                Real estate moves fast. Buyers and sellers don't wait for a manual follow-up.
                We've built automation systems specifically for real estate operators — from
                single-agent teams to multi-location brokerages.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                {[
                  "Buyer & seller funnel templates",
                  "GHL sub-account architecture",
                  "A2P/SMS compliance built-in",
                  "AI-powered lead qualification",
                  "CRM pipeline automation",
                  "24/7 follow-up sequences",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                    <CheckCircle2 size={16} className="text-brand-red shrink-0" strokeWidth={2.5} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-blue py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">
            Ready to Start?
          </p>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">
            Let's Build Your<br />
            <span className="text-brand-red italic">Invisible Engine</span>
          </h2>
          <p className="mt-6 text-white/60 leading-relaxed max-w-xl mx-auto">
            Book a free 30-minute strategy call. We'll audit your current setup and show you
            exactly where automation can unlock your next growth stage.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="primary" className="px-10">
              Book Free Audit
            </Button>
            <Link href="/process">
              <Button size="lg" variant="ghost" className="px-10 text-white border-white/20 hover:bg-white/10">
                See Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}