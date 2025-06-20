import { SearchPanel } from "features/search";
import NavLink from "react-bootstrap/NavLink";
import { Link } from "react-router-dom";
import BookstackSvg from 'shared/assets/icons/bookstack.svg';
import styled from "styled-components";

export const HomePage = () => {
  return (
    <Nav>
      <NavLeft>
        <NavLink as={Link} to={'/'} className="nav-link">
          <StyledBookstackSvg />
        </NavLink>
        <NavLink as={Link} to={'/categories'} className="nav-link">Категории</NavLink>
        <NavLink as={Link} to={'/favorites'} className="nav-link">Популярные</NavLink>
      </NavLeft>

      <NavCenter>
        <SearchPanel />
      </NavCenter>

      <NavRight>
        <AuthLink to={"/auth/login"}>Войти</AuthLink>
        <AuthLinkBordered to={"/auth/register"}>Зарегистрироваться</AuthLinkBordered>
      </NavRight>

    </Nav>
  )
}
const StyledBookstackSvg = styled(BookstackSvg)`
  width: 40px;
  height: 40px;
`

const Nav = styled.nav`
  display: flex;
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

const NavLeft = styled.div`
  margin-left: 20px;
  display: flex;
  gap: 30px;
  height: 100%;
  justify-content: center;
  align-items: center;
  
`
const NavCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 400px;
`

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 20px;
`

const AuthLink = styled(Link)`
  transition: opacity 0.3s ease;
  &:hover{
    opacity: 0.7;
  }
`

const AuthLinkBordered = styled(AuthLink)`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 5px 10px;

`