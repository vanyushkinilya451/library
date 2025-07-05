import { useAuth } from 'features/auth/lib/useAuth';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  useAuth();
  return <>{children}</>;
};
