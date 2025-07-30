import { ROUTES } from 'app/routes/router';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from 'shared/lib';
export const useResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const resetPassword = async (email: string) => {
    setIsLoading(true);
    setError(null);
    if (email === '') {
      setError('Пожалуйста, заполните все поля');
      setIsLoading(false);
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.REACT_APP_BASE_URL}/auth/change-password`,
    });

    if (error) {
      setError(error.message);
    } else {
      setIsLoading(false);
      navigate(ROUTES.LINKS.RESET_PASSWORD);
    }
  };

  return { resetPassword, isLoading, error };
};
