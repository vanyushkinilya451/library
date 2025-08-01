import { st } from "shared/lib";
import { styled } from "styled-components";

export const BackgroundContainer = styled.div`
  height: 100%;
  flex: 0 0 50%;

  @media (max-width: ${st("breakpoints", "lg")}) {
    z-index: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
`;

export const AuthWrapper = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${st("colors", "background")};

  @media (max-width: ${st("breakpoints", "lg")}) {
    width: 100%;
    height: 97%;
  }
`;
