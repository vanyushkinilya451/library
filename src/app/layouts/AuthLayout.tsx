import { Outlet } from 'react-router-dom';
import { breakpoints } from 'shared/lib';
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

  @media (max-width: ${breakpoints.lg}) {
    z-index: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
`;

const Layout = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  min-width: auto;
  overflow: scroll;

  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
    height: 97%;
  }
`;
