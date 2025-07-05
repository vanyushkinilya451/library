import { useEffect } from 'react';
import { supabase, useAppDispatch } from 'shared/lib';
import { userSlice } from 'shared/reducers/UserSlice';

export const useUser = () => {
  const dispatch = useAppDispatch();
  const { setUser } = userSlice.actions;
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user }, error }) => {
      if (error) {
        console.error(error);
      }
      dispatch(setUser({ user: user }));
    });
  }, [dispatch]);
};
