import { useContext } from 'react';
import {
  SearchButton as SearchButtonContainer,
  StyledSearchIcon,
} from 'components/Header/SearchBar/searchBar.styled';
import { ModalContext } from 'contexts/ModalContext';
import { usePeriodDispatch, usePeriodState } from 'contexts/periodContext';
import { makeDateString } from 'utils/util';

function SearchButton() {
  const { focusModal } = useContext(ModalContext);
  const { checkIn, checkOut } = usePeriodState();
  const { setText } = usePeriodDispatch();

  // 날짜를 아무것도 클릭안했을때 mockdata가 안나오도록 수정 -> 기본값으로
  // 체크인만 선택했을때 체크아웃 날짜는 다음날이 되도록
  // 체크아웃만 선택했을때 체크인 날짜는 전날이 되도록
  const [checkInString, checkOutString] = [makeDateString(checkIn), makeDateString(checkOut)];
  const periodString = `${checkInString} ~ ${checkOutString}`;

  const ClickHandle = (e: React.MouseEvent<HTMLElement>) => setText(periodString);

  return (
    <SearchButtonContainer to="/result" aria-label="결과 찾기 버튼" onClick={ClickHandle}>
      <StyledSearchIcon />
      {focusModal !== '' && <span>검색</span>}
    </SearchButtonContainer>
  );
}

export default SearchButton;
