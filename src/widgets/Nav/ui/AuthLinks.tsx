import type { User } from '@supabase/supabase-js';
import { ROUTES } from 'app/routes/router';
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
    navigate(ROUTES.LINKS.LOGIN);
  };

  if (!user && isLoading) {
    return (
      <SkeletonLoader
        width="200px"
        height="30px"
        margin="0 20px"
      />
    );
  }

  if (!user) {
    return (
      <>
        <Navlink to={ROUTES.LINKS.LOGIN}>Войти</Navlink>
        <Navlink to={ROUTES.LINKS.REGISTER}>Зарегистрироваться</Navlink>
      </>
    );
  }

  return (
    <>
      <Navlink to={ROUTES.LINKS.MYBOOKS}>Мои книги</Navlink>
      <Navlink to={ROUTES.LINKS.PROFILE}>Профиль</Navlink>
      <Logout onClick={handleLogout}>Выйти</Logout>
    </>
  );
};
