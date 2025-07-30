import type { DefaultTheme } from 'styled-components';
import { commonTheme } from './commonTheme';

export const lightTheme: DefaultTheme = {
  ...commonTheme,
  colors: {
    // Основные - более мягкие оттенки
    primary: 'rgb(147, 51, 234)', // #9333ea - более мягкий фиолетовый
    primaryLight: 'rgb(168, 85, 247)', // #a855f7
    primaryDark: 'rgb(126, 34, 206)', // #7e22ce

    secondary: 'rgb(107, 114, 128)', // #6b7280 - более нейтральный серый
    secondaryLight: 'rgb(156, 163, 175)', // #9ca3af
    secondaryDark: 'rgb(75, 85, 99)', // #4b5563

    accent: 'rgb(251, 146, 60)', // #fb923c - более мягкий оранжевый
    accentLight: 'rgb(253, 186, 116)', // #fdba74
    accentDark: 'rgb(249, 115, 22)', // #f97316

    // Семантические
    success: 'rgb(34, 197, 94)', // #22c55e - более мягкий зелёный
    danger: 'rgb(239, 68, 68)', // #ef4444
    warning: 'rgb(251, 191, 36)', // #fbbf24
    info: 'rgb(59, 130, 246)', // #3b82f6

    // Фон
    background: 'rgb(255, 255, 255)', // #ffffff
    backgroundSecondary: 'rgb(249, 250, 251)', // #f9fafb - более мягкий серый

    // Текст - исправляю контраст
    textPrimary: 'rgb(17, 24, 39)', // #111827 - более тёмный
    textSecondary: 'rgb(107, 114, 128)', // #6b7280 - серый для вторичного текста
    textMuted: 'rgb(156, 163, 175)', // #9ca3af - приглушённый серый
    textBlack: 'rgb(17, 24, 39)', // #111827
    textWhite: 'rgb(255, 255, 255)', // #ffffff
  },
  shadows: {
    nav: '0 2px 8px rgba(0, 0, 0, 0.15)',
    modal: '0 10px 30px rgba(0, 0, 0, 0.3)',
    card: '0 4px 12px rgba(0, 0, 0, 0.1)',
    tooltip: '0 2px 6px rgba(0, 0, 0, 0.2)',
    hoverLift: '0 8px 20px rgba(0, 0, 0, 0.12)',
  },
  gradients: {
    primary: 'linear-gradient(90deg, #8b5cf6, #7c3aed)',
    accent: 'linear-gradient(90deg, #f59e0b, #d97706)',
    surface: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
    blueToAccent: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
    multicolor:
      'linear-gradient(135deg,#8b5cf6 0%,#6366f1 15%,#ec4899 30%,#f43f5e 45%,#60a5fa 60%,#06b6d4 75%,#8b5cf6 100%)',
    background:
      'linear-gradient(135deg,#8b5cf6 0%,#6366f1 15%,#ec4899 30%,#f43f5e 45%,#60a5fa 60%,#06b6d4 75%,#8b5cf6 100%)',
    skeleton: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)',
  },
};
