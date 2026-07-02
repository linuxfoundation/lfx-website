"use client";

import { useState, useRef, useEffect } from "react";
import { resourceLinks } from "@/config/navigation";

export function ResourcesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1 text-sm font-medium text-neutral-700 hover:text-brand-500 transition-colors"
      >
        Resources
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-64 rounded-lg border border-neutral-100 bg-white p-2 shadow-md">
          {resourceLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md px-3 py-2 hover:bg-neutral-50 transition-colors"
              onClick={() => setOpen(false)}
            >
              <div className="text-sm font-medium text-neutral-900">{link.label}</div>
              <div className="text-xs text-neutral-500">{link.description}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
