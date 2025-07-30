import type { DefaultTheme } from 'styled-components';

export const commonTheme: Omit<
  DefaultTheme,
  'colors' | 'shadows' | 'gradients'
> = {
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
  opacity: {
    disabled: 0.4,
    muted: 0.6,
    medium: 0.8,
    default: 1,
    overlay: 0.5,
    hover: 0.9,
  },
  borderRadius: {
    xs: '2px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    full: '9999px',
  },
  transitions: {
    base: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease',
    colors:
      'color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
    transform: 'transform 0.3s ease',
  },
  fontSizes: {
    xxl: '3rem',
    xl: '2.25rem',
    lg: '1.75rem',
    md: '1rem',
    sm: '0.875rem',
    xs: '0.75rem',
  },
  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  zIndices: {
    base: 0,
    dropdown: 1000,
    overlay: 1300,
    modal: 1500,
    toast: 1800,
    tooltip: 2000,
  },
};
