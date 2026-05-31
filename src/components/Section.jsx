"use client";

export default function Section({ title, children, className = "" }) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        {title && (
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
              {title}
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
