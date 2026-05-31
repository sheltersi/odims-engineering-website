"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ServiceCard({ title, short, href }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
        <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-blue-600" />
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
        {title}
      </h3>

      <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
        {short}
      </p>

      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors mt-auto"
        >
          Learn more <ArrowUpRight size={14} />
        </Link>
      )}
    </div>
  );
}
