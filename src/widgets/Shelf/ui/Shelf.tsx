import { useGetBooksByCategoryQuery } from 'entities/book';
import Row from 'react-bootstrap/Row';
import { Arrow } from 'shared/assets';
import { useShelfScroll } from '../lib/useShelfScroll';
import { BookShelfCard } from './BookShelfCard';
import { FakeShelfLoader } from './FakeShelfLoader';

type ShelfProps = {
  shelfTitle: string;
  api: string;
};

export const Shelf = ({ shelfTitle, api }: ShelfProps) => {
  const { data: books, isLoading } = useGetBooksByCategoryQuery(api);
  const {
    isScrolled,
    isScrollEnd,
    handleScrollRight,
    handleScrollLeft,
    bookshelf,
  } = useShelfScroll(isLoading);

  return (
    <article className='shelf'>
      <h1 className='shelf__title'>{shelfTitle}</h1>
      {isLoading ? (
        <FakeShelfLoader />
      ) : (
        <Row
          ref={bookshelf}
          className='shelf__container'
        >
          {books?.map(
            (book) =>
              book.cover_edition_key && (
                <BookShelfCard
                  book={book}
                  key={book.key}
                />
              )
          )}
          {isScrolled && (
            <button
              className='shelf__nav shelf__nav--left'
              onClick={handleScrollLeft}
            >
              <Arrow className='scroll__icon' />
            </button>
          )}
          {!isScrollEnd && (
            <button
              className='shelf__nav shelf__nav--right'
              onClick={handleScrollRight}
            >
              <Arrow className='scroll__icon' />
            </button>
          )}
        </Row>
      )}
    </article>
  );
};
