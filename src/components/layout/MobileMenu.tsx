"use client";

import { useState } from "react";
import { lfxTools } from "@/config/lfx-tools";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden flex items-center justify-center rounded-full p-2 text-neutral-500 hover:bg-neutral-50 transition-colors"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 top-14 z-40 overflow-y-auto bg-white lg:hidden">
          <nav className="px-4 py-6 space-y-6">
            {/* LFX Tools */}
            <div>
              <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                LFX Tools
              </h3>
              <div className="space-y-0.5">
                {lfxTools.map((tool) => (
                  <a
                    key={tool.link}
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 transition hover:bg-neutral-50"
                    onClick={() => setOpen(false)}
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-brand-50 text-brand-500">
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <rect width="20" height="20" rx="4" fillOpacity="0.3" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-900">{tool.name}</div>
                      <div className="text-xs text-neutral-500">{tool.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Docs & Changelog */}
            <div className="border-t border-neutral-100 pt-4 space-y-0.5">
              <a
                href="https://docs.linuxfoundation.org/lfx"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
                onClick={() => setOpen(false)}
              >
                Docs
              </a>
              <a
                href="https://changelog.lfx.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
                onClick={() => setOpen(false)}
              >
                Changelog
              </a>
            </div>

            {/* Login */}
            <div className="border-t border-neutral-100 pt-4">
              <a
                href="https://sso.linuxfoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-brand-500 transition hover:bg-brand-50"
                onClick={() => setOpen(false)}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                Log in
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
