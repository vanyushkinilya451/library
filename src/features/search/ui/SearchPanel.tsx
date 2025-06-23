import { SearchSvg } from "shared/assets";
import { useModal } from "shared/lib";
import styled from "styled-components";
import { useSearch } from "./../api/useSearch";
import { SearchResults } from './SearchResults';

export const SearchPanel = () => {
  const { handleSearchValue, search, books } = useSearch({ limit: 5, debouncedDelay: 500 });
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <Container>
      <SearchIcon />
      <SearchBar
        placeholder="Поиск книг..."
        value={search}
        onChange={handleSearchValue}
        onFocus={openModal}
        onBlur={closeModal}
      />
      {books && isModalOpen &&
        <SearchResults books={books}
        />}
    </Container>
  )
}

const SearchIcon = styled(SearchSvg)`
  position: absolute;
  height: 15px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10px;
  width: min-content;
  fill: rgba(0, 0, 0, 0.3);
`
const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 30px;
  height: 30px;
`
const SearchBar = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  font-size: 0.9rem;
padding: 10px 10px 10px 35px;
  outline: none;
`