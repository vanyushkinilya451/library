import { AuthLayout, MainLayout } from 'app/layouts';
import { LoginForm, RegisterForm, VerifyEmail } from 'features/auth';
import { AuthorPage } from 'pages/author';
import { BookPage } from 'pages/book';
import { Categories } from 'pages/categories';
import { HomePage } from 'pages/home';
import { Mybooks } from 'pages/mybooks';
import { ProfilePage } from 'pages/profile';
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
      {
        path: '/mybooks',
        Component: Mybooks,
      },
      {
        path: '/profile/:userId',
        Component: ProfilePage,
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
      {
        path: 'verify-email',
        Component: VerifyEmail,
      },
    ],
  },
]);
