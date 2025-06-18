import { Book } from "entities/book";
import { useEffect, useState } from "react";
import { useDebounce } from "shared/index";

type useSearchProps = {
  limit?: number
  debouncedDelay?: number
}
export const useSearch = ({ limit = 10, debouncedDelay = 500 }: useSearchProps) => {
  const [search, setSearch] = useState<string>("");
  const [books, setBooks] = useState<Book[]>();
  const debouncedSearch = useDebounce(search, debouncedDelay);

  useEffect(() => {
    if (!debouncedSearch.trim()) return;
    const processedSearch = debouncedSearch.toLowerCase().replace(" ", "+");
    async function fetchBooks() {
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?q=${processedSearch}&limit=${limit}`
        );
        if (!response.ok) {
          console.error("Ошибки поиска книг", response.text());
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
  }

  return {
    handleSearchValue,
    search,
    books
  }
};

