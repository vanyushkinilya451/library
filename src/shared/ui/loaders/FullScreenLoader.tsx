import { st } from 'shared/lib';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const bounce = keyframes`
  0%, 80%, 100% {
    transform: translateY(0) scale(1);
  }
  40% {
    transform: translateY(-20px) scale(1.1);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${st('zIndices', 'modal')};
  animation: ${fadeIn} 0.3s ease-out;
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;
  background: ${st('colors', 'background')};
  backdrop-filter: blur(20px);
  border-radius: ${st('borderRadius', 'xl')};
  box-shadow: ${st('shadows', 'modal')};
  border: 1px solid ${st('colors', 'secondary')};
  animation: ${pulse} 2s ease-in-out infinite;
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;

const SpinnerRing = styled.div<{ delay: number; size: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 3px solid transparent;
  border-top: 3px solid ${st('colors', 'primary')};
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;
  animation-delay: ${(props) => props.delay}s;
  transform: translate(-50%, -50%);
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Dot = styled.div<{ delay: number }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${st('gradients', 'primary')};
  animation: ${bounce} 1.4s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  box-shadow: ${st('shadows', 'card')};
`;

const LoadingText = styled.div`
  font-size: ${st('fontSizes', 'md')};
  font-weight: 600;
  color: ${st('colors', 'textPrimary')};
  text-align: center;
  background: ${st('gradients', 'primary')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.5px;
`;

const SubText = styled.div`
  font-size: ${st('fontSizes', 'md')};
  color: ${st('colors', 'textSecondary')};
  text-align: center;
  margin-top: 5px;
`;

interface FullScreenLoaderProps {
  text?: string;
  subText?: string;
  showDots?: boolean;
}

export const FullScreenLoader = ({
  text = 'Загрузка...',
  subText = 'Пожалуйста, подождите',
  showDots = true,
}: FullScreenLoaderProps) => {
  return (
    <Overlay>
      <LoaderContainer>
        <SpinnerContainer>
          <SpinnerRing
            delay={0}
            size={80}
          />
          <SpinnerRing
            delay={-0.5}
            size={60}
          />
          <SpinnerRing
            delay={-1}
            size={40}
          />
        </SpinnerContainer>

        {showDots && (
          <DotsContainer>
            <Dot delay={0} />
            <Dot delay={0.16} />
            <Dot delay={0.32} />
          </DotsContainer>
        )}

        <div>
          <LoadingText>{text}</LoadingText>
          <SubText>{subText}</SubText>
        </div>
      </LoaderContainer>
    </Overlay>
  );
};
