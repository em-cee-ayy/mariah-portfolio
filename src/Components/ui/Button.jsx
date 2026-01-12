// src/components/ui/button.jsx

import React from 'react';

export function Button({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'default', 
  as: Component = 'button',
  ...props 
}) {
  
  // --- BASE STYLES ---
  let baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';

  // --- SIZE STYLES ---
  switch (size) {
    case 'lg':
      baseClasses += ' h-12 px-6 text-base'; // Taller and wider for the hero section
      break;
    case 'default':
    default:
      baseClasses += ' h-10 px-4 text-sm';
      break;
  }

  // --- VARIANT STYLES ---
  switch (variant) {
    case 'outline':
      // The base44 resume button is white/light, not standard black/bold
      baseClasses += ' bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'; 
      break;
    case 'ghost': // Used in the modal close button
      baseClasses += ' text-gray-500 hover:bg-gray-100 shadow-none';
      break;
    case 'default':
    default:
      // This will be overridden by the custom gradient class in the HeroSection's "View My Projects" button
      baseClasses += ' text-white bg-blue-600 hover:bg-blue-700'; 
      break;
  }
  
  return (
    <Component 
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
