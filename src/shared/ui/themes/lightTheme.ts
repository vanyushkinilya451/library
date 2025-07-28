import type { DefaultTheme } from 'styled-components';
import { commonTheme } from './commonTheme';

export const lightTheme: DefaultTheme = {
  ...commonTheme,
  colors: {
    // Основные
    primary: 'rgb(139, 92, 246)', // #8b5cf6 — фиолетовый
    primaryLight: 'rgb(167, 139, 250)', // #a78bfa
    primaryDark: 'rgb(124, 58, 237)', // #7c3aed

    secondary: 'rgb(100, 116, 139)', // #64748b — серый slate
    secondaryLight: 'rgb(148, 163, 184)', // #94a3b8
    secondaryDark: 'rgb(71, 85, 105)', // #475569

    accent: 'rgb(245, 158, 11)', // #f59e0b — янтарный
    accentLight: 'rgb(251, 191, 36)', // #fbbf24
    accentDark: 'rgb(217, 119, 6)', // #d97706

    // Семантические
    success: 'rgb(16, 185, 129)', // #10b981 — зелёный
    danger: 'rgb(239, 68, 68)', // #ef4444 — красный
    warning: 'rgb(251, 191, 36)', // #fbbf24
    info: 'rgb(59, 130, 246)', // #3b82f6 — синий

    // Фон и текст
    background: 'rgb(255, 255, 255)', // #ffffff
    backgroundSecondary: 'rgb(248, 250, 252)', // #f8fafc
    textPrimary: 'rgb(30, 41, 59)', // #1e293b
    textSecondary: 'rgb(100, 116, 139)', // #64748b
    textMuted: 'rgb(148, 163, 184)', // #94a3b8
  },
};
