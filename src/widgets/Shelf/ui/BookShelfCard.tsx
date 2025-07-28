import type { BookSearchFormat } from 'entities/book';
import {
  BookCover,
  useChangeMyBooksMutation,
  useGetAllMyBooksQuery,
} from 'entities/book';
import { useNavigate } from 'react-router-dom';
import { Star } from 'shared/assets';
import { useAppSelector } from 'shared/lib';
import styled from 'styled-components';
import { handleBookAuthor, handleBookTitle } from '../lib/sliceTextHelper';

type BookCardProps = {
  book: BookSearchFormat;
};

export const BookShelfCard = ({ book }: BookCardProps) => {
  const navigate = useNavigate();
  const { user, isLoading } = useAppSelector((state) => state.user);
  const { data: allMyBooks } = useGetAllMyBooksQuery({
    userId: user?.id as string,
    from: 'mybooks',
    select: 'book_id, book_status',
  });

  const isInMyBooks = allMyBooks?.some(
    (myBook) => myBook.book_id === book.cover_edition_key,
  );

  const [changeMyBooks] = useChangeMyBooksMutation();

  const handleBookClick = (book: BookSearchFormat) => {
    navigate(`/book/${book.cover_edition_key}`);
  };

  const handleAuthorClick = (author: string) => {
    navigate(`/author/${author}`, { state: { author } });
  };

  const handleAddToMyBooks = (book: BookSearchFormat) => {
    if (book.cover_edition_key && user?.id) {
      changeMyBooks({
        from: 'mybooks',
        bookId: book.cover_edition_key,
        userId: user.id,
        bookStatus: 'will_read',
        method: 'insert',
      });
    }
  };

  const handleRemoveFromMyBooks = (book: BookSearchFormat) => {
    if (book.cover_edition_key && user?.id) {
      changeMyBooks({
        from: 'mybooks',
        bookId: book.cover_edition_key,
        userId: user.id,
        bookStatus: 'will_read',
        method: 'delete',
      });
    }
  };

  return (
    <ShelfItem>
      <StyledCard>
        <StyledCover
          cover_id={book.cover_id}
          cover_i={book.cover_i}
          onClick={() => handleBookClick(book)}
        />
        <Description>
          <Title onClick={() => handleBookClick(book)}>
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
              onClick={() => handleRemoveFromMyBooks(book)}
            />
          ) : user && !isLoading ? (
            <StarIcon onClick={() => handleAddToMyBooks(book)} />
          ) : null}
        </Description>
      </StyledCard>
    </ShelfItem>
  );
};

const ShelfItem = styled.div`
  width: 150px;
  flex: 0 0 auto;
  padding: 10px 10px 0 10px;
  scroll-snap-align: center;
  height: 300px;
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
  box-shadow: var(--shadow-card);
  border-radius: 5px;
`;

const Description = styled.div`
  padding: 10px 10px 0 10px;
`;

const Title = styled.h5`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 0.8rem;
  cursor: pointer;
  margin: 0;
  &:hover {
    opacity: 0.7;
  }
`;

const Author = styled.p`
  font-size: 0.8rem;
  margin: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const StarIcon = styled(Star)<{ filled?: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  path {
    fill: ${({ filled }) => (filled ? 'var(--orange-accent)' : 'white')};
  }
`;
