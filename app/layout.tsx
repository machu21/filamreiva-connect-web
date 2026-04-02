import type { Metadata } from "next";
import './globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  title: "FAR Agents | CRM Automation",
  description: "Scalable CRM infrastructure and automated workflows.",
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