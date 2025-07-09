import { Dispatch } from '@reduxjs/toolkit';
import { supabase } from 'shared/lib';
import { userSlice } from 'shared/reducers/UserSlice';

export const signUp = async (
  email: string,
  password: string,
  dispatch: Dispatch
) => {
  const { setUser } = userSlice.actions;
  const { error, data } = await supabase.auth.signUp({
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
