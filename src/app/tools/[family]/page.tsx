import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';
import { Container } from '@/components/layout/Container';
import { ProductCard } from '@/components/ui/ProductCard';
import {
  getFamilyBySlug,
  getFamilySlugs,
  getProductsByFamily,
  type FamilySlug,
} from '@/lib/products';

interface FamilyPageProps {
  params: {
    family: string;
  };
}

export function generateStaticParams() {
  return getFamilySlugs().map((family) => ({ family }));
}

export function generateMetadata({ params }: FamilyPageProps): Metadata {
  const family = getFamilyBySlug(params.family);

  if (!family) {
    return {
      title: 'Tools | WorkmanWise',
    };
  }

  return {
    title: `${family.name} | WorkmanWise`,
    description: family.purpose,
  };
}

export default function FamilyPage({ params }: FamilyPageProps) {
  const family = getFamilyBySlug(params.family);

  if (!family) {
    notFound();
  }

  const familyProducts = getProductsByFamily(family.slug as FamilySlug);

  return (
    <section className="py-24 bg-bg">
      <Container>
        <Link
          href="/tools"
          className="inline-block text-sm font-mono text-accent hover:text-accent-hover transition-colors"
        >
          Back to all tools
        </Link>

        <div className="mt-6 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-wide text-accent mb-2">
            Product family
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            {family.name}
          </h1>
          <p className="mt-4 text-lg text-text-secondary">{family.purpose}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {familyProducts.map((product, index) => (
            <AnimateOnScroll key={product.id} delay={index * 0.05} animation="fade-up">
              <ProductCard product={product} />
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
