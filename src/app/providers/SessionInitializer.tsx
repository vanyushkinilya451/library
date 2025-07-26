import { getUserAndSession } from 'entities/user';
import { useEffect, type FC, type ReactNode } from 'react';
import { useAppDispatch } from 'shared/lib';

type Props = {
  children: ReactNode;
};

export const SessionInitializer: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserAndSession());
  }, [dispatch]);
  return <>{children}</>;
};
