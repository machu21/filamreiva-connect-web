"use client"; // This is required for hooks like useState

import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ConsultationModal from "@/components/ConsultationModal";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  // 1. Define state at the top of the function
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen">
        {/* Pass the function to trigger the modal */}
        <Hero onLaunchClick={() => setIsModalOpen(true)} />
        <Features />
        <Testimonials />
  
      </main>

      {/* 3. Place the Modal outside the main tag so it layers on top */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}