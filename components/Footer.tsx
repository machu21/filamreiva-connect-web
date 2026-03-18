import Button from "./ui/Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white/90">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-black tracking-tighter text-white">
              FILAM<span className="text-brand-red">REIVA</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-brand-gray/60">
              Leading the shift to autonomous operations. We specialize in 
              **CRM Automation** and intelligent workflows that scale your 
              business without increasing your head count.
            </p>
            
            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <a href="#" className="hover:text-brand-red transition-colors" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" className="hover:text-brand-red transition-colors" aria-label="Twitter/X">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
              </a>
            </div>
          </div>

          {/* Automation Services */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-brand-red uppercase">Automation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">CRM Implementation</a></li>
              <li><a href="#" className="hover:text-white transition">Lead Management</a></li>
              <li><a href="#" className="hover:text-white transition">API Integrations</a></li>
              <li><a href="#" className="hover:text-white transition">Workflow Design</a></li>
            </ul>
          </div>

          {/* Legal & Company */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-brand-red uppercase">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white transition">About Filamreiva</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Support</a></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-brand-red uppercase">Get the Playbook</h3>
            <p className="mt-4 text-sm text-brand-gray/60 italic">Monthly insights on automating your revenue operations.</p>
            <div className="mt-4 flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="work@company.com" 
                className="rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition"
              />
              <Button size="sm" className="w-full">Get Started</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-brand-gray/40">
          <p>© {currentYear} Filamreiva Connect. All rights reserved.</p>
          <div className="flex gap-6">
          </div>
        </div>
      </div>
    </footer>
  );
}