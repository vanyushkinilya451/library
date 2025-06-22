import Container from "react-bootstrap/Container";
import { Shelf } from "widgets/Shelf";
import { useBooks } from "widgets/Shelf/api/useBooks";
import { api } from "../api/paths";

export const HomePage = () => {
  const currentYear = new Date().getFullYear();
  const limit = 20;
  const { books: newByYear, isLoading: newByYearLoader, elementRef: newByYearRef } = useBooks({ api: `${api.newByYear}${currentYear}`, limit: limit });
  const { books: fantasy, isLoading: fantasyLoader, elementRef: fantasyRef } = useBooks({ api: api.fantasy, limit: limit });
  const { books: scifi, isLoading: scifiLoader, elementRef: scifiRef } = useBooks({ api: api.scifi, limit: limit });
  const { books: selfhelp, isLoading: selfhelpLoader, elementRef: selfhelpRef } = useBooks({ api: api.selfhelp, limit: limit });
  const { books: classics, isLoading: classicsLoader, elementRef: classicsRef } = useBooks({ api: api.classics, limit: limit });

  return (
    <Container fluid className="section">
      <Shelf ref={newByYearRef} isLoadingBooks={newByYearLoader} shelfTitle="Лучшие за год" books={newByYear} />
      <Shelf ref={fantasyRef} isLoadingBooks={fantasyLoader} shelfTitle="Популярное фэнтези" books={fantasy} />
      <Shelf ref={scifiRef} isLoadingBooks={scifiLoader} shelfTitle="Научная фантастика" books={scifi} />
      <Shelf ref={selfhelpRef} isLoadingBooks={selfhelpLoader} shelfTitle="Саморазвитие" books={selfhelp} />
      <Shelf ref={classicsRef} isLoadingBooks={classicsLoader} shelfTitle="Вечная классика" books={classics} />
    </Container>
  )
}

