import { Divider } from '@mui/material';
import { CommonContainer } from 'components/Header/SearchBar/searchBar.styled';
import { usePeriodState } from 'contexts/periodContext';
import { makeDateString, mockDate } from 'utils/util';
import { ClickModal } from '.';
import InputButton from './common/InputButton';
import ResetButton from './common/ResetButton';

function Period({ clickModal, isClicked, focusModal }: ClickModal) {
  return (
    <>
      <CheckIn clickModal={clickModal} isClicked={isClicked} focusModal={focusModal} />
      {focusModal === '' && <Divider orientation="vertical" sx={{ height: '60%' }} />}
      <CheckOut clickModal={clickModal} isClicked={isClicked} focusModal={focusModal} />
    </>
  );
}

function CheckIn({ clickModal, isClicked, focusModal }: ClickModal) {
  const checkinDate = usePeriodState().checkIn;
  const checkInString =
    checkinDate.getTime() === mockDate.getTime() ? '날짜 입력' : makeDateString(checkinDate);
  const FILTER_ID = 'CHECK_IN';
  const BUTTON_INFO = {
    id: FILTER_ID,
    title: '체크인',
    inputText: checkInString,
    ariaLabel: '체크인 날짜 입력 버튼',
  };
  const RESET_BUTTON_ARIA_LABEL = '날짜 입력 취소 버튼';

  return (
    <CommonContainer isClicked={isClicked} focusModal={focusModal} id={FILTER_ID}>
      <InputButton
        clickModal={clickModal}
        buttonInfo={BUTTON_INFO}
        styleOptions={{ paddingLeft: '24px' }}
      />
      {/* {isClicked && focusModal === FILTER_ID && <ResetButton ariaLabel={RESET_BUTTON_ARIA_LABEL} />} */}
    </CommonContainer>
  );
}

function CheckOut({ clickModal, isClicked, focusModal }: ClickModal) {
  const FILTER_ID = 'CHECK_OUT';
  const checkOutDate = usePeriodState().checkOut;
  const checkOutString =
    checkOutDate.getTime() === mockDate.getTime() ? '날짜 입력' : makeDateString(checkOutDate);
  const BUTTON_INFO = {
    id: FILTER_ID,
    title: '체크아웃',
    inputText: checkOutString,
    ariaLabel: '체크아웃 날짜 입력 버튼',
  };
  const RESET_BUTTON_ARIA_LABEL = '날짜 입력 취소 버튼';

  return (
    <CommonContainer isClicked={isClicked} focusModal={focusModal} id={FILTER_ID}>
      <InputButton clickModal={clickModal} buttonInfo={BUTTON_INFO} />
      {/* {isClicked && focusModal === FILTER_ID && <ResetButton ariaLabel={RESET_BUTTON_ARIA_LABEL} />} */}
    </CommonContainer>
  );
}

export default Period;
