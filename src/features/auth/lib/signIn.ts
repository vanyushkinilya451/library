import { Dispatch } from '@reduxjs/toolkit';
import { userSlice } from 'entities/user/lib/UserSlice';
import { supabase } from 'shared/lib';

export const signIn = async (
  email: string,
  password: string,
  dispatch: Dispatch
) => {
  const { setUser } = userSlice.actions;
  const { error, data } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    return { isSuccess: false, error: error };
  } else {
    dispatch(
      setUser({
        user: data.user,
        session: data.session,
      })
    );
    return { isSuccess: true, error: null };
  }
};
