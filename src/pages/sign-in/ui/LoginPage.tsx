import { useState } from "react";
import styled, { keyframes } from "styled-components";

export const LoginPage = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [, setCredentials] = useState({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCredentials({ login, password });
    console.log({ login, password });
  };

  return (
    <LoginLayout>
      <FormContainer>
        <AuthForm onSubmit={handleSubmit}>
          <FormTitle>Добро Пожаловать</FormTitle>
          <FormSubtitle>Привет! Добро Пожаловать в YNOU</FormSubtitle>
          <FormLabel>
            Введите ваш логин и пароль, чтобы войти в приложение
          </FormLabel>

          <FormInput
            type="text"
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Логин"
            value={login}
          />

          <FormInput
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            value={password}
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
            Впервые здесь?{" "}
            <RegisterLink href="#">Зарегистрируйте Ваш аккаунт</RegisterLink>
          </RegisterPrompt>
        </AuthForm>
      </FormContainer>

      <AuthBackground>
        <AnimationWrapper>
          <FirstLine>ЗАВТРА -▷</FirstLine>
          <SecondLine> : ЧТО-ТО</SecondLine>
          <ThirdLine> БУДЕТ !</ThirdLine>
          <FourthLine>ТОЧНО</FourthLine>
        </AnimationWrapper>
      </AuthBackground>
    </LoginLayout>
  );
};

const vibrateLeftToRight = keyframes`
  from {
    transform: translateX(90%);
  }
  to {
    transform: translateX(80%);
  }
  `

const vibrateRightToLeft = keyframes`
  from {
    transform: translateX(-80%);
  }
  to {
    transform: translateX(-75%);
  }
  `


const leftToRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  20% {
    transform: translateX(80%);    
  }
  to {
    transform: translateX(90%);
  }
`;

const rigthToLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  20% {
    transform: translateX(-70%);    
  }
  to {
    transform: translateX(-80%);
  }
`;

const topToBottom = keyframes`
from {
    transform: translateY(-100%);
  }
  20% {
    transform: translateY(95%);    
  }
  to {
    transform: translateY(100%);
  }
`

const vibrateTopBottom = keyframes`
  from{
    transform: translateY(100%);
  }
  to{
    transform: translateY(95%);
  }
`

const gradientAnimation = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`

const AnimationWrapper = styled.div`
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(45deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  animation: ${gradientAnimation} 4s linear infinite alternate;
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 25%;
  font-size: 60px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color:  black;
  border-radius: 5px;
  overflow: hidden;
  color: white;
  text-shadow: 4px 4px 6px rgba(66, 68, 90, 1);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const FirstLine = styled(Line)`
z-index: 4;
  left: -100%;
  top: 10%;
  background: #020024;
  background: linear-gradient(45deg,
  rgba(131, 58, 180, 1) 0%,
  rgba(255, 255, 255, 0.9) 25%,
  rgba(253, 29, 29, 1) 50%,
  rgba(0, 255, 255, 0.7) 75%,
  rgba(252, 176, 69, 1) 100%
);
  animation: 
  ${leftToRight} 5s linear forwards,
  ${vibrateLeftToRight} 5s linear infinite 5s alternate;
`;

const SecondLine = styled(Line)`
z-index: 2;
  right: -100%;
  top: 40%;
  background: linear-gradient(45deg,
  rgba(180, 20, 220, 1) 0%,
  rgba(0, 255, 255, 1) 33%,
  rgba(255, 0, 100, 1) 66%,
  rgba(255, 255, 0, 1) 100%
);
  animation: ${rigthToLeft} 5s linear forwards,
  ${vibrateRightToLeft} 3s linear infinite 5s alternate;
`;

const ThirdLine = styled(Line)`
  z-index: 4;
  left: -100%;
  top: 70%;
  background: #2A7B9B;
  background: linear-gradient(45deg,
  rgba(131, 58, 180, 0.7) 0%,
  rgba(131, 58, 180, 0.3) 20%,
  rgba(253, 29, 29, 0.5) 50%,
  rgba(253, 29, 29, 0.2) 70%,
  rgba(252, 176, 69, 0.6) 100%
);
  animation:
    ${leftToRight} 5s linear forwards,
    ${vibrateLeftToRight} 5s linear infinite 5s alternate;
`;

const FourthLine = styled(Line)`
  z-index: 3;
  left: 7%;
  top: -125%;
  width: 40%;
  height: 120%; 
  animation: ${topToBottom} 5s linear forwards,
  ${vibrateTopBottom} 5s linear infinite 5s alternate;
  background: #ffffff;
  background: linear-gradient(54deg, rgba(151, 0, 252, 1) 0%, rgba(255, 191, 0, 1) 50%, rgba(252, 69, 69, 1) 100%);
`;

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
  background: rgb(0, 0, 0);
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
