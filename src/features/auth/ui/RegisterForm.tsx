import { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      navigate('/');
    },
    [email, login, password]
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const handleLoginChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLogin(e.target.value);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  return (
    <AuthForm onSubmit={handleSubmit}>
      <FormTitle>Добро пожаловать</FormTitle>
      <FormSubtitle>Станьте частью большого сообщества YNOU</FormSubtitle>
      <FormDescription>
        Создайте аккаунт и получите доступ к функциям приложения
      </FormDescription>

      <FormInput
        type='email'
        onChange={handleEmailChange}
        placeholder='Почта'
        value={login}
      />

      <FormInput
        type='text'
        onChange={handleLoginChange}
        placeholder='Логин'
        value={login}
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
      <SubmitButton type='submit'>Зарегистрироваться</SubmitButton>
      <RegisterPrompt>
        Уже есть аккаунт? <AccentLink to={'/auth/login'}>Войти</AccentLink>
      </RegisterPrompt>
    </AuthForm>
  );
};

const colors = {
  primaryText: 'rgb(79, 79, 79)',
  secondaryText: 'rgb(128, 128, 128)',
  accent: 'rgb(255, 0, 0)',
  darkBlue: 'rgb(6, 22, 39)',
  lightText: 'rgb(238, 238, 238)',
  border: 'rgb(227, 227, 227)',
};

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
`;

const FormTitle = styled.h1`
  color: ${colors.primaryText};
  font-size: 3.3rem;
  font-weight: 900;
  line-height: 46px;
  margin: 0;
  text-align: center;
  user-select: none;
`;

const FormSubtitle = styled.h2`
  color: ${colors.secondaryText};
  user-select: none;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  margin: 0;
  margin: 30px 0 5px 0;
`;

const FormDescription = styled.h3`
  color: ${colors.secondaryText};
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
  border: 1px solid ${colors.border};
  border-radius: 8px;
  width: 100%;
  margin-top: 18px;

  &::placeholder {
    color: ${colors.secondaryText};
    font-style: italic;
  }

  &:focus {
    outline: 2px solid ${colors.secondaryText};
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
  color: ${colors.secondaryText};
  user-select: none;
`;

const AccentLink = styled(Link)`
  color: ${colors.accent};
`;

const SubmitButton = styled.button`
  border-radius: 8px;
  background: ${colors.darkBlue};
  color: ${colors.lightText};
  width: 100%;
  padding: 10px 0;

  margin-top: 22px;

  &:hover {
    opacity: 0.9;
  }
`;

const RegisterPrompt = styled.span`
  color: ${colors.primaryText};

  margin-top: 11px;
`;
