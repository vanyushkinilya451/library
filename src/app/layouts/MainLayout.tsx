import { SessionInitializer } from 'app/providers/SessionInitializer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'widgets/Nav';

export const MainLayout = () => {
  return (
    <SessionInitializer>
      <Nav />
      <Container>
        <Outlet />
      </Container>
    </SessionInitializer>
  );
};

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
`;
