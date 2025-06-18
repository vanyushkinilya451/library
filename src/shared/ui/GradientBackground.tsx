import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  from { filter: hue-rotate(0deg); }
  to { filter: hue-rotate(360deg); }
`;

export const GradientBackground = styled.div`
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
  animation: ${gradientAnimation} 12s linear infinite alternate;
`;