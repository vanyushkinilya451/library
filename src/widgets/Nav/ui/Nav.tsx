import type { User } from '@supabase/supabase-js';
import { SearchPanel } from 'features/search';
import { NavLink } from 'react-router-dom';
import { BookstackSvg } from 'shared/assets';
import { useAppSelector } from 'shared/lib';
import styled, { css } from 'styled-components';
import { AuthLinks } from './AuthLinks';
import { Dropdown } from './Dropdown';

export const Nav = () => {
  const { user, isLoading }: { user: User | null; isLoading: boolean } =
    useAppSelector((state) => state.user);

  return (
    <Navbar>
      {/* DESKTOP ONLY */}
      <Brand>
        <BookstackIcon />
      </Brand>

      <LinksContainer>
        <Navlink to="/">Главная</Navlink>
        <Navlink to="/categories">Категории</Navlink>
      </LinksContainer>

      <SearchPanel />

      <LinksContainer>
        <AuthLinks
          isLoading={isLoading}
          user={user}
        />
      </LinksContainer>

      {/* MOBILES ONLY */}
      <Dropdown
        isLoading={isLoading}
        user={user}
      />
    </Navbar>
  );
};

const Navbar = styled.nav`
  z-index: 1000;
  background-color: #212529;
  position: sticky;
  top: 0;
  border-bottom: 1px solid var(--black);
  box-shadow: var(--shadow-nav);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: left;
  }
`;

const Brand = styled.div`
  margin-left: 1.5rem;
`;

const BookstackIcon = styled(BookstackSvg)`
  width: 30px;
  height: 30px;
  margin-right: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 25px;
    height: 25px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const Link = css`
  color: white;
  white-space: nowrap;
  margin: 0 10px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin: 0 5px;
  }

  &.active {
    color: var(--orange-accent);
  }

  &:hover {
    color: var(--orange-accent);
  }
`;

export const Navlink = styled(NavLink)`
  ${Link}
`;

export const Logout = styled.button`
  ${Link}
  cursor: pointer;
`;
