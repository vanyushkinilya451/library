import { Container } from 'react-bootstrap';
import { Shelf } from 'widgets/Shelf';
import { shelvesConfig } from '../lib/shelvesConfig';

export const Categories = () => {
  return (
    <Container
      fluid
      className='section'
    >
      {shelvesConfig.map((shelf) => (
        <Shelf
          key={shelf.title}
          shelfTitle={shelf.title}
          api={shelf.api}
        />
      ))}
    </Container>
  );
};
