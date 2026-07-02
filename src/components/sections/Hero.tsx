import { Container } from "@/components/ui/Container";
import { coreTool, supportingTools } from "@/config/tools";

const iconPaths: Record<string, React.ReactNode> = {
  "chart-bar": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
    />
  ),
  "document-check": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9.375-9ZM10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
    />
  ),
  "academic-cap": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
    />
  ),
  "currency-dollar": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  ),
  "building-office": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
    />
  ),
  user: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    />
  ),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pb-24 pt-20 sm:pt-28">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-100/40 blur-3xl" />
        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-brand-50/60 blur-3xl" />
      </div>

      <Container className="relative">
        {/* Headline */}
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            The Linux Foundation&apos;s Tool Suite
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              to Build Open Source Ecosystems
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            LFX provides the tools open source projects need to thrive — from analytics
            and mentorship to CLA management and crowdfunding. Trusted by the world&apos;s
            most critical open source communities.
          </p>
        </div>

        {/* Core tool — LFX App featured card */}
        <div className="mt-14">
          <div className="relative rounded-2xl border border-brand-200 bg-gradient-to-br from-white to-brand-50/50 p-8 shadow-sm sm:p-10">
            {/* Subtle accent line at top */}
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600" />

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="shrink-0 inline-flex rounded-2xl bg-brand-500 p-4 text-white shadow-md shadow-brand-500/25 self-start">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  {iconPaths[coreTool.icon]}
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-heading text-2xl font-bold text-neutral-900">
                  {coreTool.name}
                </h2>
                <p className="mt-1 text-neutral-600">
                  {coreTool.description}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <a
                  href="https://sso.linuxfoundation.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-6 py-2.5 text-sm font-medium text-neutral-700 shadow-xs transition-all hover:border-brand-200 hover:text-brand-500"
                >
                  Log in
                </a>
                <a
                  href="https://sso.linuxfoundation.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-brand-500/25 transition-all hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/30"
                >
                  Sign up free
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting tools */}
        <div className="mt-6">
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {supportingTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl border border-neutral-100 bg-white p-5 shadow-xs transition-all hover:border-brand-200 hover:shadow-sm"
              >
                <div className="mb-3 inline-flex rounded-lg bg-brand-50 p-2.5 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    {iconPaths[tool.icon]}
                  </svg>
                </div>
                <h3 className="font-heading text-base font-semibold text-neutral-900 group-hover:text-brand-500 transition-colors">
                  {tool.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-500 line-clamp-2">
                  {tool.description}
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-500 opacity-0 transition-opacity group-hover:opacity-100">
                  Open {tool.name}
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
        {/* Logo bar */}
        <div className="mt-16 border-t border-neutral-100 pt-10">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Powering the world&apos;s most critical open source projects
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale">
            {logos.map((logo) => (
              <div key={logo.name} className="flex items-center gap-2 transition hover:opacity-80">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

const logos = [
  { name: "Kubernetes", src: "/images/logos/kubernetes.svg" },
  { name: "CNCF", src: "/images/logos/cncf.svg" },
  { name: "OpenJS Foundation", src: "/images/logos/openjs.svg" },
  { name: "Prometheus", src: "/images/logos/prometheus.svg" },
  { name: "Envoy", src: "/images/logos/envoy.svg" },
  { name: "Helm", src: "/images/logos/helm.svg" },
];
