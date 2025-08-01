import type { Author } from "entities/author";
import type { BookSearchFormat } from "entities/book";
import { useEffect, useState } from "react";
import { CONSTANTS, useDebounce } from "shared/lib";

type useSearchProps = {
  debouncedDelay?: number;
};
export const useSearch = ({ debouncedDelay = 500 }: useSearchProps) => {
  const [search, setSearch] = useState<string>("");
  const [books, setBooks] = useState<BookSearchFormat[]>();
  const [authors, setAuthors] = useState<Author[]>();
  const debouncedSearch = useDebounce(search, debouncedDelay);

  useEffect(() => {
    if (!debouncedSearch.trim()) return;
    const processedSearch = debouncedSearch.toLowerCase().replace(" ", "+");
    async function fetchBooks() {
      try {
        const responseBooks = await fetch(
          `${CONSTANTS.URLS.SEARCH_BOOKS}?q=${processedSearch}&limit=${CONSTANTS.LIMITS.SEARCH_LIMIT}`
        );
        const responseAuthors = await fetch(
          `${CONSTANTS.URLS.SEARCH_AUTHORS}?q=${processedSearch}&limit=${CONSTANTS.LIMITS.SEARCH_LIMIT}`
        );
        if (!responseBooks.ok) {
          console.error("Ошибки поиска книг", responseBooks.text());
        } else if (!responseAuthors.ok) {
          console.error("Ошибки поиска авторов", responseAuthors.text());
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
