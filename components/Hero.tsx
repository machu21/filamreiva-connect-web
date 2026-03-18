import Button from "./ui/Button";
import Link from "next/link";

export default function Hero({ onLaunchClick }: { onLaunchClick: () => void }) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-5xl font-black tracking-tight text-brand-blue sm:text-7xl">
          Elevate Your Business <br />
          <span className="bg-gradient-to-r from-brand-red to-brand-blue bg-clip-text text-transparent">
            with Connect
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Your business doesn’t need another freelancer. It needs a backbone.
          Filamreiva Connect designs, implements, and manages GHL infrastructure
          that actually works—so founders spend their time scaling, not fixing broken automations.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button variant="primary" size="lg" onClick={onLaunchClick}>
            Launch Project
          </Button>
          <Link href="/process">
            <Button variant="outline" size="lg">Our Process</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}