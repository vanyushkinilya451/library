import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useChangePassword } from '../api/useChangePassword';

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
              onChange={() => setShowPassword(!showPassword)}
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
const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
`;

const FormTitle = styled.h1`
  color: var(--auth-primary-text);
  font-size: 3.3rem;
  font-weight: 900;
  line-height: 46px;
  margin: 0;
  text-align: center;
  user-select: none;
`;

const FormSubtitle = styled.h2`
  color: var(--auth-secondary-text);
  user-select: none;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  margin: 0;
  margin: 30px 0 5px 0;
`;

const FormInput = styled.input`
  color: black;

  font-weight: 400;
  padding: 17px 12px;
  border: 1px solid var(--auth-border);
  border-radius: 8px;
  width: 100%;
  margin-top: 18px;

  &::placeholder {
    color: var(--auth-secondary-text);
    font-style: italic;
  }

  &:focus {
    outline: 2px solid var(--auth-secondary-text);
  }
`;

const FormFooter = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  justify-content: space-between;
`;

const FormCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FormLabel = styled.label`
  color: var(--auth-secondary-text);
  user-select: none;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const AccentLink = styled(Link)`
  color: var(--auth-accent);
`;

const SubmitButton = styled.button`
  border-radius: 8px;
  background: var(--auth-dark-blue);
  color: var(--auth-light-text);
  width: 100%;
  padding: 10px 0;

  margin-top: 22px;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const RegisterPrompt = styled.span`
  color: var(--auth-primary-text);

  margin-top: 11px;
`;
