"use client";

import { useState } from "react";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import {
    Calendar,
    Clock,
    User,
    Mail,
    Building2,
    MessageSquare,
    CheckCircle2,
    Loader2,
    ArrowRight
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function BookDemoPage() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/book", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) throw new Error(result.error || "Submission failed");

            setSubmitted(true);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

useEffect(() => {
    if (submitted) {
      // Fire a professional confetti blast
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    }
  }, [submitted]);

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 relative overflow-hidden">
        {/* Success Card */}
        <div className="max-w-md w-full bg-white rounded-[3rem] p-12 shadow-2xl text-center border border-slate-100 relative z-10 animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-black text-brand-blue uppercase tracking-tighter mb-4">
            Demo <span className="text-brand-red italic">Booked!</span>
          </h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Success! Your session is logged. A FAR Agents strategist will reach out shortly to confirm the meeting link.
          </p>
          <Button 
            variant="primary" 
            className="w-full py-6 text-lg shadow-lg hover:scale-105 transition-transform" 
            onClick={() => window.location.href = "/"}
          >
            Return Home
          </Button>
        </div>
      </div>
    );
  }
    return (
        <main className="min-h-screen bg-slate-50 py-20 lg:py-32">
            <div className="mx-auto max-w-4xl px-6">
                <div className="text-center mb-16">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-red mb-4 block">Schedule a Strategy Session</span>
                    <h1 className="text-5xl font-black text-brand-blue uppercase tracking-tighter md:text-7xl">
                        Book Your <span className="text-brand-red italic underline decoration-brand-blue/10">Demo</span>
                    </h1>
                    <p className="mt-6 text-slate-500 text-lg max-w-xl mx-auto">
                        Choose your time and tell us about your wholesale operation. We'll show you exactly how to automate it.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
                    <div className="p-8 md:p-12 grid gap-8 md:grid-cols-2">

                        {/* Column 1: Contact Details */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-black uppercase tracking-widest text-brand-blue border-b border-slate-50 pb-2">1. Personal Info</h3>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1">First Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                        <input required name="firstName" type="text" placeholder="Pat" className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-brand-red transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Last Name</label>
                                    <input required name="lastName" type="text" placeholder="Smith" className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-brand-red transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                    <input required name="email" type="email" placeholder="pat@company.com" className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-brand-red transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Company Name</label>
                                <div className="relative">
                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                    <input name="company" type="text" placeholder="Elite Wholesaling LLC" className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-brand-red transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Appointment Details */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-black uppercase tracking-widest text-brand-blue border-b border-slate-50 pb-2">2. Scheduling</h3>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Preferred Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                    <input required name="date" type="date" className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-brand-red transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Preferred Time (EST)</label>
                                <div className="relative">
                                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                    <select required name="time" className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-brand-red transition-all appearance-none">
                                        <option value="">Select a time slot</option>

                                        {/* Morning Slots */}
                                        <option value="10:00 AM">10:00 AM EST</option>
                                        <option value="10:30 AM">10:30 AM EST</option>
                                        <option value="11:00 AM">11:00 AM EST</option>
                                        <option value="11:30 AM">11:30 AM EST</option>

                                        {/* Afternoon Slots */}
                                        <option value="12:00 PM">12:00 PM EST</option>
                                        <option value="12:30 PM">12:30 PM EST</option>
                                        <option value="1:00 PM">1:00 PM EST</option>
                                        <option value="1:30 PM">1:30 PM EST</option>
                                        <option value="2:00 PM">2:00 PM EST</option>
                                        <option value="2:30 PM">2:30 PM EST</option>
                                        <option value="3:00 PM">3:00 PM EST</option>
                                        <option value="3:30 PM">3:30 PM EST</option>
                                        <option value="4:00 PM">4:00 PM EST</option>
                                        <option value="4:30 PM">4:30 PM EST</option>
                                        <option value="5:00 PM">5:00 PM EST</option>
                                        <option value="5:30 PM">5:30 PM EST</option>

                                        {/* Evening Slots */}
                                        <option value="6:00 PM">6:00 PM EST</option>
                                        <option value="6:30 PM">6:30 PM EST</option>
                                        <option value="7:00 PM">7:00 PM EST</option>
                                        <option value="7:30 PM">7:30 PM EST</option>
                                        <option value="8:00 PM">8:00 PM EST</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Message / Goals</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-300" />
                                    <textarea name="message" rows={3} placeholder="Tell us about your biggest bottleneck..." className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-brand-red transition-all resize-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="bg-slate-50 p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-100">
                        <div className="flex items-center gap-3 text-brand-blue">
                            <div className="p-2 bg-white rounded-lg shadow-sm">
                                <Mail className="w-4 h-4 text-brand-red" />
                            </div>
                            <p className="text-xs font-bold uppercase tracking-widest">Questions? support@filamreiva.com</p>
                        </div>

                        <div className="w-full md:w-auto">
                            {error && <p className="text-brand-red text-xs font-bold mb-3 text-center md:text-right uppercase">{error}</p>}
                            <Button
                                type="submit"
                                disabled={loading}
                                variant="primary"
                                className="w-full md:w-auto px-12 py-4 flex items-center justify-center gap-3"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Confirm Demo Call"}
                                {!loading && <ArrowRight className="w-5 h-5" />}
                            </Button>
                        </div>
                    </div>
                </form>

                <p className="mt-8 text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
                    Safe • Secure • No-Obligation Consultation
                </p>
            </div>
        </main>
    );
}