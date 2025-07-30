import { st } from 'shared/lib';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;

  @media (max-width: ${st('breakpoints', 'lg')}) {
    padding-left: ${st('spacing', 'md')};
  }
`;
