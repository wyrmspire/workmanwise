'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { ResourceArticle } from '@/lib/articles';

interface ArticleCardProps {
  article: ResourceArticle;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      className="rounded-lg border border-border bg-card-bg p-6"
      whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-xl font-bold text-text-primary leading-tight">
        {article.title}
      </h3>
      <p className="mt-3 text-sm text-text-secondary">{article.snippet}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-mono text-text-secondary">
          {article.category}
        </span>
        <span className="inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-mono text-text-secondary">
          {article.published}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        className="mt-4 text-xs font-mono text-accent hover:text-accent-hover transition-colors"
      >
        {expanded ? '- Less' : '+ Read more'}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 border-t border-border pt-4 space-y-3">
              {article.content.map((paragraph) => (
                <p key={paragraph} className="text-sm text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
