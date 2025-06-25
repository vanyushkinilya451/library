import { AuthLayout, MainLayout } from 'app/layouts';
import { LoginForm, RegisterForm } from 'features/auth';
import { AuthorPage } from 'pages/author/ui/AuthorPage';
import { BookPage } from 'pages/book';
import { Categories } from 'pages/categories';
import { HomePage } from 'pages/home';
import { createBrowserRouter } from 'react-router-dom';
import { NotFound404 } from 'shared/ui';

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
      {
        path: '/book/:bookId',
        Component: BookPage,
      },
      {
        path: '/author/:authorId',
        Component: AuthorPage,
      },
    ],
  },
  {
    path: '*',
    Component: NotFound404,
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
