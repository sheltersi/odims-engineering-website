"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navLinks } from "@/data/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#040404]/90 backdrop-blur-md border-b border-[#1a1a1a]">

      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/assets/img/favicon.png" alt="logo" className="w-12 h-12" />

          <div className="leading-tight">
            <div className="font-semibold text-white">ODiMs</div>
            <div className="text-xs text-gray-400">Welding & Automation</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition ${
                  isActive
                    ? "text-[#FCB861]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}

                {/* underline effect */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#C5620B] transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="tel:+27633264684"
            className="bg-[#C5620B] hover:bg-[#FCB861] text-black px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg"
          >
            Call / WhatsApp
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <>
              <span className="w-6 h-0.5 bg-white rotate-45 translate-y-1"></span>
              <span className="w-6 h-0.5 bg-white -rotate-45 -translate-y-1"></span>
            </>
          ) : (
            <>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#040404] border-t border-[#1a1a1a] px-4 pb-6">

          <nav className="flex flex-col gap-3 pt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg transition ${
                    isActive
                      ? "bg-[#6A2B09] text-[#FCB861]"
                      : "text-gray-300 hover:bg-[#1a1a1a]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* CTA Mobile */}
            <a
              href="tel:+27633264684"
              className="mt-3 text-center bg-[#C5620B] hover:bg-[#FCB861] text-black px-4 py-3 rounded-lg font-medium transition"
            >
              Call / WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}