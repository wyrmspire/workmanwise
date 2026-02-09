'use client';

import { Card } from '@/components/ui/Card';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <Card
      title={product.name}
      description={product.statement}
      type={product.type}
      roles={product.roles}
      leanInspired={product.leanInspired}
      className={className}
      expandedContent={
        <>
          <p className="text-sm text-text-primary mb-3">{product.outcome}</p>
          <p className="text-sm text-text-secondary mb-2">
            <strong>Trigger:</strong> {product.trigger}
          </p>
          <p className="text-sm text-text-secondary mb-2">
            <strong>Output:</strong> {product.output}
          </p>
          {product.gateway && (
            <p className="text-sm text-accent mb-2">
              <strong>Free gateway tool.</strong>
            </p>
          )}
          <p className="text-sm text-text-secondary">{product.technical}</p>
        </>
      }
    />
  );
}
