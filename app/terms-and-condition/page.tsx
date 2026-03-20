import { Scale, Link2, AlertTriangle, BookLock, Trash2, ShieldAlert, Mail } from "lucide-react";

const sections = [
  {
    Icon: BookLock,
    number: "1",
    title: "License",
    content: [
      {
        subtitle: null,
        body: "Unless otherwise stated, FAR Agents and/or its licensors own the intellectual property rights for all material on this website. All rights are reserved. You may view and/or print pages from our website for personal use, subject to the restrictions set out in these terms.",
      },
      {
        subtitle: "You must not:",
        list: [
          "Republish material from our website",
          "Sell, rent, or sub-license material from our website",
          "Reproduce, duplicate, or copy material from our website",
          "Redistribute content from FAR Agents unless content is specifically made for redistribution",
        ],
      },
    ],
  },
  {
    Icon: Link2,
    number: "2",
    title: "Hyperlinking to Our Content",
    content: [
      {
        subtitle: "The following organizations may link to our website without prior written approval:",
        list: [
          "Government agencies",
          "Search engines",
          "News organizations",
          "Online directory distributors when listing FAR Agents",
        ],
      },
      {
        subtitle: "These organizations may link to our homepage or other content as long as:",
        list: [
          "The link is not misleading",
          "It doesn't falsely imply sponsorship or endorsement",
          "It fits within the context of the linking party's site",
        ],
      },
    ],
  },
  {
    Icon: AlertTriangle,
    number: "3",
    title: "Content Liability",
    content: [
      {
        subtitle: null,
        body: "FAR Agents holds no responsibility or liability for any content appearing on your website. You agree to indemnify and defend us against all claims arising from or based on your website's content.",
      },
    ],
  },
  {
    Icon: Scale,
    number: "4",
    title: "Reservation of Rights",
    content: [
      {
        subtitle: null,
        body: "We reserve the right to request the removal of all or any specific links to our website. Upon request, you agree to immediately remove such links. We also reserve the right to amend these Terms and our linking policy at any time. Continued use of our website means you agree to follow the updated terms.",
      },
    ],
  },
  {
    Icon: Trash2,
    number: "5",
    title: "Removal of Links from Our Website",
    content: [
      {
        subtitle: null,
        body: "If you find a link on our website or any linked site objectionable, you may contact us. We will consider your request but are not obligated to respond or act.",
      },
      {
        subtitle: "Contact us at:",
        list: [
          "Email: support@filamreiva.com",
          "Phone: ########",
        ],
      },
    ],
  },
  {
    Icon: ShieldAlert,
    number: "6",
    title: "Disclaimer",
    content: [
      {
        subtitle: null,
        body: "To the fullest extent permitted by law, FAR Agents by Filamreiva excludes all warranties, guarantees, or representations related to this website and the use of our services, including implied warranties of merchantability or fitness for a particular purpose.",
      },
      {
        subtitle: "Nothing in this disclaimer will:",
        list: [
          "Limit or exclude our liability for death or personal injury caused by negligence",
          "Limit or exclude our liability for fraud or fraudulent misrepresentation",
          "Limit or exclude any of your rights under applicable law",
        ],
      },
      {
        subtitle: null,
        body: "To the extent that the website and services are provided free of charge, we will not be liable for any loss or damage of any nature.",
      },
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
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-red" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/15">
            <Scale size={28} strokeWidth={2} className="text-brand-red" />
          </div>
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Legal</p>
          <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl leading-none">
            Terms &amp; <span className="text-brand-red italic">Conditions</span>
          </h1>
          <p className="mt-6 text-white/60 leading-relaxed max-w-xl mx-auto">
            FAR Agents by FILAMREIVA LLC · Last updated:{" "}
            {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-14 border-b border-brand-gray/20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl bg-brand-gray/5 border border-brand-blue/8 p-8">
            <p className="text-slate-600 leading-relaxed text-base">
              By using our website and services, you confirm your agreement with these Terms and Conditions. Please read them carefully. If you have any questions, contact us at{" "}
              <a href="mailto:support@filamreiva.com" className="text-brand-red font-bold hover:underline">
                support@filamreiva.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTIONS ── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          {sections.map(({ Icon, number, title, content }, i) => (
            <div key={i} className="border-b border-brand-gray/15 pb-12 last:border-0">
              {/* Section header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/8 text-brand-blue">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-brand-gray/20">{number}.</span>
                  <h2 className="text-xl font-black text-brand-blue uppercase tracking-tighter">{title}</h2>
                </div>
              </div>

              {/* Section content */}
              <div className="space-y-5 pl-[52px]">
                {content.map(({ subtitle, body, list }, j) => (
                  <div key={j}>
                    {subtitle && (
                      <p className="text-sm font-black text-brand-blue mb-3">{subtitle}</p>
                    )}
                    {body && (
                      <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
                    )}
                    {list && (
                      <ul className="space-y-2 mt-2">
                        {list.map((item, k) => (
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
      </section>

      {/* ── CONTACT FOOTER ── */}
      <section className="bg-brand-gray/5 border-t border-brand-gray/20 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-2xl bg-brand-blue p-8 shadow-xl">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
              <Mail size={22} strokeWidth={2} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-black uppercase tracking-widest text-brand-red mb-1">Questions?</p>
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1">Contact Us About These Terms</h3>
              <p className="text-white/60 text-sm">
                If you have any questions about these Terms and Conditions, please reach out to us at{" "}
                <a href="mailto:support@filamreiva.com" className="text-brand-red font-bold hover:underline">
                  support@filamreiva.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}