import { Author } from 'entities/author';
import { BookSearchFormat } from 'entities/book';
import { useEffect, useState } from 'react';
import { CONSTANTS, useDebounce } from 'shared/lib';

type useSearchProps = {
  debouncedDelay?: number;
};
export const useSearch = ({ debouncedDelay = 500 }: useSearchProps) => {
  const [search, setSearch] = useState<string>('');
  const [books, setBooks] = useState<BookSearchFormat[]>();
  const [authors, setAuthors] = useState<Author[]>();
  const debouncedSearch = useDebounce(search, debouncedDelay);

  useEffect(() => {
    if (!debouncedSearch.trim()) return;
    const processedSearch = debouncedSearch.toLowerCase().replace(' ', '+');
    async function fetchBooks() {
      try {
        const responseBooks = await fetch(
          `${CONSTANTS.OL_SEARCH_BOOKS}?q=${processedSearch}&limit=${CONSTANTS.SEARCH_LIMIT}`
        );
        const responseAuthors = await fetch(
          `${CONSTANTS.OL_SEARCH_AUTHORS}?q=${processedSearch}&limit=${CONSTANTS.SEARCH_LIMIT}`
        );
        if (!responseBooks.ok) {
          console.error('Ошибки поиска книг', responseBooks.text());
        } else if (!responseAuthors.ok) {
          console.error('Ошибки поиска авторов', responseAuthors.text());
        } else {
          const { docs: books } = await responseBooks.json();
          setBooks(books);
          const { docs: authors } = await responseAuthors.json();
          setAuthors(authors);
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

  const filteredBooks = books?.filter((book) => book.cover_edition_key);

  return {
    handleSearchValue,
    search,
    filteredBooks,
    authors,
  };
};
