import { ROUTES } from "app/routes/router";
import { useNavigate } from "react-router-dom";
import { st } from "shared/lib";
import styled, { keyframes } from "styled-components";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(ROUTES.LINKS.HOME);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Container>
      <BackgroundGradient />
      <FloatingBooks>
        {[...Array(6)].map((_, index) => (
          <Book key={index} delay={index * 0.5}>
            <BookSpine />
            <BookCover />
          </Book>
        ))}
      </FloatingBooks>

      <Content>
        <ErrorCode>
          <Digit>4</Digit>
          <ZeroContainer>
            <Zero>0</Zero>
          </ZeroContainer>
          <Digit>4</Digit>
        </ErrorCode>

        <Title>Страница потерялась в библиотеке</Title>
        <Description>
          Похоже, эта книга была перемещена или еще не добавлена в нашу
          коллекцию
        </Description>

        <ButtonGroup>
          <PrimaryButton onClick={handleGoHome}>
            <ButtonIcon>🏠</ButtonIcon>
            Вернуться домой
          </PrimaryButton>
          <SecondaryButton onClick={handleGoBack}>
            <ButtonIcon>←</ButtonIcon>
            Назад
          </SecondaryButton>
        </ButtonGroup>

        <SearchHint>Попробуйте найти нужную книгу через поиск</SearchHint>
      </Content>
    </Container>
  );
};

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
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
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${st("gradients", "primary")};
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
      ${st("colors", "accent")} 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 80%,
      ${st("colors", "primaryDark")} 0%,
      transparent 50%
    );
  opacity: 0.3;
  animation: ${pulse} 4s ease-in-out infinite;
`;

const FloatingBooks = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const Book = styled.div<{ delay: number }>`
  position: absolute;
  width: 40px;
  height: 60px;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;

  &:nth-child(1) {
    top: 10%;
    left: 10%;
  }
  &:nth-child(2) {
    top: 20%;
    right: 15%;
  }
  &:nth-child(3) {
    top: 60%;
    left: 5%;
  }
  &:nth-child(4) {
    top: 70%;
    right: 10%;
  }
  &:nth-child(5) {
    top: 40%;
    left: 20%;
  }
  &:nth-child(6) {
    top: 80%;
    right: 25%;
  }

  @media (max-width: ${st("breakpoints", "sm")}) {
    &:nth-child(3),
    &:nth-child(5) {
      display: none;
    }

    &:nth-child(4) {
      top: 65%;
    }

    &:nth-child(6) {
      top: 80%;
      left: 25%;
    }
  }
`;

const BookSpine = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 8px;
  height: 100%;
  background: ${st("gradients", "accent")};
  border-radius: 2px;
`;

const BookCover = styled.div`
  position: absolute;
  left: 8px;
  top: 0;
  width: 32px;
  height: 100%;
  background: ${st("gradients", "multicolor")};
  border-radius: 0 4px 4px 0;
  box-shadow: 2px 2px 8px;
  opacity: 0.2;
`;

const Content = styled.div`
  text-align: center;
  z-index: 10;
  animation: ${slideIn} 1s ease-out;
`;

const ErrorCode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
`;

const Digit = styled.span`
  font-size: 120px;
  font-weight: 900;
  color: ${st("colors", "textWhite")};
  animation: ${bounce} 2s ease-in-out infinite;

  &:first-child {
    animation-delay: 0s;
  }

  &:last-child {
    animation-delay: 0.5s;
  }
`;

const ZeroContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Zero = styled.span`
  font-size: 120px;
  font-weight: 900;
  color: ${st("colors", "textWhite")};
  animation: ${bounce} 2s ease-in-out infinite;
  animation-delay: 0.25s;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${st("colors", "textWhite")};
  margin-bottom: 15px;
  opacity: 0.3;
  animation: ${fadeIn} 1s ease-out 0.5s both;
`;

const Description = styled.p`
  font-size: 18px;
  color: ${st("colors", "textWhite")};
  opacity: 0.9;
  margin-bottom: 40px;
  max-width: 500px;
  line-height: 1.6;
  animation: ${fadeIn} 1s ease-out 0.7s both;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
  animation: ${fadeIn} 1s ease-out 0.9s both;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 25px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  transition: ${st("transitions", "base")};

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const PrimaryButton = styled(Button)`
  background: ${st("gradients", "primary")};
  color: ${st("colors", "textWhite")};
  transition: ${st("transitions", "base")};

  &:hover {
    background: ${st("gradients", "accent")};
  }
`;

const SecondaryButton = styled(Button)`
  background: ${st("gradients", "primary")};
  color: ${st("colors", "textWhite")};
  backdrop-filter: blur(10px);
  transition: ${st("transitions", "base")};

  &:hover {
    background: ${st("gradients", "accent")};
  }
`;

const ButtonIcon = styled.span`
  font-size: 18px;
`;

const SearchHint = styled.p`
  font-size: 14px;
  color: ${st("colors", "textWhite")};
  opacity: 0.7;
  animation: ${fadeIn} 1s ease-out 1.1s both;
`;
