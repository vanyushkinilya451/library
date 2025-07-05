import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { store } from './store/store';
import { GlobalStyles } from './styles/styled-components';
import { AuthProvider } from './providers/AuthProvider';

export const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <GlobalStyles />
    </Provider>
  );
};
