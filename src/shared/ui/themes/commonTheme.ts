import type { DefaultTheme } from 'styled-components';

export const commonTheme: Omit<DefaultTheme, 'colors'> = {
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
  shadows: {
    nav: '0 2px 8px rgba(0, 0, 0, 0.15)',
    modal: '0 10px 30px rgba(0, 0, 0, 0.3)',
    card: '0 4px 12px rgba(0, 0, 0, 0.1)',
    tooltip: '0 2px 6px rgba(0, 0, 0, 0.2)',
    hoverLift: '0 8px 20px rgba(0, 0, 0, 0.12)',
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
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
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
  gradients: {
    primary: 'linear-gradient(90deg, #8b5cf6, #7c3aed)',
    accent: 'linear-gradient(90deg, #f59e0b, #d97706)',
    surface: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
    blueToAccent: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
    multicolor:
      'linear-gradient(135deg,#8b5cf6 0%,#6366f1 15%,#ec4899 30%,#f43f5e 45%,#60a5fa 60%,#06b6d4 75%,#8b5cf6 100%);',
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
