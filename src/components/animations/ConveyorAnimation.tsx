'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ConveyorAnimation() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto my-12">
      <svg
        viewBox="0 0 800 200"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Conveyor belt sections */}
        <g>
          {/* Section 1 */}
          <rect x="50" y="80" width="120" height="40" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
          <circle cx="70" cy="100" r="8" fill="var(--color-border)" />
          <circle cx="150" cy="100" r="8" fill="var(--color-border)" />

          {/* Gap 1 with missing rollers */}
          <motion.line
            x1="170"
            y1="100"
            x2="230"
            y2="100"
            stroke="var(--color-border)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={animate ? { pathLength: 1, opacity: 0.3 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          {/* Section 2 */}
          <rect x="230" y="80" width="120" height="40" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
          <circle cx="250" cy="100" r="8" fill="var(--color-border)" />
          <circle cx="330" cy="100" r="8" fill="var(--color-border)" />

          {/* Gap 2 */}
          <motion.line
            x1="350"
            y1="100"
            x2="410"
            y2="100"
            stroke="var(--color-border)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={animate ? { pathLength: 1, opacity: 0.3 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          />

          {/* Section 3 */}
          <rect x="410" y="80" width="120" height="40" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
          <circle cx="430" cy="100" r="8" fill="var(--color-border)" />
          <circle cx="510" cy="100" r="8" fill="var(--color-border)" />

          {/* Gap 3 */}
          <motion.line
            x1="530"
            y1="100"
            x2="590"
            y2="100"
            stroke="var(--color-border)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={animate ? { pathLength: 1, opacity: 0.3 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          />

          {/* Section 4 */}
          <rect x="590" y="80" width="120" height="40" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
          <circle cx="610" cy="100" r="8" fill="var(--color-border)" />
          <circle cx="690" cy="100" r="8" fill="var(--color-border)" />
        </g>

        {/* Falling items (decisions/documents) */}
        <motion.circle
          cx="200"
          cy="70"
          r="6"
          fill="var(--color-accent)"
          initial={{ y: -20, opacity: 0 }}
          animate={animate ? { y: 50, opacity: [0, 1, 0] } : {}}
          transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
        />
        <motion.circle
          cx="380"
          cy="70"
          r="6"
          fill="var(--color-accent)"
          initial={{ y: -20, opacity: 0 }}
          animate={animate ? { y: 50, opacity: [0, 1, 0] } : {}}
          transition={{ duration: 1, delay: 1.3, ease: 'easeIn' }}
        />
        <motion.circle
          cx="560"
          cy="70"
          r="6"
          fill="var(--color-accent)"
          initial={{ y: -20, opacity: 0 }}
          animate={animate ? { y: 50, opacity: [0, 1, 0] } : {}}
          transition={{ duration: 1, delay: 1.6, ease: 'easeIn' }}
        />

        {/* Filling gaps - solution */}
        <motion.line
          x1="170"
          y1="100"
          x2="230"
          y2="100"
          stroke="var(--color-accent)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay: 2.2 }}
        />
        <motion.line
          x1="350"
          y1="100"
          x2="410"
          y2="100"
          stroke="var(--color-accent)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay: 2.5 }}
        />
        <motion.line
          x1="530"
          y1="100"
          x2="590"
          y2="100"
          stroke="var(--color-accent)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay: 2.8 }}
        />
      </svg>
    </div>
  );
}
