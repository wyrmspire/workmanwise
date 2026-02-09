export const SITE_NAME = 'WorkmanWise';
export const SITE_TAGLINE = 'Keep decisions moving forward without friction.';
export const SITE_DESCRIPTION =
  'A collective of machinists and designers using AI to streamline CAM, posts, and shop workflows — safely, predictably, and without hype.';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Tools & Services', href: '/tools' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const ANIMATION = {
  easing: [0.25, 0.1, 0.25, 1] as const,
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    deliberate: 1.2,
  },
  stagger: 0.1,
} as const;
