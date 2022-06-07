import { useContext } from 'react';
import {
  SearchButton as SearchButtonContainer,
  StyledSearchIcon,
} from 'components/Header/SearchBar/searchBar.styled';
import { ModalContext } from 'contexts/ModalContext';

function SearchButton() {
  const { focusModal } = useContext(ModalContext);

  return (
    <SearchButtonContainer to="/result" aria-label="결과 찾기 버튼">
      <StyledSearchIcon />
      {focusModal !== '' && <span>검색</span>}
    </SearchButtonContainer>
  );
}

export default SearchButton;
