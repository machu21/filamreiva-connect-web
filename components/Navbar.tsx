import Button from "./ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-brand-blue/10 bg-white/80 backdrop-blur-md">
      <div className="flex w-full items-center justify-between p-4 px-6 md:px-12 lg:px-16">

        {/* Logo Section */}
        <div className="flex flex-1 justify-start">
          <Link href="/" className="flex items-center hover:opacity-90 transition">
            <Image
              src="/images/LOGO-DEMO.png"
              alt="Filamreiva Agents Logo"
              width={220}
              height={70}
              className="h-14 w-auto object-contain object-left"
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center gap-2">
          <Link href="/">
            <Button variant="ghost" size="md" className="text-base font-bold">Home</Button>
          </Link>
          <Link href="/get-a-team">
            <Button variant="ghost" size="md" className="text-base font-bold">Build My Team</Button>
          </Link>
          <Link href="/on-demand-services">
            <Button variant="ghost" size="md" className="text-base font-bold">On-Demand Services</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" size="md" className="text-base font-bold">About</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" size="md" className="text-base font-bold">Contact Us</Button>
          </Link>
        </div>

        {/* Action Button - Increased to size="lg" */}
        <div className="flex flex-1 justify-end items-center gap-4">
          <Link href="https://app.faragents.com/">
            <Button variant="primary" size="lg" className="text-base font-black px-8">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}