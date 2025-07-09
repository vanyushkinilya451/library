import { useAuth } from "features/auth/lib/useAuth";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuth();
  return <>{children}</>;
};
