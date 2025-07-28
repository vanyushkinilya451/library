import type { DefaultTheme } from 'styled-components';
import { commonTheme } from './commonTheme';

export const lightTheme: DefaultTheme = {
  ...commonTheme,
  colors: {
    white: 'rgb(250, 250, 250)',
    // Основные
    primary: 'rgb(139, 92, 246)',
    primaryLight: 'rgb(167, 139, 250)',
    primaryDark: 'rgb(124, 58, 237)',

    secondary: 'rgb(100, 116, 139)',
    secondaryLight: 'rgb(148, 163, 184)',
    secondaryDark: 'rgb(71, 85, 105)',

    accent: 'rgb(245, 158, 11)',
    accentLight: 'rgb(251, 191, 36)',
    accentDark: 'rgb(217, 119, 6)',

    // Семантические
    success: 'rgb(16, 185, 129)',
    danger: 'rgb(239, 68, 68)',
    warning: 'rgb(251, 191, 36)',
    info: 'rgb(59, 130, 246)', //

    // Фон и текст
    background: 'rgb(255, 255, 255)',
    backgroundSecondary: 'rgb(248, 250, 252)',
    textPrimary: 'rgb(30, 41, 59)',
    textSecondary: 'rgb(100, 116, 139)',
    textMuted: 'rgb(148, 163, 184)',
  },
  shadows: {
    nav: '0 2px 8px rgba(0, 0, 0, 0.15)',
    modal: '0 10px 30px rgba(0, 0, 0, 0.3)',
    card: '0 4px 12px rgba(0, 0, 0, 0.1)',
    tooltip: '0 2px 6px rgba(0, 0, 0, 0.2)',
    hoverLift: '0 8px 20px rgba(0, 0, 0, 0.12)',
  },
};
