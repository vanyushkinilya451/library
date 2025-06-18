import styled from "styled-components"

type SearchBarProps = {
  search: string,
  handleSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder: string,
  openModal: () => void,
  closeModal: () => void
}
export const SearchBar = ({ search, handleSearchValue, placeholder, openModal, closeModal }: SearchBarProps) => {

  return <StyledSearchBar
    placeholder={placeholder}
    value={search}
    onChange={handleSearchValue}
    onFocus={openModal}
    onBlur={closeModal}
  />
}

const StyledSearchBar = styled.input`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  padding: 10px 10px 10px 35px;
  outline: none;
`