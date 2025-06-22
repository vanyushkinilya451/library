import { Book } from "entities/book/lib/types";
import { useEffect, useState } from "react";

export const usePopularBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function getBooks() {
      const response = await fetch(
        "https://openlibrary.org/subjects/new_york_times_bestseller.json?limit=20"
      );
      const { works } = await response.json();
      setBooks(works);
    }
    getBooks();
  }, []);

  return { books };
};
