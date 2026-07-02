import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { resourceLinks } from "@/config/navigation";

const iconPaths: Record<string, React.ReactNode> = {
  Documentation: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
    />
  ),
  Changelog: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5"
    />
  ),
  GitHub: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
    />
  ),
};

export function Resources() {
  return (
    <section className="bg-neutral-50 py-20">
      <Container>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            LFX Resources
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Learn more about LFX and stay up to date with the latest developments.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {resourceLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card hover className="h-full text-center transition-colors group-hover:border-brand-200">
                <div className="mx-auto mb-4 inline-flex rounded-lg bg-brand-50 p-3 text-brand-500">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    {iconPaths[link.label]}
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-neutral-900 group-hover:text-brand-500 transition-colors">
                  {link.label}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{link.description}</p>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
