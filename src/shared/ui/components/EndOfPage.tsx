import { st } from 'shared/lib';
import styled from 'styled-components';

export const EndOfPage = () => {
  return (
    <Container>
      <Line />
      <Text>Конец страницы</Text>
      <Line />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${st('spacing', 'md')};
  padding: ${st('spacing', 'lg')} 0;
`;

const Line = styled.div`
  height: 1px;
  background: ${st('colors', 'secondary')};
  flex: 1;
  max-width: 200px;
`;

const Text = styled.span`
  color: ${st('colors', 'textMuted')};
  font-size: ${st('fontSizes', 'sm')};
  font-weight: ${st('fontWeights', 'medium')};
  white-space: nowrap;
`;
