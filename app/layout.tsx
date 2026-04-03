import type { Metadata } from "next";
import '@/app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  title: {
    default: "FAR Agents | Real Estate CRM Infrastructure & Automation",
    template: "%s | FAR Agents"
  },
  description: "We build the invisible engine for real estate operators. Custom CRM infrastructure, proprietary APIs, and automated workflows designed to scale revenue.",
  keywords: [
    "CRM Automation",
    "CRM Management",
    "Real Estate CRM Infrastructure", 
    "Proprietary Automation", 
    "Real Estate Operations Scaling", 
    "Custom Real Estate APIs", 
    "Lead Management Systems"
  ],
  authors: [{ name: "FAR Agents" }],
  creator: "FAR Agents",
  metadataBase: new URL('https://filamreiva.com'), // Add this to help Next.js resolve image paths
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://filamreiva.com", // Points to your landing page
    siteName: "FAR Agents",
    title: "FAR Agents | The Invisible Engine for Real Estate",
    description: "Enterprise-grade infrastructure for real estate teams.",
    images: [
      {
        url: "/images/LOGO-DEMO.jpg", 
        width: 800,
        height: 800,
        alt: "FAR Agents - CRM and Automation",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        {/* flex-grow ensures the footer stays at the bottom even on short pages */}
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
       <ChatBot />
      </body>
    </html>
  );
}