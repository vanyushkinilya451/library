import { useNavigate } from 'react-router-dom';

import styled, { keyframes } from 'styled-components';

export const VerifyResetPassword = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <BackgroundGradient />
      <FloatingEnvelopes>
        {[...Array(5)].map((_, index) => (
          <Envelope
            key={index}
            delay={index * 0.3}
          >
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
          проверьте почту и перейдите по ссылке для сброса пароля.
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

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(3deg); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
  60% { transform: translateY(-4px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const slideIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--gradient-primary);
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 30% 20%,
      var(--orange-accent) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 70% 80%, var(--link-color) 0%, transparent 50%);
  opacity: 0.3;
  animation: ${pulse} 4s ease-in-out infinite;
`;

const FloatingEnvelopes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const Envelope = styled.div<{ delay: number }>`
  position: absolute;
  width: 30px;
  height: 20px;
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;

  &:nth-child(1) {
    top: 15%;
    left: 10%;
  }
  &:nth-child(2) {
    top: 25%;
    right: 15%;
  }
  &:nth-child(3) {
    top: 65%;
    left: 5%;
  }
  &:nth-child(4) {
    top: 75%;
    right: 10%;
  }
  &:nth-child(5) {
    top: 45%;
    left: 20%;
  }
`;

const EnvelopeBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--gradient-coral-teal);
  border-radius: 2px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  opacity: 0.3;
`;

const EnvelopeFlap = styled.div`
  position: absolute;
  top: -5px;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--gradient-brown);
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
  opacity: 0.4;
`;

const EnvelopeSeal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: var(--orange-accent);
  border-radius: 50%;
  opacity: 0.6;
`;

const Content = styled.div`
  text-align: center;
  z-index: 10;
  animation: ${slideIn} 1s ease-out;
  max-width: 600px;
  padding: 0 20px;
`;

const EmailIcon = styled.div`
  margin-bottom: 30px;
  animation: ${bounce} 2s ease-in-out infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}),
    (max-height: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const IconContainer = styled.div`
  display: inline-block;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

const MailIcon = styled.div`
  font-size: 3rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 0 0 20px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}),
    (max-height: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: white;
  line-height: 1.6;
  margin: 0 0 30px 0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}),
    (max-height: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 10px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.1);
  padding: 16px 20px;
  border-radius: 12px;
  margin: 0 0 30px 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${fadeIn} 1.5s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}),
    (max-height: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 25px;
    padding: 10px;
  }
`;

const InfoIcon = styled.span`
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const InfoText = styled.span`
  font-size: 0.95rem;
  color: white;
  text-align: left;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 25px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  min-width: 160px;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const PrimaryButton = styled(Button)`
  background: var(--auth-dark-blue);
  color: var(--auth-light-text);

  &:hover {
    background: var(--auth-dark-blue);
    opacity: 0.9;
  }
`;

const ButtonIcon = styled.span`
  font-size: 1.1rem;
`;
