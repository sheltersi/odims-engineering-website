import { Quote } from "lucide-react";

export default function TestimonialCard({ name, text, location }) {
  return (
    <div className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <Quote className="text-blue-200 w-8 h-8 mb-4" />

      <p className="text-sm text-slate-600 leading-relaxed mb-6">&ldquo;{text}&rdquo;</p>

      <div className="flex items-center gap-2 text-amber-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <div className="pt-4 border-t border-slate-100">
        <p className="text-sm font-bold text-slate-800">{name}</p>
        {location && <p className="text-xs text-slate-400 mt-0.5">{location}</p>}
      </div>
    </div>
  );
}
