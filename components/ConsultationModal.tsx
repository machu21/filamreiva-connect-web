"use client";

import { useState, useEffect } from "react";
import Button from "./ui/Button";
import confetti from "canvas-confetti";
import { ChevronLeft, ChevronRight, Clock, Calendar, User, Mail, Phone, X, CheckCircle2, Loader2 } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string | null;
}

// ── CONFIG ──────────────────────────────────────────────
const SESSION_DURATION = 30; // minutes
const AVAILABLE_DAYS = [1, 2, 3, 4, 5]; // 1=Mon, 5=Fri (0=Sun, 6=Sat)
const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM",
];
// ────────────────────────────────────────────────────────

type Step = "date" | "time" | "form" | "confirm";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const DAY_NAMES = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function fireConfetti() {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
    colors: ["#E63946", "#1D3557", "#ffffff", "#A8DADC"],
  };
  const fire = (ratio: number, opts: confetti.Options) =>
    confetti({ ...defaults, ...opts, particleCount: Math.floor(count * ratio) });
  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2,  { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1,  { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1,  { spread: 120, startVelocity: 45 });
}

export default function ConsultationModal({ isOpen, onClose, selectedPlan }: ModalProps) {
  const today = new Date();
  const [step, setStep] = useState<Step>("date");
  const [calYear, setCalYear]   = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "", phone: "", company: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep("date");
        setSelectedDate(null);
        setSelectedTime(null);
        setForm({ firstName:"", lastName:"", email:"", phone:"", company:"", message:"" });
        setError(null);
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // ── Calendar helpers ──
  const daysInMonth  = getDaysInMonth(calYear, calMonth);
  const firstDay     = getFirstDayOfMonth(calYear, calMonth);

  const isDateAvailable = (day: number) => {
    const date = new Date(calYear, calMonth, day);
    const now  = new Date();
    now.setHours(0, 0, 0, 0);
    return date >= now && AVAILABLE_DAYS.includes(date.getDay());
  };

  const isSelectedDate = (day: number) =>
    selectedDate?.getFullYear() === calYear &&
    selectedDate?.getMonth()    === calMonth &&
    selectedDate?.getDate()     === day;

  const prevMonth = () => {
    if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11); }
    else setCalMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0); }
    else setCalMonth(m => m + 1);
  };

  // ── Submit ──
  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          date: selectedDate.toISOString(),
          time: selectedTime,
          plan: selectedPlan || "General Consultation",
          duration: SESSION_DURATION,
        }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Something went wrong.");
      setStep("confirm");
      fireConfetti();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });

  const canGoBack = step === "time" || step === "form";

  const stepBack = () => {
    if (step === "time") setStep("date");
    if (step === "form") setStep("time");
  };

  const formValid =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.includes("@");

  // ── Step labels ──
  const STEPS: Step[] = ["date", "time", "form"];
  const stepIndex = STEPS.indexOf(step as Step);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-brand-blue/60 backdrop-blur-sm">
      <div className="relative flex flex-col w-full max-w-2xl max-h-[95vh] overflow-hidden rounded-[2rem] bg-white shadow-2xl">

        {/* ── Header ── */}
        <div className="flex-none flex items-center justify-between px-7 py-5 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-3">
            {canGoBack && (
              <button onClick={stepBack} className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-brand-gray/20 text-slate-500 transition">
                <ChevronLeft size={18} />
              </button>
            )}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                {selectedPlan ? `Plan: ${selectedPlan}` : "Discovery Call"}
              </p>
              <h2 className="text-lg font-black text-brand-blue uppercase tracking-tight leading-none mt-0.5">
                {step === "date"    && "Pick a Date"}
                {step === "time"    && "Pick a Time"}
                {step === "form"    && "Your Details"}
                {step === "confirm" && "You're Booked!"}
              </h2>
            </div>
          </div>
          <button onClick={onClose} className="flex items-center justify-center h-9 w-9 rounded-full hover:bg-brand-gray/20 text-slate-400 hover:text-brand-red transition">
            <X size={20} />
          </button>
        </div>

        {/* ── Progress bar (steps 1-3 only) ── */}
        {step !== "confirm" && (
          <div className="flex-none flex gap-1.5 px-7 pt-4 pb-2">
            {STEPS.map((s, i) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  i <= stepIndex ? "bg-brand-red" : "bg-brand-gray/30"
                }`}
              />
            ))}
          </div>
        )}

        {/* ── Content ── */}
        <div className="flex-1 overflow-y-auto px-7 py-5">

          {/* STEP 1: Date Picker */}
          {step === "date" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              {/* Session info pill */}
              <div className="flex items-center gap-2 mb-5 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <Clock size={14} className="text-brand-red" />
                {SESSION_DURATION} min session &bull; Mon–Fri &bull; PST
              </div>

              {/* Calendar nav */}
              <div className="flex items-center justify-between mb-4">
                <button onClick={prevMonth} className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-brand-gray/20 text-slate-600 transition">
                  <ChevronLeft size={18} />
                </button>
                <span className="font-black text-brand-blue uppercase tracking-tight">
                  {MONTH_NAMES[calMonth]} {calYear}
                </span>
                <button onClick={nextMonth} className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-brand-gray/20 text-slate-600 transition">
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 mb-1">
                {DAY_NAMES.map(d => (
                  <div key={d} className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-400 py-1">
                    {d}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day       = i + 1;
                  const available = isDateAvailable(day);
                  const selected  = isSelectedDate(day);
                  return (
                    <button
                      key={day}
                      disabled={!available}
                      onClick={() => {
                        setSelectedDate(new Date(calYear, calMonth, day));
                        setSelectedTime(null);
                        setStep("time");
                      }}
                      className={`aspect-square rounded-xl text-sm font-bold transition-all
                        ${selected
                          ? "bg-brand-red text-white shadow-md shadow-brand-red/30 scale-105"
                          : available
                            ? "hover:bg-brand-blue/8 text-brand-blue hover:scale-105"
                            : "text-slate-300 cursor-not-allowed"
                        }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Time Picker */}
          {step === "time" && selectedDate && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-2 mb-5 text-sm font-bold text-brand-blue">
                <Calendar size={15} className="text-brand-red" />
                {formatDate(selectedDate)}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.map(slot => (
                  <button
                    key={slot}
                    onClick={() => { setSelectedTime(slot); setStep("form"); }}
                    className={`py-2.5 rounded-xl text-sm font-bold border transition-all hover:scale-[1.03]
                      ${selectedTime === slot
                        ? "bg-brand-red text-white border-brand-red shadow-md shadow-brand-red/30"
                        : "border-brand-blue/10 text-brand-blue hover:border-brand-red/30 hover:bg-brand-red/5"
                      }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Form */}
          {step === "form" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-4">
              {/* Booking summary pill */}
              <div className="flex items-center gap-3 rounded-xl bg-brand-blue/5 border border-brand-blue/10 px-4 py-3 mb-2">
                <Calendar size={15} className="text-brand-red shrink-0" />
                <span className="text-xs font-bold text-brand-blue">
                  {selectedDate && formatDate(selectedDate)} &bull; {selectedTime} &bull; {SESSION_DURATION} min
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {(["firstName","lastName"] as const).map(field => (
                  <div key={field} className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {field === "firstName" ? "First Name" : "Last Name"} <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      value={form[field]}
                      onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-xl bg-brand-gray/20 border border-transparent focus:border-brand-blue/30 focus:ring-2 focus:ring-brand-blue/10 outline-none transition text-sm text-brand-blue placeholder:text-slate-400"
                      placeholder={field === "firstName" ? "Pat" : "Doe"}
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Work Email <span className="text-brand-red">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-xl bg-brand-gray/20 border border-transparent focus:border-brand-blue/30 focus:ring-2 focus:ring-brand-blue/10 outline-none transition text-sm text-brand-blue placeholder:text-slate-400"
                  placeholder="pat@company.com"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Phone <span className="text-slate-300 normal-case font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-xl bg-brand-gray/20 border border-transparent focus:border-brand-blue/30 focus:ring-2 focus:ring-brand-blue/10 outline-none transition text-sm text-brand-blue placeholder:text-slate-400"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Company / Agency
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-xl bg-brand-gray/20 border border-transparent focus:border-brand-blue/30 focus:ring-2 focus:ring-brand-blue/10 outline-none transition text-sm text-brand-blue placeholder:text-slate-400"
                  placeholder="Your brokerage or team name"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  What do you need help with?
                </label>
                <textarea
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full px-3 py-2.5 h-24 rounded-xl bg-brand-gray/20 border border-transparent focus:border-brand-blue/30 focus:ring-2 focus:ring-brand-blue/10 outline-none transition text-sm text-brand-blue placeholder:text-slate-400 resize-none"
                  placeholder="Briefly describe your bottlenecks..."
                />
              </div>

              {error && (
                <p className="text-xs text-brand-red font-bold bg-brand-red/5 border border-brand-red/20 rounded-xl px-4 py-3">
                  ⚠️ {error}
                </p>
              )}
            </div>
          )}

          {/* STEP 4: Confirmation */}
          {step === "confirm" && (
            <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in slide-in-from-bottom-6 duration-500">
              <div className="w-20 h-20 bg-brand-red text-white rounded-full flex items-center justify-center mb-5 shadow-xl shadow-brand-red/20">
                <CheckCircle2 size={40} strokeWidth={2} />
              </div>
              <h3 className="text-3xl font-black text-brand-blue uppercase tracking-tighter">You're Locked In.</h3>
              <p className="text-slate-500 mt-3 max-w-sm leading-relaxed text-sm">
                Your booking has been logged. We'll reach out to{" "}
                <strong className="text-brand-blue">{form.email}</strong> with session details shortly.
                See you on{" "}
                <strong className="text-brand-blue">
                  {selectedDate && formatDate(selectedDate)} at {selectedTime}.
                </strong>
              </p>
              <div className="mt-6 rounded-2xl bg-brand-gray/10 border border-brand-blue/8 px-6 py-4 text-left w-full max-w-sm space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-bold uppercase tracking-wide">Session</span>
                  <span className="text-brand-blue font-black">{SESSION_DURATION} min Discovery Call</span>
                </div>
                {selectedPlan && (
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400 font-bold uppercase tracking-wide">Plan</span>
                    <span className="text-brand-blue font-black">{selectedPlan}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-bold uppercase tracking-wide">With</span>
                  <span className="text-brand-blue font-black">Filamreiva Connect</span>
                </div>
              </div>
              <Button variant="primary" className="mt-8 px-10" onClick={onClose}>
                Back to Site
              </Button>
            </div>
          )}
        </div>

        {/* ── Footer CTA (steps 1-3) ── */}
        {step === "form" && (
          <div className="flex-none px-7 py-5 border-t border-gray-100 bg-white">
            <Button
              variant="primary"
              className="w-full font-black uppercase tracking-widest flex items-center justify-center gap-2 py-3.5"
              onClick={handleSubmit}
              disabled={!formValid || loading}
            >
              {loading
                ? <><Loader2 size={16} className="animate-spin" /> Booking...</>
                : <>Confirm Booking <CheckCircle2 size={16} /></>
              }
            </Button>
            <p className="text-center text-xs text-slate-400 mt-2">
              Your booking details are saved. We'll be in touch.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}