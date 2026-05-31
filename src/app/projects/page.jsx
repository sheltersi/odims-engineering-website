"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { WhatsAppButton } from "@/components/WhatsAppButton";

const projects = [
  {
    url:"gate-fabrication",
    title: "Custom Sliding Gate Fabrication",
    images: [
      "/assets/projects/fabrication/gate-1.png",
      "/assets/projects/fabrication/work-1.png",
      "/assets/projects/fabrication/work-2.png",
    ],
    location: "Johannesburg",
    category: "Welding",
    description:
      "A fully welded steel sliding gate with a clean modern design and powder-coated finish.",
  },
  {
    url: "solar-gate-motor",
    title: "Solar Gate Motor Installation",
    images: [
      "/assets/projects/solar-gate-motor/work-1.png",
      "/assets/projects/solar-gate-motor/work-2.png",
    ],
    location: "Pretoria",
    category: "Gate Motor",
    description:
      "Installed a high-efficiency solar gate motor system for reliable off-grid gate automation.",
  },
  {
    url: "electric-fence-installation",
    title: "Electric Fence Installation",
    images: [
      "/assets/projects/fencing/work-1.png",
      "/assets/projects/fencing/work-2.png",
      "/assets/projects/fencing/work-3.png",
      "/assets/projects/fencing/work-4.png",
    ],
    location: "Rustenburg",
    category: "Fencing",
    description:
      "Full perimeter electric fencing installation for improved residential security.",
  },
  {
    url: "burglar-proofing",
    title: "Burglar Proofing & Security Bars",
    images: [
      "/assets/projects/burglar/work-1.png",
      "/assets/projects/burglar/work-2.png",
    ],
    location: "Soweto",
    category: "Welding",
    description:
      "Custom burglar bars and security gates delivered with strong, durable steel work.",
  },
  {
    url: "gate-motor-repair",
    title: "Gate Motor Repair & Setup",
    images: [
      "/assets/projects/gate-motor/work-1.png",
      "/assets/projects/gate-motor/work-2.png",
      "/assets/projects/gate-motor/work-3.png",
    ],
    location: "Midrand",
    category: "Gate Motor",
    description:
      "Repaired and reprogrammed an electric sliding gate motor for optimal performance.",
  },
  {
    url: "steel-carport-welding",
    title: "Steel Carport Welding",
    images: [
      "/assets/projects/carport/work-1.png",
      "/assets/projects/carport/work-2.png",
      "/assets/projects/carport/work-3.png",
      "/assets/projects/carport/work-4.png",
    ],
    location: "Nelspruit",
    category: "Welding",
    description:
      "A durable steel carport structure welded and installed for long-lasting protection.",
  },
];

const filters = ["All", "Welding", "Gate Motor", "Fencing", "Security"];

const CATEGORY_STYLES = {
  Welding:     { bg: "bg-blue-50",   text: "text-blue-700",   dot: "bg-blue-500" },
  "Gate Motor":{ bg: "bg-sky-50",    text: "text-sky-700",    dot: "bg-sky-500"  },
  Fencing:     { bg: "bg-slate-100", text: "text-slate-600",  dot: "bg-slate-400"},
  Security:    { bg: "bg-indigo-50", text: "text-indigo-700", dot: "bg-indigo-500"},
};

const stats = [
  { value: "340+", label: "Projects Done" },
  { value: "12yr", label: "In the Trade" },
  { value: "6",    label: "Provinces" },
  { value: "98%",  label: "Satisfaction" },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  const [active, setActive]           = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100">

        {/* geometric accent blobs */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full bg-blue-50 opacity-70" />
        <div className="pointer-events-none absolute top-24 right-40 w-32 h-32 rounded-full bg-sky-100 opacity-60" />
        <div className="pointer-events-none absolute -bottom-10 left-1/3 w-56 h-56 rounded-full bg-slate-50" />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">

          {/* left copy */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-600 uppercase mb-5">
              <span className="w-6 h-px bg-blue-500 inline-block" />
              Our Portfolio
            </span>

            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Real Work.<br />
              <span className="text-blue-600">Real Results.</span>
            </h1>

            <p className="mt-5 max-w-md text-slate-500 text-base leading-relaxed">
              A showcase of our installations, repairs, and custom welding — built
              to last across Gauteng and beyond.
            </p>
          </div>

          {/* stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden shrink-0">
            {stats.map((s) => (
              <div key={s.label} className="bg-white px-6 py-5 flex flex-col items-center text-center">
                <span className="text-2xl font-black text-blue-600 tracking-tight">{s.value}</span>
                <span className="mt-0.5 text-[11px] font-semibold uppercase tracking-widest text-slate-400">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mr-2 whitespace-nowrap">
            Filter
          </span>
          {filters.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setVisibleCount(6); }}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200
                ${active === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        {filtered.length === 0 ? (
          <EmptyState category={active} />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.slice(0, visibleCount).map((project, idx) => (
                <ProjectCard
                  key={`${project.title}-${idx}`}
                  project={project}
                  onImageClick={setSelectedImage}
                />
              ))}
            </div>

            {visibleCount < filtered.length && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setVisibleCount((c) => c + 6)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white text-sm font-bold rounded-full shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all duration-200"
                >
                  Load More Projects
                  <ArrowUpRight size={16} />
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* ── LIGHTBOX ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-xl hover:bg-slate-50 transition"
            >
              <X size={20} className="text-slate-700" />
            </button>
            <img
              src={selectedImage}
              alt="Project preview"
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────

function ProjectCard({ project, onImageClick }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const total = project.images.length;
  const catStyle = CATEGORY_STYLES[project.category] ?? CATEGORY_STYLES["Welding"];

  // auto-slide only while not hovered
  useEffect(() => {
    if (hovered || total <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % total), 3500);
    return () => clearInterval(t);
  }, [hovered, total]);

  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + total) % total);
  };
  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % total);
  };

  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1 transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── image carousel ── */}
      <div className="relative h-52 overflow-hidden bg-slate-100">

        <img
          src={project.images[index]}
          alt={project.title}
          className="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 group-hover:scale-[1.04]"
          onClick={() => onImageClick(project.images[index])}
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

        {/* category badge */}
        <span className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${catStyle.bg} ${catStyle.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${catStyle.dot}`} />
          {project.category}
        </span>

        {/* image counter */}
        {total > 1 && (
          <span className="absolute top-3 right-3 text-[11px] font-semibold bg-black/40 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
            {index + 1} / {total}
          </span>
        )}

        {/* nav arrows — visible on hover */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-1.5 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-1.5 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* dot indicators */}
        {total > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  i === index ? "bg-white w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── card body ── */}
      <div className="p-5">

        {/* location */}
        <div className="flex items-center gap-1 text-xs text-slate-400 font-medium mb-2">
          <MapPin size={11} />
          {project.location}
        </div>

        <h3 className="text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-blue-700 transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* footer row */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <WhatsAppButton />
          <Link href={`/projects/${project.url}`} className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
            View details <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
}

// ─── EMPTY STATE ──────────────────────────────────────────────────────────────

function EmptyState({ category }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
        <span className="text-2xl">🔧</span>
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">
        No projects in &ldquo;{category}&rdquo; yet
      </h3>
      <p className="text-sm text-slate-400 max-w-xs">
        We&apos;re updating this portfolio regularly — check back soon or browse another category.
      </p>
    </div>
  );
}