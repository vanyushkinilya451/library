import { SearchResults, useSearch } from "features/search";
import { SearchBar } from "features/search/ui/SearchBar";
import SearchSvg from "shared/assets/icons/search.svg";
import { useModal } from "shared/index";
import styled from "styled-components";



export const BookSearchPanel = () => {
  const { handleSearchValue, search, books } = useSearch({ limit: 5, debouncedDelay: 500 });
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <SearchPanel>
      <SearchBar
        placeholder="Поиск книг..."
        search={search}
        handleSearchValue={handleSearchValue}
        openModal={openModal}
        closeModal={closeModal}
      />
      <StyledIcon />
      {books && isModalOpen &&
        <SearchResults books={books}
        />}
    </SearchPanel>

  )
}
const StyledIcon = styled(SearchSvg)`
  position: absolute;
  height: 20px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 7px;
  width: min-content;
  fill: rgba(0, 0, 0, 0.3);
`
const SearchPanel = styled.div`
  position: relative;
  width: 100%;
  margin: 0 30px;
`

