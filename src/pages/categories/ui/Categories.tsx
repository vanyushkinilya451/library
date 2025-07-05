import { Container } from 'react-bootstrap';
import { useEnfOfPage } from 'shared/lib';
import { DotLoader } from 'shared/ui';
import { Shelf } from 'widgets/Shelf';
import { shelvesConfig } from '../lib/shelvesConfig';

export const Categories = () => {
  const { categoriesLimit } = useEnfOfPage();

  return (
    <Container
      fluid
      className='section'
    >
      {shelvesConfig.slice(0, categoriesLimit).map((shelf) => (
        <Shelf
          key={shelf.title}
          shelfTitle={shelf.title}
          api={shelf.api}
        />
      ))}
      {shelvesConfig.length >= categoriesLimit && <DotLoader />}
      {shelvesConfig.length < categoriesLimit && <h6>Категории закончились</h6>}
    </Container>
  );
};
