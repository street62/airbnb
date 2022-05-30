import {
  SearchButton as SearchButtonContainer,
  StyledSearchIcon,
} from 'components/Header/SearchBar/searchBar.styled';

function SearchButton() {
  return (
    <SearchButtonContainer aria-label="결과 찾기 버튼">
      <StyledSearchIcon />
      <span>검색</span>
    </SearchButtonContainer>
  );
}

export default SearchButton;
