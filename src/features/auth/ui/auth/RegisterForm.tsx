import { ROUTES } from "app/routes/router";
import { useRegister } from "features/auth/api/useRegister";
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

export const RegisterForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { register, error, passwordErrors, isLoading } = useRegister();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    register(credentials);
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
  }, [error, passwordErrors]);

  return (
    <AuthForm onSubmit={(e) => handleSubmit(e)}>
      <FormTitle>Добро пожаловать</FormTitle>
      <FormSubtitle>Станьте частью большого сообщества</FormSubtitle>
      <FormDescription>
        Создайте аккаунт и получите доступ к функциям приложения
      </FormDescription>

      <FormInput
        type="email"
        onChange={handleChange}
        name="email"
        placeholder="Почта"
        value={credentials.email}
      />

      <FormInput
        type={showPassword ? "text" : "password"}
        onChange={handleChange}
        name="password"
        placeholder="Пароль"
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
        {isLoading ? "Загрузка..." : "Зарегистрироваться"}
      </SubmitButton>
      <RegisterPrompt>
        Уже есть аккаунт? <AccentLink to={ROUTES.LINKS.LOGIN}>Войти</AccentLink>
      </RegisterPrompt>
    </AuthForm>
  );
};
