import { Outlet } from 'react-router-dom';
import { GradientBackground } from 'shared/ui';
import styled from 'styled-components';

export const AuthLayout = () => {
  return (
    <Layout>
      <FormContainer>
        <Outlet />
      </FormContainer>

      <BackgroundContainer>
        <GradientBackground />
      </BackgroundContainer>
    </Layout>
  );
};

const BackgroundContainer = styled.div`
  height: 100%;
  flex: 0 0 50%;
`;

const Layout = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const FormContainer = styled.div`
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: auto;
`;
