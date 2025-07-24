import { useEffect, useState } from 'react';
import { CONSTANTS } from 'shared/lib';
import type { Author } from '../lib/types';

export const useAuthor = ({ id }: { id: string }) => {
  const [author, setAuthor] = useState<Author | null>(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      const response = await fetch(`${CONSTANTS.OL_AUTHOR}/${id}.json`);
      const data = await response.json();
      setAuthor(data);
    };
    fetchAuthor();
  }, [id]);

  return { author };
};
