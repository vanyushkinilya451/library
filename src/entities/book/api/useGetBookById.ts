import { useEffect, useState } from 'react';
import { CONSTANTS } from 'shared/lib';
import { BookWorkFormat } from '../lib/types';

export const useGetBookById = ({ id }: { id: string }) => {
  const [book, setBook] = useState<BookWorkFormat | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`${CONSTANTS.OL_BOOK}/${id}.json`);
      const data = await response.json();
      setBook(data);
    };
    fetchBook();
  }, [id]);

  return { book };
};
