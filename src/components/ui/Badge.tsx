type BadgeVariant = 'background' | 'active' | 'service' | 'role' | 'lean';

interface BadgeProps {
  variant: BadgeVariant;
  label?: string;
  className?: string;
}

const variantConfig: Record<BadgeVariant, { defaultLabel: string; styles: string }> = {
  background: {
    defaultLabel: 'Always watching',
    styles: 'bg-accent/10 text-accent border-accent/20',
  },
  active: {
    defaultLabel: 'Hands-on',
    styles: 'bg-text-primary/10 text-text-primary border-text-primary/20',
  },
  service: {
    defaultLabel: 'With our team',
    styles: 'bg-accent/10 text-accent border-accent/20',
  },
  role: {
    defaultLabel: '',
    styles: 'bg-surface text-text-secondary border-border',
  },
  lean: {
    defaultLabel: 'Lean-Inspired',
    styles: 'bg-accent/5 text-text-secondary border-border',
  },
};

export function Badge({ variant, label, className = '' }: BadgeProps) {
  const config = variantConfig[variant];
  const displayLabel = label || config.defaultLabel;

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md
        text-xs font-mono border
        ${config.styles}
        ${className}
      `}
    >
      {variant === 'background' && (
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      )}
      {variant === 'service' && (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )}
      {displayLabel}
    </span>
  );
}
