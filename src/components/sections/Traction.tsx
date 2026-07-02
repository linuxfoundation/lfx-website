import { Container } from "@/components/ui/Container";
import { metrics, impactMetrics } from "@/config/metrics";

export function Traction() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            LFX Builds Sustainable Ecosystems for Open Source Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            LFX powers open source intelligence for thousands of projects across the global ecosystem.
          </p>
        </div>

        <div className="mt-12 grid gap-6 grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-neutral-100 bg-white p-6 text-center shadow-xs"
            >
              <div className="font-heading text-4xl font-bold text-brand-500">
                {metric.value}
              </div>
              <div className="mt-2 text-sm text-neutral-600">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-neutral-100 bg-white p-6 text-center shadow-xs"
            >
              <div className="font-heading text-4xl font-bold text-brand-500">
                {metric.value}
              </div>
              <div className="mt-2 text-sm text-neutral-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
