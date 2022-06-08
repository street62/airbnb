import {
  SearchButton as SearchButtonContainer,
  StyledSearchIcon,
} from 'components/Header/SearchBar/searchBar.styled';

import { useModal } from 'hooks/useModal';
import { usePeriodDispatch, usePeriodState } from 'hooks/usePeriod';

import { mockDate } from 'utils/util';

function SearchButton() {
  const { searchBarFocusModal, closeModal } = useModal();
  const { checkIn, checkOut } = usePeriodState();
  const { setCheckIn, setCheckOut } = usePeriodDispatch();

  const isCheckInState = checkIn.getTime() === mockDate.getTime();
  const isCheckOutState = checkOut.getTime() === mockDate.getTime();

  const handleCheckInOutDay = () => {
    if (isCheckOutState && !isCheckInState) {
      setCheckOut(new Date(checkIn.getFullYear(), checkIn.getMonth(), checkIn.getDate() + 1));
    } else if (!isCheckOutState && isCheckInState) {
      setCheckIn(new Date(checkOut.getFullYear(), checkOut.getMonth(), checkOut.getDate() - 1));
    }
  };

  const handleClickResultButton = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleCheckInOutDay();
    closeModal();
  };

  return (
    <SearchButtonContainer
      to="/result"
      aria-label="결과 찾기 버튼"
      onClick={handleClickResultButton}
    >
      <StyledSearchIcon />
      {searchBarFocusModal !== '' && <span>검색</span>}
    </SearchButtonContainer>
  );
}

export default SearchButton;
