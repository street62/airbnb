import { Divider } from '@mui/material';
import {
  CommonContainer,
  CommonButton,
  Label,
  SelectedOption,
  StyledCrossIcon,
} from 'components/Header/SearchBar/searchBar.styled';
import { ClickModal } from '.';

function Period({ clickModal, isClicked, focusModal }: ClickModal) {
  return (
    <>
      <CheckIn clickModal={clickModal} isClicked={isClicked} focusModal={focusModal} />
      <Divider orientation="vertical" sx={{ height: '60%' }} />
      <CheckOut clickModal={clickModal} isClicked={isClicked} focusModal={focusModal} />
    </>
  );
}

function CheckIn({ clickModal, isClicked, focusModal }: ClickModal) {
  const FILTER_ID = 'CHECK_IN';

  return (
    <CommonContainer isClicked={isClicked} focusModal={focusModal} id={FILTER_ID}>
      <CommonButton
        onClick={clickModal}
        aria-label="체크인 날짜 입력 버튼"
        style={{ paddingLeft: '24px' }}
        id={FILTER_ID}
      >
        <Label>체크인</Label>
        <SelectedOption>날짜 입력</SelectedOption>
      </CommonButton>
      <button type="button" aria-label="날짜 입력 취소 버튼">
        <StyledCrossIcon />
      </button>
    </CommonContainer>
  );
}

function CheckOut({ clickModal, isClicked, focusModal }: ClickModal) {
  const FILTER_ID = 'CHECK_OUT';

  return (
    <CommonContainer isClicked={isClicked} focusModal={focusModal} id={FILTER_ID}>
      <CommonButton onClick={clickModal} aria-label="체크아웃 날짜 입력 버튼" id={FILTER_ID}>
        <Label>체크아웃</Label>
        <SelectedOption>날짜 입력</SelectedOption>
      </CommonButton>
      <button type="button" aria-label="날짜 입력 취소 버튼">
        <StyledCrossIcon />
      </button>
    </CommonContainer>
  );
}

export default Period;
