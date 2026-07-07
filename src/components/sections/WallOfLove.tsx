// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

import { Container } from "@/components/ui/Container";
import { testimonials } from "@/config/testimonials";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="rounded-xl border border-brand-100 bg-white p-5 break-inside-avoid mb-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-500">
          {getInitials(testimonial.name)}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-neutral-900 truncate">
            {testimonial.name}
          </div>
          <div className="text-xs text-neutral-500 truncate">
            {testimonial.role}
          </div>
        </div>
      </div>

      {/* Quote */}
      <p className="mt-4 text-sm leading-relaxed text-neutral-600">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </div>
  );
}

export function WallOfLove() {
  // Split into 3 columns for the masonry layout
  const col1 = testimonials.filter((_, i) => i % 3 === 0);
  const col2 = testimonials.filter((_, i) => i % 3 === 1);
  const col3 = testimonials.filter((_, i) => i % 3 === 2);

  return (
    <section className="bg-brand-50 py-20">
      <Container>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Community Feedback on LFX
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Hear from the people building and sustaining open source with LFX.
          </p>
        </div>

        {/* Masonry grid — 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {/* Reordered so items read left-to-right by row once CSS columns
              lay them out top-to-bottom */}
          {[col1, col2, col3].flat().map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
