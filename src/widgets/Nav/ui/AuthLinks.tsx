import type { User } from '@supabase/supabase-js';
import { logoutUser } from 'entities/user';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib';
import { SkeletonLoader } from 'shared/ui';
import { Logout, Navlink } from './Nav';

type Props = {
  isLoading: boolean;
  user: User | null;
};

export const AuthLinks = ({ isLoading, user }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/auth/login');
  };

  return isLoading ? (
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
  );
};
