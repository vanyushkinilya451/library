import { useGetBooksByCategoryQuery } from 'entities/book';
import { Arrow } from 'shared/assets';
import styled from 'styled-components';
import { useShelfScroll } from '../lib/useShelfScroll';
import { BookShelfCard } from './BookShelfCard';
import { FakeShelfLoader } from './FakeShelfLoader';

type ShelfProps = {
  shelfTitle: string;
  api: string;
};

const ShelfWrapper = styled.article.attrs(() => ({
  className: 'shelf',
}))``;

const ShelfTitle = styled.h1.attrs(() => ({
  className: 'shelf__title',
}))``;

const ShelfContainer = styled.div.attrs(() => ({
  className: 'shelf__container',
}))`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE и Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  position: relative;
`;

const ShelfNavButton = styled.button.attrs(() => ({
  className: 'shelf__nav',
}))<{ position: 'left' | 'right' }>`
  position: absolute;
  background-color: transparent;
  width: 35px;
  height: 35px;
  top: 40%;
  border-style: none;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1000;

  ${({ position }) =>
    position === 'right'
      ? `right: -10px;`
      : `left: -25px; transform: translateY(-50%) rotate(180deg);`}
`;

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
    <ShelfWrapper>
      <ShelfTitle>{shelfTitle}</ShelfTitle>
      {isLoading ? (
        <FakeShelfLoader />
      ) : (
        <ShelfContainer ref={bookshelf}>
          {books?.map(
            (book) =>
              book.cover_edition_key && (
                <BookShelfCard
                  book={book}
                  key={book.key}
                />
              ),
          )}
          {isScrolled && (
            <ShelfNavButton
              position="left"
              onClick={handleScrollLeft}
              aria-label="Scroll Left"
            >
              <Arrow className="scroll__icon" />
            </ShelfNavButton>
          )}
          {!isScrollEnd && (
            <ShelfNavButton
              position="right"
              onClick={handleScrollRight}
              aria-label="Scroll Right"
            >
              <Arrow className="scroll__icon" />
            </ShelfNavButton>
          )}
        </ShelfContainer>
      )}
    </ShelfWrapper>
  );
};
