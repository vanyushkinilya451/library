import { useAuthor } from 'entities/author/api/useAuthor';
import { useParams } from 'react-router-dom';

export const AuthorPage = () => {
  const { id } = useParams();
  const { author } = useAuthor({ id: id as string });
  console.log(author);
  return <h1>{author?.name}</h1>;
};
