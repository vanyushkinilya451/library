import { st } from "shared/lib";
import styled, { keyframes } from "styled-components";

export const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(3deg); }
`;

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
  60% { transform: translateY(-4px); }
`;

export const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const slideIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.div`
  position: relative;
  height: 100vh;
  height: 100dvh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${st("gradients", "primary")};
`;

export const BackgroundGradient = styled.div`
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

export const FloatingEnvelopes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

export const Envelope = styled.div<{ delay: number }>`
  position: absolute;
  width: 40px;
  height: 30px;
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

  @media (max-width: ${st("breakpoints", "sm")}) {
    &:nth-child(5) {
      display: none;
    }
  }
`;

export const EnvelopeBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${st("gradients", "multicolor")};
  border-radius: 2px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  opacity: 0.3;
`;

export const EnvelopeFlap = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 10px;
  background: ${st("gradients", "blueToAccent")};
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
  opacity: 0.4;
`;

export const EnvelopeSeal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: ${st("colors", "accent")};
  border-radius: 50%;
  opacity: 0.6;
`;

export const Content = styled.div`
  text-align: center;
  z-index: 10;
  animation: ${slideIn} 1s ease-out;
  max-width: 600px;
  padding: 0 20px;
`;

export const EmailIcon = styled.div`
  margin-bottom: 30px;
  animation: ${bounce} 2s ease-in-out infinite;

  @media (max-width: ${st("breakpoints", "md")}),
    (max-height: ${st("breakpoints", "md")}) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  display: inline-block;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

export const MailIcon = styled.div`
  font-size: ${st("fontSizes", "xxl")};
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
`;

export const Title = styled.h1`
  font-size: ${st("fontSizes", "xl")};
  font-weight: 700;
  color: white;
  margin: 0 0 20px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${st("breakpoints", "md")}),
    (max-height: ${st("breakpoints", "md")}) {
    margin-bottom: 5px;
  }
`;

export const Description = styled.p`
  font-size: ${st("fontSizes", "md")};
  color: white;
  line-height: 1.6;
  margin: 0 0 30px 0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${st("breakpoints", "md")}),
    (max-height: ${st("breakpoints", "md")}) {
    margin-bottom: 10px;
  }
`;

export const InfoBox = styled.div`
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

  @media (max-width: ${st("breakpoints", "md")}),
    (max-height: ${st("breakpoints", "md")}) {
    margin-bottom: 25px;
    padding: 10px;
  }
`;

export const InfoIcon = styled.span`
  font-size: ${st("fontSizes", "md")};
  flex-shrink: 0;
`;

export const InfoText = styled.span`
  font-size: ${st("fontSizes", "md")};
  color: white;
  text-align: left;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 25px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: ${st("fontSizes", "md")};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  min-width: 160px;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    background: ${st("gradients", "accent")};
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${st("colors", "primary")};
  color: white;

  &:hover {
    background: ${st("gradients", "accent")};
    opacity: ${st("opacity", "hover")};
  }
`;

export const ButtonIcon = styled.span`
  font-size: ${st("fontSizes", "md")};
`;
