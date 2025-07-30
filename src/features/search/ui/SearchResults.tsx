import { ROUTES } from 'app/routes/router';
import type { Author } from 'entities/author';
import { AuthorImage } from 'entities/author';
import type { BookSearchFormat } from 'entities/book';
import { BookCover as BookCoverComponent } from 'entities/book';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { st } from 'shared/lib';
import styled from 'styled-components';

type SearchResutlsProps = {
  books: BookSearchFormat[];
  authors: Author[];
};

export const SearchResults = ({ books, authors }: SearchResutlsProps) => {
  const navigate = useNavigate();

  const handleBookClick = (bookId: string) => {
    navigate(ROUTES.LINKS.BOOK(bookId));
  };

  const handleAuthorClick = (authorId: string) => {
    navigate(ROUTES.LINKS.AUTHOR(authorId));
  };

  return (
    <ResultsContainer>
      {books.length ? (
        <Fragment>
          <BookList>
            {books.map((book) => {
              return (
                <Fragment key={book.key}>
                  <BookItem>
                    <BookPropsList>
                      <ChooseBookButton
                        onMouseDown={() => {
                          handleBookClick(book.cover_edition_key);
                        }}
                      >
                        <BookDescription>
                          <BookTitle>{book.title}</BookTitle>
                          <BookAuthor>{book.author_name}</BookAuthor>
                        </BookDescription>
                        {book.cover_i ? (
                          <Cover>
                            <BookCoverComponent
                              cover_i={book.cover_i}
                              size="M"
                              skeletonHeight="65px"
                            />
                          </Cover>
                        ) : (
                          ''
                        )}
                      </ChooseBookButton>
                    </BookPropsList>
                  </BookItem>
                  <Underline />
                </Fragment>
              );
            })}
          </BookList>
        </Fragment>
      ) : null}
      {authors.length ? (
        <Fragment>
          <AuthorList>
            {authors.map((author) => {
              return (
                <Fragment key={author.key}>
                  <BookItem>
                    <BookPropsList>
                      <ChooseBookButton
                        onMouseDown={() => {
                          handleAuthorClick(author.key);
                        }}
                      >
                        <BookDescription>
                          <BookTitle>{author.name}</BookTitle>
                          <BookAuthor>{author.personal_name}</BookAuthor>
                        </BookDescription>
                        <Cover>
                          <AuthorImage
                            id={author.key}
                            coverSize="S"
                            skeletonHeight="65px"
                            objectFit="cover"
                          />
                        </Cover>
                      </ChooseBookButton>
                    </BookPropsList>
                  </BookItem>
                  <Underline />
                </Fragment>
              );
            })}
          </AuthorList>
        </Fragment>
      ) : null}
      {!books.length && !authors.length ? (
        <NoBooksFound>Ничего не найдено</NoBooksFound>
      ) : null}
    </ResultsContainer>
  );
};

const AuthorList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const BookDescription = styled.div`
  margin-right: 12px;
  width: 100%;
  flex: 1;
`;

const Cover = styled.div`
  width: 45px;
  height: 65px;
  border-radius: ${st('borderRadius', 'sm')};
  overflow: hidden;
  box-shadow: ${st('shadows', 'card')};
`;

const Underline = styled.hr`
  margin: 0;
  padding: 0;
  width: 100%;
  border: none;
  height: 1px;
  background: ${st('colors', 'textPrimary')};
  opacity: 0.08;
`;

const NoBooksFound = styled.p`
  border-style: none;
  text-align: center;
  padding: 20px;
  width: 100%;
  color: ${st('colors', 'textPrimary')};
  opacity: 0.6;
  font-style: italic;
  margin: 0;
`;

const ResultsContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${st('colors', 'background')};
  border-radius: ${st('borderRadius', 'md')};
  width: 100%;
  z-index: 1000;
  box-shadow: ${st('shadows', 'modal')};
`;

const BookUnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const BookUnorderedItem = styled.li`
  list-style: none;
`;

const BookList = styled(BookUnorderedList)``;

const BookItem = styled(BookUnorderedItem)``;

const BookPropsList = styled(BookUnorderedList)``;

const BookProperty = styled(BookUnorderedItem)`
  user-select: none;
`;

const BookTitle = styled(BookProperty)`
  font-weight: 600;
  font-size: ${st('fontSizes', 'md')};
  color: ${st('colors', 'textPrimary')};
  margin-bottom: 4px;
  line-height: 1.3;
`;

const BookAuthor = styled(BookProperty)`
  font-weight: 500;
  font-style: italic;
  font-size: ${st('fontSizes', 'md')};
  color: ${st('colors', 'textSecondary')};
`;

const ChooseBookButton = styled.button`
  width: 100%;
  border: none;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: transparent;
  cursor: pointer;
  transition: ${st('transitions', 'colors')};

  &:hover {
    background-color: ${st('colors', 'backgroundSecondary')};
  }

  &:active {
    background-color: ${st('colors', 'backgroundSecondary')};
  }
`;
