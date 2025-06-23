import { Book } from 'entities/book';
import { useEffect, useRef, useState } from 'react';
import { CONSTANTS } from 'shared/lib';

type useBooksProps = {
  api: string;
};

export const useBooks = ({ api }: useBooksProps) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (element) => {
        element.forEach((item) => {
          if (item.isIntersecting) {
            async function getBooks() {
              const response = await fetch(
                `${api}&limit=${CONSTANTS.SHELF_LIMIT}`
              );
              const data = await response.json();
              setBooks(data.works ? data.works : data.docs);
              setIsLoading(false);
            }
            getBooks();
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    observer.observe(elementRef.current as HTMLElement);

    return () => {
      observer.disconnect();
    };
  }, [api]);

  console.log(books);

  return {
    books,
    isLoading,
    elementRef,
    setIsLoading,
  };
};
