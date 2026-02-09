'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function GapFillAnimation() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <svg
        viewBox="0 0 1000 180"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Labels */}
        <text x="90" y="40" className="fill-text-primary text-sm font-mono" textAnchor="middle">
          CAD
        </text>
        <text x="340" y="40" className="fill-text-primary text-sm font-mono" textAnchor="middle">
          CAM
        </text>
        <text x="590" y="40" className="fill-text-primary text-sm font-mono" textAnchor="middle">
          Post
        </text>
        <text x="840" y="40" className="fill-text-primary text-sm font-mono" textAnchor="middle">
          Machine
        </text>

        {/* Boxes */}
        <rect x="40" y="60" width="100" height="80" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
        <rect x="290" y="60" width="100" height="80" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
        <rect x="540" y="60" width="100" height="80" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
        <rect x="790" y="60" width="100" height="80" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" rx="4" />

        {/* Gap lines (dashed) */}
        <motion.line
          x1="140"
          y1="100"
          x2="290"
          y2="100"
          stroke="var(--color-border)"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { pathLength: 1, opacity: 0.4 } : {}}
          transition={{ duration: 0.5 }}
        />
        <motion.line
          x1="390"
          y1="100"
          x2="540"
          y2="100"
          stroke="var(--color-border)"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { pathLength: 1, opacity: 0.4 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.line
          x1="640"
          y1="100"
          x2="790"
          y2="100"
          stroke="var(--color-border)"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { pathLength: 1, opacity: 0.4 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        />

        {/* Filled gaps (AI solution) - deliberate mechanical drawing */}
        <motion.path
          d="M 140 100 L 290 100"
          stroke="var(--color-accent)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <motion.path
          d="M 390 100 L 540 100"
          stroke="var(--color-accent)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <motion.path
          d="M 640 100 L 790 100"
          stroke="var(--color-accent)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, delay: 2.0, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* "Flow" label fades in at the end */}
        <motion.text
          x="500"
          y="165"
          className="fill-accent text-xs font-mono uppercase tracking-wider"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={animate ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 3.4 }}
        >
          Flow Intelligence
        </motion.text>
      </svg>
    </div>
  );
}
