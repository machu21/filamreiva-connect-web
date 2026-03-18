import Button from "@/components/ui/Button";
import {
  Settings2,
  Target,
  Search,
  Paintbrush2,
  PenLine,
  TrendingUp,
  Smartphone,
  Trophy,
  Home,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";

const teamRoles = [
  {
    title: "CRM Experts",
    Icon: Settings2,
    tagline: "Your backend, bulletproofed.",
    items: [
      "Complete Marketing & Automation Solutions",
      "Custom Membership Solutions",
      "Streamlined Automations & Integrations",
      "AI Bot Creation & Custom App Development"
    ]
  },
  {
    title: "Media Buyer",
    Icon: Target,
    tagline: "Ads that actually close deals.",
    items: ["Facebook Ads", "TikTok Ads", "Google Ads", "Reporting", "Testing and Retargeting"]
  },
  {
    title: "SEO Experts",
    Icon: Search,
    tagline: "Get found before the competition.",
    items: ["Keyword research", "Local SEO", "On-Page SEO", "Off-Page SEO", "Backlinks & Reputation"]
  },
  {
    title: "Graphic Designer",
    Icon: Paintbrush2,
    tagline: "Visuals that build trust instantly.",
    items: ["FAR Connect UI/UX design", "Funnel & Website graphics", "Mobile-responsive layouts", "Brand-aligned creatives", "Fast revisions"]
  },
  {
    title: "Content Writer",
    Icon: PenLine,
    tagline: "Words that move buyers to act.",
    items: ["SEO-optimized copy", "Audience-focused messaging", "Blog & Website content", "Lead-converting writing", "Keyword-rich structure"]
  },
  {
    title: "Growth Maker",
    Icon: TrendingUp,
    tagline: "More leads. Less guesswork.",
    items: ["Lead scraping & cleanup", "Facebook Outreach", "Linkedin Outreach", "Conversion-focused input", "Fast, reliable support"]
  },
  {
    title: "Social Media Manager",
    Icon: Smartphone,
    tagline: "Stay top of mind in every feed.",
    items: ["Cross-platform strategy", "Brand growth & visibility", "Content planning & posting", "Audience engagement", "Performance tracking"]
  }
];

const stats = [
  { value: "180+", label: "Real Estate Teams Served" },
  { value: "3.2x", label: "Average Lead Volume Increase" },
  { value: "24/7", label: "Automation Uptime" },
  { value: "14 days", label: "Average Time to Deploy" },
];

const trustItems = [
  { Icon: Home, text: "FAR Connect-native team with real estate CRM experience" },
  { Icon: ClipboardList, text: "Pre-built workflows for buyer & seller funnels" },
  { Icon: ShieldCheck, text: "Full A2P/SMS compliance for real estate outreach" },
];

export default function GetATeam() {
  return (
    <main className="min-h-screen bg-white pb-20">

      {/* ── HERO ── */}
      <section className="relative bg-brand-blue overflow-hidden py-24 text-center text-white">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "48px 48px"
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6">
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">
            Built for Real Estate Operators
          </p>
          <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-6xl leading-none">
            Your Full-Stack<br />
            <span className="text-brand-red italic">Growth Team</span>
          </h1>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            From lead gen to closing pipeline — every specialist you need under one roof,
            wired together by automation and managed for you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="primary" className="px-10">
              Book Discovery Call
            </Button>
            <button className="text-sm font-bold text-white/60 hover:text-white transition underline underline-offset-4">
              See how it works →
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white border-b border-brand-gray/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-gray/20">
            {stats.map((s, i) => (
              <div key={i} className="py-8 px-6 text-center">
                <div className="text-3xl font-black text-brand-blue">{s.value}</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO COPY ── */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-3xl font-black text-brand-blue uppercase tracking-tighter">
          Stop Hiring One at a Time
        </h2>
        <div className="mx-auto mt-4 h-1.5 w-20 bg-brand-red rounded-full" />
        <p className="mt-6 text-slate-500 leading-relaxed text-lg">
          Most real estate teams waste months hiring, onboarding, and managing scattered freelancers.
          We give you a pre-wired team — each specialist already knows their lane, already integrated
          into your FAR Connect stack, and already managed by a dedicated Project Manager.
        </p>
      </section>

      {/* ── ROLES GRID ── */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamRoles.map((role, i) => (
            <div key={i} className="group rounded-3xl border border-brand-blue/5 bg-white p-8 shadow-xl transition-all hover:border-brand-red/20 hover:-translate-y-1">
              <div className="mb-1 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/5 text-brand-blue group-hover:bg-brand-red/10 group-hover:text-brand-red transition-colors">
                  <role.Icon size={20} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-black text-brand-blue uppercase">{role.title}</h3>
              </div>
              <p className="text-xs text-brand-red font-bold uppercase tracking-widest mb-4">{role.tagline}</p>
              <ul className="space-y-3">
                {role.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
                    <span className="text-brand-red mt-1 shrink-0">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Project Manager / Bonus Card */}
          <div className="rounded-3xl bg-brand-red p-8 text-white shadow-xl lg:col-span-1">
            <div className="mb-1 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <Trophy size={20} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-black uppercase">Project Manager</h3>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">Your single point of accountability.</p>
            <p className="text-sm font-medium opacity-90 leading-relaxed">
              Every team comes with a dedicated Project Manager to oversee all operations,
              ensure deadlines are met, and keep your automation engine running 24/7.
            </p>
            <div className="mt-6 rounded-2xl bg-white/10 p-4 border border-white/20">
              <span className="text-xs font-black uppercase tracking-widest text-white">Bonus Feature</span>
              <p className="mt-1 text-sm italic font-medium">Included in all team placements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="mx-auto max-w-7xl px-6 mt-20">
        <div className="rounded-3xl bg-brand-gray/10 border border-brand-gray/20 px-10 py-12 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">Why Real Estate Teams Choose Us</p>
            <h3 className="text-2xl font-black text-brand-blue uppercase tracking-tighter leading-tight">
              We Understand<br />Your Pipeline
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1 md:ml-12">
            {trustItems.map(({ Icon, text }, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <p className="text-sm text-slate-500 font-medium leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mt-20 text-center px-6">
        <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">Let's Talk</p>
        <h2 className="text-3xl font-black text-brand-blue uppercase tracking-tighter">
          Ready to Plug In Your Team?
        </h2>
        <p className="text-slate-500 mt-4 max-w-md mx-auto leading-relaxed">
          Book a free 30-minute discovery call. We'll map out your gaps and show you exactly
          who you need and how fast we can deploy.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" variant="primary" className="px-12">
            Book Discovery Call
          </Button>
        </div>
      </section>

    </main>
  );
}