import { Divider } from '@mui/material';

import { ClickModal } from 'components/Header/SearchBar/';
import { CommonContainer } from 'components/Header/SearchBar/searchBar.styled';
import InputButton from 'components/Header/SearchBar/common/InputButton';
import ResetButton from 'components/Header/SearchBar/common/ResetButton';

import { usePeriodDispatch, usePeriodState } from 'hooks/usePeriod';

import { makeDateString, mockDate } from 'utils/util';

function Period({ clickModal, isClicked, searchBarFocusModal }: ClickModal) {
  const { resetDate } = usePeriodDispatch();
  const onClickEvent = (e: React.MouseEvent<HTMLElement>) => resetDate();

  return (
    <>
      <CheckIn
        clickModal={clickModal}
        isClicked={isClicked}
        searchBarFocusModal={searchBarFocusModal}
        onClickEvent={onClickEvent}
      />
      {searchBarFocusModal === '' && <Divider orientation="vertical" sx={{ height: '60%' }} />}
      <CheckOut
        clickModal={clickModal}
        isClicked={isClicked}
        searchBarFocusModal={searchBarFocusModal}
        onClickEvent={onClickEvent}
      />
    </>
  );
}

function CheckIn({ clickModal, isClicked, searchBarFocusModal, onClickEvent }: ClickModal) {
  const checkinDate = usePeriodState().checkIn;

  const checkInString =
    checkinDate.getTime() === mockDate.getTime() ? '날짜 입력' : makeDateString(checkinDate);

  const COMPONENT_INFO = {
    id: 'CHECK_IN',
    title: '체크인',
    inputText: checkInString,
    ariaLabel: '체크인 날짜 입력 버튼',
    resetButtonLabel: '날짜 입력 취소 버튼',
  };

  return (
    <CommonContainer
      isClicked={isClicked}
      searchBarFocusModal={searchBarFocusModal}
      id={COMPONENT_INFO.id}
    >
      <InputButton
        clickModal={clickModal}
        buttonInfo={COMPONENT_INFO}
        styleOptions={{ paddingLeft: '24px' }}
      />
      {checkInString !== '날짜 입력' && (
        <ResetButton ariaLabel={COMPONENT_INFO.resetButtonLabel} onClickEvent={onClickEvent} />
      )}
    </CommonContainer>
  );
}

function CheckOut({ clickModal, isClicked, searchBarFocusModal, onClickEvent }: ClickModal) {
  const checkOutDate = usePeriodState().checkOut;

  const checkOutString =
    checkOutDate.getTime() === mockDate.getTime() ? '날짜 입력' : makeDateString(checkOutDate);

  const COMPONENT_INFO = {
    id: 'CHECK_OUT',
    title: '체크아웃',
    inputText: checkOutString,
    ariaLabel: '체크아웃 날짜 입력 버튼',
    resetButtonLabel: '날짜 입력 취소 버튼',
  };

  return (
    <CommonContainer
      isClicked={isClicked}
      searchBarFocusModal={searchBarFocusModal}
      id={COMPONENT_INFO.id}
    >
      <InputButton clickModal={clickModal} buttonInfo={COMPONENT_INFO} />
      {checkOutString !== '날짜 입력' && (
        <ResetButton ariaLabel={COMPONENT_INFO.resetButtonLabel} onClickEvent={onClickEvent} />
      )}
    </CommonContainer>
  );
}

export default Period;
