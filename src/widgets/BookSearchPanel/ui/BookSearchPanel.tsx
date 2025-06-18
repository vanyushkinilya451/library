import { SearchBar, SearchResults, useSearch } from "features/search";
import styled from "styled-components";



export const BookSearchPanel = () => {
  const { handleSearchValue, search, books } = useSearch({ limit: 5, debouncedDelay: 500 });
  return (
    <SearchPanel>
      <SearchBar placeholder="Поиск книг..." search={search} handleSearchValue={handleSearchValue} />
      {books && <SearchResults books={books} />}
    </SearchPanel>

  )
}

const SearchPanel = styled.div`
  position: relative;
  width: 100%;
  margin: 0 30px;
`