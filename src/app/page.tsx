'use client';

import { motion } from 'framer-motion';

const EASING = [0.25, 0.1, 0.25, 1] as const;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden select-none">
      {/* Subtle top-left geometric accent — barely there, surgical */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 2, ease: EASING }}
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #2563EB 0%, transparent 60%)',
        }}
      />

      {/* Bottom-right mirror accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, delay: 0.5, ease: EASING }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'linear-gradient(315deg, #2563EB 0%, transparent 50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Name — monospace, precise, unhurried */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASING }}
          className="text-sm tracking-[0.35em] uppercase font-mono text-text-secondary mb-16"
        >
          WorkmanWise
        </motion.p>

        {/* The line — thin, measured */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: EASING }}
          className="w-12 h-px bg-border mx-auto mb-16 origin-center"
        />

        {/* Primary statement */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASING }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary leading-tight tracking-tight"
        >
          We build solutions
          <br />
          that finish work.
        </motion.h1>

        {/* Secondary — earned after the headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: EASING }}
          className="mt-8 text-base sm:text-lg text-text-secondary leading-relaxed max-w-md mx-auto"
        >
          Building wisdom since 2023.
        </motion.p>

        {/* Second line accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, delay: 1.8, ease: EASING }}
          className="w-8 h-px bg-accent mx-auto mt-16 origin-center"
        />
      </div>

      {/* Bottom mark — quiet, grounded */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.4, ease: EASING }}
        className="absolute bottom-8 text-[11px] tracking-[0.2em] uppercase font-mono text-text-secondary/40"
      >
        Precision over volume
      </motion.p>
    </div>
  );
}
