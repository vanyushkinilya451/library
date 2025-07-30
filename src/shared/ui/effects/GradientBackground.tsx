import { st } from 'shared/lib';
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

const floatAnimation = keyframes`
  0%, 100% { 
    transform: translateY(0px);
  }
  50% { 
    transform: translateY(-20px);
  }
`;

export const GradientBackground = () => {
  return (
    <Gradient>
      <Circle size="large" />
      <Circle size="medium" />
      <Circle size="small" />
      <Circle size="large" />
      <Circle size="medium" />
      <Circle size="small" />
      <Circle size="medium" />
      <Circle size="small" />
    </Gradient>
  );
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
  background: ${st('gradients', 'background')};
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
`;

const Circle = styled.div<{ size: 'small' | 'medium' | 'large' }>`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${floatAnimation} 4s ease-in-out infinite;

  &:nth-child(1) {
    width: 80px;
    height: 80px;
    top: 15%;
    left: 8%;
  }
  &:nth-child(2) {
    width: 60px;
    height: 60px;
    top: 75%;
    right: 10%;
  }
  &:nth-child(3) {
    width: 40px;
    height: 40px;
    top: 35%;
    left: 25%;
  }
  &:nth-child(4) {
    width: 80px;
    height: 80px;
    top: 85%;
    left: 70%;
  }
  &:nth-child(5) {
    width: 60px;
    height: 60px;
    top: 25%;
    right: 25%;
  }
  &:nth-child(6) {
    width: 40px;
    height: 40px;
    top: 65%;
    left: 45%;
  }
  &:nth-child(7) {
    width: 60px;
    height: 60px;
    top: 5%;
    left: 50%;
  }
  &:nth-child(8) {
    width: 40px;
    height: 40px;
    top: 45%;
    right: 15%;
  }
`;
