import { Scale, Link2, AlertTriangle, BookLock, Trash2, ShieldAlert, Mail, Gavel, UserX } from "lucide-react";

const sections = [
  {
    Icon: BookLock,
    number: "1",
    title: "License",
    content: [
      { subtitle: null, body: "Unless otherwise stated, FAR Agents and/or its licensors own the intellectual property rights for all material on this website. All rights are reserved. You may view and/or print pages from our website for personal use, subject to the restrictions set out in these terms." },
      { subtitle: "You must not:", list: ["Republish material from our website", "Sell, rent, or sub-license material from our website", "Reproduce, duplicate, or copy material from our website", "Redistribute content from FAR Agents unless content is specifically made for redistribution"] },
    ],
  },
  {
    Icon: Link2,
    number: "2",
    title: "Hyperlinking to Our Content",
    content: [
      { subtitle: "The following organizations may link to our website without prior written approval:", list: ["Government agencies", "Search engines", "News organizations", "Online directory distributors when listing FAR Agents"] },
      { subtitle: "These organizations may link as long as:", list: ["The link is not misleading", "It doesn't falsely imply sponsorship or endorsement", "It fits within the context of the linking party's site"] },
    ],
  },
  {
    Icon: AlertTriangle,
    number: "3",
    title: "Content Liability",
    content: [
      { subtitle: null, body: "FAR Agents holds no responsibility or liability for any content appearing on your website. You agree to indemnify and defend us against all claims arising from or based on your website's content." },
    ],
  },
  {
    Icon: Scale,
    number: "4",
    title: "Reservation of Rights",
    content: [
      { subtitle: null, body: "We reserve the right to request the removal of all or any specific links to our website. Upon request, you agree to immediately remove such links. We also reserve the right to amend these Terms and our linking policy at any time. Continued use of our website means you agree to follow the updated terms." },
    ],
  },
  {
    Icon: Trash2,
    number: "5",
    title: "Removal of Links from Our Website",
    content: [
      { subtitle: null, body: "If you find a link on our website or any linked site objectionable, you may contact us. We will consider your request but are not obligated to respond or act." },
      { subtitle: "Contact us at:", list: ["Email: support@filamreiva.com", "Phone: (307) 461-3527"] },
    ],
  },
  {
    Icon: ShieldAlert,
    number: "6",
    title: "Disclaimer",
    content: [
      { subtitle: null, body: "To the fullest extent permitted by law, FAR Agents by Filamreiva excludes all warranties, guarantees, or representations related to this website and the use of our services, including implied warranties of merchantability or fitness for a particular purpose." },
      { subtitle: "Nothing in this disclaimer will:", list: ["Limit or exclude our liability for death or personal injury caused by negligence", "Limit or exclude our liability for fraud or fraudulent misrepresentation", "Limit or exclude any of your rights under applicable law"] },
      { subtitle: null, body: "To the extent that the website and services are provided free of charge, we will not be liable for any loss or damage of any nature." },
    ],
  },
  {
    Icon: Gavel,
    number: "7",
    title: "Governing Law and Dispute Resolution",
    content: [
      { subtitle: null, body: "These Terms and Conditions and any disputes arising out of or related to them, or to the use of our Services, shall be governed by and construed in accordance with the laws of the State of Wyoming, without regard to its conflict of law provisions." },
      { subtitle: null, body: "In the event of any dispute, the parties agree to first attempt resolution through good-faith negotiation. If unresolved within thirty (30) days of written notice, the following applies:" },
      { subtitle: "Resolution Paths:", list: ["Small Claims: Either party may bring an individual claim in a small claims court in Sheridan County, Wyoming, provided it qualifies under that court's jurisdictional limits and is brought on a non-class basis.", "All Other Claims: Disputes not eligible for small claims shall be submitted to binding arbitration in Sheridan County, Wyoming, under the rules of the American Arbitration Association (AAA). The arbitrator's decision is final and binding. Each party bears its own costs unless the arbitrator determines otherwise."] },
      { subtitle: null, body: "FAR Agents by Filamreiva LLC reserves the right to seek injunctive or equitable relief in any court of competent jurisdiction to protect its intellectual property, confidential information, or business relationships, without waiving its right to arbitration for all other claims." },
    ],
  },
  {
    Icon: UserX,
    number: "8",
    title: "Non-Circumvention and Non-Solicitation",
    content: [
      { subtitle: "8.1 Client Acknowledgment", body: "The Client acknowledges that FAR Agents by Filamreiva LLC has invested significant time, resources, and expense in recruiting, training, vetting, and placing its Virtual Assistants ('VAs'). The Company's relationships with its VAs constitute confidential business assets and trade secrets that provide a competitive advantage in the marketplace." },
      { subtitle: "8.2 Prohibition on Direct Engagement", body: "During the term of any active service agreement, and for twelve (12) months following its termination or expiration, the Client agrees not to:" },
      { subtitle: null, list: ["Directly or indirectly solicit, hire, engage, or contract with any VA assigned through the Company, in any capacity, without prior written consent of an authorized officer.", "Encourage, induce, or assist any VA to terminate their relationship with the Company.", "Refer any VA to a third party for direct engagement outside of the Company's placement process."] },
      { subtitle: "8.3 Buyout Option", body: "If the Client wishes to hire a VA directly, the Client may do so with the Company's prior written approval and payment of a placement buyout fee. The amount is determined at time of request based on the VA's tenure and role, compensating the Company for its recruitment and training investment." },
      { subtitle: "8.4 Remedy for Breach", body: "The Client acknowledges that a breach of this section would cause irreparable harm for which monetary damages alone are inadequate. In the event of breach or threatened breach, the Company shall be entitled to seek:" },
      { subtitle: null, list: ["Injunctive relief without the requirement of posting bond", "Actual damages, including lost revenue attributable to the circumvention", "Recovery of reasonable attorneys' fees and costs incurred in enforcing this provision"] },
      { subtitle: "8.5 Severability", body: "If any provision of this section is found unenforceable in a particular jurisdiction, it shall be modified to the minimum extent necessary to make it enforceable. All remaining provisions shall remain in full force and effect." },
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative bg-brand-blue overflow-hidden py-20 lg:py-28 text-white">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: "48px 48px" }}
        />
        <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-red" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/15">
                <Scale size={26} strokeWidth={2} className="text-brand-red" />
              </div>
              <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">Legal</p>
              <h1 className="text-5xl font-black uppercase tracking-tighter sm:text-6xl leading-none">
                Terms &amp;<br /><span className="text-brand-red italic">Conditions</span>
              </h1>
            </div>
            <div className="lg:text-right">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Last Updated</p>
              <p className="text-white/70 font-bold">
                {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>
              <p className="text-white/40 text-sm mt-2">FAR Agents by FILAMREIVA LLC</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-14 border-b border-brand-gray/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl bg-brand-gray/5 border border-brand-blue/8 p-8 lg:p-10">
            <p className="text-slate-600 leading-relaxed text-base lg:text-lg max-w-4xl">
              By using our website and services, you confirm your agreement with these Terms and Conditions. Please read them carefully. If you have any questions, contact us at{" "}
              <a href="mailto:support@filamreiva.com" className="text-brand-red font-bold hover:underline">support@filamreiva.com</a>.
            </p>
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
                {sections.map(({ number, title }) => (
                  <a
                    key={number}
                    href={`#section-${number}`}
                    className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-500 hover:bg-brand-blue/5 hover:text-brand-blue transition-colors group"
                  >
                    <span className="text-xs font-black text-brand-gray/40 group-hover:text-brand-red transition-colors w-5">{number}.</span>
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
              {sections.map(({ Icon, number, title, content }, i) => (
                <div key={i} id={`section-${number}`} className="border-b border-brand-gray/15 pb-14 last:border-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/8 text-brand-blue">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-black text-brand-gray/20">{number}.</span>
                      <h2 className="text-xl font-black text-brand-blue uppercase tracking-tighter">{title}</h2>
                    </div>
                  </div>
                  <div className="space-y-5 pl-[52px]">
                    {content.map(({ subtitle, body, list }: any, j: number) => (
                      <div key={j}>
                        {subtitle && <p className="text-sm font-black text-brand-blue mb-3">{subtitle}</p>}
                        {body && <p className="text-slate-500 text-sm leading-relaxed">{body}</p>}
                        {list && (
                          <ul className="space-y-2 mt-2">
                            {list.map((item: string, k: number) => (
                              <li key={k} className="flex items-start gap-3 text-sm text-slate-500">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
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
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1">Contact Us About These Terms</h3>
              <p className="text-white/60 text-sm">
                Reach out at{" "}
                <a href="mailto:support@filamreiva.com" className="text-brand-red font-bold hover:underline">support@filamreiva.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}