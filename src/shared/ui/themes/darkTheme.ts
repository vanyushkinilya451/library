import type { DefaultTheme } from 'styled-components';
import { commonTheme } from './commonTheme';

export const darkTheme: DefaultTheme = {
  ...commonTheme,
  colors: {
    // Основные - более мягкие оттенки
    primary: 'rgb(147, 51, 234)', // #9333ea - более мягкий фиолетовый
    primaryLight: 'rgb(168, 85, 247)', // #a855f7
    primaryDark: 'rgb(126, 34, 206)', // #7e22ce

    secondary: 'rgb(156, 163, 175)', // #9ca3af - более светлый серый
    secondaryLight: 'rgb(209, 213, 219)', // #d1d5db
    secondaryDark: 'rgb(107, 114, 128)', // #6b7280

    accent: 'rgb(251, 146, 60)', // #fb923c - более мягкий оранжевый
    accentLight: 'rgb(253, 186, 116)', // #fdba74
    accentDark: 'rgb(249, 115, 22)', // #f97316

    // Семантические
    success: 'rgb(34, 197, 94)', // #22c55e - более мягкий зелёный
    danger: 'rgb(239, 68, 68)', // #ef4444
    warning: 'rgb(251, 191, 36)', // #fbbf24
    info: 'rgb(59, 130, 246)', // #3b82f6

    // Фон и текст для тёмной темы - более приятные оттенки
    background: 'rgb(17, 24, 39)', // #111827 - более мягкий тёмный
    backgroundSecondary: 'rgb(31, 41, 55)', // #1f2937 - более светлый тёмный
    textPrimary: 'rgb(249, 250, 251)', // #f9fafb - почти белый
    textSecondary: 'rgb(209, 213, 219)', // #d1d5db - светло-серый
    textMuted: 'rgb(156, 163, 175)', // #9ca3af - серый
    textBlack: 'rgb(17, 24, 39)', // #111827 - тёмный
    textWhite: 'rgb(255, 255, 255)', // #ffffff - чистый белый
  },
  shadows: {
    // Белые тени для темной темы
    nav: '0 2px 8px rgba(255, 255, 255, 0.1)',
    modal: '0 10px 30px rgba(255, 255, 255, 0.15)',
    card: '0 4px 12px rgba(255, 255, 255, 0.08)',
    tooltip: '0 2px 6px rgba(255, 255, 255, 0.12)',
    hoverLift: '0 8px 20px rgba(255, 255, 255, 0.1)',
  },
  gradients: {
    primary: 'linear-gradient(90deg, #4c1d95, #581c87)',
    accent: 'linear-gradient(90deg, #92400e, #78350f)',
    surface: 'linear-gradient(180deg, #1f2937 0%, #111827 100%)',
    blueToAccent: 'linear-gradient(135deg, #1e40af, #92400e)',
    multicolor:
      'linear-gradient(135deg,#4c1d95 0%,#3730a3 15%,#be185d 30%,#dc2626 45%,#1d4ed8 60%,#0891b2 75%,#4c1d95 100%)',
    background:
      'linear-gradient(135deg,#4c1d95 0%,#3730a3 15%,#be185d 30%,#dc2626 45%,#1d4ed8 60%,#0891b2 75%,#4c1d95 100%)',
    skeleton: 'linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%)',
  },
};
