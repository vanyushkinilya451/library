import { ROUTES } from "app/routes/router";
import type { BookSearchFormat } from "entities/book";
import { BookCover, useGetAllMyBooksQuery } from "entities/book";
import { useNavigate } from "react-router-dom";
import { Star } from "shared/assets";
import { st, useAppSelector } from "shared/lib";
import { styled } from "styled-components";
import { handleBookAuthor, handleBookTitle } from "../lib/sliceTextHelper";
import { useMyBooks } from "../lib/useMyBooks";

type BookCardProps = {
  book: BookSearchFormat;
};

export const BookShelfCard = ({ book }: BookCardProps) => {
  const navigate = useNavigate();
  const { user, isLoading } = useAppSelector((state) => state.user);
  const { data: allMyBooks } = useGetAllMyBooksQuery({
    userId: user?.id as string,
    from: "mybooks",
    select: "book_id, book_status",
  });
  const { addToMyBooks, removeFromMyBooks } = useMyBooks();

  const isInMyBooks = allMyBooks?.some(
    (myBook) => myBook.book_id === book.cover_edition_key
  );

  const handleBookClick = (bookId: string) => {
    navigate(ROUTES.LINKS.BOOK(bookId));
  };

  const handleAuthorClick = (authorId: string) => {
    navigate(ROUTES.LINKS.AUTHOR(authorId));
  };

  return (
    <ShelfItem>
      <StyledCard>
        <StyledCover
          cover_id={book.cover_id}
          cover_i={book.cover_i}
          onClick={() => handleBookClick(book.cover_edition_key)}
        />
        <Description>
          <Title onClick={() => handleBookClick(book.cover_edition_key)}>
            {handleBookTitle(book.title)}
          </Title>
          {book.author_name && (
            <Author onClick={() => handleAuthorClick(book.author_key[0])}>
              {handleBookAuthor(book.author_name[0])}
            </Author>
          )}

          {isInMyBooks ? (
            <StarIcon
              filled
              onClick={() => removeFromMyBooks(book.cover_edition_key)}
            />
          ) : user && !isLoading ? (
            <StarIcon onClick={() => addToMyBooks(book.cover_edition_key)} />
          ) : null}
        </Description>
      </StyledCard>
    </ShelfItem>
  );
};

const ShelfItem = styled.div`
  width: 140px;
  flex: 0 0 auto;
  padding: 10px 10px 0 10px;
  scroll-snap-align: center;
  height: min-content;
`;

const StyledCard = styled.div`
  border-style: none;
  position: relative;
`;

const StyledCover = styled(BookCover)`
  width: 100%;
  height: 180px;
  cursor: pointer;
  transition: transform 0.15s linear;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`;

const Description = styled.div`
  padding: 10px 10px 0 10px;
`;

const Title = styled.h5`
  font-weight: ${st("fontWeights", "bold")};
  font-size: ${st("fontSizes", "sm")};
  color: ${st("colors", "textPrimary")};
  cursor: pointer;
  margin: 0;
  transition: ${st("transitions", "colors")};

  &:hover {
    opacity: ${st("opacity", "hover")};
  }
`;

const Author = styled.p`
  font-size: ${st("fontSizes", "sm")};
  color: ${st("colors", "textSecondary")};
  margin: 0;
  cursor: pointer;
  transition: ${st("transitions", "colors")};

  &:hover {
    opacity: ${st("opacity", "hover")};
  }
`;

const StarIcon = styled(Star)<{ filled?: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: ${st("transitions", "colors")};

  path {
    fill: ${({ filled }) =>
      filled ? st("colors", "accent") : st("colors", "textWhite")};
  }

  &:hover {
    opacity: ${st("opacity", "hover")};
  }
`;
