"use client";

import { useState, useEffect } from "react";
import Button from "./ui/Button";
import confetti from "canvas-confetti";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string | null; 
}

export default function ConsultationModal({ isOpen, onClose, selectedPlan }: ModalProps) {
  const [isBooked, setIsBooked] = useState(false);

  const fireConfetti = () => {
    const count = 200;
    const defaults = { origin: { y: 0.7 }, zIndex: 9999, colors: ["#E63946", "#1D3557", "#ffffff", "#A8DADC"] };
    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({ ...defaults, ...opts, particleCount: Math.floor(count * particleRatio) });
    }
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event === "calendly.event_scheduled") {
        setIsBooked(true);
        fireConfetti();
      }
    };
    window.addEventListener("message", handleCalendlyEvent);
    return () => window.removeEventListener("message", handleCalendlyEvent);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => setIsBooked(false), 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  // Build the dynamic Calendly URL
  const baseUrl = "https://calendly.com/matthew-patacsil021/30min";
  const params = new URLSearchParams({
    hide_landing_page_details: "1",
    hide_gdpr_banner: "1",
    primary_color: "e63946"
  });
  
  // If a plan was passed in, add it as a UTM Campaign parameter
  if (selectedPlan) {
    params.append("utm_campaign", selectedPlan);
  }

  const iframeUrl = `${baseUrl}?${params.toString()}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-brand-blue/60 backdrop-blur-sm">
      <div className="relative flex flex-col w-full max-w-4xl max-h-[95vh] h-[800px] overflow-hidden rounded-[2.5rem] bg-white shadow-2xl">
        
        {/* Header */}
        <div className="flex-none flex items-center justify-between p-6 border-b border-gray-100 z-10 bg-white">
           <h2 className="text-xl font-black text-brand-blue uppercase">
             {isBooked ? "Project Launched" : selectedPlan ? `Book: ${selectedPlan}` : "Schedule Consultation"}
           </h2>
           <button onClick={onClose} className="text-slate-400 hover:text-brand-red p-2 transition">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>
        </div>

        {/* Content Area */}
        <div className="flex-grow w-full relative bg-brand-gray/5 overflow-y-auto">
          {isBooked ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="w-24 h-24 bg-brand-red text-white rounded-full flex items-center justify-center mb-6 text-5xl shadow-xl shadow-brand-red/20">🚀</div>
              <h3 className="text-4xl font-black text-brand-blue uppercase tracking-tighter">Systems Online.</h3>
              <p className="text-slate-600 mt-4 max-w-sm leading-relaxed">
                Your consultation is locked in. We're already spinning up the logic for your <strong>CRM Backbone</strong>.
              </p>
              <Button variant="primary" className="mt-10 px-12" onClick={onClose}>
                Back to Dashboard
              </Button>
            </div>
          ) : (
            <iframe src={iframeUrl} width="100%" height="100%" style={{ border: 0 }} className="absolute inset-0"></iframe>
          )}
        </div>
      </div>
    </div>
  );
}