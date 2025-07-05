import { handleLogout } from 'features/auth/lib/handleLogout';
import { SearchPanel } from 'features/search';
import NavContainer from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { BookstackSvg } from 'shared/assets';
import { useAppSelector } from 'shared/lib';

export const Nav = () => {
  const session = useAppSelector((state) => state.session);
  const navigate = useNavigate();
  const isLoggedIn = !!session.session;

  return (
    <Navbar
      bg='dark'
      className='px-20'
    >
      <Navbar.Brand className='ms-4'>
        <BookstackSvg className='nav__icon' />
      </Navbar.Brand>

      <NavContainer>
        <NavLink
          to={'/'}
          className='nav__link'
        >
          Главная
        </NavLink>
        <NavLink
          to={'/categories'}
          className='nav__link'
        >
          Категории
        </NavLink>
      </NavContainer>

      <SearchPanel />

      <NavContainer>
        {!isLoggedIn ? (
          <>
            <NavLink
              to={'/auth/login'}
              className='nav__link'
            >
              Войти
            </NavLink>
            <NavLink
              to={'/auth/register'}
              className='nav__link'
            >
              Зарегистрироваться
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to={'/profile'}
              className='nav__link'
            >
              Профиль
            </NavLink>
            <NavLink
              to={'/mybooks'}
              className='nav__link'
            >
              Мои книги
            </NavLink>
            <a
              onClick={() => {
                handleLogout();
                navigate('/auth/login');
              }}
              className='nav__link'
            >
              Выйти
            </a>
          </>
        )}
      </NavContainer>
    </Navbar>
  );
};
