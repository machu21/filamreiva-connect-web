"use client";

import { useState } from "react";
import Button from "./ui/Button";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Build My Team", href: "/build-my-team" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-brand-blue/10 bg-white/80 backdrop-blur-md">
      <div className="flex w-full items-center justify-between p-4 px-6 md:px-12 lg:px-16">
        
        {/* Logo Section */}
        <div className="flex flex-1 justify-start">
          <Link href="/" className="flex items-center hover:opacity-90 transition">
            <Image
              src="/images/LOGO-DEMO.png"
              alt="FAR Agents Logo"
              width={220}
              height={70}
              className="h-10 md:h-14 w-auto object-contain object-left"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button variant="ghost" size="md" className="text-base font-bold text-slate-600 hover:text-brand-blue transition-colors">
                {link.name}
              </Button>
            </Link>
          ))}
          <a href="https://app.faragents.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="md" className="text-base font-bold text-slate-600 hover:text-brand-blue transition-colors">
              FAR Agents CRM
            </Button>
          </a>
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex flex-1 justify-end items-center gap-4">
          <Link href="/book-demo" className="hidden sm:block">
            <Button variant="primary" size="md" className="text-sm font-black px-6 shadow-md hover:brightness-110 active:scale-95 transition-all">
              Book a Demo
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-brand-blue"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-slate-600 hover:text-brand-red py-2 border-b border-slate-50"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://app.faragents.com" 
            target="_blank" 
            className="text-lg font-bold text-brand-blue py-2 flex items-center justify-between"
          >
            FAR Agents CRM <ExternalLink size={18} />
          </a>
          <Link href="/book-demo" onClick={() => setIsOpen(false)} className="mt-4">
            <Button variant="primary" className="w-full py-6 text-lg font-black">
              Book a Demo
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}