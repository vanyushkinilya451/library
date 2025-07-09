import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { store } from './store/store';
import { GlobalStyles } from './styles/styled-components';

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </Provider>
  );
};
