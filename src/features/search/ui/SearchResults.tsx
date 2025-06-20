import { Book } from "entities/book"
import { Fragment } from "react/jsx-runtime"
import styled from "styled-components"

type SearchResutlsProps = {
  books: Book[]
}

export const SearchResults = ({ books }: SearchResutlsProps) => {
  return (
    <ResultsContainer>
      {books.length
        ?
        <Fragment>
          <BookList>
            {books.map((book) => {
              return (
                <Fragment key={book.key}>
                  <BookItem >
                    <BookPropsList>
                      <ChooseBookButton>
                        <BookDescription>
                          <BookTitle>
                            {book.title}
                          </BookTitle>
                          <BookAuthor>
                            {book.author_name}
                          </BookAuthor>
                        </BookDescription>
                        {book.cover_i ?
                          <BookCoverWrapper>
                            <BookCover src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} />
                          </BookCoverWrapper> : ''}
                      </ChooseBookButton>
                    </BookPropsList>
                  </BookItem>
                  <Underline />
                </Fragment>
              )
            })}
          </BookList>
          <LookMoreButton>Посмотреть все результаты</LookMoreButton>
        </Fragment>
        :
        <NoBooksFound>Ничего не найдено</NoBooksFound>
      }
    </ResultsContainer>

  )
}

const BookDescription = styled.div`
  margin-right: 10px;
  width: 100%;
`

const BookCoverWrapper = styled.div`
  width: 50px;
  height: 70px;
`

const BookCover = styled.img`
  width: 100%;
  height: 100%;
`

const Underline = styled.hr`
  margin: 0;
  padding: 0;
  width: 100%;
`

const NoBooksFound = styled.p`
  border-style: none;
  text-align: left;
  
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
  z-index: 1000;
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
`

const BookTitle = styled(BookProperty)`
  
`

const BookAuthor = styled(BookProperty)`
  font-weight: 700;
  font-style: italic;
`

const ChooseBookButton = styled.button`
  width: 100%;
  border-style: none;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;


  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

const LookMoreButton = styled(ChooseBookButton)`
  border-style: none;
  text-align: left;
  
`