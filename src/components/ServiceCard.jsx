"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const icons = {
  "gate-fabrication": "🛡️",
  "gate-motors": "⚡",
  "gate-repairs": "🔧",
  "remote-programming": "📡",
  "garage-doors": "🚪",
  "burglar-bars": "🔒",
  carports: "🏗️",
  "palisade-fencing": "⛓️",
  welding: "🔥",
  "mobile-welding-services": "📱",
  "custom-steel-fabrication": "⚙️",
  maintenance: "🔄",
};

export default function ServiceCard({ slug, title, short, href }) {
  const icon = icons[slug] || "🔩";

  return (
    <Link
      href={href}
      className="group relative block h-72 rounded-2xl overflow-hidden bg-slate-800"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,theme(colors.blue.800/20),transparent_60%)]" />

      {/* Subtle accent circles */}
      <div className="absolute -top-8 -right-8 w-32 h-32 border border-blue-500/10 rounded-full" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-blue-400/10 rounded-full" />

      <div className="relative h-full flex flex-col justify-end p-6">
        {/* Icon */}
        <div className="absolute top-5 left-5 w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-lg group-hover:scale-110 group-hover:bg-blue-500/25 transition-all duration-300">
          {icon}
        </div>

        {/* Title - always visible at bottom */}
        <h3 className="text-lg font-bold text-white leading-snug mb-1">
          {title}
        </h3>

        {/* Description always visible */}
        <div>
          <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-white/10 line-clamp-3">
            {short}
          </p>
          <div className="flex items-center gap-1 text-xs font-semibold text-blue-400 mt-3">
            Learn more <ArrowUpRight size={13} />
          </div>
        </div>
      </div>
    </Link>
  );
}
