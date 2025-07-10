import {
  BookCover,
  BookSearchFormat,
  BookWorkFormat,
  useGetBookById,
} from 'entities/book';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

export const BookPage = () => {
  const { bookId } = useParams();
  const { book: bookWork }: { book: BookWorkFormat | null } = useGetBookById({
    id: bookId as string,
  });
  const { state } = useLocation();
  const { book: bookSearch }: { book: BookSearchFormat } = state;

  return (
    bookWork && (
      <Container>
        <Cover>
          <BookCover
            cover_id={bookWork.covers[0]}
            cover_i={bookWork.covers[0]}
            coverSize='L'
            skeletonHeight='450px'
          />
        </Cover>
        <BookInformation>
          {bookWork.subjects && (
            <Tags>
              {bookWork.subjects.map((subject) => (
                <Tag>{subject}</Tag>
              ))}
            </Tags>
          )}
          <BookProperties>
            <Title>{bookWork.title}</Title>
            {bookWork.subtitle && <SubTitle>{bookWork.subtitle}</SubTitle>}
            {bookSearch.author_name && (
              <div>
                {bookSearch.author_name.map((author, index) => (
                  <div>
                    {bookSearch.author_name.length === 1 ? 'Автор:' : 'Авторы:'}
                    <TextHighlight>{author}</TextHighlight>
                    {index !== bookSearch.author_name.length - 1 && ', '}
                  </div>
                ))}
              </div>
            )}
            {bookWork.series && (
              <div>
                {bookWork.series.map((series, index) => (
                  <div>
                    Серия: <TextHighlight>{series}</TextHighlight>
                    {index !== bookWork.series.length - 1 && ', '}
                  </div>
                ))}
              </div>
            )}
            <div>
              Дата публикации:{' '}
              <TextHighlight>{bookWork.publish_date}</TextHighlight>
            </div>
            {bookWork.publishers && (
              <div>
                Издательство:{' '}
                {bookWork.publishers.map((publisher, index) => (
                  <TextHighlight>
                    {publisher}
                    {index !== bookWork.publishers.length - 1 && ', '}
                  </TextHighlight>
                ))}
              </div>
            )}
            {bookWork.number_of_pages && (
              <div>
                Количество страниц:{' '}
                <TextHighlight>{bookWork.number_of_pages}</TextHighlight>
              </div>
            )}
            {bookSearch.language && (
              <div>
                Языки:{' '}
                {bookSearch.language.map((language, index) => {
                  return (
                    <TextHighlight>
                      {language}
                      {index !== bookSearch.language.length - 1 && ', '}
                    </TextHighlight>
                  );
                })}
              </div>
            )}
          </BookProperties>
          <Description>
            {bookWork.description && (
              <>
                <Bold>О книге:</Bold>
                {bookWork.description.value}
              </>
            )}
          </Description>
        </BookInformation>
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

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 300;
  font-style: italic;
`;

const Cover = styled.div`
  min-width: 300px;
  min-height: 450px;
  width: 300px;
  height: 450px;
  box-shadow: var(--shadow-card);
`;

const BookInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookProperties = styled.div`
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

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
`;

const Tag = styled.span`
  background-color: var(--orange-accent);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
`;
