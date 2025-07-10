import { getUserAndSession } from 'entities/user';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserAndSession());
  }, []);
  return <>{children}</>;
};
