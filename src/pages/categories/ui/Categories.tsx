import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { CONSTANTS } from 'shared/lib';
import { DotLoader } from 'shared/ui';
import { Shelf } from 'widgets/Shelf';
import { shelvesConfig } from '../lib/shelvesConfig';

export const Categories = () => {
  const [categoriesLimit, setCategoriesLimit] = useState<number>(
    CONSTANTS.CATEGORIES_LIMIT
  );

  useEffect(() => {
    const handleScrollEnd = () => {
      const documentHeight = document.body.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;

      if (currentScroll >= documentHeight) {
        setCategoriesLimit((prev) => prev + 3);
      }
    };

    window.addEventListener('scroll', handleScrollEnd);

    return () => {
      window.removeEventListener('scroll', handleScrollEnd);
    };
  }, []);

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
