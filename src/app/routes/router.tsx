import { AuthLayout, MainLayout } from 'app/layouts';
import {
  ChangePasswordForm,
  LoginForm,
  RegisterForm,
  VerifyEmail,
  VerifyResetPassword,
} from 'features/auth';
import { ResetPasswordForm } from 'features/auth/ui/ResetPasswordForm';
import { AuthorPage } from 'pages/author';
import { BookPage } from 'pages/book';
import { Categories } from 'pages/categories';
import { HomePage } from 'pages/home';
import { MyBooks } from 'pages/mybooks';
import { NotFoundPage } from 'pages/not_found';
import { ProfilePage } from 'pages/profile';
import { createBrowserRouter } from 'react-router-dom';

export const ROUTES = {
  //paths for router
  PATHS: {
    HOME: '',
    CATEGORIES: 'categories',
    BOOK: 'book/:bookId',
    AUTHOR: 'author/:authorId',
    MYBOOKS: 'mybooks',
    PROFILE: 'profile/:userId',
    LOGIN: 'login',
    REGISTER: 'register',
    VERIFY_EMAIL: 'verify-email',
    VERIFY_RESET_PASSWORD: 'verify-reset-password',
    RESET_PASSWORD: 'reset-password',
    CHANGE_PASSWORD: 'change-password',
  },

  //paths for links and useNavigate
  LINKS: {
    HOME: '/',
    CATEGORIES: '/categories',
    BOOK: (id: string = ':bookId') => `/book/${id}`,
    AUTHOR: (id: string = ':authorId') => `/author/${id}`,
    MYBOOKS: '/mybooks',
    PROFILE: (id: string = ':userId') => `/profile/${id}`,
    LOGIN: '/login',
    REGISTER: '/register',
    VERIFY_EMAIL: '/verify-email',
    VERIFY_RESET_PASSWORD: '/verify-reset-password',
    RESET_PASSWORD: '/reset-password',
    CHANGE_PASSWORD: '/change-password',
  },
};

const mainRoutes = [
  { index: true, Component: HomePage },
  { path: ROUTES.PATHS.CATEGORIES, Component: Categories },
  { path: ROUTES.PATHS.BOOK, Component: BookPage },
  { path: ROUTES.PATHS.AUTHOR, Component: AuthorPage },
  { path: ROUTES.PATHS.MYBOOKS, Component: MyBooks },
  { path: ROUTES.PATHS.PROFILE, Component: ProfilePage },
];

const authRoutes = [
  { path: ROUTES.PATHS.LOGIN, Component: LoginForm },
  { path: ROUTES.PATHS.REGISTER, Component: RegisterForm },
  { path: ROUTES.PATHS.VERIFY_EMAIL, Component: VerifyEmail },
  { path: ROUTES.PATHS.VERIFY_RESET_PASSWORD, Component: VerifyResetPassword },
  { path: ROUTES.PATHS.RESET_PASSWORD, Component: ResetPasswordForm },
  { path: ROUTES.PATHS.CHANGE_PASSWORD, Component: ChangePasswordForm },
];

export const router = createBrowserRouter([
  { path: '/', Component: MainLayout, children: mainRoutes },
  { path: '/auth', Component: AuthLayout, children: authRoutes },
  { path: '*', Component: NotFoundPage },
]);
