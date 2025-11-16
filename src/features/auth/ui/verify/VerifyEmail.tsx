import { ROUTES } from "app/routes/router";
import { useNavigate } from "react-router-dom";
import {
  BackgroundGradient,
  ButtonGroup,
  ButtonIcon,
  Container,
  Content,
  Description,
  EmailIcon,
  Envelope,
  EnvelopeBody,
  EnvelopeFlap,
  EnvelopeSeal,
  FloatingEnvelopes,
  IconContainer,
  InfoBox,
  InfoIcon,
  InfoText,
  MailIcon,
  PrimaryButton,
  Title,
} from "./styles";

export const VerifyEmail = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(ROUTES.LINKS.HOME);
  };

  return (
    <Container>
      <BackgroundGradient />
      <FloatingEnvelopes>
        {[...Array(5)].map((_, index) => (
          <Envelope key={index} delay={index * 0.3}>
            <EnvelopeBody />
            <EnvelopeFlap />
            <EnvelopeSeal />
          </Envelope>
        ))}
      </FloatingEnvelopes>

      <Content>
        <EmailIcon>
          <IconContainer>
            <MailIcon>✉️</MailIcon>
          </IconContainer>
        </EmailIcon>

        <Title>Проверьте вашу почту</Title>
        <Description>
          Мы отправили письмо с подтверждением на ваш email адрес. Пожалуйста,
          проверьте почту и перейдите по ссылке для завершения регистрации.
        </Description>

        <InfoBox>
          <InfoIcon>💡</InfoIcon>
          <InfoText>Не получили письмо? Проверьте папку "Спам"</InfoText>
        </InfoBox>

        <ButtonGroup>
          <PrimaryButton onClick={handleGoHome}>
            <ButtonIcon>🏠</ButtonIcon>
            Вернуться домой
          </PrimaryButton>
        </ButtonGroup>
      </Content>
    </Container>
  );
};
