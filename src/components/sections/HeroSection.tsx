'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ANIMATION } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
      {/* Background subtle texture - placeholder for AI image */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface to-bg opacity-50" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: ANIMATION.easing }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-6"
          >
            Most manufacturing problems aren't machine problems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: ANIMATION.easing }}
            className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8"
          >
            They're handoff problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: ANIMATION.easing }}
          >
            <Button href="#how-it-works">See how it works</Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
