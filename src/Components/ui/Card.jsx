// src/components/ui/card.jsx

import React from "react";

// The main card container
export function Card({ className, ...props }) {
  return (
    <div
      className={`rounded-xl border bg-card text-card-foreground ${className}`}
      {...props}
    />
  );
}

// The padding wrapper for content inside the card
export function CardContent({ className, ...props }) {
  return (
    <div 
      className={`p-6 ${className}`} // p-6 is common for shadcn/ui
      {...props}
    />
  );
}