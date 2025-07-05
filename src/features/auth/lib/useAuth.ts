import { Session } from '@supabase/supabase-js';
import { useEffect } from 'react';
import { supabase, useAppDispatch } from 'shared/lib';
import { sessionSlice } from 'shared/reducers/SessionSlice';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { setSession } = sessionSlice.actions;
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setSession({ session: session as Session }));
    });

    supabase.auth.onAuthStateChange((_, session) => {
      dispatch(setSession({ session: session as Session }));
    });
  }, [dispatch]);
};
