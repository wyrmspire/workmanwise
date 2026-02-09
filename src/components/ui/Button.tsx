'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-bg hover:bg-accent-hover font-medium',
  secondary:
    'border border-border text-text-primary hover:border-accent hover:text-accent',
  ghost:
    'text-text-secondary hover:text-text-primary',
};

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    px-6 py-3 rounded-lg text-sm font-medium
    transition-colors duration-200
    ${variantStyles[variant]}
    ${className}
  `;

  const motionProps = {
    whileHover: { scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  if ('href' in props && props.href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={props.href} className={baseStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  const { onClick, type = 'button' } = props as ButtonAsButton;

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      type={type}
      className={baseStyles}
    >
      {children}
    </motion.button>
  );
}
