import { Outlet } from 'react-router-dom';
import { GradientBackground } from 'shared/ui';
import { AuthWrapper, BackgroundContainer, ContentContainer } from './styles';

export const AuthLayout = () => {
  return (
    <AuthWrapper>
      <ContentContainer>
        <Outlet />
      </ContentContainer>

      <BackgroundContainer>
        <GradientBackground />
      </BackgroundContainer>
    </AuthWrapper>
  );
};
