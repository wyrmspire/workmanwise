'use client';

import { useTheme } from '@/components/layout/ThemeProvider';
import { themeOrder } from '@/lib/themes';
import { motion } from 'framer-motion';

export function ThemeSwitcher() {
  const { theme, setTheme, themes, mounted } = useTheme();

  // Don't render until mounted (avoid hydration mismatch)
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-2 p-3 rounded-lg bg-card-bg border border-border shadow-lg"
      >
        <div className="text-xs font-mono text-text-secondary mb-1 px-1">
          Theme
        </div>
        <div className="flex flex-col gap-1.5">
          {themeOrder.map((themeName) => {
            const themeData = themes[themeName];
            const isActive = theme === themeName;

            return (
              <motion.button
                key={themeName}
                onClick={() => setTheme(themeName)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative w-8 h-8 rounded-md transition-all duration-200
                  ${isActive ? 'ring-2 ring-accent ring-offset-2 ring-offset-bg' : ''}
                `}
                style={{
                  backgroundColor: themeData.accent,
                }}
                title={themeData.label}
                aria-label={`Switch to ${themeData.label} theme`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-theme"
                    className="absolute inset-0 rounded-md border-2 border-white/50"
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
