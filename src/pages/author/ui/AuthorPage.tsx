import { Author, AuthorImage, useAuthor } from 'entities/author';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const AuthorPage = () => {
  const { authorId } = useParams();
  const { author }: { author: Author | null } = useAuthor({
    id: authorId as string,
  });

  return (
    author && (
      <Container>
        {author.photos ? (
          <Cover>
            <AuthorImage
              cover_id={author.photos[0]}
              cover_i={author.photos[0]}
              coverSize='L'
              skeletonHeight='450px'
              objectFit='cover'
            />
          </Cover>
        ) : (
          <NoAuthorImage />
        )}
        <AuthorInformation>
          <AuthorProperties>
            <AuthorName>{author.name}</AuthorName>
            {author.alternate_names && (
              <div>
                {author.alternate_names.length === 1
                  ? 'Псевдоним:'
                  : 'Псевдонимы: '}
                {author.alternate_names.map((name, index) => (
                  <TextHighlight>
                    {name}
                    {index !== author.alternate_names.length - 1 && ', '}
                  </TextHighlight>
                ))}
              </div>
            )}
            {author.personal_name && (
              <div>
                Имя: <TextHighlight>{author.personal_name}</TextHighlight>
              </div>
            )}
            {author.birth_date && (
              <div>
                Дата рождения:{' '}
                <TextHighlight>{author.birth_date}</TextHighlight>
              </div>
            )}
          </AuthorProperties>
          <Description>
            {author.bio && (
              <>
                <Bold>Биография:</Bold>
                {typeof author.bio === 'string' ? author.bio : author.bio.value}
              </>
            )}
          </Description>
        </AuthorInformation>
      </Container>
    )
  );
};

const Container = styled.div`
  margin: 30px 20%;
  display: flex;
  align-items: flex-start;
  gap: 30px;
`;

const AuthorName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const Cover = styled.div`
  min-width: 300px;
  min-height: 450px;
  width: 300px;
  height: 450px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const AuthorInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorProperties = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Description = styled.p`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 800px;
`;

const TextHighlight = styled.span`
  color: var(--link-color);
`;

const Bold = styled.span`
  font-weight: 700;
`;

const NoAuthorImage = styled.div`
  min-width: 300px;
  min-height: 450px;
  width: 300px;
  height: 450px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: var(--gradient-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--secondary-color);
  font-size: 14px;
  text-align: center;
  gap: 15px;

  &::before {
    content: '';
    width: 150px;
    height: 150px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236c757d'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E")
      no-repeat center;
    background-size: contain;
    opacity: 0.6;
  }

  &::after {
    content: 'Фото автора отсутствует';
    font-weight: 500;
    font-size: 1rem;
  }
`;
