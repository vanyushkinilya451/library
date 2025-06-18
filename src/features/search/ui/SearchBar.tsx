import styled from "styled-components";

type SearchBarProps = {
  search: string;
  placeholder: string;
  handleSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ search, handleSearchValue, placeholder }: SearchBarProps) => {
  return (
    <StyledSearchBar
      placeholder={placeholder}
      onChange={handleSearchValue}
      value={search}
    />
  )
}

const StyledSearchBar = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 5px;
  outline: none;
  font-size: 1rem;
`