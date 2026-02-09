'use client';

import { motion } from 'framer-motion';

export function DecisionCarryAnimation() {
  return (
    <div className="w-full max-w-3xl mx-auto my-12">
      <svg
        viewBox="0 0 800 300"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Human makes decision */}
        <g>
          <circle cx="100" cy="150" r="40" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
          <text x="100" y="155" className="fill-text-primary text-xs font-mono" textAnchor="middle">
            Person
          </text>
          <motion.circle
            cx="100"
            cy="150"
            r="50"
            stroke="var(--color-accent)"
            strokeWidth="2"
            fill="none"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </g>

        {/* Decision flows forward */}
        <motion.path
          d="M 140 150 L 250 150"
          stroke="var(--color-accent)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />

        {/* System carries it step 1 */}
        <g>
          <rect x="250" y="120" width="100" height="60" fill="var(--color-card-bg)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
          <text x="300" y="145" className="fill-text-secondary text-xs font-mono" textAnchor="middle">
            CAM
          </text>
          <text x="300" y="160" className="fill-accent text-xs font-mono" textAnchor="middle">
            Applied
          </text>
        </g>

        <motion.path
          d="M 350 150 L 450 150"
          stroke="var(--color-accent)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1, repeat: Infinity, ease: 'linear' }}
        />

        {/* System carries it step 2 */}
        <g>
          <rect x="450" y="120" width="100" height="60" fill="var(--color-card-bg)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
          <text x="500" y="145" className="fill-text-secondary text-xs font-mono" textAnchor="middle">
            Post
          </text>
          <text x="500" y="160" className="fill-accent text-xs font-mono" textAnchor="middle">
            Applied
          </text>
        </g>

        <motion.path
          d="M 550 150 L 650 150"
          stroke="var(--color-accent)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 2, repeat: Infinity, ease: 'linear' }}
        />

        {/* System carries it step 3 */}
        <g>
          <rect x="650" y="120" width="100" height="60" fill="var(--color-card-bg)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
          <text x="700" y="145" className="fill-text-secondary text-xs font-mono" textAnchor="middle">
            Machine
          </text>
          <text x="700" y="160" className="fill-accent text-xs font-mono" textAnchor="middle">
            Applied
          </text>
        </g>

        {/* Authority label */}
        <text x="100" y="240" className="fill-text-secondary text-xs italic" textAnchor="middle">
          Authority stays here
        </text>
        <motion.line
          x1="100"
          y1="230"
          x2="100"
          y2="190"
          stroke="var(--color-text-secondary)"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
      </svg>
    </div>
  );
}
