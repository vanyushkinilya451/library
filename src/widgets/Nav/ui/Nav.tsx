import { SearchPanel } from "features/search";
import NavContainer from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import BookstackSvg from 'shared/assets/icons/bookstack.svg';


export const Nav = () => {
  return (
    <Navbar bg="dark" className="px-20">

      <Navbar.Brand className="ms-4">
        <BookstackSvg className="nav__icon" />
      </Navbar.Brand>

      <NavContainer>
        <NavLink to={'/'} className="nav__link">Главная</NavLink>
        <NavLink to={'/categories'} className="nav__link">Категории</NavLink>
        <NavLink to={'/favorites'} className="nav__link">Популярные книги</NavLink>
      </NavContainer>

      <SearchPanel />

      <NavContainer>
        <NavLink to={"/auth/login"} className="nav__link">Войти</NavLink>
        <NavLink to={"/auth/register"} className="nav__link">Зарегистрироваться</NavLink>
      </NavContainer>

    </Navbar>
  )
}
