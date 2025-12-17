"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Custom Sliding Gate Fabrication",
    images: ["/assets/projects/fabrication/gate-1.png","/assets/projects/fabrication/work-1.png","/assets/projects/fabrication/work-2.png"],
    location: "Johannesburg",
    category: "Welding",
    description:
      "A fully welded steel sliding gate with a clean modern design and powder-coated finish.",
  },
  {
    title: "Solar Gate Motor Installation",
    images: ["/assets/projects/solar-gate-motor/work-1.png","/assets/projects/solar-gate-motor/work-2.png"],
    location: "Pretoria",
    category: "Gate Motor",
    description:
      "Installed a high-efficiency solar gate motor system for reliable off-grid gate automation.",
  },
  {
    title: "Electric Fence Installation",
    images: ["/assets/projects/fencing/work-1.png","/assets/projects/fencing/work-2.png","/assets/projects/fencing/work-3.png","/assets/projects/fencing/work-4.png"],
    location: "Rustenburg",
    category: "Fencing",
    description:
      "Full perimeter electric fencing installation for improved residential security.",
  },
  {
    title: "Burglar Proofing & Security Bars",
    images: ["/assets/projects/burglar/work-1.png","/assets/projects/burglar/work-2.png"],
    location: "Soweto",
    category: "Welding",
    description:
      "Custom burglar bars and security gates delivered with strong, durable steel work.",
  },
  {
    title: "Gate Motor Repair & Setup",
    images: ["/assets/projects/gate-motor/work-1.png","/assets/projects/gate-motor/work-2.png","/assets/projects/gate-motor/work-3.png"],
    location: "Midrand",
    category: "Gate Motor",
    description:
      "Repaired and reprogrammed an electric sliding gate motor for optimal performance.",
  },
  {
    title: "Steel Carport Welding Project",
    images: ["/assets/projects/carport/work-1.png","/assets/projects/carport/work-2.png","/assets/projects/carport/work-3.png","/assets/projects/carport/work-4.png"],
    location: "Nelspruit",
    category: "Welding",
    description:
      "A durable steel carport structure welded and installed for long-lasting protection.",
  },
  
];

// categories
const filters = ["All", "Welding", "Gate Motor", "Fencing", "Security"];

// ---------------------------------
// COMPONENT
// ---------------------------------

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);

  // filter projects
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  const loadMore = () => setVisibleCount(prev => prev + 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-16 relative overflow-hidden">

      {/* SHAPES */}
      {/* <div className="absolute top-0 left-20 w-72 h-72 bg-blue-300/20 rounded-full"></div>
      <div className="absolute top-0 left-55 w-72 h-72 bg-blue-300/20 rounded-full"></div>
      <div className="absolute top-0 left-95 w-72 h-72 bg-blue-300/20 rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-400/10 rounded-full"></div> */}
<div className="absolute w-40 h-40 md:left-120 left-20 bg-blue-300/20 rotate-45"></div>
<div className="absolute w-40 h-40 md:left-160 left-55 bg-blue-300/20 rotate-45"></div>
<div className="absolute w-40 h-40 md:left-200 left-95 bg-blue-300/20 rotate-45"></div>

      <div className="max-w-7xl mx-auto relative z-10 ">

        {/* HEADER */}
        <div className="text-center mb-12 pb-12">
  <h1 className="text-4xl md:text-5xl font-bold font-mono text-blue-900">
    Our <span className="text-[#59A5D8]">Projects</span>
  </h1>

  <div className="max-w-2xl mx-auto">
    <p className="text-center text-[#6E7A85] mt-4 font-mono text-lg">
      A showcase of our recent installations, repairs, and custom welding work.
    </p>
  </div>
</div>


        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-semibold transition 
              ${
                active === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-blue-700 border-blue-300 hover:bg-blue-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FILTERED RESULT */}
{filtered.length === 0 ? (
  <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-blue-200">
  <p className="text-blue-900 text-xl font-bold">
    No projects found in “{active}” category
  </p>
  <p className="text-blue-600 mt-2">
    We are still updating this portfolio. Please check again soon.
  </p>
</div>

) : (
 <div className="masonry">
    {filtered.slice(0, visibleCount).map((project, idx) => (
      <ProjectCard
        key={idx}
        project={project}
        setSelectedImage={setSelectedImage}
      />
    ))}
  </div>
)}


        {/* MASONRY GRID */}
        {/* <div className="masonry">
          {filtered.slice(0, visibleCount).map((project, idx) => (
            <ProjectCard key={idx} project={project} setSelectedImage={setSelectedImage} />
          ))}
        </div> */}

        {/* LOAD MORE BUTTON */}
        {visibleCount < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={loadMore}
              className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        )}

        {/* LIGHTBOX */}
     {selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
    onClick={() => setSelectedImage(null)} // closes when clicking outside
  >
    {/* Prevent closing when clicking the image itself */}
    <div
      className="relative"
      onClick={(e) => e.stopPropagation()} // <-- IMPORTANT
    >
      {/* Close Button */}
      <button
        className="absolute top-3 md:top-5 md:right-6 right-2 bg-black/60 p-2 rounded-full text-white z-[10000] hover:bg-black/80"
        onClick={() => setSelectedImage(null)}
      >
        <X size={32} />
      </button>

      {/* Image */}
      <img
        src={selectedImage}
        className="max-h-[70vh] max-w-[90vw] rounded-xl shadow-2xl"
        alt="Preview"
      />
    </div>
  </div>
)}

      </div>
    </div>
  );
}

// ---------------------------------
// PROJECT CARD + CAROUSEL
// ---------------------------------

function ProjectCard({ project, setSelectedImage }) {
  const [index, setIndex] = useState(0);

  // auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [project.images.length]);

  const prev = () =>
    setIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  const next = () =>
    setIndex((prev) => (prev + 1) % project.images.length);

  return (
    <div className="mb-6 break-inside-avoid bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ">

      {/* CAROUSEL */}
      <div className="relative h-56 overflow-hidden group">

        {/* IMAGES */}
        <img
          src={project.images[index]}
          className="w-full h-full object-cover cursor-pointer transition"
          onClick={() => setSelectedImage(project.images[index])}
        />

        {/* ARROWS */}
        <button
          onClick={prev}
          className="hidden group-hover:flex absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={next}
          className="hidden group-hover:flex absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-sm text-blue-700">{project.location}</span>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mb-2">
          {project.title}
        </h3>

        <p className="text-blue-700 mb-4 leading-relaxed">
          {project.description}
        </p>

        <a href="#" className="text-blue-600 font-semibold hover:underline">
          View Details →
        </a>
      </div>
    </div>
  );
}

