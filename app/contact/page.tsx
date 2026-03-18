"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import ConsultationModal from "@/components/ConsultationModal";
import { Mail, MapPin, Clock, ArrowRight, Phone } from "lucide-react";

const contactDetails = [
  {
    Icon: Mail,
    label: "Email Us",
    value: "hello@filamreivaconnect.com",
    sub: "We reply within 24 hours",
  },
  {
    Icon: MapPin,
    label: "Headquarters",
    value: "Global Operations HQ",
    sub: "Remote-first, worldwide reach",
  },
  {
    Icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri, 11AM – 7PM",
    sub: "Eastern Standard Time (EST)",
  },
];

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-white">

        {/* ── HERO ── */}
        <section className="relative bg-brand-blue overflow-hidden py-24 text-center text-white">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-red" />
          <div className="relative mx-auto max-w-3xl px-6">
            <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-6xl leading-none">
              Initiate{" "}
              <span className="text-brand-red italic">Connection</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
              Have a specific automation question? Send us a message.
              Ready to map out your infrastructure? Skip the line and book a call.
            </p>
          </div>
        </section>

        {/* ── CONTACT CARDS + FORM ── */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start">

              {/* LEFT COLUMN */}
              <div className="space-y-6">

                {/* Contact detail cards */}
                {contactDetails.map(({ Icon, label, value, sub }, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 rounded-2xl border border-brand-blue/8 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/8 text-brand-blue">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-0.5">
                        {label}
                      </p>
                      <p className="font-black text-brand-blue text-sm">{value}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}

                {/* Book a call CTA card */}
                <div className="rounded-2xl bg-brand-blue p-8 text-white shadow-xl">
                  <div className="absolute-0 opacity-[0.04]" />
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">
                    Fastest Way to Start
                  </p>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                    Skip the Form.<br />Book Directly.
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    A 30-minute discovery call is the fastest path to a working automation system.
                    We'll audit your current stack live and show you exactly what needs to change.
                  </p>
                  <Button
                    variant="primary"
                    className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-black uppercase tracking-widest flex items-center justify-center gap-2"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Book Discovery Call <ArrowRight size={16} />
                  </Button>
                </div>
              </div>

              {/* RIGHT COLUMN — Form */}
              <div className="rounded-3xl bg-white border border-brand-blue/8 shadow-xl overflow-hidden">
                {/* Form header */}
                <div className="bg-brand-gray/5 border-b border-brand-blue/8 px-10 py-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">
                    General Inquiry
                  </p>
                  <h2 className="text-2xl font-black text-brand-blue uppercase tracking-tighter">
                    Send a Message
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    We'll respond within one business day.
                  </p>
                </div>

                {/* Form body */}
                <form className="space-y-5 p-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-brand-gray/20 border border-transparent focus:border-brand-blue/30 focus:ring-2 focus:ring-brand-blue/10 outline-none transition text-sm text-brand-blue placeholder:text-slate-400"
                        placeholder="Pat"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-brand-gray/20 border border-transparent focus:border-brand-blue/30 focus:ring-2 focus:ring-brand-blue/10 outline-none transition text-sm text-brand-blue placeholder:text-slate-400"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Work Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-brand-gray/20 border border-transparent focus:border-brand-blue/30 focus:ring-2 focus:ring-brand-blue/10 outline-none transition text-sm text-brand-blue placeholder:text-slate-400"
                      placeholder="pat@company.com"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Phone Number <span className="text-slate-300 normal-case font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-brand-gray/20 border border-transparent focus:border-brand-blue/30 focus:ring-2 focus:ring-brand-blue/10 outline-none transition text-sm text-brand-blue placeholder:text-slate-400"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Current CRM / Stack
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-brand-gray/20 border border-transparent focus:border-brand-blue/30 focus:ring-2 focus:ring-brand-blue/10 outline-none transition text-sm text-brand-blue placeholder:text-slate-400"
                      placeholder="e.g., GoHighLevel, HubSpot, N8N"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      How can we help?
                    </label>
                    <textarea
                      className="w-full px-4 py-3 h-32 rounded-xl bg-brand-gray/20 border border-transparent focus:border-brand-blue/30 focus:ring-2 focus:ring-brand-blue/10 outline-none transition text-sm text-brand-blue placeholder:text-slate-400 resize-none"
                      placeholder="Briefly describe your bottlenecks or goals..."
                    />
                  </div>

                  {/* Divider */}
                  <div className="pt-1">
                    <Button
                      variant="primary"
                      className="w-full font-black uppercase tracking-widest flex items-center justify-center gap-2 py-4"
                    >
                      Submit Inquiry <ArrowRight size={16} />
                    </Button>
                    <p className="text-center text-xs text-slate-400 mt-3">
                      No spam. No pressure. Just a conversation.
                    </p>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* ── BOTTOM TRUST BAR ── */}
        <section className="border-t border-brand-gray/20 bg-brand-gray/5 py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">
                  You're in Good Hands
                </p>
                <p className="text-lg font-black text-brand-blue uppercase tracking-tight">
                  180+ Real Estate Teams Trust Filamreiva Connect
                </p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-8 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-red inline-block" />
                  GHL-Certified Build Team
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-red inline-block" />
                  A2P/SMS Compliant
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-red inline-block" />
                  99.9% Uptime Guarantee
                </span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}