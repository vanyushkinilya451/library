import { useEffect, useState } from 'react';
import { CONSTANTS } from 'shared/lib';

type useBookCoverProps = {
  cover_id?: number;
  cover_i?: number;
  className?: string;
  coverSize?: 'S' | 'M' | 'L';
};

export const useBookCover = ({
  cover_id,
  cover_i,
  coverSize = 'S',
}: useBookCoverProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const coverUrl = `${CONSTANTS.OL_COVER}${cover_id ? cover_id : cover_i}-${coverSize}.jpg`;

  // Сбрасываем состояние загрузки при изменении cover_id или cover_i
  useEffect(() => {
    setIsLoading(true);
  }, [cover_id, cover_i]);

  return {
    isLoading,
    setIsLoading,
    coverUrl,
  };
};
