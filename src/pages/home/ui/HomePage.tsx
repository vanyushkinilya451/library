import { usePopularBooks } from "features/getPopularBooks/api/usePopularBooks";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


export const HomePage = () => {
  const { books } = usePopularBooks();
  console.log(books)
  return (
    <Container fluid>
      <Row className="flex-nowrap mx-20 mt-5 overflow-hidden">

        {books?.map((book) => {
          return (
            <Col className="book overflow-hidden">
              <Card className="book__container">
                <Card.Img className="book__cover" src={`http://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  {book.authors.map((author) => {
                    return (
                      <Card.Text>{author.name}</Card.Text>
                    )
                  })}
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

