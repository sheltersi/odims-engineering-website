"use client";

import Button from "./Button";

export default function ServiceCard({ title, short, href }) {
  return (
    <div className="card flex flex-col justify-between bg-amber-400">
      <div className="">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-slate-600 mb-4">{short}</p>
      </div>
      {href && (
        <Button href={href} variant="outline" className="mt-auto">
          Learn more
        </Button>
      )}
    </div>
  );
}
