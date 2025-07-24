import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { breakpoints, fontSizes } from 'shared/lib';
import styled from 'styled-components';
import { useRegister } from '../api/useRegister';

export const RegisterForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const { register, error, passwordErrors, isLoading } = useRegister();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    register(credentials);
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
        type={showPassword ? 'text' : 'password'}
        onChange={handleChange}
        name="password"
        placeholder="Пароль"
        value={credentials.password}
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
        <AccentLink to={'#'}>Забыли пароль?</AccentLink>
      </FormFooter>
      <SubmitButton
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
      </SubmitButton>
      <RegisterPrompt>
        Уже есть аккаунт? <AccentLink to={'/auth/login'}>Войти</AccentLink>
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
  font-size: ${fontSizes.xxl};
  color: var(--auth-primary-text);
  font-weight: 900;
  line-height: 46px;
  margin: 0;
  text-align: center;
  user-select: none;

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSizes.xl};
  }
`;

const FormSubtitle = styled.h2`
  font-size: ${fontSizes.md};
  color: var(--auth-secondary-text);
  user-select: none;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  margin: 30px 0 5px 0;

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSizes.sm};
  }
`;

const FormDescription = styled.h3`
  font-size: ${fontSizes.md};
  color: var(--auth-secondary-text);
  margin: 0;
  font-style: italic;
  font-weight: 400;
  text-align: center;
  user-select: none;

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSizes.sm};
  }
`;

const FormInput = styled.input`
  font-size: ${fontSizes.sm};
  color: black;
  font-weight: 400;
  padding: 17px 12px;
  border: 1px solid var(--auth-border);
  border-radius: 8px;
  width: 100%;
  margin-top: 18px;

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSizes.xs};
  }

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
  font-size: ${fontSizes.sm};
  color: var(--auth-secondary-text);
  user-select: none;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSizes.xs};
  }
`;

const AccentLink = styled(Link)`
  font-size: ${fontSizes.sm};
  color: var(--auth-accent);

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSizes.xs};
  }
`;

const SubmitButton = styled.button`
  font-size: ${fontSizes.sm};
  border-radius: 8px;
  background: var(--auth-dark-blue);
  color: var(--auth-light-text);
  width: 100%;
  padding: 10px 0;
  margin-top: 22px;

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${fontSizes.xs};
  }

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const RegisterPrompt = styled.span`
  font-size: ${fontSizes.sm};
  color: var(--auth-primary-text);
  margin-top: 11px;
`;
