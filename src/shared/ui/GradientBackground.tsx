import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { 
    background-position: 0% 50%;
    filter: hue-rotate(0deg);
  }
  25% { 
    background-position: 100% 50%;
    filter: hue-rotate(90deg);
  }
  50% { 
    background-position: 100% 100%;
    filter: hue-rotate(180deg);
  }
  75% { 
    background-position: 0% 100%;
    filter: hue-rotate(270deg);
  }
  100% { 
    background-position: 0% 50%;
    filter: hue-rotate(360deg);
  }
`;

export const GradientBackground = () => {
  return <Gradient></Gradient>;
};

const Gradient = styled.div`
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(
    45deg,
    #667eea 0%,
    #764ba2 15%,
    #f093fb 30%,
    #f5576c 45%,
    #4facfe 60%,
    #00f2fe 75%,
    #667eea 100%
  );
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
`;
