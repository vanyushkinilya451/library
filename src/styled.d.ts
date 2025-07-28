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
    opacity: {
      disabled: number;
      muted: number;
      medium: number;
      default: number;
      overlay: number;
      hover: number;
    };

    transitions: {
      base: string;
      fast: string;
      slow: string;
      colors: string;
      transform: string;
    };
    shadows: {
      nav: string;
      modal: string;
      card: string;
      tooltip: string;
      hoverLift: string;
    };
    fontWeights: {
      thin: number;
      extraLight: number;
      light: number;
      normal: number;
      medium: number;
      semiBold: number;
      bold: number;
      extraBold: number;
      black: number;
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
      white: string;
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      secondaryLight: string;
      secondaryDark: string;
      accent: string;
      accentLight: string;
      accentDark: string;
      success: string;
      danger: string;
      warning: string;
      info: string;
      background: string;
      backgroundSecondary: string;
      textPrimary: string;
      textSecondary: string;
      textMuted: string;
    };
    gradients: {
      primary: string;
      accent: string;
      surface: string;
      blueToAccent: string;
      multicolor: string;
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
