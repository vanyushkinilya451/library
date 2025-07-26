import { theme } from 'shared/lib';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;

  @media (max-width: ${theme.breakpoints.lg}) {
    padding-left: ${({ theme }) => theme.spacing.md};
  }
`;
