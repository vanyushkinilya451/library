import type { DefaultTheme } from 'styled-components';
import { commonTheme } from './commonTheme';

export const darkTheme: DefaultTheme = {
  ...commonTheme,
  colors: {
    primary: '#1a202c',
    secondary: '#2d3748',
    accent: '#ed8936',
    muted: '#718096',
    white: '#ffffff',
    black: '#000000',
  },
};
