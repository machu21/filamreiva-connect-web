import { Shield, Lock, Eye, Trash2, Globe, AlertTriangle, Baby, Mail } from "lucide-react";

const sections = [
  {
    Icon: Eye,
    id: "data-collected",
    title: "Types of Data Collected",
    content: [
      { subtitle: "Personal Data", body: "While using our Service, we may ask You to provide certain identifiable details including your name, email address, phone number, address, state, ZIP/postal code, and city." },
      { subtitle: "Usage Data", body: "Collected automatically and may include your IP address, browser type and version, pages visited, time and duration of visits, mobile device identifiers, and operating system." },
      { subtitle: "Tracking Technologies & Cookies", body: "We use cookies and similar tracking technologies like beacons and scripts to improve and analyze our Service. Types include Necessary Cookies (enable basic functions), Notice Acceptance Cookies (track consent), and Functionality Cookies (store preferences). You can manage cookie settings in your browser — disabling cookies may impact Service functionality." },
    ],
  },
  {
    Icon: Shield,
    id: "use-of-data",
    title: "Use of Your Personal Data",
    content: [
      { subtitle: null, body: "We may use Your data for the following purposes: providing and maintaining the Service, managing Your account, contacting You via email, SMS, or phone, sending offers or updates (unless opted out), responding to Your requests, analyzing and improving our Service, conducting business transfers such as mergers or acquisitions, and complying with legal obligations. We will not share Your data with Service Providers or Affiliates without Your explicit consent." },
    ],
  },
  {
    Icon: Lock,
    id: "retention",
    title: "Retention of Your Personal Data",
    content: [
      { subtitle: null, body: "We retain Personal Data only as long as necessary for stated purposes or to comply with legal obligations. Usage Data may be retained longer when needed for security or analytics purposes." },
    ],
  },
  {
    Icon: Globe,
    id: "transfer",
    title: "Transfer of Your Personal Data",
    content: [
      { subtitle: null, body: "Your data may be transferred to and stored outside Your jurisdiction. By submitting Your data, You consent to such transfers, provided appropriate safeguards are in place to protect your information." },
    ],
  },
  {
    Icon: Trash2,
    id: "delete",
    title: "Delete Your Personal Data",
    content: [
      { subtitle: null, body: "You have the right to request deletion of Your Personal Data. You may delete data through your account settings or contact us directly for removal. We may retain some data to comply with legal requirements." },
    ],
  },
  {
    Icon: AlertTriangle,
    id: "disclosure",
    title: "Disclosure of Your Personal Data",
    content: [
      { subtitle: null, body: "You have the right to request deletion of Your Personal Data. You may delete data through your account settings or contact us directly for removal. We may retain some data to comply with legal requirements." },
    ],
  },
  {
    Icon: Shield,
    id: "security",
    title: "Security of Your Personal Data",
    content: [
      { subtitle: null, body: "We implement commercially acceptable safeguards to protect Your data. However, no method of transmission over the Internet or electronic storage is 100% secure. We strive to protect Your Personal Data but cannot guarantee absolute security." },
    ],
  },
  {
    Icon: Baby,
    id: "children",
    title: "Children's Privacy",
    content: [
      { subtitle: null, body: "Our Service is not directed to users under 13 years of age. We do not knowingly collect Personal Data from children under 13. If you become aware that a child has provided us with Personal Data, please contact us immediately so we can take steps to remove that information." },
    ],
  },
];

const definitions = [
  { term: "Account", def: "A unique account created for You to access our Service." },
  { term: "Affiliate", def: "Any entity that controls, is controlled by, or is under common control with a party. 'Control' means owning 50% or more of shares, equity interest, or voting securities." },
  { term: "Company", def: "Refers to FAR Agents by FILAMREIVA LLC, Wyoming." },
  { term: "Cookies", def: "Small files placed on Your device by a website, used for remembering your preferences and tracking usage." },
  { term: "Country", def: "Refers to the United States." },
  { term: "Device", def: "Any device capable of accessing the Service (e.g., smartphone, computer, tablet)." },
  { term: "Personal Data", def: "Information that relates to an identifiable individual." },
  { term: "Service", def: "Refers to the Website." },
  { term: "Service Provider", def: "Any third-party (individual or company) who processes data on behalf of FAR Agents." },
  { term: "Usage Data", def: "Automatically collected data related to the use of the Service." },
  { term: "Website", def: "Refers to FAR Agents, accessible at filamreiva.com." },
  { term: "You", def: "The individual or legal entity accessing or using the Service." },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative bg-brand-blue overflow-hidden py-20 lg:py-28 text-white">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-red" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/15">
                <Shield size={26} strokeWidth={2} className="text-brand-red" />
              </div>
              <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">Legal</p>
              <h1 className="text-5xl font-black uppercase tracking-tighter sm:text-6xl leading-none">
                Privacy<br /><span className="text-brand-red italic">Policy</span>
              </h1>
            </div>
            <div className="lg:text-right">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Last Updated</p>
              <p className="text-white/70 font-bold">
                {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>
              <p className="text-white/40 text-sm mt-2">FAR Agents by FILAMREIVA LLC · Wyoming</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-12 border-b border-brand-gray/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl bg-brand-gray/5 border border-brand-blue/8 p-8 lg:p-10">
            <p className="text-slate-600 leading-relaxed text-base lg:text-lg max-w-4xl">
              This Privacy Policy outlines the policies and procedures of <strong className="text-brand-blue">FAR Agents</strong> ("Company", "We", "Us", or "Our") regarding the collection, use, and disclosure of Your information when You use our Service. By using our Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* ── DEFINITIONS ── */}
      <section className="py-14 border-b border-brand-gray/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/8 text-brand-blue">
              <Eye size={20} strokeWidth={2} />
            </div>
            <h2 className="text-2xl font-black text-brand-blue uppercase tracking-tighter">Interpretation & Definitions</h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-8 pl-[60px]">
            Words with capitalized initials have meanings defined below. Definitions apply whether they appear in singular or plural form.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {definitions.map(({ term, def }, i) => (
              <div key={i} className="rounded-xl border border-brand-gray/15 bg-white p-5 hover:border-brand-blue/20 hover:shadow-sm transition-all">
                <p className="text-xs font-black uppercase tracking-widest text-brand-red mb-1">{term}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT: TOC + SECTIONS ── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-[260px_1fr] gap-12 items-start">

            {/* Sticky TOC */}
            <aside className="hidden lg:block sticky top-24">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Contents</p>
              <nav className="space-y-1">
                {sections.map(({ id, title }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-500 hover:bg-brand-blue/5 hover:text-brand-blue transition-colors"
                  >
                    {title}
                  </a>
                ))}
              </nav>
              <div className="mt-8 rounded-xl bg-brand-red/5 border border-brand-red/15 p-5">
                <p className="text-xs font-black uppercase tracking-widest text-brand-red mb-2">Questions?</p>
                <a href="mailto:support@filamreiva.com" className="text-xs font-bold text-brand-blue hover:text-brand-red transition-colors break-all">
                  support@filamreiva.com
                </a>
              </div>
            </aside>

            {/* Sections */}
            <div className="space-y-14">
              {sections.map(({ Icon, id, title, content }) => (
                <div key={id} id={id} className="border-b border-brand-gray/15 pb-14 last:border-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/8 text-brand-blue">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <h2 className="text-2xl font-black text-brand-blue uppercase tracking-tighter">{title}</h2>
                  </div>
                  <div className="space-y-5 pl-[60px]">
                    {content.map(({ subtitle, body }: any, j: number) => (
                      <div key={j}>
                        {subtitle && <p className="text-sm font-black text-brand-blue mb-2">{subtitle}</p>}
                        {body && <p className="text-slate-500 text-sm leading-relaxed">{body}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FOOTER ── */}
      <section className="bg-brand-gray/5 border-t border-brand-gray/20 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-2xl bg-brand-blue p-8 lg:p-10 shadow-xl">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
              <Mail size={22} strokeWidth={2} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-black uppercase tracking-widest text-brand-red mb-1">Questions?</p>
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1">Contact Us About This Policy</h3>
              <p className="text-white/60 text-sm">
                Reach out at{" "}
                <a href="mailto:support@filamreiva.com" className="text-brand-red font-bold hover:underline">support@filamreivas.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}