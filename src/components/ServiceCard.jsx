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
      className="group relative block h-72 rounded-2xl overflow-hidden bg-white border border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-200/40 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:h-1.5 transition-all duration-300" />

      {/* Subtle background pattern */}
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-50 rounded-full" />

      <div className="relative h-full flex flex-col justify-end p-6">
        {/* Icon */}
        <div className="absolute top-5 left-5 w-11 h-11 flex items-center justify-center text-2xl group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 leading-snug mb-1">
          {title}
        </h3>

        {/* Description */}
        <div>
          <p className="text-sm text-slate-500 leading-relaxed pt-2 border-t border-slate-100 line-clamp-3">
            {short}
          </p>
          <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 mt-3">
            Learn more <ArrowUpRight size={13} />
          </div>
        </div>
      </div>
    </Link>
  );
}
