// src/components/ui/badge.jsx

import React from "react";

export function Badge({ className, variant, ...props }) {
  // --- BASE STYLES ---
  // Ensuring no weird border/shadow unless specified
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors cursor-default";
  
  // --- VARIANT STYLES ---
  let variantClasses = "bg-gray-900 text-gray-50"; // Default: dark, used for Tech Stack
  
  if (variant === "secondary") {
    // This style is used for project features ("AI-Powered Discovery")
    variantClasses = "bg-gray-100 text-gray-700 border border-gray-200"; 
  }

  // You can add more variants like 'outline', 'destructive', etc. as needed

  return (
    <div 
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    />
  );
}