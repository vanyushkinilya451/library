import type { User } from '@supabase/supabase-js';
import { logoutUser } from 'entities/user';
import { SearchPanel } from 'features/search';
import { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BookstackSvg } from 'shared/assets';
import {
  useAppDispatch,
  useAppSelector,
  useClickOutside,
  useModal,
} from 'shared/lib';
import { SkeletonLoader } from 'shared/ui';
import styled from 'styled-components';

export const Nav = () => {
  const navigate = useNavigate();

  const { user, isLoading }: { user: User | null; isLoading: boolean } =
    useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { isModalOpen, closeModal, toggleModal } = useModal();
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useClickOutside([dropdownRef, buttonRef], closeModal);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/auth/login');
  };

  return (
    <Navbar>
      <Brand>
        <BookstackIcon />
      </Brand>

      <LinksContainer>
        <Navlink to="/">Главная</Navlink>
        <Navlink to="/categories">Категории</Navlink>
      </LinksContainer>

      <SearchPanel />

      <LinksContainer>
        {isLoading ? (
          <SkeletonLoader
            width="200px"
            height="30px"
            background="var(--gradient-skeleton-dark)"
            margin="0 20px"
          />
        ) : !user && !isLoading ? (
          <>
            <Navlink to="/auth/login">Войти</Navlink>
            <Navlink to="/auth/register">Зарегистрироваться</Navlink>
          </>
        ) : (
          <>
            <Navlink to={`/profile/${user?.id}`}>Профиль</Navlink>
            <Navlink to="/mybooks">Мои книги</Navlink>
            <Logout onClick={handleLogout}>Выйти</Logout>
          </>
        )}
      </LinksContainer>

      {/* for mobiles */}
      <DropdownButton
        onClick={toggleModal}
        ref={buttonRef}
      >
        <BurgerLine
          line="first"
          isDropdown={isModalOpen}
        />
        <BurgerLine
          line="second"
          isDropdown={isModalOpen}
        />
        <BurgerLine
          line="third"
          isDropdown={isModalOpen}
        />
      </DropdownButton>

      {isModalOpen && (
        <Dropdown
          ref={dropdownRef}
          onClick={closeModal}
        >
          {isLoading ? (
            <SkeletonLoader
              width="200px"
              height="30px"
              background="var(--gradient-skeleton-dark)"
              margin="0 20px"
            />
          ) : !user && !isLoading ? (
            <>
              <DropdownLink to="/">Главная</DropdownLink>
              <DropdownLink to="/categories">Категории</DropdownLink>
              <DropdownLink to="/auth/login">Войти</DropdownLink>
              <DropdownLink to="/auth/register">
                Зарегистрироваться
              </DropdownLink>
            </>
          ) : (
            <>
              <DropdownLink to={`/profile/${user?.id}`}>Профиль</DropdownLink>
              <DropdownLink to="/mybooks">Мои книги</DropdownLink>
              <DropdownLogout onClick={handleLogout}>Выйти</DropdownLogout>
            </>
          )}
        </Dropdown>
      )}
    </Navbar>
  );
};

const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  width: min-content;
  display: none;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  padding: 0.5rem 0;
  z-index: 1001;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
  }
`;

const DropdownLink = styled(NavLink)`
  color: #212529;
  padding: 0.75rem 3rem;
  white-space: nowrap;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition:
    background-color 0.2s ease,
    padding-left 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
    padding-left: 1.25rem;
  }

  &.active {
    background-color: #ffe8cc;
    color: #d9480f;
  }
`;

const DropdownLogout = styled.a`
  color: #212529;
  padding: 0.75rem 3rem;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition:
    background-color 0.2s ease,
    padding-left 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
    padding-left: 1.25rem;
  }

  &.active {
    background-color: #ffe8cc;
    color: #d9480f;
  }
`;

const DropdownButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  gap: 6px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-right: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
  }
`;

const BurgerLine = styled.span<{
  isDropdown: boolean;
  line: 'first' | 'second' | 'third';
}>`
  width: 24px;
  height: 2px;
  background-color: var(--bs-white);
  border-radius: 1px;
  transition: all 0.3s ease;

  ${({ isDropdown, line }) =>
    isDropdown &&
    line === 'first' &&
    `
      transform: translateY(8px) rotate(45deg);
    `}

  ${({ isDropdown, line }) =>
    isDropdown &&
    line === 'second' &&
    `
      opacity: 0;
      transform: scaleX(0);
    `}

  ${({ isDropdown, line }) =>
    isDropdown &&
    line === 'third' &&
    `
      transform: translateY(-8px) rotate(-45deg);
    `}
`;

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

const Navlink = styled(NavLink)`
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
    color: var(--orange-accent) !important;
  }

  &:hover {
    color: var(--orange-accent);
  }
`;

const Logout = styled.a`
  color: white;
  white-space: nowrap;
  margin: 0 10px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  &:hover {
    color: var(--orange-accent);
  }
`;
