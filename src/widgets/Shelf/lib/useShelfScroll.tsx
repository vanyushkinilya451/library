import { Book } from 'entities/book';
import { useEffect, useRef, useState } from 'react';
import { CONSTANTS } from 'shared/lib';

export const useShelfScroll = (books: Book[]) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const bookshelf = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bookshelf.current) return;
      setIsScrolled(bookshelf.current.scrollLeft > 0);
      setIsScrollEnd(
        bookshelf.current.scrollLeft >
          bookshelf.current.scrollWidth - bookshelf.current.clientWidth - 1
      );
    };

    const container = bookshelf.current;
    container?.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [books]);

  const handleScrollRight = () => {
    if (!bookshelf.current) return;

    bookshelf.current.scrollBy({
      left: CONSTANTS.SCROLL_DISTANCE,
      behavior: 'smooth',
    });
  };

  const handleScrollLeft = () => {
    if (!bookshelf.current) return;

    bookshelf.current.scrollBy({
      left: -CONSTANTS.SCROLL_DISTANCE,
      behavior: 'smooth',
    });
  };

  return {
    isScrolled,
    isScrollEnd,
    handleScrollRight,
    handleScrollLeft,
    bookshelf,
  };
};
