import { Book, BookCover, useBooks } from 'entities/book';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { Arrow, NoImageAvailable } from 'shared/assets';
import { CONSTANTS } from 'shared/lib';
import { useShelfScroll } from '../lib/useShelfScroll';
import { FakeShelfLoader } from './FakeShelfLoader';

type ShelfProps = {
  shelfTitle: string;
  api: string;
};

export const Shelf = ({ shelfTitle, api }: ShelfProps) => {
  const navigate = useNavigate();
  const { books, isLoading, elementRef } = useBooks({ api });
  const {
    isScrolled,
    isScrollEnd,
    handleScrollRight,
    handleScrollLeft,
    bookshelf,
  } = useShelfScroll(books);

  const handleBookClick = (book: Book) => {
    navigate(`/book/${book.cover_edition_key}`);
  };

  const handleAuthorClick = (author: string) => {
    navigate(`/author/${author}`);
  };

  const handleTitle = (title: string) => {
    return title.length > CONSTANTS.TITLE_CHAR_LIMIT
      ? title.slice(0, CONSTANTS.TITLE_CHAR_LIMIT) + '...'
      : title;
  };

  const handleAuthor = (author: string) => {
    return author.length > CONSTANTS.AUTHOR_CHAR_LIMIT
      ? author.slice(0, CONSTANTS.AUTHOR_CHAR_LIMIT) + '...'
      : author;
  };

  return (
    <article
      ref={elementRef}
      className='shelf'
    >
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
          {books?.map((book) => {
            return (
              <Col
                key={book.key}
                className='shelf__item'
              >
                <Card className='card'>
                  {book.cover_i || book.cover_id ? (
                    <BookCover
                      className='card__cover'
                      cover_id={book.cover_id}
                      cover_i={book.cover_i}
                      onClick={() => handleBookClick(book)}
                    />
                  ) : (
                    <Card.Img
                      className='card__cover'
                      alt='no image'
                      src={NoImageAvailable}
                      onClick={() => handleBookClick(book)}
                    />
                  )}
                  <Card.Body className='card__description'>
                    <Card.Title
                      className='card__title'
                      onClick={() => handleBookClick(book)}
                    >
                      {handleTitle(book.title)}
                    </Card.Title>
                    {book.author_name && (
                      <Card.Text
                        className='card__author'
                        onClick={() => handleAuthorClick(book.author_key[0])}
                      >
                        {handleAuthor(book.author_name[0])}
                      </Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
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
