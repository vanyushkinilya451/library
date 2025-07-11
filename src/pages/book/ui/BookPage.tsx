import { BookCover, useGetBookByIdQuery } from 'entities/book';
import { useGetBookAdditionalInfoQuery } from 'entities/book/api/openlibrary';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const BookPage = () => {
  const { bookId } = useParams();
  const { data: book } = useGetBookByIdQuery(bookId as string);
  const { data: additionalInfo } = useGetBookAdditionalInfoQuery(
    bookId as string
  );

  console.log('book', book);
  return (
    book && (
      <Container>
        <Cover>
          <BookCover
            cover_id={book.covers[0]}
            cover_i={book.covers[0]}
            size='L'
            skeletonHeight='450px'
          />
        </Cover>
        <BookInformation>
          {book.subjects && (
            <Tags>
              {book.subjects.map((subject) => (
                <Tag>{subject}</Tag>
              ))}
            </Tags>
          )}
          <BookProperties>
            <Title>{book.title}</Title>
            {book.subtitle && <SubTitle>{book.subtitle}</SubTitle>}
            {additionalInfo?.author_name && (
              <div>
                {additionalInfo?.author_name.map((author, index) => (
                  <div>
                    {additionalInfo?.author_name.length === 1
                      ? 'Автор:'
                      : 'Авторы:'}
                    <TextHighlight>{author}</TextHighlight>
                    {index !== additionalInfo?.author_name.length - 1 && ', '}
                  </div>
                ))}
              </div>
            )}
            {book.series && (
              <div>
                {book.series.map((series, index) => (
                  <div>
                    Серия: <TextHighlight>{series}</TextHighlight>
                    {index !== book.series.length - 1 && ', '}
                  </div>
                ))}
              </div>
            )}
            <div>
              Дата публикации:{' '}
              <TextHighlight>{book.publish_date}</TextHighlight>
            </div>
            {book.publishers && (
              <div>
                Издательство:{' '}
                {book.publishers.map((publisher, index) => (
                  <TextHighlight>
                    {publisher}
                    {index !== book.publishers.length - 1 && ', '}
                  </TextHighlight>
                ))}
              </div>
            )}
            {book.number_of_pages && (
              <div>
                Количество страниц:{' '}
                <TextHighlight>{book.number_of_pages}</TextHighlight>
              </div>
            )}
            {additionalInfo?.language && (
              <div>
                Языки:{' '}
                {additionalInfo?.language.map((language, index) => {
                  return (
                    <TextHighlight>
                      {language}
                      {index !== additionalInfo?.language.length - 1 && ', '}
                    </TextHighlight>
                  );
                })}
              </div>
            )}
          </BookProperties>
          <Description>
            {book.description && (
              <>
                <Bold>О книге:</Bold>
                {book.description.value}
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
