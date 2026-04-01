"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import ConsultationModal from "@/components/ConsultationModal";
import {
  Zap,
  BarChart3,
  PhoneForwarded,
  Globe,
  HelpCircle,
  ArrowRight,
  CheckCircle2
} from "lucide-react";


const pricingPlans = [
  {
    name: "Basic Package",
    description: "Best for Wholesalers just getting started with CRM automation",
    setupFee: "$997",
    monthlyFee: "$397",
    features: [
      "CRM sub-account set up",
      "Basic pipeline setup",
      "Lead Tracking Workflow",
      "Immediate Outreach Workflow",
      "Long-Term Drip Workflow",
      "Contract Execution Workflow",
      "Inbound Intake Workflow",
      "Email & SMS templates",
      "AI chatbot on your website and SMS",
      "Lead management dashboard",
      "CRM Setup and configuration",
      "1 onboarding training call",
      "Email Support"
    ],
    highlight: false,
    aiFeatures: [],
  },
  {
    name: "Growth Package",
    description: "Best for Active wholesalers ready to scale their pipeline",
    setupFee: "$1,297",
    monthlyFee: "$697",
    features: [
      "CRM sub-account setup",
      "Lead Tracking Workflow",
      "Immediate Outreach Workflow",
      "Long-Term Drip Workflow",
      "Contract Execution Workflow",
      "Inbound Intake Workflow",
      "5 additional custom workflows",
      "Everything on Basic",
      "Appointment reminder sequences",
      "2-way SMS conversation",
      "AI Comps — AI-powered comparable analysis to help your team make faster, smarter offers (usage-based add-on, billed separately)",
      "Bi-weekly strategy call with our team",
      "Priority email support"
    ],
    highlight: true,
    aiFeatures: ["Includes AI Property Comps"],
    addons: ["VA support (lead qualification / pipeline updates)"],
  },
  {
    name: "Pro Package",
    description: "The ultimate autonomous system with multi-channel outreach.",
    setupFee: "$1,497",
    monthlyFee: "$1,197",
    features: [
      "Advanced CRM automation setup",
      "Lead Tracking Workflow",
      "Immediate Outreach Workflow",
      "Long-Term Drip Workflow",
      "Contract Execution Workflow",
      "Inbound Intake Workflow",
      "Everything on Basic",
      "10 additional custom workflows(15 total)",
      "Advanced dashboards and analytics",
      "Custom AI chatbot trained on your business, scripts, and FAQs",
      "AI Cold Calling — AI-powered outbound calling for high-volume prospecting (usage-based add-on, billed separately)",
      "Monthly strategy call with dedicated account manager",
      "Dedicated Philippines VA support (onboarding, client management, pipeline oversight)",
      "Priority slack support channel"
    ],
    highlight: false,
    aiFeatures: ["Includes AI Property Comps", "Includes AI Cold Caller"],
    addons: ["Human Cold Calling Support", "Lead Qualification Services", "Marketing funnel setup"],
  },
];

export default function PayAsYouGo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <>
      <main className="min-h-screen bg-brand-gray/10 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-black uppercase tracking-tighter text-brand-blue sm:text-6xl">
              Simple, Transparent Pricing Built for <span className="text-brand-red italic">Real Estate Wholesalers</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Everything you need to automate your lead pipeline, follow up faster, and close more deals — without hiring more staff.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 text-center max-w-4xl leading-relaxed">
              Every FAR Agents CRM package includes your own custom-built infrastructure,
              configured by our Philippines-based automation team. We don't just hand you
              software and walk away. We build it, test it, and make sure it works for your
              specific wholesaling operation from day one.
            </h2>
          </div>

          {/* Pricing Plans Grid */}
          <div className="grid gap-8 lg:grid-cols-3 items-start">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative flex flex-col rounded-[2.5rem] bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 ${plan.highlight ? "border-4 border-brand-red scale-105 z-10" : "border border-brand-blue/10 mt-4 lg:mt-8"
                  }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-brand-red px-4 py-1 text-sm font-bold uppercase tracking-widest text-white shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-black text-brand-blue uppercase">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
                </div>

                <div className="mb-8 flex flex-col gap-1 border-b border-slate-100 pb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-brand-blue">{plan.monthlyFee}</span>
                    <span className="text-sm font-bold text-slate-400">/ month</span>
                  </div>
                  <div className="text-sm font-bold text-brand-red">+ {plan.setupFee} One-Time Setup Fee</div>
                </div>

                {plan.aiFeatures && plan.aiFeatures.length > 0 && (
                  <div className="mb-6 rounded-xl bg-brand-blue p-4 text-white">
                    <span className="text-xs font-black uppercase tracking-widest text-brand-gray/60 mb-2 block">AI Powered Integration</span>
                    <ul className="space-y-2">
                      {plan.aiFeatures.map((ai, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm font-bold">
                          <span className="text-brand-red">⚡</span> {ai}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <ul className="mb-8 flex-grow space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <svg className="h-5 w-5 flex-shrink-0 text-brand-red" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto block">
                  <Button
                    variant={plan.highlight ? "primary" : "outline"}
                    className="w-full"
                    onClick={() => handleSelectPlan(plan.name)}
                  >
                    Book a Demo Call
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Unified Content Container --- */}
        <div className="mx-auto max-w-7xl px-6 pb-32">

          {/* Add-Ons Section */}
          <div className="mt-32 border-t-2 border-slate-100 pt-24">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-brand-red fill-brand-red" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-red">
                  Performance Upgrades
                </span>
              </div>
              <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter sm:text-5xl">
                Optional <span className="text-brand-red italic">Add-Ons</span>
              </h2>
              <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                Supercharge your workflow with high-performance infrastructure.
                Billed transparently based on your actual usage.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "AI Property Comps",
                  desc: "Instant, AI-generated comparable analysis to help your acquisitions team make faster offers without manual research.",
                  price: "Monthly Flat Rate + API",
                  icon: <BarChart3 className="w-8 h-8 text-brand-blue" />
                },
                {
                  name: "AI Cold Calling",
                  desc: "Automated outbound calling for high-volume prospecting. Our AI handles the initial pitch and qualifying questions.",
                  price: "Per-Minute Billing",
                  icon: <PhoneForwarded className="w-8 h-8 text-brand-blue" />
                },
                {
                  name: "Web Development",
                  desc: "Custom high-converting landing pages or seller sites built by our team and fully integrated with your FAR CRM.",
                  price: "One-Time Project Fee",
                  icon: <Globe className="w-8 h-8 text-brand-blue" />
                },
              ].map((addon, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col rounded-[2.5rem] bg-white p-10 shadow-xl border border-slate-100 hover:border-brand-red/20 transition-all duration-300"
                >
                  <div className="mb-6 p-3 rounded-2xl bg-slate-50 w-fit group-hover:bg-brand-blue/5 transition-colors">
                    {addon.icon}
                  </div>
                  <h3 className="text-xl font-black text-brand-blue uppercase mb-4">
                    {addon.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                    {addon.desc}
                  </p>
                  <div className="border-t border-slate-100 pt-6 flex items-center justify-between">
                    <span className="text-xs font-black text-brand-red uppercase tracking-widest">
                      {addon.price}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-red group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-40">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3 lg:sticky lg:top-32">
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="w-4 h-4 text-brand-red" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-red">
                    Support
                  </span>
                </div>
                <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tighter text-left leading-none">
                  Common <br /><span className="text-brand-red italic">Inquiries</span>
                </h2>
                <p className="mt-6 text-slate-500 text-sm leading-relaxed">
                  Everything you need to know about getting your FAR Agents system live and scaling your operation.
                </p>
              </div>

              <div className="lg:w-2/3 grid gap-4">
                {[
                  { q: "What is the setup fee for?", a: "It covers the complete engineering of your infrastructure—configuring pipelines, workflows, and your onboarding call. We build it so you don't have to." },
                  { q: "Do I need a separate CRM account?", a: "No. Your package includes everything. We manage your secure sub-account under our agency, giving you elite tools without the management headache." },
                  { q: "What are AI Comps & AI Cold Calling?", a: "These are advanced API-driven features. We bill them separately to keep your base cost low, ensuring you only pay for your actual volume." },
                  { q: "Can I upgrade my package later?", a: "Always. As your deal flow grows, you can jump to Growth or Pro. We’ll build the new automation layers and update your billing instantly." },
                  { q: "Is there a long-term contract?", a: "No. We run on month-to-month billing. We believe in earning your business every single month through performance and support." },
                  { q: "How fast is the turnaround?", a: "Once you confirm your demo, our dev team usually has your system live and ready for training within 5 business days." }
                ].map((faq, idx) => (
                  <div key={idx} className="group rounded-3xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all">
                    <div className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-black text-brand-blue mb-2 uppercase text-sm tracking-tight">
                          {faq.q}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-40 relative">
            <div className="absolute inset-0 bg-brand-red/10 blur-[120px] rounded-full opacity-50" />

            <div className="relative z-10 rounded-[3.5rem] bg-brand-blue p-12 md:p-20 text-center text-white shadow-2xl border border-white/10 overflow-hidden">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-5xl font-black uppercase tracking-tighter md:text-7xl mb-8">
                  Ready to <span className="text-brand-red italic">Automate?</span>
                </h2>
                <p className="text-xl text-slate-300 mb-12 leading-relaxed font-medium">
                  Stop chasing leads manually. Book a free 30-minute demo and see how FAR Agents reclaims 20+ hours of your week.
                </p>
                <div className="flex flex-col items-center gap-6">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group px-16 py-8 text-2xl font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all flex items-center gap-4"
                    onClick={() => handleSelectPlan("General Demo")}
                  >
                    Book Your Demo Call
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Button>
                  <p className="text-xs font-bold text-white/30 uppercase tracking-[0.4em]">
                    No Pressure • No Commitment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
}

//Select {plan.name.split(" ")[0]}