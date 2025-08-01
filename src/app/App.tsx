import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeWrapper } from "./providers/ThemeWrapper";
import { router } from "./routes";
import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <RouterProvider router={router} />
      </ThemeWrapper>
    </Provider>
  );
};
