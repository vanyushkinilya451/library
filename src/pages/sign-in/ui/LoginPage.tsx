import { useState } from "react";
import styled from "styled-components";

export const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ login, password });
  };

  return (
    <LoginLayout>
      <FormContainer>
        <AuthForm onSubmit={handleSubmit}>

          <FormTitle>Добро Пожаловать</FormTitle>
          <FormSubtitle>Привет! Добро Пожаловать в YNOU</FormSubtitle>
          <FormLabel>Введите ваш логин и пароль, чтобы войти в приложение</FormLabel>

          <FormInput
            type="text"
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Логин"
          />

          <FormInput
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
          />

          <FormFooter>
            <FormCheckboxWrapper>
              <input type="checkbox" />
              <FormLabel>Запомнить меня</FormLabel>
            </FormCheckboxWrapper>
            <SecondaryActionLink href="#">Забыли пароль?</SecondaryActionLink>
          </FormFooter>

          <SubmitButton type="submit">Войти</SubmitButton>
          <RegisterPrompt>
            Впервые здесь? <RegisterLink href="#">Зарегистрируйте Ваш аккаунт</RegisterLink>
          </RegisterPrompt>

        </AuthForm>
      </FormContainer>

      <AuthBackground>
      </AuthBackground>

    </LoginLayout>
  );
};

const LoginLayout = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const FormContainer = styled.div`
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: auto;
`;

const AuthBackground = styled.div`
  background: rgb(6, 22, 39);
  height: 100%;
  flex: 0 0 50%;
`;

// Form components
const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
`;

const FormTitle = styled.h1`
  color: rgb(79, 79, 79);
  font-size: 38px;
  font-weight: 700;
  line-height: 46px;
  margin: 0;
  text-align: center;
`;

const FormSubtitle = styled.h2`
  color: rgb(79, 79, 79);
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  margin: 15px 0 0;
`;

const FormLabel = styled.label`
  color: rgb(128, 128, 128);
  font-style: italic;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: center;
`;

const FormInput = styled.input`
  color: black;
  font-size: 14px;
  font-weight: 400;
  padding: 17px 12px;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 8px;
  width: 100%;
  margin-top: 18px;

  &::placeholder {
    color: rgb(128, 128, 128);
    font-style: italic;
  }

  &:focus {
    outline: 2px solid rgb(128, 128, 128);
  }
`;

const FormCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FormFooter = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  justify-content: space-between;
`;

const SecondaryActionLink = styled.a`
  color: rgb(255, 0, 0);
  font-size: 14px;
`;

const SubmitButton = styled.button`
  border-radius: 8px;
  background: rgb(6, 22, 39);
  color: rgb(238, 238, 238);
  width: 100%;
  padding: 8px 0;
  margin-top: 22px;

  &:hover {
    opacity: 0.9;
  }
`;

const RegisterPrompt = styled.span`
  color: rgb(79, 79, 79);
  font-size: 14px;
  margin-top: 11px;
`;

const RegisterLink = styled.a`
  color: rgb(255, 0, 0);
  font-size: 14px;
`;