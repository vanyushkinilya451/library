import { useEffect, useState } from 'react';
import { useAppSelector } from 'shared/lib';

export const useAuth = () => {
  const { session, user } = useAppSelector((state) => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log('USER:', user, '\n', 'SESSION', session);
  useEffect(() => {
    if (session) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [session]);

  return { isLoggedIn };
};
