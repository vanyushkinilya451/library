import { Book } from "entities/book/lib/types";
import { useEffect, useState } from "react";

type useBooksProps = {
  api: string;
  limit?: number;
};

export const useBooks = ({ api, limit }: useBooksProps) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getBooks() {
      const response = await fetch(`${api}&limit=${limit}`);
      const data = await response.json();
      setBooks(data.works ? data.works : data.docs);
      setIsLoading(false);
    }
    getBooks();
  }, []);

  return { books, isLoading };
};

//popular
