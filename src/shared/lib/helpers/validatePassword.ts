export const PASSWORD_ERRORS = {
  tooShort: "Пароль должен быть не менее 8 символов",
  hasSpace: "Пароль не должен содержать пробелы",
  hasRu: "Пароль не должен содержать русские символы",
  hasForbidden: "Пароль не должен содержать < > { } [ ] \\ | ` ~",
};

export const validatePassword = (password: string) => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push(PASSWORD_ERRORS.tooShort);
  }
  if (password.includes(" ")) {
    errors.push(PASSWORD_ERRORS.hasSpace);
  }
  if (/[а-яё]/i.test(password)) {
    errors.push(PASSWORD_ERRORS.hasRu);
  }
  if (/[<>{}[\]\\|`~]/.test(password)) {
    errors.push(PASSWORD_ERRORS.hasForbidden);
  }

  return errors;
};
