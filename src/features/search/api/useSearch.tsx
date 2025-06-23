import { Book } from 'entities/book';
import { useEffect, useState } from 'react';
import { CONSTANTS, useDebounce } from 'shared/lib';

type useSearchProps = {
  debouncedDelay?: number;
};
export const useSearch = ({ debouncedDelay = 500 }: useSearchProps) => {
  const [search, setSearch] = useState<string>('');
  const [books, setBooks] = useState<Book[]>();
  const debouncedSearch = useDebounce(search, debouncedDelay);

  useEffect(() => {
    if (!debouncedSearch.trim()) return;
    const processedSearch = debouncedSearch.toLowerCase().replace(' ', '+');
    async function fetchBooks() {
      try {
        const response = await fetch(
          `${CONSTANTS.OL_SEARCH}?q=${processedSearch}&limit=${CONSTANTS.SEARCH_LIMIT}`
        );
        if (!response.ok) {
          console.error('Ошибки поиска книг', response.text());
        } else {
          const { docs } = await response.json();
          setBooks(docs);
          console.log(docs);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchBooks();
  }, [debouncedSearch]);

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return {
    handleSearchValue,
    search,
    books,
  };
};
