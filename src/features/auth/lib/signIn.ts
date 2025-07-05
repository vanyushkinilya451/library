import { supabase } from 'shared/lib';

export const signIn = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    return { isSuccess: false, error: error };
  }
  return { isSuccess: true, error: null };
};
