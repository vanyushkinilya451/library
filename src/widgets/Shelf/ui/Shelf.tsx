import { Book } from "entities/book";
import { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Arrow from "shared/assets/icons/arrow.svg";
import NoImageAvailable from 'shared/assets/images/noimageavailable.png';
import { SkeletonLoader } from "shared/ui/SkeletonLoader";
type ShelfProps = {
  books: Book[];
  shelfTitle: string;
  isLoading: boolean;
}

export const Shelf = ({ books, shelfTitle, isLoading }: ShelfProps) => {
  const bookshelf = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  const scrollDistance = 320;

  useEffect(() => {
    const handleScroll = () => {
      if (!bookshelf.current) return;
      setIsScrolled(bookshelf.current.scrollLeft > 0);
      setIsScrollEnd(bookshelf.current.scrollLeft > (bookshelf.current.scrollWidth - bookshelf.current.clientWidth - 1));
    }

    const container = bookshelf.current;
    container?.addEventListener('scroll', handleScroll)
    handleScroll();
    return () => { removeEventListener('scroll', handleScroll) }
  }, [books]);


  const handleScrollRight = () => {
    if (!bookshelf.current) return;

    bookshelf.current.scrollBy({
      left: scrollDistance,
      behavior: 'smooth',
    });
  }

  const handleScrollLeft = () => {
    if (!bookshelf.current) return;

    bookshelf.current.scrollBy({
      left: -scrollDistance,
      behavior: 'smooth',
    });
  }

  return (
    <article className="shelf">
      <Row>
        <h1 className="shelf__title">{shelfTitle}</h1>
      </Row>
      {isLoading ?
        <Row className="shelf__container">
          {Array.from({ length: 10 }).map(() => {
            return (
              <Col className="shelf__item">
                <Card className="card">
                  <SkeletonLoader height="180px" />
                </Card>
                <Card.Body>
                  <SkeletonLoader height="1.5rem" margin="10px 0" />
                  <SkeletonLoader height="1.5rem" margin="10px 0" />
                </Card.Body>
              </Col>
            )
          })}
        </Row>
        :
        <Row ref={bookshelf} className="shelf__container">
          {books?.map((book) => {
            return (
              <Col key={book.key} className="shelf__item">
                <Card className="card">
                  {book.cover_i || book.cover_id ?
                    <Card.Img
                      className="card__cover"
                      alt="book cover"
                      src={`http://covers.openlibrary.org/b/id/${book.cover_id ? book.cover_id : book.cover_i}-M.jpg`}
                    /> :
                    <Card.Img
                      className="card__cover"
                      alt="no image"
                      src={NoImageAvailable}
                    />
                  }

                  <Card.Body className="card__description">
                    <Card.Title className="card__title">{book.title.length > 40 ? book.title.slice(0, 40) + '...' : book.title}</Card.Title>
                    {book.author_name &&
                      <Card.Text className="card__author">{book.author_name[0].length > 30 ? book.author_name[0].slice(0, 30) + '...' : book.author_name[0]}</Card.Text>
                    }
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
          {isScrolled &&
            <button className="shelf__nav shelf__nav--left" onClick={handleScrollLeft}>
              <Arrow className="scroll__icon" />
            </button>
          }
          {!isScrollEnd &&
            <button className="shelf__nav shelf__nav--right" onClick={handleScrollRight}>
              <Arrow className="scroll__icon scroll__icon" />
            </button>
          }
        </Row>
      }
    </article>

  )
}
