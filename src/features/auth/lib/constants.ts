export const AUTH_CONFIG = {
  TOKEN_EXPIRY: 24 * 60 * 60 * 1000, // 24 часа
  MIN_PASSWORD_LENGTH: 8,
  MAX_LOGIN_ATTEMPTS: 3,
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30 минут
};

export const AUTH_MESSAGES = {
  INVALID_EMAIL: "Введите корректный email",
  WEAK_PASSWORD: "Пароль должен содержать минимум 8 символов",
  LOGIN_FAILED: "Неверный email или пароль",
  REGISTRATION_SUCCESS: "Регистрация прошла успешно",
};
