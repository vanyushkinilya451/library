import { st } from 'shared/lib';
import styled, { keyframes } from 'styled-components';

export const DotLoader = () => {
  return (
    <DotContainer>
      <Dot delay={0} />
      <Dot delay={0.16} />
      <Dot delay={0.32} />
    </DotContainer>
  );
};

const bounce = keyframes`
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 20px;
`;

const Dot = styled.div<{ delay: number }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${st('colors', 'accent')};
  animation: ${bounce} 1.4s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;
