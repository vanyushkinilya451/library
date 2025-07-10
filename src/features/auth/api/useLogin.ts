import { loginUser } from 'entities/user';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector, validatePassword } from 'shared/lib';

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.user);

  const login = async (credentials: { email: string; password: string }) => {
    setError(null);
    if (credentials.email === '' || credentials.password === '') {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    const errors = validatePassword(credentials.password);
    if (errors.length > 0) {
      setPasswordErrors(errors);
      return;
    }

    const result = await dispatch(loginUser(credentials));
    if (result.meta.requestStatus == 'fulfilled') {
      navigate('/');
    }

    if (result.meta.requestStatus == 'rejected') {
      setError('Неверный логин или пароль');
    }
  };

  return { login, error, passwordErrors, isLoading };
};
