"use client"; // Required for state management

import { useState } from "react";
import Button from "@/components/ui/Button";
import ConsultationModal from "@/components/ConsultationModal";

const pricingPlans = [
  
  {
    name: "Starter Package",
    description: "Essential CRM infrastructure for getting your automation off the ground.",
    setupFee: "$800",
    monthlyFee: "$150",
    features: ["CRM sub-account set up", "Basic pipeline setup", "1–2 automated workflows", "Email & SMS templates", "Lead management dashboard", "Basic system integrations", "Monthly system maintenance"],
    highlight: false,
    aiFeatures: []
  },
  {
    name: "Growth Package",
    description: "Advanced automation and tracking for scaling operations.",
    setupFee: "$1,200",
    monthlyFee: "$250",
    features: ["CRM sub-account setup", "3–5 workflows and automations", "Lead pipelines and tagging system", "Automated follow-ups (email/SMS)", "Dashboard reporting", "Integration with forms, calendars, etc.", "Monthly optimization & maintenance"],
    highlight: true,
    aiFeatures: ["Includes AI Property Comps"],
    addons: ["VA support (lead qualification / pipeline updates)"]
  },
  {
    name: "Automation Pro",
    description: "The ultimate autonomous system with multi-channel outreach.",
    setupFee: "$1,800",
    monthlyFee: "$350",
    features: ["Advanced CRM automation setup", "Multiple pipelines and workflows", "Lead nurturing campaigns", "Advanced dashboards and analytics", "Multi-channel automation (SMS, email, calls)", "System integrations (Zapier/API tools)", "Monthly automation optimization", "Priority support"],
    highlight: false,
    aiFeatures: ["Includes AI Property Comps", "Includes AI Cold Caller"],
    addons: ["Human Cold Calling Support", "Lead Qualification Services", "Marketing funnel setup"]
  }
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
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl font-black uppercase tracking-tighter text-brand-blue sm:text-6xl">
              Pay As You <span className="text-brand-red italic">Grow</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              No bloated agency retainers. You pay a one-time build fee for the infrastructure, 
              and a flat monthly rate for maintenance, hosting, and optimization. 
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 items-start">
            {pricingPlans.map((plan, i) => (
              <div 
                key={i} 
                className={`relative flex flex-col rounded-[2.5rem] bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 ${
                  plan.highlight ? "border-4 border-brand-red scale-105 z-10" : "border border-brand-blue/10 mt-4 lg:mt-8"
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
                  <div className="text-sm font-bold text-brand-red">
                    + {plan.setupFee} One-Time Setup Fee
                  </div>
                </div>

                {/* AI Features Highlight (If any) */}
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

                {/* Core Features */}
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

                {/* Call to Action - Changed from Link to Button onClick */}
                <div className="mt-auto block">
                  <Button 
                    variant={plan.highlight ? "primary" : "outline"} 
                    className="w-full"
                    onClick={() => handleSelectPlan(plan.name)}
                  >
                    Select {plan.name.split(" ")[0]}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Render the Modal here too */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedPlan={selectedPlan}
      />
    </>
  );
}