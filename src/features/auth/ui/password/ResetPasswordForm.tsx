import { ROUTES } from "app/routes/router";
import { useResetPassword } from "features/auth/api/useResetPassword";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  AccentLink,
  AuthForm,
  FormDescription,
  FormFooter,
  FormInput,
  FormSubtitle,
  FormTitle,
  RegisterPrompt,
  SubmitButton,
} from "../AuthFormStyles";

export const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const { resetPassword, isLoading, error } = useResetPassword();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    resetPassword(email);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <AuthForm onSubmit={(e) => handleSubmit(e)}>
      <FormTitle>Сброс пароля</FormTitle>
      <FormSubtitle>Введите вашу почту для сброса пароля</FormSubtitle>
      <FormDescription>
        Мы отправим вам ссылку для сброса пароля на вашу почту
      </FormDescription>
      <FormInput
        type="email"
        onChange={handleChange}
        name="email"
        placeholder="Почта"
        value={email}
      />

      <FormFooter></FormFooter>
      <SubmitButton type="submit" disabled={isLoading}>
        {isLoading ? "Загрузка..." : "Сбросить пароль"}
      </SubmitButton>
      <RegisterPrompt>
        Вспомнили пароль? <AccentLink to={ROUTES.LINKS.LOGIN}>Войти</AccentLink>
      </RegisterPrompt>
    </AuthForm>
  );
};
