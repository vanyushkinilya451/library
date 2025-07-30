import type { User } from '@supabase/supabase-js';
import { ROUTES } from 'app/routes/router';
import { logoutUser } from 'entities/user';
import { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { st, useAppDispatch, useClickOutside, useModal } from 'shared/lib';
import { SkeletonLoader } from 'shared/ui';
import styled, { css } from 'styled-components';

type Props = {
  isLoading: boolean;
  user: User | null;
};

export const Dropdown = ({ isLoading, user }: Props) => {
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const { isModalOpen, closeModal, toggleModal } = useModal();
  useClickOutside([dropdownRef, buttonRef], closeModal);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate(ROUTES.LINKS.LOGIN);
  };

  return (
    <>
      <Button
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
      </Button>
      {isModalOpen && (
        <DropdownContainer
          ref={dropdownRef}
          onClick={closeModal}
        >
          {isLoading ? (
            <SkeletonLoader
              width="200px"
              height="30px"
              margin="0 20px"
            />
          ) : !user && !isLoading ? (
            <>
              <DropdownLink to={ROUTES.LINKS.HOME}>Главная</DropdownLink>
              <DropdownLink to={ROUTES.LINKS.CATEGORIES}>
                Категории
              </DropdownLink>
              <DropdownLink to={ROUTES.LINKS.LOGIN}>Войти</DropdownLink>
              <DropdownLink to={ROUTES.LINKS.REGISTER}>
                Зарегистрироваться
              </DropdownLink>
            </>
          ) : (
            <>
              <DropdownLink to={ROUTES.LINKS.HOME}>Главная</DropdownLink>
              <DropdownLink to={ROUTES.LINKS.CATEGORIES}>
                Категории
              </DropdownLink>
              <DropdownLink to={ROUTES.LINKS.PROFILE}>Профиль</DropdownLink>
              <DropdownLink to={ROUTES.LINKS.MYBOOKS}>Мои книги</DropdownLink>
              <DropdownLogout onClick={handleLogout}>Выйти</DropdownLogout>
            </>
          )}
        </DropdownContainer>
      )}
    </>
  );
};

const DropdownContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  width: min-content;
  display: none;
  background-color: ${st('colors', 'background')};
  border-radius: ${st('borderRadius', 'lg')};
  box-shadow: ${st('shadows', 'modal')};
  z-index: ${st('zIndices', 'modal')};
  transition: ${st('transitions', 'colors')};

  @media (max-width: ${st('breakpoints', 'sm')}) {
    display: flex;
    flex-direction: column;
  }

  :first-child {
    border-top-right-radius: ${st('borderRadius', 'lg')};
    border-top-left-radius: ${st('borderRadius', 'lg')};
  }
`;

const Link = css`
  color: ${st('colors', 'textPrimary')};
  padding: 0.75rem 2.5rem;
  white-space: nowrap;
  text-decoration: none;
  font-weight: ${st('fontWeights', 'medium')};
  font-size: ${st('fontSizes', 'md')};
  transition: ${st('transitions', 'colors')};
  cursor: pointer;
  text-align: left;

  &.active {
    background-color: ${st('colors', 'primaryLight')};
    color: ${st('colors', 'textWhite')};
  }

  &:hover {
    background-color: ${st('colors', 'backgroundSecondary')};
  }
`;

const DropdownLink = styled(NavLink)`
  ${Link}
`;

const DropdownLogout = styled.button`
  ${Link}
  border-style: none;
  color: ${st('colors', 'danger')};
`;

const Button = styled.button`
  display: none;
  width: 32px;
  height: 32px;
  gap: 0.4rem;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: ${st('breakpoints', 'sm')}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const BurgerLine = styled.span<{
  isDropdown: boolean;
  line: 'first' | 'second' | 'third';
}>`
  width: 24px;
  height: 2px;
  background-color: ${st('colors', 'textWhite')};
  border-radius: ${st('borderRadius', 'xs')};
  transition: ${st('transitions', 'transform')};
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
    `};
`;
