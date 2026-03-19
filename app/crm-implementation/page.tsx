"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import ConsultationModal from "@/components/ConsultationModal";
import { CheckCircle2, Settings2, LayoutDashboard, GitBranch, Users, ShieldCheck, Zap, ArrowRight } from "lucide-react";

const features = [
  { Icon: Settings2, title: "Sub-Account Architecture", desc: "We build scalable GHL sub-account structures designed for agencies managing multiple clients or locations." },
  { Icon: LayoutDashboard, title: "Custom Pipelines", desc: "Tailored sales pipelines mapped to your exact buyer and seller workflows — no generic templates." },
  { Icon: GitBranch, title: "Workflow Automation", desc: "Logic-driven automations that trigger the right action at the right time, every time." },
  { Icon: Users, title: "Team & Role Setup", desc: "User permissions, team structures, and role-based access configured from day one." },
  { Icon: ShieldCheck, title: "Compliance & A2P", desc: "Full A2P/SMS registration and compliance setup so your outreach never gets blocked." },
  { Icon: Zap, title: "Integrations & APIs", desc: "Connect your CRM to any third-party tool — calendars, forms, dialers, and more." },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We learn your current stack, your goals, and what's broken." },
  { step: "02", title: "Architecture Plan", desc: "We design your CRM structure before touching a single setting." },
  { step: "03", title: "Build & Configure", desc: "Full CRM build, pipelines, automations, and integrations." },
  { step: "04", title: "Test & Handover", desc: "Stress-tested system handed over with full documentation." },
];

export default function CRMImplementation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-white">

        {/* ── HERO ── */}
        <section className="relative bg-brand-blue overflow-hidden py-24 text-white">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
          <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-red" />
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Automation Services</p>
              <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-6xl leading-none">
                CRM<br /><span className="text-brand-red italic">Implementation</span>
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl">
                A CRM that actually works for your business — not against it. We design, build, and deploy GoHighLevel infrastructures built for real estate operators who are done patching broken systems.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg" variant="primary" className="px-10" onClick={() => setIsModalOpen(true)}>
                  Book Free Audit
                </Button>
                <a href="/process">
                  <Button size="lg" variant="ghost" className="px-10 text-white border-white/20 hover:bg-white/10 flex items-center gap-2">
                    See Our Process <ArrowRight size={16} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ── */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-14">
              <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">What's Included</p>
              <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter">Everything You Need.<br />Nothing You Don't.</h2>
              <div className="mx-auto mt-4 h-1.5 w-20 bg-brand-red rounded-full" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ Icon, title, desc }, i) => (
                <div key={i} className="group rounded-2xl bg-white p-8 shadow-sm border-l-4 border-brand-blue hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/8 text-brand-blue group-hover:bg-brand-red/10 group-hover:text-brand-red transition-colors">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-lg font-black text-brand-blue">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="bg-brand-gray/5 border-y border-brand-gray/20 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-14">
              <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">How It Works</p>
              <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter">From Zero to Live<br />in 2–4 Weeks</h2>
              <div className="mx-auto mt-4 h-1.5 w-20 bg-brand-red rounded-full" />
            </div>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {process.map((s, i) => (
                <div key={i} className="relative group">
                  <span className="text-8xl font-black text-brand-gray/15 absolute -top-10 -left-4 group-hover:text-brand-red/10 transition-colors">{s.step}</span>
                  <div className="relative z-10 pt-4">
                    <h3 className="text-xl font-black text-brand-blue mb-2">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CHECKLIST + IMAGE ── */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">Built for Real Estate</p>
                <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter leading-none mb-6">
                  Every System We Build<br /><span className="text-brand-red italic">Is Production-Ready</span>
                </h2>
                <div className="h-1.5 w-20 bg-brand-red rounded-full mb-8" />
                <ul className="space-y-4">
                  {["GHL sub-account architecture", "Custom buyer & seller pipelines", "Automated follow-up sequences", "A2P/SMS compliance setup", "Calendar & booking integrations", "Snapshot & version control", "Full team training & documentation", "30-day post-launch support"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                      <CheckCircle2 size={18} className="text-brand-red shrink-0" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80" alt="CRM dashboard" className="w-full h-80 lg:h-[480px] object-cover" />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-6 py-4 shadow-xl border border-brand-gray/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Average Deploy Time</p>
                  <p className="text-3xl font-black text-brand-blue mt-1">14 days</p>
                  <p className="text-xs text-slate-500 font-medium">From discovery call to live system</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-brand-blue py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Ready to Build?</p>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Let's Build Your<br /><span className="text-brand-red italic">CRM Backbone</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free audit call. We'll map your current setup and show you exactly what needs to change.
            </p>
            <Button size="lg" variant="primary" className="px-12" onClick={() => setIsModalOpen(true)}>
              Book Free Audit →
            </Button>
          </div>
        </section>

      </main>
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}