// Основные импорты плагинов и конфигураций
import js from "@eslint/js"; // Базовый линтер для JavaScript
import pluginReact from "eslint-plugin-react"; // Плагин для React
import { defineConfig } from "eslint/config"; // Функция для определения конфигурации
import globals from "globals"; // Глобальные переменные
import tseslint from "typescript-eslint"; // Линтер для TypeScript

export default defineConfig([
  // Игнорируем сгенерированные файлы в dist
  {
    ignores: ["dist/**/*"],
  },

  // Базовые правила для всех JS/TS файлов
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },

  // Настройки React
  {
    settings: {
      react: {
        version: "detect", // Автоматически определяет версию React
      },
    },
  },

  // Глобальные переменные для JS/TS файлов
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser, // Браузерные глобалы (window, document и т.д.)
        ...globals.node, // Node.js глобалы (__dirname, require и т.д.)
      },
    },
  },

  // Рекомендуемые правила TypeScript
  tseslint.configs.recommended,

  // Специальные правила для React компонентов
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: pluginReact,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },

  // Специальные правила для webpack конфига
  {
    files: ["webpack.config.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off", // Разрешаем require()
      "@typescript-eslint/no-var-requires": "off", // Разрешаем var require
    },
  },
]);
