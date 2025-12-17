"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/reviews", label: "Reviews" },
   { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    // <header className="bg-[#E0E1E9] border-b border-slate-400 sticky top-0 z-50">
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200 shadow-sm">

      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4 gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-16 w-16 rounded-xl bg-brand.blue text-white flex items-center justify-center text-sm font-bold">
            <img src="assets/img/favicon.png" alt="icon" className="w-16 h-16" />
          </div>

          <div className="leading-tight">
            <div className="font-semibold text-slate-900">ODiMs</div>
            <div className="text-xs text-slate-500">Welding & Automation</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  isActive
                    ? "text-brand.blue font-semibold border-b-2 border-brand.blue pb-1"
                    : "text-black hover:text-brand.blue"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Call button (desktop only) */}
        <div className="hidden md:block">
          <a href="tel:+27XXXXXXXXX" className="btn btn-primary text-xs md:text-sm">
            Call / WhatsApp
          </a>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <div className="flex flex-col items-center justify-center">
              <span className="w-6 h-0.5 bg-black rotate-45 translate-y-0.5"></span>
              <span className="w-6 h-0.5 bg-black -rotate-45 -translate-y-0.5"></span>
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
<div className="md:hidden bg-white/90 backdrop-blur-md border-t border-slate-200 px-4 pb-4 absolute left-0 right-0 top-full shadow-sm">

          <nav className="flex flex-col gap-4 text-sm text-slate-700 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-2 ps-4 rounded-3xl ms-3 transition ${
                    isActive
                      ? "bg-brand.blue text-blue-500"
                      : "text-black hover:bg-[#ABD2FA]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Call button on mobile */}
            <a
              href="tel:+27810723204"
              className="btn btn-primary text-xs w-fit mt-2"
            >
              Call / WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
