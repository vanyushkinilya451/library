import { Link } from 'react-router-dom';
import { st } from 'shared/lib';
import styled from 'styled-components';

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 ${st('spacing', 'md')};
`;

export const FormTitle = styled.h1`
  font-size: ${st('fontSizes', 'xxl')};
  color: ${st('colors', 'textPrimary')};
  font-weight: ${st('fontWeights', 'black')};
  margin: 0;
  text-align: center;
  user-select: none;
  white-space: nowrap;

  @media (max-width: ${st('breakpoints', 'sm')}),
    (max-height: ${st('breakpoints', 'sm')}) {
    font-size: ${st('fontSizes', 'xl')};
  }
`;

export const FormSubtitle = styled.h2`
  font-size: ${st('fontSizes', 'md')};
  color: ${st('colors', 'textMuted')};
  user-select: none;
  font-weight: ${st('fontWeights', 'normal')};
  text-align: center;
  margin: 30px 0 5px 0;

  @media (max-width: ${st('breakpoints', 'sm')}),
    (max-height: ${st('breakpoints', 'sm')}) {
    font-size: ${st('fontSizes', 'sm')};
    margin: ${st('spacing', 'sm')} 0;
  }
`;

export const FormDescription = styled.h3`
  font-size: ${st('fontSizes', 'md')};
  color: ${st('colors', 'textMuted')};
  margin: 0;
  font-style: italic;
  font-weight: ${st('fontWeights', 'normal')};
  text-align: center;
  user-select: none;

  @media (max-width: ${st('breakpoints', 'sm')}),
    (max-height: ${st('breakpoints', 'sm')}) {
    font-size: ${st('fontSizes', 'sm')};
  }
`;

export const FormInput = styled.input`
  font-size: ${st('fontSizes', 'sm')};
  color: ${st('colors', 'textPrimary')};
  font-weight: ${st('fontWeights', 'normal')};
  padding: 17px 12px;
  border: 1px solid ${st('colors', 'secondary')};
  border-radius: ${st('borderRadius', 'md')};
  background: transparent;
  width: 100%;
  margin-top: 18px;
  transition: ${st('transitions', 'colors')};

  @media (max-width: ${st('breakpoints', 'sm')}),
    (max-height: ${st('breakpoints', 'sm')}) {
    font-size: ${st('fontSizes', 'xs')};
    margin-top: 5px;
    padding: 10px 10px;
  }

  &::placeholder {
    color: ${st('colors', 'textMuted')};
    font-style: italic;
  }

  &:focus {
    outline: 2px solid ${st('colors', 'primary')};
    border-color: ${st('colors', 'primary')};
  }
`;

export const FormFooter = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  justify-content: space-between;

  @media (max-width: ${st('breakpoints', 'sm')}),
    (max-height: ${st('breakpoints', 'sm')}) {
    font-size: ${st('fontSizes', 'xs')};
    margin-top: 5px;
  }
`;

export const FormCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FormLabel = styled.label`
  font-size: ${st('fontSizes', 'sm')};
  color: ${st('colors', 'textMuted')};
  user-select: none;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: ${st('breakpoints', 'sm')}),
    (max-height: ${st('breakpoints', 'sm')}) {
    font-size: ${st('fontSizes', 'xs')};
  }
`;

export const AccentLink = styled(Link)`
  font-size: ${st('fontSizes', 'sm')};
  color: ${st('colors', 'accent')};
  transition: ${st('transitions', 'colors')};

  @media (max-width: ${st('breakpoints', 'sm')}),
    (max-height: ${st('breakpoints', 'sm')}) {
    font-size: ${st('fontSizes', 'xs')};
  }

  &:hover {
    opacity: ${st('opacity', 'hover')};
  }
`;

export const SubmitButton = styled.button`
  font-size: ${st('fontSizes', 'sm')};
  border-radius: ${st('borderRadius', 'md')};
  border-style: none;
  background: ${st('colors', 'primaryDark')};
  color: ${st('colors', 'textWhite')};
  width: 100%;
  padding: 10px 0;
  margin-top: 22px;
  transition: ${st('transitions', 'colors')};

  @media (max-width: ${st('breakpoints', 'sm')}),
    (max-height: ${st('breakpoints', 'sm')}) {
    font-size: ${st('fontSizes', 'xs')};
  }

  &:hover {
    opacity: ${st('opacity', 'hover')};
  }

  &:disabled {
    opacity: ${st('opacity', 'disabled')};
    cursor: not-allowed;
  }
`;

export const RegisterPrompt = styled.span`
  font-size: ${st('fontSizes', 'sm')};
  color: ${st('colors', 'textPrimary')};
  margin-top: 11px;

  @media (max-width: ${st('breakpoints', 'sm')}),
    (max-height: ${st('breakpoints', 'sm')}) {
    font-size: ${st('fontSizes', 'xs')};
  }
`;
