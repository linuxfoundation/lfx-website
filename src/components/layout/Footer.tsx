import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-900 text-neutral-300">
      <Container className="py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <div className="font-heading text-lg font-bold text-white">LFX</div>
            <p className="mt-1 text-sm text-neutral-400">
              The Linux Foundation&apos;s tool suite to build open source ecosystems
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a
              href="https://www.linuxfoundation.org/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.linuxfoundation.org/legal/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </a>
            <a
              href="https://www.linuxfoundation.org/legal/trademark-usage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Trademark Usage
            </a>
            <a
              href="https://www.linuxfoundation.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Linux Foundation
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-neutral-700 pt-6 text-center text-xs text-neutral-500">
          Copyright &copy; {new Date().getFullYear()} The Linux Foundation. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
