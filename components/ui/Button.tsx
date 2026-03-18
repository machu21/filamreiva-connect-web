import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({ 
  variant = "primary", 
  size = "md", 
  className = "", 
  ...props 
}: ButtonProps) {
  
  // Base styles for all buttons
  const base = "inline-flex items-center justify-center font-bold transition-all active:scale-95 disabled:opacity-50 cursor-pointer";
  
  // Size variations
  const sizes = {
    sm: "px-4 py-1.5 text-xs rounded-lg",
    md: "px-6 py-2.5 text-sm rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
  };

  // Color variations using your v4 theme variables
  const variants = {
    primary: "bg-brand-red text-white shadow-lg shadow-brand-red/20 hover:bg-red-700",
    outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
    ghost: "text-brand-blue/70 hover:text-brand-red hover:bg-brand-gray/50",
  };

  return (
    <button 
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} 
      {...props} 
    />
  );
}