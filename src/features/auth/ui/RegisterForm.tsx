import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib';
import styled from 'styled-components';
import { signUp } from '../lib/signUp';

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { isSuccess, error } = await signUp(email, password, dispatch);

    if (isSuccess) {
      navigate('/auth/verify-email');
    }
    if (error) {
      toast.error('Неверный логин или пароль')
    }

    setIsLoading(false);
  };

  return (
    <AuthForm onSubmit={(e) => handleSubmit(e)}>
      <FormTitle>Добро пожаловать</FormTitle>
      <FormSubtitle>Станьте частью большого сообщества YNOU</FormSubtitle>
      <FormDescription>
        Создайте аккаунт и получите доступ к функциям приложения
      </FormDescription>

      <FormInput
        type='email'
        onChange={handleEmailChange}
        placeholder='Почта'
        value={email}
      />

      <FormInput
        type='password'
        onChange={handlePasswordChange}
        placeholder='Пароль'
        value={password}
      />

      <FormFooter>
        <FormCheckboxWrapper>
          <FormLabel>
            <input type='checkbox' />
            Запомнить меня
          </FormLabel>
        </FormCheckboxWrapper>
        <AccentLink to={'#'}>Забыли пароль?</AccentLink>
      </FormFooter>
      <SubmitButton
        type='submit'
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

const FormDescription = styled.h3`
  color: var(--auth-secondary-text);
  margin: 0;
  font-style: italic;

  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  user-select: none;
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