"use client";

import Link from "next/link";

export default function Button({ href, children, variant = "primary", className = "", ...props }) {
  const base = "inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all duration-200";

  const hasBgOverride = /\bbg-/.test(className);
  const hasTextOverride = /\btext-/.test(className);

  const styles = {
    primary: `${hasBgOverride ? "" : "bg-blue-600"} ${hasTextOverride ? "" : "text-white"} hover:bg-blue-700 shadow-lg shadow-blue-200`,
    outline: "border border-slate-300 text-slate-700 hover:bg-slate-50",
  };

  const variantClass = styles[variant] || styles.primary;
  const fullClass = `${base} ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={fullClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={fullClass} {...props}>
      {children}
    </button>
  );
}
