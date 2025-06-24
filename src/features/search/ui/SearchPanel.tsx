import { SearchSvg } from 'shared/assets';
import { useModal } from 'shared/lib';
import styled from 'styled-components';
import { useSearch } from './../api/useSearch';
import { SearchResults } from './SearchResults';

export const SearchPanel = () => {
  const {
    handleSearchValue,
    search,
    filteredBooks: books,
  } = useSearch({
    debouncedDelay: 500,
  });
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <Container>
      <SearchIcon />
      <SearchBar
        placeholder='Поиск книг...'
        value={search}
        onChange={handleSearchValue}
        onFocus={openModal}
        onBlur={closeModal}
      />
      {books && isModalOpen && <SearchResults books={books} />}
    </Container>
  );
};

const SearchIcon = styled(SearchSvg)`
  position: absolute;
  height: 16px;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: min-content;
  fill: rgba(0, 0, 0, 0.4);
  z-index: 2;
  transition: fill 0.2s ease;
`;

const Container = styled.div`
  position: relative;
  width: 400px;
  margin: 0 auto;
  height: 36px;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  font-size: 0.9rem;
  padding: 8px 12px 8px 40px;
  outline: none;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:focus {
    border-color: #667eea;
    box-shadow: 0 2px 12px rgba(102, 126, 234, 0.2);
    background: white;
  }

  &:focus + ${SearchIcon} {
    fill: #667eea;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;
