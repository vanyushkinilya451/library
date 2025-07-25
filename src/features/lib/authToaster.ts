import toast from 'react-hot-toast';

export const showAuthToasts = ({
  error,
  successMessage,
  isSuccess,
  passwordErrors,
}: {
  error: string | null;
  successMessage: string;
  isSuccess: boolean;
  passwordErrors: string[];
}) => {
  if (error) toast.error(error);
  if (passwordErrors?.length) passwordErrors.forEach((err) => toast.error(err));
  if (isSuccess) toast.success(successMessage);
};
