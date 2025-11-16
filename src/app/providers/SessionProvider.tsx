import { getUserAndSession } from "entities/user";
import { useEffect, type ReactNode } from "react";
import { useAppDispatch } from "shared/lib";

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserAndSession());
  }, []);

  return <>{children}</>;
};
