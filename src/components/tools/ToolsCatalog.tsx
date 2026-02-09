'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/ui/ProductCard';
import {
  productFamilies,
  products,
  roleOptions,
  toolTypes,
  type Role,
  type ToolType,
} from '@/lib/products';

type ViewMode = 'family' | 'role' | 'type';
type RoleFilter = Role | 'All roles';
type TypeFilter = ToolType | 'All types';

const viewModes: Array<{ key: ViewMode; label: string }> = [
  { key: 'family', label: 'By Family' },
  { key: 'role', label: 'By Role' },
  { key: 'type', label: 'By Type' },
];

const typeLabels: Record<ToolType, string> = {
  background: 'Always watching',
  active: 'Hands-on',
  service: 'With our team',
};

export function ToolsCatalog() {
  const [viewMode, setViewMode] = useState<ViewMode>('family');
  const [selectedRole, setSelectedRole] = useState<RoleFilter>('All roles');
  const [selectedType, setSelectedType] = useState<TypeFilter>('All types');

  const familyIndex = useMemo(() => {
    return new Map(productFamilies.map((family, index) => [family.slug, index]));
  }, []);

  const familyNameBySlug = useMemo(() => {
    return new Map(productFamilies.map((family) => [family.slug, family.name]));
  }, []);

  const roleFilteredProducts = useMemo(() => {
    const filtered =
      selectedRole === 'All roles'
        ? products
        : products.filter((product) => product.roles.includes(selectedRole));

    return [...filtered].sort((a, b) => {
      const familyDiff =
        (familyIndex.get(a.familySlug) ?? 0) - (familyIndex.get(b.familySlug) ?? 0);
      return familyDiff !== 0 ? familyDiff : a.name.localeCompare(b.name);
    });
  }, [selectedRole, familyIndex]);

  const typeFilteredProducts = useMemo(() => {
    const filtered =
      selectedType === 'All types'
        ? products
        : products.filter((product) => product.type === selectedType);

    return [...filtered].sort((a, b) => {
      const familyDiff =
        (familyIndex.get(a.familySlug) ?? 0) - (familyIndex.get(b.familySlug) ?? 0);
      return familyDiff !== 0 ? familyDiff : a.name.localeCompare(b.name);
    });
  }, [selectedType, familyIndex]);

  return (
    <section className="py-24 bg-bg">
      <Container>
        <SectionHeading
          headline="Focused tools for real work."
          subtext="Browse 9 families, 37 tools, and services built to keep decisions moving."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {viewModes.map((mode) => {
            const isActive = viewMode === mode.key;

            return (
              <button
                key={mode.key}
                type="button"
                onClick={() => setViewMode(mode.key)}
                className={`
                  rounded-md border px-4 py-2 text-sm font-mono transition-colors
                  ${
                    isActive
                      ? 'border-accent bg-accent/10 text-accent'
                      : 'border-border text-text-secondary hover:text-text-primary'
                  }
                `}
              >
                {mode.label}
              </button>
            );
          })}
        </div>

        {viewMode === 'family' && (
          <div className="space-y-16">
            {productFamilies.map((family, familyIndexValue) => {
              const familyProducts = products.filter(
                (product) => product.familySlug === family.slug,
              );

              return (
                <section key={family.slug} id={family.slug} className="scroll-mt-24">
                  <AnimateOnScroll delay={familyIndexValue * 0.05} animation="fade-up">
                    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-wide text-accent mb-2">
                          {familyProducts.length} tools
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                          {family.name}
                        </h2>
                        <p className="mt-2 text-text-secondary max-w-2xl">
                          {family.purpose}
                        </p>
                      </div>

                      <Link
                        href={`/tools/${family.slug}`}
                        className="text-sm font-mono text-accent hover:text-accent-hover transition-colors"
                      >
                        Open family page
                      </Link>
                    </div>
                  </AnimateOnScroll>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {familyProducts.map((product, index) => (
                      <AnimateOnScroll
                        key={product.id}
                        delay={index * 0.05}
                        animation="fade-up"
                      >
                        <ProductCard product={product} />
                      </AnimateOnScroll>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {viewMode === 'role' && (
          <>
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              {(['All roles', ...roleOptions] as RoleFilter[]).map((role) => {
                const isActive = selectedRole === role;

                return (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setSelectedRole(role)}
                    className={`
                      rounded-md border px-3 py-1.5 text-xs font-mono transition-colors
                      ${
                        isActive
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-border text-text-secondary hover:text-text-primary'
                      }
                    `}
                  >
                    {role}
                  </button>
                );
              })}
            </div>

            <p className="mb-6 text-center text-sm text-text-secondary">
              {roleFilteredProducts.length} tools match this role filter.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {roleFilteredProducts.map((product, index) => (
                <AnimateOnScroll key={product.id} delay={index * 0.04} animation="fade-up">
                  <div className="space-y-2">
                    <Link
                      href={`/tools/${product.familySlug}`}
                      className="inline-block text-xs font-mono uppercase tracking-wide text-accent hover:text-accent-hover transition-colors"
                    >
                      {familyNameBySlug.get(product.familySlug)}
                    </Link>
                    <ProductCard product={product} />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </>
        )}

        {viewMode === 'type' && (
          <>
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              {(['All types', ...toolTypes] as TypeFilter[]).map((type) => {
                const isActive = selectedType === type;
                const label = type === 'All types' ? type : typeLabels[type];

                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`
                      rounded-md border px-3 py-1.5 text-xs font-mono transition-colors
                      ${
                        isActive
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-border text-text-secondary hover:text-text-primary'
                      }
                    `}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <p className="mb-6 text-center text-sm text-text-secondary">
              {typeFilteredProducts.length} tools match this type filter.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {typeFilteredProducts.map((product, index) => (
                <AnimateOnScroll key={product.id} delay={index * 0.04} animation="fade-up">
                  <div className="space-y-2">
                    <Link
                      href={`/tools/${product.familySlug}`}
                      className="inline-block text-xs font-mono uppercase tracking-wide text-accent hover:text-accent-hover transition-colors"
                    >
                      {familyNameBySlug.get(product.familySlug)}
                    </Link>
                    <ProductCard product={product} />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
