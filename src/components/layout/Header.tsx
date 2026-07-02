import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ToolsDropdown } from "./ToolsDropdown";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="outline outline-1 outline-neutral-100 bg-white fixed top-0 left-0 z-40 w-full">
      <Container className="flex h-14 lg:h-[4.25rem] items-center justify-between gap-4 lg:gap-5">
        {/* Left: Tools dropdown + Logo */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Tools grid dropdown — desktop only */}
          <div className="hidden lg:block">
            <ToolsDropdown />
          </div>

          {/* Logo — LFX only */}
          <Link href="/" className="flex items-center">
            <svg
              width="82"
              height="21"
              viewBox="0 0 82 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5"
            >
              <path d="M3.98569 16.036V8.01831H0V20.0217H12.0034V16.036H3.98569Z" fill="#0094FF" />
              <path d="M19.9748 0H0V6.02488H3.98569V4.03203H15.9891V16.0354H13.9963V20.0211H19.9748V0Z" fill="#003778" />
              <path d="M24.0117 0H30.1756V14.8763H39.0739V20.0206H24.0117V0Z" fill="#003778" />
              <path d="M43.0117 0H58.5374V5.09744H49.222V7.60009H57.2397V12.3736H49.222V20.0206H43.0117V0Z" fill="#003778" />
              <path d="M67.664 9.36174L61.083 0H68.3128L71.3253 5.42239L74.2914 0H81.1041L74.7085 9.40808L81.8456 19.9748H74.4304L71.0472 14.0426L67.5249 20.0211H60.4805L67.664 9.36174Z" fill="#0094FF" />
            </svg>
          </Link>
        </div>

        {/* Right: Docs + Changelog + Login */}
        <div className="flex items-center gap-1 lg:gap-2">
          {/* Docs & Changelog — desktop only */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="https://docs.linuxfoundation.org/lfx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-neutral-500 transition-colors hover:bg-neutral-50 whitespace-nowrap"
            >
              Docs
            </a>
            <a
              href="https://changelog.lfx.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-neutral-500 transition-colors hover:bg-neutral-50 whitespace-nowrap"
            >
              Changelog
            </a>
          </nav>

          {/* Log in */}
          <a
            href="https://sso.linuxfoundation.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-brand-500 transition-colors hover:bg-neutral-50 whitespace-nowrap"
          >
            Log in
          </a>

          {/* Sign up */}
          <a
            href="https://sso.linuxfoundation.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600 whitespace-nowrap"
          >
            Sign up
          </a>

          {/* Mobile menu */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
