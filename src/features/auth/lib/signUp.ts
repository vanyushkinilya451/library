import { supabase } from 'shared/lib';

export const signUp = async (email: string, password: string) => {
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.error('Error signing up', error);
    return { isSuccess: false, error: error };
  }
  return { isSuccess: true, error: null };
};
