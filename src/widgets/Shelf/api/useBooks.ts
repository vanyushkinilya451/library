import { Book } from "entities/book/lib/types";
import { useEffect, useRef, useState } from "react";

type useBooksProps = {
  api: string;
  limit?: number;
};

export const useBooks = ({ api, limit }: useBooksProps) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (element) => {
        element.forEach((item) => {
          if (item.isIntersecting) {
            console.log("item: ", item.target);
            async function getBooks() {
              const response = await fetch(`${api}&limit=${limit}`);
              const data = await response.json();
              setBooks(data.works ? data.works : data.docs);
              setIsLoading(false);
            }
            getBooks();
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    observer.observe(elementRef.current as HTMLElement);

    return () => {
      observer.disconnect();
    };
  }, [api, limit]);

  return { books, isLoading, elementRef };
};
