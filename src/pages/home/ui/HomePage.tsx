import { usePopularBooks } from "features/getPopularBooks/api/usePopularBooks";
import { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Arrow from "shared/assets/icons/arrow.svg";

export const HomePage = () => {
  const bookshelf = useRef<HTMLDivElement>(null);
  const { books } = usePopularBooks();
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
    <Container fluid className="section">
      <article className="shelf">
        <Row>
          <h1 className="shelf__title">Популярные книги</h1>
        </Row>
        <Row ref={bookshelf} className="shelf__container">
          {books?.map((book) => {
            return (
              <Col key={book.key} className="shelf__item">
                <Card className="card">
                  <Card.Img alt="book cover" className="card__cover" src={`http://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`} />
                  <Card.Body className="card__description">
                    <Card.Title className="card__title">{book.title}</Card.Title>
                    {book.authors.map((author) => {
                      return (
                        <Card.Text key={author.name} className="card__author">{author.name}</Card.Text>
                      )
                    })}
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
      </article>
    </Container>
  )
}

