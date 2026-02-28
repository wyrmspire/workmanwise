export const SITE_NAME = 'WorkmanWise';
export const SITE_TAGLINE = 'We build solutions that finish work.';
export const SITE_DESCRIPTION =
  'Less talking. More finished work. WorkmanWise builds solutions that remove friction and keep decisions moving forward.';
export const SITE_URL = 'https://workmanwise.com';
export const SITE_KEYWORDS = [
  'workflow solutions',
  'process improvement',
  'operational efficiency',
  'business automation',
  'workmanwise',
] as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
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
