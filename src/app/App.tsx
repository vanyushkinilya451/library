import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./providers/store";
import { ThemeProvider } from "./providers/ThemeProvider";
import { router } from "./routes/router";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};
