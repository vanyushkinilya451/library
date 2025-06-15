import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./styles/global";
const router = createBrowserRouter(AppRoutes);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  )
}