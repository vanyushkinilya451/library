import { useState } from 'react';
import { CONSTANTS } from 'shared/lib';

type useBookCoverProps = {
  cover_id?: number;
  cover_i?: number;
  className?: string;
};

export const useBookCover = ({ cover_id, cover_i }: useBookCoverProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const coverUrl = `${CONSTANTS.OPEN_LIBRARY_COVER_API}${cover_id ? cover_id : cover_i}-M.jpg`;

  return {
    isLoading,
    setIsLoading,
    coverUrl,
  };
};
