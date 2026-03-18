import Button from "./ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-brand-blue/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 px-6">

        {/* Logo Section */}
        <Link href="/" className="flex items-center hover:opacity-90 transition">
          <Image
            src="/images/logo-main.png"
            alt="Filamreiva Connect Logo"
            width={80}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden space-x-1 md:flex items-center">
          <Link href="/">
            <Button variant="ghost" size="sm">Home</Button>
          </Link>
          <Link href="/get-a-team">
            <Button variant="ghost" size="sm">Get A Team</Button>
          </Link>
          <Link href="/pay-as-you-go">
          <Button variant="ghost" size="sm">Pay As You Go</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" size="sm">About</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" size="sm">Contact Us</Button>
          </Link>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Button variant="primary" size="md">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}