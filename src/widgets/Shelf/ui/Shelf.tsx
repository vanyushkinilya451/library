import { useGetBooksByCategoryQuery } from "entities/book";
import { Arrow } from "shared/assets";
import { st } from "shared/lib";
import { styled } from "styled-components";
import { useShelfScroll } from "../lib/useShelfScroll";
import { BookShelfCard } from "./BookShelfCard";
import { FakeShelfLoader } from "./FakeShelfLoader";

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
    <ShelfWrapper>
      <ShelfTitle>{shelfTitle}</ShelfTitle>
      {isLoading ? (
        <FakeShelfLoader />
      ) : (
        <ShelfContainer ref={bookshelf}>
          {books?.map(
            (book) =>
              book.cover_edition_key && (
                <BookShelfCard book={book} key={book.key} />
              )
          )}
          {isScrolled && (
            <ShelfNavButton
              position="left"
              onClick={handleScrollLeft}
              aria-label="Scroll Left"
            >
              <StyledArrow />
            </ShelfNavButton>
          )}
          {!isScrollEnd && (
            <ShelfNavButton
              position="right"
              onClick={handleScrollRight}
              aria-label="Scroll Right"
            >
              <StyledArrow />
            </ShelfNavButton>
          )}
        </ShelfContainer>
      )}
    </ShelfWrapper>
  );
};

const ShelfWrapper = styled.article`
  margin: ${st("spacing", "md")} 0;
  position: relative;
  height: min-content;
`;

const ShelfTitle = styled.h1`
  font-size: ${st("fontSizes", "lg")};
  font-weight: ${st("fontWeights", "bold")};
  color: ${st("colors", "textPrimary")};
  margin: ${st("spacing", "sm")} 0;
`;

const ShelfContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ShelfNavButton = styled.button<{ position: "left" | "right" }>`
  position: absolute;
  background-color: transparent;
  width: 35px;
  height: 35px;
  top: 35%;
  border-style: none;
  cursor: pointer;
  z-index: ${st("zIndices", "base")};
  transition: ${st("transitions", "colors")};

  ${({ position }) =>
    position === "right"
      ? `right: -15px;`
      : `left: -15px; transform: rotate(180deg);`}

  &:hover {
    opacity: ${st("opacity", "hover")};
  }
`;

const StyledArrow = styled(Arrow)`
  width: 100%;
  height: 100%;
`;
