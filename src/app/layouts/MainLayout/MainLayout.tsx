import { SessionProvider } from "app/providers/SessionProvider";
import { Outlet } from "react-router-dom";
import { Nav } from "widgets/Nav";
import { ContentContainer } from "./styles";

export const MainLayout = () => {
  return (
    <SessionProvider>
      <Nav />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </SessionProvider>
  );
};
