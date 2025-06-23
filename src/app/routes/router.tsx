import { AuthLayout, MainLayout } from 'app/layouts';
import { LoginForm, RegisterForm } from 'features/auth';
import { Categories } from 'pages/categories';
import { HomePage } from 'pages/home';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: '/categories',
        Component: Categories,
      },
    ],
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: LoginForm,
      },
      {
        path: 'register',
        Component: RegisterForm,
      },
    ],
  },
]);
