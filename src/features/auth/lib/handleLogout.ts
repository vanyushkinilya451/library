import { supabase } from 'shared/lib';

export const handleLogout = () => {
  supabase.auth.signOut();
};
