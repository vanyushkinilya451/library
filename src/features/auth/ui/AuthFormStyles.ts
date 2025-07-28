import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 20px;
`;

export const FormTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: var(--auth-primary-text);
  font-weight: 900;
  line-height: 46px;
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
  color: var(--auth-secondary-text);
  user-select: none;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  margin: 30px 0 5px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}),
    (max-height: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin: 5px 0 5px 0;
  }
`;

export const FormDescription = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: var(--auth-secondary-text);
  margin: 0;
  font-style: italic;
  font-weight: 400;
  text-align: center;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}),
    (max-height: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const FormInput = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: black;
  font-weight: 400;
  padding: 17px 12px;
  border: 1px solid var(--auth-border);
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
    color: var(--auth-secondary-text);
    font-style: italic;
  }

  &:focus {
    outline: 2px solid var(--auth-secondary-text);
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
  color: var(--auth-secondary-text);
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
  color: var(--auth-accent);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}),
    (max-height: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const SubmitButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-radius: 8px;
  background: var(--auth-dark-blue);
  color: var(--auth-light-text);
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
  color: var(--auth-primary-text);
  margin-top: 11px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}),
    (max-height: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
