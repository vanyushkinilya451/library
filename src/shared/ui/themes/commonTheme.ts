import type { DefaultTheme } from 'styled-components';

export const commonTheme: Pick<
  DefaultTheme,
  'breakpoints' | 'fontSizes' | 'spacing' | 'zIndices'
> = {
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
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
  zIndices: {
    base: 0,
    dropdown: 1000,
    overlay: 1300,
    modal: 1500,
    toast: 1800,
    tooltip: 2000,
  },
};
