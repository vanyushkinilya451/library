import type {
  BookSearchFormat} from 'entities/book';
import {
  BookCover,
  useChangeMyBooksMutation,
  useGetAllMyBooksQuery,
} from 'entities/book';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Star } from 'shared/assets';
import { useAppSelector } from 'shared/lib';
import { handleBookAuthor, handleBookTitle } from '../lib/sliceTextHelper';

type BookCardProps = {
  book: BookSearchFormat;
};

export const BookShelfCard = ({ book }: BookCardProps) => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const { data: allMyBooks } = useGetAllMyBooksQuery({
    userId: user?.id as string,
    from: 'mybooks',
    select: 'book_id, book_status',
  });

  // Проверяем, есть ли книга в библиотеке пользователя
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
    <Col
      key={book.key}
      className="shelf__item"
    >
      <Card className="card">
        <BookCover
          className="card__cover"
          cover_id={book.cover_id}
          cover_i={book.cover_i}
          onClick={() => handleBookClick(book)}
        />
        <Card.Body className="card__description">
          <Card.Title
            className="card__title"
            onClick={() => handleBookClick(book)}
          >
            {handleBookTitle(book.title)}
          </Card.Title>
          {book.author_name && (
            <Card.Text
              className="card__author"
              onClick={() => handleAuthorClick(book.author_key[0])}
            >
              {handleBookAuthor(book.author_name[0])}
            </Card.Text>
          )}
          {isInMyBooks ? (
            <Star
              className="card__star card__star--filled"
              onClick={() => handleRemoveFromMyBooks(book)}
            />
          ) : (
            <Star
              className="card__star"
              onClick={() => handleAddToMyBooks(book)}
            />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};
