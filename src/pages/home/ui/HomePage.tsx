import Container from 'react-bootstrap/Container';
import { useEnfOfPage } from 'shared/lib';
import { Shelf } from 'widgets/Shelf';
import { shelvesConfig } from '../lib/shelvesConfig';
import { DotLoader } from 'shared/ui';

export const HomePage = () => {
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
