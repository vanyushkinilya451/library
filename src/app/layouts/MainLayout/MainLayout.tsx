import { SessionInitializer } from 'app/providers/SessionInitializer';
import { Outlet } from 'react-router-dom';
import { Nav } from 'widgets/Nav';
import { ContentContainer } from './styles';

export const MainLayout = () => {
  return (
    <SessionInitializer>
      <Nav />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </SessionInitializer>
  );
};
