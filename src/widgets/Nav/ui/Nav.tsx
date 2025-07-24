import type { User } from '@supabase/supabase-js';
import { logoutUser } from 'entities/user';
import { SearchPanel } from 'features/search';
import NavContainer from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { BookstackSvg } from 'shared/assets';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { SkeletonLoader } from 'shared/ui';

export const Nav = () => {
  const navigate = useNavigate();
  const { user, isLoading }: { user: User | null; isLoading: boolean } =
    useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/auth/login');
  };
  return (
    <Navbar
      bg="dark"
      className="px-20"
    >
      <Navbar.Brand className="ms-4">
        <BookstackSvg className="nav__icon" />
      </Navbar.Brand>

      <NavContainer>
        <NavLink
          to={'/'}
          className="nav__link"
        >
          Главная
        </NavLink>
        <NavLink
          to={'/categories'}
          className="nav__link"
        >
          Категории
        </NavLink>
      </NavContainer>

      <SearchPanel />

      <NavContainer>
        {isLoading ? (
          <SkeletonLoader
            width="200px"
            height="30px"
            background="var(--gradient-skeleton-dark)"
            margin="0 20px"
          />
        ) : !user && !isLoading ? (
          <>
            <NavLink
              to={'/auth/login'}
              className="nav__link"
            >
              Войти
            </NavLink>
            <NavLink
              to={'/auth/register'}
              className="nav__link"
            >
              Зарегистрироваться
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to={`/profile/${user?.id}`}
              className="nav__link"
            >
              Профиль
            </NavLink>
            <NavLink
              to={'/mybooks'}
              className="nav__link"
            >
              Мои книги
            </NavLink>
            <a
              onClick={() => handleLogout()}
              className="nav__link"
            >
              Выйти
            </a>
          </>
        )}
      </NavContainer>
    </Navbar>
  );
};
