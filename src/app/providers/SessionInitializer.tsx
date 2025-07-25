import { getUserAndSession } from 'entities/user';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib';

export const SessionInitializer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserAndSession());
  }, [dispatch]);
  return <>{children}</>;
};
