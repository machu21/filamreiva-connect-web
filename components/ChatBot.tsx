"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Power } from "lucide-react";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: "bot", text: "Systems online. 🚀 I'm the FAR AGENTS AI. Ask me about our CRM builds, pricing, or automation features." }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const [isChatEnded, setIsChatEnded] = useState(false);
  const [emailCaptured, setEmailCaptured] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, isLoading]);

  const handleEndChat = () => {
    setIsChatEnded(true);
    setMessages((prev) => [
      ...prev, 
      { 
        id: Date.now(), 
        role: "bot", 
        text: "Chat ended. If you'd like our Onboarding team to review this transcript and follow up with a solution, please enter your email address below." 
      }
    ]);
  };

const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userText = inputValue;
    const newMessage = { id: Date.now(), role: "user" as const, text: userText };
    
    //NEW: Frontend Email Detection
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    const containsEmail = emailRegex.test(userText);

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsLoading(true);

    // 🔥 INSTANT UI LOCK: If they typed an email naturally, lock the chat states immediately
    if (containsEmail) {
      setIsChatEnded(true);
      setEmailCaptured(true);
    }

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          history: messages.slice(1), 
          message: userText
        }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { id: Date.now(), role: "bot", text: data.text }]);
      
    } catch (error) {
      setMessages((prev) => [...prev, { id: Date.now(), role: "bot", text: "Connection error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] overflow-hidden rounded-2xl bg-white shadow-2xl border border-brand-blue/10 animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="flex items-center justify-between bg-brand-blue p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest">FAR AI</h3>
                <p className="text-[10px] text-brand-gray/80">
                  {isChatEnded ? "Session Closed" : "Powered by FAR Agents AI"}
                </p>
              </div>
            </div>
            
            {/* Header Close Button Only */}
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition">
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-[320px] overflow-y-auto p-4 bg-brand-gray/5 space-y-4 relative">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${
                  msg.role === "user" 
                    ? "bg-brand-red text-white rounded-tr-none" 
                    : "bg-white border border-brand-blue/10 text-brand-blue rounded-tl-none shadow-sm"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-brand-blue/10 text-brand-blue rounded-2xl rounded-tl-none p-4 shadow-sm flex gap-1">
                  <span className="h-2 w-2 bg-slate-300 rounded-full animate-bounce"></span>
                  <span className="h-2 w-2 bg-slate-300 rounded-full animate-bounce delay-75"></span>
                  <span className="h-2 w-2 bg-slate-300 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* NEW: In-Chat "End Chat" Action Pill */}
          {!isChatEnded && (
            <div className="bg-brand-gray/5 px-4 pb-3 flex justify-center border-b border-brand-blue/5">
              <button 
                onClick={handleEndChat} 
                className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest bg-white border border-brand-red/30 text-brand-red px-4 py-2 rounded-full shadow-sm hover:bg-brand-red hover:text-white transition-all"
              >
                <Power size={12} /> End Chat & Leave Email
              </button>
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading || emailCaptured}
                placeholder={
                  emailCaptured 
                    ? "Data captured. Talk soon!" 
                    : isChatEnded 
                    ? "Enter email address..." 
                    : "Ask about our CRM builds..."
                }
                className="flex-1 rounded-xl bg-brand-gray/20 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-blue/20 disabled:opacity-50"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim() || emailCaptured}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-white hover:bg-brand-blue/90 disabled:opacity-50 transition"
              >
                <Send size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-xl shadow-brand-blue/20 hover:scale-105 transition-transform"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}