import { Book } from "entities/book";
import { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Arrow from "shared/assets/icons/arrow.svg";
import NoImageAvailable from 'shared/assets/images/noimageavailable.png';
import { SkeletonLoader } from "shared/ui/SkeletonLoader";
import { BookCover } from "../api/BookCover";

type ShelfProps = {
  books: Book[];
  shelfTitle: string;
  isLoadingBooks: boolean;
  ref: React.RefObject<HTMLElement | null>;
}

export const Shelf = ({ books, shelfTitle, isLoadingBooks, ref }: ShelfProps) => {
  const bookshelf = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  const titleCharactersLimit = 40;
  const authorCharactersLimit = 30;
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
    return () => {
      container?.removeEventListener('scroll', handleScroll)
    }
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
    <article ref={ref} className="shelf">
      <Row>
        <h1 className="shelf__title">{shelfTitle}</h1>
      </Row>
      {isLoadingBooks ?
        <Row className="shelf__container">
          {Array.from({ length: 10 }).map((_, index) => {
            return (
              <Col key={`skeleton-${index}`} className="shelf__item">
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
                    <BookCover className="card__cover" cover_id={book.cover_id} cover_i={book.cover_i} />
                    :
                    <Card.Img
                      className="card__cover"
                      alt="no image"
                      src={NoImageAvailable}
                    />
                  }
                  <Card.Body className="card__description">
                    <Card.Title className="card__title">{book.title.length > titleCharactersLimit ? book.title.slice(0, titleCharactersLimit) + '...' : book.title}</Card.Title>
                    {book.author_name &&
                      <Card.Text className="card__author">{book.author_name[0].length > authorCharactersLimit ? book.author_name[0].slice(0, authorCharactersLimit) + '...' : book.author_name[0]}</Card.Text>
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
              <Arrow className="scroll__icon" />
            </button>
          }
        </Row>
      }
    </article>

  )
}
