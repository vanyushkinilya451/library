import Container from 'react-bootstrap/Container';
import { useEnfOfPage } from 'shared/lib';
import { DotLoader } from 'shared/ui';
import { Shelf } from 'widgets/Shelf';
import { homepageConfig } from '../lib/homepageConfig';

export const HomePage = () => {
  const { categoriesLimit } = useEnfOfPage();

  return (
    <Container
      fluid
      className="section"
    >
      {homepageConfig.slice(0, categoriesLimit).map((shelf) => (
        <Shelf
          key={shelf.title}
          shelfTitle={shelf.title}
          api={shelf.api}
        />
      ))}

      {homepageConfig.length >= categoriesLimit && <DotLoader />}
      {homepageConfig.length < categoriesLimit && (
        <h6>Категории закончились</h6>
      )}
    </Container>
  );
};
