import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    fontSizes: {
      xxl: string;
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      muted: string;
      white: string;
      black: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    zIndices: {
      base: number;
      dropdown: number;
      overlay: number;
      modal: number;
      toast: number;
      tooltip: number;
    };
  }
}
