import { useUser } from 'entities/user/lib/useUser';
import { useAppSelector } from 'shared/lib';

export const ProfilePage = () => {
  useUser();
  const user = useAppSelector((state) => state.user.user);
  console.log('user', user);
  return <div>ProfilePage</div>;
};
