import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { personas } from "@/config/personas";

const iconPaths: Record<string, React.ReactNode> = {
  "code-bracket": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
    />
  ),
  "rocket-launch": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
  ),
  "building-library": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
    />
  ),
};

export function PersonaBenefits() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Built for Everyone in Open Source
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Whether you&apos;re contributing code, leading a project, or managing an OSPO — LFX has the tools you need.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {personas.map((persona) => (
            <Card key={persona.title} className="flex flex-col">
              <div className="mb-4 inline-flex rounded-lg bg-brand-50 p-3 text-brand-500 self-start">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  {iconPaths[persona.icon]}
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-neutral-900">
                {persona.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{persona.description}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {persona.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-neutral-700">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-positive-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
