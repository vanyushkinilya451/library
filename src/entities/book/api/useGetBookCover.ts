import { useEffect, useState } from 'react';
import { CONSTANTS } from 'shared/lib';

type useGetBookCoverProps = {
  cover_id?: number;
  cover_i?: number;
  className?: string;
  coverSize?: 'S' | 'M' | 'L';
};

export const useGetBookCover = ({
  cover_id,
  cover_i,
  coverSize = 'S',
}: useGetBookCoverProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const coverUrl = `${CONSTANTS.OL_COVER}${cover_id ? cover_id : cover_i}-${coverSize}.jpg`;

  useEffect(() => {
    setIsLoading(true);
  }, [cover_id, cover_i]);

  return {
    isLoading,
    setIsLoading,
    coverUrl,
  };
};
