import { skipToken } from '@reduxjs/toolkit/query';
import {
  BookCover,
  BookSearchFormat,
  useAddToMyBooksMutation,
  useGetMyBooksQuery,
  useRemoveFromMyBooksMutation,
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
  const { data: myBooks } = useGetMyBooksQuery(user?.id ?? skipToken);
  const [addToMyBooks] = useAddToMyBooksMutation();
  const [removeFromMyBooks] = useRemoveFromMyBooksMutation();
  const handleBookClick = (book: BookSearchFormat) => {
    navigate(`/book/${book.cover_edition_key}`);
  };

  const handleAuthorClick = (author: string) => {
    navigate(`/author/${author}`, { state: { author } });
  };

  const handleAddToMyBooks = (book: BookSearchFormat) => {
    const bookId = book.cover_i ? book.cover_i : book.cover_id;
    if (bookId && user?.id) {
      addToMyBooks({ bookId, userId: user.id });
    }
  };

  const handleRemoveFromMyBooks = (book: BookSearchFormat) => {
    const bookId = book.cover_i ? book.cover_i : book.cover_id;
    if (bookId && user?.id) {
      removeFromMyBooks({ bookId, userId: user.id });
    }
  };

  return (
    <Col
      key={book.key}
      className='shelf__item'
    >
      <Card className='card'>
        <BookCover
          className='card__cover'
          cover_id={book.cover_id}
          cover_i={book.cover_i}
          onClick={() => handleBookClick(book)}
        />
        <Card.Body className='card__description'>
          <Card.Title
            className='card__title'
            onClick={() => handleBookClick(book)}
          >
            {handleBookTitle(book.title)}
          </Card.Title>
          {book.author_name && (
            <Card.Text
              className='card__author'
              onClick={() => handleAuthorClick(book.author_key[0])}
            >
              {handleBookAuthor(book.author_name[0])}
            </Card.Text>
          )}
          {myBooks?.includes((book.cover_i || book.cover_id)!) ? (
            <Star
              className='card__star card__star--filled'
              onClick={() => handleRemoveFromMyBooks(book)}
            />
          ) : (
            <Star
              className='card__star'
              onClick={() => handleAddToMyBooks(book)}
            />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};
