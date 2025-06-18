import { Book } from "entities/book"
import { Fragment } from "react/jsx-runtime"
import styled from "styled-components"

type SearchResutlsProps = {
  books: Book[]
}

export const SearchResults = ({ books }: SearchResutlsProps) => {
  return (
    <ResultsContainer>
      {books.length ?
        <>
          <BookList>
            {books.map((book) => {
              return (
                <Fragment key={book.key}>
                  <BookItem >
                    <BookPropsList>
                      <ChooseBookButton>
                        <BookTitle>
                          {book.title}
                        </BookTitle>
                        <BookAuthor>
                          {book.author_name}
                        </BookAuthor>
                      </ChooseBookButton>
                    </BookPropsList>
                  </BookItem>
                  <Underline />
                </Fragment>
              )
            })}
          </BookList>
          <LookMoreButton>Посмотреть все результаты</LookMoreButton>
        </> : <NoBooksFound>Ничего не найдено</NoBooksFound>
      }
    </ResultsContainer>

  )
}

const Underline = styled.hr`
  margin: 0;
  padding: 0;
  width: 100%;
`

const NoBooksFound = styled.p`
  border-style: none;
  text-align: left;
  font-size: 1rem;
  padding: 10px 20px;
  width: 100%;
`

const ResultsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  width: 100%;
`
const BookUnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`

const BookUnorderedItem = styled.li`
  list-style: none;
`

const BookList = styled(BookUnorderedList)`
`

const BookItem = styled(BookUnorderedItem)`
`

const BookPropsList = styled(BookUnorderedList)`
`

const BookProperty = styled(BookUnorderedItem)`
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const BookTitle = styled(BookProperty)`
  
`

const BookAuthor = styled(BookProperty)`
  font-style: italic;
`

const ChooseBookButton = styled.button`
  width: 100%;
  border-style: none;
  text-align: left;
  font-size: 1rem;
  padding: 10px 20px;


  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const LookMoreButton = styled(ChooseBookButton)`
  border-style: none;
  text-align: left;
  font-size: 1rem;
`