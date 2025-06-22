import Container from "react-bootstrap/Container";
import { Shelf } from "widgets/Shelf";
import { useBooks } from "widgets/Shelf/api/useBooks";


export const HomePage = () => {
  const currentYear = new Date().getFullYear();
  const limit = 20;
  const { books: newByYear, isLoading: newByYearLoader } = useBooks({ api: `https://openlibrary.org/search.json?q=first_publish_year:${currentYear}`, limit: limit });
  const { books: fantasy, isLoading: fantasyLoader } = useBooks({ api: 'https://openlibrary.org/search.json?q=subject:fantasy AND first_publish_year:[2000 TO *]&sort=editions', limit: limit });
  const { books: scifi, isLoading: scifiLoader } = useBooks({ api: 'https://openlibrary.org/search.json?q=subject:"science fiction" AND first_publish_year:[2010 TO *]&sort=editions', limit: limit });
  const { books: selfhelp, isLoading: selfhelpLoader } = useBooks({ api: `https://openlibrary.org/search.json?q=subject:"self-help"&sort=editions`, limit: limit });
  const { books: classics, isLoading: classicsLoader } = useBooks({ api: 'https://openlibrary.org/search.json?q=first_publish_year:[* TO 1900]&sort=editions', limit: limit });

  return (
    <Container fluid className="section">
      <Shelf isLoading={newByYearLoader} shelfTitle="Лучшие за год" books={newByYear} />
      <Shelf isLoading={fantasyLoader} shelfTitle="Популярное фэнтези" books={fantasy} />
      <Shelf isLoading={scifiLoader} shelfTitle="Научная фантастика" books={scifi} />
      <Shelf isLoading={selfhelpLoader} shelfTitle="Саморазвитие" books={selfhelp} />
      <Shelf isLoading={classicsLoader} shelfTitle="Вечная классика" books={classics} />
    </Container>
  )
}

