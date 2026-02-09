'use client';

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from './Badge';

export interface CardProps {
  title: string;
  description: string;
  type?: 'background' | 'active' | 'service';
  roles?: string[];
  leanInspired?: boolean;
  expandedContent?: ReactNode;
  className?: string;
}

export function Card({
  title,
  description,
  type = 'active',
  roles = [],
  leanInspired = false,
  expandedContent,
  className = '',
}: CardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={`
        bg-card-bg border border-border rounded-lg p-6
        transition-colors duration-400
        ${expandedContent ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={() => expandedContent && setExpanded(!expanded)}
      whileHover={expandedContent ? { y: -2, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' } : {}}
      transition={{ duration: 0.2 }}
    >
      {/* Collapsed content — always visible */}
      <h3 className="text-lg font-bold text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-sm text-text-secondary mb-4">
        {description}
      </p>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-3">
        <Badge variant={type} />
        {leanInspired && <Badge variant="lean" />}
        {roles.map((role) => (
          <Badge key={role} variant="role" label={role} />
        ))}
      </div>

      {/* Expand trigger */}
      {expandedContent && (
        <button
          className="text-xs text-accent hover:text-accent-hover font-mono transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
        >
          {expanded ? '— Less' : '+ How this works'}
        </button>
      )}

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && expandedContent && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-border">
              {expandedContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
