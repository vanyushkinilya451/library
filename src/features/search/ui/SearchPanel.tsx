import { SearchSvg } from "shared/assets";
import { st, useModal } from "shared/lib";
import { styled } from "styled-components";
import { useSearch } from "../api/useSearch";
import { SearchResults } from "./SearchResults";

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
      {(books || authors) && isModalOpen && (
        <SearchResults books={books || []} authors={authors || []} />
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
  fill: ${st("colors", "textPrimary")};
  opacity: 0.4;
  z-index: 2;
  transition: ${st("transitions", "colors")};
`;

const Container = styled.div`
  position: relative;
  width: 40%;
  margin: 0 auto;
  height: 36px;

  @media (max-width: ${st("breakpoints", "md")}) {
    font-size: ${st("fontSizes", "sm")};
    margin: 0 10px;
  }

  @media (max-width: ${st("breakpoints", "sm")}) {
    width: 100%;
  }
`;

const SearchBar = styled.input`
  min-width: 200px;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: ${st("borderRadius", "md")};
  font-size: ${st("fontSizes", "md")};
  padding: 8px 12px 8px 40px;
  outline: none;
  color: ${st("colors", "textPrimary")};
  background: ${st("colors", "background")};
  transition: ${st("transitions", "colors")};
  box-shadow: ${st("shadows", "card")};

  &:focus {
    border-color: ${st("colors", "primary")};
    box-shadow: ${st("shadows", "hoverLift")};
    background: ${st("colors", "background")};
  }

  &:focus + ${SearchIcon} {
    fill: ${st("colors", "primary")};
  }

  &::placeholder {
    color: ${st("colors", "textPrimary")};
  }
`;
