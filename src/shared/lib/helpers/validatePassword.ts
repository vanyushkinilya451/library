export const validatePassword = (password: string) => {
  const errors: string[] = [];

  if (password.length < 8)
    errors.push('Пароль должен быть не менее 8 символов');
  if (password.includes(' ')) errors.push('Пароль не должен содержать пробелы');
  if (/[а-яё]/i.test(password))
    errors.push('Пароль не должен содержать русские символы');
  if (/[<>{}[\]\\|`~]/.test(password))
    errors.push('Пароль не должен содержать < > { } [ ] \\ | ` ~');

  return errors;
};
