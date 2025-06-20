import { Outlet } from "react-router-dom";
import { Nav } from "widgets/Nav";

export const MainLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>

  );
};