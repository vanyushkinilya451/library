import { ROUTES } from "app/routes/router";
import { useLogin } from "features/auth/api/useLogin";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  AccentLink,
  AuthForm,
  FormCheckboxWrapper,
  FormDescription,
  FormFooter,
  FormInput,
  FormLabel,
  FormSubtitle,
  FormTitle,
  RegisterPrompt,
  SubmitButton,
} from "../AuthFormStyles";

export const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
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
        type={showPassword ? "text" : "password"}
        onChange={handleChange}
        placeholder="Пароль"
        name="password"
        value={credentials.password}
      />

      <FormFooter>
        <FormCheckboxWrapper>
          <FormLabel>
            <input type="checkbox" onChange={handleShowPassword} />
            Показать пароль
          </FormLabel>
        </FormCheckboxWrapper>
        <AccentLink to={ROUTES.LINKS.RESET_PASSWORD}>Забыли пароль?</AccentLink>
      </FormFooter>

      <SubmitButton type="submit" disabled={isLoading}>
        {isLoading ? "Загрузка..." : "Войти"}
      </SubmitButton>
      <RegisterPrompt>
        Впервые здесь?{" "}
        <AccentLink to={ROUTES.LINKS.REGISTER}>
          Зарегистрируйте Ваш аккаунт
        </AccentLink>
      </RegisterPrompt>
    </AuthForm>
  );
};
