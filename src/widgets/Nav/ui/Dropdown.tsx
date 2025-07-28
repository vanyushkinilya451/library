import type { User } from '@supabase/supabase-js';
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
    navigate('/auth/login');
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
  background-color: white;
  border-radius: 10px;
  box-shadow: ${st('shadows', 'modal')};
  z-index: ${st('zIndices', 'modal')};

  @media (max-width: ${st('breakpoints', 'sm')}) {
    display: flex;
    flex-direction: column;
  }

  :first-child {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;

const Link = css`
  color: ${st('colors', 'textPrimary')};
  padding: 0.75rem 3rem;
  white-space: nowrap;
  text-decoration: none;
  font-weight: ${st('fontWeights', 'medium')};
  font-size: ${st('fontSizes', 'md')};
  transition: ${st('transitions', 'base')};
  cursor: pointer;
  text-align: left;

  &.active {
    background-color: ${st('colors', 'accentLight')};
  }

  &:hover {
    background-color: ${st('opacity', 'hover')};
  }
`;

const DropdownLink = styled(NavLink)`
  ${Link}
`;

const DropdownLogout = styled.button`
  ${Link}
`;

const Button = styled.button`
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
