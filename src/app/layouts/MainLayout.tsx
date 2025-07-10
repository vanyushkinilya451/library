import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'widgets/Nav';
import { AuthProvider } from '../providers/AuthProvider';

export const MainLayout = () => {
  return (
    <AuthProvider>
      <Nav />
      <Container>
        <Outlet />
      </Container>
    </AuthProvider>
  );
};

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
