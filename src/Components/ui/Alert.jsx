// src/components/ui/alert.jsx

import React from "react";

export function Alert({ className, variant, children, ...props }) {
  let variantClasses = "border-gray-200 bg-white text-gray-900"; // Default
  
  // Custom alert styles from your code
  if (variant === "destructive") {
    variantClasses = "border-red-400 bg-red-500/20 text-red-800";
  }

  return (
    <div
      className={`relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function AlertTitle({ className, children, ...props }) {
  return (
    <h5 className={`mb-1 font-medium leading-none tracking-tight ${className}`} {...props}>
      {children}
    </h5>
  );
}

export function AlertDescription({ className, children, ...props }) {
  return (
    <div className={`text-sm [&_p]:leading-relaxed ${className}`} {...props}>
      {children}
    </div>
  );
}