import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useChangePassword } from '../api/useChangePassword';
import {
  AccentLink,
  AuthForm,
  FormCheckboxWrapper,
  FormFooter,
  FormInput,
  FormLabel,
  FormSubtitle,
  FormTitle,
  RegisterPrompt,
  SubmitButton,
} from './AuthFormStyles';

export const ChangePasswordForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const { changePassword, isLoading, error, passwordErrors, isSuccess } =
    useChangePassword();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    changePassword(credentials);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (passwordErrors.length > 0) {
      passwordErrors.forEach((error) => toast.error(error));
    }

    if (isSuccess) {
      toast.success('Пароль успешно сброшен');
    }
  }, [error, passwordErrors, isSuccess]);

  return (
    <AuthForm onSubmit={(e) => handleSubmit(e)}>
      <Toaster />
      <FormTitle>Сброс пароля</FormTitle>
      <FormSubtitle>Введите вашу почту и новый пароль</FormSubtitle>

      <FormInput
        type="email"
        onChange={handleChange}
        name="email"
        placeholder="Почта"
        value={credentials.email}
      />

      <FormInput
        type={showPassword ? 'text' : 'password'}
        onChange={handleChange}
        name="password"
        placeholder="Новый пароль"
        value={credentials.password}
      />

      <FormInput
        type={showPassword ? 'text' : 'password'}
        onChange={handleChange}
        name="passwordConfirm"
        placeholder="Повторите пароль"
        value={credentials.passwordConfirm}
      />

      <FormFooter>
        <FormCheckboxWrapper>
          <FormLabel>
            <input
              type="checkbox"
              onChange={handleShowPassword}
            />
            Показать пароль
          </FormLabel>
        </FormCheckboxWrapper>
      </FormFooter>
      <SubmitButton
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Загрузка...' : 'Изменить пароль'}
      </SubmitButton>
      <RegisterPrompt>
        Вспомнили пароль? <AccentLink to={'/auth/login'}>Войти</AccentLink>
      </RegisterPrompt>
    </AuthForm>
  );
};
