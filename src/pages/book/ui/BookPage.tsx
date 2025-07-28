import { BookCover, useGetBookByIdQuery } from 'entities/book';
import { useGetBookAdditionalInfoQuery } from 'entities/book/api/openlibrary';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const BookPage = () => {
  const { bookId } = useParams();
  const { data: book } = useGetBookByIdQuery(bookId as string);
  const { data: additionalInfo } = useGetBookAdditionalInfoQuery(
    bookId as string,
  );

  return (
    book &&
    additionalInfo && (
      <Container>
        <BookInformation>
          <Cover>
            <BookCover
              cover_id={book.covers[0]}
              cover_i={book.covers[0]}
              size="L"
              skeletonHeight="100%"
            />
          </Cover>
          {book.subjects && (
            <Tags>
              {book.subjects.map((subject) => (
                <Tag key={subject}>{subject}</Tag>
              ))}
            </Tags>
          )}
          <BookProperties>
            <Title>{book.title}</Title>
            {book.subtitle && <SubTitle>{book.subtitle}</SubTitle>}
            {additionalInfo?.author_name && (
              <div>
                {additionalInfo?.author_name.map((author, index) => (
                  <div key={author}>
                    {additionalInfo?.author_name.length === 1 ? (
                      <Bold>Автор: </Bold>
                    ) : (
                      <Bold>Авторы: </Bold>
                    )}
                    <TextHighlight>{author}</TextHighlight>
                    {index !== additionalInfo?.author_name.length - 1 && ', '}
                  </div>
                ))}
              </div>
            )}
            {book.series && (
              <div>
                {book.series.map((series, index) => (
                  <div key={series}>
                    <Bold>Серия: </Bold>
                    <TextHighlight>{series}</TextHighlight>
                    {index !== book.series.length - 1 && ', '}
                  </div>
                ))}
              </div>
            )}
            <div>
              <Bold>Дата публикации: </Bold>
              <TextHighlight>{book.publish_date}</TextHighlight>
            </div>
            {book.publishers && (
              <div>
                <Bold>Издательство: </Bold>
                {book.publishers.map((publisher, index) => (
                  <TextHighlight key={publisher}>
                    {publisher}
                    {index !== book.publishers.length - 1 && ', '}
                  </TextHighlight>
                ))}
              </div>
            )}
            {book.number_of_pages && (
              <div>
                <Bold>Количество страниц: </Bold>
                <TextHighlight>{book.number_of_pages}</TextHighlight>
              </div>
            )}
            {additionalInfo?.language && (
              <div>
                <Bold>Языки: </Bold>
                {additionalInfo?.language.map((language, index) => {
                  return (
                    <TextHighlight key={language}>
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
                <Bold>О книге: </Bold>
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
  margin: 30px 15%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 30px 10%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 30px 5%;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 900;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 300;
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const Cover = styled.div`
  float: right;
  width: 300px;
  height: 450px;
  margin-left: 30px;
  margin-bottom: 10px;
  box-shadow: var(--shadow-card);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 250px;
    height: 375px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 210px;
    height: 312px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 175px;
    height: 260px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 145px;
    height: 216px;
  }
`;

const BookInformation = styled.div``;

const BookProperties = styled.div``;

const Description = styled.p`
  margin-top: 15px;
  text-align: justify;
  width: 100%;

  font-size: ${({ theme }) => theme.fontSizes.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const TextHighlight = styled.span`
  color: var(--link-color);
  font-size: ${({ theme }) => theme.fontSizes.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const Bold = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
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
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;
