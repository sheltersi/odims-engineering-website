"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  Share2,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { WhatsAppButton } from "@/components/WhatsAppButton";

// ─── PROJECT DATA ─────────────────────────────────────────────────────────────
// In a real app this would be fetched by slug/id from a shared data file or API.

const project = {
  title: "Custom Sliding Gate Fabrication",
  subtitle: "Heavy-duty steel sliding gate with powder-coated finish",
  location: "Johannesburg, Gauteng",
  category: "Welding",
  completedDate: "March 2024",
  duration: "3 days",
  images: [
    "/assets/projects/fabrication/gate-1.png",
    "/assets/projects/fabrication/work-1.png",
    "/assets/projects/fabrication/work-2.png",
  ],
  description: `This project involved the full design, fabrication, and installation of a custom steel
sliding gate for a residential property in Johannesburg. The client needed a gate that
was both visually striking and built to handle high daily usage.

We used 50×50mm square tubing for the frame with 25mm flat bar infill, all MIG-welded
and ground flush for a clean professional finish. The gate was then powder-coated in
matte black for long-lasting corrosion resistance.

The sliding mechanism runs on a heavy-duty floor track with nylon guide rollers,
ensuring smooth, quiet operation for years to come.`,
  highlights: [
    "50×50mm square steel tubing frame",
    "MIG-welded & ground flush finish",
    "Matte black powder-coat coating",
    "Heavy-duty floor track & nylon rollers",
    "Compatible with standard gate motors",
    "Custom width: 4.2 metres",
  ],
  specs: [
    { label: "Material",    value: "Mild Steel" },
    { label: "Width",       value: "4.2 m" },
    { label: "Height",      value: "1.8 m" },
    { label: "Finish",      value: "Powder Coat — Matte Black" },
    { label: "Weld Type",   value: "MIG" },
    { label: "Motor Ready", value: "Yes" },
    { label: "Warranty",    value: "2 Years" },
  ],
  relatedProjects: [
    {
      url:"burglar-proofing",
      title: "Burglar Proofing & Security Bars",
      location: "Soweto",
      category: "Welding",
      image: "/assets/projects/burglar/work-1.png",
      slug: "burglar-proofing-security-bars",
    },
    {
      url:"steel-carport-welding",
      title: "Steel Carport Welding Project",
      location: "Nelspruit",
      category: "Welding",
      image: "/assets/projects/carport/work-1.png",
      slug: "steel-carport-welding",
    },
    {
      url:"gate-motor-repair",
      title: "Gate Motor Repair & Setup",
      location: "Midrand",
      category: "Gate Motor",
      image: "/assets/projects/gate-motor/work-1.png",
      slug: "gate-motor-repair-setup",
    },
  ],
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ProjectDetailPage() {
  const [activeImg, setActiveImg]       = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const total = project.images.length;

  const prev = () => setActiveImg((i) => (i - 1 + total) % total);
  const next = () => setActiveImg((i) => (i + 1) % total);

  // keyboard nav for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     setLightboxOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen]);

  return (
    <div className="min-h-screen bg-white">

      {/* ── BREADCRUMB NAV ── */}
      <div className="border-b border-slate-100 bg-white sticky top-0 z-40 backdrop-blur bg-white/90">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Projects
          </Link>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Projects</span>
            <span>/</span>
            <span className="text-slate-700 font-medium truncate max-w-[200px]">{project.title}</span>
          </div>

          <button className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors font-medium">
            <Share2 size={14} />
            Share
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* ── TWO-COLUMN LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 xl:gap-14">

          {/* ── LEFT: GALLERY + BODY ── */}
          <div>

            {/* MAIN IMAGE */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[16/9] group">
              <img
                src={project.images[activeImg]}
                alt={project.title}
                className="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 group-hover:scale-[1.02]"
                onClick={() => setLightboxOpen(true)}
              />

              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              {/* counter */}
              <span className="absolute top-4 right-4 text-xs font-semibold bg-black/40 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
                {activeImg + 1} / {total}
              </span>

              {/* expand hint */}
              <span className="absolute bottom-4 right-4 text-xs font-semibold bg-black/40 text-white px-2.5 py-1 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Click to expand
              </span>

              {/* arrows */}
              {total > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* THUMBNAIL STRIP */}
            {total > 1 && (
              <div className="flex gap-3 mt-3">
                {project.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative flex-1 aspect-video rounded-xl overflow-hidden border-2 transition-all duration-200
                      ${i === activeImg
                        ? "border-blue-500 shadow-md shadow-blue-100"
                        : "border-transparent opacity-60 hover:opacity-90"
                      }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* TITLE + META */}
            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <MapPin size={11} />
                  {project.location}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <Clock size={11} />
                  Completed {project.completedDate}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="mt-1 text-base text-slate-400 font-medium">{project.subtitle}</p>
            </div>

            {/* DIVIDER */}
            <div className="my-7 border-t border-slate-100" />

            {/* DESCRIPTION */}
            <div>
              <h2 className="text-base font-black uppercase tracking-widest text-slate-300 mb-4">
                About This Project
              </h2>
              {project.description.trim().split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed mb-4 text-[15px]">
                  {para.trim()}
                </p>
              ))}
            </div>

            {/* DIVIDER */}
            <div className="my-7 border-t border-slate-100" />

            {/* HIGHLIGHTS */}
            <div>
              <h2 className="text-base font-black uppercase tracking-widest text-slate-300 mb-5">
                What's Included
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle2 size={17} className="text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DIVIDER */}
            <div className="my-7 border-t border-slate-100" />

            {/* SPECS TABLE */}
            <div>
              <h2 className="text-base font-black uppercase tracking-widest text-slate-300 mb-5">
                Project Specifications
              </h2>
              <div className="rounded-2xl border border-slate-100 overflow-hidden">
                {project.specs.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex items-center justify-between px-5 py-3.5 text-sm
                      ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                      ${i !== project.specs.length - 1 ? "border-b border-slate-100" : ""}
                    `}
                  >
                    <span className="text-slate-400 font-medium">{s.label}</span>
                    <span className="text-slate-800 font-bold">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: STICKY SIDEBAR ── */}
          <div className="space-y-5">
            <div className="lg:sticky lg:top-20 space-y-5">

              {/* QUICK FACTS CARD */}
              <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-blue-600 px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-1">Project Summary</p>
                  <p className="text-white font-black text-lg leading-snug">{project.title}</p>
                </div>
                <div className="divide-y divide-slate-100">
                  {[
                    { icon: <MapPin size={14} />,      label: "Location",  value: project.location },
                    { icon: <Wrench size={14} />,      label: "Category",  value: project.category },
                    { icon: <Clock size={14} />,       label: "Duration",  value: project.duration },
                    { icon: <ShieldCheck size={14} />, label: "Warranty",  value: "2 Years" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3 px-5 py-3.5">
                      <span className="text-blue-400 shrink-0">{row.icon}</span>
                      <span className="text-xs text-slate-400 font-medium w-20 shrink-0">{row.label}</span>
                      <span className="text-sm text-slate-800 font-semibold">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA CARD */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3">
                <p className="text-sm font-black text-slate-800">Want something like this?</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Get in touch for a free quote. We'll assess your site and recommend the best solution.
                </p>

                <WhatsAppButton className="w-full" />

                <a
                  href="tel:+27000000000"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-all"
                >
                  <Phone size={14} />
                  Call Us Directly
                </a>
              </div>

              {/* TRUST BADGES */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: "🏅", label: "Quality Assured" },
                  { icon: "⚡", label: "Fast Turnaround" },
                  { icon: "📍", label: "Local Team" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="flex flex-col items-center text-center gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <span className="text-xl">{b.icon}</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide leading-tight">
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ── RELATED PROJECTS ── */}
        <div className="mt-16 pt-10 border-t border-slate-100">
          <div className="flex items-center justify-between mb-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-1">More Work</p>
              <h2 className="text-2xl font-black text-slate-900">Related Projects</h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
            >
              View all <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {project.relatedProjects.map((rp) => (
              <RelatedCard key={rp.slug} project={rp} />
            ))}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-xl hover:bg-slate-50 transition"
            >
              <X size={20} className="text-slate-700" />
            </button>

            <img
              src={project.images[activeImg]}
              alt={project.title}
              className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />

            {/* lightbox arrows */}
            {total > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-2.5 rounded-full shadow-lg"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-2.5 rounded-full shadow-lg"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}

            {/* lightbox dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === activeImg ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── RELATED CARD ─────────────────────────────────────────────────────────────

function RelatedCard({ project }) {
  const catColors = {
    Welding:      { bg: "bg-blue-50",   text: "text-blue-700",  dot: "bg-blue-500"  },
    "Gate Motor": { bg: "bg-sky-50",    text: "text-sky-700",   dot: "bg-sky-500"   },
    Fencing:      { bg: "bg-slate-100", text: "text-slate-600", dot: "bg-slate-400" },
  };
  const style = catColors[project.category] ?? catColors["Welding"];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-44 overflow-hidden bg-slate-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <span className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${style.bg} ${style.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
          {project.category}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 text-xs text-slate-400 font-medium mb-1.5">
          <MapPin size={10} />
          {project.location}
        </div>
        <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
          {project.title}
        </h3>
         <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
            View details <ArrowUpRight size={13} />
         </span>
       </div>

    </Link>
  );
}