import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { GlobalStyles } from "./styles/styled-components";


export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  );
};
