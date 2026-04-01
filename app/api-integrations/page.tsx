"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";
import ConsultationModal from "@/components/ConsultationModal";
import { CheckCircle2, Link2, Webhook, Database, RefreshCw, ShieldCheck, Code2, ArrowRight } from "lucide-react";

const features = [
  { Icon: Link2, title: "Third-Party Connectors", desc: "Zapier, Make, and native API connections that keep your tools talking to each other without breaking." },
  { Icon: Webhook, title: "Webhook Architecture", desc: "Real-time data pipelines between your CRM, dialers, lead sources, and reporting tools." },
  { Icon: Database, title: "Data Sync & Cleanup", desc: "Bi-directional syncs that keep your records clean and consistent across every platform." },
  { Icon: Code2, title: "Custom API Builds", desc: "When off-the-shelf connectors don't cut it, we write custom API logic that does exactly what you need." },
  { Icon: RefreshCw, title: "Automation Triggers", desc: "Event-driven triggers that fire automations across platforms the moment something changes." },
  { Icon: ShieldCheck, title: "Error Handling & Logs", desc: "Every integration includes fallback logic, error alerts, and audit logs so nothing breaks silently." },
];

// Using Brandfetch CDN + Clearbit for reliable logo delivery
const integrations = [
  { name: "N8N", logo: "https://www.google.com/s2/favicons?domain=n8n.io&sz=128" },
  { name: "Zapier", logo: "https://www.google.com/s2/favicons?domain=zapier.com&sz=128" },
  { name: "Make", logo: "https://www.google.com/s2/favicons?domain=make.com&sz=128" },
  { name: "Google Sheets", logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128" },
  { name: "Slack", logo: "https://www.google.com/s2/favicons?domain=slack.com&sz=128" },
  { name: "Twilio", logo: "https://www.google.com/s2/favicons?domain=twilio.com&sz=128" },
  { name: "OpenAI", logo: "https://www.google.com/s2/favicons?domain=openai.com&sz=128" },
  { name: "Calendly", logo: "https://www.google.com/s2/favicons?domain=calendly.com&sz=128" },
  { name: "Facebook Ads", logo: "https://www.google.com/s2/favicons?domain=facebook.com&sz=128" },
  { name: "Google Ads", logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128" },
  { name: "HubSpot", logo: "https://www.google.com/s2/favicons?domain=hubspot.com&sz=128" },
  { name: "Podio", logo: "https://www.google.com/s2/favicons?domain=podio.com&sz=128" },
  { name: "Airtable", logo: "https://www.google.com/s2/favicons?domain=airtable.com&sz=128" },
  { name: "REsimpli", logo: "https://www.google.com/s2/favicons?domain=resimpli.com&sz=128" },
];

const process = [
  { step: "01", title: "Integration Audit", desc: "We map every tool in your stack and identify what's connected, broken, or missing." },
  { step: "02", title: "Architecture Design", desc: "We design the data flow between systems before writing a single line of code." },
  { step: "03", title: "Build & Test", desc: "Integrations built, stress-tested, and validated with real data before going live." },
  { step: "04", title: "Monitor & Maintain", desc: "Ongoing monitoring with alerts so you know the moment something needs attention." },
];

export default function APIIntegrations() {
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
                API<br /><span className="text-brand-red italic">Integrations</span>
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl">
                Your tools should work together — not in silos. We connect your entire stack with bulletproof integrations that share data in real time and never break silently.
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

        {/* ── INTEGRATIONS GRID ── */}
        <section className="bg-brand-gray/5 border-y border-brand-gray/20 py-12">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Tools We Connect</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4">
              {integrations.map((tool, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center gap-3 rounded-2xl bg-white border border-brand-blue/8 px-4 py-5 shadow-sm hover:shadow-md hover:border-brand-blue/20 hover:-translate-y-0.5 transition-all"
                >
                  <div className="h-10 w-10 flex items-center justify-center relative">
                    {/* Swapped to Next.js Image Component */}
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-500 text-center leading-tight group-hover:text-brand-blue transition-colors">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-14">
              <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">What We Build</p>
              <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter">Your Stack.<br />Finally Connected.</h2>
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
              <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Our Approach</p>
              <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter">Integrations That<br />Don't Break</h2>
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
                <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">What's Covered</p>
                <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter leading-none mb-6">
                  Built to Last.<br /><span className="text-brand-red italic">Not Just to Launch.</span>
                </h2>
                <div className="h-1.5 w-20 bg-brand-red rounded-full mb-8" />
                <ul className="space-y-4">
                  {["Lead source to pipeline routing", "Webhook-based real-time triggers", "Custom API endpoints when needed", "Error alerts & fallback logic", "Audit logs for every data event", "Cross-platform data consistency", "Ongoing integration maintenance"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                      <CheckCircle2 size={18} className="text-brand-red shrink-0" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80" alt="API integration network" className="w-full h-80 lg:h-[480px] object-cover" />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-6 py-4 shadow-xl border border-brand-gray/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Uptime</p>
                  <p className="text-3xl font-black text-brand-blue mt-1">99.9%</p>
                  <p className="text-xs text-slate-500 font-medium">Integration reliability guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-brand-blue py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Connect Everything</p>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Stop Copy-Pasting<br /><span className="text-brand-red italic">Between Tools</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free audit call. We'll map your current stack and show you exactly what needs to be connected.
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