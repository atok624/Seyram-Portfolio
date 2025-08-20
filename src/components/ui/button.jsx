import React from "react";

export function Button({ children, size = "md", variant = "solid", className = "", asChild = false, ...props }) {
  const base = "inline-flex items-center justify-center font-semibold rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  const sizes = {
    lg: "px-6 py-3 text-lg",
    md: "px-4 py-2 text-base",
    sm: "px-2 py-1 text-sm"
  };
  const variants = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50"
  };
  const classes = `${base} ${sizes[size] || sizes.md} ${variants[variant] || variants.solid} ${className}`;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { className: `${classes} ${children.props.className || ""}` });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
