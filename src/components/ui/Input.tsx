import React from "react";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      // Added softer bg, padding, and smooth transitions
      className={`w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 ${className}`}
      {...props}
    />
  );
});
Input.displayName = "Input";