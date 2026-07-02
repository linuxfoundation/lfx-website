"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { toolDetails } from "@/config/tool-details";

const INTERVAL = 5000;

export function WhatIsLfx() {
  const [openIndex, setOpenIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef(Date.now());
  const activeTool = toolDetails[openIndex] ?? toolDetails[0];

  const resetTimer = useCallback(() => {
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const goToNext = useCallback(() => {
    setOpenIndex((prev) => (prev + 1) % toolDetails.length);
    resetTimer();
  }, [resetTimer]);

  const handleClick = useCallback(
    (index: number) => {
      setOpenIndex(index);
      resetTimer();
    },
    [resetTimer]
  );

  // Progress animation + auto-advance
  useEffect(() => {
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / INTERVAL) * 100, 100);
      setProgress(pct);

      if (elapsed >= INTERVAL) {
        goToNext();
      }
    }, 30);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [openIndex, goToNext]);

  return (
    <section className="bg-neutral-50 py-20">
      <Container>
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            What is LFX?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            LFX is the Linux Foundation&apos;s integrated platform for open source
            project management. It brings together the tools communities need to
            operate, grow, and sustain their projects — from contributor analytics
            and compliance management to mentorship programs and crowdfunding. Used
            by thousands of projects including Kubernetes, Linux Kernel, and Node.js.
          </p>
        </div>

        {/* Accordion + Screenshot layout */}
        <div className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Left: Accordion */}
          <div className="lg:w-1/2 space-y-2">
            {toolDetails.map((tool, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={tool.name}
                  className={`relative rounded-xl border overflow-hidden transition-all ${
                    isOpen
                      ? "border-brand-200 bg-white shadow-sm"
                      : "border-neutral-100 bg-white hover:border-neutral-200"
                  }`}
                >
                  {/* Progress bar */}
                  {isOpen && (
                    <div className="absolute top-0 left-0 h-0.5 bg-brand-500 transition-none" style={{ width: `${progress}%` }} />
                  )}

                  {/* Trigger */}
                  <button
                    onClick={() => handleClick(index)}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left"
                  >
                    <div
                      className={`shrink-0 rounded-lg p-2 transition-colors ${
                        isOpen
                          ? "bg-brand-500 text-white"
                          : "bg-neutral-50 text-neutral-400"
                      }`}
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        {iconForTool(tool.name)}
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-heading text-base font-semibold ${isOpen ? "text-neutral-900" : "text-neutral-600"}`}>
                        {tool.name}
                      </h3>
                      {!isOpen && (
                        <p className="text-sm text-neutral-400">{tool.tagline}</p>
                      )}
                    </div>
                    <svg
                      className={`h-4 w-4 shrink-0 text-neutral-400 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-relaxed text-neutral-600">
                        {tool.description}
                      </p>

                      <ul className="mt-4 space-y-2">
                        {tool.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-neutral-700"
                          >
                            <svg
                              className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600"
                      >
                        Visit {tool.name}
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>

                      {/* Mobile-only screenshot */}
                      <div className="mt-5 lg:hidden">
                        <ToolScreenshot tool={activeTool} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Screenshot (desktop only, stays in place) */}
          <div className="hidden lg:block lg:w-1/2 lg:sticky lg:top-24">
            <ToolScreenshot tool={activeTool} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ToolScreenshot({ tool }: { tool: { name: string; screenshot: string } }) {
  const hasScreenshot = tool.screenshot && !tool.screenshot.includes("placeholder");

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      {hasScreenshot ? (
        <img
          src={tool.screenshot}
          alt={`${tool.name} screenshot`}
          className="w-full"
          loading="lazy"
        />
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-brand-50 to-neutral-50">
          <div className="text-center">
            <div className="mx-auto mb-3 inline-flex rounded-2xl bg-white p-5 shadow-sm">
              <svg className="h-10 w-10 text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                {iconForTool(tool.name)}
              </svg>
            </div>
            <p className="text-sm font-medium text-neutral-400">{tool.name}</p>
            <p className="mt-1 text-xs text-neutral-300">Screenshot coming soon</p>
          </div>
        </div>
      )}
    </div>
  );
}

function iconForTool(name: string): React.ReactNode {
  const icons: Record<string, React.ReactNode> = {
    "LFX": (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    ),
    Insights: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
      />
    ),
    EasyCLA: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9.375-9ZM10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
      />
    ),
    Mentorship: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    ),
    Crowdfunding: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  };
  return icons[name] || icons["LFX"];
}
