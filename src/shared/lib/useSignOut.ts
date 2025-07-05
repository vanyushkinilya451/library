import { supabase } from '.';

export const useSignOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error signing out', error);
  }
};
