import { useContext, useEffect } from 'react';
import {
  SearchButton as SearchButtonContainer,
  StyledSearchIcon,
} from 'components/Header/SearchBar/searchBar.styled';
import { ModalContext } from 'contexts/ModalContext';
import { usePeriodDispatch, usePeriodState } from 'contexts/periodContext';
import { makeDateString, mockDate } from 'utils/util';

function SearchButton() {
  const { focusModal } = useContext(ModalContext);
  const { checkIn, checkOut } = usePeriodState();
  const { setCheckIn, setCheckOut, setText } = usePeriodDispatch();
  const isCheckInState = checkIn.getTime() === mockDate.getTime();
  const isCheckOutState = checkOut.getTime() === mockDate.getTime();

  function handleCheckInOutDay() {
    if (isCheckOutState && !isCheckInState) {
      setCheckOut(new Date(checkIn.getFullYear(), checkIn.getMonth(), checkIn.getDate() + 1));
    } else if (!isCheckOutState && isCheckInState) {
      setCheckIn(new Date(checkOut.getFullYear(), checkOut.getMonth(), checkOut.getDate() - 1));
    }
  }

  return (
    <SearchButtonContainer
      to="/result"
      aria-label="결과 찾기 버튼"
      onClick={() => {
        handleCheckInOutDay();
      }}
    >
      <StyledSearchIcon />
      {focusModal !== '' && <span>검색</span>}
    </SearchButtonContainer>
  );
}

export default SearchButton;
