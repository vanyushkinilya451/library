import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'widgets/Nav';

export const MainLayout = () => {
  return (
    <>
      <Nav />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
