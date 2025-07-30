import { ROUTES } from 'app/routes/router';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'shared/lib';
import { FullScreenLoader } from 'shared/ui';

export const ProtectedRouteWrapper = () => {
  const { user, isLoading } = useAppSelector((state) => state.user);

  if (isLoading && !user) {
    return <FullScreenLoader />;
  }

  if (!user) {
    return (
      <Navigate
        to={ROUTES.LINKS.LOGIN}
        replace
      />
    );
  }

  return <Outlet />;
};
