import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export default function NotFound() {
  return (
    <section className="py-28 bg-bg">
      <Container className="text-center">
        <p className="text-xs font-mono uppercase tracking-wide text-accent mb-3">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
          This page is not in the workflow.
        </h1>
        <p className="mt-4 text-text-secondary">
          Return to the main flow and continue from there.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-accent px-5 py-3 text-sm font-medium text-bg hover:bg-accent-hover transition-colors"
        >
          Go to homepage
        </Link>
      </Container>
    </section>
  );
}
