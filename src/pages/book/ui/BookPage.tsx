import { useBook } from 'entities/book';
import { useParams } from 'react-router-dom';

export const BookPage = () => {
  const { id } = useParams();
  const { book } = useBook({ id: id as string });
  console.log(book);
  return <h1>{book?.title}</h1>;
};
