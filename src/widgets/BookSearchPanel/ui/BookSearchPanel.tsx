import { SearchResults, useSearch } from "features/search";
import { SearchBar } from "features/search/ui/SearchBar";
import { useModal } from "shared/index";
import styled from "styled-components";



export const BookSearchPanel = () => {
  const { handleSearchValue, search, books } = useSearch({ limit: 5, debouncedDelay: 500 });
  const { isModalOpen, closeModal, openModal } = useModal();
  return (
    <SearchPanel>
      <SearchBar
        placeholder="Поиск книг..."
        search={search}
        handleSearchValue={handleSearchValue}
        openModal={openModal}
        closeModal={closeModal}
      />
      {books && isModalOpen &&
        <SearchResults books={books}
        />}
    </SearchPanel>

  )
}

const SearchPanel = styled.div`
  position: relative;
  width: 100%;
  margin: 0 30px;
`

