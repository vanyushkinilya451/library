import { ROUTES } from 'app/routes/router';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, validatePassword } from 'shared/lib';

export const useChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const changePassword = async (credentials: {
    email: string;
    password: string;
    passwordConfirm: string;
  }) => {
    setIsLoading(true);
    setError(null);
    if (
      credentials.email === '' ||
      credentials.password === '' ||
      credentials.passwordConfirm === ''
    ) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    if (credentials.password !== credentials.passwordConfirm) {
      setError('Пароли должны совпадать');
      return;
    }

    const errors = validatePassword(credentials.password);
    setPasswordErrors(errors);

    const { error } = await supabase.auth.updateUser({
      password: credentials.password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    navigate(ROUTES.LINKS.LOGIN);
    setIsLoading(false);
  };

  return { changePassword, isLoading, error, passwordErrors, isSuccess: true };
};
