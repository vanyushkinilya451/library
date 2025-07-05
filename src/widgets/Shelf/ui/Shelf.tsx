import { BookCover, SearchBook, useBooks } from 'entities/book';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { Arrow } from 'shared/assets';
import EmptyStar from 'shared/assets/icons/emptystar.svg';
import { CONSTANTS, supabase, useAppDispatch } from 'shared/lib';
import { myBooksSlice } from 'shared/reducers/MyBooksSlice';
import { useShelfScroll } from '../lib/useShelfScroll';
import { FakeShelfLoader } from './FakeShelfLoader';

type ShelfProps = {
  shelfTitle: string;
  api: string;
};

export const Shelf = ({ shelfTitle, api }: ShelfProps) => {
  const navigate = useNavigate();
  const { setMyBooks } = myBooksSlice.actions;
  const dispatch = useAppDispatch();
  const { books, isLoading, elementRef } = useBooks({ api });
  const {
    isScrolled,
    isScrollEnd,
    handleScrollRight,
    handleScrollLeft,
    bookshelf,
  } = useShelfScroll(books);

  const handleBookClick = (book: SearchBook) => {
    navigate(`/book/${book.cover_edition_key}`, { state: { book } });
  };

  const handleAuthorClick = (author: string) => {
    navigate(`/author/${author}`, { state: { author } });
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

  const handleStarClick = async (e: React.MouseEvent, book_id: number) => {
    e.stopPropagation();
    e.currentTarget.classList.toggle('card__star--filled');
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { error } = await supabase.from('books').insert({
      book_id: book_id,
      user_id: user?.id,
    });
    const { data: bkn } = await supabase
      .from('books')
      .select('book_id')
      .eq('user_id', user?.id);
    if (error) {
      console.error(error);
    } else {
      dispatch(
        setMyBooks({
          myBooks: [...(bkn?.map((book) => book.book_id) || []), book_id],
        })
      );
    }
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
            if (book.cover_edition_key) {
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
                      <EmptyStar
                        className='card__star'
                        onClick={(e) =>
                          handleStarClick(e, (book.cover_id || book.cover_i)!)
                        }
                      />
                    </Card.Body>
                  </Card>
                </Col>
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
