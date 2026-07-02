import { Container } from "@/components/ui/Container";

export function CtaBanner() {
  return (
    <section className="bg-brand-600 py-16">
      <Container className="text-center">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Create Your Free LFX Account Today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-200">
          Join thousands of open source contributors and organizations already using LFX to build and sustain their projects.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://sso.linuxfoundation.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-semibold text-brand-600 shadow-md transition-all hover:bg-brand-50"
          >
            Sign up free
          </a>
          <a
            href="https://sso.linuxfoundation.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-white/25 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            Log in
          </a>
        </div>
      </Container>
    </section>
  );
}
