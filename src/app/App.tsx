import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { GlobalStyles } from "./styles/global";


export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  );
};
