import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-32">
      <Container className="text-center">
        <h1 className="font-heading text-6xl font-bold text-neutral-900">404</h1>
        <p className="mt-4 text-lg text-neutral-600">
          This page doesn&apos;t exist. It may have been moved.
        </p>
        <div className="mt-8">
          <Button href="/" size="lg">
            Go to LFX Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
