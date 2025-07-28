import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 ${({ theme }) => theme.spacing.md};
`;

export const FormTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  margin: 0;
  text-align: center;
  user-select: none;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}),
    (max-height: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const FormSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  user-select: none;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  text-align: center;
  margin: 30px 0 5px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}),
    (max-height: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin: ${({ theme }) => theme.spacing.sm} 0;
  }
`;

export const FormDescription = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  text-align: center;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}),
    (max-height: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const FormInput = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  padding: 17px 12px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryLight};
  border-radius: 8px;
  width: 100%;
  margin-top: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}),
    (max-height: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin-top: 5px;
    padding: 10px 10px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-style: italic;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const FormFooter = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}),
    (max-height: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin-top: 5px;
  }
`;

export const FormCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FormLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  user-select: none;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}),
    (max-height: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const AccentLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.accent};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}),
    (max-height: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const SubmitButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.background};
  width: 100%;
  padding: 10px 0;
  margin-top: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}),
    (max-height: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const RegisterPrompt = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: 11px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}),
    (max-height: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
