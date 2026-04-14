"use client";

import Button from "./Button";

export default function ServiceCard({ title, short, href }) {
  return (
    <div className="group flex flex-col justify-between bg-[#0a0a0a] border border-[#1a1a1a] p-6 rounded-xl hover:border-[#C5620B] transition-all duration-300 hover:shadow-lg">

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FCB861] transition">
          {title}
        </h3>

        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
          {short}
        </p>
      </div>

      {/* CTA */}
      {href && (
        <a
          href={href}
          className="text-[#C5620B] hover:text-[#FCB861] text-sm font-medium transition"
        >
          Learn more →
        </a>
      )}
    </div>
  );
}