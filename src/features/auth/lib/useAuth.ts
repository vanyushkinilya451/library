import { useEffect, useState } from 'react';
import { supabase, useAppDispatch, useAppSelector } from 'shared/lib';
import { userSlice } from 'shared/reducers/UserSlice';

export const useAuth = () => {
  const { session, user } = useAppSelector((state) => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const { setUser } = userSlice.actions;

  useEffect(() => {
    if (session && user) {
      setIsLoggedIn(true);
      setIsLoading(false);
    } else {
      async function checkUser() {
        try {
          const {
            data: { user: user },
          } = await supabase.auth.getUser();
          const {
            data: { session: session },
          } = await supabase.auth.getSession();

          if (user && session) {
            setIsLoggedIn(true);
            dispatch(setUser({ user: user, session: session }));
            setIsLoading(false);
          }

          if (!user && !session) {
            setIsLoggedIn(false);
            setIsLoading(false);
          }

          console.log('USER:', user, 'SESSION:', session);
        } catch (error) {
          console.error(error);
        }
      }
      checkUser();
    }
  }, [session]);

  return { isLoggedIn, isLoading };
};
