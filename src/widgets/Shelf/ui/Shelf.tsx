import { useGetBooksByCategoryQuery } from 'entities/book';
import Row from 'react-bootstrap/Row';
import { Arrow } from 'shared/assets';
import { useShelfScroll } from '../lib/useShelfScroll';
import { BookCard } from './BookShelfCard';
import { FakeShelfLoader } from './FakeShelfLoader';

type ShelfProps = {
  shelfTitle: string;
  api: string;
};

export const Shelf = ({ shelfTitle, api }: ShelfProps) => {
  const { data, isLoading } = useGetBooksByCategoryQuery(api);

  const {
    isScrolled,
    isScrollEnd,
    handleScrollRight,
    handleScrollLeft,
    bookshelf,
  } = useShelfScroll(isLoading);

  return (
    <article className='shelf'>
      <Row>
        <h1 className='shelf__title'>{shelfTitle}</h1>
      </Row>
      {isLoading ? (
        <FakeShelfLoader />
      ) : (
        <Row
          ref={bookshelf}
          className='shelf__container'
        >
          {data?.docs?.map((book) => {
            if (book.cover_edition_key) {
              return (
                <BookCard
                  book={book}
                  key={book.cover_edition_key}
                />
              );
            }
          })}
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
