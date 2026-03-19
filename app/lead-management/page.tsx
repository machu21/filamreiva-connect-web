"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import ConsultationModal from "@/components/ConsultationModal";
import { CheckCircle2, Filter, Bell, BarChart3, Tag, RefreshCw, PhoneCall, ArrowRight } from "lucide-react";

const features = [
  { Icon: Filter, title: "Lead Capture & Routing", desc: "Every inbound lead — from ads, forms, or cold outreach — is captured, tagged, and routed to the right pipeline automatically." },
  { Icon: Tag, title: "Smart Tagging & Segmentation", desc: "Leads are segmented by source, intent, and behavior so your team always knows who to call and when." },
  { Icon: Bell, title: "Automated Follow-Ups", desc: "Multi-step SMS and email sequences triggered by lead behavior — no manual follow-up needed." },
  { Icon: PhoneCall, title: "Call & Voicemail Drops", desc: "Automated ringless voicemail and call sequences integrated directly into your pipeline stages." },
  { Icon: BarChart3, title: "Pipeline Reporting", desc: "Real-time dashboards showing lead velocity, conversion rates, and pipeline health at a glance." },
  { Icon: RefreshCw, title: "Re-engagement Campaigns", desc: "Dead leads don't stay dead. Automated re-engagement sequences bring cold contacts back to life." },
];

const process = [
  { step: "01", title: "Lead Audit", desc: "We map all your current lead sources and identify where leads are falling through." },
  { step: "02", title: "Pipeline Design", desc: "Custom pipeline stages built around your sales process, not a generic template." },
  { step: "03", title: "Automation Build", desc: "Follow-up sequences, triggers, and routing rules configured and tested." },
  { step: "04", title: "Launch & Monitor", desc: "Go live with full reporting so you can see every lead's journey in real time." },
];

export default function LeadManagement() {
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
                Lead<br /><span className="text-brand-red italic">Management</span>
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl">
                Stop losing leads to slow follow-ups and broken pipelines. We build automated lead management systems that capture, nurture, and convert — without your team lifting a finger.
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

        {/* ── STATS ── */}
        <section className="bg-white border-b border-brand-gray/20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-gray/20">
              {[
                { value: "3.2x", label: "Avg. Lead Volume Increase" },
                { value: "80%", label: "Reduction in Manual Follow-Up" },
                { value: "24/7", label: "Automated Outreach" },
                { value: "<5 min", label: "Avg. Lead Response Time" },
              ].map((s, i) => (
                <div key={i} className="py-8 px-6 text-center">
                  <div className="text-3xl font-black text-brand-blue">{s.value}</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">{s.label}</div>
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
              <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter">No Lead Left Behind.</h2>
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
              <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter">Built Around<br />Your Sales Cycle</h2>
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80" alt="Lead management dashboard" className="w-full h-80 lg:h-[480px] object-cover" />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-6 py-4 shadow-xl border border-brand-gray/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Speed to Lead</p>
                  <p className="text-3xl font-black text-brand-blue mt-1">&lt; 5 min</p>
                  <p className="text-xs text-slate-500 font-medium">Automated response from first contact</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">Full-Funnel Coverage</p>
                <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter leading-none mb-6">
                  Every Lead.<br /><span className="text-brand-red italic">Every Stage.</span>
                </h2>
                <div className="h-1.5 w-20 bg-brand-red rounded-full mb-8" />
                <ul className="space-y-4">
                  {["Multi-source lead capture (ads, forms, cold outreach)", "Instant lead notification to your team", "Automated SMS & email follow-up sequences", "Behavioral trigger-based escalation", "Dead lead re-engagement campaigns", "Pipeline stage tracking & reporting", "Lead scoring & priority tagging", "CRM-integrated call & voicemail drops"].map((item, i) => (
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
            <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Stop Losing Leads</p>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Let's Plug the<br /><span className="text-brand-red italic">Leaky Pipeline</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free audit call. We'll identify exactly where leads are dropping off and show you how to fix it.
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