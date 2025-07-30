import type { Author } from 'entities/author';
import { AuthorImage, useAuthor } from 'entities/author';
import { useParams } from 'react-router-dom';
import { st } from 'shared/lib';
import styled from 'styled-components';

export const AuthorPage = () => {
  const { authorId } = useParams();
  const { author }: { author: Author | null } = useAuthor({
    id: authorId as string,
  });

  const formateKey = () => {
    const lastSlashIndex = author?.key.lastIndexOf('/');
    if (lastSlashIndex) {
      return author?.key.slice(lastSlashIndex + 1);
    }
    return author?.key;
  };

  return (
    author && (
      <Container>
        <AuthorInformation>
          {author.photos ? (
            <Cover>
              <AuthorImage
                id={formateKey()!}
                coverSize="L"
                skeletonHeight="450px"
                objectFit="cover"
              />
            </Cover>
          ) : (
            <NoAuthorImage />
          )}
          <AuthorProperties>
            <AuthorName>{author.name}</AuthorName>
            {author.alternate_names && (
              <div>
                <Bold>
                  {author.alternate_names.length === 1
                    ? 'Псевдоним: '
                    : 'Псевдонимы: '}
                </Bold>
                {author.alternate_names.map((name, index) => (
                  <TextHighlight key={name}>
                    {name}
                    {index !== author.alternate_names.length - 1 && ', '}
                  </TextHighlight>
                ))}
              </div>
            )}
            {author.personal_name && (
              <div>
                <Bold>Имя: </Bold>
                <TextHighlight>{author.personal_name}</TextHighlight>
              </div>
            )}
            {author.birth_date && (
              <div>
                <Bold>Дата рождения: </Bold>
                <TextHighlight>{author.birth_date}</TextHighlight>
              </div>
            )}
          </AuthorProperties>
          <Description>
            {author.bio && (
              <>
                <Bold>Биография: </Bold>
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
  margin: 30px 15%;

  @media (max-width: ${st('breakpoints', 'md')}) {
    margin: 30px 10%;
  }

  @media (max-width: ${st('breakpoints', 'sm')}) {
    margin: 30px 5%;
  }
`;

const AuthorName = styled.h1`
  font-size: ${st('fontSizes', 'lg')};
  font-weight: 900;

  @media (max-width: ${st('breakpoints', 'sm')}) {
    font-size: ${st('fontSizes', 'md')};
  }
`;

const Cover = styled.div`
  float: right;
  width: 300px;
  height: 450px;
  margin-left: 30px;
  margin-bottom: 10px;
  box-shadow: ${st('shadows', 'card')};
  border-radius: ${st('borderRadius', 'md')};

  @media (max-width: ${st('breakpoints', 'lg')}) {
    width: 250px;
    height: 375px;
  }

  @media (max-width: ${st('breakpoints', 'md')}) {
    width: 210px;
    height: 312px;
  }

  @media (max-width: ${st('breakpoints', 'sm')}) {
    width: 175px;
    height: 260px;
  }

  @media (max-width: ${st('breakpoints', 'xs')}) {
    width: 145px;
    height: 216px;
  }
`;

const AuthorInformation = styled.div``;

const AuthorProperties = styled.div``;

const Description = styled.p`
  margin-top: 15px;
  text-align: justify;
  width: 100%;

  font-size: ${st('fontSizes', 'md')};

  @media (max-width: ${st('breakpoints', 'sm')}) {
    font-size: ${st('fontSizes', 'sm')};
  }
`;

const TextHighlight = styled.span`
  color: ${st('colors', 'primaryLight')};
  font-size: ${st('fontSizes', 'md')};

  @media (max-width: ${st('breakpoints', 'sm')}) {
    font-size: ${st('fontSizes', 'sm')};
  }
`;

const Bold = styled.span`
  font-weight: 600;
  font-size: ${st('fontSizes', 'md')};

  @media (max-width: ${st('breakpoints', 'sm')}) {
    font-size: ${st('fontSizes', 'sm')};
  }
`;

const NoAuthorImage = styled.div`
  float: right;
  width: 300px;
  height: 450px;
  margin-left: 30px;
  margin-bottom: 10px;
  box-shadow: ${st('shadows', 'card')};
  border-radius: ${st('borderRadius', 'md')};
  background: ${st('colors', 'backgroundSecondary')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${st('colors', 'textSecondary')};
  font-size: ${st('fontSizes', 'md')};
  text-align: center;
  gap: 15px;

  @media (max-width: ${st('breakpoints', 'lg')}) {
    width: 250px;
    height: 375px;
  }

  @media (max-width: ${st('breakpoints', 'md')}) {
    width: 210px;
    height: 312px;
  }

  @media (max-width: ${st('breakpoints', 'sm')}) {
    width: 175px;
    height: 260px;
  }

  @media (max-width: ${st('breakpoints', 'xs')}) {
    width: 145px;
    height: 216px;
  }

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
    font-size: ${st('fontSizes', 'md')};
  }
`;
