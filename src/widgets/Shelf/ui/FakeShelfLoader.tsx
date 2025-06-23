import { Card, Col, Row } from 'react-bootstrap';
import { SkeletonLoader } from 'shared/ui';

export const FakeShelfLoader = () => {
  return (
    <Row className='shelf__container'>
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <Col
            key={`skeleton-${index}`}
            className='shelf__item'
          >
            <Card className='card'>
              <SkeletonLoader height='180px' />
            </Card>
            <Card.Body>
              <SkeletonLoader
                height='1.5rem'
                margin='10px 0'
              />
              <SkeletonLoader
                height='1.5rem'
                margin='10px 0'
              />
            </Card.Body>
          </Col>
        );
      })}
    </Row>
  );
};
