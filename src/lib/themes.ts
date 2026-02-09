export type ThemeName = 'shop-floor' | 'blueprint' | 'clean-room' | 'raw-material' | 'night-shift';

export interface ThemeTokens {
  name: ThemeName;
  label: string;
  bg: string;
  surface: string;
  'text-primary': string;
  'text-secondary': string;
  accent: string;
  'accent-hover': string;
  border: string;
  'card-bg': string;
}

export const themes: Record<ThemeName, ThemeTokens> = {
  'shop-floor': {
    name: 'shop-floor',
    label: 'Shop Floor',
    bg: '#1a1a1a',
    surface: '#242424',
    'text-primary': '#F8FAFC',
    'text-secondary': '#94A3B8',
    accent: '#F59E0B',
    'accent-hover': '#D97706',
    border: '#333333',
    'card-bg': '#1f1f1f',
  },
  blueprint: {
    name: 'blueprint',
    label: 'Blueprint',
    bg: '#0A1628',
    surface: '#111D32',
    'text-primary': '#E2E8F0',
    'text-secondary': '#8BA2C4',
    accent: '#67E8F9',
    'accent-hover': '#22D3EE',
    border: '#1E3A5F',
    'card-bg': '#0F2340',
  },
  'clean-room': {
    name: 'clean-room',
    label: 'Clean Room',
    bg: '#FFFFFF',
    surface: '#F8FAFC',
    'text-primary': '#0F172A',
    'text-secondary': '#64748B',
    accent: '#2563EB',
    'accent-hover': '#1D4ED8',
    border: '#E2E8F0',
    'card-bg': '#F1F5F9',
  },
  'raw-material': {
    name: 'raw-material',
    label: 'Raw Material',
    bg: '#FAF5F0',
    surface: '#F5EDE4',
    'text-primary': '#1C1917',
    'text-secondary': '#78716C',
    accent: '#B45309',
    'accent-hover': '#92400E',
    border: '#E7DDD0',
    'card-bg': '#F0E8DE',
  },
  'night-shift': {
    name: 'night-shift',
    label: 'Night Shift',
    bg: '#000000',
    surface: '#0A0A0A',
    'text-primary': '#E2E8F0',
    'text-secondary': '#6B7280',
    accent: '#22C55E',
    'accent-hover': '#16A34A',
    border: '#1A1A1A',
    'card-bg': '#0D0D0D',
  },
};

export const themeOrder: ThemeName[] = [
  'shop-floor',
  'blueprint',
  'clean-room',
  'raw-material',
  'night-shift',
];

export const DEFAULT_THEME: ThemeName = 'shop-floor';
