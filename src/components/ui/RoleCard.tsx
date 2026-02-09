'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RoleCardProps {
  role: string;
  pain: string;
  outcome: string;
  expandedContent?: string;
  className?: string;
}

export function RoleCard({
  role,
  pain,
  outcome,
  expandedContent,
  className = '',
}: RoleCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={`
        bg-card-bg border border-border rounded-lg p-6
        cursor-pointer
        ${className}
      `}
      onClick={() => setExpanded(!expanded)}
      whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Role label */}
      <span className="text-xs font-mono text-accent uppercase tracking-wider">
        {role}
      </span>

      {/* Pain point */}
      <p className="text-text-secondary text-sm mt-3 italic">
        &ldquo;{pain}&rdquo;
      </p>

      {/* Outcome */}
      <p className="text-text-primary text-sm font-medium mt-3">
        {outcome}
      </p>

      {/* Expanded depth */}
      <AnimatePresence>
        {expanded && expandedContent && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-text-secondary text-xs mt-4 pt-4 border-t border-border">
              {expandedContent}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
