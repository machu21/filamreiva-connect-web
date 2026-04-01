"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import ConsultationModal from "@/components/ConsultationModal";
import { CheckCircle2, GitBranch, Layers, AlarmClock, ShieldCheck, SlidersHorizontal, BarChart3, ArrowRight } from "lucide-react";

const features = [
  { Icon: GitBranch, title: "Logic Tree Mapping", desc: "Every workflow starts with a whiteboard, not a builder. We map the full logic tree before writing a single trigger." },
  { Icon: Layers, title: "Multi-Step Sequences", desc: "Complex multi-branch automations that adapt based on lead behavior, time delays, and conditional outcomes." },
  { Icon: AlarmClock, title: "Time-Based Triggers", desc: "Workflows that fire at exactly the right moment — follow-ups, reminders, escalations, and re-engagement timed to the minute." },
  { Icon: SlidersHorizontal, title: "Conditional Branching", desc: "If/then logic that routes contacts down different paths based on their actions, tags, or pipeline stage." },
  { Icon: ShieldCheck, title: "Safeguard Layers", desc: "Every workflow has error handling and fallback paths so a single failure never breaks the entire sequence." },
  { Icon: BarChart3, title: "Performance Tracking", desc: "Workflow analytics that show open rates, response rates, and conversion data so you can optimize continuously." },
];

const examples = [
  { title: "Lead Tracking Workflow", desc: "Automatically updates pipeline stages based on applied tags for clear and organized tracking." },
  { title: "Immediate Outreach Workflow", desc: "Triggers initial SMS and email outreach the moment a new lead is created." },
  { title: "Long-Term Drip Workflow", desc: "Schedules and sends follow-up SMS and email campaigns over a 6–12 month period." },
  { title: "Contract Execution Workflow", desc: "Guides users through entering property details and automatically sends the finalized contract to the lead." },
  { title: "Inbound Intake Workflow", desc: "Captures leads from external sources such as landing pages and automatically creates and populates contact records in the system" },
];

const process = [
  { step: "01", title: "Workflow Audit", desc: "We document every existing workflow, manual or automated, and find the gaps." },
  { step: "02", title: "Logic Design", desc: "Full logic tree designed on paper before anything is built in the platform." },
  { step: "03", title: "Build & QA", desc: "Workflows built, tested with live data, and stress-tested for edge cases." },
  { step: "04", title: "Handover & Train", desc: "Your team learns how each workflow operates so they can manage it confidently." },
];

export default function WorkflowDesign() {
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
                Workflow<br /><span className="text-brand-red italic">Design</span>
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl">
                Automations only work when the logic behind them is clean. We design every workflow from a logic-first perspective — mapped, tested, and built to handle every edge case without breaking.
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

        {/* ── FEATURES ── */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-14">
              <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">How We Build</p>
              <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter">Logic First.<br />Always.</h2>
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

        {/* ── REAL EXAMPLES ── */}
        <section className="bg-brand-gray/5 border-y border-brand-gray/20 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-14">
              <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Core Workflows</p>
              <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter">Workflows We've<br />Built for Real Estate</h2>
              <div className="mx-auto mt-4 h-1.5 w-20 bg-brand-red rounded-full" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {examples.map((ex, i) => (
                <div key={i} className="rounded-2xl bg-white border border-brand-blue/8 p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-brand-red" />
                    <h4 className="text-lg font-black text-brand-blue uppercase tracking-tight">{ex.title}</h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{ex.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-14">
              <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Our Approach</p>
              <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter">Map It. Build It.<br />Hand It Over.</h2>
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
        <section className="bg-brand-gray/5 border-t border-brand-gray/20 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80" alt="Workflow automation" className="w-full h-80 lg:h-[480px] object-cover" />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-6 py-4 shadow-xl border border-brand-gray/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Bug Resistance</p>
                  <p className="text-3xl font-black text-brand-blue mt-1">100%</p>
                  <p className="text-xs text-slate-500 font-medium">Safeguard coverage on every workflow</p>
                </div>
              </div>
              <div>
                <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">What Every Workflow Includes</p>
                <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter leading-none mb-6">
                  No Edge Case<br /><span className="text-brand-red italic">Left Uncovered</span>
                </h2>
                <div className="h-1.5 w-20 bg-brand-red rounded-full mb-8" />
                <ul className="space-y-4">
                  {["Full logic tree documentation", "Conditional branching for every outcome", "Time-delay and trigger optimization", "Error handling & fallback paths", "Opt-out and compliance logic", "Team notification triggers", "Performance analytics tracking", "Version control & change log"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                      <CheckCircle2 size={18} className="text-brand-red shrink-0" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-brand-blue py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Ready to Automate?</p>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Let's Design Your<br /><span className="text-brand-red italic">Automation Engine</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free audit call. We'll map your current workflows and show you exactly what can be automated.
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