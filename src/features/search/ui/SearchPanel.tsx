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
    authors,
  } = useSearch({
    debouncedDelay: 500,
  });
  const { isModalOpen, openModal, closeModal } = useModal();

  console.log(authors);

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
      {(books || authors) && isModalOpen && (
        <SearchResults
          books={books || []}
          authors={authors || []}
        />
      )}
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
  fill: var(--black);
  opacity: 0.4;
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
  min-width: 200px;
  width: 100%;
  height: 100%;
  border: 1px solid var(--black);
  border-radius: 8px;
  font-size: 0.9rem;
  padding: 8px 12px 8px 40px;
  outline: none;
  background: var(--white);
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);

  &:focus {
    border-color: var(--accent-blue);
    box-shadow: var(--shadow-search);
    background: white;
  }

  &:focus + ${SearchIcon} {
    fill: var(--accent-blue);
  }

  &::placeholder {
    color: var(--black);
    opacity: 0.5;
  }
`;
