import { useEffect, useState } from 'react';
import { FormLabel } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { useLogin } from '../api/useLogin';
import {
  AccentLink,
  AuthForm,
  FormCheckboxWrapper,
  FormDescription,
  FormFooter,
  FormInput,
  FormSubtitle,
  FormTitle,
  RegisterPrompt,
  SubmitButton,
} from './AuthFormStyles';

export const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const { login, error, passwordErrors, isLoading } = useLogin();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    login(credentials);
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (passwordErrors.length > 0) {
      passwordErrors.forEach((error) => toast.error(error));
    }
  }, [error, passwordErrors]);

  return (
    <AuthForm onSubmit={(e) => handleSubmit(e)}>
      <Toaster />
      <FormTitle>С возвращением</FormTitle>
      <FormSubtitle>Привет! Рады снова Вас видеть!</FormSubtitle>
      <FormDescription>
        Введите ваш логин и пароль, чтобы войти в приложение
      </FormDescription>

      <FormInput
        type="email"
        onChange={handleChange}
        placeholder="Почта"
        name="email"
        value={credentials.email}
      />

      <FormInput
        type={showPassword ? 'text' : 'password'}
        onChange={handleChange}
        placeholder="Пароль"
        name="password"
        value={credentials.password}
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
        <AccentLink to={'/auth/reset-password'}>Забыли пароль?</AccentLink>
      </FormFooter>

      <SubmitButton
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Загрузка...' : 'Войти'}
      </SubmitButton>
      <RegisterPrompt>
        Впервые здесь?{' '}
        <AccentLink to={'/auth/register'}>
          Зарегистрируйте Ваш аккаунт
        </AccentLink>
      </RegisterPrompt>
    </AuthForm>
  );
};
